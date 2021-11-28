import React from 'react' 
import Book from './Book';

const Books = (props) =>{
  // const coordinates with this call in the app.js. <Books books = {books}/> (second 'books' is the books inside const)
  const { books, updateBook, deleteBook, showUpdateForm } = props;
  return (
    <div style={styles.container}>
      <h1>Books in Stock</h1>
      {books.map((book)=> (
      <Book 
      key = {book.id} 
      {...book}
      showUpdateForm={showUpdateForm}
      updateBook={updateBook}
      deleteBook={deleteBook}
      // cleaner way to import book properties is to spread out over the component 
      // title={book.title}
      // author={book.author}
      />
      ))}
        <div>
         {/* Books.map((book) => {
      //     return (
      //       <h3>{book.title}</h3>
      //       <p>{book.author</p> )
      //   }); */}
        </div>
    </div>  
  );
};

const styles = {
  container:{
    border:'1px solid blue',
    margin: '10px',
    padding: '5px',
  }
};

export default Books;