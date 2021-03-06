import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { mountComponents } from 'react_ujs';
import BookForm from './BookForm';
import Books from './Books';

const App = ()=> {
  const [showNewForm, setShowNewForm] = useState(false);
  const [books, setBooks] = useState([]);
// when this component mounts this callback will run
  useEffect(()=>{
    getBooks();
  },[])

  const getBooks = async () =>{
    let response = await axios.get('/books');
    console.log(response.data);
    setBooks(response.data);
  };

  const toggleNewForm = ()=>{
    setShowNewForm(!showNewForm);
  };

  const addBook = (book) => {
    setBooks([book, ...books]);
  };

  const deleteBook = async (id) =>{
    // this removes from DB
    let response = await axios.delete(`/books/${id}`);
    // next 2 lines remove from UI
    let filteredBooks = books.filter((b) => b.id !== id);
    setBooks(filteredBooks);
  };

  const updateBook = (book)=> {
    let updateBooks = books.map((b)=>(b.id===book.id ? book : b));
    setBooks(updateBooks);
  };

  return (
    <div style = {styles.container}>
      <h1 style = {styles.header}>This is a 1 page app</h1>
      <button onClick={toggleNewForm} style = {styles.button}>{showNewForm ? "Cancel" : "New Book"}</button>
      {showNewForm && <BookForm addBook={addBook} />}
       {/* first Books refers to the react component Books.js. second books (books=) is name of the prop. third books is the value (array created from the useState). */}
      <Books books = {books} updateBook={updateBook} deleteBook={deleteBook}/>
    </div>
  );
};


const styles ={
  container: {border:'2px solid black', maxWidth:'800px', margin:'auto'},
  header: {color: 'red', margin:'10px' },
  button: {backgroundColor : 'lightblue', margin:'20px'},
};

export default App;