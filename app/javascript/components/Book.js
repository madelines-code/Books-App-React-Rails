import React from 'react'
import BookForm from './BookForm';
import Books from './Books';

const Book = (props)=>{
  const { title, author, id, updateBook, deleteBook } = props;
  return (
    <div style={styles.container}>
      <h2>{ title }</h2>
      <h4>By { author }</h4>
      <p>ID: { id }</p>
      <hr/>
      <BookForm {...props} updateBook={updateBook} />
      <hr/>
      <button onClick={() => deleteBook(id)} style={styles.button} >Delete</button>
       {/* (in above the book form says Edit and calls that form because of the id existing) */}
    </div>
  );
};

const styles = {
  container:{
    border:'1px solid yellow',
    margin: '10px',
    padding: '5px',
  },
  button: {backgroundColor : 'lightblue', margin:'20px'},
};

export default Book;