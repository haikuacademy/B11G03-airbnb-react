function HouseCard(props) {
  const { location, rooms, bathrooms, price, rating, reviews, photo } =
    props.house

  return (
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
      </div>
    </div>
  )
}

export default HouseCard
