import './App.css';
import Mensaje from './Mensaje';

const Description = () =>{
  return <p>Esta es la app del curso fullstack bootcamp</p>
}

function App() {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando'></Mensaje>
      <Mensaje color='green' message='en un curso'></Mensaje>
      <Mensaje color='blue' message='De react'></Mensaje>
      <Description></Description>
    </div>
  );
}

export default App;
