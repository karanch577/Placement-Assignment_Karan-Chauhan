import React from 'react'
import TodosContext from './TodosContext'

function TodosProvider(props) {
    
  return (
    <TodosContext.Provider>
        {props.children}
    </TodosContext.Provider>
  )
}

export default TodosProvider