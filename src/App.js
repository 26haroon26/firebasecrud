import RightSide from './rightSide';
import LeftSide from './leftSide';
import Center from './center';
import Navbar from './navbar';
import { useEffect, useState } from 'react';
import './App.css';
import './toggle.css';
function App() {
  const [lit, setlit] = useState(true);
  const backColor = lit ? 'normal' : 'hard';
  const textColor = lit ? 'light' : 'dark';
  // const buttonColor = lit ? 'solid' : 'liquid';
  const imgsrc = lit ? 'sun':'moon';
  
  useEffect(() => {
    localStorage.setItem('class',`${lit}`) 
   },)
  let colorChanger = () => {
    setlit(!lit)
    localStorage.setItem('class',`${!lit}`)
  }
 
  
  return (
    <>
      <div className={`top ${textColor} ${backColor} `}>
      <button className='btnChanger' onClick={colorChanger}><img className='sunMoon' src={`./images/${imgsrc}.png`} alt='aaaa' /></button>
        <Navbar />
      </div>

      <div className={`bottom  ${backColor} ${textColor}`}>
        < RightSide />
        < Center />
        < LeftSide />
      </div>

    </>
  );
}

export default App;
