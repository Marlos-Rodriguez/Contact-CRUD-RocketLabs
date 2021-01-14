import React, {FunctionComponent} from "react";

import {Container, Title} from "../../styles/contactCard";
import type {ChildrenProp} from "../Interfaces/contacts"

const indexContainer: FunctionComponent<ChildrenProp> = ({children}) => {
  return (
    <>
      <Title>Contacts</Title>
      <Container>{children}</Container>
    </>
  );
};

export default indexContainer;
