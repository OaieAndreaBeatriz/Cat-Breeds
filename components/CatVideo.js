import React from 'react'
import CatVideo from '../assets/ContactCat.mp4' 

class CatVideo1 extends React.Component {
  render() {
    return (
      <video width="100%" height="100%" src={CatVideo} autoPlay loop muted>
      </video>
    );
  }
}

export default CatVideo1
