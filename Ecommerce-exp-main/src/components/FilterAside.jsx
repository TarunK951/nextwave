import React, { useEffect, useState } from "react";
import "./FilterAside.css";
import { ChevronDown, ChevronUp } from "lucide-react";

const staticFilters = [
  { label: "OCCASION", options: ["Casual", "Festive", "Wedding", "Workwear", "Party"] },
  { label: "WORK", options: ["Printed", "Embroidered", "Woven", "Sequinned", "Zari"] },
  { label: "FABRIC", options: ["Cotton", "Silk", "Linen", "Georgette", "Chiffon", "Velvet"] },
  { label: "SEGMENT", options: ["Luxury", "Everyday", "Designer", "Fusion", "Traditional"] },
  { label: "SUITABLE FOR", options: ["Summer", "Winter", "All Seasons", "Travel", "Office"] },
  { label: "RAW MATERIALS", options: ["Organic Cotton", "Recycled Polyester", "Bamboo", "Wool", "Viscose"] },
  { label: "PATTERN", options: ["Solid", "Striped", "Checked", "Floral", "Abstract", "Polka Dots"] }
];

const FilterAside = ({ selectedCategories, onCategoryChange }) => {
  const [expanded, setExpanded] = useState("CATEGORY");
  const [categories, setCategories] = useState([]);

  const toggleExpand = (label) => {
    setExpanded((prev) => (prev === label ? null : label));
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        const uniqueCategories = [...new Set(data.map(item => item.category))];
        setCategories(uniqueCategories);
      });
  }, []);

  const handleCheckboxChange = (category) => {
    if (selectedCategories.includes(category)) {
      onCategoryChange(selectedCategories.filter((c) => c !== category));
    } else {
      onCategoryChange([...selectedCategories, category]);
    }
  };

  return (
    <aside className="filter-aside">
      {/* Dynamic CATEGORY Filter */}
      <div className="filter-section">
        <div className="filter-header" onClick={() => toggleExpand("CATEGORY")}>
          <div className="filter-label">
            <strong>CATEGORY</strong>
            <span className="filter-subtext">All</span>
          </div>
          <span className="chevron">
            {expanded === "CATEGORY" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </span>
        </div>
        {expanded === "CATEGORY" && (
          <div className="filter-options">
            {categories.map((category) => (
              <label key={category}>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCheckboxChange(category)}
                />
                {category}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Static Non-functional Filters */}
      {staticFilters.map((filter) => (
        <div className="filter-section" key={filter.label}>
          <div className="filter-header" onClick={() => toggleExpand(filter.label)}>
            <div className="filter-label">
              <strong>{filter.label}</strong>
              <span className="filter-subtext">All</span>
            </div>
            <span className="chevron">
              {expanded === filter.label ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </span>
          </div>
          {expanded === filter.label && (
            <div className="filter-options">
              {filter.options.map((option) => (
                <label key={option}>
                  <input type="checkbox" disabled /> {/* Disabled for now */}
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};

export default FilterAside;
