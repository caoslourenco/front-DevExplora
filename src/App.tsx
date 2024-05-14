import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<div className="home">
      <h1>Meu Blog Pessoal</h1>
      <div className="blog-post">
        <h2>Título do Post</h2>
        <p>Conteúdo do post aqui...</p>
      </div>
      <div className="blog-post">
        <h2>Outro Título de Post</h2>
        <p>Conteúdo do outro post...</p>
      </div>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edite seus posts e salve para ver as alterações
        </p>
      </div>
      <p className="read-the-docs">
        Clique nos posts para ler mais
      </p>
    </div>
    </>
  )
}

export default App
