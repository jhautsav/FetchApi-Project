import React from "react";
 

function Cards(props) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img
            className="card-img-top"
            src={props.imgsrc}
            alt={props.imgsrc}
            style={{ height: "201px"  }}
          />
          <div className="card-body">
            <h5 className="card-title font-weight-bold text-center"> {props.first_name} {props.last_name} </h5>
            <p className="card-text text-center">
               {props.email}
            </p>
             
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards;

