# 📱 Aplicativo IMC - Índice de Massa Corporal

## Descrição

Este é um aplicativo mobile que permite ao usuário calcular seu **Índice de Massa Corporal (IMC)** de forma simples e intuitiva. O app foi desenvolvido como projeto pedagógico para aprender conceitos fundamentais de desenvolvimento mobile com **React Native** e **Expo**.

## 🎯 Funcionalidades

- ✅ **Entrada de Dados:** O usuário pode inserir seu nome, gênero, altura (em centímetros) e peso (em quilogramas)
- ✅ **Cálculo de IMC:** Realiza o cálculo automático do Índice de Massa Corporal
- ✅ **Classificação:** Exibe o resultado com classificação de status (Magreza, Peso Normal, Acima do Peso, Obesidade)
- ✅ **Visualização com Imagem:** Mostra uma imagem correspondente ao status calculado
- ✅ **Navegação:** Transição fluida entre a tela de entrada e a tela de resultado

## 📚 Conceitos Aprendidos

Este projeto é uma ótima oportunidade para dominar os seguintes conceitos:

### 1. **Criação de Componentes**
- Estruturação de componentes reutilizáveis
- Organização e modularização de código
- Boas práticas em arquitetura de componentes

### 2. **TextInput**
- Captura de entrada de dados do usuário
- Validação de inputs
- Uso de diferentes tipos de teclado (numérico, texto, etc)
- Estilização de campos de entrada

### 3. **Navegação entre Telas**
- Implementação de navegação com React Navigation
- Stack Navigator para transição entre telas
- Gerenciamento de rotas

### 4. **Passagem de Props**
- Compartilhamento de dados entre componentes
- Props como método de comunicação entre telas
- Tipagem de props com TypeScript

### 5. **Uso de Imagens Locais**
- Importação e exibição de imagens do projeto
- Organização de assets no diretório `assets/images/`
- Uso do componente `Image` do React Native
- Responsividade de imagens em diferentes resoluções

### 6. **Uso de Ícones com @expo-vector-icons**
- Implementação de ícones vetoriais escaláveis
- Utilização da biblioteca Expo Vector Icons
- Integração do pacote de ícones FontAwesome5
- Estilização de ícones (tamanho, cor, etc)
- Uso de ícones para melhorar a interface visual

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento e prototipagem rápida
- **React Navigation** - Biblioteca de navegação entre telas
- **TypeScript** - Tipagem estática para maior segurança
- **@expo-vector-icons** - Biblioteca de ícones vetoriais escaláveis

## 📦 Estrutura do Projeto

```
IMC/
├── App.tsx                 # Componente principal e configuração de rotas
├── app.json               # Configuração do Expo
├── package.json           # Dependências do projeto
├── tsconfig.json          # Configuração TypeScript
├── index.ts               # Ponto de entrada
├── assets/
│   └── images/           # Imagens para os diferentes status de IMC
└── src/
    ├── components/       # Componentes reutilizáveis
        ├── ActionButton.tsx     # Botão de ação
        └── ValueAdjuster.tsx    # Área de ajuste de peso/altura
    └── screens/
        ├── HomeScreen.tsx       # Tela de entrada de dados
        └── ResultScreen.tsx     # Tela de resultado do IMC
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js instalado
- Expo CLI instalado globalmente: `npm install -g expo-cli`

### Instalação

1. Clone ou acesse o diretório do projeto:
```bash
cd /Users/eric/FIAP/2TDSPX/Turma\ 2026/Aula06/IMC
```

2. Instale as dependências:
```bash
npm install
```

3. Instale as dependências do Expo e React Navigation:
```bash
expo install @react-navigation/native @react-navigation/native-stack
```

### Execução

Para iniciar o aplicativo em modo desenvolvimento:
```bash
npx expo start
```

Depois:
- Pressione `i` para abrir no iOS Simulator
- Pressione `a` para abrir no Android Emulator
- Escaneie o código QR com o app Expo Go (disponível na App Store ou Google Play)

## 📐 Cálculo do IMC

A fórmula utilizada é:
```
IMC = Peso (kg) / [Altura (m)]²
```

### Classificação de Status

| Faixa de IMC | Status |
|---|---|
| < 16 | Magreza |
| 16 - 18,5 | Abaixo do peso |
| 18,5 - 25,0 | Peso ideal |
| 25,0 - 30,0 | Sobrepeso |
| ≥ 30,0 | Obesidade |

## 📝 Licença

Este projeto é fornecido como material educacional.

---

**Desenvolvido como projeto pedagógico para a Mobile Application Development** 📲
