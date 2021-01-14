import React, { useState } from "react";

import {LoadingText, CreateButton} from "../styles/index"; 

import type {IContact, INewContact} from "../components/Interfaces/contacts"

import axiosClient from "../config/axiosClient";
import Layout from "../components/layout/layout";
import Container from "../components/UI/indexContainer";
import ContactCard from "../components/layout/contactCard";
import ContactCardsContainer from "../components/UI/contactCardsContainer";
import ContactForm from "../components/layout/ContactForm";

const Home = () => {
  //Main State of App
  const [Contacts, setContacts] = useState<IContact[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  //Get All Contacts
  const FetchData = async () => {
    try {
      const result = await axiosClient.get("/contacts/all");
      const Newcontacts: IContact[] = result.data.contacts;

      setLoading(false);
      setContacts(Newcontacts);
    } catch (error) {
      console.log(error);
    }
  };

  const AddContact = async (contact:INewContact) => {
    try {
      const response = await axiosClient.post("/contacts/", contact);
      const newContact:IContact = response.data;

      setContacts([...Contacts, newContact]);
      ShowFormFunc();
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteContact = async (id:string) => {
    try {
      await axiosClient.delete(`/contacts/${id}`);

      setContacts(Contacts.filter((contact) => contact._id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  if (loading) {
    FetchData();
  }

  const ShowFormFunc = () => {
    setShowForm(!showForm);
  };
  return (
    <Layout>
      <Container>
        <div>
          {loading ? (
            <LoadingText>loading</LoadingText>
          ) : showForm ? (
            <ContactForm AddContact={AddContact} />
          ) : Contacts.length <= 0 ? (
            <>
              <CreateButton onClick={ShowFormFunc}>Create Contact</CreateButton>
              <LoadingText>No Contacts</LoadingText>
            </>
          ) : (
            <>
              <CreateButton onClick={ShowFormFunc}>Create Contact</CreateButton>
              <ContactCardsContainer>
                {Contacts.map((contact) => {
                  return (
                    <ContactCard
                      key={contact._id}
                      contact={contact}
                      DeleteContact={DeleteContact}
                    />
                  );
                })}
              </ContactCardsContainer>
            </>
          )}
        </div>
      </Container>
    </Layout>
  );
}
 
export default Home;