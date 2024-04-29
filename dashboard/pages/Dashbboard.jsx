import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu ,Col, Row } from 'antd';
import { Outlet  , useNavigate} from 'react-router-dom';
import { useSelector } from "react-redux"
const Dashbboard = () => {
    let navigate = useNavigate();
    function getItem(label, key, icon, children, type) {
        return {
          key,
          icon,
          children,
          label,
          type,
        };
      }
      let userInfo = useSelector((state) => state.user.value);
      const items = [
        userInfo.role != "User" &&
          getItem('Users', 'sub1', <MailOutlined />, [
            getItem('Add user', '1'),
            getItem('View user', '2'),
          ]),
          userInfo.role != "User" &&
          getItem('Product', 'sub2', <AppstoreOutlined />, [
            getItem('Add product', '3'),
            getItem('View product', '4'),
          ]),
          {
            type: 'divider',
          },
          userInfo.role != "User" &&
          getItem('Category', 'sub3', <SettingOutlined />, [
            getItem('Add category', '/dashboard/addcategory'),
            getItem('View category', '/dashboard/viewcategory'),
            getItem('Add subcategory', '/dashboard/addsubcategory'),
            getItem('View subcategory', '/dashboard/viewsubcategory'),
          ]),
          userInfo.role != "User" &&
          getItem('Discount', 'sub4', <SettingOutlined />, [
              getItem('Add discount', '9'),
              getItem('View discount', '10'),
            
            ]),
  
            userInfo.role == "User" &&
          getItem('My Profile', 'sub5', <SettingOutlined />, [
            getItem('Purchase details', '11'),
            getItem('Profile', '12'),
          
          ]),
  
      ];
      const onClick = (e) => {
        console.log('click ', e);
        navigate(e.key);
      };
    
  return (
   <>
  
    <Row>
      <Col span={5}>  
      <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
      </Col>
      <Col span={19}>
        <Outlet/>
      </Col>
    </Row>
   
   </>
  )
}

export default Dashbboard;
