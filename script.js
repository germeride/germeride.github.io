document.addEventListener('DOMContentLoaded', () => {
  // Year in footer
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Disable nav links (placeholder until real pages exist)
  document.querySelectorAll('[data-disabled="true"]').forEach((el) => {
    el.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
    });
  });

  // Hero CTA scrolls to the request form
  const heroCta = document.getElementById('heroCta');
  const ctaForm = document.getElementById('ctaForm');
  if (heroCta && ctaForm) {
    heroCta.addEventListener('click', () => {
      ctaForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const firstInput = ctaForm.querySelector('input[name="name"]');
      if (firstInput) {
        setTimeout(() => firstInput.focus({ preventScroll: true }), 300);
      }
    });
  }

  // Lightweight client-side form handler
  if (ctaForm) {
    ctaForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(ctaForm);
      const name = (data.get('name') || '').toString().trim();
      const phone = (data.get('phone') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const consent = data.get('consent');
      if (!name || !phone || !email || !consent) {
        alert('Пожалуйста, заполните обязательные поля и подтвердите согласие на обработку персональных данных.');
        return;
      }
      alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
      ctaForm.reset();
    });
  }
});
