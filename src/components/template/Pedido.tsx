import { useRouter } from 'next/router'

interface PedidoPros {
    codigo: number
    clienteNome?: string
    aberto?: string
    fechado?: string

}

export default function Pedido(props: PedidoPros) {
    const router = useRouter()
    return (
        <div className="flex flex-col justify-between w-full md:w-auto bg-gray-400  dark:text-gray-800 p-5 m-5 rounded">
            <div>
                <div className="text-center text-4xl">
                    {props.codigo}
                </div>
                <div className="flex flex-col py-3">
                    {props.clienteNome ? (<div><span>Cliente: </span>{props.clienteNome ?? ''}</div>) : false}
                    {props.aberto ? (<div><span>Aberto: </span>{props.aberto}</div>) : false}
                    {props.fechado ? (<div><span>Fechado: </span>{props.fechado}</div>) : false}
                </div>
            </div>
            <div className="flex">
                <button className="bg-green-700 text-white p-2 rounded w-full bottom-0" onClick={() => router.push('/caixa')} >Pagamanto</button>
            </div>
        </div>
    )
}