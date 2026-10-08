// 1. IMPORTAÇÕES: Trazendo ferramentas externas e arquivos de imagem/estilo
import { useState } from 'react' // Importa o Hook 'useState' do React para gerenciar dados que mudam na tela
import heroImg from './assets/hero.png' // Importa a imagem principal do cabeçalho
import reactLogo from './assets/react.svg' // Importa o logotipo do React
import viteLogo from './assets/vite.svg' // Importa o logotipo do Vite
import './App.css' // Importa o arquivo de estilos CSS para esta página

// 2. COMPONENTE PRINCIPAL: A função que define o que aparece na tela
function App() {
  // Cria uma variável de estado chamada 'count' (começa em 0) e uma função 'setCount' para atualizá-la
  const [count, setCount] = useState(0)

  // 3. RETORNO (JSX): O HTML/interface que o componente vai renderizar
  return (
    <> {/* Fragmento do React: serve para agrupar vários elementos sem criar uma <div> desnecessária no HTML final */}
      
      {/* Seção Central Principal */}
      <section id="center">
        {/* Div que agrupa as imagens de destaque (Hero) */}
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        
        {/* Mensagem de introdução */}
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        
        {/* Botão Interativo com Contador */}
        <button
          type="button"
          className="counter"
          // Quando clicado, chama setCount e soma +1 ao valor atual de count
          onClick={() => setCount((count) => count + 1)}
        >
          {/* Mostra o texto dinâmico com o valor atual do estado */}
          Contagem é {count}
        </button>
      </section>

      {/* Linha visual decorativa/separador */}
      <div className="ticks"></div>

      {/* Seção de Próximos Passos (Links Úteis) */}
      <section id="next-steps">
        
        {/* Bloco de Documentação */}
        <div id="docs">
          {/* Ícone SVG decorativo oculto para leitores de tela (aria-hidden) */}
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank" rel="noreferrer">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank" rel="noreferrer">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        
        {/* Bloco de Redes Sociais / Comunidade */}
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            {/* Link para o GitHub */}
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            {/* Link para o Discord */}
            <li>
              <a href="https://chat.vite.dev/" target="_blank" rel="noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            {/* Link para o X (antigo Twitter) */}
            <li>
              <a href="https://x.com/vite_js" target="_blank" rel="noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            {/* Link para o Bluesky */}
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank" rel="noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Elementos visuais inferiores para espaçamento e design */}
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

// 4. EXPORTAÇÃO: Torna este componente disponível para ser usado no arquivo principal (index.js / main.jsx)
export default App