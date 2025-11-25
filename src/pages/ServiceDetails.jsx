import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { IoStarSharp } from "react-icons/io5";
import { toast } from 'react-toastify';

const ServiceDetails = () => {

    const [services, setServices] = useState([])
    const [service, setService] = useState({})
    const {id} = useParams()

    useEffect(()=>{
          fetch('/services.json')
          .then(res=>res.json())
          .then(data => setServices(data))
          .catch(err=>console.log(err))
        },[])

         
   const findResult= services.find(service=>service.serviceId == id)
   console.log(findResult); 

   const handleBooking=(e)=>{
    e.preventDefault() 
    toast.success("Service Booked Successfully!");
    e.target.reset()
  }

  return (
    <div className='flex flex-col items-center mt-10 '>
        <h1 className='text-white text-3xl font-semibold mb-5'>Service details</h1>
     
       
      <div className="mt-4 space-y-2 bg-white p-10 rounded-2xl">
         <img className='w-1/2 rounded-md ' src={findResult?.image} alt="" />
        <h2 className="text-xl font-semibold">{findResult?.serviceName}</h2>
        <p className="text-sm text-gray-500">Category: {findResult?.category}</p>
        <p className="text-gray-600 text-sm"> Description: {findResult?.description}</p>

      <div className="flex items-center justify-between mt-3">
        <span className="text-lg font-semibold">Price: ${findResult?.price}</span>
        <span className=" flex gap-1 items-center text-sm text-yellow-600 font-medium"> <IoStarSharp />{findResult?.rating}</span>
        </div>
      <div className="text-sm text-gray-500 mt-1">
        Provider: <span className="font-medium">{findResult?.providerName}</span>
        </div>
         <div className="text-sm text-gray-500">
            Slots Available: <span className="font-medium">{findResult?.slotsAvailable}</span>
         </div>
          <div className='flex justify-center place-items-center gap-2 my-4'>
              <div className='h-px w-16 bg-gray-400'></div>
              <span className='text-sm text-gray-600'>Fill up the booking form</span>
              <div className='h-px w-16 bg-gray-400'></div>
           </div>
         <form onSubmit={handleBooking} className='space-y-2 flex flex-col items-center' action="">
            <div>
                <label htmlFor="">Name</label> <br />
                <input className='w-70 border p-2 rounded-sm' type="text"  placeholder='Your Name'/>
            </div>
            <div>
                <label htmlFor="">Email</label><br />
                <input className='w-70 border p-2 rounded-sm' type="email" placeholder='.......@gmail.com'/>
            </div>
            <button type="submit" className='btn bg-purple-500 mt-3 w-[200px] rounded-3xl'> Book Now</button>

         </form>
          
      </div>
         
    </div>
  )
}

export default ServiceDetails
