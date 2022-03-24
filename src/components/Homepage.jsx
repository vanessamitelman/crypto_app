import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { News, Cryptocurrencies, Loader } from './';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  if (isFetching) {
    return <Loader />;
  }

  const globalStats = data?.data?.stats;
  return (
    <>
      <Title level={1} className='heading'>
        Cryptoverse
      </Title>
      <Title level={2} className='heading'>
        Global Crypto Stats
      </Title>
      <Row>
        <Col lg={12} md={24}>
          <Statistic
            title='Total Cryptocurrencies'
            value={millify(globalStats.total)}
          />
        </Col>
        <Col lg={12} md={24}>
          <Statistic
            title='Total Exchanges'
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col lg={12} md={24}>
          <Statistic
            title='Total Market Cap'
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col lg={12} md={24}>
          <Statistic
            title='Total 24h Volume'
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col lg={12} md={24}>
          <Statistic
            title='Total Markets'
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <Row className='home-heading-container' justify="space-between">
        <Col lg={12} md={12} sm={24}>
          <Title level={2} className='home-title'>
            Top Ten Cryptocurrencies in the world
          </Title>
        </Col>
        <Col lg={3} md={5} sm={24}>
          <Title level={3} className='show-more'>
            <Link to='/cryptocurrencies'>Show More</Link>
          </Title>
        </Col>
      </Row>
      <Cryptocurrencies simplified />
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>
          Latest Crypto News
        </Title>
        <Title level={3} className='show-more'>
          <Link to='/news'>Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
