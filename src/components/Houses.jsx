function Houses() {
  return (
    /* Adding container to position the content wrap the page */
    <div className="container mx-auto">
      {/* Creating a flexbox for the search function in the page */}
      <h1 className="bg-blue-200 grid-cols-6 flex justify-between">
        <div class="bg-blue-600">1</div>
        <div class="bg-blue-600">2</div>
        <div class="bg-blue-600">3</div>
        <div class="bg-blue-600">4</div>
        <div class="bg-blue-600">5</div>
        <div class="bg-blue-600">6</div>
      </h1>
      {/* Creating a Grid for the house listings */}
      <div className="grid bg-pink-200 grid-cols-5 gap-2">
        <div class="bg-pink-600">1</div>
        <div class="bg-pink-600">2</div>
        <div class="bg-pink-600">3</div>
        <div class="bg-pink-600">4</div>
        <div class="bg-pink-600">5</div>
        <div class="bg-pink-600">6</div>
        <div class="bg-pink-600">7</div>
        <div class="bg-pink-600">8</div>
        <div class="bg-pink-600">9</div>
        <div class="bg-pink-600">10</div>
      </div>
    </div>
  )
}

export default Houses