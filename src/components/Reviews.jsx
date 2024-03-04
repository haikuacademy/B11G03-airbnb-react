import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Reviews({ rating }) {
  const rev1 = {
    content:
      'Great place to stay! The house is very clean and confortable, and the location is perfect. The host was very friendly and helpful. Highly recommend!',
    rating: 4,
    date: '22 Jan 2024',
    author: {
      firstName: 'Mike',
      lastName: 'Lino',
      picture: 'https://randomuser.me/api/portraits/men/84.jpg'
    }
  }

  // Creating 2 more reviews by duplicating the rev1
  const rev2 = { ...rev1 }
  const rev3 = { ...rev1 }

  const reviews = [rev1, rev2, rev3]
  return (
    <div className="grid grid-cols-3 gap-28">
      <div className="col-span-2">
        <p className="text-2xl font-bold"> 💬 {reviews.length} Reviews</p>
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
      <p className="text-sm">{review.content}</p>
    </div>
  )
}

export default Reviews
