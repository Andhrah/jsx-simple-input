const App = () => {
  
  const style = {marginRight: 10}
  return (
    <div style={{margin: 30}}>
      <label htmlFor="name" style={style}>Enter Name</label>
      <input id="name" style={style} />
      <button style={{backgroundColor: 'blue', color: 'white'}}>Click me</button>
    </div>
  )
}

export default App;
