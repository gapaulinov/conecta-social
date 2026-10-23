/* Interações demonstrativas: menu mobile, dropdown e feedback de formulários */
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
      nav.classList.toggle("is-open", !isOpen);
    });

    document.querySelectorAll(".nav-dropdown > .nav-link").forEach((link) => {
      link.addEventListener("click", (event) => {
        if (window.matchMedia("(max-width: 768px)").matches) {
          const parent = link.closest(".nav-dropdown");
          if (parent && !parent.classList.contains("open")) {
            event.preventDefault();
            parent.classList.add("open");
          }
        }
      });
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.matchMedia("(max-width: 768px)").matches && !link.closest(".nav-dropdown")) {
          nav.classList.remove("is-open");
          menuButton.setAttribute("aria-expanded", "false");
          menuButton.setAttribute("aria-label", "Abrir menu");
        }
      });
    });
  }

  document.querySelectorAll(".js-demo-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const feedback = form.querySelector(".form-feedback");
      if (!form.checkValidity()) {
        form.reportValidity();
        if (feedback) {
          feedback.hidden = false;
          feedback.className = "form-feedback error";
          feedback.textContent = "Confira os campos obrigatórios antes de continuar.";
        }
        return;
      }
      if (feedback) {
        feedback.hidden = false;
        feedback.className = "form-feedback success";
        feedback.textContent = form.dataset.success || "Dados validados para esta demonstração.";
      }
      const toast = document.getElementById("toast");
      if (toast) {
        toast.textContent = form.dataset.success || "Formulário validado.";
        toast.classList.add("show");
        window.setTimeout(() => toast.classList.remove("show"), 4200);
      }
    });
  });

  const customAmount = document.getElementById("valor-livre");
  if (customAmount) {
    customAmount.addEventListener("input", () => {
      if (customAmount.value.trim() !== "") {
        document.querySelectorAll('input[name="valor"]').forEach((radio) => {
          radio.checked = false;
        });
      }
    });
    document.querySelectorAll('input[name="valor"]').forEach((radio) => {
      radio.addEventListener("change", () => { customAmount.value = ""; });
    });
  }
});