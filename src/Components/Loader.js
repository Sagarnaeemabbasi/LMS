// import React from "react";
// import loaderImage from "../Screen/loading.gif";
// export default function Loader() {
//   return (
//     <div>
//       <img src={loaderImage} alt="" />
//     </div>
//   );
// }
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loader() {
  return (
      <CircularProgress />
  );
}
