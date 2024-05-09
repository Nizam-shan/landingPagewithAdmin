import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

function ComingSoon() {
  return (
    <div style={{ width: "100%", marginTop: "50px", textAlign: "center" }}>
      <h2>Launching Soon</h2>
      <p>We are working on something awesome!</p>
      <LinearProgress
        color="secondary"
        style={{
          width: "50%",
          margin: "auto",
          marginTop: "20px",
          // color: "green",
        }}
      />
    </div>
  );
}

export default ComingSoon;
