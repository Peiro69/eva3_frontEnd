var cambioContraste = ()=>{
    //Primero recupera el documento con el id contraste
    let btn = document.getElementById("contraste");
    console.log(btn)
    //el valor que contenga la etiqueta (en este caso <button>) se le asigna a la variable "estado"
    let estado = btn.value;
    console.log(estado)
    //En caso de que el estado (valor) del botón sea "dark" se entrará al ciclo
    if (estado == "dark") {
        //Dentro del ciclo se le cambia el valor al botón
        btn.value = "light";
        //En este caso para que funcione en esta página se llaman a 3 tipos de clases, lo que hará 
        //que en cada etiqueta con las clases nombradas estén dentro de los atributos "elements"
        let elements1 = document.getElementsByClassName("oscuro1");
        let elements2 = document.getElementsByClassName("oscuro2");
        let elements3 = document.getElementsByClassName("text-light");
        console.log(elements1);
        console.log(elements1[0]);
        //Se le asigna el largo del diccionario, ya que al aplicar el ciclo el largo del diccionario cambiará
        const largo1 = elements1.length
        for (let i = 0; i < largo1; i++) {
            //La linea 23, lo que hace es "dividir" el diccionario en sus distintas etiquetas
            const element = elements1[0];
            console.log(element)
            //A todas las etiquetas se le agrega la clase y luego se las quita, para que el cambio se realize y se llame
            //lo que está en el css
            element.classList.add("claro1"); 
            element.classList.remove("oscuro1");
        }
        //Se repite el ciclo con las otras variables nombradas "elements"
        const largo2 = elements2.length;
        for (let i = 0; i < largo2; i++) {
            const element = elements2[0];
            console.log(element)
            element.classList.add("claro2"); 
            element.classList.remove("oscuro2");
        }
        const largo3 = elements3.length;
        for (let i = 0; i < largo3; i++) {
            const element = elements3[0];
            element.classList.add("text-black"); 
            element.classList.remove("text-light");
        }
    //En la linea 45 se hace el mismo proceso que en el if anterior, pero a la inversa    
    }else if(estado == "light"){
        btn.value = "dark";
        let elements1 = document.getElementsByClassName("claro1");
        let elements2 = document.getElementsByClassName("claro2");
        let elements3 = document.getElementsByClassName("text-black");
        console.log(elements1);
        console.log(elements1[0]);
        const largo1 = elements1.length
        for (let i = 0; i < largo1; i++) {
            const element = elements1[0];
            console.log(element)
            element.classList.add("oscuro1"); 
            element.classList.remove("claro1");
        }
        const largo2 = elements2.length;
        for (let i = 0; i < largo2; i++) {
            const element = elements2[0];
            console.log(element)
            element.classList.add("oscuro2"); 
            element.classList.remove("claro2");
        }
        const largo3 = elements3.length;
        for (let i = 0; i < largo3; i++) {
            const element = elements3[0];
            element.classList.add("text-light"); 
            element.classList.remove("text-black");
        }
    }
}

var FuenteParrafo = ()=>{
    //Se recupera el elemento con el id "parrafos"
    let btn = document.getElementById("parrafos");
    //Se recupera el valor de que tiene el id "parrafos"
    let valor = btn.value;
    //En caso de que el valor sea "chiq-p" se entrará al IF
    if (valor == 'chiq-p') {
        //Se reasigna el valor por mediano
        btn.value = "med-p";
        //Se recuperan las clases que tengan el nombre "pequenio-p"
        let elements = document.getElementsByClassName("pequenio-p");
        //Se le asigna el largo del diccionario a la variable largo porque el largo puede variar
        const largo = elements.length;
        console.log(elements)
        //Se realiza el ciclo
        for (let i = 0; i < largo; i++) {
            //Se segmenta el diccionario con las etiquetas con clases "pequenio-p"
            const element = elements[0];
            //console.log(element)
            //Se les agrega 1 a 1 la clase "mediano-p" 
            element.classList.add("mediano-p");
            //Se borra la clase "pequenio-p" para que estos parrafos ahora sean medianos
            element.classList.remove("pequenio-p");
            
        }
    //Se repite el mismo proceso que en la opcion anterior
    }else if (valor == 'med-p') {
        btn.value = "gran-p";
        let elements = document.getElementsByClassName("mediano-p");
        const largo = elements.length;
        console.log(elements);
        for (let i = 0; i < largo; i++) {
            const element = elements[0];
            //console.log(element)
            element.classList.add("grande-p");
            element.classList.remove("mediano-p");
            
        }
    //Se repite el mismo proceso que en la opcion anterior
    }else if(valor == 'gran-p') {
        btn.value = "chiq-p";
        let elements = document.getElementsByClassName("grande-p");
        const largo = elements.length;
        console.log(elements);
        for (let i = 0; i < largo; i++) {
            const element = elements[0];
            element.classList.add("pequenio-p");
            element.classList.remove("grande-p");

        }
    }
}

var FuenteTitulo = ()=>{
    //Se recupera el elemento con el id "titulos"
    let btn = document.getElementById("titulos");
    //Se recupera el valor de que tiene el id "parrafos"
    let valor = btn.value;
    //En caso de que el valor sea "chiq-h1" se entrará al IF
    if (valor == 'chiq-h1') {
        //Se reasigna el valor por mediano
        btn.value = "med-h1";
        //Se recuperan las clases que tengan el nombre "pequenio-p"
        let elements = document.getElementsByClassName("pequenio-h1");
        //Se le asigna el largo del diccionario a la variable largo porque el largo puede variar
        const largo = elements.length;
        console.log(elements)
        //Se realiza el ciclo
        for (let i = 0; i < largo; i++) {
            //Se segmenta el diccionario con las etiquetas con clases "pequenio-h1"
            const element = elements[0];
            //console.log(element)
            //Se les agrega 1 a 1 la clase "mediano-p" 
            element.classList.add("mediano-h1");
            //Se borra la clase "pequenio-p" para que estos parrafos ahora sean medianos
            element.classList.remove("pequenio-h1");
            
        }
    //Se repite el mismo proceso en las siguientes 2 opciones
    }else if (valor == 'med-h1') {
        btn.value = "gran-h1";
        let elements = document.getElementsByClassName("mediano-h1");
        const largo = elements.length;
        console.log(elements);
        for (let i = 0; i < largo; i++) {
            const element = elements[0];
            //console.log(element)
            element.classList.add("grande-h1");
            element.classList.remove("mediano-h1");
            
        }
    }else if(valor == 'gran-h1') {
        btn.value = "chiq-h1";
        let elements = document.getElementsByClassName("grande-h1");
        const largo = elements.length;
        console.log(elements);
        for (let i = 0; i < largo; i++) {
            const element = elements[0];
            element.classList.add("pequenio-h1");
            element.classList.remove("grande-h1");

        }
    }
}

var ojito = ()=>{
    //Se llama al input type="password" con el id "contra"
    const pass = document.getElementById("contra"),
    //Junto con esto se agrega un "querySelector" a la clase "bx"
    icon = document.querySelector(".bx");  
    //A la variable con el "querySelector" se le agrega un listener con una función flecha
    icon.addEventListener("click",()=>{
        //Se hace el proceso de que en caso de que el tipo del input sea "password" se cambie a "text" para darle
        //visibilidad a la contraseña (todo solo es visual)
      if (pass.type === "password") {
          pass.type = "text";
      }else{
          pass.type = "password";
      }
})
}


var cargarTabla = (listasocios)=>{
    //Se llama a cada documento del formulario con sus id
    let eContenedorTabla = document.getElementById("contenedorTabla");
    let eSBtnAccion = document.getElementById("sBtnAccion");
    let eNombre = document.getElementById("nombre");
    let eCorreo = document.getElementById("correo");
    let eTel = document.getElementById("telefono");
    let eNac = document.getElementById("nacimiento");
    let eGen1 = document.getElementById("genero1");
    let eGen2 = document.getElementById("genero2");
    let eGen3 = document.getElementById("genero3");
    let eProducto = document.getElementById("producto");
    let eTerminos = document.getElementById("terminos");
    let eContra = document.getElementById("contra");
    //Se declara el render para la tabla
    render = "<h1 class='pequenio-h1 text-center fw-bold'>Socios</h1>"
    render += "<table class='text-center' id='tabla'>";
    render += "<tr class='fw-bold px-5'>";
    render += "<th>Nombre</th>";
    render += "<th>Correo</th>";
    render += "<th>Telefono</th>";
    render += "<th>Cumpleanios</th>";
    render += "<th>Genero</th>";
    render += "<th>Producto Fav.</th>";
    render += "<th>Acepta Terminos</th>";
    render += "<th>Accion</th>"
    render += "</tr>";

    //Se hace que el 

    const largo = listasocios.length;

    for (let i = 0; i < largo; i++) {
        const element = listasocios[i];
        render += "<tr class='px-5'>";
        render += "<td>"+element.nombre+"</td>";
        render += "<td>"+element.correo+"</td>";
        render += "<td>"+element.telefono+"</td>";
        render += "<td>"+element.fecha_nacimiento+"</td>";
        render += "<td>"+element.genero+"</td>";
        render += "<td>"+element.producto+"</td>";
        render += "<td>"+element.terminos+"</td>";
        render += "<td>";
        render += "<a id='BtnEditar"+i+"' class='btn btn-warning mxy-1 btn-sm'>Editar</a>";
        render += "<a id='BtnEliminar"+i+"' class='btn btn-danger mxy-1 btn-sm'>Eliminar</a>";
        render += "<a id='BtnContra"+i+"' class='btn btn-info text-light mxy-1 btn-sm'>Editar Contrasenia</a>";
        render += "</td>";
        render += "</tr>";
    }
    render += "</table>";
    
    eContenedorTabla.innerHTML = render;
    
    for (let i = 0; i < largo; i++) {
        const element = listasocios[i];
        var eBtnContra = document.getElementById("BtnContra"+i);
        eBtnContra.addEventListener("click",()=>{
            let sBtn = "<button type='button' id = 'BtnContra' value='"+i+"' class='btn btn-info mt-2 btn-sm text-light' >Modificar Contrasenia</button>";
            eSBtnAccion.innerHTML = sBtn;
            var eBtnContraArriba = document.getElementById("BtnContra");
            eBtnContraArriba.addEventListener("click",()=>modificarContra(listasocios))
            eContra.value = element.contrasenia;
            eNombre.value = element.nombre;
            eCorreo.value = "";
            eTel.value = "";
            eNac.value = "";
            if (element.genero == "Hombre") {
                eGen1.checked = false
            }else if(element.genero == "Mujer"){
                eGen2.checked = false
            }else if(element.genero == "Reservado"){
                eGen3.checked = false
            }
            if (element.terminos == "si") {
                eTerminos.checked = false
            }else{
                eTerminos.checked = false
            }
        })
        var eBtnEditar = document.getElementById("BtnEditar"+i);
        eBtnEditar.addEventListener("click",()=>{
            //Agrega boton Editar en HTML
            let sBtn = "<button type='button' id = 'BtnEditar' value='"+i+"' class='btn btn-info mt-2 btn-sm text-light' >Modificar</button>";
            console.log(sBtn.value);
            eSBtnAccion.innerHTML = sBtn; 
            //Proceso para editar
            var eBtnEditarArriba = document.getElementById("BtnEditar");
            eBtnEditarArriba.addEventListener("click",()=>modificar(listasocios))
            //Modificacion
            eNombre.value = element.nombre;
            eCorreo.value = element.correo;
            eTel.value = element.telefono;
            eNac.value = element.fecha_nacimiento;
            if (element.genero == "Hombre") {
                eGen1.checked = true
            }else if(element.genero == "Mujer"){
                eGen2.checked = true
            }else if(element.genero == "Reservado"){
                eGen3.checked = true
            }

            if (element.producto == 'Jockey') {
                eProducto.value = 'Jockey';
            }else if (element.producto == 'Gorro') {
                eProducto.value = 'Gorro';
            }else if (element.producto == 'Polera') {
                eProducto.value = 'Polera';
            }
            console.log(eProducto.value)
        
            if (element.terminos == "si") {
                eTerminos.checked = true
            }else{
                eTerminos.checked = false
            }
        })

        var eBtnEliminar = document.getElementById("BtnEliminar"+i);
        eBtnEliminar.addEventListener("click",()=>{
            let sBtn = "<button type= 'button' id='BtnEliminar' value='"+i+"' class='btn btn-danger mt-2 btn-sm'>Confirmar</button>"
            eSBtnAccion.innerHTML = sBtn

            var BtnEliminarArriba = document.getElementById("BtnEliminar");
            BtnEliminarArriba.addEventListener("click",()=>eliminar(listasocios))
            //BtnEliminarArriba.addEventListener("click",)
            eNombre.value = element.nombre;
            eCorreo.value = element.correo;
            eTel.value = element.telefono;
            eNac.value = element.fecha_nacimiento;
            if (element.genero == "Hombre") {
                eGen1.checked = true
            }else if(element.genero == "Mujer"){
                eGen2.checked = true
            }else if(element.genero == "Reservado"){
                eGen3.checked = true
            }
            if (element.producto == 'Jockey') {
                eProducto.value = 'Jockey';
            }else if (element.producto == 'Gorro') {
                eProducto.value = 'Gorro';
            }else if (element.producto == 'Polera') {
                eProducto.value = 'Polera';
            }
            console.log(eProducto.value)
        
            if (element.terminos == "si") {
                eTerminos.checked = true
            }else{
                eTerminos.checked = false
            }
        })
    }
        
}

var eliminar = (listasocios)=>{
    let eBtnEliminarArriba = document.getElementById("BtnEliminar");
    let indice = eBtnEliminarArriba.value;
    let lista = listasocios.filter((p)=>p.id!=indice);
    let listaFinal = lista.map((p,index)=>{return {...p, "id":index}});
    localStorage.setItem("socios",JSON.stringify(listaFinal))
    cargarTabla(listaFinal)
}

var modificarContra = (listasocios)=>{
    let eNombre = document.getElementById("nombre");
    let eContra = document.getElementById("contra");

    let eBtnContraArriba = document.getElementById("BtnContra");

    
    let contra = eContra.value;
    let indice = eBtnContraArriba.value;

    listasocios[indice].contrasenia = contra;
    
    localStorage.setItem("socios",JSON.stringify(listasocios))
    cargarTabla(listasocios)

}

var modificar = (listasocios)=>{
    let eNombre = document.getElementById("nombre");
    let eCorreo = document.getElementById("correo");
    let eTelefono = document.getElementById("telefono");
    let eNac = document.getElementById("nacimiento");
    let eGen1 = document.getElementById("genero1");
    let eGen2 = document.getElementById("genero2");
    let eGen3 = document.getElementById("genero3");
    let eProducto = document.getElementById("producto");
    let eTerminos = document.getElementById("terminos");

    let eBtnEditarArriba = document.getElementById("BtnEditar");

    let nombre = eNombre.value;
    let correo = eCorreo.value;
    let telefono = eTelefono.value;
    let nac = eNac.value;
    let indice = eBtnEditarArriba.value;
    let gen1 = eGen1.checked;
    let gen2 = eGen2.checked;
    let gen3 = eGen3.checked;


    listasocios[indice].nombre = nombre; //.value antes del "=" es reemplazar, 
    listasocios[indice].correo = correo; //.value despues del "=" es recuperar.
    listasocios[indice].telefono = telefono;
    listasocios[indice].fecha_nacimiento = nac;
    if (gen1 == true){
        listasocios[indice].genero = "Hombre";
    }else if(gen2 == true){
        listasocios[indice].genero = "Mujer";
    }else if(gen3 == true){
        listasocios[indice].genero = "Reservado";
    }
    
    if (eProducto.value == 'Jockey') {
        listasocios[indice].producto = "Jockey";
    }else if (eProducto.value == 'Gorro') {
        listasocios[indice].producto = "Gorro";
    }else if (eProducto.value == 'Polera') {
        listasocios[indice].producto = 'Polera';
    }
    if (eTerminos.checked == true) {
        listasocios[indice].terminos = "si"
    }else{
        listasocios[indice].terminos = "no"
    }
    localStorage.setItem("socios",JSON.stringify(listasocios))
    cargarTabla(listasocios)

}


var registro = () => {
    let eNombre = document.getElementById("nombre");
    let eCorreo = document.getElementById("correo");
    let ePsw = document.getElementById("contra");
    let eTel = document.getElementById("telefono");
    let eNac = document.getElementById("nacimiento");
    let eGen1 = document.getElementById("genero1");
    let eGen2 = document.getElementById("genero2");
    let eGen3 = document.getElementById("genero3");
    let eProducto = document.getElementById("producto");
    let eTerminos = document.getElementById("terminos");
    let nombre = eNombre.value;
    let correo = eCorreo.value;
    let psw = ePsw.value;
    let tel = eTel.value;
    let nac = eNac.value;
    let gen1 = eGen1.checked;
    let gen2 = eGen2.checked;
    let gen3 = eGen3.checked;
    var gen = ""
    if (gen1 == true){
        gen = "Hombre";
    }else if(gen2 == true){
        gen = "Mujer";
    }else if(gen3 == true){
        gen = "Reservado";
    }
    
    var producto = ''
    if (eProducto.value == 'Jockey') {
        producto = "Jockey";
    }else if (eProducto.value == 'Gorro') {
        producto = "Gorro";
    }else if (eProducto.value == 'Polera') {
        producto = 'Polera';
    }

    var terminos = ""
    if (eTerminos.checked == true) {
        terminos = "si"
    }else{
        terminos = "no"
    }


    
    
    let listaAntiguaSTR = localStorage.getItem("socios");
    let listaAntigua = JSON.parse(listaAntiguaSTR);
    if (listaAntigua == null){
        let registroo = {"id":0,"nombre":nombre,"correo":correo,"contrasenia":psw,"telefono":tel,"fecha_nacimiento":nac,"genero":gen,"producto":producto,"terminos":terminos};
        console.log(registroo)
        var listasocios = [registroo];
    }else{
        let registroo = {"id":listaAntigua.length,"nombre":nombre,"correo":correo,"contrasenia":psw,"telefono":tel,"fecha_nacimiento":nac,"genero":gen,'producto':producto,"terminos":terminos};
        console.log(registroo)
        var listasocios = [...listaAntigua,registroo];
    }
    localStorage.setItem("socios",JSON.stringify(listasocios));

    cargarTabla(listasocios)

}
var obtenerDatos = () =>{
    let listaAntiguaSTR = localStorage.getItem("socios");
    let listaAntigua = JSON.parse(listaAntiguaSTR);
    cargarTabla(listaAntigua);
}



document.getElementById("boton").addEventListener("click", registro);
document.getElementById("contraste").addEventListener("click",cambioContraste)
document.getElementById("parrafos").addEventListener("click",FuenteParrafo)
document.getElementById("titulos").addEventListener("click",FuenteTitulo)
document.getElementById("uwu"),addEventListener("click",ojito)
addEventListener("load",obtenerDatos)