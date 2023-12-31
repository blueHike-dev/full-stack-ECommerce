import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { useState } from "react";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
  ${mobile({ display: "none" })}
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  border-radius: 10px;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  /* margin-left: 40px; */
  display: flex;
  align-items: center;
  /* padding: 50px; */
  border-radius: 10px;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  height: 95%;
  width: 75%;
  border-radius: 10px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
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

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleclick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleclick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        <Slide bg="f5fafd">
          <ImgContainer>
            <Image src="https://img.freepik.com/free-photo/medium-shot-woman-shopping-mall_23-2150585906.jpg?size=626&ext=jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER SALE!</Title>
            <Desc>
              DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS
            </Desc>
            <Button>SHOP NOW!</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="fcf1ed">
          <ImgContainer>
            <Image src="https://img.freepik.com/free-photo/stunned-afro-american-woman-looks-with-scared-speechless-expression_273609-37377.jpg " />
          </ImgContainer>
          <InfoContainer>
            <Title>POPULAR SALE!</Title>
            <Desc>
              DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS
            </Desc>
            <Button>SHOP NOW!</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="">
          <ImgContainer>
            <Image src="https://img.freepik.com/free-photo/full-shot-woman-online-shopping_23-2150567519.jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>EVE SALE!</Title>
            <Desc>
              DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS
            </Desc>
            <Button>SHOP NOW!</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleclick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
