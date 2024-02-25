import React, { useEffect, useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ForRent = () => {
    const [ showListingError, setShowListingError ] = useState(false);
    const [ loading, setLoading ] = useState(true);
    const [ rentHouses, setRentHouses ] = useState(null);

    useEffect(() => {
        const fetchHouses = async () => {
            try {
                setLoading(true);
                const res = await fetch('https://gbestates.onrender.com/api/listing/getAllRent');
                const data = await res.json();
                if (data === false) {
                    setShowListingError(true);
                    setLoading(false);
                    return;
                }
                setRentHouses(data);
                setLoading(false);
            } catch (error) {
                setShowListingError(true);
                setLoading(false);
                
            }
        };
        fetchHouses();
    }, []);
  return (
    <div>
        <div className='ml-32'>
        <p className="text-red-300">{showListingError}</p>
        {loading && <p className="">Loading....</p>}
        </div>
        <div className='p-4 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-16 w-[80%] gap-y-10 mb-4'>
        
        { rentHouses && rentHouses.map((house, index) => (
            <Link to={`/detail/${house._id}`} key={index}>
           
        <div className="relative w-full rounded-lg bg-slateWhite shadow-md ">
            <div className="relative rounded-lg">
              <div className="" key={index}>
              <img
                src={house.imageUrls[0]}
                alt=""
                className="rounded-lg"
              />
              </div>
              <span className="absolute top-0 bg-slate-100 p-2 mt-4 text-center rounded-sm">
                For {house.type}
              </span>
            </div>
            <div className="ml-2 flex gap-4 mt-1">
            <FaLocationDot className="mt-1.2"/>
              <span>{house.address}</span>
            </div>
            <h2 className="ml-2 font-semibold text-2xl">{house.name}</h2>
            <div className="ml-2">
              <ul className="flex flex-wrap ">
                <li>Bedrooms:{house.bedrooms}</li>,<li>Bathrooms: {house.bathrooms} </li>,
                <li>Sitting rooms:4</li>,<li>Parking:{house.parking}</li>
              </ul>
              <h1 className="font-extrabold mt-2">Price: {house.regularPrice.toLocaleString()} Frws</h1>
              <button className="p-1 mt-4 mb-2 rounded-sm ml-10 bg-thirdGreen">
                Click for more details
              </button>
            </div>
          </div>
         </Link>
         ))}
         </div>
    </div>
  )
}

export default ForRent