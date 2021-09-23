import Link from 'next/link'
import useAuth from '../../data/hook/useAuth'

interface AvatarUsuarioProps {
    className?: string
}

export default function AvatarUsuario(props: AvatarUsuarioProps) {
    const { usuario } = useAuth()

    return (
        <div  className={`flex justify-center items-center text-gray-800 dark:text-white`}>
            <span className={`flex ml-3`}>{usuario?.nome}</span>
            <Link href="/perfil">
                <img
                    src={usuario?.imagemUrl ?? '/images/avatar.svg'}
                    alt="Avatar do Usuário"
                    className={` h-10 w-10 mr-2 rounded-full cursor-pointer ${props.className}`}
                />
            </Link>
        </div>
    )
}