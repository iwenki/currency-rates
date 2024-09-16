import React from "react";

export default function Result(props){
  if(props.results){
    return(
      <div className="Results">
        <p>{props.results}</p>
      </div>
    );
  } else{
    return null;
  }
}