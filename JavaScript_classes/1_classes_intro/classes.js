class Button {
  constructor (text, background) {
    this.veja = 'veja no __proto__' 
    this.text = text;
    this.background = background;
  }

  criarElemento() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.backgroundColor = this.background;
    return buttonElement
  }

  appendTo(target) {
    const targetElement = document.querySelector(target)
    targetElement.appendChild(this.criarElemento())
    return targetElement
  }

  static blueButton(text) {
    return new Button(text, 'blue')
  }
}
const blueButton = new Button('Comprar', 'blue')
console.log('class Button', blueButton)
console.log('método da classe', blueButton.appendTo('body'))
console.log('class button com cor padrão', Button.blueButton('Com static'))

class Button2 {
  constructor(options) {
    this.options = options;
  }

  static createButton(text, background) {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;
    buttonElement.style.backgroundColor = background;
    return buttonElement;
  }
}
const redButton = new Button2({
  backgroundColor: 'red',
  text: 'Comprar2',
  color: 'white'
})
console.log('classe com objeto no argumento', redButton)

console.log('método static', Button2.createButton('Vender', 'green'))