import React from "react";

export default function Posts() {

    const posts = [
        { imgperfil: "./assets/perfil.png", nomeperfil: "isabelamavie", imgpost: "./assets/post3.jpeg" },
        { imgperfil: "./assets/barked.svg", nomeperfil: "barked", imgpost: "./assets/dog.svg" },
        { imgperfil: "./assets/perfil.png", nomeperfil: "isabelamavie", imgpost: "./assets/post1.jpeg" },
        { imgperfil: "./assets/barked.svg", nomeperfil: "barked", imgpost: "./assets/dog.svg" },
        { imgperfil: "./assets/perfil.png", nomeperfil: "isabelamavie", imgpost: "./assets/post2.jpeg" },
        { imgperfil: "./assets/barked.svg", nomeperfil: "barked", imgpost: "./assets/dog.svg" },
    ]


    return (
        <div>
            {posts.map((p) => <Post imgperfil={p.imgperfil} nomeperfil={p.nomeperfil} imgpost={p.imgpost} />)}
        </div>
    )
}

function Post(props) {
    let a=0;
    const [salvar, setSalvar] = React.useState(<ion-icon name="bookmark-outline"></ion-icon>);
    const [curtida, setCurtida] = React.useState(11523);
    const [heart, setHeart] = React.useState(<span data-test="like-post"><ion-icon name="heart-outline" onClick={curtir}></ion-icon></span>)

    function salve() {
        setSalvar(<ion-icon name="bookmark"></ion-icon>);
        

    }

    function curtir() {
        // let click = 0;

        // setCurtida(() => curtida + 1);
        
        // if(click == 0){
        //     setHeart(<span class="red" data-test="like-post"><ion-icon name="heart" onClick={curtir}></ion-icon></span>);
        //     click++;
        //     console.log("entrou no setHeart Red");
        // }
        // else{
        //     click = 0;
        //     setHeart (<span data-test="like-post"><ion-icon name="heart-outline" onClick={curtir}></ion-icon></span>);
        //     console.log("entrou no setHeart Outline");
        // }

        setCurtida(() => curtida + 1);
        setHeart(<span class="red" data-test="like-post"><ion-icon name="heart" onClick={curtir}></ion-icon></span>);

    }

    // function cliqueduplo(){
    //     setCurtida(() => curtida + 1);
    // }

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
            <div data-test="post-image" class="img">
                <img onDoubleClick={curtir} src={props.imgpost} />
            </div>
            <div class="legenda">
                <div class="icones">
                    <div class="opcoes">
                        {heart}
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div onClick={salve} class="salvar" data-test="save-post">
                        {salvar}
                    </div>
                </div>

                <div class="curtidas">
                    <div class="logocurtida">
                        <img src="./assets/respondeai.svg" />
                    </div>
                    <div class="curtidas">
                        <p>
                            Curtido por <span>respondeai</span> e
                            <span data-test="likes-number"> outras {curtida} pessoas</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
