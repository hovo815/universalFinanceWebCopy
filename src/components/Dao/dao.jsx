import './dao.css';

export default function Dao() {
  return (
    <div className='dao-section'>
      <div className='dao-container'>
        <div className='dao-content'>
          <h2 className='dao-content__title'>Manage DAO with Ease</h2>
          <p className='dao-content__description'>
            Manage payroll, spending, and treasury with a secured easy-to-use
            multi-sig.
          </p>
          <div>
            <a className='get-started__btn' href="/">Get Started</a>
          </div>
        </div>
        <div className='dao-img1'>
          <img alt='dao' src='https://web.archive.org/web/20220818140944im_/https://itech.finance/assets/img/sections/dao/wallet-b.svg' />
        </div>
        <div className='dao-img2'>
          <img alt='dao' src='https://web.archive.org/web/20220818140904im_/https://itech.finance/assets/img/sections/dao/wallet-c.svg' />
        </div>
        <div className='dao-img3'>
          <img alt='dao' src='https://web.archive.org/web/20220818140917im_/https://itech.finance/assets/img/sections/dao/wallet-a.svg' />
        </div>
        <div className='dao-img4'>
          <img alt='dao' src='https://web.archive.org/web/20220818140921im_/https://itech.finance/assets/img/sections/dao/wallet-d.svg' />
        </div>
      </div>
    </div>
  );
}
