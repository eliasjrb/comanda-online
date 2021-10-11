
import Layout from '../components/template/Layout'
import Pedido from '../components/template/Pedido'

const pedidos = [
  {id: 100, nome: 'Pedro Souza', aberto:'12/09/2021 10:22', fechado:'12/09/2021 10:22' },
  {id: 200, nome: 'Maria Souza', aberto:'12/09/2021 10:22', fechado:'12/09/2021 10:22' },
  {id: 300, nome: 'João Souza', aberto:'12/09/2021 10:22', fechado:'12/09/2021 10:22' },
  {id: 400, nome: 'Artur Cunha', aberto:'12/09/2021 10:22', fechado:'12/09/2021 10:22' },
  {id: 500, nome: 'Jó Almeida', aberto:'12/09/2021 10:22', fechado:'12/09/2021 10:22' },
  {id: 600, nome: 'Luiz Ferreira', aberto:'12/09/2021 10:22', fechado:'12/09/2021 10:22' },
  {id: 700, nome: 'José de Alencar', aberto:'12/09/2021 10:22', fechado:'12/09/2021 10:22' },
  {id: 800, nome: 'Afonso Barbosa', aberto:'12/09/2021 10:22', fechado:'12/09/2021 10:22' },
]

function listarPedidos(){
  return(
    pedidos.map((pedido) => {
      return <Pedido key={pedido.id} codigo={pedido.id} clienteNome={pedido.nome} aberto={pedido.aberto} fechado={pedido.fechado} />
    })
  )
}

export default function Home() {
  return (
    <div>
      <Layout titulo="Pedidos" subtitulo="Pedidos em andamentos" className="flex-wrap">
        {listarPedidos()}
      </Layout>
    </div>
  )
}
