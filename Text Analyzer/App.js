import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar title="TextAnalyzer" about="About Us"></Navbar>
    
    <div className='container'>

    <Form></Form>
    </div>
    </>
  );
}

export default App;
