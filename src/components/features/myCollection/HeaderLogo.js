import React from "react";
import styled from "styled-components";
import Frame from "../../../shared/svg/Frame.svg";
import icon_back_enabled from "../../../shared/svg/icon_back_enabled.svg";
import { useNavigate } from "react-router-dom";

const HeaderLogo = () => {
  const nav = useNavigate();
  return (
    <Title>
      <IconBack src={icon_back_enabled} alt="icon" onClick={() => nav(-1)} />
      <TitleLogo src={Frame} alt="icon" />
      <TitleSubmit></TitleSubmit>
    </Title>
  );
};
export default HeaderLogo;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%
  height: 3rem;
  padding: 0.688rem 0 0;
  background-color: #fff;
  border-bottom: 1px solid #EEEEF6;
  margin-bottom:5px
`;
const IconBack = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const TitleLogo = styled.img``;
const TitleSubmit = styled.div`
  font-size: 0.813rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #adadad;
  margin: 0 3px 0 0;
`;