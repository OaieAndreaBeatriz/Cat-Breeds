import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function Details() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const { data } = await Axios.get(`https://api.thecatapi.com/v1/breeds`);
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='breedList'>
      {data.map((item, index) => {
        return (
          <div>
            <p>Intelligence: {item.intelligence}</p>
            <p>Life span: {item.life_span}</p>
            <p>Health issues: {item.health_issues}</p>
            <p>Shedding level: {item.shedding_level}</p>
            <p>Temperament: {item.temperament}</p>
            <p>Affection level: {item.affection_level}</p>
            <p>Child friendly: {item.child_friendly}</p>
            <p>Stranger friendly: {item.stranger_friendly}</p>
            <p>Dog friendly: {item.dog_friendly}</p>
            <p>Adaptability: {item.adaptability}</p>
            <p>Social needs: {item.social_needs}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Details;
