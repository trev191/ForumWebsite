import './App.css';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import Posts from './components/Posts';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const titleStr = "Forum";

function App () {

  const [searchText, setSearchText] = useState('');
  function updateSearchText(e) {
    setSearchText(e.target.value);
  }

  return (
    <div className="App">
      <div className="App-header">
        <Title title={titleStr}/>
        <SearchBar updateSearchText={updateSearchText}/>
        <FilterBar />
      </div>
      <div className="posts">
        <Posts searchText={searchText}/>
      </div>
    </div>
  );
}

export default App;
