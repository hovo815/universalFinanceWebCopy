import './features.css';

export default function Features() {
  return (
    <div className='features-container'>
      <div className='total-value'>
        <div className='total-value__money'>$562,027,693</div>
        <div className='total-value__text'>Total Value Locked</div>
      </div>
      <div className='total-users'>
        <div className='total-user__count'>300,000+</div>
        <div className='total-users__text'>Total Users</div>
      </div>
    </div>
  );
}
