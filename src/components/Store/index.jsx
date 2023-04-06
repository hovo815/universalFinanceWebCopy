import StoreList from './StoreList/storeList';
import './index.css';

export default function Store() {
  return (
    <div>
      <h2 className='store-main__title'>What’s In Store</h2>
      <div className='store-container'>
        <StoreList />
      </div>
    </div>
  );
}
