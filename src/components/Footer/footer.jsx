import './footer.css';
import footerLogo from '../../assets/imgs/logo.png';

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-logo'>
        <img src={footerLogo} alt="footer logo" />
      </div>
      <div className='footer-products'>
        <h4 className='footer-products__title'>Products</h4>
        <ul className='footer-products-ul'>
          <li className='footer-products-li'>
            <a
              className='footer-products-li-link'
              href='https://t.me/+iQnAeJRCdhIyYzYy'
            >
              Super App
            </a>
          </li>
          <li className='footer-products-li'>
            <a 
               className='footer-products-li-link'
               href='https://t.me/+iQnAeJRCdhIyYzYy'
            >
              Analytics
            </a>
          </li>
        </ul>
      </div>
      <div className='footer-community'>
        <h4 className='footer-community__title'>Community</h4>
        <ul className='footer-products-ul'>
          <li className='footer-products-li'>
            <a
             className='footer-products-li-link'
             href='https://t.me/+iQnAeJRCdhIyYzYy'>
              Ambassador
            </a>
          </li>
          <li className='footer-products-li'>
            <a 
             className='footer-products-li-link'
             href='https://t.me/+iQnAeJRCdhIyYzYy'>
              Discord
            </a>
          </li>
          <li className='footer-products-li'>
            <a
             className='footer-products-li-link'
             href='https://t.me/+iQnAeJRCdhIyYzYy'>
              Twitter
            </a>
          </li>
        </ul>
      </div>
      <div className='footer-docs'>
        <h4 className='footer-docs__title'>Docs</h4>
        <ul className='footer-products-ul'>
          <li className='footer-products-li'>
            <a 
             className='footer-products-li-link'
             href='https://t.me/+iQnAeJRCdhIyYzYy'>
              Whitepaper
            </a>
          </li>
          <li className='footer-products-li'>
            <a 
            className='footer-products-li-link'
            href='https://t.me/+iQnAeJRCdhIyYzYy'>
              Audit Reports
            </a>
          </li>
          <li className='footer-products-li'>
            <a  
            className='footer-products-li-link'
            href='https://t.me/+iQnAeJRCdhIyYzYy'>
              Token Economy
            </a>
          </li>
          <li className='footer-products-li'>
            <a  
            className='footer-products-li-link'
            href='https://t.me/+iQnAeJRCdhIyYzYy'>
              Governance
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
