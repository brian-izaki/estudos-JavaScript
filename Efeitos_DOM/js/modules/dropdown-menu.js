export default function initDropdownMenu() {
  const dropDownMenus = document.querySelectorAll('[data-dropdown]');
  
  function handleClick(e) {
    e.preventDefault();
    this.classList.toggle('active')
  }
  
  dropDownMenus.forEach(menu => {
    ['click', 'touchstart'].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick)
    })
  })
}
