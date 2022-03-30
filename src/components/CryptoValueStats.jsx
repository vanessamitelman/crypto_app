import React from 'react';
import { Col, Row, Typography, Select } from 'antd';
import { stats } from '../data/stats';
import { genericStats } from '../data/genericStats';
const { Title, Text } = Typography;

const CryptoValueStats = ({ cryptoDetails }) => {
  return (
    <Col className='stats-container'>
      <Col className='coin-value-statistics'>
        <Col className='coin-value-statistics-heading'>
          <Title level={3} className='coin-details-heading'>
            {cryptoDetails.name} Value Statistics
          </Title>
          <p>An overview showing the stats of {cryptoDetails.name}</p>
        </Col>
        {stats(cryptoDetails).map(({ icon, title, value }, i) => (
          <Col className='coin-stats' key={i}>
            <Col className='coin-stats-name'>
              <Text>{icon}</Text>
              <Text>{title}</Text>
            </Col>
            <Text className='stats'>{value}</Text>
          </Col>
        ))}
      </Col>
      <Col className='other-stats-info'>
        <Col className='coin-value-statistics-heading'>
          <Title level={3} className='coin-details-heading'>
            Other Statistics
          </Title>
          <p>An overview showing the stats of all cryptocurrencies</p>
        </Col>
        {genericStats(cryptoDetails).map(({ icon, title, value }, i) => (
          <Col className='coin-stats' key={i}>
            <Col className='coin-stats-name'>
              <Text>{icon}</Text>
              <Text>{title}</Text>
            </Col>
            <Text className='stats'>{value}</Text>
          </Col>
        ))}
      </Col>
    </Col>
  );
};

export default CryptoValueStats;
