function pegarDados() {
    let usuario = document.getElementById("usuario");
    let foto = document.getElementById("foto");
    
    
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(
        response => response.json()
    )
    .then(
        data => {
            for (i=0;i<data.length;i++) {
               
                console.log(data)
                usuario.innerHTML = data.id;
                foto.src = data.url;
            }
            
        }
    )
}
