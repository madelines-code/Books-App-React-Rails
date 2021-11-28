import React from 'react'
import Books from './Books';

const Book = (props)=>{
  const { title, author } = props;
  return (
    <div style={styles.container}>
      <h2>{ title }</h2>
      <h4>By { author }</h4>
    </div>
  );
};

const styles = {
  container:{
    border:'1px solid yellow',
    margin: '10px',
    padding: '5px',
  }
};

export default Book;