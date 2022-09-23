import { useState } from 'react';
import './App.css';
import AllGun from './Components/AllGun/AllGun';
import Header from './Components/Header/Header';

function App() {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const countIncrease = () =>{
     setCount(count + 1);
  }
  return (
    <div className="App">
      <Header count={count}></Header>
      <AllGun countIncrease={countIncrease}></AllGun>
    </div>
  );
}

export default App;
