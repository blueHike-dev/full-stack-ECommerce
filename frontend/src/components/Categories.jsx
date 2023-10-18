import React from "react";
import { categories } from "../data";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 120px 40px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;