import Nav from './Nav'

function Profile() {
  return (
    <div className="container mx-auto">
      <Nav />
      {/* Flexbox for profile pic and profile url */}

      <div className="border-2 rounded p-4">
        <p className="text-xl mb-4 font-bold">Your Profile</p>
        <form>
          <div className="flex gap-2 mb-4 items-center">
            <img
              src="https://randomuser.me/api/portraits/men/81.jpg"
              alt="Guest review photo"
              className="w-20 rounded-full"
            />
            <input
              type="text"
              className="border rounded h-10 font-light p-2 w-full"
              defaultValue="https://randomuser.me/api/portraits/men/81.jpg"
            />
          </div>

          <div>
            <label className="text-sm font-light text-slate-500">
              First Name
            </label>
            <input
              type="text"
              className="border rounded font-light mb-4 p-2 w-full"
              defaultValue="John"
            />
          </div>

          <div>
            <label className="text-sm font-light text-slate-500">
              Last Name
            </label>
            <input
              type="text"
              className="border rounded font-light mb-4 p-2 w-full"
              defaultValue="Lopez"
            />
          </div>

          <div>
            <label className="text-sm font-light text-slate-500">Email</label>
            <input
              type="email"
              className="border rounded font-light mb-4 p-2 w-full"
              defaultValue="john.lopez@gmail.com"
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
