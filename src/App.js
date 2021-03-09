import React from "react";
import "./App.css"
import { Alert, Container } from "react-bootstrap";
import ProfilComponent from "./Profile/ProfilComponent";
function App() {
  const AlertName=(name)=>{alert(name)}
  return (
    <div className="App">
      <h1 style={{ color: "pink" }}> MY PROFIL </h1>

      <Container>
        <ProfilComponent
          info={{
            img: "ilyes.jpg",
            name: "ilyes bouchneb",
            bio: "Software",
            profession: "Devéloppement",
            alertName:AlertName,
          }}
        />
      </Container>
      
    </div>
  );
}

export default App;
