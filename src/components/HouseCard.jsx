import { Link } from 'react-router-dom'

function HouseCard({ booking, listings, houses }) {
  const {
    houseId,
    location,
    rooms,
    bathrooms,
    priceNight,
    reviewRating,
    totalReviews,
    checkIn,
    checkOut,
    totalNights,
    totalPrice,
    photoUrl
  } = booking

  return (
    <Link to={`/houses/${houseId}`}>
      <div className="block border rounded-md">
        <img src={photoUrl} alt="House image" className="rounded-t" />
        <div className="p-3">
          <h5 className="font-bold">{location}</h5>
          <span className="text-sm">
            {rooms} Bedrooms • {bathrooms} Bathrooms
          </span>
          <h6 className="font-bold py-2"> ${priceNight}</h6>

          <div>
            <div>
              {booking.isbooking}
              <div>
                {reviewRating}rating {totalReviews} total reviews
              </div>
              <div>
                {checkIn} / {checkOut}
              </div>
              <div className="  bg-emerald-100 border rounded-sm">
                {totalNights} nights = ${totalPrice}{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default HouseCard

/*{
  listing.islisting && (
    <div>
      <button>view</button>
      <button>edit</button>
    </div>
  )
}*/
