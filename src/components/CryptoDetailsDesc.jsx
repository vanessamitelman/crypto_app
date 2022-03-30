import React from 'react';
import HTMLReactParser from 'html-react-parser';
import { Col, Row, Typography, Select } from 'antd';
import { stats } from '../data/stats';
import { genericStats } from '../data/genericStats';
const { Title, Text } = Typography;

const CryptoDetailsDesc = ({ cryptoDetails }) => {
  return (
    <Col className='coin-desc-link'>
      <Row className='coin-desc'>
        <Title className='coin-details-heading' level={3}>
          What is {cryptoDetails.name}?
        </Title>
        {HTMLReactParser(cryptoDetails.description)}
      </Row>
      <Col className='coin-links'>
        <Title className='coin-details-heading' level={3}>
          {cryptoDetails.name} Links
        </Title>
        {cryptoDetails?.links?.map((link, i) => (
          <Row key={i} className='coin-link'>
            <Title className='link-name' level={5}>
              {link.type}
            </Title>
            <a href={link.url} rel='noreferrer' target='_blank'>
              {link.name}
            </a>
          </Row>
        ))}
      </Col>
    </Col>
  );
};

export default CryptoDetailsDesc;
