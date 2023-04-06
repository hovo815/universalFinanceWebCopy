import StoreItem from '../StoreItem/storeItem';
import './storeList.css';

export default function StoreList() {
  const data = [
    {
      id:1,
      src: 'https://web.archive.org/web/20220818140904im_/https://itech.finance/assets/img/sections/store/mobilefirst.svg',
      title: 'Mobile First ',
      description: 'Mobile friendly products for day to day consumers.',
    },
    {
      id:2,
      src: 'https://web.archive.org/web/20220818140904im_/https://itech.finance/assets/img/sections/store/kyc.svg',
      title: 'KYC Products',
      description:
        'Legal and compliant products for institutions and retail users.',
    },
    {
      id:3,
      src: 'https://web.archive.org/web/20220818140904im_/https://itech.finance/assets/img/sections/store/app.svg',
      title: 'App Specific L2',
      description:
        'Further increasing scalability, efficiency, and speed for users.',
    },
  ];

  return (
    <div className='store-list__container'>
      {data.map((item, index) => {
        return (
          <StoreItem
          key={item.id}
            src={item.src}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </div>
  );
}
