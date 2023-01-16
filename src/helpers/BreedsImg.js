// import React from "react"
// import { useState, useEffect } from "react"
// import Axios from "axios"
// import BreedId from "./BreedId"

// function BreedsImg() {
//     const [catImg, setCatImg] = useState([])
  
//     useEffect(() => {
//       Axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=`).then((response) => {
//         setCatImg(response.id)
//       })
//     }, [])
  
//     return (
//       <div className='breed'>
//         <div className='breedList'>
//           {catImg && catImg.map((elem) => (<BreedId props={elem}/>))}
//         </div>
//       </div>
//     )
  
// }

// export default BreedsImg