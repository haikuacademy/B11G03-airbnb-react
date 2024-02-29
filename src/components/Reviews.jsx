function Reviews() {
  return (
    <div className="grid grid-cols-3 gap-24">
      <div className="col-span-2">
        <p className="text-lg font-bold">34 Reviews</p>
        <h1 className="text-sm">Overall ⭐️ Rating</h1>
        <Review />
        <Review />
        <Review />
      </div>
      {/* Leaving a Review Option */}
      <div className="">
        <div className="border-2 rounded p-2 m-2">
          <h1 className="text-sm">Leave a Review</h1>
          <h2 className="text-sm">⭐️ Rating</h2>
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
          <h1 className="text-xs text-slate-400">22 Jan 2024</h1>
          <h2 className="text-sm font-semibold">Mike Lino</h2>
        </div>
      </div>
      {/* review star rating & review */}
      <h1 className="text-xs"> ⭐️ Rating</h1>
      <h2 className="text-sm">
        Great place to stay! The house is very clean and confortable, and the
        location is perfect. The host was very friendly and helpful. Highly
        recommend!
      </h2>
    </div>
  )
}

export default Reviews
