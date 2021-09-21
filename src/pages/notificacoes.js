import Layout from '../components/template/Layout'
import useAppData from '../data/hook/useAppData'

export default function Notificacoes() {
const { alternarTema} =  useAppData()

    return (
        <Layout titulo="Notificações"  subtitulo="Aqui você está na pagina de notificações">
            <h1>notificações</h1>
        </Layout>

    )
}