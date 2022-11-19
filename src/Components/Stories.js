export default function Stories() {

    return (
        <div class="stories">
            <Story imgperfil="./assets/9gag.svg" nomeperfil="9gag" />
            <Story imgperfil="./assets/meowed.svg" nomeperfil="meowed" />
            <Story imgperfil="./assets/barked.svg" nomeperfil="barked" />
            <Story imgperfil="./assets/respondeai.svg" nomeperfil="respondeai" />
            <Story imgperfil="./assets/memeriagourmet.svg" nomeperfil="memeriagourmet" />
            <Story imgperfil="./assets/nathanwpylestrangeplanet.svg" nomeperfil="nathanwpylestrangeplanet" />
            <Story imgperfil="./assets/filomoderna.svg" nomeperfil="filomoderna" />
            <Story imgperfil="./assets/wawawicomics.svg" nomeperfil="wawawicomics" />
            <Story imgperfil="./assets/9gag.svg" nomeperfil="9gag" />
        </div>
    )
}

function Story(props) {

    return (
        <div>
            {/* stories normal */}
            <div class="icone"> {/*icone para passar stories na tela */}
            </div>
            {/* <ion-icon name="chevron-forward-circle"></ion-icon> */}
            <div class="story">
                <div class="logos">
                    <img class="circulo" src="./assets/stories_background.jpg" />
                    <div class="imagemconta">
                        <img src={props.imgperfil} />
                    </div>
                </div>
                <div class="nomestory"><span class="central">{props.nomeperfil}</span></div>
            </div>
            {/* stories mobile */}
            <div class="storiesmobile">
                <div class="story">
                    <div class="logos">
                        <img class="circulo" src="./assets/stories_background.jpg" />
                        <div class="imagemconta">
                            <img src={props.imgperfil} />
                        </div>
                    </div>
                    <div class="nomestory"><span class="central">{props.nomeperfil}</span></div>
                </div>
            </div>
        </div>
    )
}