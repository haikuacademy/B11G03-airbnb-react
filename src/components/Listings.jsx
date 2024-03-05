import HouseCard from './HouseCard'
import Nav from './Nav'

function Listings() {
  // creating 1 house object
  const house1 = {
    location: 'Phuket, Thailand',
    rooms: 2,
    bathrooms: 2,
    price: 120,
    rating: 4,
    reviews: 32,
    photo:
      'https://res.cloudinary.com/dsko6ntfj/image/upload/v1640295026/portal/web%20development%20beginners/05%20Project%20Airbnb/house%2001/house_01_01.png'
  }

  // duplicating the data to create 2 more copies of house1
  const house2 = { ...house1 }
  const house3 = { ...house1 }

  // creating an array from the dummy objects
  const housesArray = [house1, house2, house3]
  return (
    <div className="container mx-auto">
      <Nav />
      {/* Flexbox for new listings */}
      <div className="border rounded-md p-4 ">
        <h5 className="mb-4">List a House</h5>
        {/* Grid layout */}

        <div className="grid grid-cols-2 gap-24">
          {/* Starting Column 1 of the main grid */}
          <div class="grid gap-0">
            {/* House Location */}
            <label className="text-slate-400 text-sm mb-[-8px]">Location</label>
            <input className="border rounded-md h-10 px-2" type="text" />

            {/* Bedrooms */}
            <label className="text-slate-400 text-sm mb-[-8px]">Bedroom</label>
            <input className="border rounded-md h-10 px-2" type="text" />

            {/* Bathrooms */}
            <label className="text-slate-400 text-sm mb-[-8px]">Bathroom</label>
            <input className="border rounded-md h-10 px-2" type="text" />

            {/* Price per night */}
            <label className="text-slate-400 text-sm mb-[-8px]">
              Price per Night
            </label>
            <input className="border rounded-md h-10 px-2" type="text" />

            {/* Description */}
            <label className="text-slate-400 text-sm mb-[-8px]">
              Description
            </label>
            <textarea className="border rounded-md px-2" rows={4} />

            <div className="flex gap-2">
              {/* Submit button */}
              <button className="rounded-md bg-[#FB7185] w-32 text-white text-base p-2 mt-4">
                Save Changes
              </button>
              {/* Cancel button */}
              <button className="rounded-md border-2 w-20 text-base p-2 mt-4">
                Cancel
              </button>
            </div>
          </div>
          {/* Starting Column 2 of the main grid */}
          <div class="grid gap-2">
            {/* Add/Edit photos section */}
            <label className="text-slate-400 text-sm mb-[-8px]">Photos</label>
            <input className="border rounded-md h-10 px-2" type="text" />
            <input className="border rounded-md h-10 px-2" type="text" />
            <input className="border rounded-md h-10 px-2" type="text" />
            <input className="border rounded-md h-10 px-2" type="text" />
            <input className="border rounded-md h-10 px-2" type="text" />
            <input className="border rounded-md h-10 px-2" type="text" />
            <input className="border rounded-md h-10 px-2" type="text" />
            <input className="border rounded-md h-10 px-2" type="text" />
            <input className="border rounded-md h-10 px-2" type="text" />
          </div>
        </div>
      </div>

      {/* Flexbox to display existing house listings */}
      <div className="grid grid-cols-5 gap-3 mt-4">
        {housesArray.map((house, index) => (
          <HouseCard key={index} house={house} />
        ))}
      </div>
    </div>
  )
}

export default Listings
