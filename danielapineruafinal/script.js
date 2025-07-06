function verActores() {
  var submenu = document.getElementById("submenuOpciones");
  var boton = document.querySelector(".reparto");

  if (submenu.style.display === "flex") {
    submenu.style.display = "none";
    boton.classList.remove("abierto");
  } else {
    submenu.style.display = "flex";
    boton.classList.add("abierto");
  }
}