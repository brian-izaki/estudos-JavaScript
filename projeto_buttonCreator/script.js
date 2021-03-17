const controles = document.getElementById('controles')
const cssText = document.querySelector('.css')
const btn = document.querySelector('.btn')

const handleStyle = {
  element: btn,
  backgroundColor(value) {
    this.element.style.backgroundColor = value
  },
  height(value) {
    this.element.style.height = `${value}%`
  }, 
  width(value) {
    this.element.style.width = `${value}%`
  }, 
  texto(value) {
    this.element.innerText = value
  }, 
  color(value) {
    this.element.style.color = value
  }, 
  border(value) {
    this.element.style.border = value
  },
  borderRadius(value) {
    this.element.style.borderRadius = `${value/2}%`
  },
  fontFamily(value) {
    this.element.style.fontFamily = value
  },
  fontSize(value) {
    this.element.style.fontSize = `${value}rem`
  },
}

function handleChange(e) {
  const name = e.target.name;
  const value = e.target.value;
  handleStyle[name](value)
  saveValues(name, value)
  showCss()
}

function showCss(){
  cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>')

  console.log()
}

function saveValues(name, value) {
  localStorage[name] = value;
}

function setValues() {
  const properties = Object.keys(localStorage);
  properties.forEach(propertie => {
    handleStyle[propertie](localStorage[propertie])
    controles.elements[propertie].value = localStorage[propertie]
  })
  showCss()
}
setValues()
controles.addEventListener('change', handleChange)