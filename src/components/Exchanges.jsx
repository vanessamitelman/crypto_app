import React from 'react';
import { Row, Col, Typography, Avatar, Collapse } from 'antd';
import millify from 'millify';
import { useGetExchangesQuery } from '../services/cryptoApi';
import CryptoInfo from './CryptoInfo';

const { Title, Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data: exchanges, isFetching } = useGetExchangesQuery();

  if (isFetching) {
    return 'Loading....';
  }
  return (
    <>
      <Title level={1}>Exchanges</Title>
      <Row>
        <Col span={6}>
          <Title level={5}>Exchanges</Title>
        </Col>
        <Col span={6}>
          <Title level={5}>24h Trade Volume</Title>
        </Col>
        <Col span={6}>
          <Title level={5}>Number of Markets</Title>
        </Col>
        <Col span={6}>
          <Title level={5}>Price</Title>
        </Col>
      </Row>
      <Row>
        {exchanges?.data?.coins.map((exchange, i) => (
          <Col span={24}>
            <Collapse key={i} defaultActiveKey={['1']}>
              <Panel
                showArrow={false}
                header={
                  <>
                    <Col span={6}>
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
                    <Col span={6}>
                      <Text>{millify(exchange.numberOfMarkets)}</Text>
                    </Col>
                    <Col span={6}>
                      <Text>$ {millify(exchange.price)}</Text>
                    </Col>
                  </>
                }
              >
                <p>
                  {' '}
                  <CryptoInfo coinId={exchange.uuid} />
                </p>
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
