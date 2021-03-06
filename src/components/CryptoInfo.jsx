import React from 'react';
import { useGetCryptoDetailsQuery } from '../services/cryptoApi';
import { Row, Typography } from 'antd';
import HTMLReactParser from 'html-react-parser';
import { Loader } from './';

const { Text } = Typography;

const CryptoInfo = ({ coinId }) => {
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const cryptoDetails = data?.data?.coin;

  if (isFetching) {
    return <Loader/>;
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
