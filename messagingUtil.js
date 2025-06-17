window.addEventListener("message", function(event) {
  if (event.data && event.data.hasOwnProperty("data")) {
    console.log("Received data from VA:", event.data);
  }
});
