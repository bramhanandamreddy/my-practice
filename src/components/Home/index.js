// ProfileComponent.js

import React from "react";
import styled from "styled-components";
// import myImage from "./pexels-artem-beliaikin-1832323-removebg-previewmy (1).jpg";

// Styled components for the provided CSS
const IntroContainer = styled.div`
  display: flex;
  flex-direction: row; /* Change to row */
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  position: relative; /* Change to relative */
  width: 800px; /* Adjust the width to fit the image */
  height: 408px;
  left: 120px;
  top: 111px;
`;

const Title = styled.div`
  width: 486px;
  height: 27px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  text-transform: uppercase;
  color: #fdc435;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
  width: 486px;
  height: 369px;
`;

const TitleText = styled.div`
  width: 486px;
  height: 154px;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 120%;
  color: #333333;
`;

const SubheadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  width: 486px;
  height: 108px;
`;

const Text = styled.div`
  width: 486px;
  height: 108px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #828282;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  width: 244px;
  height: 43px;
`;

const PrimaryButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 24px;
  width: 115px;
  height: 43px;
  background: #fdc435;
  border-radius: 8px;
`;

const SecondaryButton = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 24px;
  width: 117px;
  height: 43px;
  border: 2px solid #25282b;
  border-radius: 8px;
`;

const ButtonText = styled.div`
  width: 67px;
  height: 27px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: #25282b;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const Home = () => {
  return (
    <IntroContainer>
      <ContentContainer>
        <Title>UI and UX Designer</Title>
        <TitleText>Profile Information</TitleText>
        <SubheadlineContainer>
          <Text>
            UI/UX Designer with over 5 years of experience in the industry.
          </Text>
        </SubheadlineContainer>
        <ButtonsContainer>
          <PrimaryButton>
            <ButtonText>Primary</ButtonText>
          </PrimaryButton>
          <SecondaryButton>
            <ButtonText>Secondary</ButtonText>
          </SecondaryButton>
        </ButtonsContainer>
      </ContentContainer>
      <ImageContainer>
        <img
          src="D:\pex.jpg"
          alt="bramha"
          style={{ width: "300px", height: "300px", borderRadius: "10%" }}
        />
      </ImageContainer>
    </IntroContainer>
  );
};

export default Home;
