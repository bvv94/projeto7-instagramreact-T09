

export default function Usuario() {
    let nomedefault = "Catana";
    let imgperfil = "./assets/catanacomics.svg";
    // let imgperfil = "https://img1.gratispng.com/20180401/goe/kisspng-user-profile-computer-icons-profile-5ac09244d91906.2547020615225697968892.jpg";

    function novoNome() {
        console.log(`entrou novoNome, nome default ${nomedefault}`);
        nomedefault = prompt("editar nome: ")
        console.log(`Mudou novoNome, nome agora ${nomedefault}`);
        // Usuario(); AINDA NÃO TÔ CONSEGUINDO IMPRIMIR NA TELA
    }

    function novaImagem() {
        console.log(`entrou novaImagem, img default ${imgperfil}`);
        imgperfil = prompt("Informe o link para nova imagem: ");
        console.log(`Mudou novaImagem, img agora ${imgperfil}`);
        // Usuario(); AINDA NÃO TÔ CONSEGUINDO IMPRIMIR NA TELA
    }

    return (
        <div class="perfil" data-test="user">
            <div class="foto">
                <img onClick={novaImagem} class="circulo" src={imgperfil} data-test="profile-image" />
            </div>
            <div class="usuario">
                <div class="nomepublico">catanacomics</div>
                <div class="nomeusuario" data-test="name">{nomedefault}<span onClick={novoNome}><ion-icon name="pencil-outline" data-test="edit-name"></ion-icon></span></div>
            </div>
        </div>
    )
}
