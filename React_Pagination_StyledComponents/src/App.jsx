import { useEffect, useState } from "react";
import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 24px;
  }
`;

const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const Header = styled.header`
  background-color: #007bff;
  color: white;
  padding: 20px 0;
`;

const Footer = styled.footer`
  background-color: #007bff;
  color: white;
  padding: 10px 0;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  margin: 20px;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const ProductSingle = styled.div`
  height: 250px;
  padding: 20px;
  background-color: #fff;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
  span {
    display: block;
    max-height: 60px; 
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
`;

const PaginationContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;
const SortButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 20px;
`;
const PageButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  ${(props) =>
    props.active &&
    css`
      background-color: #00b200;
      pointer-events: none;
    `}
`;
const SelectCategory = styled.select`
  padding: 10px;
  margin:30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

const ProductPrice = styled.div`
  font-weight: bold;
  color: green;
  background-color: #e0dfdc;
  padding: 10px;
  border-radius: 5px;
`;
export default function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("ascending"); // Track sort order
  const url = "https://dummyjson.com/products?limit=100";

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url).then((res) => res.json());

      if (res && res.products) {
        setData(res.products);
      }
    };

    if (data.length === 0) {
      fetchData();
    }
  }, [data]);

  const uniqueCategories = [...new Set(data.map((item) => item.category))];
  const filteredProducts =
    selectedCategory === "All"
      ? data
      : data.filter((prod) => prod.category === selectedCategory);

  const productsPerPage = 9;
  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  let displayedProducts = filteredProducts.slice(startIndex, endIndex);

  // Sort only the displayed products based on the current sort order
  displayedProducts = [...displayedProducts];
  if (sortOrder === "ascending") {
    displayedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "descending") {
    displayedProducts.sort((a, b) => b.price - a.price);
  }

  const changePage = (page) => {
    setPage(page);
  };

  const filterProducts = (criteria) => {
    setSelectedCategory(criteria);
    setPage(1);
  };

  // Toggle the sort order between ascending and descending
  const toggleSortOrder = () => {
    setSortOrder((prevSortOrder) =>
      prevSortOrder === "ascending" ? "descending" : "ascending"
    );
  };

  return (
    <AppContainer>
      <GlobalStyles />
      <Header>
        <h1> Products </h1>
      </Header>
      {displayedProducts.length > 0 && (
        <ProductGrid>
          {displayedProducts.map((prod) => (
         <ProductSingle key={prod.id}>
         <ProductImage src={prod.thumbnail} alt={prod.title} />
         <span>{prod.title}</span>
         <ProductPrice>{prod.price}</ProductPrice>
       </ProductSingle>
          ))}
        </ProductGrid>
      )}
      <div>
      <SelectCategory
          onChange={(e) => filterProducts(e.target.value)}
          value={selectedCategory}
        >
          <option value="All">All</option>
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </SelectCategory>
        <SortButton onClick={toggleSortOrder}>
          Sort by Price ({sortOrder === "ascending" ? "Descending" : "Ascending"})
        </SortButton>
      </div>
      {displayedProducts.length > 0 && (
        <PaginationContainer>
          <span>
            {Array.from({
              length: Math.ceil(filteredProducts.length / productsPerPage)
            }).map((_, index) => (
              <PageButton
                key={index}
                onClick={() => changePage(index + 1)}
                active={page === index + 1}
              >
                {index + 1}
              </PageButton>
            ))}
          </span>
        </PaginationContainer>
      )}
      
      <Footer>&copy; 2023 Chetan Gupta. All rights reserved.</Footer>
    </AppContainer>
  );
}
