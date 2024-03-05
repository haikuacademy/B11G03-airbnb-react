import { Link } from 'react-router-dom'

function HouseCard(props) {
  const { isListing } = props
  const { location, rooms, bathrooms, price, rating, reviews, photo } =
    props.house

  return (
    <Link to="/houses/1">
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
    </Link>
  )
}

export default HouseCard
