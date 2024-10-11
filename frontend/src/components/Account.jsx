import React from 'react'

export const Account = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg w-80 p-6 transform transition-transform hover:-translate-y-2">
        <div className="text-center">
          <img
            src="profile-image.jpg"
            alt="Profile"
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">John Doe</h3>
          <p className="text-gray-500">@johndoe</p>
        </div>
        <div className="mt-4">
          <p className="text-gray-700"><strong>Email:</strong> johndoe@example.com</p>
          <p className="text-gray-700"><strong>Account Type:</strong> Premium</p>
          <p className="text-gray-700"><strong>Member Since:</strong> January 2022</p>
        </div>
        <div className="mt-6 flex justify-between">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
            Edit Profile
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
            Log Out
          </button>
        </div>
      </div>
    </div>
  )
}
