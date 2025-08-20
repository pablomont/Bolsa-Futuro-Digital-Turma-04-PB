

## Bolsa Futuro Digital


![App Screenshot](https://www.ifmg.edu.br/portal/noticias/programa-bolsa-futuro-digital/logo1.jpg/@@images/8e0acb2b-3a8b-4c3d-bb02-c7ee52d47ab3.jpeg)


# Bolsa Futuro Digital

Bem-vindo(a) ao repositório da disciplina! Este espaço foi criado para centralizar os materiais didáticos, incluindo slides de aula e códigos de exemplo.

O conteúdo está organizado por módulos para facilitar o seu acompanhamento ao longo do semestre.

Este **NÃO** é o canal Oficial de conteúdo do programa, apenas um repositório que uso no dia a dia e pode ser consultado também pelos treinandos.

## Estrutura de Pastas

- 📁 `Módulo 1 ou 2 ou 3/`
  - 📁 `Aulas/`
    - 📁 `Aula_01 ou Aula_02 ou Aula_03.pdf`
         - 📄 `Aula_01 ou Aula_02 ou Aula_03.pdf`

## Atenção

📌 Este repositório é um trabalho em progresso e será atualizado continuamente ao longo do semestre. 
Fique atento(a) às novas pastas e arquivos!

## 💡 Como usar este repositório

# 🚀 Instruções para começar a usar o Git e GitHub

## 1️⃣ Criar uma conta no GitHub
1. Acesse: [https://github.com](https://github.com)
2. Clique em **Sign up** (canto superior direito).
3. Preencha:
   - E-mail
   - Nome de usuário (username)
   - Senha
4. Confirme o e-mail (o GitHub vai mandar um link para ativação).

---

## 2️⃣ Instalar o Git e Git Bash no Windows
1. Acesse: [https://git-scm.com/downloads](https://git-scm.com/downloads)
2. Baixe a versão para **Windows**.
3. Execute o instalador:
   - Clique em **Next** até chegar em **Select Components** (deixe as opções padrão).
   - Marque a opção **Git Bash Here**.
   - Conclua a instalação.
4. Para verificar se deu certo:
   - Abra o **Git Bash**.
   - Digite:
     ```bash
     git --version
     ```
   - Deve aparecer algo como `git version 2.x.x`.

---

## 3️⃣ Configurar o Git no seu computador
No **Git Bash**, digite (substitua pelas suas informações do GitHub):

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@example.com"
 ```


### 4️⃣ Clonar o repositório
Para baixar os arquivos no seu computador:
```bash
git clone https://github.com/SEU-USUARIO/Bolsa-Futuro-Digital-Turma-04-PB.git
 ```

```bash
cd Bolsa-Futuro-Digital-Turma-04-PB
```

# 5️⃣ Como enviar (upload) seus arquivos trabalhados em aula para o repositório

Sempre que terminar um exercício e quiser enviar seus arquivos para o GitHub, siga os passos abaixo:

---

## 1 - Troque para a sua branch
Cada aluno terá uma branch com seu nome. Antes de enviar os arquivos, certifique-se de estar nela:

```bash
git switch nome-sobrenome 
```
ou 
```bash
git checkout nome-sobrenome 
```
## 2 - Entre na pasta do modulo corrente
```bash
cd Bolsa-Futuro-Digital-Turma-04-PB/modulo1
```
## 3 - Caso não exista, crie uma pasta para a aula atual e entre na mesma
```bash
mkdir aula4
cd aula4
```
## 4 - git add, commit e push
```bash
git add .
git commit -m "mensagem explicativa"
git push
```
