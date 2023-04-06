import './auditors.css';

export default function Auditors() {
  const data = [
    {
      id:1,
      src: 'https://web.archive.org/web/20220818140912im_/https://itech.finance/assets/img/sections/auditor/trailbits.svg',
      text: '',
      link: '',
    },
    {
      id:2,
      src: 'https://web.archive.org/web/20220818140925im_/https://itech.finance/assets/img/sections/auditor/veridise.svg',
      text: '',
      link: '',
    },
    {
      id:3,
      src: 'https://web.archive.org/web/20220818141002im_/https://itech.finance/assets/img/sections/auditor/halborn.svg',
      text: '',
      link: '',
    },
    {
      id:4,
      src: 'https://web.archive.org/web/20220818140959im_/https://itech.finance/assets/img/sections/auditor/secfault.svg',
      text: '',
      link: '',
    },
    {
      id:5,
      src: 'https://web.archive.org/web/20220818140916im_/https://itech.finance/assets/img/sections/auditor/slowmist.svg',
      text: '',
      link: '',
    },
    {
      id:6,
      src: '',
      text: 'View Audit Reports',
      link: '#',
    },
  ];

  return (
    <div className='auditors-container'>
      <h2 className='auditors-main__title'>Our Auditors</h2>
      <div className='auditors-list'>
        {data.map((item,index) => {
          return (
            <div key={item.id} className='auditors-item'>
                 {data.length -1 !==index ? <img src={item.src} alt="auditors"/>:null}
              <a href={item.link}>{item.text}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}


