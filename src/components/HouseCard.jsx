function HouseCard({ booking }) {
  {
    /**/
  }
  const {
    location,
    rooms,
    bathrooms,
    checkIn,
    checkOut,
    priceNight,
    totalNights,
    totalPrice,
    photoUrl
  } = booking

  return (
    <div className="block border rounded-md">
      <img src={photoUrl} alt="House image" className="rounded-t" />
      <div className="p-3">
        <h5 className="font-bold">{location}</h5>
        <span className="text-sm">
          {rooms} • {bathrooms}
        </span>
        <h6 className="font-bold py-2">{priceNight}</h6>
        <div className="flex justify-between">
          <p>4.5</p>
          <p>34</p>
        </div>
      </div>
    </div>
  )
}

export default HouseCard
