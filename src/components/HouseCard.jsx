import { Link } from 'react-router-dom'

function HouseCard({ house, isbooking }) {
  return (
    <Link to={`/houses/${house.houseId}`}>
      <div className="block border rounded-md">
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
        </div>
      </div>
    </Link>
  )
}

export default HouseCard
