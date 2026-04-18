// Fecha bonita (del navegador)
(() => {
  const fechaEl = document.getElementById("fecha");
  if (fechaEl) {
    const d = new Date();
    const fmt = new Intl.DateTimeFormat("es-ES", { dateStyle: "full" });
    fechaEl.textContent = fmt.format(d);
  }

  // Botón "Ver detalles" -> baja suave al checklist
  const btn = document.getElementById("btnDetalles");
  const extra = document.getElementById("extra");
  if (btn && extra) {
    btn.addEventListener("click", () => {
      extra.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
})();