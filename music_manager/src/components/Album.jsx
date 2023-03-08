const currentDay = new Date()
// 
export const Album = (props) =>{
    function handleDeleteClick(){
        props.deleteAlbum(props.album.id)
    }
    const dateOfAdd = new Date(props.album.dateOfAdd);
    return <div className={(dateOfAdd.toLocaleDateString()===currentDay.toLocaleDateString() ? "outline" : "")+" album " }>
    <p>{props.album.name}</p>
    <span>{props.album.author}</span>
    <span>{props.album.genre}</span>
    <span>{props.album.yearOfRelease}</span>
    <span>{dateOfAdd.toLocaleDateString()}</span>
    <button className="remove-button" onClick={handleDeleteClick}>Remove</button>
 </div>   
}