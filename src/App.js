import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import BirthdayConfetti from './components/BirthdayConfetti';
import Message from './components/Message';
import Video from './components/Video';
import Game from './components/Game';

function App() {
  return (
    <div className=" App min-h-screen bg-[#193147] pb-4 ">
        {/* Image */}
        <div className=" w-full  mx-auto flex-column justify-center items-center">
         
          <div className=" flex justify-center items-center ">
            <img src="50.png" className="cake" alt="hbd"/>
          </div>
          <div className=" flex justify-center items-center ">
            <img src="hbd.png" className="cake" alt="hbd"/>
          </div>
        </div>

        {/* Message */}
        <div className='w-full mx-auto'>
          <Message/>
        </div>

        {/* Video */}
        <div>
          <Video/>
        </div>
        {/* Jeu */}
        <div>
          <Game/>
        </div>

      <div className="bottom-0">
        <Footer/>
      </div>

      <BirthdayConfetti/>
    
    </div>
  
  );
}

export default App;
