import { Link } from 'react-router-dom'

function HouseCard(props) {
  const { isListing } = props
  const { location, rooms, bathrooms, price, rating, reviews, photo } =
    props.house
  const { isbooking } = props.isbooking

  return (
    <Link to={`/houses/${house.houseId}`}>
      <div className="block border rounded-md">
        <img src={photo} alt="House image" className="rounded-t" />
        <div className="p-3">
          <h5 className="font-bold">{location}</h5>
          <span className="text-sm">
            {rooms} rooms • {bathrooms} bathrooms
          </span>
          <h6 className="font-bold py-2">${price}</h6>
          <div className="flex justify-between">
            <p>{rating}</p>
            <p>{reviews}</p>
            <img src={house.photoUrl} alt="House image" className="rounded-t" />
            <div className="p-3">
              <h5 className="font-bold">{house.location}</h5>
              <span className="text-sm">
                {house.rooms} Bedrooms • {house.bathrooms} Bathrooms
              </span>
              <h6 className="font-bold py-2"> ${house.priceNight}</h6>
              <div>
                {house.reviewRating}(Rating) {house.totalReviews}(TotalReviews)
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
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default HouseCard
