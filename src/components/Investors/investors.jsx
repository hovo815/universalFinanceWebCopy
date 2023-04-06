import './investors.css';

export default function Investors() {
  const investors = [
    {
      id: 1,
      src: 'https://web.archive.org/web/20220818140956im_/https://itech.finance/assets/img/sections/investors/sequoia.svg',
      link: 'https://exchange.biswap.org/#/swap?outputCurrency=0x098EfF3952177AF536FC97281961Bed2D5d8B2d3',
      text: '',
      url:"https://exchange.biswap.org/#/swap?outputCurrency=0x098EfF3952177AF536FC97281961Bed2D5d8B2d3",
    },
    {
      id: 2,
      src: 'https://web.archive.org/web/20220818140925im_/https://itech.finance/assets/img/sections/investors/founder.svg',
      link: 'https://exchange.biswap.org/#/swap?outputCurrency=0x098EfF3952177AF536FC97281961Bed2D5d8B2d3',
      text: '',
      url:"https://exchange.biswap.org/#/swap?outputCurrency=0x098EfF3952177AF536FC97281961Bed2D5d8B2d3",
    },
    {
      id: 3,
      src: 'https://web.archive.org/web/20220818140921im_/https://itech.finance/assets/img/sections/investors/coinbaseventure.svg',
      link: 'https://exchange.biswap.org/#/swap?outputCurrency=0x098EfF3952177AF536FC97281961Bed2D5d8B2d3',
      text: '',
      url:"https://exchange.biswap.org/#/swap?outputCurrency=0x098EfF3952177AF536FC97281961Bed2D5d8B2d3",
    },
    {
      id: 4,
      src: 'https://web.archive.org/web/20220818140930im_/https://itech.finance/assets/img/sections/investors/polychain.svg',
      link: 'https://exchange.biswap.org/#/swap?outputCurrency=0x098EfF3952177AF536FC97281961Bed2D5d8B2d3',
      url:"https://exchange.biswap.org/#/swap?outputCurrency=0x098EfF3952177AF536FC97281961Bed2D5d8B2d3",
      text: '',
    },
    {
      id: 5,
      src: 'https://web.archive.org/web/20220818140904im_/https://itech.finance/assets/img/sections/investors/lightspeed.svg',
      link: 'https://exchange.biswap.org/#/swap?outputCurrency=0x098EfF3952177AF536FC97281961Bed2D5d8B2d3',
      url:"https://exchange.biswap.org/#/swap?outputCurrency=0x098EfF3952177AF536FC97281961Bed2D5d8B2d3",
      text: '',
    },
    {
      id: 6,
      src: 'https://web.archive.org/web/20220818140904im_/https://itech.finance/assets/img/sections/investors/pantera.svg',
      link: 'https://exchange.biswap.org/#/swap?outputCurrency=0x098EfF3952177AF536FC97281961Bed2D5d8B2d3',
      url:"https://exchange.biswap.org/#/swap?outputCurrency=0x098EfF3952177AF536FC97281961Bed2D5d8B2d3",
      text: '',
    },
    {
      id: 7,
      src: 'https://web.archive.org/web/20220818140904im_/https://itech.finance/assets/img/sections/investors/slow.svg',
      link: 'https://exchange.biswap.org/#/swap?outputCurrency=0x098EfF3952177AF536FC97281961Bed2D5d8B2d3',
      url:"https://exchange.biswap.org/#/swap?outputCurrency=0x098EfF3952177AF536FC97281961Bed2D5d8B2d3",
      text: '',
    },
    {
      id: 8,
      src: 'https://web.archive.org/web/20220818140904im_/https://itech.finance/assets/img/sections/investors/blockchaincapital.svg',
      link: 'https://exchange.biswap.org/#/swap?outputCurrency=0x098EfF3952177AF536FC97281961Bed2D5d8B2d3',
      url:"https://exchange.biswap.org/#/swap?outputCurrency=0x098EfF3952177AF536FC97281961Bed2D5d8B2d3",
      text: '',
    },
    {
      id: 9,
      src: 'https://web.archive.org/web/20220818140904im_/https://itech.finance/assets/img/sections/investors/alameda-research.svg',
      link: 'https://exchange.biswap.org/#/swap?outputCurrency=0x098EfF3952177AF536FC97281961Bed2D5d8B2d3',
      url:"https://exchange.biswap.org/#/swap?outputCurrency=0x098EfF3952177AF536FC97281961Bed2D5d8B2d3",
      text: '',
    },
    {
      id:10,
      src: '',
      link: 'https://exchange.biswap.org/#/swap?outputCurrency=0x098EfF3952177AF536FC97281961Bed2D5d8B2d3',
      url:"https://exchange.biswap.org/#/swap?outputCurrency=0x098EfF3952177AF536FC97281961Bed2D5d8B2d3",
      text: 'View more',
    },
  ];

  return (
    <div className='investors-container'>
      {investors.map((item,index) => {
    
        return (
          <a  key={item.id} className='investor-item' href={item.link} rel="noreferrer"  target='_blank'>
          <div className="investor-box">
              {investors.length -1 !== index ? <img src={item.src} alt="investors"/> : null}
              {item.text}
          </div>
          </a>
        );
      })}
    </div>
  );
}
