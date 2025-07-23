# Lista de Exercícios 3 – Desenvolvimento front-end

Este repositório contém a resolução da terceira lista de exercícios do curso de Desenvolvimento front-end, ministrado pelo Professor Jaques Antunes como parte do projeto +PraTi e Codifica.

O projeto consiste na criação de várias páginas web estáticas e estilizadas, abordando conceitos fundamentais de HTML5, CSS3 e JavaScript.

---

### Tecnologias Utilizadas

* **HTML5:** Para a estruturação semântica do conteúdo.
* **CSS3:** Para estilização, layout (Flexbox e Grid) e responsividade.
* **JavaScript:** Para interatividade e manipulação de elementos da página (menu hambúrguer).

---

### Como Executar o Projeto Localmente

Para explorar este projeto e ver as páginas em ação no seu computador, siga os passos abaixo.

#### Pré-requisitos

* **Navegador Web:** Qualquer navegador moderno, como Google Chrome, Firefox ou Microsoft Edge.
* **Git:** O sistema de controle de versão para clonar este repositório. [Faça o download aqui](https://git-scm.com/).
* **Editor de Código:** Recomendo o **Visual Studio Code**. [Faça o download aqui](https://code.visualstudio.com/).
    * **Extensão Recomendada (VS Code):** **Live Server**. Ela cria um servidor de desenvolvimento local para recarregar a página automaticamente. [Instale por aqui](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

#### Passos para Execução

**1. Clonar o Repositório** Execute o seguinte comando no seu terminal (Git Bash, PowerShell, etc.):

```bash
git clone https://github.com/Ikaro-Leal/Prati_Lista_exercicios_3.git
```
**2. Abrir a Pasta do Projeto** Navegue até a pasta recém-criada:

```bash
cd Prati_Lista_exercicios_3
```

**3. Visualizar os Exercícios** Você tem duas opções para abrir os arquivos HTML no navegador:

- (Recomendado) Usando o Live Server no VS Code:

1. Abra a pasta do projeto no Visual Studio Code.

2. Clique com o botão direito em um dos arquivos .html (por exemplo, index.html).

3. Selecione a opção "Open with Live Server". Seu navegador abrirá automaticamente com a página carregada.

- **(Alternativa) Abrindo o Arquivo Diretamente:**

1. Navegue até a pasta do projeto no seu explorador de arquivos.

2. Dê um duplo clique em qualquer arquivo .html (index.html, listas.html, etc.) para abri-lo diretamente no seu navegador padrão.


#### Estrutura do projeto

O projeto está organizado da seguinte forma para separar estrutura (HTML), estilo (CSS) e comportamento (JS).

```
Prati_Lista_exercicios_3/
├── css/
│   └── styles.css
├── js/
│   └── menu.js
├── images/
│   └── ...
├── index.html
├── listas.html
├── feedback.html
├── galeria.html
└── README.md
```

#### Autor

- **Ikaro França Leal**  
- **Professor, Jaques Antunes**
- **Projeto desenvolvido como parte do curso +PraTI e Codifica.**


#### Lista dos exercícios

1. Crie um arquivo chamado index.html e monte nele a seguinte estrutura usando
sempre tags semânticas:
- Um header contendo um h1 (título) e um p (parágrafo) introdutório.
- Um main dividido em duas subseções:
- Seção “Missão” com h2 e p.
- Seção “Visão” com h2 e p.
- Um footer com um p de copyright.
2. Listas e Navegação - Em um arquivo listas.html:
- Crie uma lista não ordenada (ul) com cinco hobbies seus, cada um em um li.
- Crie uma lista ordenada (ol) descrevendo, em passos, como preparar uma receita simples, cada passo em um li.
- Ao final, inclua um bloco de navegação (nav) com três links externos,usando a href="URL_DO_SITE"Nome do Site</a>.

3. Formulário de Feedback - Em arquivo feedback.html, construa um formulário
que contenha:
- Nome
- E-mail
- Endereço Completo
- Tipo de feedback
- Campo para o Feedback
- Botão de Envio

4. CSS Básico e Box Model - Crie um arquivo styles.css e vincule-o em
index.html:
- Defina cores de fundo (background-color) e de texto (color) para header,main e footer.
- Para cada uma dessas seções, aplique margin, padding e border de forma a
evidenciar seus contornos.
5. Seletores e Propriedades - No mesmo styles.css, adicione:

- Um estilo para todas as tags h2 que aumente a font-size e aplique text-
decoration: underline.

- Uma classe .destaque que deixe o texto em itálico (font-style: italic) e aplique
um leve background-color.

- Um ID #importante que adicione border-top mais espessa em um parágrafo
específico.

6. Exercício Grid e Flexbox - Monte uma galeria com oito imagens e legendas,
organizadas por Grid. Além disso, envolva toda a galeria em um contêiner que
utilize Flexbox para centralizar o conjunto na página e permitir que as figuras
quebrem de linha quando a largura for limitada. Ajuste o número de colunas do
Grid para telas menores por meio de media query.

7. Menu Hamburger - implemente um menu “hamburger” que:
- Apareça apenas em telas com largura ≤ 600 px.
- Oculte a navegação padrão e abra/feche o menu ao ser clicado.
