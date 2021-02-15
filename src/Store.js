class Store {
    constructor() {}

    static get(callback) {
      fetch('/get/channel', { method: "GET" })
        .then((response) => response.text())
        .then((result) => {
          callback(JSON.parse(result));
        })
        .catch((error) => alert(`get array from db ${error}`));
    }
   
  }