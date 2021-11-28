import React, {useState} from 'react'
import BookForm from './BookForm';
import Books from './Books';
import App from './App';

const Book = (props)=>{
  // const [showUpdateForm, setShowUpdateForm] = useState(false);
  const { title, author, id, quantity, updateBook, deleteBook, showUpdateForm, toggleUpdateForm } = props;

  // const toggleUpdateForm = ()=>{
  //   setShowUpdateForm(!showUpdateForm);
  // };

  return (
    <div style={styles.container}>
      <h2>{ title }</h2>
      <h4>By { author }</h4>
      <p>ID: { id }</p>
      <p>Books in Stock: { quantity }</p>
      <hr/>
      <button onClick={toggleUpdateForm} style = {styles.button}>{showUpdateForm ? "Cancel" : "Update Book"}</button>
      {showUpdateForm && <BookForm />}
      
      {/* <BookForm {...props} updateBook={updateBook} /> */}
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