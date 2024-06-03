
import CurrentDate from '../components/CurrentDate.jsx';

import 'react-multi-carousel/lib/styles.css';
import '../Styles/MyAccount.css';

import ImageCards from '../components/ImageCards.jsx';



export default function MyAccount() {
  return (
    <div className='layout'>
      <div className='container1'>
        <div className='date'><CurrentDate /></div>
        <div className='title'><h1>Procedural Trainer</h1></div>
        <div className='date'><ImageCards /></div>
        
      </div>
      <div className='container2'>
        
        container 2 NOEW FIA M AKSJ AGJBK
      </div>
    </div>
  );
}
