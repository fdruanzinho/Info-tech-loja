import './Produto.css'

export default function Produto({ nome, preco, descricao }) {
  return (
    <div className="produto">
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <span className="preco">R$ {preco}</span>
    </div>
  )
}
