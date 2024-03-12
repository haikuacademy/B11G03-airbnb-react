import { useState, useEffect } from 'react'

function Booking({ house }) {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [nights, setNights] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    if (startDate && endDate) {
      let startDateInNumbers = new Date(startDate).getTime()
      let endDateIntNumbers = new Date(endDate).getTime()

      let diferenceInTime = endDateIntNumbers - startDateInNumbers
      let diferenceInDays = Math.round(diferenceInTime / (1000 * 3600 * 24))

      setNights(diferenceInDays)

      setTotalPrice(diferenceInDays * house.price)
    }
  }, [startDate, endDate])

  return (
    <div>
      <form className="mt-3">
        {/*check-in check-out*/}
        <div className="xl:flex grid">
          <div id="startDate">
            <label className="text-gray-400 text-xs">Check In</label>
            <input
              type="date"
              className="border rounded-md p-2 h-8 xl:m-0 m-2"
              onChange={(e) => setStartDate(e.target.value)}
            />{' '}
          </div>
          <div id="endDate">
            <label className="text-gray-400 text-xs">Check Out</label>
            <input
              type="date"
              className="border rounded-md p-2 h-8 xl:m-0 m-1"
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        {/*message to the host box*/}
        <div className="mt-3">
          <textarea
            className="border p-2 w-full rounded-md"
            placeholder="Please send a message to the host..."
            rows="7"
          ></textarea>
        </div>
        {/*total and reserve button*/}
        <div className="flex justify-between items-center ">
          <div>
            {' '}
            {nights} nights= <strong>$ {totalPrice}</strong>
          </div>
          <button className="p-2 bg-red-400 text-white text-center border rounded-lg">
            Reserve
          </button>
        </div>
      </form>
    </div>
  )
}
export default Booking
