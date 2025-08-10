import { useState } from "react"

const BookShelf = () => {

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);
    const [newBook, setNewBook] = useState({ title: '', author: '' })

    const handleInputChange = (event) => {
        setNewBook({ ...newBook, [event.target.name]: event.target.value })
        console.log(books)
        console.log(newBook)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setBooks([...books, newBook])
        setNewBook({ title: '', author: '' })
        console.log("button works")
    }

    return (
        <>
            <div className="bookshelfDiv">
                <div className="formDiv">
                    <h3>Add a Book</h3>
                    <div>
                          <form onSubmit={handleSubmit}>
                        <label htmlFor="title" > Title:</label > <br />
                        <input type="text" name="title" onChange={handleInputChange} value={newBook.title} />

                        <label htmlFor="author">Author:</label> <br />
                        <input type="text" name="author" onChange={handleInputChange} value={newBook.author} />

                        <button type="submit">Add Book</button>
                    </form> 
                    </div>
                 

                </div>
                <div className="bookCardsDiv">{books.map((book) => {
                    return (
                        <div className="bookCard">
                            {book.title}
                            <p>by {book.author}</p>
                        </div>
                    )
                })}</div>
            </div>
        </>
    )
}

export default BookShelf



