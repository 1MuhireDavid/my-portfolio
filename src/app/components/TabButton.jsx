import React from 'react'

const TabButton = ({ active, selectTab, children}) => {
    
 return (
  <button
  onClick={selectTab}
  className={`px-6 py-2 text-lg font-medium rounded-full transition-colors duration-300 ${
    active
      ? "bg-gradient-to-r from-purple-400 to-pink-600 text-white"
      : "dark:bg-gray-700 text-black hover:bg-gray-600"
  }`}
>
  {children}
</button>
  )
}

export default TabButton
