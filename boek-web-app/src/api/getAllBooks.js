const HEADERS = {
  "Content-Type": "application/json"
};

export function getAllBooks(callback) {
  let url = "";
  fetch(url, { method: "GET", headers: HEADERS })
    .then(res => res.json())
    .then(response => {
      callback(response);
    })
    .catch(error => {
      callback(error);
    });
}
