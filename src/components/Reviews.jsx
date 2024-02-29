function Reviews() {
  return (
    <div className="grid bg-pink-200 grid-cols-3 gap-24">
      <div className="col-span-2">
        <Review />
        <Review />
        <Review />
      </div>
      <div className="bg-pink-600 p-4"> form </div>
    </div>
  )
}

function Review() {
  return (
    <div class="bg-pink-600 p-3">
      <div class=" bg-blue-200">
        <div className="flex bg-blue-200 gap-2">
          {/* guest profile photo */}
          <div class="bg-blue-600">5.1</div>
          {/* guest name */}
          <div class="bg-blue-600">5.2</div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
