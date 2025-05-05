import React, { useState } from 'react';
import Header from './Header';
import Herosection from './Herosection';
import TopBarOptions from './TopBarOptions';
import Footer from './footer';
import FilterAside from './FilterAside';
import ProductGrid from './Productgrid';

function Home() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showFilter, setShowFilter] = useState(true);
  const [selectedSort, setSelectedSort] = useState("Recommended");

  return (
    <div className="App">
      <Header />
      <Herosection />
      <div className='main'>
        <TopBarOptions
          showFilter={showFilter}
          toggleFilter={() => setShowFilter((prev) => !prev)}
          selectedSort={selectedSort}
          onSortChange={setSelectedSort}
        />
        <div className='main-section'>
          {showFilter && (
            <FilterAside
              selectedCategories={selectedCategories}
              onCategoryChange={setSelectedCategories}
            />
          )}
          <ProductGrid
            selectedCategories={selectedCategories}
            selectedSort={selectedSort}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
