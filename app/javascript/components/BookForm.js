import React from 'react' 

const BookForm = (props) =>{
  const {id} = props;
  return (
    <div style={styles.container}>
      <h1>{ id? "Edit" : "New" } Book Form</h1>
      <form>
        <p>Title:</p>
        <input />
        <p>Author:</p>
        <input />
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