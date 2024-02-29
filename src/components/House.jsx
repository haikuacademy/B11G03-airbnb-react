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
        <div className="border rounded-md m-5 p-5 boder">
          <div className="font-bold text-lg">
            $120 <span className="text-gray-500">/ night</span>
          </div>
          {/* flexbox for booking */}
          <div className="flex justify-between">
            {/*Total price*/}
            <div class="">
              3 nights = <span className="font-bold">$360</span>
            </div>
            <div className="flex bg-blue-200">
              {/* Reserve button */}
              <div class="bg-blue-600">4.2</div>
            </div>
          </div>
        </div>
      </div>

      {/* Read listing description */}
      <div className="grid grid-cols-3 gap-24 mb-10">
        <div class="col-span-2">
          <div className="flex justify-start gap-2">
            {/* host profile picture */}
            <div className="">3.2</div>
            {/* host name*/}
            <div>
              <h1 className="text-gray-400">Hosted by</h1>
              <h3 className="font-bold">Linda Smith</h3>
              <text>
                Nestled on a serene beachfront, this charming Airbb house offers
                a picturesque escape. The exterior boasts a classic beach house
                aesthetic with weathered wood siding and a spacious wraparound
                deck, perfect for savoring the ocean breeze. Inside, you’re
                greeted by an open-concept living area bathed in natural light,
                complemented by cozy furnishings and nautical accents. The house
                features three comfortable bedrooms, each with a unique coastal
                theme, and two modern bathrooms. The fully equipped kitchen
                opens to a dining area that’s ideal for intimate meals or
                entertaining guests. Large glass doors in the living room lead
                to the deck, where you can enjoy stunning sunset views over the
                ocean. This idyllic retreat is a stone’s throw away from the
                soft sandy beach, making it the perfect spot for beach lovers
                and those seeking a tranquil getaway.
              </text>
            </div>
          </div>
        </div>
      </div>

      {/* import reviews */}
      <Reviews />
    </div>
  )
}

export default House
