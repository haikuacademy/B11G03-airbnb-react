import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function HouseCard({ house, isbooking }) {
  const rating = 5
  return (
    <Link to={`/houses/${house.houseId}`}>
      <div className="block border rounded-md">
        <img src={house.photoUrl} alt="House image" className="rounded-t" />
        <div className="p-3">
          <h5 className="font-bold">{house.location}</h5>
          {house.rooms} Bedrooms • {house.bathrooms} Bathrooms
          <h6 className="font-bold py-2"> ${house.priceNight}</h6>
          <div className="flex justify-between">
            <div className="flex">
              {[...new Array(rating)].map((i, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className=" text-yellow-400"
                />
              ))}
            </div>
          </div>
          <div>
            {isbooking ? (
              <div className="bg-green-200 border rounded-sm">
                {' '}
                {house.checkIn} {house.checkOut}
                <div>
                  {house.totalNights} Nights = ${house.totalPrice}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default HouseCard
