import headerImg from '../../assets/imgs/header-img.png';
import './header.css';

export default function Header() {
  return (
    <div className='header-section'>
      <div className='header-container'>
        <div className='header-content'>
          <h2 className='header-title'>Universe.finance</h2>
          <div className='header-subtitle'>
            Binance & Biswap Launchpad Token UNIF.
          </div>
          <a className='header-button' href='https://exchange.biswap.org/?fbclid=IwAR2apEyK05kClEV0S8YtdeI5OfrWMMhz_QYheQeIHIj8UtCgfITNOL_RBwk#/swap?outputCurrency=0x098EfF3952177AF536FC97281961Bed2D5d8B2d3'>Buy Token UNIF</a>
        </div>
        <div className='header-img'>
          <img src={headerImg} alt="header"/>
        </div>
      </div>
    </div>
  );
}
