
// const playGuitar = () => {
//     return "Playing guitar!";
// };

// const shredding = () => {
//   return "Shredding some licks!";
// };

// const plucking = () => {
//   return "Plucking the strings...";
// };


// Export in enother JS file
// And every file can have, or every module can have one default export.

// export default playGuitar;
// export { shredding, plucking };



export default function playGuitar () {
  return "Playing guitar!";
};

export const shredding = () => {
  return "Shredding some licks!";
};

export const plucking = () => {
  return "Plucking the strings...";
};
