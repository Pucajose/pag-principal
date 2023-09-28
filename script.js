//menu desplegable del usuario/
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("menu-button");
    const menu = document.getElementById("menu-list");

    button.addEventListener("click", function () {
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    });
});

/*icono crear servidor*/
const iconoAgregarServidor = document.getElementById("icono-menu");
const menuDesplegable = document.getElementById("menu-desplegable");

iconoAgregarServidor.addEventListener("click", () => {
  if (menuDesplegable.style.display === "block") {
    menuDesplegable.style.display = "none";
  } else {
    menuDesplegable.style.display = "block";
  }
});

/*segundo menu desplegable para plantilla*/
const crearServidor = document.getElementById("crear-plantilla");
const menuServidor = document.getElementById("menu-plantilla");

crearServidor.addEventListener("click", () => {
  if (menuServidor.style.display === "none") {
    menuServidor.style.display = "block";
  } else {
    menuServidor.style.display = "none";
  }
});
//menu desplegable p/crear un s/amigos/
const crearServidor1 = document.getElementById("crear-servidor");
const menuServidor1 = document.getElementById("menu-perso-amigos");

crearServidor1.addEventListener("click", () => {
  if (menuServidor1.style.display === "none") {
    menuServidor1.style.display = "block";
  } else {
    menuServidor1.style.display = "none";
  }
});
//menu desplegable p/crear un s/comunidad/
const crearServidor2 = document.getElementById("crear-servidor-com");
const menuServidor2 = document.getElementById("menu-perso-comunidad");

crearServidor2.addEventListener("click", () => {
  if (menuServidor2.style.display === "none") {
    menuServidor2.style.display = "block";
  } else {
    menuServidor2.style.display = "none";
  }
});

//menu desplegable p/explorar servidores/
const crearExplorar = document.getElementById("icono-explore");
const menuExplorar = document.getElementById("menu-busqueda-serv");

crearExplorar.addEventListener("click", () => {
  if (menuExplorar.style.display === "none") {
    menuExplorar.style.display = "block";
  } else {
    menuExplorar.style.display = "none";
  }
});
//menu desplegable p/explorar servidores/
const crearDescarga = document.getElementById("icono-descarga");
const menuDescarga = document.getElementById("menu-descarga");

crearDescarga.addEventListener("click", () => {
  if (menuDescarga.style.display === "none") {
    menuDescarga.style.display = "block";
  } else {
    menuDescarga.style.display = "none";
  }
});
