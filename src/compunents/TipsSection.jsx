import React from 'react'
import tipsImg1 from '../assets/t1.png'
import tipsImg2 from '../assets/t2.png'
import tipsImg3 from '../assets/t3.png'
import tipsImg4 from '../assets/t4.png'
import MyContainer from './MyContainer'

const TipsSection = () => {
  return (
    <div>
        <div className='text-center text-3xl font-semibold text-white mb-10 w-full mt-10'>
            <h1 className='bg-gradient-to-b from-purple-300 to-white bg-clip-text text-transparent'>Winter Care Tips for Pets</h1>
        </div>
        <MyContainer>
            <div className='flex flex-col lg:flex-row justify-between gap-6 space-y-5 p-10 lg:p-0'>
                <div className="card w-full lg:w-250 lg:h-88 bg-base-100 card-lg shadow-sm pt-5">
                    <div>
                        <img className='w-20' src={tipsImg1} alt="" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Keep Your Pet Warm Indoors</h2>
                        <p>Create a warm indoor environment for your pet using soft bedding, blankets, and a heated spot so they stay comfortable during the cold winter days.</p>
                        
                    </div>
                </div>
            
                <div className="card w-full bg-base-100 card-lg shadow-sm pt-5 lg:w-250 lg:h-88">
                    <div>
                        <img className='w-20' src={tipsImg2} alt="" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Moisturize Paws Regularly</h2>
                        <p>Apply a pet-safe paw balm regularly to prevent dryness, cracking, and irritation during cold winter weather.</p>
                      
                    </div>
            </div>
                <div className="card w-full bg-base-100 card-lg shadow-sm pt-5 lg:w-250 lg:h-88">
                    <div>
                        <img className='w-20' src={tipsImg3} alt="" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Limit Outdoor Time</h2>
                        <p>Reduce your pet’s outdoor time during cold weather to protect them from chills and frostbite. Use short, supervised outings only.</p>  
                    </div>
            </div>
                <div className="card w-full bg-base-100 card-lg shadow-sm pt-5 lg:w-250 lg:h-88">
                    <div>
                        <img className='w-20' src={tipsImg4} alt="" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Hydrate & MainTain Nutrition</h2>
                        <p>Keep your pet hydrated and provide a balanced winter diet to boost energy and maintain overall health during the cold season.</p>
                      
                    </div>
            </div>
        </div>
        </MyContainer>
    </div>
  )
}

export default TipsSection;
