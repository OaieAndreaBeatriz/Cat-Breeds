import React from 'react'
import CatImage from '../assets/cats.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage: `url(${CatImage})`}}>
      </div>
      <div className='aboutBottom'>
        <h1> ABOUT US </h1>
        <p className='w-full h-screen text-[#b6cdbd] py-4 max-w-[800px]'> 
          There comes a time in every person s life when they are ready to take their love to pets from watching adorable YouTube cat videos to the next step. Getting a pet cat might sound very easy and, in fact, it is but it is the process of becoming its owner that might need some practice. Therefore, some guidelines might be of great use. 
          If the mere sight of cat-related issues no longer seems disturbing, it is, perhaps, the time to choose what type of a cat one would like to have in their house. The choice between a cat of pedigree and the one from a pet shelter may be very complicated. It is hard to tell whether it will be the luxurious fur of the former or the sad look in the eyes of the latter that will tip the scale. However, it is important to bear in mind that cats from shelters may have suffered severe health issues and, therefore, will require more attention and resources.
          Furthermore, cats from shelters are likely to have experienced violence, which means that they may bite and, if something goes wrong, they most certainly will. Also, it is desirable to think of the preferable age of the cat  pet shelters will most likely have either newborns or grown-up cats, whereas cat breeders prefer selling kittens at the age of 2-3 months. However, at any age, a healthy cat is capable of tearing one s place down and making a mess in the owner s shoes at any age, which is something to keep in mind for people with the habit of cleaning their house often. As soon as the decision about the type of a pet and, possibly, its breed (e.g., a Moggie (i.e., a non-pedigree cat (Mash 32)), a Ragdoll, a Scottish Fold, a Siamese, a Maine Coon, etc.,) is made, it is essential to learn more about the places where one can get a cat. The choice of the location depends heavily on whether one wishes to get a non-pedigree cat or one of a specific breed. While the former can be easily found in cat shelters, the latter can typically be purchased from cat breeders. Searching for the cat breeders in the vicinity with the help of Google may be the first step toward completing the goal. Further stages, however, will require direct contact with both the cat and its owner, and it is hard to tell whichever is trickier. The cat may bite, whereas the owner is unlikely, yet the latter will require some proof of the candidate s ability to provide the pet with essential items, such as food, vet services, and toys countless toys for physical and mental development.
          </p>
      </div>
    </div>
  )
}

export default About
