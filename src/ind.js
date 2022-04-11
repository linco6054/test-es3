

axios
  .post("www.backend.com/api/users/login", {
    firstName: "Finn",
    lastName: "Williams",
  })
  .then(
    (response) => {
   MESSAGE FROM BACK END WE HAVE SUCCESSFULLY CREAT A USER WITH 
   GIVEN DETAILS
        // messa
        
    },
    (error) => {
    
    The backend is uable to create user because of this reason

    }
  );
