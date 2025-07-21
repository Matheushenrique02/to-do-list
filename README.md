Lista de Tarefas Simples com JavaScript
Este projeto é uma aplicação web simples para gerenciamento de tarefas, desenvolvida em JavaScript puro (Vanilla JS), HTML e CSS. Permite adicionar tarefas, marcar como concluídas e excluir, com manipulação dinâmica do DOM.

Funcionalidades
Adicionar tarefas com texto digitado pelo usuário

Listar tarefas adicionadas em uma lista dinâmica

Marcar tarefas como concluídas, aplicando riscado no texto

Excluir tarefas da lista

Validação para não adicionar tarefas vazias

Tecnologias usadas
HTML5

CSS3

JavaScript (ES6+)

Como usar
Abra o arquivo index.html no seu navegador

Digite uma tarefa no campo de entrada

Clique no botão "Adicionar" para incluir a tarefa na lista

Clique em "Concluída" para riscar a tarefa, indicando que foi feita

Clique em "Excluir" para remover a tarefa da lista

Estrutura do código
O JavaScript manipula os elementos da página para criar dinamicamente cada item da lista (<li>) com dois botões ("Concluída" e "Excluir").

Os botões possuem eventos click para alterar o estilo da tarefa (riscar) ou removê-la do DOM.

A lista é mantida em memória em um array, mas não persiste após o reload da página.

Próximos passos para aprimoramento
Adicionar persistência usando LocalStorage para manter a lista após recarregar a página

Melhorar a interface com CSS para maior usabilidade

Implementar edição das tarefas já criadas

Validar melhor a entrada de texto para evitar duplicatas

Aprendizado com este projeto
Este exercício fortaleceu o entendimento sobre manipulação do DOM, eventos, criação e remoção dinâmica de elementos, além de controle básico de estilos via JavaScript, conceitos essenciais para o desenvolvimento web frontend.
