import React from 'react'
import { useReducer } from 'react'
import inputReducer from '../reducers/inputReducers'

function AddTodo() {
    const [state, dispatch] = useReducer(inputReducer, {input: ""})

    function handleForm(e) {
        e.preventDefault()
        console.log(state)

    }
  return (
    <div className='container mx-auto mt-6'>
        <h2 className='text-2xl font-semibold ml-20'>Your Todo App</h2>
    <form onSubmit={handleForm} className="mx-auto mt-12 max-w-xl">
          <div className="flex flex-col items-center sm:flex-row sm:justify-center">
            <div className="flex w-full max-w-2xl items-center space-x-2">
              <input
                onChange={(e) => dispatch({type: "ADD", payload: e.target})}
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
                type="text"
                placeholder="Enter your todo"
                value={state.input}
                name="input"
              />
              <button
                type="submit"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add
              </button>
            </div>
          </div>
        </form>
    </div>
  )
}

export default AddTodo