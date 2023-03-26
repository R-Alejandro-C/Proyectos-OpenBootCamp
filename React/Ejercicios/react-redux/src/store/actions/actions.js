let nextTodoId = 0;


export const ADD_TODO = "ADD_TODO"

export const TOGGLE_TODO = "TOGGLE_TODO"

export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER"

/**
@param {String} text,

 */
export const addTodo =(text) =>{
    return{
        type: ADD_TODO,
        payload:{
            id: nextTodoId ++,
            text
        }
    }
}
/**
 * @param {number} id
 */
export const toggleTodo = (id)=>{
    return{
        type:TOGGLE_TODO,
        id
    }
}
/**
 * 
@param {String} filter
 */
export const setVisibilityFilter = (filter)=>{
    return{
type:SET_VISIBILITY_FILTER,
payload:{
    filter
}
    }
}