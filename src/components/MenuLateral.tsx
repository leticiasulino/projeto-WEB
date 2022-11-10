import MenuItem from "./MenuItem"
import {iconeCasa, iconeAjuda, IconeAjustes} from "./icons/index"

export default function MenuLateral(){
    return (
        <aside>
            <div className="h-20 w-20 bg-gradient-to-r from-indigo-500 to-purple-300 flex flex-co item-center justify-center">
                LOGO
            </div>
                
                <ul>
                    <MenuItem url="login" texto="login" icone={iconeCasa} />
                    <MenuItem url="ajuda" texto="Ajuda" icone={iconeAjuda} />
                    <MenuItem url="conta" texto="Conta" icone={IconeAjustes} />
                    <MenuItem url="calendario" texto="Calendario" icone={IconeAjustes} />
                    <MenuItem url="caixademensagem" texto="Caixa de Mensagem" icone={IconeAjustes} />
                </ul>
        </aside>
    )
}