import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Viewsubcat = () => {
    let [subcatlist,setsubcatlist] = useState([]);
    // let [catlist,setcatlist] = useState([])
    useEffect(()=>{
        async function allsubcat(){
            let data = await axios.get("http://localhost:8000/api/v1/product/allsubcat"
          )
           let subcatdata=[];
            data.data.map((item)=>{
              subcatdata.push({
                
                    key: item._id,
                    name: item.name,
                    status : item.status,
                    categoryid : item.categoryId
            
              })
            })
            setsubcatlist(subcatdata);
           }
           allsubcat()
    },[])
  //   useEffect(()=>{
  //     async function allcat(){
  //      let data = await axios.get("http://localhost:8000/api/v1/product/allcat"
  //    )
  //     let catdata=[];
  //      data.data.map((item)=>{
  //        catdata.push({
  //          value:item._id,
  //          label:item.name,
  //        })
  //      })
  //      setcatlist(catdata);
  //     }
  //     allcat()
  //  },[])
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
            title: 'CategoryId',
            dataIndex: 'categoryid',
            key: 'categoryId',
          },
      ];
      

  return (
    <>
       <Table dataSource={subcatlist} columns={columns} />;
    </>
  )
}

export default Viewsubcat;
