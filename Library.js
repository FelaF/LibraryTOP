function Book(title,author,pages,hRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = hRead
    this.info = function(){
        if (this.read == true){
            return this.title + " by " + this.author + " is " + this.pages + " pages has been read";
        }
        else if (this.read == false) {
            return this.title + " by " + this.author + " is " + this.pages + " pages has not been read";
        }
    }};


const TheLightningThief = new Book("The Lightning Thief","Rick Riordan", 400, true)

console.log(TheLightningThief.info())

const TheCatintheHat = new Book("The Cat in the Hat", "Dr.Suess", 50, false)
const Fahrenheit451 = new Book("Fahrenheit 451", "Ray Bradbury", 176, false)
const LordoftheFiles = new Book("Lord of the Flies", "William Golding", 336, true)
const MobyDick = new Book("Moby Dick", "Herman Melville", 632, false)
const TheOddessy = new Book("The Oddessy", "Homer", 416, false)

Library = []

console.log(Object.getPrototypeOf(TheCatintheHat) === Book.prototype)
console.log(Object.getPrototypeOf(TheLightningThief) === Book.prototype)
console.log(TheCatintheHat.valueOf())

function addBooktoLibrary(Book){
    newBook = Book.valueOf()
    console.log(newBook)
    Library.push(newBook)
}

console.log(Library)


addBooktoLibrary(TheCatintheHat)
addBooktoLibrary(Fahrenheit451)
addBooktoLibrary(LordoftheFiles)
addBooktoLibrary(MobyDick)
addBooktoLibrary(TheOddessy)


function displayLibrary(Library){
    for(let i= 0; i < Library.length; i++){
        console.log(Library[i].info())
    }
}
displayLibrary(Library)


