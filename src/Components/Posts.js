export default function Posts() {

    const posts = [
        {imgperfil: "./assets/meowed.svg", nomeperfil: "meowed", imgpost: "./assets/gato-telefone.svg"},
        {imgperfil: "./assets/barked.svg", nomeperfil: "barked", imgpost: "./assets/dog.svg"},
        {imgperfil: "./assets/perfil.png", nomeperfil: "isabelamavie", imgpost: "./assets/analisecorporal.jpeg"},
        {imgperfil: "./assets/barked.svg", nomeperfil: "barked", imgpost: "./assets/dog.svg"},
        {imgperfil: "./assets/perfil.png", nomeperfil: "isabelamavie", imgpost: "./assets/comoFunciona.jpeg"},
        {imgperfil: "./assets/barked.svg", nomeperfil: "barked", imgpost: "./assets/dog.svg"},
    ]


    return (
        <div>
            {posts.map((p)=> <Post imgperfil={p.imgperfil} nomeperfil={p.nomeperfil} imgpost={p.imgpost}/>)}
        </div>
    )
}

function Post(props) {
    return (
        <div class="posts" data-test="post">
            <div class="cabecalho">
                <div class="logopost">
                    <img src={props.imgperfil} />
                    <p>{props.nomeperfil}</p>
                </div>
                <div class="logotrespontos">
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                </div>
            </div>
            <div class="img">
                <img src={props.imgpost} />
            </div>
            <div class="legenda">
                <div class="icones">
                    <div class="opcoes">
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div class="salvar">
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <div class="logocurtida">
                        <img src="./assets/respondeai.svg" />
                    </div>
                    <div class="curtidas">
                        <p>
                            Curtido por <span>respondeai</span> e
                            <span>outras 101.523 pessoas</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}