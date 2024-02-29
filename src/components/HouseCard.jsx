function HouseCard() {
  return (
    <div className="p-3.5 border rounded-md">
      <h5 className="font-bold">Pucket, Thailand</h5>
      <span className="text-sm">2 rooms</span>
      {' • '}
      <span className="text-sm">2 bathrooms</span>
      <h6 className="font-bold py-2">$120</h6>
      <div className="flex justify-between">
        <p>4.5</p>
        <p>34</p>
      </div>
    </div>
  )
}

export default HouseCard
