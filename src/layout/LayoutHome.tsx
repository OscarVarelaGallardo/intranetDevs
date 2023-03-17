import React, { useState } from 'react';
import { AppstoreOutlined, HomeOutlined, PhoneOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Outlet } from 'react-router-dom';


const items: MenuProps['items'] = [
  {
    label: 'Escotel Asistencias',
    key: 'setting',
    icon: <PhoneOutlined />  ,

  },
  {
    label: 'Inicio',
    key: 'mail',
    icon: <HomeOutlined />,
  },
  {
    label: 'Avisos',
    key: 'avisos',
    icon: <AppstoreOutlined />,
  
  },{
  label: 'Colaboradores',
  key: 'colaboradores',
  icon: <AppstoreOutlined />,
  },
  {
    label: 'Nosotros',
    key: 'nosotros',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Soporte Ti',
    key: 'soporte',
    icon: <AppstoreOutlined />,

  },
  {
    label: 'Contacto',
    key: 'app',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Recursos Humanos',
    key: 'recursos-humanos',
    icon: <AppstoreOutlined />,
  }
  
];
const LayoutHome: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };


  return (
  <>
  <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}/>
  <Outlet />
</>
  )
};
export default LayoutHome;