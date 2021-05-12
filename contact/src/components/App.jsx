import React from "react";
import contacts from "../contacts";
import Card from "./Card";
//console.log(contacts[0].name);
function createCard(contact){
  return (<Card key={contact.id} Name={contact.name} img={contact.imgURL} tel={contact.phone} email={contact.email}></Card>);
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
