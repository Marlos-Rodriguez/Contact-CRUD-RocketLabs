import React, {FunctionComponent} from "react";

import styled from "styled-components";

import type {ChildrenProp} from "../Interfaces/contacts"

const ContactCardsContainer: FunctionComponent<ChildrenProp> = ({children}) => {
  return <CardContainer>{children}</CardContainer>;
};

const CardContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  display: inline-flex;
  align-items: center;
  position: relative;
  flex-direction: row;
  align-self: center;
  flex-wrap: wrap;
`;

export default ContactCardsContainer;
