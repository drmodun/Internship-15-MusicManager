import React from "react"
import { AlbumData } from "../data";
/*1 : "Metal",
    2 : "Pop",
    3 : "Rock",
    4 : "Rap",
    5 : "Techno",
    6 : "Country",
    7 : "Classical",
    8 : "Other"*/
export const AlbumInput = (props) =>{
    const[text, setText] = React.useState("");
    const [name, setName] = React.useState("");
    const [Author, setAuthor] = React.useState("");
    const [Genre, setGenre] = React.useState("0");
    const [yearOfRelease, setYearOfRelease] = React.useState("");
    const [dateOfAdd, setDateOfAdd] = React.useState("");
    function handleSubmit(e){
        e.preventDefault();
        const newAlbum = new AlbumData(name, Author, Genre, yearOfRelease, new Date(dateOfAdd.valueAsDate));
        props.handleNewAlbum(newAlbum);

    }
    return <div className="album-form-wrapper"><form action="" onSubmit={e=>handleSubmit(e)} className="album-form">
        <label>
            Album Name:
            <input type="text" id="0" placeholder="Album name" value = {name} onChange = {e=>setName(e.target.value)}/>
        </label>
         <label>
            Author Name:
            <input type="text" id="1" placeholder="Author name" value = {Author} onChange = {e=>setAuthor(e.target.value)}/>
        </label> 
        <label>
            Genre:
            <select type="select" id="2" placeholder="Genre" value = {Genre} onChange = {e=>setGenre(e.target.value)}>
                <option value="1">Metal</option>
                <option value="2">Pop</option>
                <option value="3">Rock</option>
                <option value="4">Rap</option>
                <option value="5">Techno</option>
                <option value="6">Country</option>
                <option value="7">Classical</option>
                <option value="8">Other</option>
                </select>
        </label> 
        <label>
            Year of release:
            <input type="text" placeholder="Yea of Release" value = {yearOfRelease} onChange = {e=>setYearOfRelease(e.target.value)}/>
        </label> 
        <label>
           Date of add:
            <input type="text"  placeholder="Date of addition" value = {dateOfAdd} onChange = {e=>setDateOfAdd(e.target.value)}/>
        </label>
        <button type = "submit">Submit Album</button>
    </form>
    </div>
}