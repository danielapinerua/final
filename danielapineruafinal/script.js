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
  function cambiarColores() {
  var cuadro = document.getElementById("cuadro");
  var mapa = document.getElementById("mapa");
  var columna1 = document.getElementById("columna1");
  var columna2 = document.getElementById("columna2");

  cuadro.style.backgroundColor = "#b9d8f3"; 
  mapa.style.border = "4px solid white";
  columna1.style.backgroundColor = "white";
  columna2.style.backgroundColor = "white";
}
function mostrarBiografiaAgustin() {
  var biografia = document.getElementById("biografiaAgustin");
  biografia.textContent = "Agustín Pardella nació el 12 de enero de 1994. Es un actor, cantante y músico argentino, conocido por La sociedad de la nieve (2023), Pinamar (2016) y Como una novia sin sexo (2016).";
}
function mostrarBiografiaEnzo() {
  var biografia = document.getElementById("biografiaEnzo");
  biografia.textContent = "Enzo Vogrincic Roldán, es un aclamado actor uruguayo que ha logrado hacerse un nombre destacado en la industria cinematográfica internacional. Nacido el 22 de marzo de 1993, en Montevideo, su pasión por la actuación se despertó a temprana edad. A los 20 años, en 2013, decidió llevar a cabo una formación más especializada e ingresó a la prestigiosa Escuela Multidisciplinaria de Arte Dramático Margarita Xirgu, de Montevideo. Su primera incursión en el cine llegó en 2018, con un pequeño papel en la película La noche de 12 años.";
}
function mostrarBiografiaEsteban() {
 var biografia = document.getElementById("biografiaEsteban");
 biografia.textContent = "Esteban Kukuriczka nació el 19 de marzo de 1991 en Lanús, Buenos Aires. Es egresado de la Licenciatura en Actuación en la UNA. En teatro actuó en Parias, La crueldad de los animales, Me duele una mujer, Única, Nuestra primera última vez , Presentes, entre otras obras. En cine actuó en La sociedad de la nieve, Betibú, Eliana , A donde quieras , Habitación disponible y Federica.";
}
function mostrarBiografiaFelipe() {
 var biografia = document.getElementById("biografiaFelipe");
 biografia.textContent = "Felipe González Otaño es un actor argentino, conocido por su papel en la película La sociedad de la nieve (2023). También ha participado en otras producciones como la serie Cuéntame cómo pasó (2017) y Bia (2019). Felipe estudia diseño de imagen y sonido en la Universidad de Buenos Aires.";
}
function mostrarBiografiaFrancisco() {
  var biografia = document.getElementById("biografiaFrancisco");
  biografia.textContent = "Francisco Romero es un actor argentino. Nació el 25 de abril de 1995. Hizo su debut como actor profesional en la Sociedad de la Nieve.";
  
}
function mostrarBiografiaMatias() {
  var biografia = document.getElementById("biografiaMatias");
  biografia.textContent = "Matías Recalt, es un actor argentino. Nació el 14 de septiembre de 2001. Es conocido por haber interpretado a Danilo en la serie Apache: La Vida de Carlos Tévez del 2019. En el 2023 interpretó a Javier Gutiérrez en la serie de televisión Planners. En el 2023, interpretó a Roberto Canessa en la Sociedad de la nieve, papel que lo llevó a ganar más popularidad.";
}
function mostrarBiografiaValentino() {
  var biografia = document.getElementById("biografiaValentino");
  biografia.textContent = "Valentino Alonso nació en Buenos Aires en 1994. Es actor y también se desempeña como músico teatral. En 2018 se recibió de la Licenciatura en Actuación de la Universidad Nacional de las Artes.En cuanto a la formación musical, estudió canto, bajo, guitarra y teoría musical. Actuó en varias obras de teatro, como en “Un Enemigo del Pueblo”.";
}
function mostrarMensaje() {
  var mensaje = document.getElementById("mensajeExtra");
  mensaje.textContent = "En lo alto de aquellas montañas no solo hubo nieve y silencio, también hubo fuerza, amistad y esperanza. Gracias por sumar tu voz a esta historia que aún sigue conmoviendo.";
}