# Aplicativo Fiap School Project

## Funcionalidades

*   **Login:** Autenticação de responsáveis realizado pelo CPF e Senha.
*   **Seleção de Aluno:** Permite que responsáveis com múltiplos alunos selecionem o aluno desejado.
*   **Logout:** Permite o responsável realizar logout no aplicativo.
*   **Agenda:** Exibe a agenda escolar com aulas e atividades.
*   **Boletim:** Apresenta o boletim escolar, dividido por trimestres e disciplinas, com notas.

## Tecnologias e ferramentas utilizadas:

*   Node.js (versão 16)
*   Yarn para gerenciar os pacotes
*   React Native CLI
*   Emulador do Android Studio
*   VS Code

## Dependências Utilizadas

*   **React Native:** Framework para construir aplicativos nativos.
*   **React Navigation:**  Navegação entre telas.
*   **Styled Components:**  Estilização de componentes React com CSS-in-JS.
*   **Outras Dependências:**
        "dependencies": {
            "@react-native-async-storage/async-storage": "^2.1.2",
            "@react-navigation/bottom-tabs": "^7.3.3",
            "@react-navigation/native": "^7.0.19",
            "@react-navigation/stack": "^7.2.3",
            "date-fns": "^4.1.0",
            "react": "19.0.0",
            "react-native": "0.78.1",
            "react-native-gesture-handler": "^2.24.0",
            "react-native-picker-select": "^9.3.1",
            "react-native-safe-area-context": "^5.3.0",
            "react-native-screens": "^4.9.2",
            "react-native-svg": "^15.11.2",
            "react-native-vector-icons": "^10.2.0",
            "styled-components": "^6.1.16"
          },
          "devDependencies": {
            "@babel/core": "^7.25.2",
            "@babel/preset-env": "^7.25.3",
            "@babel/runtime": "^7.25.0",
            "@react-native-community/cli": "15.0.1",
            "@react-native-community/cli-platform-android": "15.0.1",
            "@react-native-community/cli-platform-ios": "15.0.1",
            "@react-native/babel-preset": "0.78.1",
            "@react-native/eslint-config": "0.78.1",
            "@react-native/metro-config": "0.78.1",
            "@react-native/typescript-config": "0.78.1",
            "@types/jest": "^29.5.13",
            "@types/react": "^19.0.0",
            "@types/react-native-vector-icons": "^6.4.18",
            "@types/react-test-renderer": "^19.0.0",
            "@types/styled-components-react-native": "^5.2.5",
            "eslint": "^8.19.0",
            "jest": "^29.6.3",
            "prettier": "2.8.8",
            "react-native-svg-transformer": "^1.5.0",
            "react-test-renderer": "19.0.0",
            "typescript": "5.0.4"
          },
 
## Screenshots

![Login](https://github.com/user-attachments/assets/b8c44f07-c3c5-4f6c-8646-6bac134bd3f2)
![Login](https://github.com/user-attachments/assets/f719dda8-562a-4c96-91f4-96a6951b2596)

![Tela Inicial](https://github.com/user-attachments/assets/a17a2298-a238-4e7a-9685-fbf0710b2d22)

![Calendário](https://github.com/user-attachments/assets/3199597d-6a0b-45e0-a146-f872baed1948)
![Agenda](https://github.com/user-attachments/assets/cf73e9e5-9dfe-4ca6-83d5-777ffa93e696)

![Boletim](https://github.com/user-attachments/assets/a63c4fc0-0371-4834-ac73-62bac1c57bd2)
![Seleção de Turma](https://github.com/user-attachments/assets/ff79a3b3-1d6a-409f-9adb-3b0da4100f7a)
![Exibição das disciplinas por semestre](https://github.com/user-attachments/assets/dff2773a-f1c8-4dcf-8681-1c74f4fbcff5)
![informações de notas](https://github.com/user-attachments/assets/d89bf1c6-51a1-4d9f-940b-5a1081be3a9a)

![Trocar Perfil](https://github.com/user-attachments/assets/e71c7b67-ee06-4ad1-93bf-319f5425b6f7)

## Outras informações
*   **Melhorias futuras:** Alterar as configurações do typeScript para ligar com arquivos .SVG e substituir os ícones e imagens de .png para .svg.
*   **Animações e Splash Screen:** Adicionar splash screen ao iniciar o app.
*   **Testes Unitários:** Implementar os testes unitários das functions.
*   **Utilização do Firebase:** Utilizar o firebase para autenticação e leitura das informações ao invés de ler diretamente do .JSON.
*   **Design:** Na funcionalidade Boletim, ajustar o layout para ficar em conformidade com o projeto disponibilizado no figma.
*   **Erros:** Realizar os ajustes de tipagem necessários acusados no código, na tela AulaScreen (não influencia no funcionamento do app).
