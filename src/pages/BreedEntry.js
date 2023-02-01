import React from 'react';
import { useState } from 'react';

function BreedEntry(props) {
  const [extended, setExtended] = useState(false);
  setExtended();
  return (
    <div className='breed' key={props.props}>
      <div className='breedItem'>
        <h1>{props.props.name}</h1>
        <p>{'Description: ' + props.props.description}</p>
        {extended && (
          <div>
            <p>{'Origin: ' + props.props.origin}</p>
            <p>{'Intelligence: ' + props.props.intelligence}</p>
            <p>{'Life span: ' + props.props.life_span}</p>
            <p>{'Health issues: ' + props.props.health_issues}</p>
            <p>{'Shedding level: ' + props.props.shedding_level}</p>
            <p>{'Temperament: ' + props.props.temperament}</p>
            <p>{'Affection level: ' + props.props.affection_level}</p>
            <p>{'Child friendly: ' + props.props.child_friendly}</p>
            <p>{'Stranger friendly: ' + props.props.stranger_friendly}</p>
            <p>{'Dog friendly: ' + props.props.dog_friendly}</p>
            <p>{'Adaptability: ' + props.props.adaptability}</p>
            <p>{'Social needs' + props.props.social_needs}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BreedEntry;
