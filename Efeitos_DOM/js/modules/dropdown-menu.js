import outsideClick from '../../js/modules/clickoutside.js'

export default function initDropdownMenu() {
  const dropDownMenus = document.querySelectorAll('[data-dropdown]');
  
  function handleClick(e) {
    e.preventDefault();
    this.classList.add('active')

    outsideClick(this, ['click', 'touchstart'],() => {
      this.classList.remove('active')
    })
  }
  
  dropDownMenus.forEach(menu => {
    ['click', 'touchstart'].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick)
    })
  })
}
