import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import { db } from "../../auth/config";

export default function TodoListItem({ todo, inprogress, id }) {

  function toggleInProgress() {
    db.collection("todos").doc(id).update({
      inprogress: !inprogress,
    });
  }

  function deleteTodo() {
    db.collection("todos").doc(id).delete();
  }

  return (
    <div style={{ display: "flex" }}>
      <ListItem>
        <ListItemText
          primary={todo}
          secondary={inprogress ? "Em Progresso" : "Completa"}
        />
        <div className="">
          <button onClick={toggleInProgress} className={inprogress ? 'btn btn-danger' : 'btn btn-success'}>{inprogress ? "Incompleta" : "Completa"}</button>
        </div>

        <div className="">
          <button onClick={deleteTodo} className="btn btn-danger">X</button>
        </div>
      </ListItem>
    </div>
  );
}