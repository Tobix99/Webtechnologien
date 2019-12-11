const groesse = 5;

document.getElementById("demo").addEventListener("click", event => {
  event.target.innerHTML = "Das ist kein Spaß";
});

for (let i = 0; i < groesse; i++) {
  var contentPiece = document.getElementById("contentPiece1").cloneNode(true);

  contentPiece.id = "contentPiece" + (i + 2);
  contentPiece.lastElementChild.style.height = "0px";
  contentPiece.lastElementChild.lastElementChild.src =
    "https://picsum.photos/200" + i;
  contentPiece.lastElementChild.lastElementChild.addEventListener(
    "load",
    function(event) {
      event.target.parentElement.style.height = "300px";
    }
  );
  //contentPiece.style.border = "solid 2px red";
  document.getElementById("content").appendChild(contentPiece);
}

const content = document.getElementsByClassName("contentText");

const Http = new XMLHttpRequest();
const url = "https://litipsum.com/api/json";
Http.responseType = "json";
Http.open("GET", url);
Http.send();

Http.onreadystatechange = e => {
  if (Http.response) {
    for (let i = 0; i < content.length; i++) {
      content[i].innerHTML = Http.response.text[i];
    }
  }
};
