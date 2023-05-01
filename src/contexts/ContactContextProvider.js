import React, { createContext, useContext, useState } from "react";
import { counterContext } from "./CounterContextProvider";
import axios from "axios";

export const contactContext = createContext();

const ContactContextProvider = ({ children }) => {
  //   let { counter } = useContext(counterContext);
  //   console.log(counter);
  const API = "http://localhost:8000/contacts";
  const [contacts, setContacts] = useState([]);

  async function getContacts() {
    let res = await axios(API);
    setContacts(res.data);
  }

  let values = {
    contacts,
    getContacts,
  };

  return (
    <contactContext.Provider value={values}>{children}</contactContext.Provider>
  );
};

export default ContactContextProvider;
