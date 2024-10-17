import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

body::-webkit-scrollbar{
  width: 12px;
  background-color: #222;
}

body::-webkit-scrollbar-track{
  background: #222;
}

body::-webkit-scrollbar-thumb{
  background-color: #b71c1c;
  border-radius: 20px;
  border: 3px solid #222;
}

.slick-prev::before,
.slick-next::before{
    color: red;
    font-size: 2rem;
}
`;
