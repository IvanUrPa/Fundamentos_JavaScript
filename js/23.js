/*Metodos de propiedad*/

const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo canción con el ID: ${id}`);
    },
    pausar: function (){
        console.log("Pausando");
    },
    crearPlaylist: function (nombre) {
        console.log(`Creando la Playlist: ${nombre}`);
    },
    reproducirPlaylist: function (nombre) {
        console.log(`Reproduciendo la Playlist: ${nombre}`);
    }
}

reproductor.borrarCancion = function (id) {
    console.log(`Eliminando la canción: ${id}`);
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(450);
reproductor.crearPlaylist("Heavy Metal");
reproductor.reproducirPlaylist("Heavy Metal");
