import './App.css'
import Produto from './components/Produto'

function App() {
  return (
    <div>
      <h1>🖥️ InfoTech - Loja de Informática</h1>
      <Produto 
        nome="Notebook Gamer" 
        descricao="Alto desempenho para jogos e multitarefas" 
        preco="4500,00" 
      />
      <Produto 
        nome="Mouse Sem Fio" 
        descricao="Confortável, leve e prático para o dia a dia" 
        preco="120,00" 
      />
      <Produto 
        nome="Teclado Mecânico" 
        descricao="Switches azuis, ideal para digitação e games" 
        preco="350,00" 
      />
    </div>
  )
}

export default App
