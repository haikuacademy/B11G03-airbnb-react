import Nav from './Nav'
import Reviews from './Reviews'

function House() {
  return (
    /* Gallery */
    <div className="container mx-auto bg-pink-200">
      <Nav />
      <div className="grid bg-pink-200 grid-cols-2 gap-3">
        <div class="bg-pink-600">1</div>
        <div className="grid bg-pink-200 grid-cols-3 gap-3">
          <div class="bg-pink-600">1</div>
          <div class="bg-pink-600">2</div>
          <div class="bg-pink-600">3</div>
          <div class="bg-pink-600">4</div>
          <div class="bg-pink-600">5</div>
          <div class="bg-pink-600">6</div>
          <div class="bg-pink-600">7</div>
          <div class="bg-pink-600">8</div>
          <div class="bg-pink-600">9</div>
        </div>
      </div>

      <div className="grid bg-pink-200 grid-cols-3 gap-24">
        {/* Title and description of the listing */}
        <div class="bg-pink-600 col-span-2">3</div>
        {/* Booking window */}
        <div class="bg-pink-600">4</div>
      </div>

      {/* Read listing reviews */}
      <Reviews />

      {/* Last section */}
      <div className="grid bg-pink-200 grid-cols-3 gap-24">
        <div class="col-span-2 bg-blue-200">
          <div className="flex bg-blue-200 gap-2">
            <div class="bg-blue-600">5.1</div>
            <div class="bg-blue-600">5.2</div>
          </div>
        </div>
        <div class="bg-pink-600">6</div>
      </div>
    </div>
  )
}

export default House
