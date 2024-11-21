import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Nav } from './Nav';

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <>
    <div className=" bg-gray-300 fixed top-0 left-0 w-full z-50">
        <Nav />
      </div>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                className="bg-white p-8 rounded-lg shadow-lg w-96"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Sign In
                </button>

                <p className="text-center text-sm mt-4">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-blue-500 hover:underline" >Register</Link>
                        
                </p>
            </form>
        </div>
        </>
  )
}
