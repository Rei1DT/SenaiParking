# 🚗 SenaiParking  
Um app simples de **controle de estacionamento**, feito com **React Native + Expo**, pra gerenciar entrada e saída de veículos de forma prática.  

---

## 🧠 O que é esse projeto  
O **SenaiParking** é um app desenvolvido no **Senai** pra mostrar o uso de tecnologias modernas de front-end e integração com API.  
A ideia é controlar quem entra e sai do estacionamento, salvando os dados no backend (API).  

Você pode:  
- Fazer **login**  
- **Cadastrar** novos usuários  
- Registrar a **entrada** e **saída** de veículos  
- Ver uma **lista com os veículos ativos** (os que estão estacionados)  

---

## ⚙️ Tecnologias usadas  

**Frontend (app mobile):**
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://axios-http.com/)
- [Feather Icons](https://github.com/oblador/react-native-vector-icons)
- [Expo Linear Gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)

**Backend (API):**
- Documentado no arquivo [`Documentação_ParkingAPI.md`](./Documentação_ParkingAPI.md)
- Feito pra rodar localmente junto com o app, simulando o banco e endpoints da API.  

---

## 🗂️ Estrutura de pastas  

```
SenaiParking/
 ┣ assets/
 ┣ src/
 ┃ ┣ screens/
 ┃ ┃ ┣ Login/
 ┃ ┃ ┣ Cadastro/
 ┃ ┃ ┣ ListaVagas/
 ┃ ┃ ┣ Entrada/
 ┃ ┃ ┗ Saida/
 ┃ ┣ services/
 ┃ ┃ ┗ api.js         # Configura a conexão com a API (axios)
 ┣ App.js              # Define rotas de navegação e tema base
 ┣ Documentação_ParkingAPI.md
 ┣ mise.toml           # Travamento de versões (Node, NPM, etc)
 ┣ package.json
 ┗ README.md
```

---

## 🧰 Como rodar o projeto  

### 1️⃣ Clonar o repositório  
```bash
git clone https://github.com/Rei1DT/SenaiParking.git
cd SenaiParking
```

### 2️⃣ Instalar as dependências  
Se estiver usando **mise** pra travar versões:
```bash
mise install
```

Depois:
```bash
npm install
```

### 3️⃣ Rodar o app no Expo  
```bash
npx expo start
```
Vai aparecer um QR code.  
Abra o app **Expo Go** no seu celular e escaneie pra ver o app rodando.  

---

## 🧩 Telas do app  

### 🔐 Login  
Tela com inputs de **e-mail** e **senha**, e botão pra acessar o app.  

### 🧾 Cadastro  
Campo de **nome**, **e-mail** e **senha**, botão pra salvar.  

### 🚘 Lista de Vagas  
Mostra todos os veículos estacionados, com:  
- **Placa**
- **Data de entrada**
- **Hora de entrada**   

### 🕓 Entrada  
Input pra digitar a placa do carro e registrar a entrada (salva na API).  

### 🕔 Saída  
Mesmo esquema, só que registra a saída e remove o veículo da lista de ativos.  

---

## 🌐 Integração com a API  

A comunicação com o backend é feita via **Axios**, configurado no arquivo:  
```
src/services/api.js
```

A API usada é a documentada no arquivo:
```
Documentação_ParkingAPI.md
```
Ela tem rotas como:
- `GET /veiculos` → lista todos os veículos ativos  
- `POST /entrada` → registra entrada  
- `POST /saida` → registra saída  

(O backend precisa estar rodando localmente pra testar tudo 100%.)

---

## 🧑‍💻 Desenvolvimento  

- Projeto feito no **VS Code**, rodando em **Expo Go**.  
- Estilização toda com **styled-components**.  
- Navegação com **React Navigation (stack)**.  
- Botões com **gradiente** usando `expo-linear-gradient`.  
- Ícones do **react-native-feather**.  

---

## 💡 Dica  
Se quiser manter o ambiente fixo (pra evitar bugs de versão), o projeto usa o **mise**.  
Basta rodar:
```bash
mise install
```
que ele baixa a versão correta do **Node** e **npm** pro projeto.  

---

## 👨‍🔧 Autor  
**Rei1DT**  
📍 Desenvolvido durante aulas do **SENAI**  
🔗 [GitHub](https://github.com/Rei1DT)
