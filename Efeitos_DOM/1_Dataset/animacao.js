function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove("ativo");
      });
      const dataAnima = tabContent[index].dataset.anime;
      tabContent[index].classList.add("ativo", dataAnima);
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => activeTab(index));
    });
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll("[data-anime='accordion'] dt");

  if (accordionList.length) {
    accordionList[0].classList.add("ativo");
    accordionList[0].nextElementSibling.classList.add("ativo");

    function activeAccordion(e) {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
      console.log(this);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    console.log(section.offsetTop);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth'
    // })
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  if (sections.length) {
    const windowMetade = innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;

        if (isSectionVisible) {
          section.classList.add("ativo");
        }
      });
    }

    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
initAnimacaoScroll();
