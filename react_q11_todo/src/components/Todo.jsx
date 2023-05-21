import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FiEdit3 } from 'react-icons/fi'

function Todo() {
  return (
    <div>
        <tr className="odd:bg-gray-50 flex justify-between">
        <td className="whitespace-nowrap px-6 py-2 font-medium text-gray-900">
          John Doe
        </td>
        
        <td className="whitespace-nowrap px-6 py-2 text-gray-700 flex gap-4 text-xl">
            <FiEdit3 />
            <RiDeleteBin6Line />
        </td>
      </tr>
    </div>
  )
}

export default Todo