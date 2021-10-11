interface CaixaProps {
    nomeProduto?: string
    quantidade?: number
    valorUnitario?: number
    subTotal?: number

}

const produtos = [
    { nome: 'Misto', quantidade: 3, valorUnitario: 3.50, },
    { nome: 'Café', quantidade: 3, valorUnitario: 2.00, },
    { nome: 'Tapioca', quantidade: 2, valorUnitario: 6.50, },
    { nome: 'Café com leite', quantidade: 6, valorUnitario: 2.50, },
    { nome: 'X-Egg', quantidade: 2, valorUnitario: 8.50, },
]

export default function Caixa() {
    let valorTotal = 0;
    function listarProdutos() {
        return produtos.map((produto, i) => {
            valorTotal += (produto.quantidade * produto.valorUnitario)
            return (
                <tr key={i} className={`py-2 ${i%2 === 0 ? 'bg-gray-400' : ''}`}>
                    <td>{produto.nome}</td>
                    <td>{produto.quantidade}</td>
                    <td>{produto.valorUnitario.toFixed(2)}</td>
                    <td>{(produto.quantidade * produto.valorUnitario).toFixed(2)}</td>
                    
                </tr>
            )
        }
        )
    }

    return (
            <table className="table w-full">
                <thead>
                    <tr className="text-left bg-green-500">
                        <th>Nome</th>
                        <th>Quatidade</th>
                        <th>Valor Unitário</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {listarProdutos()}
                    <tr className="bg-gray-500 text-2xl">
                        <td colSpan="3">Total</td>
                        <td>{valorTotal.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>

    )
}