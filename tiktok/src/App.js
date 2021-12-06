import { useState, useRef, useMemo } from 'react';

function App() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);
  const nameRef = useRef();
  const handleSubmit = () => {
    setProducts(prev => [...prev, {
      name,
      price: Number(price)
    }]);
    setName('');
    setPrice('');
    nameRef.current.focus();
  }
  let total = useMemo(() =>
  products.reduce((result, product) => result + product.price, 0)
  ,[products])
  return (
    <div style={{ padding: 32 }}>
      <input
        ref={nameRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <br />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter price"
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) =>
          <li key={index}>
            {product.name} - {product.price}
          </li>)}
      </ul>
    </div>

  )

}




export default App;
