function Login() {
  return (
    <div className=" w-[400px] mx-auto">
      {/*form*/}
      <form className="flex flex-col mt-16  p-10 border-2 border-gray-300 rounded-lg">
        {/*logo*/}
        <img
          src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png
"
          alt="airbnb logo"
          className="h-6 w-20 mb-6"
        />
        {/*email*/}
        <div className="">
          <label>Email</label>
        </div>
        <input
          className="border-2 p-3 border-gray-300 rounded-lg mb-5 w-full"
          type="email"
          placeholder="email@example.com"
        />
        {/*password*/}
        <div className="">
          <label>Password</label>
        </div>
        <input
          className="border-2 p-3 border-gray-300 rounded-lg mb-5 w-full"
          type="password"
          placeholder="password here"
        />
        {/*button*/}
        <button className="p-3 w-full mb-5 bg-red-400 text-white text-center font-bold border rounded-lg">
          Login
        </button>

        {/*signup link*/}
        <div className=" mb-6">
          New to Airbnb?
          <span className="text-red-400 font-bold"> Create an Account</span>
        </div>
      </form>
    </div>
  )
}

export default Login
