import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'

function HouseCard() {
  const rating = 5
  return (
    <Link to="/houses/1">
      <div className="block border rounded-md">
        <img
          src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png"
          alt="House image"
          className="rounded-t"
        />
        <div className="p-3">
          <p className="font-bold">Phuket, Thailand</p>
          <span className="text-sm">2 rooms • 2 bathrooms</span>
          <p className="font-bold py-2">$120</p>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <div className="">
                {[...new Array(rating)].map((i, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className=" text-yellow-400"
                  />
                ))}
              </div>
            </div>
            <p>34</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default HouseCard
