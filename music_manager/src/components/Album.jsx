const currentDay = new Date()
// 
export const Album = (props) =>{
    return <div className={(props.album.dateOfAdd.toLocaleDateString()===currentDay.toLocaleDateString() ? "outline" : "")+" album " }>
    <span>{props.album.id}</span>
    <span>{props.album.name}</span>
    <span>{props.album.author}</span>
    <span>{props.album.genre}</span>
    <span>{props.album.yearOfRelease}</span>
    <span>{props.album.dateOfAdd.toLocaleDateString()}</span>
 </div>   
}