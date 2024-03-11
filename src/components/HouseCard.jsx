import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function HouseCard(props) {
  const { isListing } = props
  const { isbooking } = props
  const {
    houseId,
    location,
    rooms,
    bathrooms,
    priceNight,
    reviews,
    totalReviews,
    photoUrl,
    checkIn,
    checkOut,
    totalNights,
    totalPrice
  } = props.house
  const rating = 5

  return (
    <Link to={`/houses/${houseId}`}>
      <div className="block border rounded-md">
        <img src={photoUrl} alt="House image" className="rounded-t" />
        <div className="p-3">
          {/* merge starts here */}
          <h5 className="font-bold">{location}</h5>
          <span className="text-sm">
            {rooms} rooms • {bathrooms} bathrooms
          </span>
          <h6 className="font-bold py-2">${priceNight}</h6>
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
            <p>{reviews || totalReviews}</p>
            {/* merge merge 2 here */}
          </div>

          {/* if is Listing page */}
          {isListing && (
            <div className="flex justify-start gap-2 mt-2">
              <button
                type="submit"
                className="rounded-md font-light border p-1 px-2 text-sm"
              >
                View
              </button>
              <button
                type="submit"
                className="rounded-md font-light border p-1 px-2 text-sm"
              >
                Edit
              </button>
            </div>
          )}

          {/* if is booking page */}
          {isbooking ? (
            <div className="bg-green-200 border rounded-sm">
              {' '}
              {checkIn} {checkOut}
              <div>
                {totalNights} Nights = ${totalPrice}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Link>
  )
}

export default HouseCard
