class Contact {
    constructor(id,name,img) {
              this.name = name;
              this.id = id;
              this.img = img;
    }
}
const alice = new Contact(1,"Alice", "https://www.actualidadliteratura.com/wp-content/uploads/2020/11/alice-kellen-2.jpg")
const john = new Contact(2,"John", "https://upload.wikimedia.org/wikipedia/commons/d/d1/Elton_John_2011_Shankbone_2.JPG")
const scarlett = new Contact(3,"Scarlett", "https://de.web.img3.acsta.net/pictures/18/10/22/15/51/1936560.jpg")
const alex = new Contact(4,"Alex", "https://m.media-amazon.com/images/M/MV5BMTMyMjZlYzgtZWRjMC00OTRmLTllZTktMmM1ODVmNjljMTQyXkEyXkFqcGdeQXVyMTExNzQ3MzAw._V1_.jpg")
const nick = new Contact(5,"Nick", "https://variety.com/wp-content/uploads/2022/05/Nick-JOnas.gif")
const ann = new Contact(6,"Ann", "https://beruhmte-zitate.de/media/authors/ann-coulter.jpg")

export const Users = [alice, john, scarlett, ann, alex, nick]


