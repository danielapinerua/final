function verActores() {
  var submenu = document.getElementById("submenuOpciones");
  var boton = document.querySelector(".reparto");

  if (submenu.style.display === "flex") {
    submenu.style.display = "none";
      flecha.style.transform = "rotate(0deg)";
  } else {
    submenu.style.display = "flex";
    flecha.style.transform = "rotate(180deg)";
  }
}
  function mostrarSpotify() {
    var caja = document.getElementById("spotify");
    caja.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/25vto1XDKIDTzqxBUi7U32?utm_source=generator" width="100%" height="80" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
  }