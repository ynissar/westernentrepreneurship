import React from "react";
import {useParams} from "react-router-dom"

function Opportunity() {

    let params = useParams();

  return <div>{params.opportunity}</div>;
}

export default Opportunity;
