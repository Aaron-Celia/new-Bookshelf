import { bookData } from "./book-data.js";
const allBooks = []

let counter = 0;
let bookInstance;
class Bookshelf {
    constructor(array) {
        this.array = array;
        // this.comments = [];
    }
    displayArray() {
        let that = this
        // cycles through existing bookshelf to display everything to page
        this.array.forEach(function (book) {
            let that2 = this
            // sets a property of each book called comments equal to an empty array, when a comment is made this array becomes populated with the users input
            book.comments = [];
            counter++
            let title = document.createElement('h2');
            let author = document.createElement('h4');
            let subject = document.createElement('h4');
            let language = document.createElement('h4');
            // the following 7 lines sets up the comments section
            let commentButton = document.createElement('button');
            let submit = document.createElement('button')
            let displayedComments = document.createElement('p');
            submit.innerText = 'Submit'
            let commentsInput = document.createElement('input');
            commentsInput.setAttribute('maxlength', '280');
            commentButton.innerText = '📝'
            let bookContainer = document.createElement('div');
            // gives each book a unique ID incase it is needed later on
            bookContainer.id = 'book' + counter;
            title.innerText = book.title;
            author.innerText = book.author;
            subject.innerText = book.subject;
            language.innerText = book.language;
            title.className = 'title';
            bookContainer.append(title);
            bookContainer.append(author);
            bookContainer.append(subject);
            bookContainer.append(language);
            bookContainer.append(displayedComments);
            bookContainer.append(commentsInput);
            bookContainer.append(submit)
            bookContainer.append(commentButton)
            // the 2 lines below hide the comments input and submit button until the comments button is clicked
            commentsInput.style.display = 'none';
            submit.style.display = 'none';
            document.querySelector('#bookshelf').append(bookContainer);
            commentButton.addEventListener('click', function() {
                // the following two lines display the neccesary elements to make comments
                commentsInput.style.display = 'block';
                submit.style.display = 'block';
                submit.addEventListener('click', function(){
                    displayedComments.innerText = commentsInput.value + displayedComments.innerText;
                    // the line below pushes the comment to the comment property of whatever book is being commented on
                    book.comments.push(commentsInput.value)
                    commentsInput.value = ''
                    // the 2 lines below hide the elements after a user submits a comment
                    commentsInput.style.display = 'none';
                    submit.style.display = 'none'
                    console.log(that)
                })
            })
        })
    }
    bookRecord(){
        // pushes all the books to a new array
        this.array.forEach(function(obj){
            allBooks.push(obj)
        })
    }
}

let startingShelf = new Bookshelf(bookData);

// users added objects
class Book {
    constructor(title, author, subject, language) {
        this.title = title;
        this.author = author;
        this.subject = subject;
        this.language = language;
        this.comments = [];
    }
    renderBook() {
        let that = this
        let addButton = document.querySelector('#add');
        addButton.addEventListener('click', function () {
            counter++
            let bookContainer = document.createElement('div');
            let title = document.createElement('h2');
            let author = document.createElement('h4');
            let subject = document.createElement('h4');
            let language = document.createElement('h4');
            let commentButton = document.createElement('button');
            let submit = document.createElement('button')
            let displayedComments = document.createElement('p');
            submit.innerText = 'Submit'
            let commentsInput = document.createElement('input')
            commentsInput.setAttribute('maxlength', '280')
            commentButton.innerText = '📝'
            // gives each book a unique ID incase it is needed later on
            bookContainer.id = 'book' + counter;
            that.title = document.querySelector('#title').value;
            that.author = document.querySelector('#author').value;
            that.subject = document.querySelector('#subject').value;
            that.language = document.querySelector('#language').value;
            title.innerText = that.title;
            author.innerText = that.author;
            subject.innerText = that.subject;
            language.innerText = that.language;
            title.className = 'title';
            bookContainer.append(title);
            bookContainer.append(author);
            bookContainer.append(subject);
            bookContainer.append(language);
            bookContainer.append(displayedComments);
            bookContainer.append(commentsInput);
            bookContainer.append(submit)
            bookContainer.append(commentButton);
            document.querySelector('#bookshelf').prepend(bookContainer);
            // hides comment elements
            commentsInput.style.display = 'none';
            submit.style.display = 'none';
            bookInstance = {};
            bookInstance.author = that.author;
            bookInstance.language = that.language;
            bookInstance.subject = that.subject;
            bookInstance.title = that.title;
            bookInstance.comments = []
            // pushes added book to array of all books on the page.
            allBooks.push(bookInstance);
            startingShelf.array.push(bookInstance)
            commentButton.addEventListener('click', function() {
                // displays comment elements upon the click of the comments button
                commentsInput.style.display = 'block';
                submit.style.display = 'block';
                submit.addEventListener('click', function(){
                    displayedComments.innerText = commentsInput.value + displayedComments.innerText;
                    bookInstance.comments.push(commentsInput.value);
                    // erases the comment input field after it is clicked and comment is loaded to page
                    commentsInput.value = ''
                    // re-hides comment elements until comment button is clicked again
                    commentsInput.style.display = 'none';
                    submit.style.display = 'none'
                    console.log(startingShelf);
                })
            })
            // console.log(startingShelf);
        })
    }
}

let newBook = new Book()

// runs the program
let run = () => {
    startingShelf.displayArray();
    startingShelf.bookRecord();
    newBook.renderBook();
};
run();