/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const showUsers = document.getElementById("btn");
const renderCard = (github) => {
  const card = document.createElement("div");
  const login = document.createElement("h2");
  const avatarUrl = document.createElement("img");

  login.textContent = github.login;
  avatarUrl.textContent = github.avatar_url;
  card.className = "card";
  card.append(login, avatarUrl);

  document.getElementById("output").append(card);
};
showUsers.addEventListener("click", () => {
  document.getElementById("message").textContent = "";
  fetch(ENDPOINT)
    .then((resp) => resp.json())
    .then((response) => {
      console.log(response);
      //   renderCard();
      response.forEach((github) => renderCard(github));
    })
    .catch((error) => {
      console.error(error);
    });
});
