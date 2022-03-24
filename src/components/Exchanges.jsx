import React from 'react';
import { Row, Col, Typography, Avatar, Collapse } from 'antd';
import millify from 'millify';
import { useGetExchangesQuery } from '../services/cryptoApi';
import { Loader, CryptoInfo } from './';

const { Title, Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data: exchanges, isFetching } = useGetExchangesQuery();

  if (isFetching) {
    return <Loader />;
  }
  return (
    <>
     <Title level={1}> Exchanges</Title>
      <Row>
        <Col span={10}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={4}># of Markets</Col>
        <Col span={4}>Price</Col>
      </Row>
      <Row>
        <Col span={24}>
          {exchanges?.data?.coins.map((exchange, i) => (
            <Collapse key={i}>
              <Panel
                showArrow={false}
                header={
                  <>
                    <Col span={10}>
                      <Text>{exchange.rank}. </Text>
                      <Avatar
                        src={exchange.iconUrl}
                        size='medium'
                        className='exchange-image'
                      />
                      <Text>{exchange.name}</Text>
                    </Col>
                    <Col span={6}>
                      <Text>{millify(exchange['24hVolume'])}</Text>
                    </Col>
                    <Col span={4}>
                      <Text>{millify(exchange.numberOfMarkets)}</Text>
                    </Col>
                    <Col span={4}>
                      <Text>${millify(exchange.price)}</Text>
                    </Col>
                  </>
                }
              >
                <CryptoInfo coinId={exchange.uuid} />
              </Panel>
            </Collapse>
          ))}
        </Col>
      </Row>
    </>
  );
};

export default Exchanges;
