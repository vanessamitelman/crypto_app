import millify from 'millify';
import {
  DollarCircleOutlined,
  TrophyOutlined,
  NumberOutlined,
  ThunderboltOutlined
} from '@ant-design/icons';

export const stats = (cryptoDetails) => [
  {
    title: 'Price to USD',
    value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
    icon: <DollarCircleOutlined />
  },
  { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
  {
    title: '24h Volume',
    value: `$ ${
      cryptoDetails?.['24hVolume'] && millify(cryptoDetails?.['24hVolume'])
    }`,
    icon: <ThunderboltOutlined />
  },
  {
    title: 'Market Cap',
    value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`,
    icon: <DollarCircleOutlined />
  },
  {
    title: 'All-time-high(daily avg.)',
    value: `$ ${
      cryptoDetails?.allTimeHigh?.price &&
      millify(cryptoDetails?.allTimeHigh?.price)
    }`,
    icon: <TrophyOutlined />
  }
];
