import React, { useState} from "react";
import EditIcon from "@material-ui/icons/Edit";

const EditForm = ({ eachItem, items, setItems }) => {
  const [edit, setEdit] = useState(false);
  const [newItem, setNewItem] = useState("");

  const editHandler = () => {
    setEdit(true);
  };

  const newItemHandler = (e) => {
    const { name, value } = e.target;
    setNewItem((preValue) => {
      return { ...preValue, [name]: value };
    });
  };

  const saveHandler = () => {
    eachItem.userName = newItem.userName
    eachItem.address = newItem.address
    eachItem.email = newItem.email
    eachItem.password = newItem.password
    eachItem.confirmPassword = newItem.password
    eachItem.id = eachItem.id
  setItems([...items])
    setEdit(false);
  };

  return (
    <div className="container__edit dashBoard-border">
      <h2>
        <EditIcon onClick={editHandler} />
      </h2>
      <div
        className="container__edit__layout"
        style={{ display: edit ? "block" : "none" }}
      >
        <div className="container__edit__layout__div  ">
          <label>
            user
            <input name="userName" maxLength="80" onChange={newItemHandler} type="text" />
          </label>
          <label>
            password
            <input name="password" maxLength="80" onChange={newItemHandler} type="text" />
          </label>
          <label>
            email
            <input name="email" maxLength="80" onChange={newItemHandler} type="text" />
          </label>
          <label>
            address
            <input name="address" maxLength="100" onChange={newItemHandler}  type="text" />
          </label>
          <button
            onClick={saveHandler}
            className="container__edit__btn form-border"
            type="button"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
