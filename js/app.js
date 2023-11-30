const formularioR = document.getElementById('formulario1');

formularioR.addEventListener('submit', async(e) => {
    e.preventDefault();

    const resinaCheckBox = document.getElementById('resina');
    const alcoholCheckBox = document.getElementById('alcohol');
    const campoQCheckBox = document.getElementById('campoQ');
    const guantesNCheckBox = document.getElementById('guantesN');
    const toallasMCheckBox = document.getElementById('toallasM');

    const respuesta = await fetch('https://sheet.best/api/sheets/9b7a3d95-91f9-45f2-969f-a0a8e73d8df4/tabs/Reg3',{
        method:'POST',
        mode:'cors',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "FECHA":formularioR.fecha.value,
            "NOMBRE":formularioR.nombre.value,
            "NO. DE BOLETA": formularioR.boleta.value,
            "MATERIA":formularioR.materia.value,
            "PROFESOR":formularioR.profesor.value,
            "CORREO":formularioR.correo.value,
            "CANTIDAD DE PIEZAS":formularioR.piezas.value,
            //"CANTIDAD DE MATERIAL":formulario.material.value 
            "RESINA":resinaCheckBox.checked,                     
            "ALCOHOL ISOPROPILICO":alcoholCheckBox.checked,
            "CAMPO QUIRURGICO":campoQCheckBox.checked,
            "GUANTES DE NITRILO":guantesNCheckBox.checked,
            "TOALLAS DE MICROFIBRA":toallasMCheckBox.checked,
        })
    });

    //registro1.classList.remove('activo');
    //exito.classList.add('activo');
    registro1.style.display='none';
    exito.style.display='block';
    exito.style.display='flex';

    console.log(respuesta);
});

const formulario= document.getElementById('formulario2');

formulario.addEventListener('submit', async(e) => {
    e.preventDefault();

    const respuesta = await fetch('https://sheet.best/api/sheets/9b7a3d95-91f9-45f2-969f-a0a8e73d8df4/tabs/Filamento',{
        method:'POST',
        mode:'cors',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "FECHA":formulario.fecha.value,
            "NOMBRE":formulario.nombre.value,
            "NO. DE BOLETA": formulario.boleta.value,
            "MATERIA":formulario.materia.value,
            "PROFESOR":formulario.profesor.value,
            "CORREO":formularioR.correo.value,
            "CANTIDAD DE PIEZAS":formulario.piezas.value,
            "CANTIDAD DE MATERIAL":formulario.material.value           

        })
    });

    //registro2.classList.remove('activo');
    //exito.classList.add('activo');
    registro2.style.display='none';
    exito.style.display='block';
    exito.style.display='flex';
    console.log(respuesta);
});

const btnFormulario1 = document.getElementById('btnFormulario1');
const btnFormulario2 = document.getElementById('btnFormulario2');
const registro1 = document.getElementById('registro1');
const registro2 = document.getElementById('registro2');
const h1=document.getElementById('principal')

// Oculta ambos formularios al principio 
document.getElementById('registro1').style.display = 'none';
document.getElementById('registro2').style.display = 'none';

// Oculta el contenedor de botones
    
// Muestra el formulario correspondiente al tipo de impresión seleccionado

btnFormulario1.addEventListener('click', () => {
    registro1.style.display='block'
    registro2.style.display = 'none';
    btnFormulario1.style.display = 'none';
    btnFormulario2.style.display = 'none';   
    h1.style.display='none'; 
    document.getElementById('tituloFormulario1').innerHTML = '<h1>Formulario de Impresión con Resina</h1>';
});
    
btnFormulario2.addEventListener('click', () => {
    registro1.style.display = 'none';
    registro2.style.display = 'block';
    btnFormulario1.style.display = 'none';
    btnFormulario2.style.display = 'none';
    h1.style.display='none';
    document.getElementById('tituloFormulario2').innerHTML = '<h1>Formulario de Impresión con Filamento</h1>';
    
});
        

function regresarAlInicio() {
    // Oculta ambos formularios
    document.getElementById('registro1').style.display = 'none';
    document.getElementById('registro2').style.display = 'none';

    // Muestra el contenedor de botones
    btnFormulario1.style.display = 'block';
    btnFormulario2.style.display = 'block';
    h1.style.display='block'; 
}



