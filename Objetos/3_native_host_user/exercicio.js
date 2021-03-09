// Liste 5 objetos nativos
Object
Array
String
Number
Boolean

// Liste 5 objetos do browser
Window
HTMLCollection
Document
NodeList
History


// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
if (typeof document.webkitVisibilityState !== "undefined") {
  console.log('existe')
} else {
  console.log('não existe')
}