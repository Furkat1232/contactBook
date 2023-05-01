import React, { useContext, useEffect } from "react";
import { contactContext } from "../contexts/ContactContextProvider";
import Card from "react-bootstrap/Card";

const ContactList = () => {
  const { contacts, getContacts } = useContext(contactContext);
  console.log(contacts);

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div>
      {contacts.map((item) => (
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.number}</Card.Text>
            <Card.Link>Delete</Card.Link>
            <Card.Link>Edit</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ContactList;
