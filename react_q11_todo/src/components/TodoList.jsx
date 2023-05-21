import React from 'react'
import Todo from './Todo'

function TodoList() {
  return (
    <div className='container mx-auto mt-6 border w-[65%]'>
        <h2 className='text-xl'>Todo List -</h2>

<div className="overflow-x-auto">
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white">

    <tbody className="divide-y divide-gray-200">
      <Todo />
    </tbody>
  </table>
</div>
    </div>
  )
}

export default TodoList