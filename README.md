
## Sobre como testar 
* Teste mão livre
    * Faça suas alterações em src/app.ts
    * Rode *tsc* ou *npm watch* para compilar elas para o arquivo dist/app.js
    * Caso queira fazer um teste interagindo com o DOM, altere o index.html
    * Rode o npm start e acesse o localhost:3000
* Testar algum dos arquivos da pasta de exemplos ou desafios
    * Copie e cole o conteúdo para o arquivo src/app.ts ou altere o caminho do atributo src da tag script no index.html  
        * ex : *src=dist/app.js* -> *src=dist/exemplos/any.js*
    * Rode *tsc* ou *npm watch* para compilar elas para o arquivo dist/app.js
    * Caso queira fazer um teste interagindo com o DOM, altere o index.html
    * Rode o npm start e acesse o localhost:3000 
Caso queira fazer testes usando html é só alterar o index.html.
