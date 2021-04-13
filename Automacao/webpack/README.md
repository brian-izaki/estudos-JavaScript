## Anotações sobre o Webpack

- Ele é um bundler (agrupa/processa vários arquivos para otimização)

- A utilzação do webpack no projeto pode ser visto no diretório [animais_fantasticos_eslint](../animais_fantasticos_eslint)

- no diretório passado a cima, pode ser utilizado o comando `npm install` e depois `npm run build` para gerar o arquivo bundle (não será necessário executar o próximo tópico "códigos"), para ver o modo development `npm run dev`

- códigos:
  1. instalado o pacote do webpack e da CLI dele com `npm i -D webpack webpack-cli`
  2. utilizado o seguinte comando para gerar o arquivo bundler `npx webpack js/script.js -o ./main`
    - o arquivo antes do `-o` é o arquivo de entrada, após ele é o arquivo de saída (bundle)
  3. será gerado uma pasta com o nome que está na frente do `-o` da linha de comando anterior.
  4. caso queira que o processo de bundler continue ocorrendo, no final do comando utilizado no passo 2 deve adicionar `--watch`
  5. pode ser escolhido o modo development(quando ocorre um erro ele mostra o local que teve) e production (apenas vai mostrar o arquivo gerado), na linha de comando mostrado no passo 2 apenas deve adicionar `--mode production` ou `--mode development`

- com a execução do webpack ele realiza o processo de "uglify", torna o arquivo com menor espaço de armazenamento.

- com webpack fica mais fácil importar bibliotecas de terceiros, ele carrega os códigos importados no projeto e realiza o bundler das bibliiotecas utilizados.
