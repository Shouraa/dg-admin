// /* eslint-disable react/prop-types */
// import React, { createContext, useContext, useState } from 'react';

// const NavigationContext = createContext();
// export const useNavigation = () => useContext(NavigationContext);

// const handleDrawerResponsive = () => {
//   if (window.innerWidth < 900) {
//     return false;
//   }

//   return true;
// };

// export default function NavigationProvider({ children }) {
//   const [open, setOpen] = useState(() => {
//     handleDrawerResponsive();
//   });
//   const [value, setValue] = useState(0);

//   const handleDrawerToggle = () => {
//     console.log('kirkirkrir');
//     setOpen(!open);
//   };

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <NavigationContext.Provider
//       value={{
//         open,
//         handleDrawerToggle,
//         value,
//         handleChange,
//       }}
//     >
//       {children}
//     </NavigationContext.Provider>
//   );
// }
