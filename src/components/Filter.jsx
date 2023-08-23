/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */


const Filter = ({ filter, setFilter, setSort}) => {
  return (
    <div className="filter">
        <h2> Filtrar:</h2>
        <div classeName="filter-options">
            <div>
                <p>Status:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incomplete">InCompletas</option>                    
                </select>
            </div>
            <div>
                <p>Ordem alfabética:</p>
                <button onClick={() => setSort("Asc")}>Asc</button>
                <button onClick={() => setSort("Des")}>Desc</button>
            </div>
        </div>


    </div>
  );
};

export default Filter