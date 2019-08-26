import React from 'react'

const FilterTodo = (props) => {
    return(
        <div>
            Filter Todos:
            <select onChange={event => props.filterTodo(event)}>
                <option value="200">200</option>
                <option value="100">100</option>
                <option value="50">50</option>
                <option value="20">20</option>
                <option value="10">10</option>
                <option value="5">5</option>
            </select>
        </div>
    )
}

export default FilterTodo
