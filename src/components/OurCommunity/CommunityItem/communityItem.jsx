import './communityItem.css';

export default function CommunityItem({ src, name, followers, btn, url }) {
  return (
    <div className='community-item__container'>
      <div className='community-item__img'>
        <img src={src} alt="comunity"/>
      </div>
      <h4 className='community-item__name'>{name}</h4>
      <div className='community-item__followers'>{followers}</div>
      <div className='community-item__btn'>
        <a href={url}>{btn}</a>
      </div>
    </div>
  );
}
