(function () {
  'use strict';
  const header = document.querySelector('.site-header');
  const nav = document.querySelector('#mainNav');
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const sections = [...document.querySelectorAll('main section[id]')];
  const setHeaderHeight = () => document.documentElement.style.setProperty('--header', `${header.offsetHeight}px`);
  setHeaderHeight();
  window.addEventListener('resize', setHeaderHeight, { passive: true });

  navLinks.forEach(link => link.addEventListener('click', () => {
    if (nav.classList.contains('show') && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(nav).hide();
  }));

  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  }), { threshold: 0.14 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    }
  }), { rootMargin: `-${header.offsetHeight + 30}px 0px -60% 0px`, threshold: 0 });
  sections.forEach(section => sectionObserver.observe(section));

  const year = document.querySelector('#currentYear');
  if (year) year.textContent = new Date().getFullYear();
}());
