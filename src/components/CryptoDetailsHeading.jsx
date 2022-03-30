import React from 'react';
import { time } from '../data//time';
import { Col, Typography, Select } from 'antd';
const { Option } = Select;
const { Title } = Typography;

const CryptoDetailsHeading = ({ cryptoDetails, setTimePeriod }) => {
  return (
    <>
      <Col className='coin-heading-container'>
        <Title level={2} className='coin-name'>
          {cryptoDetails?.name} ({cryptoDetails?.symbol}) Price
        </Title>
        <p>
          {cryptoDetails.name} live price in US dollars. View value statistics,
          market cap and supply.
        </p>
      </Col>
      <Select
        defaultValue='7d'
        className='select-timeperiod'
        placeholder='Select Time Period'
        onChange={(value) => setTimePeriod(value)}
      >
        {time.map((date) => (
          <Option key={date}>{date}</Option>
        ))}
      </Select>
    </>
  );
};

export default CryptoDetailsHeading;
