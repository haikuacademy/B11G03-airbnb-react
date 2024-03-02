import Gallery from './Gallery'
import Nav from './Nav'
import Reviews from './Reviews'

function House() {
  const houseDescription =
    "Nestled on a serene beachfront, this charming Airbb house offers a picturesque escape. The exterior boasts a classic beach house aesthetic with weathered wood siding and a spacious wraparound deck, perfect for savoring the ocean breeze. Inside, you're greeted by an open-concept living area bathed in natural light, complemented by cozy furnishings and nautical accents. The house features three comfortable bedrooms, each with a unique coastal theme, and two modern bathrooms. The fully equipped kitchen opens to a dining area that's ideal for intimate meals or entertaining guests. Large glass doors in the living room lead to the deck, where you can enjoy stunning sunset views over the ocean. This idyllic retreat is a stone's throw away from the soft sandy beach, making it the perfect spot for beach lovers and those seeking a tranquil getaway."

  // Getting house data
  const house = {
    location: 'Phuket, Thailand',
    rooms: 2,
    bathrooms: 2,
    description: houseDescription,
    price: 120,
    rating: 4,
    host: {
      firstName: 'Linda',
      lastName: 'Smith',
      picture: 'https://randomuser.me/api/portraits/women/85.jpg'
    }
  }
  return (
    <div className="container mx-auto">
      <Nav />
      {/* Gallery */}
      <Gallery />
      <div className="grid grid-cols-3 gap-28 mt-4 justify-between">
        {/* Title and description of the listing */}
        <div className="col-span-2">
          <h1 className="text-3xl font-extrabold mb-4">{house.location}</h1>
          {/* bedrooms and bathrooms */}
          <h2 className=" text-gray-500 text-sm mb-8">
            {house.rooms} rooms • {house.bathrooms} bathrooms
          </h2>

          {/* Read listing description */}
          <div class="col-span-2">
            {/* host profile picture */}
            <div className="flex mb-8 items-center">
              <div className="w-10">
                <img
                  src={house.host.picture}
                  alt="host photo"
                  className="w-full rounded-full"
                />
              </div>
              {/* host name*/}
              <div className="ml-5">
                <div className="text-gray-400 text-sm">Hosted by</div>
                <div className="">
                  {house.host.firstName} {house.host.lastName}
                </div>
              </div>
            </div>
            {/*house description*/}
            <div>
              <p>{house.description}</p>
            </div>
          </div>
        </div>

        {/* Booking */}
        <div className="border rounded-md p-4 mb-10">
          <h6 className="font-bold text-lg">
            ${house.price}{' '}
            <span className="text-gray-400 text-xs">/ night</span>
          </h6>
          <form className="mt-3">
            {/*check-in check-out*/}
            <div className="xl:flex grid">
              <div className="">
                <label className="text-gray-400 text-xs">Check-in</label>
                <input
                  type="date"
                  className="border rounded-md p-2 h-8 xl:m-0 m-2"
                />
              </div>
              <div>
                <label className="text-gray-400 text-xs">Check-out</label>
                <input
                  type="date"
                  className="border rounded-md p-2 h-8 xl:m-0 m-1"
                />
              </div>
            </div>
            {/*message to the host box*/}
            <div className="mt-3">
              <textarea
                className="border p-2 w-full rounded-md"
                placeholder="Please send a message to the host..."
                rows="7"
              ></textarea>
            </div>
            {/*total and reserve button*/}
            <div className="flex justify-between items-center ">
              <div>
                3 nights= <strong>$360</strong>
              </div>
              <button className="p-2 bg-red-400 text-white text-center rounded-lg">
                Reserve
              </button>
            </div>
          </form>
        </div>
      </div>

      <hr />

      {/* import reviews */}
      <Reviews rating={house.rating} />
    </div>
  )
}

export default House
