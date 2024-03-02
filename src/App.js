import './App.css';
import Title from './components/Title';
import SearchBar from './components/SearchBar';

const titleStr = "Forum";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Title title={titleStr}/>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
