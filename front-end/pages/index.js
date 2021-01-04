import React, { useState } from "react";

import styled from "styled-components";

import axiosClient from "../config/axiosClient";
import Layout from "../components/layout/layout";
import Container from "../components/UI/indexContainer";
import ContactCard from "../components/layout/contactCard";
import ContactCardsContainer from "../components/UI/contactCardsContainer";
import ContactForm from "../components/layout/ContactForm";

const LoadingText = styled.h1`
  color: #f1f6f9;
  text-align: center;
  font-size: 5rem;
  padding-top: 3rem;
  margin: 0 auto;
`;

const CreateButton = styled.button`
  position: relative;
  text-align: center;
  margin: 0 auto;
  padding: 0.5rem;
  left: 43%;
  color: #14274e;
  background-color: #f1f6f9;
  font-weight: bold;
  font-size: 1.7rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
`;

export default function Home() {
  //Main State of App
  const [Contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  //Get All Contacts
  const FetchData = async () => {
    try {
      const result = await axiosClient.get("/contacts/all");
      const Newcontacts = result.data.contacts;

      setLoading(false);
      setContacts(Newcontacts);
    } catch (error) {
      console.log(error);
    }
  };

  const AddContact = async (contact) => {
    try {
      const response = await axiosClient.post("/contacts/", contact);
      const newContact = response.data;

      setContacts([...Contacts, newContact]);
      ShowFormFunc();
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteContact = async (id) => {
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
