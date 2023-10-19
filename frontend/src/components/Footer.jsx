import React from "react";
import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  background-color: rgb(16, 16, 48, 0.04);
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  ${mobile({ fontSize: "25px" })}
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 20px;
`;

const Payment = styled.img`
  width: 50%;
  border-radius: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>blueHike.</Logo>
        <Desc>Visit our socials to get exclusivelly the latest trends!</Desc>
        <SocialContainer>
          <SocialIcon color="55ACEE">
            {/* 3B5999 */}
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="EE55AC">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55EEA4">
            <WhatsAppIcon />
          </SocialIcon>
          <SocialIcon color="5560EE">
            <LinkedInIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnIcon />
          456 Dixie Land, South East Cost 6348
        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon />
          +947 584 394
        </ContactItem>
        <ContactItem>
          <EmailOutlinedIcon />
          contact@blueHike.dev
        </ContactItem>
        <Payment src="payments.png" />
      </Right>
    </Container>
  );
};

export default Footer;
