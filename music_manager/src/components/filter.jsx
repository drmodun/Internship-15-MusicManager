import React from "react"

export const FilterSection = (props)=>{
    const [inputFilter, setInputFilter] = React.useState("");
    const [Genre, setGenre] = React.useState("0");
    function handleChange(e)
    {
        e.preventDefault();
        props.filterFunction(inputFilter, Number(Genre));
    }
    return  <div className="filter-wrapper">
    <div className="filter-box">
        <h2>Filter</h2>
        <div className="filter-content">
        <span>Enter album name here:</span>
        <input type="text" className="filter" value = {inputFilter} onChange = {(e)=>{setInputFilter(e.target.value); handleChange(e)}}/>
        </div>  
        <div className="filter-content">
        <span>Enter</span>
        <select type="select" className="filter" placeholder="Sve" value = {Genre} onChange = {e=>{setGenre(e.target.value); handleChange(e)}}>
                <option value="0">Sve</option>
                <option value="1">Metal</option>
                <option value="2">Pop</option>
                <option value="3">Rock</option>
                <option value="4">Rap</option>
                <option value="5">Techno</option>
                <option value="6">Country</option>
                <option value="7">Classical</option>
                <option value="8">Other</option>
                </select>
            </div>
    </div>
    </div>
}