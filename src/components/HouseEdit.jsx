import Nav from './Nav'
import { Link } from 'react-router-dom'

function HouseEdit() {
  const defaultDescription =
    'This enchanting Airbnb villa in Bali offers an exquisite blend of traditional Balinese architecture and modern luxury. Tucked away in lush tropical greenery, the villa features a stunning open-air living space that allows the gentle Balinese breeze to flow through, creating a tranquil and refreshing ambiance.'

  const defaultPhoto = 'https://www.haikuacademy.com/photos/09.png'
  return (
    <div className="container mx-auto">
      <Nav />
      {/* House Edit Form */}
      <div className="border rounded-md p-4 ">
        <h5 className="mb-4">Edit your Listing</h5>
        {/* Grid layout */}

        <div className="grid grid-cols-2 gap-24">
          {/* Starting Column 1 of the main grid */}
          <div class="grid gap-0">
            {/* House Location */}
            <label className="text-slate-400 text-sm mb-[-8px]">Location</label>
            <input
              className="border rounded-md h-10 px-2"
              type="text"
              defaultValue={'Bali'}
            />

            {/* Bedrooms */}
            <label className="text-slate-400 text-sm mb-[-8px]">Bedroom</label>
            <input
              className="border rounded-md h-10 px-2"
              type="text"
              defaultValue={3}
            />

            {/* Bathrooms */}
            <label className="text-slate-400 text-sm mb-[-8px]">Bathroom</label>
            <input
              className="border rounded-md h-10 px-2"
              type="text"
              defaultValue={2}
            />

            {/* Price per night */}
            <label className="text-slate-400 text-sm mb-[-8px]">
              Price per Night
            </label>
            <input
              className="border rounded-md h-10 px-2"
              type="text"
              defaultValue={140}
            />

            {/* Description */}
            <label className="text-slate-400 text-sm mb-[-8px]">
              Description
            </label>
            <textarea
              className="border rounded-md px-2"
              rows={4}
              defaultValue={defaultDescription}
            />

            <div className="flex gap-2">
              {/* Submit button */}
              <button className="rounded-md bg-[#FB7185] w-32 text-white text-base p-2 mt-4">
                Save Changes
              </button>
              {/* Cancel button */}
              <Link
                to="/listings"
                className="rounded-md border-2 w-20 text-base p-2 mt-4"
              >
                Cancel
              </Link>
            </div>
          </div>
          {/* Starting Column 2 of the main grid */}
          <div class="grid gap-2">
            {/* Add/Edit photos section */}
            <label className="text-slate-400 text-sm mb-[-8px]">Photos</label>
            <input
              className="border rounded-md h-10 px-2"
              type="text"
              defaultValue={defaultPhoto}
            />
            <input
              className="border rounded-md h-10 px-2"
              type="text"
              defaultValue={defaultPhoto}
            />
            <input
              className="border rounded-md h-10 px-2"
              type="text"
              defaultValue={defaultPhoto}
            />
            <input
              className="border rounded-md h-10 px-2"
              type="text"
              defaultValue={defaultPhoto}
            />
            <input
              className="border rounded-md h-10 px-2"
              type="text"
              defaultValue={defaultPhoto}
            />
            <input
              className="border rounded-md h-10 px-2"
              type="text"
              defaultValue={defaultPhoto}
            />
            <input
              className="border rounded-md h-10 px-2"
              type="text"
              defaultValue={defaultPhoto}
            />
            <input
              className="border rounded-md h-10 px-2"
              type="text"
              defaultValue={defaultPhoto}
            />
            <input
              className="border rounded-md h-10 px-2"
              type="text"
              defaultValue={defaultPhoto}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HouseEdit
