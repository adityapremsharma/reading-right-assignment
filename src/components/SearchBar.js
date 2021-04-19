import React from "react";

export default function SearchBar({ onSubmit, value, onChange }) {
  return (
    <div className="search-bar">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="input-text"
          placeholder="Search for photos"
          value={value}
          onChange={onChange}
        />
        <button className="btn-primary">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
}
