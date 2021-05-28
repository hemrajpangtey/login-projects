import React from "react";
import EditForm from "./editForm"
import DeleteIcon from '@material-ui/icons/Delete';

const dashBoardItem = ({eachItem,items, setItems}) => {

    const deleteHandler = () => {
        setItems(items.filter((e) =>e.id !== eachItem.id));
      };



    return<div className="layout-fluid">
        <div className="container__dashBoard__media__layout container__dashBoard__layout ">
                   <div className="dashBoard-border"><h2>user name</h2></div>
                   <div className="dashBoard-border"><h2>Email</h2></div>
                   <div className="dashBoard-border"><h2>Address</h2></div>
                   <div className="dashBoard-border"><h2>password</h2></div>
                   <div className="dashBoard-border"><h2>edit</h2></div>
                   <div className="dashBoard-border"><h2>delete</h2></div>
        </div>
        <div className="container__dashBoard__layout dashBoard-grid dashBoard-padding-table">
              <div className="dashBoard-border"><h2 className="user-name">{eachItem.userName}</h2></div>
              <div className="dashBoard-border"><h2>{eachItem.email}</h2></div>
              <div className="dashBoard-border"><h2>{eachItem.address}</h2></div>
              <div className="dashBoard-border"><h2>{eachItem.password}</h2></div>
              <EditForm className="dashBoard-border" items={items} setItems={setItems} eachItem={eachItem}/>
              <div className="dashBoard-border"><h2>< DeleteIcon onClick={deleteHandler}/></h2></div>
        </div>
    </div>

}

export default dashBoardItem;