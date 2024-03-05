import HouseCard from './HouseCard'
import Filters from './Filters'
import Nav from './Nav'

function Houses() {
  // creating 1 house object
  const house1 = {
    location: 'Phuket, Thailand',
    rooms: 2,
    bathrooms: 2,
    price: 120,
    rating: 4,
    reviews: 32,
    photo:
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png'
  }

  // duplicating the data to create 2 more copies of house1
  const house2 = { ...house1 }
  const house3 = { ...house1 }

  // creating an array from the dummy objects
  const housesArray = [house1, house2, house3]

  return (
    /* Adding container to position the content wrap the page */
    <div className="container mx-auto">
      <Nav />
      {/* Importing flexbox for the search function from filters */}
      <Filters />
      {/* Importing houses from HouseCard */}
      <div className="grid grid-cols-5 gap-3">
        {housesArray.map((house, index) => (
          <HouseCard key={index} house={house} />
        ))}
      </div>
    </div>
  )
}

export default Houses
