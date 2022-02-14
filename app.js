let inputSayı = document.getElementById("input_numara");
let check = document.getElementById("input_submit");
let kalanHak = document.getElementById("kalan_hak");
let ilk_değer = document.getElementById("ilk_değer");
let son_değer = document.getElementById("son_değer");
let mesaj = document.getElementById("mesaj");
let resim = document.getElementById("resim");

const sayıTahmin = Math.floor(Math.random() * 100) + 1;


check.addEventListener("click", (event) => {
  if (inputSayı.value < sayıTahmin) {
    kalanHak.innerHTML--;
    ilk_değer.innerHTML = inputSayı.value;
    inputSayı.value = "";
    if (kalanHak.innerHTML == 0) {
      mesaj.innerText = "You Lost!";
      mesaj.style.color = "red";
      mesaj.style.fontWeight = "900";
      resim.setAttribute("src", "./img/üzüntü.png");
      resim.style.width = "30rem";
    }
  } else if (inputSayı.value > sayıTahmin) {
    kalanHak.innerHTML--;
    son_değer.innerHTML = inputSayı.value;
    inputSayı.value = "";
    if (kalanHak.innerHTML == 0) {
      mesaj.innerText = "You Lost!";
      mesaj.style.color = "red";
      mesaj.style.fontWeight = "900";
    }
  } else if (inputSayı.value == sayıTahmin) {
    mesaj.innerText = "You Win!";
    mesaj.style.color = "rgb(12, 223, 12)";
    mesaj.style.fontWeight = "900";
    resim.setAttribute("src", "./img/sevinç.png");
    resim.style.width = "30rem";
  }
  event.preventDefault();
});
