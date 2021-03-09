## Diferentes categorias de objetos

Existem diferentes categorias de objetos, são eles: Native (built-in), Host e User. 
<br />
<br />
Na implementação deles não existe diferença, são apenas os locais e por quem eles são criados e/ou utilizados.

---

- **Categoria Native (built-in)** <br />
  São os objetos definidos na própria linguagem e são implementadas independentemente do host. Ex:

  - Object
  - String
  - Array
  - Function 
  - etc...

- **Categoria Host** <br />
**Host é o local que o JavaScript está sendo executado**, ex: Browser ou Node.js (usa JS para o backend). Alguns objetos não serão possíveis de serem acessados no Node, mas no browser serão e vice-versa.

  - No Browser existem os:
    - NodeList
    - HTMLCollection
    - Element
    - etc...

- Alguns browsers podem acabar se diferindo dos objetos, assim como versões.

- **Categoria User** <br />
São os objetos que são criados pelos desenvolvedores (bibliotecas, fameworks, etc), ou por você mesmo. 

---
### Verificando se existe o objeto

- utilize o `typeof nomeObjeto`  ele retorna o tipo do objeto, caso não for ele retorna undefined 