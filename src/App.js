import './App.css';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';

const titleStr = "Forum";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Title title={titleStr}/>
        <SearchBar />
        <FilterBar />
      </div>
    </div>
  );
}

export default App;
