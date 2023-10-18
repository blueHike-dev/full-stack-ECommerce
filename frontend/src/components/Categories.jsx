import React from "react";
import { categories } from "../data";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 100px 30px;
  justify-content: space-between;
  background-color: rgba(212, 168, 47, 0.1);
  border-top: 10px;
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
