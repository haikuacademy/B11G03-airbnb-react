import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBed,
  faDollarSign,
  faHome,
  faHouse,
  faSort,
  faStar
} from '@fortawesome/free-solid-svg-icons'

function Filters() {
  return (
    <form>
      <div className="flex bg-slate-100 gap-2 h-14 p-2 justify-between rounded-md mb-3">
        {/* Location */}
        <div className="bg-white flex items-center rounded-md p-2 border-2 border-slate-200 w-[20%] gap-2 text-sm">
          <FontAwesomeIcon icon={faHouse} className="" />
          <select type="select" class="w-full">
            <option value="">Any Location</option>
            <option value="Thailand">Thailand</option>
            <option value="Vietnam">Vietnam</option>
          </select>
        </div>

        {/* Number of rooms */}
        <div className="bg-white flex items-center rounded-md p-2 border-2 border-slate-200 w-[20%] gap-2 text-sm">
          <FontAwesomeIcon icon={faBed} className="" />
          <select type="select" class="w-full">
            <option value="">Any Rooms</option>
            <option value="1">1 room</option>
            <option value="2">2 rooms</option>
          </select>
        </div>

        {/* Max price */}
        <div className="bg-white flex items-center rounded-md p-2 border-2 border-slate-200 w-[20%] gap-2 text-sm">
          <FontAwesomeIcon icon={faDollarSign} className="" />
          <input type="number" class="w-full" placeholder="max price" />
        </div>

        {/* Sort by */}
        <div className="bg-white flex items-center rounded-md p-2 border-2 border-slate-200 w-[20%] gap-2 text-sm">
          <FontAwesomeIcon icon={faSort} className="" />
          <select type="select" class="w-full">
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
        <button className="rounded-md bg-[#FB7185] text-white p-2 ">
          Search
        </button>
      </div>
    </form>
  )
}

export default Filters
