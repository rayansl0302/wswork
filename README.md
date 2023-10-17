OBSERVAÇÃO MUITO IMPORTANTE:

Como identifiquei dois erros:

O primeiro erro de CORS porém resolvi criando um arquivo proxy.conf.js, fazendo uma alteração no angular.json.

O segundo erro nas API's ( "num_portas" : 4 falta a ',' assim me impedindo de exibir as informações contidas nelas), mas, a esse segundo erro não foi possível solucionar, mesmo resolvendo o erro de CORS.

Porém tomei a liberdade de pegar as informações e criar uma simulação de api com json server.

Instalação Global do JSON Server:

Abra seu terminal e execute o seguinte comando para instalar o json-server globalmente em sua máquina:

npm install -g json-server

Isso instalará o json-server globalmente, permitindo que você o utilize em qualquer projeto.

Inicie o JSON Server:

No terminal, navegue até o diretório onde está localizado o arquivo db.json ou forneça o caminho completo para o arquivo. Em seguida, execute o seguinte comando para iniciar o servidor JSON:

json-server --watch db.json

O --watch indica que o servidor deve "observar" o arquivo db.json para quaisquer alterações e atualizar os dados em tempo real.

Acesse Seu Banco de Dados JSON:

O JSON Server estará em execução no seguinte endereço por padrão:

http://localhost:3000

Documentação de Uso do Componente FiltroComponent

Introdução

O FiltroComponent é um componente Angular reutilizável que permite aos usuários filtrar os veículos com base em critérios específicos, como combustível e ano. Ele fornece uma interface de usuário simples com caixas de seleção que permitem ao usuário escolher os critérios de filtro desejados.

Pré-requisitos

Antes de começar a usar o FiltroComponent, certifique-se de que seu aplicativo Angular esteja configurado e funcionando corretamente. Você também deve ter instalado o Angular Material para aproveitar o estilo de componentes como mat-checkbox.

Instalação

Certifique-se de que o FiltroComponent esteja disponível no seu projeto. Se você não o tiver, você pode importá-lo ou criá-lo seguindo as melhores práticas de criação de componentes em Angular.

No seu módulo (geralmente app.module.ts), importe o FiltroComponent:

typescript

import { FiltroComponent } from './caminho-para-seu-componente/filtro.component';
Em seguida, adicione o FiltroComponent aos declarations do seu módulo:

typescript

@NgModule({
  declarations: [FiltroComponent],
  // ...
})

Uso

Depois de configurar o FiltroComponent, você pode usá-lo em qualquer um dos seus templates de componente. Aqui está um exemplo de como usá-lo:

html

<app-filtro></app-filtro>

O exemplo acima inserirá o componente FiltroComponent no seu template.


Documentação de Uso do Componente VeiculosComponent

Introdução

O VeiculosComponent é um componente Angular que exibe uma lista de veículos e permite filtrar esses veículos com base em critérios específicos. Ele trabalha em conjunto com o FiltroComponent para aplicar filtros e exibir os resultados correspondentes.

Pré-requisitos

Antes de começar a usar o VeiculosComponent, certifique-se de que seu aplicativo Angular esteja configurado e funcionando corretamente. Você também deve ter instalado o Angular Material e configurado o FiltroComponent para filtrar a lista de veículos.

Instalação

Certifique-se de que o VeiculosComponent esteja disponível no seu projeto. Se você não o tiver, você pode importá-lo ou criá-lo seguindo as melhores práticas de criação de componentes em Angular.

No seu módulo (geralmente app.module.ts), importe o VeiculosComponent:

typescript

import { VeiculosComponent } from './caminho-para-seu-componente/veiculos.component';

Em seguida, adicione o VeiculosComponent aos declarations do seu módulo:

typescript

@NgModule({
  declarations: [VeiculosComponent],
  // ...
})

Uso

Depois de configurar o VeiculosComponent, você pode usá-lo em qualquer um dos seus templates de componente. Aqui está um exemplo de como usá-lo:

html

<app-veiculos></app-veiculos>

O exemplo acima inserirá o componente VeiculosComponent no seu template.

Lembre-se de que o uso desses componentes pode exigir ajustes adicionais no seu aplicativo para que eles funcionem corretamente. Certifique-se de seguir as práticas recomendadas de integração de componentes Angular.
