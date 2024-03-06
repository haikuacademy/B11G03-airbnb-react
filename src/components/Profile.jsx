import Nav from './Nav'
import { useState } from 'react'

function Profile() {
  const user = {
    firstName: 'John',
    lastName: 'Lopez',
    email: 'john.lopez@gmail.com',
    picture: 'https://randomuser.me/api/portraits/men/81.jpg'
  }

  const [picture, setPicture] = useState(user.picture)
  const [pictureInputValue, setPictureInputValue] = useState(user.picture)
  const handlePictureChange = (event) => {
    const newPicture = event.target.value
    setPictureInputValue(newPicture)
    setPicture(newPicture)
  }

  return (
    <div className="container mx-auto">
      <Nav />
      {/* Flexbox for profile pic and profile url */}

      <div className="border-2 rounded p-4">
        <p className="text-xl mb-4 font-bold">Your Profile</p>
        <form>
          <div className="flex gap-2 mb-4 items-center">
            <img
              src={picture}
              alt="Guest review photo"
              className="w-20 rounded-full"
            />
            <input
              type="text"
              className="border rounded h-10 font-light p-2 w-full"
              value={pictureInputValue}
              onChange={handlePictureChange}
            />
          </div>

          <div>
            <label className="text-sm font-light text-slate-500">
              First Name
            </label>
            <input
              type="text"
              className="border rounded font-light mb-4 p-2 w-full"
              defaultValue={user.firstName}
            />
          </div>

          <div>
            <label className="text-sm font-light text-slate-500">
              Last Name
            </label>
            <input
              type="text"
              className="border rounded font-light mb-4 p-2 w-full"
              defaultValue={user.lastName}
            />
          </div>

          <div>
            <label className="text-sm font-light text-slate-500">Email</label>
            <input
              type="email"
              className="border rounded font-light mb-4 p-2 w-full"
              defaultValue={user.email}
            />
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="rounded-md font-light bg-[#FB7185] text-white p-2 "
            >
              Save Changes
            </button>
            <button type="submit" className="rounded-md font-light border p-2 ">
              Logout
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Profile
