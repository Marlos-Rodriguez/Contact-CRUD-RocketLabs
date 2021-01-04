import React from "react";

import styled from "styled-components";

const ProductCard = styled.div`
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

const DeleteButton = styled.p`
  color: #cf1f1f;
  margin: 0;
  padding: 0;
  text-align: center;
  cursor: pointer;
`;

const ContactCard = ({ contact, DeleteContact }) => {
  const { _id, name, nickname, email } = contact;

  return (
    <>
      <ProductCard>
        <h1>{name}</h1>
        <h2>{nickname}</h2>
        <h4>{email}</h4>

        <DeleteButton onClick={() => DeleteContact(_id)}>&#215; Delete</DeleteButton>
      </ProductCard>
    </>
  );
};

export default ContactCard;
