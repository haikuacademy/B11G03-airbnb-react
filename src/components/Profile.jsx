import { useNavigate } from 'react-router-dom'
import Nav from './Nav'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Profile() {
  //state
  const [user, setUser] = useState({})
  const [picture, setPicture] = useState(user.picture)
  const [pictureInputValue, setPictureInputValue] = useState(user.picture)
  const navigate = useNavigate()

  //const logout missing

  const getData = async () => {
    try {
      const response = await axios.get('https://haiku-bnb.onrender.com/profile')
      console.log('userdata', response.data)
      if (response.data.error) {
        navigate('/')
      } else {
        setUser(response.data)
        setPicture(response.data.picture)
      }
    } catch (e) {
      alert(e.message)
    }
  }

  const modifyUser = async (e) => {
    e.preventDefault()

    const form = new FormData(e.target)
    const formObj = Object.fromEntries(form.entries())
    console.log(formObj)

    try {
      const { data } = await axios.patch(
        'https://haiku-bnb.onrender.com/profile',
        formObj
      )
      console.log(data)
      alert('changes saved')
    } catch (e) {
      alert(e.message)
    }
  }

  const logOut = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.get('https://haiku-bnb.onrender.com/logout')
      console.log({ data })
      localStorage.removeItem('isLoggedIn')
      navigate('/')
    } catch (e) {
      alert(err.message)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  //emis login
  //emi@haiku.com
  //123123

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
        <form onSubmit={modifyUser}>
          <div className="flex gap-2 mb-4 items-center">
            <img
              src={picture}
              alt="Guest review photo"
              className="w-20 rounded-full"
            />
            <input
              name="picture"
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
              name="first_name"
              type="text"
              className="border rounded font-light mb-4 p-2 w-full"
              defaultValue={user.first_name}
            />
          </div>

          <div>
            <label className="text-sm font-light text-slate-500">
              Last Name
            </label>
            <input
              name="last_name"
              type="text"
              className="border rounded font-light mb-4 p-2 w-full"
              defaultValue={user.last_name}
            />
          </div>

          <div>
            <label className="text-sm font-light text-slate-500">Email</label>
            <input
              name="email"
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
            <button
              onClick={logOut}
              type="submit"
              className="rounded-md font-light border p-2 "
            >
              Logout
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Profile
