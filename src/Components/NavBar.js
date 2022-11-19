export default function NavBar() {
    return (
        <div>
            <div class="topo">
                <div class="inst">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div class="linhahorizontal"></div>
                    <img src="./assets/logo.png" />
                </div>
                <div class="pesq">
                    <input placeholder="Pesquisar" />
                </div>
                <div class="icon">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>
       {/* Inicio topo mobile */}
            <div class="topomobile none">
                <div>
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>
                <div>
                    <img src="./assets/logo.png" />
                </div>
                <div>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}