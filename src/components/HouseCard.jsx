import { Link } from 'react-router-dom'

function HouseCard(props) {
  const houseId = props.booking.houseId
  const location = props.booking.location
  const rooms = props.booking.rooms
  const bathrooms = props.booking.bathrooms
  const priceNight = props.booking.priceNight
  const reviewRating = props.booking.reviewRating
  const totalReviews = props.booking.totalReviews
  const checkIn = props.booking.checkIn
  const checkOut = props.booking.checkOut
  const totalNights = props.booking.totalNights
  const totalPrice = props.booking.totalPrice
  const photoUrl = props.booking.photoUrl

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
              {props.booking.isbooking}
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
