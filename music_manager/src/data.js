const genreDictionary = {
    1 : "Metal",
    2 : "Pop",
    3 : "Rock",
    4 : "Rap",
    5 : "Techno",
    6 : "Country",
    7 : "Classical",
    8 : "Other"
}
export class AlbumData{
    constructor(id, name, author, genreId, yearOfRelease, dateOfAdd){
        this.id = id;
        this.name = name;
        this.author = author;
        this.genreId = genreId;
        this.genre = genreDictionary[genreId]
        this.yearOfRelease = yearOfRelease;
        this.dateOfAdd = dateOfAdd;
    }
}
export const collection = localStorage.getItem("albums")===null ? 
[
    new AlbumData(1,"Bad", "Micahel Jackson", 3, new Date(28,12,2002).getFullYear(), new Date()),
    new AlbumData(2,"Sample", "Jackson", 4, new Date(28,11,2002).getFullYear(), new Date()),
    new AlbumData(1,"Test", "Micahel" , 8, new Date(28,10,2002).getFullYear(), new Date()),
] : localStorage.getItem("albums")
