var cambioContraste = ()=>{
    let btn = document.getElementById("contraste");
    console.log(btn)
    let estado = btn.value;
    console.log(estado)
    if (estado == "dark") {
        btn.value = "light";
        let elements1 = document.getElementsByClassName("oscuro1");
        let elements2 = document.getElementsByClassName("oscuro2");
        console.log(elements1);
        console.log(elements1[0]);
        const largo1 = elements1.length
        for (let i = 0; i < largo1; i++) {
            const element = elements1[0];
            console.log(element)
            element.classList.add("claro1"); 
            element.classList.remove("oscuro1");
        }
        const largo2 = elements2.length;
        for (let i = 0; i < largo2; i++) {
            const element = elements2[0];
            console.log(element)
            element.classList.add("claro2"); 
            element.classList.remove("oscuro2");
        }
        
    }else if(estado == "light"){
        btn.value = "dark";
        let elements1 = document.getElementsByClassName("claro1");
        let elements2 = document.getElementsByClassName("claro2");
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
    }
}

var FuenteParrafo = ()=>{
    //alert('uwu')
    let btn = document.getElementById("parrafos");
    let valor = btn.value;
    if (valor == 'chiq-p') {
        btn.value = "med-p";
        let elements = document.getElementsByClassName("pequenio-p");
        const largo = elements.length;
        console.log(elements)
        for (let i = 0; i < largo; i++) {
            const element = elements[0];
            //console.log(element)
            element.classList.add("mediano-p");
            element.classList.remove("pequenio-p");
            
        }
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



var cargarTabla = (listasocios)=>{
    let eContenedorTabla = document.getElementById("contenedorTabla");
    let eSBtnAccion = document.getElementById("sBtnAccion");
    let eNombre = document.getElementById("nombre");
    let eCorreo = document.getElementById("correo");
    let eTel = document.getElementById("telefono");
    let eNac = document.getElementById("nacimiento");
    let eGen1 = document.getElementById("genero1");
    let eGen2 = document.getElementById("genero2");
    let eGen3 = document.getElementById("genero3");

    render = "<h2 class='text-center fw-bold'>Socios</h2>"
    render += "<table class='text-center' id='tabla'>";
    render += "<tr class='fw-bold px-5'>";
    render += "<th>Nombre</th>";
    render += "<th>Correo</th>";
    render += "<th>Telefono</th>";
    render += "<th>Cumpleanios</th>";
    render += "<th>Genero</th>";
    render += "<th>Accion</th>"
    render += "</tr>";
    for (let i = 0; i < listasocios.length; i++) {
        const element = listasocios[i];
        render += "<tr class='px-5'>";
        render += "<td>"+element.nombre+"</td>";
        render += "<td>"+element.correo+"</td>";
        render += "<td>"+element.telefono+"</td>";
        render += "<td>"+element.fecha_nacimiento+"</td>";
        render += "<td>"+element.genero+"</td>";
        render += "<td>";
        render += "<a id='BtnEditar"+i+"' class='btn btn-warning mxy-1 btn-sm'>Editar</a>";
        render += "<a id='BtnEliminar"+i+"' class='btn btn-danger mxy-1 btn-sm'>Eliminar</a>";
        render += "</td>";
        render += "</tr>";
    }
    render += "</table>"
    
    eContenedorTabla.innerHTML = render

    for (let i = 0; i < listasocios.length; i++) {
        const element = listasocios[i];
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

var modificar = (listasocios)=>{
    let eNombre = document.getElementById("nombre");
    let eCorreo = document.getElementById("correo");
    let eTelefono = document.getElementById("telefono");
    let eNac = document.getElementById("nacimiento");
    let eGen1 = document.getElementById("genero1");
    let eGen2 = document.getElementById("genero2");
    let eGen3 = document.getElementById("genero3");
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
    
    let listaAntiguaSTR = localStorage.getItem("socios");
    let listaAntigua = JSON.parse(listaAntiguaSTR);
    if (listaAntigua == null){
        let registroo = {"id":0,"nombre":nombre,"correo":correo,"contrasenia":psw,"telefono":tel,"fecha_nacimiento":nac,"genero":gen};
        console.log(registroo)
        var listasocios = [registroo];
    }else{
        let registroo = {"id":listaAntigua.length,"nombre":nombre,"correo":correo,"contrasenia":psw,"telefono":tel,"fecha_nacimiento":nac,"genero":gen};
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
addEventListener("load",obtenerDatos)