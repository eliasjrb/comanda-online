import { IconeCasa, IconeSino, IconeAjustes, IconeSair } from "../icons"
import Logo from "./Logo"
import MenuItem from "./MenuItem"

export default function MenuLateral(props) {
    return (
        <aside className={`
        flex flex-col text-gray-700
        dark:bg-gray-900 dark:text-gray-200
        `}>
            <div className={`flex flex-col items-center 
            justify-center bg-gradient-to-r from-green-200 to-blue-900 h-20 w-20`}>
                <Logo />
            </div>
            <ul className={`flex-grow`}>
                <MenuItem url="/" texto="Início" icone={IconeCasa} />
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
                <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
            </ul>
            <ul>
                <MenuItem className={`text-red-600 hover:bg-red-400
                                     hover:text-white dark:text-red-400 dark:hover:text-white`} onClick={() => console.log('Sair')} 
                                      texto="Sair" icone={IconeSair} />
            </ul>
        </aside>
    )
}