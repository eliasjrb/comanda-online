
interface ConteudoProps {
    children?: any
    className?: string
}

export default function Conteudo(props: ConteudoProps) {
    return (
        <div className={`flex mt-7 dark:text-gray-200 ${props.className}`}>
            {props.children}
        </div>
    )
}