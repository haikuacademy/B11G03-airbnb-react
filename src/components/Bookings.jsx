import Nav from './Nav'
import HouseCard from './HouseCard'

function Bookings() {
  return (
    <div className="container mx-auto">
      <Nav />
      <div className="grid grid-cols-5 gap-3 bg-pink-200">
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

export default Bookings
