var data = "{}";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.bizzabo.com/api/events");
xhr.setRequestHeader("accept", "application/vnd.bizzabo.v2.0+json");
xhr.setRequestHeader("authorization", "Bearer b2f9b657-d8fd-4c34-a28b-eba13cab25c2");

xhr.send(data);