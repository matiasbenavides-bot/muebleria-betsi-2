document.querySelector(".cotizar-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const tipo = document.getElementById("tipo").value;
  const descripcion = document.getElementById("descripcion").value;

  const telefono = "56988996929"; // tu número en formato internacional (Chile)

  const mensaje = `Hola, quiero solicitar una cotización:
Nombre: ${nombre}
Tipo de mueble: ${tipo}
Descripción: ${descripcion}`;

  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
});