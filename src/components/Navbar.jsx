import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined
} from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    screenSize < 768 ? setActiveMenu(true) : setActiveMenu(false);
  }, [screenSize]);
  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src={icon} size='large' />
        <Typography.Title level={2} className='logo'>
          <Link to='/'>Cryptoverse</Link>
        </Typography.Title>
        <Button
          className='menu-control-container'
          onClick={() => setActiveMenu(!activeMenu)}
          style={{backgroundColor:'#001628'}}
        >
          <MenuOutlined
            style={{ fontSize: '24px', color: 'white' }}
            twoToneColor='#eb2f96'
          />
        </Button>
      </div>
      {!activeMenu && (
        <Menu theme='dark'>

            <Menu.Item key={1} icon={<HomeOutlined />}>
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key={2} icon={<FundOutlined />}>
              <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item key={3} icon={<MoneyCollectOutlined />}>
              <Link to='/exchanges'>Exchanges</Link>
            </Menu.Item>
            <Menu.Item key={4} icon={<BulbOutlined />}>
              <Link to='/news'>News</Link>
            </Menu.Item>

        </Menu>
      )}
    </div>
  );
};

export default Navbar;
