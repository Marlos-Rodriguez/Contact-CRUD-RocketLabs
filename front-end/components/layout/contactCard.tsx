import React, {FunctionComponent} from "react";
import type {IContact} from '../Interfaces/contacts'

import {ProductCard, DeleteButton} from "../../styles/contactCard"

interface IContactProps{
  contact: IContact,
  DeleteContact: Function
}

const ContactCard: FunctionComponent<IContactProps> = ({ contact, DeleteContact })  => {
  const { _id, name, nickname, email } = contact;

  return (
      <ProductCard>
        <h1>{name}</h1>
        <h2>{nickname}</h2>
        <h4>{email}</h4>

        <DeleteButton onClick={() => DeleteContact(_id)}>&#215; Delete</DeleteButton>
      </ProductCard>
  );
};

export default ContactCard;
