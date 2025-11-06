import { useState } from 'react'
import './Produto.css'

export default function Produto({ nome, preco, descricao }) {
  const [likes, setLikes] = useState(0)

  return (
    <div className="produto">
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <span className="preco">R$ {preco}</span>
      <div>
        <button onClick={() => setLikes(likes + 1)}>
          ❤️ Curtir ({likes})
        </button>
      </div>
    </div>
  )
}


