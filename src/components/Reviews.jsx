import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faStar } from '@fortawesome/free-regular-svg-icons'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Reviews({ rating }) {
  const [reviews, setReviews] = useState([])

  const getReviews = async () => {
    try {
      const { data } = await axios.get(
        'https://haiku-bnb.onrender.com/reviews?house_id=2'
      )
      setReviews(data)
    } catch (error) {
      throw new Error(
        'Error fetching reviews: ',
        error.message ? error.message : error
      )
    }
  }

  useEffect(() => {
    getReviews()
  }, [])

  return (
    <div className="grid grid-cols-3 gap-28">
      <div className="col-span-2">
        <div className="text-2xl font-bold">
          <div className="">
            <FontAwesomeIcon icon={faCommentDots} className="text-[#94A3B8]" />
            {reviews.length} Reviews
          </div>
        </div>
        <p className="text-sm">
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
            {rating}
          </div>
        </p>
        {reviews.map((review, index) => {
          return <Review review={review} key={index} />
        })}
      </div>
      {/* Leaving a Review Option */}
      <div className="">
        <div className="border-2 rounded p-4">
          <p className="text-m ">Leave a Review</p>
          <p className="text-sm m-2">⭐️ Rating</p>
          <form>
            <textarea
              type="text"
              placeholder="Please leave a review for this house..."
              rows="6"
              className="w-full border-2 rounded p-2"
            />
            <button
              type="submit"
              className="rounded-md bg-[#FB7185] text-white p-2 "
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

function Review({ review }) {
  return (
    <div className="p-2 rounded border-2 m-2">
      <div className="flex gap-2">
        {/* guest profile photo */}
        <div className="">
          <img
            src={review.author.picture}
            alt="Guest review photo"
            className="w-10 rounded-full"
          />
        </div>
        {/* review date & guest name */}
        <div>
          <p className="text-xs text-slate-400">{review.date}</p>
          <p className="text-sm font-semibold">
            {review.author.firstName} {review.author.lastName}
          </p>
        </div>
      </div>
      {/* review star rating & review */}
      <p className="text-xs"> ⭐️{review.rating} Rating</p>
      <p className="text-sm">{review.comment}</p>
    </div>
  )
}

export default Reviews
