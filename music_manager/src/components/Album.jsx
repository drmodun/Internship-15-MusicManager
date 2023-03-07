const currentDay = new Date()
// 
export const Album = (props) =>{
    function handleDeleteClick(){
        props.deleteAlbum(props.album.id)
    }
    return <div className={(props.album.dateOfAdd.toLocaleDateString()===currentDay.toLocaleDateString() ? "outline" : "")+" album " }>
    <span>{props.album.name}</span>
    <span>{props.album.author}</span>
    <span>{props.album.genre}</span>
    <span>{props.album.yearOfRelease}</span>
    <span>{props.album.dateOfAdd.toLocaleDateString()}</span>
    <button className="remove-button" onClick={handleDeleteClick}>Remove</button>
 </div>   
}