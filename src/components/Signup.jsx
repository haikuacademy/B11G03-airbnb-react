import { useState } from 'react'

function Signup() {
  //state values
  const [validEmail, setValidEmail] = useState(true)
  const [validPassword, setValidPassword] = useState(true)

  //prevent the form to be submited
  const submitForm = async (event) => {
    event.preventDefault()
    console.log(event.target.email.value)
    console.log(event.target.password.value)
  }
  //function to validate the email
  const validateEmail = (email) => {
    if ((email.includes('@') && email.includes('.')) || !email) {
      setValidEmail(true)
    } else {
      console.log('Email is not valid')
      setValidEmail(false)
    }
  }
  //function to validate the password
  const validatePassword = (password) => {
    if (password.lenght < 6) {
      setValidPassword(true)
    } else {
      setValidPassword(false)
    }
  }

  return (
    <div className=" rounded-md w-80 mx-auto mt-16 border-2 p-4">
      <form className="grid gap-2 w-full " onSubmit={submitForm}>
        <span className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png"
            className="h-6"
          />
        </span>
        {/* First Name */}
        <label className="text-slate-500 text-sm">First Name</label>
        <input className="border rounded-md h-10 px-2" type="text" />

        {/* Last Name */}
        <label className="text-slate-500 text-sm">Last Name</label>
        <input className="border rounded-md h-10 px-2" type="text" />

        {/* Email */}
        <label className="text-slate-500 text-sm">Email</label>
        {!validEmail && <span className=" text-red-700">Invalid Email</span>}
        <input
          className="border rounded-md h-10 px-2"
          type="email"
          name="email"
          onChange={(e) => validateEmail(e.target.value)}
        />

        {/* Password */}
        <label className="text-slate-500 text-sm">Password</label>
        {!validPassword && (
          <span className=" text-red-700">Password too short</span>
        )}
        <input
          className="border rounded-md h-10 px-2"
          type="password"
          name="password"
          onChange={(e) => validatePassword(e.target.value)}
        />

        {/* Profile Picture */}
        <label className="text-slate-500 text-sm">Profile Picture</label>
        <input
          className="border rounded-md h-10 px-2"
          type="text"
          placeholder="https://..."
        />

        {/* Submit button */}
        <button className="rounded-md bg-[#FB7185] text-white p-2 mt-4">
          Register
        </button>

        <div className="text-xs ">
          Already have an account?{` `}
          <span className="underline text-xs text-red-500">Login here</span>
        </div>
      </form>
    </div>
  )
}

export default Signup
