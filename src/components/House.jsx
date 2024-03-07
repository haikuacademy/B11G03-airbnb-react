import Gallery from './Gallery'
import Nav from './Nav'
import Reviews from './Reviews'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function House() {
  const [house, setHouse] = useState({})

  useEffect(() => {
    const fetchHouse = async () => {
      try {
        const response = await axios.get(
          'https://haiku-bnb.onrender.com/houses/1'
        )
        setHouse(response.data)
      } catch (error) {
        console.error('Error fetching house:', error)
      }
    }

    fetchHouse()
  }, [])

  return (
    <div className="container mx-auto">
      <Nav />
      {/* Gallery */}
      <Gallery images={house.images || []} />
      <div className="grid grid-cols-3 gap-28 mt-4 justify-between">
        {/* Title and description of the listing */}
        <div className="col-span-2">
          <h1 className="text-3xl font-extrabold mb-4">{house.location}</h1>
          {/* bedrooms and bathrooms */}
          <h2 className=" text-gray-500 text-sm mb-8">
            {house.rooms} rooms • {house.bathrooms} bathrooms
          </h2>

          {/* Read listing description */}
          <div class="col-span-2">
            {/* host profile picture */}
            <div className="flex mb-8 items-center">
              <div className="w-10">
                <img
                  src={house.host?.picture}
                  alt="host photo"
                  className="w-full rounded-full"
                />
              </div>
              {/* host name*/}
              <div className="ml-5">
                <div className="text-gray-400 text-sm">Hosted by</div>
                <div className="">
                  {house.host?.firstName} {house.host?.lastName}
                </div>
              </div>
            </div>
            {/*house description*/}
            <div>
              <p>{house.description}</p>
            </div>
          </div>
        </div>

        {/* Booking */}
        <div className="border rounded-md p-4 mb-10">
          <h6 className="font-bold text-lg">
            ${house.price}{' '}
            <span className="text-gray-400 text-xs">/ night</span>
          </h6>
          <form className="mt-3">
            {/*check-in check-out*/}
            <div className="xl:flex grid">
              <div className="">
                <label className="text-gray-400 text-xs">Check-in</label>
                <input
                  type="date"
                  className="border rounded-md p-2 h-8 xl:m-0 m-2"
                />
              </div>
              <div>
                <label className="text-gray-400 text-xs">Check-out</label>
                <input
                  type="date"
                  className="border rounded-md p-2 h-8 xl:m-0 m-1"
                />
              </div>
            </div>
            {/*message to the host box*/}
            <div className="mt-3">
              <textarea
                className="border p-2 w-full rounded-md"
                placeholder="Please send a message to the host..."
                rows="7"
              ></textarea>
            </div>
            {/*total and reserve button*/}
            <div className="flex justify-between items-center ">
              <div>
                3 nights= <strong>${house.price ? house.price * 3 : ''}</strong>
              </div>
              <button className="p-2 bg-red-400 text-white text-center border rounded-lg">
                Reserve
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* import reviews */}
      <Reviews rating={house.rating} />
    </div>
  )
}

export default House
