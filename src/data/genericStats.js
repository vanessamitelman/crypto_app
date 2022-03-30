import millify from 'millify';
import {
    MoneyCollectOutlined,
    FundOutlined,
    ExclamationCircleOutlined,
    StopOutlined,
    CheckOutlined,

  } from '@ant-design/icons';


export const genericStats = (cryptoDetails)=>[
    {
      title: 'Number Of Markets',
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />
    },
    {
      title: 'Number Of Exchanges',
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />
    },
    {
      title: 'Approved Supply',
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />
    },
    {
      title: 'Total Supply',
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <ExclamationCircleOutlined />
    },
    {
      title: 'Circulating Supply',
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <ExclamationCircleOutlined />
    }
  ];