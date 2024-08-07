import logo from './logo.png';
import './App.css';
import Header from './Components/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Welcome to klu</h1>
      <h2>ERP for Y23</h2>
      <h4>Registrations from Tomorrow</h4>
      <h6>Copy-Rights 2024</h6>
      <img src={logo}/>
    </div>
  );
}

export default App;