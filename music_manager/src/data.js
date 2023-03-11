export const genreDictionary = {
    1: "Metal",
    2: "Pop",
    3: "Rock",
    4: "Rap",
    5: "Techno",
    6: "Country",
    7: "Classical",
    8: "Other"
}
export let increment = localStorage.getItem("albums") === null ? 0 : JSON.parse(localStorage.getItem("albums")).length;
export class AlbumData {
    constructor(name, author, genreId, yearOfRelease, dateOfAdd) {

        this.name = name;
        this.author = author;
        this.genreId = genreId;
        this.genre = genreDictionary[genreId]
        this.yearOfRelease = yearOfRelease;
        this.dateOfAdd = dateOfAdd;
        this.id = increment + 1;
        increment += 1;
    }
}
export const local = window.localStorage;
export const collection = local.getItem("albums") === null ? [
    new AlbumData("The Wall", "Pink Floyd", 3, 1979, "2021-01-01"),
    new AlbumData("The Dark Side of the Moon", "Pink Floyd", 3, 1973, "2022-09-12"),
    new AlbumData("Wish you were here", "Pink Floyd", 3, 1975, "2023-05-02"),
] : JSON.parse(local.getItem("albums"))
if (local.getItem("albums") === null) {
    local.setItem("albums", JSON.stringify(collection));
}
