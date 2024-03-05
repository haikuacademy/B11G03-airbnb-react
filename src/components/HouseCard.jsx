import { Link } from 'react-router-dom'

function HouseCard(props) {
  const { isListing } = props

  return (
    <Link to="/houses/1">
      <div className="block border rounded-md">
        <img
          src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png"
          alt="House image"
          className="rounded-t"
        />
        <div className="p-3">
          <h5 className="font-bold">Phuket, Thailand</h5>
          <span className="text-sm">2 rooms • 2 bathrooms</span>
          <h6 className="font-bold py-2">$120</h6>
          <div className="flex justify-between">
            <p>4.5</p>
            <p>34</p>
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
