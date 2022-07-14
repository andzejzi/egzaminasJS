/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

const renderCard = (cars) => {
  const card = document.createElement("div");
  const brandName = document.createElement("h3");
  const listModel = document.createElement("span");
  brandName.textContent = cars.brand;
  listModel.textContent = cars.models;
  card.className = "card";

  card.append(brandName, listModel);

  document.getElementById("output").append(card);
};
fetch(ENDPOINT)
  .then((resp) => resp.json())
  .then((response) => {
    console.log(response);
    response.forEach((cars) => renderCard(cars));
  })
  .catch((error) => {
    console.error(error);
  });
