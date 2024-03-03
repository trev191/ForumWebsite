import './FilterBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function handleFilterPressed() {
  alert("Filter pressed!");
}

function FilterBar() {
  return (
    <div>
      <button type="button" className='btn btn-secondary' onClick={handleFilterPressed}>
        <text>
          Filter
        </text>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 20">
          <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
        </svg>
      </button>
    </div>
  )
}

export default FilterBar;