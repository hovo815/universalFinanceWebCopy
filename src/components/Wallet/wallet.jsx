import './wallet.css';
import phone1 from '../../assets/imgs/phone.jpg';

export default function Wallet() {
  return (
    <div className='wallet-section'>
      <div className='wallet-container'>
        <div className='wallet-pics'>
          <img src={phone1} className='phone1' alt="wallet" />
          <img
            src='https://web.archive.org/web/20220818140940im_/https://itech.finance/assets/img/sections/wallet/account.svg'
            className='phone2' alt="wallet"
          />
        </div>
        <div className='wallet-content'>
          <h2 className='wallet-title'>One Wallet For Everything</h2>
          <p className='wallet-description'>
            Manage your crypto across all blockchains. Send using emails. Earn
            yield with DeFi securely.
          </p>
          <div className='wallet-btns'>
            <div>
              <a className='install-now__btn' href="/">Install Now</a>
            </div>
            <a className='learn-more__btn' href="/">
              <img
                src='https://web.archive.org/web/20220818144503im_/https://itech.finance/assets/img/sections/nft/btn.svg'
                style={{ marginRight: '10px' }} alt="wallet"
              ></img>
              <p>Learn more</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
