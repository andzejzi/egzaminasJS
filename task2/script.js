/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const btn_element = document.querySelector("#btn__element");
let counter = 0;
btn_element.addEventListener("click", () => {
  counter++;
  document.querySelector("#btn__state").textContent = counter;
});
