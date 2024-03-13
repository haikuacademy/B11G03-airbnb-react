import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Booking({ house }) {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [nights, setNights] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [bookingId, setBookingId] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    if (startDate && endDate) {
      let startDateInNumbers = new Date(startDate).getTime()
      let endDateIntNumbers = new Date(endDate).getTime()

      let diferenceInTime = endDateIntNumbers - startDateInNumbers
      let diferenceInDays = Math.round(diferenceInTime / (1000 * 3600 * 24))

      setNights(diferenceInDays)

      setTotalPrice(diferenceInDays * house.price)
      console.log('this i a house', house)
    }
  }, [startDate, endDate])

  const createBooking = async (e) => {
    //preventing reloading
    e.preventDefault()
    //data from the form into an object for the API
    let form = new FormData(e.target)
    let formObject = Object.fromEntries(form.entries())
    //this atach the house_id to the form
    formObject.house_id = id
    //POST data
    try {
      const response = await axios.post(
        'https://haiku-bnb.onrender.com/bookings',
        formObject
      )
      console.log('all the data', response.data)
      console.log('inside form object', formObject)
      const bookingId = response.data.booking_id
      console.log('THIS IS THE BOOKING ID', bookingId)
      setBookingId(bookingId)
    } catch (error) {
      console.error('booking error', error)
    }
  }

  return (
    <div>
      {/*booking form*/}
      {!bookingId && (
        <form onSubmit={createBooking} className="mt-3">
          {/*check-in check-out*/}
          <div className="xl:flex grid">
            <div id="startDate">
              <label className="text-gray-400 text-xs">Check In</label>
              <input
                name="from_date"
                type="date"
                className="border rounded-md p-2 h-8 xl:m-0 m-2"
                onChange={(e) => setStartDate(e.target.value)}
              />{' '}
            </div>
            <div id="endDate">
              <label className="text-gray-400 text-xs">Check Out</label>
              <input
                name="to_date"
                type="date"
                className="border rounded-md p-2 h-8 xl:m-0 m-1"
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
          {/*message to the host box*/}
          <div className="mt-3">
            <textarea
              name="message"
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
      )}
      {/*confirmation message*/}
      {bookingId && (
        <div className=" border  bg-green-100 text-center mt-4">
          THANK YOU FOR YOUR BOOKING!
        </div>
      )}
      {/*error message*/}
    </div>
  )
}
export default Booking
