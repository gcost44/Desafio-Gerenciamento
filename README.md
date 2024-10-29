# Sistema de Gestão de Notas e Frequências

## 📖 Descrição
Este projeto é um sistema que permite a um professor inserir notas e frequências dos alunos, calcular médias, e identificar alunos com notas acima da média da turma e frequência abaixo de 75%. A aplicação utiliza React para o front-end e foi estilizada CSS.

## ⚙️ Instruções para Executar o Sistema

Para executar o sistema localmente, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
    ```

2. **Instale as dependências:**
   ```bash
   npm install
    ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
    ```

4. **Acesse a aplicação:**
  Abra seu navegador e vá para http://localhost:3000.

## ✅ Lista de Premissas Assumidas
- O sistema deve permitir que apenas um professor insira e visualize as notas e frequências dos alunos.
- As notas são numéricas e variam de 0 a 10.
- A frequência é expressa em porcentagem e deve ser inserida como um número inteiro.
- O localStorage é utilizado para persistir os dados durante a sessão do usuário.

## 💡 Decisões de Projeto
- **Estrutura do Front-End:** O projeto foi desenvolvido utilizando React para uma experiência de usuário interativa e reativa.
- **Estilização:** Optou-se pelo uso de CSS para uma estilização moderna.
- **Persistência de Dados:** Utiliza-se o localStorage para manter as informações dos alunos mesmo após o fechamento do navegador.
- **Componentização:** A aplicação foi estruturada em componentes para facilitar a manutenção e reutilização de código.

## 📊 Funcionalidades
- Cadastro de alunos com nome, nota e frequência.
- Listagem de alunos com suas respectivas notas e frequências.
- Cálculo da média das notas dos alunos.
- Identificação de alunos com notas acima da média e frequência abaixo de 75%.
- Remoção de Alunos da Lista

## 🛠️ Tecnologias Utilizadas
- **React**
- **localStorage**
- **React Hook-Form**

### 👤 Autor

Gabriel Costa  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue)](https://www.linkedin.com/in/gabriel-costa-931081211/)
