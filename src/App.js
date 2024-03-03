import './App.css';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import Posts from './components/Posts';

import 'bootstrap/dist/css/bootstrap.min.css';

const titleStr = "Forum";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Title title={titleStr}/>
        <SearchBar />
        <FilterBar />
      </div>
      <div className="posts">
        <Posts />
      </div>
    </div>
  );
}

export default App;
