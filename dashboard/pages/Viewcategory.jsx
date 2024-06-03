import { Table, Button, Modal, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Viewcategory = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialValues, setInitialvalues] = useState([]);
  let [catlist,setcatlist] = useState([]);
  let [refetch, setRefetch] = useState(false)
  const showModal = (record) => {
    setIsModalOpen(true);
    setInitialvalues(
      [{
        name:["name"],
        value: record.name
      }
      ]
    ) 
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  
  const onFinish = async(values) => {
    console.log(values);
    let data = await axios.post("http://localhost:8000/api/v1/product/editcategory",
    {
      oldname: initialValues[0].value,
      name : values.name,
    }
  );

  setRefetch(!refetch);
  setIsModalOpen(false);
  console.log(data)
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

    
    useEffect(()=>{
        async function allcat(){
            let data = await axios.get("http://localhost:8000/api/v1/product/allcat"
          )
           let catdata=[];
            data.data.map((item)=>{
              catdata.push({
                
                    key: item._id,
                    name: item.name,
                    status : item.status
            
              })
            })
            setcatlist(catdata);
           }
           allcat()
    },[refetch])
      
    let handleClick = async(record)=>{
     console.log(record);

     let data = await axios.post("http://localhost:8000/api/v1/product/approvecategory",{
      id: record.key,
      status : record.status
     })
     setRefetch(!refetch);
     console.log(data)
    };


    let handleDelete = async(id)=>{

      let data = await axios.delete(
        `http://localhost:8000/api/v1/product/deletecategory/${id}`
     
    )
    setRefetch(!refetch);
    console.log(data)
  }


      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
        },
        {
          title: 'Action',
          dataIndex: 'action',
          key: 'action',
          render: (_,record) => (
            <>
               <button onClick={()=>handleClick(record)}>{record.status == "waiting" ? "approve" : "reject"}</button>
               <button onClick={()=>handleDelete(record.key)}>delete</button>
               <Button type="primary" onClick={
                ()=>showModal(record)}>Edit</Button>
               <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form
    name="basic"
    fields={initialValues}
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Name"
      name="name"
      initialValue={record.name}
      rules={[
        {
          required: true,
          message: 'Please input your subcategoryname!',
        },
      ]}
    >
      <Input />
    </Form.Item>


    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Change
      </Button>
    </Form.Item>
  </Form>
      </Modal>
            </>
          ),
        },
        
      ];
       
  return (
    <>
       <Table dataSource={catlist} columns={columns} />;
    </>
  )
}

export default Viewcategory
