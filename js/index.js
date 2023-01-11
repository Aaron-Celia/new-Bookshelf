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
        this.array.forEach(function (book) {
            let that2 = this
            book.comments = [];
            counter++
            let title = document.createElement('h2');
            let author = document.createElement('h4');
            let subject = document.createElement('h4');
            let language = document.createElement('h4');
            let commentButton = document.createElement('button');
            let submit = document.createElement('button')
            let displayedComments = document.createElement('p');
            submit.innerText = 'Submit'
            let commentsInput = document.createElement('input');
            commentsInput.setAttribute('maxlength', '280');
            commentButton.innerText = '📝'
            let bookContainer = document.createElement('div');
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
            commentsInput.style.display = 'none';
            submit.style.display = 'none';
            document.querySelector('#bookshelf').append(bookContainer);
            commentButton.addEventListener('click', function() {
                commentsInput.style.display = 'block';
                submit.style.display = 'block';
                submit.addEventListener('click', function(){
                    displayedComments.innerText = commentsInput.value + displayedComments.innerText;
                    book.comments.push(commentsInput.value)
                    commentsInput.value = ''
                    commentsInput.style.display = 'none';
                    submit.style.display = 'none'
                    console.log(that)
                })
            })
        })
    }
    bookRecord(){
        this.array.forEach(function(obj){
            allBooks.push(obj)
        })
    }
}

let startingShelf = new Bookshelf(bookData);


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
            commentsInput.style.display = 'none';
            submit.style.display = 'none';
            bookInstance = {};
            bookInstance.author = that.author;
            bookInstance.language = that.language;
            bookInstance.subject = that.subject;
            bookInstance.title = that.title;
            bookInstance.comments = []
            allBooks.push(bookInstance);
            startingShelf.array.push(bookInstance)
            commentButton.addEventListener('click', function() {
                commentsInput.style.display = 'block';
                submit.style.display = 'block';
                submit.addEventListener('click', function(){
                    displayedComments.innerText = commentsInput.value + displayedComments.innerText;
                    bookInstance.comments.push(commentsInput.value);
                    commentsInput.value = ''
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


let run = () => {
    startingShelf.displayArray();
    startingShelf.bookRecord();
    newBook.renderBook();
};
run();