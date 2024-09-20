
<body>
  <h1>Sistema de Controle Escolar</h1>
  <p>
    Este é um sistema de controle escolar online desenvolvido com <strong>Next.js</strong>, <strong>React</strong>, e utilizando conceitos de <strong>Orientação a Objetos</strong>. O objetivo do sistema é gerenciar escolas públicas, suas turmas e alunos, além de fornecer uma interface para cadastro, listagem e edição de dados.
  </p>

  <h2>Funcionalidades</h2>
  <ul>
    <li>Listagem e cadastro de escolas</li>
    <li>Listagem e cadastro de turmas por escola</li>
    <li>Listagem de alunos por turma</li>
    <li>Edição de escolas e turmas</li>
    <li>Filtros de busca e gerenciamento de dados</li>
  </ul>

  <h2>Tecnologias Utilizadas</h2>
  <ul>
    <li><strong>Next.js</strong> 14</li>
    <li><strong>React</strong></li>
    <li><strong>TypeScript</strong></li>
    <li><strong>Tailwind CSS</strong></li>
    <li><strong>Zustand</strong> para gerenciamento de estado</li>
    <li><strong>Jest</strong> e <strong>Testing Library</strong> para testes unitários</li>
    <li><strong>Orientação a Objetos</strong> para estruturação dos dados de escolas, turmas e alunos</li>
  </ul>

  <h2>Como Rodar o Projeto</h2>

  <h3>Pré-requisitos</h3>
  <ul>
    <li><strong>Node.js</strong> versão 16+</li>
    <li><strong>NPM</strong> ou <strong>Yarn</strong> para gerenciamento de pacotes</li>
  </ul>

  <h3>Passo a Passo</h3>
  <ol>
    <li>Clone o repositório:
      <pre><code>git clone https://github.com/seu-usuario/seu-repositorio.git</code></pre>
    </li>
    <li>Acesse a pasta do projeto:
      <pre><code>cd front-end-single-school-system</code></pre>
    </li>
    <li>Instale as dependências:
      <pre><code>npm install</code></pre>
      ou
      <pre><code>yarn install</code></pre>
    </li>
    <li>Inicie o servidor de desenvolvimento:
      <pre><code>npm run dev</code></pre>
      ou
      <pre><code>yarn dev</code></pre>
    </li>
  </ol>

  <p>
    O projeto estará rodando em <a href="http://localhost:3000">http://localhost:3000</a>.
  </p>

  <h3>Estrutura de Diretórios</h3>
  <ul>
    <li><code>src/components</code>: Contém todos os componentes da interface.</li>
    <li><code>src/containers</code>: Gerencia a lógica de negócios (containers para listas de escolas, turmas, alunos, etc).</li>
    <li><code>src/lib</code>: Classes baseadas em OOP (Escola, Turma, Aluno) utilizadas para manipulação dos dados.</li>
    <li><code>src/interfaces</code>: Definições das interfaces e tipos utilizados no projeto.</li>
    <li><code>public/mock</code>: Contém o arquivo JSON com dados mockados para desenvolvimento e testes.</li>
  </ul>

  <h3>Testes</h3>
  <p>Os testes são implementados utilizando <strong>Jest</strong> e <strong>Testing Library</strong>.</p>
  <p>Para rodar os testes, utilize o comando:</p>
  <pre><code>npm run test</code></pre>
  ou
  <pre><code>yarn test</code></pre>

</body>
</html>
