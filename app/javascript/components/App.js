import React from 'react'

const App = ()=> {
  return (
    <div style = {styles.container}>
      <h1 style = {styles.header}>App component</h1>
    </div>
  );
};


const styles ={
  container: {border:'2px solid black', maxWidth:'800px', margin:'auto'},
  header: {color: 'red', margin:'10px',},
};

export default App;