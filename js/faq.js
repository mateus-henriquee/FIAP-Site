const faqItems = document.querySelectorAll('.faq-item');

if (faqItems.length > 0) {
  faqItems[0].classList.add('open');
  const content = faqItems[0].querySelector('.faq-content');
  content.style.maxHeight = content.scrollHeight + 'px';
}

faqItems.forEach((item) => {
  const header = item.querySelector('.faq-header');
  const content = item.querySelector('.faq-content');

  header.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    faqItems.forEach(faq => {
      faq.classList.remove('open');
      faq.querySelector('.faq-content').style.maxHeight = null;
    });

    if (!isOpen) {
      item.classList.add('open');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});
