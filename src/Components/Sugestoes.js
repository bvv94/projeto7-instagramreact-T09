export default function Sugestoes() {
    return (
        <div>
            <div class="sugestoes">
                <div class="pravc">Sugestões para você</div>
                <div class="tudo">Ver tudo</div>
            </div>
            <Contas imgperfil="./assets/bad.vibes.memes.svg" nomeperfil="bad.vibes.memes"/>
            <Contas imgperfil="./assets/chibirdart.svg" nomeperfil="chibirdart"/>
            <Contas imgperfil="./assets/razoesparaacreditar.svg" nomeperfil="razoesparaacreditar"/>
            <Contas imgperfil="./assets/adorable_animals.svg" nomeperfil="adorable_animals"/>
            <Contas imgperfil="./assets/smallcutecats.svg" nomeperfil="smallcutecats"/>
        </div>
    )
}
function Contas(props) {
    return (
        <div>

            <div class="sugerido">
                <div class="perfilsugerido">
                    <div class="logoseguir">
                        <img src={props.imgperfil} />
                    </div>
                    <div class="nomesug">
                        <div class="nomepublico">{props.nomeperfil}</div>
                        <div class="status">Segue você</div>
                    </div>
                </div>
                <div class="seguir"><p>Seguir</p></div>
            </div>
        </div>
    )
}