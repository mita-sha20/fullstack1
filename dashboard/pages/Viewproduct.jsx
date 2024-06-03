
import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Viewproduct = () => {

    let [catlist,setcatlist] = useState([]);
    useEffect(()=>{
        async function allcat(){
            let data = await axios.get("http://localhost:8000/api/v1/product/allpro"
          )
           let catdata=[];
            data.data.map((item)=>{
              let details = item.description
              const oembedRegex = /<oembed[^>]*>/g;
  const oembedMatch = details?.match(oembedRegex);
  console.log("ashdi",oembedMatch);
  if (oembedMatch) {
    const oembedUrl = oembedMatch[0].match(/url="([^"]*)"/)[1];
    oembedUrl.replace("watch","embed");
    console.log("ki",oembedUrl.split("v=")[1].split("&")[0]);
    const iframeElement = `<iframe width="400" height="200" src="https://www.youtube.com/embed/${oembedUrl.split("v=")[1].split("&")[0]}" title="Ve Kamleya |Rocky Aur Rani Kii Prem Kahaani|Ranveer|Alia|Pritam|Shreya|Arijit Singh" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    details = details.replace(oembedRegex, iframeElement);
  }
              catdata.push({
                
                    key: item._id,
                    name: item.name,
                    description: details,
                    image: item.image
            
              })
            })
            setcatlist(catdata);
           }
           allcat()
    },[])
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
          render: (_, record) => (
          
           <div dangerouslySetInnerHTML={{__html: record.description}}></div>
 
           )
        },
        {
          title: 'Image',
          dataIndex: 'image',
          key: 'image',
          render: (_, record) => (
          
           <img width={50} src={`http://localhost:8000${record.image}`} />

          )}
        
      ];
      
  return (
    <>
    <Table dataSource={catlist} columns={columns} />;
    </>
  )
}

export default Viewproduct;
