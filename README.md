# lista-politicos
Aplicação feita utilizando o fullstack MEAN ( Mongo / Angular / Express / Node ), com o intuito de colocar em prática o aprendizado do curso BE-MEAN, a  aplicação consiste em exibir a lista de deputados que participaram da votação do impeachment da presidente Dilma, e que possuem ou não algum processo jurídico.


Foi utilizado como auxilio-base o excelente tutorial feito pelo **Thalles Bastos** em seu blog, o qual você confere em:  <http://thbastos.com/blog/criando-uma-aplicacao-em-nodejs-1-inicio>


As informações foram extraídas da fonte <http://revistapiaui.estadao.com.br/lupa/2016/04/17/votacao-do-impeachment-no-plenario-da-camara/>, e aqui o link direto para o pdf <https://t.co/3zpexNCc57>.


A estrutura de diretórios utilizada foi a seguinte:

lista-politicos

* models ( modelos/schemas a serem utilizados)
	* Politico.js (arquivo definição do schema)
* public ( arquivos públicos página html/angular app) 
	* angularApp (codigo angular a ser executado para exibição da view)
	* index.html (página html de apresentação da app)
* routes
	* index.js (definicao das rotas, ainda pode quebrado pois esta funcionando como arquivo de rota/controlador)
* package.json (configurações das dependencias)
* server.js (arquivo com a definição do servidor no node) 


O que a aplicação faz:

* Lista os deputados e informações referentes a processos juridicos

 

Possíveis Melhorias a serem feitas:

* criar rotina para ler pdf e dar carga no mongoDB com as informações
* Integrar datatable para facilitar a pesquisa, paginação e sort.
