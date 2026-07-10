import React, { useState } from 'react';
import styled from 'styled-components';
import SectionTitle from '../../components/customer/SectionTitle';
import CustomerCarCard from '../../components/customer/CustomerCarCard';
import { FaSearch, FaFilter, FaSortAmountDown } from 'react-icons/fa';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 24px;
`;

const ControlsBar = styled.div`
  background: var(--website-card-bg, #111827);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 1.5rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const SearchBox = styled.div`
  position: relative;
  flex: 1.5;

  svg {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    color: #8a99ad;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 12px 16px 12px 46px;
  color: #ffffff;
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--website-primary, #7C3AED);
    background: rgba(255, 255, 255, 0.04);
  }
`;

const FiltersGroup = styled.div`
  display: flex;
  gap: 16px;
  flex: 2;
  justify-content: flex-end;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;

  svg {
    position: absolute;
    left: 14px;
    color: var(--website-primary, #7C3AED);
    pointer-events: none;
  }
`;

const Select = styled.select`
  width: 100%;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 12px 16px 12px 40px;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  appearance: none;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--website-primary, #7C3AED);
  }

  option {
    background: #0b0f19;
    color: #ffffff;
  }
`;

const CarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 991.98px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  @media (max-width: 575.98px) {
    grid-template-columns: 1fr;
  }

  /* Center the last card if it is the only item in the last row */
  @media (min-width: 992px) {
    & > *:last-child:nth-child(3n - 2) {
      grid-column-start: 2;
    }
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 5rem;
  background: var(--website-card-bg, #111827);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  color: #8a99ad;
`;

function Cars({ carsList, onRent }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('Default');

  // Filter logic
  const filteredCars = carsList.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Category mapping
    const carCat = car.type.includes('SUV') ? 'SUV' : car.type.includes('Sedan') ? 'Sedan' : car.type.includes('Sports') || car.type.includes('Coupe') ? 'Sports' : 'Luxury';
    const matchesCategory = category === 'All' || carCat === category;

    return matchesSearch && matchesCategory;
  });

  // Sort logic
  const sortedCars = [...filteredCars].sort((a, b) => {
    if (sortOrder === 'LowToHigh') {
      return a.pricePerDay - b.pricePerDay;
    } else if (sortOrder === 'HighToLow') {
      return b.pricePerDay - a.pricePerDay;
    }
    return 0; // Default
  });

  return (
    <PageContainer>
      <SectionTitle 
        title="Our Premium Fleet" 
        subtitle="Explore our curated collection of luxury sedans, sports coupés, robust SUVs, and elite supercars."
      />

      <ControlsBar>
        <SearchBox>
          <FaSearch />
          <SearchInput 
            type="text" 
            placeholder="Search by vehicle name... (e.g. Porsche)" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBox>

        <FiltersGroup>
          <SelectWrapper>
            <FaFilter />
            <Select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="All">All Categories</option>
              <option value="SUV">SUVs</option>
              <option value="Sedan">Sedans</option>
              <option value="Sports">Sports Cars</option>
              <option value="Luxury">Luxury Cars</option>
            </Select>
          </SelectWrapper>

          <SelectWrapper>
            <FaSortAmountDown />
            <Select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
              <option value="Default">Sort By Price</option>
              <option value="LowToHigh">Price: Low to High</option>
              <option value="HighToLow">Price: High to Low</option>
            </Select>
          </SelectWrapper>
        </FiltersGroup>
      </ControlsBar>

      {sortedCars.length > 0 ? (
        <CarsGrid>
          {sortedCars.map((car) => (
            <CustomerCarCard 
              key={car.id} 
              car={car} 
              onRent={onRent}
            />
          ))}
        </CarsGrid>
      ) : (
        <NoResults>
          <h3>No Vehicles Match Your Query</h3>
          <p className="mb-0">Try adjusting your filters, search keyword, or sorting parameters.</p>
        </NoResults>
      )}
    </PageContainer>
  );
}

export default Cars;
