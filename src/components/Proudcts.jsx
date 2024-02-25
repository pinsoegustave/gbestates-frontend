import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

export default function Proudcts() {
  const [listing, setListing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://gbestates.onrender.com/api/listing/getAllHouses"
        );
        const data = await res.json();
        if (data === false) {
          setLoading(false);
          return;
        }
        setLoading(false);
        setListing(data);
      } catch (error) {
        setLoading(true);
      }
    };
    getListing();
  }, []);

  const handleListingDelete = async (listingId) => {
    try {
      const res = await fetch(
        `https://gbestates.onrender.com/api/listing/delete/${listingId}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }

      // setListing((prev) => prev.filter((listing) => result._id !== listingId));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="container">
        <Link to="/layout/create-listing">
          <button className="p-2 text-decoration-none bg-green-800 text-redBeige rounded-sm my-3">
            Create a new house +
          </button>
        </Link>
          <p className="text-gray-700 font-medium">
            List of houses in the database
          </p>
        {loading && <p className="">Loading..</p>}
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-300 flex-1">
          <div className="mt-3">
            <table className="w-full  border-gray-400 rounded-sm">
              <thead className="">
                <tr className="">
                  {/* <th>ID</th> */}
                  <th>Name</th>
                  <th>Description</th>
                  <th>Address</th>
                  <th>Furnished</th>
                  <th>Parking</th>
                  <th>Type</th>
                  <th>ImageUrls</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {listing &&
                  listing.map((result, index) => (
                    <tr key={index}>
                      {/* <td>{result._id.slice(0,5) + ".."}</td> */}
                      <td>{result.name}</td>
                      <td>{result.description.slice(0, 25) + ".."}</td>
                      <td>{result.address}</td>
                      <td>
                        {result.furnished === "true" ? "Furnished" : "No"}
                      </td>
                      <td>{result.parking === "true" ? "True" : "None"}</td>
                      <td>{result.type}</td>
                      {/* <td>{result.offer}</td> */}
                      <td>
                        <img
                          src={result.imageUrls[0]}
                          alt=""
                          width={50}
                          height={50}
                        />
                      </td>
                      <td className="flex gap-2 mb-1">
                        <Link to={`/layout/update-listing/${result._id}`}>
                          <button className="p-2 text-decoration-none bg-green-800 text-redBeige rounded-sm">
                            Update
                          </button>
                        </Link>
                        <button
                          className="p-2 text-decoration-none bg-red-800 text-redBeige rounded-sm"
                          onClick={(e) => handleListingDelete(result._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}