import Layout from '../components/template/Layout'
import ItemCardapio from '../components/template/ItemCardapio'



export default function Cardapio() {
    return (
        <Layout titulo="Cardápio" subtitulo="Monte seu pedido aqui." className="flex-col">
            <div>
                <ItemCardapio contem="Pão queijo e presunto" nome="Misto" preco={4.99} />
                <ItemCardapio contem="Puro" nome="Café" preco={2.00} />
                <ItemCardapio contem="Mamão com Banana" nome="Vitamina" preco={6.50} />
                <ItemCardapio contem="Pão queijo, presunto e ovo" nome="Misto/Ovo" preco={7.99} />
            </div>
        </Layout>

    )
}