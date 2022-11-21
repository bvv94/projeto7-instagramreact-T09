import React from "react";

export default function Usuario() {
const [nome, setNome] = React.useState("Catana");
const [img, setImg] = React.useState("./assets/catanacomics.svg");

// let imgperfil = "https://img1.gratispng.com/20180401/goe/kisspng-user-profile-computer-icons-profile-5ac09244d91906.2547020615225697968892.jpg";

    function novoNome() {
        const nome = prompt("Informe o novo nome: ");
        if (nome){
            setNome (nome);  
        }
    }

    function novaImagem() {
        setImg (prompt ("Informe o link da nova imagem: "))
    }

    return (
        <div class="perfil" data-test="user">
            <div class="foto">
                <img onClick={novaImagem} class="circulo" src={img} data-test="profile-image" />
            </div>
            <div class="usuario">
                <div class="nomepublico">catanacomics</div>
                <div class="nomeusuario" data-test="name">{nome}<span onClick={novoNome} data-test="edit-name"><ion-icon name="pencil-outline"></ion-icon></span></div>
            </div>
        </div>
    )
}
