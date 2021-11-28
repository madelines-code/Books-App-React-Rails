import React, {useState} from 'react' 
import axios from 'axios';

const BookForm = (props) =>{
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const {id, addBook} = props;
  const handleSubmit = async (e)=>{
    // this prevents a reload
    e.preventDefault();
    console.log({title: title, author: author});
    const item = {title: title, author: author}
    // axios call here
    // save to database is DONE
    let response = await axios.post('/books', item);
    console.log(response.data);
    //need to update UI (add response.data to books)
    // props.addBook(response.data); COULD USE THIS IF YOU DON'T PASS addBook IN PROPS
    addBook(response.data);
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