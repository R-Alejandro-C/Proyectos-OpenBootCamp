import React from 'react'
import { connect } from 'react-redux'
import Filter from '../pure/filter'
import { setVisibilityFilter } from '../../store/actions/actions'


const mapStateToProps = (state, owProps) => {
   return {
    active: owProps.filter === state.filterState
    }
}

const mapDispatchToProps = (dispatch, owProps)=> {
    return{
        onclick:()=>{
            dispatch(setVisibilityFilter(owProps.filter))
        }
    }
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter)
export default FilterContainer