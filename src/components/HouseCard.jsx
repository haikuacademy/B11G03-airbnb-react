function HouseCard() {
  return (
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
      </div>
    </div>
  )
}

export default HouseCard
