#  Sobre o Projeto

Esta aplicação foi desenvolvida como parte de um desafio técnico para um processo seletivo de uma vaga de desenvolvedor full stack. O objetivo era demonstrar minhas habilidades e conhecimentos em desenvolvimento web.

Ao longo do desenvolvimento, foram aplicados conceitos de arquitetura de software, boas práticas de programação, manipulação de dados, interação com APIs, entre outros. A aplicação foi implementada com o intuito de resolver o problema proposto no desafio, mostrando minhas capacidades técnicas e criatividade na solução.

Se você está revisando este repositório como parte do processo seletivo, agradeço pela oportunidade e fico à disposição para quaisquer dúvidas ou informações adicionais sobre a implementação.

A aplicação possui duas telas principais:

1. **Tela de Visualização de Reservas**: Nesta tela, os usuários podem visualizar as reservas existentes para as estações de trabalho disponíveis. É possível visualizar os detalhes das reservas, como a data e horário, a estação de trabalho selecionada e o responsável pela reserva. Além disso, há um botão para acessar a segunda tela, onde os usuários podem realizar novas reservas.

2. **Tela de Reservas**: Nesta tela, os usuários podem fazer novas reservas de estações de trabalho. Eles podem selecionar a data e horário desejados, escolher a estação de trabalho disponível e inserir as informações necessárias, como o nome e contato do responsável pela reserva.

# Tecnologias Utilizadas

A aplicação foi desenvolvida utilizando as seguintes tecnologias:

- ![React](https://img.icons8.com/ios/20/000000/react-native.png) React
- ![TypeScript](https://img.icons8.com/color/20/000000/typescript.png) TypeScript (TSX)
- ![Django](https://img.icons8.com/color/20/000000/django.png) Django



# Instruções para rodar o Projeto

### pre-requisitos

[Node](https://nodejs.org/en/)

[Python](https://www.python.org/ftp/python/3.11.3/python-3.11.3-amd64.exe)


## Passos:

- Basta clonar, ou fazer [donwload](https://github.com/Lmsilvano/loeffa-app-agendamento/archive/refs/heads/main.zip) deste repositório;


- Configurar o ambiente virtual: No diretório do projeto, crie um ambiente virtual para isolar as dependências do projeto do restante do sistema. Use o seguinte comando:

```bash
python -m venv nome_do_ambiente_virtual
```
Em seguida, ative o ambiente virtual:

#### No Windows:
```bash
nome_do_ambiente_virtual\Scripts\activate
```
#### No macOS/Linux:

```bash
source nome_do_ambiente_virtual/bin/activate
```

Instalar as dependências: Com o ambiente virtual ativado, instale as dependências do projeto. Normalmente, essas dependências estão listadas em um arquivo requirements.txt. Execute o seguinte comando:

```bash
pip install -r requirements.txt
```
Isso instalará todas as dependências necessárias para o projeto.

Configurar o banco de dados: 
Como o projeto usa o sqlite3 que vem como padrão do python, nenhuma configuração adicionar é necessária.

Executar as migrações: No diretório raiz projeto, execute as migrações do Django para criar as tabelas do banco de dados.

```bash
python manage.py migrate
```

Em seguida, crie um usuário administrador do banco para poder realizar o CRUD:
```bash
python manage.py createsuperuser
```

Executar o servidor de desenvolvimento: Agora você está pronto para iniciar o servidor de desenvolvimento do Django e executar o projeto.
plaintext

```bash
python manage.py runserver
```
Isso iniciará o servidor de desenvolvimento na máquina local, e você poderá acessar o projeto através do navegador usando a URL http://127.0.0.1:8000/admin/.

## Rodar o Frontend

Abra o terminal de sua prefência no diretório frontend deste projeto(onde se encontra o arquivo package.json). 
dica :(no windows basta segurar a tecla shift e clicar no fundo da pasta raiz do projeto com o botão direito do mouse e selecionar "abrir janela do powershellaqui") 

- com terminal aberto no diretório frontend do projeto, execute o comando: 
```bash
$ npm install -y
```

- Após concluir a instalação, mantendo-se no diretório raiz do projeto, execute o comando:
```bash
$ npm run dev
```
