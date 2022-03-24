import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { Col, Row, Typography } from 'antd';
Chart.register(...registerables);

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimeStamp = [];

  coinHistory?.data?.history?.map(({ price, timestamp }) => {
    coinPrice.unshift(price);
    coinTimeStamp.unshift(new Date(timestamp * 1000).toLocaleDateString('he-IL'));
  });
  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: 'Price is USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd'
      }
    ]
  };

  const options = {
    scales: {
      y: {
        ticks: {
          beginAtZero: true,

        }
      }
    }
  }
  return (
    <>
      <Row className='chart-header'>
        <Title className='chart-title' level={2}>
          {coinName} Price Chart
        </Title>
        <Col className='price-container'>
          <Title level={5} className='price-change'>
            {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className='current-price'>
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
