import './storeItem.css';

export default function StoreItem({ src, title, description }) {
  return (
    <div className='store-item__container'>
      <div className='store-img'>
        <img src={src} alt="store"/>
      </div>
      <h4 className='store-title'>{title}</h4>
      <div className='store-description'>{description}</div>
    </div>
  );
}
