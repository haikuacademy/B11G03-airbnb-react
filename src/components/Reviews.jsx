function Reviews() {
  return (
    <div className="grid grid-cols-3 gap-24">
      <div className="col-span-2">
        <p className="text-lg font-bold">34 Reviews</p>
        <p className="text-sm">Overall ⭐️ Rating</p>
        <Review />
        <Review />
        <Review />
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

function Review() {
  return (
    <div className="p-2 rounded border-2 m-2">
      <div className="flex gap-2">
        {/* guest profile photo */}
        <div className="bg-blue-600">5.1</div>
        {/* review date & guest name */}
        <div>
          <p className="text-xs text-slate-400">22 Jan 2024</p>
          <p className="text-sm font-semibold">Mike Lino</p>
        </div>
      </div>
      {/* review star rating & review */}
      <p className="text-xs"> ⭐️ Rating</p>
      <p className="text-sm">
        Great place to stay! The house is very clean and confortable, and the
        location is perfect. The host was very friendly and helpful. Highly
        recommend!
      </p>
    </div>
  )
}

export default Reviews
