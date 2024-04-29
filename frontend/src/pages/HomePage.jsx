import '../index.css';
import AllBtn from '../components/AllBtn.jsx';
import Header from '../components/Header.jsx';


function HomePage(){
return (
         <> 
          <Header/>
          <div className=' flex item-center justify-center'>
          <p className="min-timer text-9xl  text-white text-center  ">0:00</p>
          </div>
          
          <AllBtn/>
        </>
        );
};

export default HomePage;