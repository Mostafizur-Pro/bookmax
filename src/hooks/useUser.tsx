// import React, { useEffect, useState } from "react";

// const useUser = (email) => {
//   const [isUser, setIsUser] = useState(false);
//   const [isUserLoading, setIsUserLoading] = useState(true);
//   useEffect(() => {
//     if (email) {
//       fetch(`https://e-shoppers-bd-server.vercel.app/users/normal/${email}`)
//         .then((res) => res.json())
//         .then((data) => {
//           // console.log(data);
//           setIsUser(data.isUser);
//           setIsUserLoading(false);
//         });
//     }
//   }, [email]);
//   return [isUser, isUserLoading];
// };

// export default useUser;
