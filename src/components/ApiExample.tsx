// src/ApiExample.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiExample: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const config = {
    headers: {
      'authorId': 101, // Replace with your actual header and value
    },
  };

  useEffect(() => {
    // Replace this URL with your own API endpoint
    axios.get('https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products/', config)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Financial Products</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item: any) => (
              <li key={item.id}>
                <p>Name: {item.name}</p>
                <p>Description: {item.description}</p>
                <img src={item.logo} alt=""/>
                {/* Render other properties of the object as needed */}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default ApiExample;
