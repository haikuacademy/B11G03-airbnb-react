import HouseCard from './HouseCard'
import Filters from './Filters'

function Houses() {
  return (
    /* Adding container to position the content wrap the page */
    <div className="container mx-auto">
      {/* Creating a flexbox for the search function in the page */}
      <div className="flex bg-blue-200 justify-between">
        <Filters />
        <Filters />
        <Filters />
        <Filters />
        <Filters />
        <Filters />
      </div>
      {/* Importing houses from HouseCard */}
      <div className="grid bg-pink-200 grid-cols-5 gap-3">
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
      </div>
    </div>
  )
}

export default Houses
