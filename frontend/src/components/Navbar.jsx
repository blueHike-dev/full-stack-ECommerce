import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 4px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ flex: "0.5" })}
`;

const Languange = styled.span`
  font-size: 14px;
  cursor: pointer;
  margin-right: 20px;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 2xp;
  /* border-radius: 5px; */
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "65px", fontSize: "14px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ flex: "0.8" })}
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "20px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center", flex: "2" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Languange>EN</Languange>
          <Logo>blueHike.</Logo>

          {/* <SearchContainer>
            <Input placeholder="Search.." />
            <SearchIcon style={{ color: "gray", fontSize: "18px" }} />
          </SearchContainer> */}
        </Left>
        <Center>
          {/* <Logo>blueHike.</Logo> */}
          <SearchContainer>
            <Input placeholder="Search.." />
            <SearchIcon style={{ color: "gray", fontSize: "18px" }} />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
