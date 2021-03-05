## Anotações sobre o Document Object Model (DOM)
É uma interface que representa documentos HTML ou XML através de objetos. Com estes objetos, é possível manipular estilos (é possível alterar o CSS com o JS pelo DOM), estrutura e conteúdos deles.

- O HTML mostrado no *inspecionar elemento* é o DOM da página. Pois nele é possível atualizar em tempo real os valores de um elemento HTML, ou adicionar estilos.

- A árvore do DOM tem como **raiz o window** que vai ramificando em vários outros ramos. O principal é o **document**, pois a partir dele é **possível acessar o HTML** da página.

- O objeto window é global, ou seja, caso queira acessar um método ou propriedade dele, não é necessário digitar window, basta colocar o nome do método ou atributo que irá funcionar (*obs: isto é caso não esteja dentro do escopo de nehum bloco*)