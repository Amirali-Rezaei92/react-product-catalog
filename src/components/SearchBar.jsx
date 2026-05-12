import "./SearchBar.css";

function SearchBar({ searchText, setSearchText }) {
    return (
        <>
            <input
                type="text"
                placeholder="Search products..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="search-input"
            />
            <hr />
        </>
    );
}

export default SearchBar;
