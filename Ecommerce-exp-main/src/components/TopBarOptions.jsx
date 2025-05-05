import { Check, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import "./mobile.css";
import "./TopBarOptions.css";

const SORT_OPTIONS = [
  "Recommended",
  "Newest First",
  "Popular",
  "Price High to Low",
  "Price Low to High",
];

const TopBarOptions = ({
  showFilter,
  toggleFilter,
  selectedSort,
  onSortChange,
}) => {
  const [showSortMenu, setShowSortMenu] = useState(false);
  const sortRef = useRef();

  const toggleSortMenu = () => {
    setShowSortMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setShowSortMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="topbar">
      <div className="topbar-left-group">
        <div className="topbar-left">3425 ITEMS</div>
        <div className="topbar-middle">
          <a className="hide-filter-link" onClick={toggleFilter}>
            {showFilter ? (
              <ChevronLeft size={12} />
            ) : (
              <ChevronRight size={12} />
            )}
            {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
          </a>
        </div>
      </div>

      <div className="topbar-right">
        <div className="sort-trigger-wrapper" ref={sortRef}>
          <div className="sort-trigger" onClick={toggleSortMenu}>
            <span>{selectedSort}</span>
            <ChevronDown size={14} />
          </div>

          {showSortMenu && (
            <div className="sort-menu">
              {SORT_OPTIONS.map((option) => (
                <div
                  key={option}
                  className={`sort-option ${
                    selectedSort === option ? "selected" : ""
                  }`}
                  onClick={() => {
                    onSortChange(option);
                    setShowSortMenu(false);
                  }}
                >
                  {selectedSort === option && (
                    <Check size={16} className="tick-icon" />
                  )}
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBarOptions;
