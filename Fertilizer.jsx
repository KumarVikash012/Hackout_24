import React, { useContext } from "react";
import { Pro_val } from './Store';

function Fertilizer({ fertilizerInfo }) {
  const { resultString } = useContext(Pro_val);

  if (!resultString) {
    return <div>No fertilizer information available.</div>;
  }

  return (
    <div className="fertilizerbox">
      <h2 style={{padding:'8px',fontFamily:'cursive',color:'white'}}>{resultString }</h2>
      {fertilizerInfo && fertilizerInfo[resultString] ? (
        <>
          <h5 style={{padding:'8px',fontFamily:'cursive',color:'white'}}>{fertilizerInfo[resultString][0]}</h5>
          <h5 style={{padding:'8px',fontFamily:'cursive',color:'white'}}>{fertilizerInfo[resultString][1]}</h5>
          <h5 style={{padding:'8px',fontFamily:'cursive',color:'white'}}>{fertilizerInfo[resultString][2]}</h5>
        </>
      ) : (
        <div>No details available for the selected fertilizer.</div>
      )}
    </div>
  );
}

export default Fertilizer;
