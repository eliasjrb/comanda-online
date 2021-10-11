import Contador from './Contador';

interface ItemCardapioProps {
    id?: number
    tipo?: string
    nome?: string
    contem?: string
    preco?: any
}

export default function ItemCardapio(props: ItemCardapioProps) {

    return (
        <div className={`text-gray-800 px-10
        bg-gray-400 mb-3 rounded
                `}>
            <div className="flex w-full justify-between">
                <div className="p-0">
                    <div className=" text-3xl">
                        {props.nome}
                    </div>
                    <span className="text-xs">{props.contem}</span>
                </div>
                <div className="flex items-center justify-center">
                    <div className="mr-5 text-3xl">
                        {props.preco.toFixed(2)}
                    </div>
                    <Contador />
                </div>
            </div>

        </div>
    )
}