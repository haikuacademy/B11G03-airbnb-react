function Reviews() {
  return (
    <div className="grid grid-cols-3 gap-24">
      <div class="col-span-2 bg-blue-200">
        <div className="flex bg-blue-200 gap-2">
          <div class="bg-blue-600">3.1</div>
          <div class="bg-blue-600">3.2</div>
        </div>
      </div>
      {/* Leave a review */}
      <div className="flex bg-blue-200 justify-between">
        <div class="bg-blue-600">4.1</div>
        <div className="grid bg-blue-200">
          <div class="bg-blue-600">4.2</div>
        </div>
      </div>
    </div>
  )
}
export default Reviews
