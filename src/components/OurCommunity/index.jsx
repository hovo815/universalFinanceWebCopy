import CommunityList from './CommunityList/communityList';
import './index.css';

export default function Community() {
  return (
    <div className='community-section'>
      <div className='community-container'>
        <h3 className='community-main__title'>Join Our Community</h3>
        <div>
          <CommunityList />
        </div>
      </div>
    </div>
  );
}
