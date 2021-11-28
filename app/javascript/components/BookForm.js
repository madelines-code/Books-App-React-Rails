// future features: could add clear form after submittimg or collapse form after submitting with thank you for adding "this book" message

import React, {useState} from 'react' 
import axios from 'axios';
import Book from './Book';

const BookForm = (props) =>{
  const {id, addBook, title: initialTitle, author: initialAuthor, updateBook} = props;
  const [title, setTitle] = useState( initialTitle ? initialTitle : "" );
  const [author, setAuthor] = useState(initialAuthor ? initialAuthor : "");
  // const initialTitle = props.title
  // const initialAuthor = props.author
  const handleSubmit = async (e)=>{
    // this prevents a reload
    e.preventDefault();
    console.log({title: title, author: author});
    const book = {title: title, author: author}
    if (id) {
      try {
      // this is update logic
      let response = await axios.put(`/books/${id}`, book);
      console.log(response.data);
      //need to update UI (update response.data to books)
      // props.updateBook(response.data); COULD USE THIS IF YOU DON'T PASS addBook IN PROPS
      updateBook(response.data); 
    } catch(err) {
      alert(`${err.response.data.errors}`);
      console.log(err);
      console.log(err.response);
    }
  } else {
       // axios call here
       // save to database is DONE
    try {
    let response = await axios.post('/books', book);
    console.log(response.data);
    //need to update UI (add response.data to books)
    // props.addBook(response.data); COULD USE THIS IF YOU DON'T PASS addBook IN PROPS
    addBook(response.data);   
  } catch(err) {
    alert(`${err.response.data.errors}`);
    console.log(err);
    // let errorText = (err.response.data.errors);
  }
    }
  };
  return (
    <div style={styles.container}>
      <h1>{ id? "Edit" : "New" } Book Form</h1>
      <form onSubmit={handleSubmit}>
        <p>Title:</p>
        <input value={title} onChange={(e)=> setTitle(e.target.value)}/>
        <p>Author:</p>
        <input value={author} onChange={(e)=> setAuthor(e.target.value)}/>
        <button>{ id? "Update" : "Create" }</button>
      </form>
    </div>  
  );
};

const styles = {
  container:{
    border:'2px dotted blue',
    margin: '10px',
    padding: '5px',
  }
};

export default BookForm;