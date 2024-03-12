import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBed,
  faDollarSign,
  faHouse,
  faSort
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Filters() {
  const [locations, setLocations] = useState([])

  const GetHouse = async () => {
    try {
      const response = await axios.get(
        'https://haiku-bnb.onrender.com/locations'
      )
      console.log('Response in filters.jsx: ', response.data)

      if (!response.error) {
        setLocations(response.data)
      }
    } catch (err) {
      console.log(
        'Error in location fetching filters.jsx: ',
        err.message ? err.message : err
      )
      throw new Error('Error in fetching location data.')
    }
  }

  useEffect(() => {
    GetHouse()
  }, [])

  return (
    <form>
      <div className="flex bg-slate-100 gap-2 h-14 p-2 justify-between rounded-md mb-3">
        {/* Location */}
        <div className="bg-white flex items-center rounded-md p-2 border-2 border-slate-200 w-[20%] gap-2 text-sm">
          <FontAwesomeIcon icon={faHouse} className="" />
          <select type="select" class="w-full" name="location">
            <option value="">Any Location</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Number of rooms */}
        <div className="bg-white flex items-center rounded-md p-2 border-2 border-slate-200 w-[20%] gap-2 text-sm">
          <FontAwesomeIcon icon={faBed} className="" />
          <select type="select" class="w-full" name="min_rooms">
            <option value="">Any Rooms</option>
            <option value="1">1 room</option>
            <option value="2">2 rooms</option>
            <option value="3">3 rooms</option>
            <option value="4">4 rooms</option>
            <option value="5">5 rooms</option>
          </select>
        </div>

        {/* Max price */}
        <div className="bg-white flex items-center rounded-md p-2 border-2 border-slate-200 w-[20%] gap-2 text-sm">
          <FontAwesomeIcon icon={faDollarSign} className="" />
          <input
            type="number"
            class="w-full"
            placeholder="max price"
            name="max_price"
          />
        </div>

        {/* Sort by */}
        <div className="bg-white flex items-center rounded-md p-2 border-2 border-slate-200 w-[20%] gap-2 text-sm">
          <FontAwesomeIcon icon={faSort} className="" />
          <select type="select" class="w-full" className="sort">
            <option value="">sort by</option>
            <option value="price_lowest">Lowest Price</option>
            <option value="price_highest">Highest Price</option>
            <option value="highest_rated">Highest Rated</option>
          </select>
        </div>

        {/* Keywords */}
        <div className="bg-white flex items-center rounded-md p-2 border-2 border-slate-200 w-[20%] gap-2 text-sm">
          <input type="text" class="w-full" placeholder="keywords..." />
        </div>

        {/* Submit button */}
        <button
          className="rounded-md bg-[#FB7185] text-white p-2 "
          name="search"
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default Filters
