function verificaDatos(fecha_nacimiento, fecha_titulacion, rfc){
                
    var rfc_patron = "^(([A-ZÑ&]{4})([0-9]{2})([0][13578]|[1][02])(([0][1-9]|[12][\\d])|[3][01])([A-Z0-9]{3}))|" +
    "(([A-ZÑ&]{4})([0-9]{2})([0][13456789]|[1][012])(([0][1-9]|[12][\\d])|[3][0])([A-Z0-9]{3}))|" +
    "(([A-ZÑ&]{4})([02468][048]|[13579][26])[0][2]([0][1-9]|[12][\\d])([A-Z0-9]{3}))|" +
    "(([A-ZÑ&]{4})([0-9]{2})[0][2]([0][1-9]|[1][0-9]|[2][0-8])([A-Z0-9]{3}))$";

    var msg = "";
    var confirm = false;

    if(fecha_nacimiento != "" && fecha_titulacion != "" && rfc != ""){
        var fecha_nac = new Date(fecha_nacimiento);
        var fecha_tit = new Date(fecha_titulacion);
        var fecha_actual = new Date();

        if(fecha_nac.getFullYear() <= fecha_actual.getFullYear() && fecha_nac.getMonth() <= fecha_actual.getMonth() &&
            fecha_nac.getDate() +1 < fecha_actual.getDate()){
            msg += "";
        }
        else
            msg += "La fecha de nacimiento debe ser menor a la fecha actual";
        
        if(fecha_tit.getFullYear() <= fecha_actual.getFullYear() && fecha_tit.getMonth() <= fecha_actual.getMonth() &&
            fecha_tit.getDate() +1 < fecha_actual.getDate()){
            msg += "";
        }
        else
            msg += "\nLa fecha de titulación debe ser menor a la fecha actual"

        if(!rfc.value.match(rfc_patron))
            msg += "\nRFC no válido";

        if(msg == ""){
            confirm = true;
            recuperaDatos();
        }
        else
            alert(msg);
    }
    else
        alert("Campos RFC o Fecha de nacimiento/titulación vacíos");

    return confirm;
}

function validaDatos(){

    if(document.getElementById("foto").files.length == 0){
        alert("Selecciona una foto");
        return false;
    }

    /* VALIDACIONES DATOS PERSONALES */
    var nombre = document.getElementById("nombre");
    if(nombre.value.trim() == ""){
        nombre.focus();
        alert("Debe ingresar su nombre");
        return false;
    }

    var apellido_paterno = document.getElementById("apellido_paterno");
    if(apellido_paterno.value.trim() == ""){
        apellido_paterno.focus();
        alert("Debe ingresar su apellido paterno");
        return false;
    }

    var apellido_materno = document.getElementById("apellido_materno");
    if(apellido_materno.value.trim() == ""){
        apellido_materno.focus();
        alert("Debe ingresar su apellido materno");
        return false;
    }

    var rfc_patron = "^(([A-ZÑ&]{4})([0-9]{2})([0][13578]|[1][02])(([0][1-9]|[12][\\d])|[3][01])([A-Z0-9]{3}))|" +
    "(([A-ZÑ&]{4})([0-9]{2})([0][13456789]|[1][012])(([0][1-9]|[12][\\d])|[3][0])([A-Z0-9]{3}))|" +
    "(([A-ZÑ&]{4})([02468][048]|[13579][26])[0][2]([0][1-9]|[12][\\d])([A-Z0-9]{3}))|" +
    "(([A-ZÑ&]{4})([0-9]{2})[0][2]([0][1-9]|[1][0-9]|[2][0-8])([A-Z0-9]{3}))$";

    var rfc = document.getElementById("rfc");
    if(rfc.value.trim() == ""){
        rfc.focus();
        alert("Debe ingresar su RFC");
        return false
    }
    else{
        if(!rfc.value.match(rfc_patron)){
            rfc.focus();
            alert("El RFC debe estar en un formato válido");
            return false;
        }
    }

    var genero = document.getElementsByName("genero");
    var selected = false;
    for(var i=0; i<genero.length; i++){
        if(genero[i].checked)
            selected = true;
    }

    if(!selected){
        alert("Debe seleccionar un género");
        return false;
    }

    var fecha_actual = new Date(); 

    if(document.getElementById("fecha_nac").value != ""){
        var fecha_nac = new Date(document.getElementById("fecha_nac").value);
    
        if(!(fecha_nac.getFullYear() <= fecha_actual.getFullYear() && fecha_nac.getMonth() <= fecha_actual.getMonth() &&
        fecha_nac.getDate() +1 < fecha_actual.getDate())){
            document.getElementById("fecha_nac").focus();
            alert("La fecha de nacimiento debe ser menor a la fecha actual");
            return false;
        }
    }
    else{
        alert("Debes ingresar una fecha de nacimiento");
        return false;
    }
    
    var sit_civil = document.getElementsByName("situacion_civil");
    selected = false;
    for(var i=0; i<sit_civil.length; i++){
        if(sit_civil[i].checked)
            selected = true;
    }

    if(!selected){
        alert("Debes seleccionar tu situación civil");
        return false;
    }

    var telefono_patron = "[0-9]{10}";
    var telefono = document.getElementById("telefono");
    
    if(telefono.value.trim() == ""){
        telefono.focus();
        alert("Debes proporcionar tu número telefónico");
        return false;
    }else{
        if(!telefono.value.match(telefono_patron)){
            telefono.focus();
            alert("Debes proporcionar un número telefónico en formato correcto");
            return false;
        }
    }

    var correo_patron = "[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
    var correo = document.getElementById("correo");

    if(correo.value.trim() == ""){
        correo.focus();
        alert("Debe ingresar su correo electrónico");
        return false;
    }
    else{
        if(!correo.value.match(correo_patron)){
            correo.focus();
            alert("Debe ingresar un formato de correo electrónico válido");
            return false;
        }
    }

    var direccion = document.getElementById("direccion");
    if(direccion.value.trim() == ""){
        direccion.focus();
        alert("Debe proporcionar su dirección");
        return false;
    }

    /* VALIDACIONES DATOS ESCOLARES */
    var titulacion = document.getElementsByName("titulacion");
    selected = false;
    for(var i=0; i<titulacion.length; i++){
        if(titulacion[i].checked)
            selected = true;
    }

    if(!selected){
        alert("Debe indicar si se encuentra titulado o no");
        return false;
    }

    if(document.getElementById("fecha_titulo").value != ""){
        var fecha_titulo = new Date(document.getElementById("fecha_titulo").value);

        if(!(fecha_titulo.getFullYear() <= fecha_actual.getFullYear() && fecha_titulo.getMonth() <= fecha_actual.getMonth() &&
            fecha_titulo.getDate() +1 < fecha_actual.getDate())){
            document.getElementById("fecha_titulo").focus();
            alert("La fecha de titulación debe ser menor a la fecha actual");
            return false;
        }
    }
    else{
        alert("Debes ingresar una fecha de titulación");
        return false;
    }

    var cedula_patron = "[0-9]{7}";
    var cedula = document.getElementById("cedula");

    if(cedula.value.trim() == ""){
        cedula.focus();
        alert("Debe proporcionar su cédula");
        return false;
    }else{
        if(!cedula.value.match(cedula_patron)){
            cedula.focus();
            alert("Debe proporcionar su cédula en formato correcto");
            return false;
        }
    }

    var institucion = document.getElementById("institucion");
    if(institucion.value.trim() == ""){
        institucion.focus();
        alert("Debe proporcionar una instituación de egreso");
        return false;
    }

    var cursos = document.getElementById("cursos");
    if(cursos.value.trim() == ""){
        cursos.focus();
        alert("Debe proprcionar información acerca de los cursos o diplomados");
        return false;
    }

    /* VALIDACIÓN INFORMACIÓN LABORAL */
    var datos_empleo = document.getElementById("datos_empleo");
    if(datos_empleo.value.trim() == ""){
        datos_empleo.focus();
        alert("Debe proporcionar datos de su último empleo");
        return false;
    }

    var contacto_empleo = document.getElementById("contacto_empleo");
    if(contacto_empleo.value.trim() == ""){
        contacto_empleo.focus();
        alert("Debe proporcionar el contacto de su último empleo");
        return false;
    }

    var telefono_empleo = document.getElementById("telefono_empleo");
    if(telefono_empleo.value.trim() == ""){
        telefono_empleo.focus();
        alert("Debe proporcionar el teléfono de su último empleo");
        return false;
    }
    else{
        if(!telefono_empleo.value.match(telefono_patron)){
            telefono_empleo.focus();
            alert("Debe proporcionar el teléfono de su último empleo en formato correcto");
            return false;
        }
    }

    var ubicacion_empleo = document.getElementById("ubicacion_empleo");
    if(ubicacion_empleo.value.trim() == ""){
        ubicacion_empleo.focus();
        alert("Debe proporcionar la ubicación de su último empleo");
        return false;
    }

    var labores_empleo = document.getElementById("labores_empleo");
    if(labores_empleo.value.trim() == ""){
        labores_empleo.focus();
        alert("Debe indicar las labores llevadas a cabo en su último empleo");
        return false;
    }

    var sueldo_empleo = document.getElementById("sueldo_empleo");
    if(sueldo_empleo.value.trim() == ""){
        sueldo_empleo.focus();
        alert("Debe indicar el sueldo alcanzado en el último empleo");
        return false;
    }

    var tiempo_empleo = document.getElementById("tiempo_empleo");
    if(tiempo_empleo.value.trim() == ""){
        tiempo_empleo.focus();
        alert("Debe indicar el tiempo laborado en el último empleo");
        return false;
    }

    /* VALIDA DATOS REFERENCIAS */
    var referencia1 = document.getElementById("referencia1");
    if(referencia1.value.trim() == ""){
        referencia1.focus();
        alert("Debe indicar los datos en la referencia 1");
        return false;
    }

    var referencia2 = document.getElementById("referencia2");
    if(referencia2.value.trim() == ""){
        referencia2.focus();
        alert("Debe indicar los datos en la referencia 2");
        return false;
    }

    recuperaDatos();
}

function recuperaDatos(){
    document.getElementById("curriculum").style.display = "none";
    document.getElementById("info-curriculum").style.display = 'block';
    
    /* OBTENCIÓN DE DATOS PERSONALES */
    var nombre = document.getElementById("nombre").value;
    var apellido_paterno = document.getElementById("apellido_paterno").value;
    var apellido_materno = document.getElementById("apellido_materno").value;
    var rfc = document.getElementById("rfc").value;
    var genero_seleccionado = document.getElementsByName("genero");
    var genero;

    for(var i=0; i<genero_seleccionado.length; i++){
        if(genero_seleccionado[i].checked)
            genero = genero_seleccionado[i].value;
    }

    var edad = document.getElementById("edad").value;
    var fecha_nacimiento = document.getElementById("fecha_nac").value;
    var situ_civil = document.getElementsByName("situacion_civil")
    var situacion_civil;

    for(var i=0; i<situ_civil.length; i++){
        if(situ_civil[i].checked)
            situacion_civil = situ_civil[i].value;
    }

    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
    var direccion = document.getElementById("direccion").value;
    var nac_seleccionada = document.getElementsByName("nacionalidad");
    var nacionalidad;

    for(var i=0; i<nac_seleccionada.length; i++){
        if(nac_seleccionada[i].checked)
            nacionalidad = nac_seleccionada[i].value;
    }

    var estado = document.getElementById("estado").value;
    var ciudad = document.getElementById("ciudad").value;

    /* OBTENCIÓN DE DATOS ESCOLARES */
    var grado_estudios = document.getElementById("grado_estudios").value;
    var opc_titulacion = document.getElementsByName("titulacion");
    var titulacion;

    for(var i=0; i<opc_titulacion.length; i++){
        if(opc_titulacion[i].checked)
            titulacion = opc_titulacion[i].value;
    }

    var fecha_titulacion = document.getElementById("fecha_titulo").value;
    var cedula = document.getElementById("cedula").value;
    var institucion = document.getElementById("institucion").value;
    var cursos = document.getElementById("cursos").value;

    /* OBTENCIÓN INFORMACIÓN LABORAL */
    var datos_empleo = document.getElementById("datos_empleo").value;
    var contacto_empleo = document.getElementById("contacto_empleo").value;
    var telefono_empleo = document.getElementById("telefono_empleo").value;
    var ubicacion_empleo = document.getElementById("ubicacion_empleo").value;
    var labores_empleo = document.getElementById("labores_empleo").value;
    var sueldo_empleo = document.getElementById("sueldo_empleo").value;
    var tiempo_empleo = document.getElementById("tiempo_empleo").value;
    
    /* OBTIENE DATOS REFERENCIAS */
    var referencia1 = document.getElementById("referencia1").value;
    var referencia2 = document.getElementById("referencia2").value;

    /* MUESTRA DATOS PERSONALES */
    document.getElementById("m_nombre").innerHTML = nombre +" "+apellido_paterno +" "+apellido_materno;
    document.getElementById("m_rfc").innerHTML = rfc;
    document.getElementById("m_genero").innerHTML = genero;
    document.getElementById("m_edad").innerHTML = edad;
    document.getElementById("m_fecha_nac").innerHTML = fecha_nacimiento;
    document.getElementById("m_sit_civil").innerHTML = situacion_civil;
    document.getElementById("m_telefono").innerHTML = telefono;
    document.getElementById("m_correo").innerHTML = correo;
    document.getElementById("m_direccion").innerHTML = direccion;
    document.getElementById("m_nac").innerHTML = nacionalidad;
    document.getElementById("m_estado").innerHTML = estado;
    document.getElementById("m_ciudad").innerHTML = ciudad;

    /*MUESTRA  DATOS ESCOLARES*/
    document.getElementById("m_grado").innerHTML = grado_estudios;
    document.getElementById("m_titulado").innerHTML = titulacion;
    document.getElementById("m_fecha_tit").innerHTML = fecha_titulacion;
    document.getElementById("m_cedula").innerHTML = cedula;
    document.getElementById("m_institucion").innerHTML = institucion;
    document.getElementById("m_cursos").innerHTML = cursos;

    /* MUESTRA INFORMACIÓN LABORAL */
    document.getElementById("m_datos_emp").innerHTML = datos_empleo;
    document.getElementById("m_contacto_emp").innerHTML = contacto_empleo;
    document.getElementById("m_tel_emp").innerHTML = telefono_empleo;
    document.getElementById("m_ubicacion").innerHTML = ubicacion_empleo;
    document.getElementById("m_labores").innerHTML = labores_empleo;
    document.getElementById("m_salario").innerHTML = sueldo_empleo;
    document.getElementById("m_tiempo").innerHTML = tiempo_empleo;

    /* MUESTRA REFERENCIAS */
    document.getElementById("m_ref1").innerHTML = referencia1;
    document.getElementById("m_ref2").innerHTML = referencia2;
}

function muestraFormulario(){
    document.getElementById("form-curriculum").reset();
    document.getElementById("curriculum").style.display = "block";
    document.getElementById("info-curriculum").style.display = 'none';
}