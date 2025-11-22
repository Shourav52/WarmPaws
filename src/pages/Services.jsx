import React, { useEffect, useState } from 'react'
import MyContainer from '../compunents/MyContainer';

const Services = () => {

  const [services, setServices] = useState([]);
    useEffect(()=>{
      fetch('./services.json')
      .then(res=>res.json())
      .then(data => setServices(data))
      .catch(err=>console.log(err))
    },[])
    console.log(services);

  return (
    <div>
       <MyContainer>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10 p-10 lg:p-0 mb-10'>
          {
            services.map(services =>
              <div className="card bg-base-100 shadow-sm w-full lg:w-[360px] bg-blue-300">
            <figure>
                <img className='w-full h-[300px] object-cover'
                src={services?.image}
                alt="Shoes" />
            </figure>
            <div className="card-body space-y-2">
                <h2 className="card-title">{services?.serviceName}</h2>
                <div className='flex justify-between'>
                    <p>Price: {services?.price}</p>
                    <p>Ratting: {services?.rating}</p>
                </div>
                
                <div className="card-actions ">
                <button className="btn btn-primary w-full">View Details</button>
                </div>
            </div>
            </div>
            )
        }
      </div>
       </MyContainer>
    </div>
  )
}

export default Services;
