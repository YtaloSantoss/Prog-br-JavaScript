let usuarios = ["Adriano", "Marcia", "josé"];

function inserirUsuario(nome, callback) {

    setTimeout(() => {usuarios.push(nome);callback()},1000);

}

function listarUsuarios(){

    console.log(usuarios);

}

inserirUsuario("Igor", listarUsuarios);