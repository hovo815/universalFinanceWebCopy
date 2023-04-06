import './bounty.css';

export default function Bounty() {
  return (
    <div className='bounty-container'>
      <div className='bounty-context'>
        <h3 className='bounty-context__title'>Bug Bounty</h3>
        <p className='bounty-context__description'>
          Find bugs and earn rewards.
        </p>
        <a className='bounty-context__btn' href="/">Report bugs</a>
      </div>
    </div>
  );
}
