import HouseCard from './HouseCard'
import Filters from './Filters'
import Nav from './Nav'

function Houses() {
  return (
    /* Adding container to position the content wrap the page */
    <div className="container mx-auto">
      <Nav />
      {/* Importing flexbox for the search function from filters */}
      <Filters />
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
