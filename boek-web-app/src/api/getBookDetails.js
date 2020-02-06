const HEADERS = {
  "Content-Type": "application/json"
};

export function getBookDetails(isbn, callback) {
  let url = 'http://192.168.31.174:5000/getBookDetails?isbn="' + isbn + '"';
  fetch(url, { method: "GET", headers: HEADERS })
    .then(res => res.json())
    .then(response => {
      callback(response);
    })
    .catch(error => {
      // callback(error);
      console.log("no response");

      console.log(error);
    });
}
