import './SearchBar.css';

function SearchBar ({ updateSearchText }) {
  return (
    <div>
      <input className="SearchBar" type="search" placeholder="Search..." onChange={updateSearchText}>
      </input>
    </div>
  );
}

export default SearchBar;