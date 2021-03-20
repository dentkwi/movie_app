function Food({fav}){
 
  return <h1>I like {fav}</h1>
  
}

function App() {
  return (
    <div className="App">
     <h1 >Hello!!!!!!</h1>Hello!!
    <Food fav="kimchi" />
    <Food fav="ramen" />
    <Food fav="samgiopsal" />
    <Food fav="chukumi" />
    </div>
  );
}

export default App;
