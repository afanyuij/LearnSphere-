

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

export function Login() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex min-h-screen">
      {/* Left side - Login Form */}
      <div className="w-full lg:w-1/2 flex bg-gray-50 flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="mb-10">
          <span className="text-xl font-bold text-[#1e242c]">LearnSphere</span>
        </div>

        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2 text-gray-500">Welcome Back!</h1>
          <p className="text-gray-600">Please enter log in details below</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border text-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e242c]"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-800">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border text-gray-800 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e242c]"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#1e242c] focus:ring-[#1e242c] border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-[#1e242c] hover:text-opacity-80">
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1e242c] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1e242c]"
          >
            Log in
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
          <button className="btn bg-white text-black border-[#e5e5e5]">
        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Login with Google
            </button>
            <button className="btn bg-black text-white border-black">
                <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                Login with GitHub
                </button>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="font-medium text-[#1e242c] hover:text-opacity-80">
            Sign Up
          </a>
        </p>
      </div>

      {/* Right side - Banner */}
      <div className="hidden lg:block lg:w-1/2 bg-[#1e242c] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#1e242c]">
          <div className="absolute inset-0 opacity-20">
            {/* Background pattern */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-white opacity-10 rounded"></div>
            <div className="absolute top-40 right-40 w-10 h-10 bg-white opacity-10 rounded"></div>
            <div className="absolute bottom-40 right-20 w-15 h-15 bg-white opacity-10 rounded"></div>
            <div className="absolute bottom-20 left-40 w-10 h-10 bg-white opacity-10 rounded"></div>
            <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-white opacity-10 rounded"></div>
          </div>
        </div>

        <div className="relative h-full flex flex-col justify-center px-12 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Academic Excellence Platform</h2>
            <p className="text-white opacity-80">
              Join our platform to streamline your study processes, enhance productivity, and achieve academic success.
            </p>
            <p className="text-white opacity-80">
            Unlock your dashboard and pick up right where you stopped.
            </p>
          </div>

          <div className="mt-auto">
            <div className="flex flex-col space-y-4">
              <div className="text-white opacity-70 text-sm">
                <div className="flex justify-between mb-2">
                  <span>Study Hours</span>
                  <span>+15% this week</span>
                </div>
                <div className="w-full bg-white bg-opacity-20 h-2 rounded-full">
                  <div className="bg-white h-2 rounded-full w-3/4"></div>
                </div>
              </div>

              <div className="text-white opacity-70 text-sm">
                <div className="flex justify-between mb-2">
                  <span>Assignments Completed</span>
                  <span>92%</span>
                </div>
                <div className="w-full bg-white bg-opacity-20 h-2 rounded-full">
                  <div className="bg-white h-2 rounded-full w-11/12"></div>
                </div>
              </div>

              <div className="text-white opacity-70 text-sm">
                <div className="flex justify-between mb-2">
                  <span>Knowledge Retention</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-white bg-opacity-20 h-2 rounded-full">
                  <div className="bg-white h-2 rounded-full w-4/5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
