export default function Stories() {
    const stories = [
        {imgperfil:"./assets/9gag.svg" ,nomeperfil:"9gag" },
        {imgperfil:"./assets/meowed.svg" ,nomeperfil:"meowed" },
        {imgperfil:"./assets/barked.svg" ,nomeperfil:"barked" },
        {imgperfil:"./assets/respondeai.svg" ,nomeperfil:"respondeai" },
        {imgperfil:"./assets/perfil.png" ,nomeperfil:"isabelamavie" },
        {imgperfil:"./assets/nathanwpylestrangeplanet.svg" ,nomeperfil:"nathanwpylestrangeplanet" },
        {imgperfil:"./assets/filomoderna.svg" ,nomeperfil:"filomoderna" },
        {imgperfil:"./assets/wawawicomics.svg" ,nomeperfil:"wawawicomics" },
        {imgperfil:"./assets/9gag.svg" ,nomeperfil:"9gag" }
    ]
    return (
        <div class="stories">
            {stories.map((st)=> <Story imgperfil={st.imgperfil} nomeperfil={st.nomeperfil} />)}            
        </div>
    )
}

function Story(props) {
    return (
        <div>
            {/* stories normal */}
            <div class="icone"> {/*icone para passar stories na tela */}
                {/* <ion-icon name="chevron-forward-circle"></ion-icon> */}
            </div>

            <div class="story">
                <div class="logos">
                    <img class="circulos" src="./assets/stories_background.jpg" />
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
                        <img class="circulos" src="./assets/stories_background.jpg" />
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