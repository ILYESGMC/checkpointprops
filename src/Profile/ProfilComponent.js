import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function ProfilComponent(props) {
  return (
    <div class="card-group gg">
      <div>
        <img
          style={{ textAlign: "center", width: 400, height: 400 }}
          src={props.info.img}
        />
        <div class="card-body">
          <h3>{props.info.name}</h3>
          <h3>{props.info.bio}</h3>
          <h3>{props.info.profession}</h3>
        </div>
      </div>
      <Button onClick={()=>props.info.alertName(props.info.name)}>click me</Button>
    </div>
  );
}

export default ProfilComponent;
