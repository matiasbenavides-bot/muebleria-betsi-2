const botones = document.querySelectorAll(".cotizar-btn");

botones.forEach(boton => {
  boton.addEventListener("click", () => {

    const nombre = boton.dataset.nombre;
    const id = boton.dataset.id;

    const telefono = "56988996929";

    // Genera URL automática del producto
    const baseUrl = window.location.origin + window.location.pathname;
    const urlProducto = `${baseUrl}#${id.toLowerCase()}`;

    // Mensaje final
    const mensaje = `Hola, quiero cotizar:%0A%0A🪑 Producto: ${nombre}%0A🔢 Código: ${id}%0A🔗 Ver producto: ${urlProducto}`;

    const url = `https://wa.me/${telefono}?text=${mensaje}`;

    window.open(url, "_blank");
  });
});
// Scroll suave al producto si viene con #
if (window.location.hash) {
  const el = document.querySelector(window.location.hash);
  if (el) {
    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }
}