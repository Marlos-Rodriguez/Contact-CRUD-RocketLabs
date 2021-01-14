import styled from "styled-components";

export const ProductCard = styled.div`
  background-color: #f1f6f9;
  width: 100%;
  max-width: 250px;
  border-radius: 1rem;
  margin: 1rem 3rem;
  padding: 1.2rem;
  display: block;
  h1,
  h2,
  h4,
  p {
    margin: 0;
    padding: 0;
    text-align: center;
  }
`;

export const DeleteButton = styled.p`
  color: #cf1f1f;
  margin: 0;
  padding: 0;
  text-align: center;
  cursor: pointer;
`;

export const Container = styled.div`
  width: 95%;
  min-height: 500px;
  margin: 0 auto;
  padding: 30px 0;
  background-color: #394867;
  display: block;
  align-items: center;
`;

export const Title = styled.h2`
  color: #f1f6f9;
  text-align: center;
  font-size: 3rem;
  padding-top: 3rem;
  margin: 0 auto;
`;