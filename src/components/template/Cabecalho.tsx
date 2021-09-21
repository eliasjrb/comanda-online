import Titulo from "./Titulo"

interface CabecalhoProps {
    titulo: string
    subtitulo: string
}

export default function Cabecalho(props: CabecalhoProps){
    return(
        <div className="">
            <Titulo titutlo={props.titulo} subtitulo={props.subtitulo} />
        </div>
    )
}