import React from "react";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        onSearch(query);
    };

    return (
        <div>
            <input 
                type="text"
                placeholder="Search..."
                onChange={handleInputChange}
                className="search-bar"
                />
        </div>
    );
};

export default SearchBar;

