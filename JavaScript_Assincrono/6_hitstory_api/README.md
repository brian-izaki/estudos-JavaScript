## Anotações sobre [History API](https://developer.mozilla.org/pt-BR/docs/Web/API/History)

Serve para ver o histórico da sessão (botão de voltar na canto esquerdo superior), manipular a sessão. 

- Essa propriedade apenas manipula o histórico atual da aba que está sendo navegado. E não o histórico do navegador por completo.

- o history pode ser acessado pelo objeto `window` com a propriedade `.history`;

- propriedades e métodos: 
  - `.pushState(estado, title, url)`: para adicionar uma nova página no histórico da página.
    - `estado` é um objeto com o novo histórico para a página, isso pode apagar os históricos anteriores.
    - `title` ainda não é suportado por alguns browsers;
    - `url`: vai adicionar uma nova utl para o histórico além de alterar o campo de url da página para o que for especificado (ele não muda a página apenas o campo de texto da url).

- eventos para o historico no `addEventListener`:
  - `popstate` ocorre sempre que for clicado no botão de retornar da página. Ele só ativado quando tem um historico modificado com o `pushstate()`;

- em conjunto com o `fetch` pode ser criado uma _Single Page Application_ básica, pois pode pegar o conteudo do servidor com o `fetch` e adicionar ao HTML da página e alterar a url de acordo com o conteúdo sem recarregar a página atual, além de adicionar no histórico da página para poder retornar ao conteudo anterior.