import CommunityItem from '../CommunityItem/communityItem';
import './communityList.css';

export default function CommunityList() {
  const data = [
    {
      src: 'https://web.archive.org/web/20220818140904im_/https://itech.finance/assets/img/sections/community/twitter.svg',
      name: 'Twitter',
      followers: '83,621 Followers',
      btn: 'Follow',
      url:"https://t.me/+iQnAeJRCdhIyYzYy",
    },
    {
      src: 'https://web.archive.org/web/20220818141216im_/https://itech.finance/assets/img/sections/community/discord.svg',
      name: 'Discord',
      followers: '83,621 Followers',
      btn: 'Join',
      url:"https://t.me/+iQnAeJRCdhIyYzYy",
    },
    {
      src: 'https://web.archive.org/web/20220818140904im_/https://itech.finance/assets/img/sections/community/telegram.svg',
      name: 'Telegram',
      followers: '13,200 Followers',
      btn: 'Join',
      url:"https://t.me/+iQnAeJRCdhIyYzYy",
    },
    {
      src: 'https://web.archive.org/web/20220818140915im_/https://itech.finance/assets/img/sections/community/medium.svg',
      name: 'Medium',
      followers: '83,621 Followers',
      btn: 'Subscribe',
      url:"https://t.me/+iQnAeJRCdhIyYzYy",
    },
  ];
  return (
    <div className='community-list__container'>
      {
        data.map((item, index) => {
          return (
            <CommunityItem key={index} src={item.src} name={item.name} followers={item.followers} btn={item.btn} url={item.url}/>
          )
        })
      }
    </div>
  );
}
