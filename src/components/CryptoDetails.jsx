import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Typography } from 'antd';
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery
} from '../services/cryptoApi';
import { Loader, LineChart } from './';
import CryptoDetailsDesc from './CryptoDetailsDesc';
import CryptoValueStats from './CryptoValueStats';
import CryptoDetailsHeading from './CryptoDetailsHeading';
const { Title } = Typography;

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState('7d');
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod
  });
  const cryptoDetails = data?.data?.coin;

  if (isFetching) {
    return <Loader />;
  }
  return (
    <>
      <Title level={1}>Crypto Details</Title>
      <Col className='coin-detail-container'>
        <CryptoDetailsHeading
          cryptoDetails={cryptoDetails}
          setTimePeriod={setTimePeriod}
        />
        <LineChart
          coinHistory={coinHistory}
          currentPrice={millify(cryptoDetails.price)}
          coinName={cryptoDetails.name}
        />
        <CryptoValueStats cryptoDetails={cryptoDetails} />
        <CryptoDetailsDesc cryptoDetails={cryptoDetails} />
      </Col>
    </>
  );
};

export default CryptoDetails;
