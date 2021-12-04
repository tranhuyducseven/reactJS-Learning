import {useState} from 'react'
const gifts = [
  'CPU i9',
  'rgb ram',
  'logitech mouse'
]
function App() {
  const [gift, setGift] = useState();
  const randomGift = () => {
    setGift(gifts[Math.floor(Math.random() *3)]);
  }
return (
  <div style={{padding: 32}}>
  <h1>{gift ||'Have no gift'}</h1>
  <button onClick={randomGift}>Get gift</button>
  </div>



)
 }

 


export default App;
