export default function Sugestoes() {
    const sug = [
        { imgperfil: "./assets/bad.vibes.memes.svg", nomeperfil: "bad.vibes.memes" },
        { imgperfil: "./assets/chibirdart.svg", nomeperfil: "chibirdart" },
        { imgperfil: "./assets/perfil.png", nomeperfil: "isabelamavie" },
        { imgperfil: "./assets/adorable_animals.svg", nomeperfil: "adorable_animals" },
        { imgperfil: "./assets/smallcutecats.svg", nomeperfil: "smallcutecats" },
    ]

    return (
        <div>
            <div class="sugestoes">
                <div class="pravc">Sugestões para você</div>
                <div class="tudo">Ver tudo</div>
            </div>
            {sug.map((s)=> <Contas imgperfil={s.imgperfil} nomeperfil={s.nomeperfil} />)}
            
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