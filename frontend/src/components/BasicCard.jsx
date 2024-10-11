import React from 'react'

export const BasicCard = ({ title = "Default Title",
  description = "This is the default description for the card.",
  image = "https://via.placeholder.com/400x200" }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  )
}
