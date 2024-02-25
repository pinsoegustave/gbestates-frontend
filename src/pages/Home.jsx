import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Home = () => {
  const [showListingError, setShowListingError] = useState(false);
  const [userListings, setUserListings] = useState(null);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://gbestates.onrender.com/api/listing/getAllHouses');
        const data = await res.json();
        if (data === false) {
          setShowListingError(true)
          setLoading(false);
          return;
        }
        setUserListings(data)
        setLoading(false);
      }  
      catch (error) {
        setShowListingError(true);
        setLoading(false)
      }
    };
    fetchListing();
  }, []);
  
  return (
    <div className="relative w-full">
      <img src="../assets/Home.png" alt="" className="w-full h-screen" />
      <div className="absolute w-full p-2 top-12 md:mt-10 mt-20 sm:mt-16 bg-thirdGreen rounded-lg shadow-md md:max-w-4xl md:ml-44">
        <h2 className="text-2xl text-redBeige font-semibold text-center sm:flex justify-center">
          Welcome to GBE Real Estate, 
        </h2>
        <p className="mt-2 text-4xl text-center mb-3">
        "Where Your Dream Home Awaits!
Explore, Discover, and Find Your Perfect Place with Us."
        </p>
        <span className="text-center">
Your premier destination for finding the home of your dreams. At GBE, we understand that a home is more than just a place to live—it's a sanctuary, a reflection of your lifestyle, and a cornerstone of your future. Whether you're searching for a cozy starter home, an elegant estate, or an investment property, we're here to guide you every step of the way. </span>
        <div className="flex justify-center">
          <Link to={'#houses'}>
        <button className="m-2 w-40 sm:w-40 p-2 mt-10 sm:ml-16 border hover:border-redBeige font-bold bg-redBeige hover:bg-thirdGreen">
          Explore more
        </button>
          </Link>
        <Link to={'/about'}>
        <button className="m-2 w-40 sm:w-40 p-2 mt-10 ml-2 sm:ml-16 border font-bold border-redBeige hover:bg-redBeige hover:text-">
          About us
        </button>
        </Link>
        </div>
      </div>
      <div id="houses">
          <h2 className="text-2xl sm:text-3xl font-semibold m-10 text-center" >
            Better home, more pride
          </h2>
      </div>
      <p className="text-red-300">{showListingError}</p>
      {loading && <p className="">Loading....</p>}
      <div className="p-4 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-16 w-[80%] gap-y-10 mb-4" >
      {/* House Card */}
      {
        userListings
      && userListings.map((listing, index) => (
        <Link to={`/detail/${listing._id}`} key={index}>
          <div className=""  >
          <div className="relative w-full rounded-lg bg-slateWhite shadow-md ">
            <div className="relative rounded-lg">
              <div className="" key={index}>
              <img
                src={listing.imageUrls[0]}
                alt=""
                className="rounded-lg"
              />
              </div>
              <span className="absolute top-0 bg-slate-100 p-2 mt-4 text-center rounded-sm">
                For {listing.type}
              </span>
            </div>
            <div className="ml-2 flex gap-4 mt-1">
            <FaLocationDot className="mt-1.2"/>
              <span>{listing.address}</span>
            </div>
            <h2 className="ml-2 font-semibold text-2xl">{listing.name}</h2>
            <div className="ml-2">
              <ul className="flex flex-wrap ">
                <li>Bedrooms:{listing.bedrooms}</li>,<li>Bathrooms: {listing.bathrooms} </li>,
                <li>Sitting rooms:4</li>,<li>Parking:{listing.parking}</li>
              </ul>
              <h1 className="font-extrabold mt-2">Price: 1,200,000 Frws</h1>
              <button className="p-1 mt-4 mb-2 rounded-sm ml-10 bg-thirdGreen">
                Click for more details
              </button>
            </div>
          </div>
          </div>
      </Link>
      ))
      } 
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
