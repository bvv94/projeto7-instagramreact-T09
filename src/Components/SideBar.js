import Usuario from "./Usuario"
import Sugestoes from "./Sugestoes"

export default function SideBar(){
    return (
        <div class="altura largura">
            <Usuario/>
            <Sugestoes/>
            <div class="info">
                <p class="p1">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
                    Localizações • Contas mais relevantes • Hashtags • Idioma
                </p>
                <p>© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
        </div>
    )
}