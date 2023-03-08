import React from "react"

export const FilterSection = (props)=>{
    const [inputFilter, setInputFilter] = React.useState("");
    return  <div className="filter-wrapper">
    <div className="filter-box">
        <h2>Filter</h2>
        <div className="filter-content">
        <span>Enter album name here:</span>
        <input type="text" className="filter" value = {inputFilter} onChange = {(e)=>{setInputFilter(e.target.value); props.filterFunction(e.target.value)}}/>
        </div>
    </div>
    </div>
}