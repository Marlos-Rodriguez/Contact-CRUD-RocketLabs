import React from "react";

import styled from "styled-components";

const indexContainer = (props) => {
  return (
    <>
      <Title>Contacts</Title>
      <Container>{props.children}</Container>
    </>
  );
};

const Container = styled.div`
  width: 95%;
  min-height: 500px;
  margin: 0 auto;
  padding: 30px 0;
  background-color: #394867;
  display: block;
  align-items: center;
`;

const Title = styled.h2`
  color: #f1f6f9;
  text-align: center;
  font-size: 3rem;
  padding-top: 3rem;
  margin: 0 auto;
`;

export default indexContainer;
