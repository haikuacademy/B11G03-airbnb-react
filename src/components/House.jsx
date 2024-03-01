import Gallery from './Gallery'
import Nav from './Nav'
import Reviews from './Reviews'

function House() {
  return (
    <div className="container mx-auto">
      <Nav />
      {/* Gallery */}
      <Gallery />
      <div className="grid grid-cols-3 gap-6 justify-between">
        {/* Title and description of the listing */}
        <div className="col-span-2">
          <h1 className="text-3xl font-extrabold mt-3">Phuket, Thailand</h1>
          {/* bedrooms and bathrooms */}
          <h2 className=" text-gray-600 font-bold">2 rooms * 2 bathrooms</h2>
        </div>

        {/* Booking */}
        <div className="border-2 rounded-md m-5 p-5 boder">
          <div className="font-bold text-lg">
            $120 <span className="text-gray-500">/ night</span>
          </div>
          <form className="mt-3">
            {/*check-in check-out*/}
            <div className="flex">
              <div>
                <label className="text-gray-500">Check-in</label>
                <input type="date" className="border-2 rounded-sm p-2 mr-4" />
              </div>
              <div>
                <label className="text-gray-500">Check-out</label>
                <input type="date" className="border-2 rounded-sm p-2 mr-4" />
              </div>
            </div>
            {/*message to the host box*/}
            <div className=" block mt-3">
              <textarea
                className="border-2 p-2 w-full"
                placeholder="Send a message to the host"
                cols="50"
                rows="10"
              ></textarea>
            </div>
            {/*total and reserve button*/}
            <div className="flex justify-between mt-3">
              <div>
                3 nights= <strong>$360</strong>
              </div>
              <button className="p-3 w-1/4 mb-3 bg-red-400 text-white text-center font-bold border rounded-lg">
                Reserve
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Read listing description */}
      <div className="grid grid-cols-3 gap-24 mb-10">
        <div class="col-span-2">
          {/* host profile picture */}
          <div className="flex mb-8 items-center">
            <div className="w-10">
              <img
                src="https://randomuser.me/api/portraits/women/85.jpg"
                alt="host photo"
                className="w-full rounded-full"
              />
            </div>
            {/* host name*/}
            <div className="ml-5">
              <div className="text-gray-400">Hosted by</div>
              <div className="font-bold">Linda Smith</div>
            </div>
          </div>
          {/*house description*/}
          <div>
            <p>
              Nestled on a serene beachfront, this charming Airbb house offers a
              picturesque escape. The exterior boasts a classic beach house
              aesthetic with weathered wood siding and a spacious wraparound
              deck, perfect for savoring the ocean breeze. Inside, you’re
              greeted by an open-concept living area bathed in natural light,
              complemented by cozy furnishings and nautical accents. The house
              features three comfortable bedrooms, each with a unique coastal
              theme, and two modern bathrooms. The fully equipped kitchen opens
              to a dining area that’s ideal for intimate meals or entertaining
              guests. Large glass doors in the living room lead to the deck,
              where you can enjoy stunning sunset views over the ocean. This
              idyllic retreat is a stone’s throw away from the soft sandy beach,
              making it the perfect spot for beach lovers and those seeking a
              tranquil getaway.
            </p>
          </div>
        </div>
      </div>

      {/* import reviews */}
      <Reviews />
    </div>
  )
}

export default House
