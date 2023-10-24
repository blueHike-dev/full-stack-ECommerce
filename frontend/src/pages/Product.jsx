import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 40px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 85%;
  height: 75vh;
  border-radius: 15px;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 400;
  ${mobile({ fontSize: "30px" })}
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Small = styled.div`
  ${mobile({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: "10px",
    // padding: "20px",
  })}
`;

const Price = styled.span`
  font-weight: 600;
  font-size: 40px;
  ${mobile({ flex: "1", fontSize: "30px", marginTop: "-20px" })}
`;

const FilterContainer = styled.div`
  width: 60%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  ${mobile({ flex: "4" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

const FilterSize = styled.select`
  cursor: pointer;
`;

const FilterSizeOption = styled.option`
  cursor: pointer;
`;

const AddContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 11px;
  font-size: 20px;
  font-weight: 500;
  color: black;
  border: none;
  background-color: rgba(0, 162, 255, 0.4);
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.5s ease;

  &:hover {
    background-color: rgba(0, 162, 255);
    color: white;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper className="blue">
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Small>
            <Price>${product.price}</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                {product.color.map((c) => (
                  <FilterColor color={c} key={c} />
                ))}
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  {product.size.map((s) => (
                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                  ))}
                </FilterSize>
              </Filter>
            </FilterContainer>
          </Small>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon style={{ cursor: "pointer" }} />
              <Amount>1</Amount>
              <AddIcon style={{ cursor: "pointer" }} />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
