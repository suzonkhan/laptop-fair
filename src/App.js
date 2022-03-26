import './App.css';
import Header from './components/Header/Header';
import QuestionAnswer from './components/QuestionAnswer/QuestionAnswer';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
       <Header></Header>
       <div className="container">
        <Shop></Shop>
        <QuestionAnswer></QuestionAnswer>
      </div>
    </div>
  );
}

export default App;
