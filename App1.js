// import React ,{useEffect}from 'react';
// const App1=useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       const res = await axios.get(
//         "http://localhost:3000/src/Components/API/connect"
//       );
//       setProducts(res.data);
//       setLoading(false);
//     };
//     fetchProducts();
//   }, []);

//   export default  App1;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const App1 = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       try {
//         const res = await axios.get("http://localhost:3000/pratice/serverr");
//         setProducts(res.data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//       setLoading(false);
//     };
//     fetchProducts();
//   }, []); // Empty dependency array ensures useEffect runs only once on component mount

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {products.map(product => (
//             <li key={product.id}>{product.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default App1;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App1 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:3000/api/data");
        setProducts(res.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App1;

