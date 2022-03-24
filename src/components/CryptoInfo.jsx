import React from 'react';
import { useGetCryptoDetailsQuery } from '../services/cryptoApi';
import { Row, Typography } from 'antd';
import HTMLReactParser from 'html-react-parser';

const { Text } = Typography;

const CryptoInfo = ({ coinId }) => {
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const cryptoDetails = data?.data?.coin;
  console.log('cryptoDetails=', cryptoDetails);
  if (isFetching) {
    return 'Loading....';
  }
  return (
    <>
      <Row className='coin-desc'>
        <Text> {HTMLReactParser(cryptoDetails.description)}</Text>
      </Row>
    </>
  );
};

export default CryptoInfo;
