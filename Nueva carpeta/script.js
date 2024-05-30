






const  miVentanaEmergente = document.getElementById('compañeroN1') 


//+++++++++++++++++++  AGREGAR UN OBSERVADOR EN EL MODAL ++++++++++++++++++++++++++++++++++++++

miVentanaEmergente.addEventListener('show.bs.modal',function(event){ // SHOW.BS.MODAL
    console.log('SE ESTA ABRIENDO EL MODAL'); 

    //RECONOCER EL EVENTO QUE HABILITARA EL EVENTO MODAL
    
    let boton = event.relatedTarget //+++ ETIQUETADO RELACIONANDO 

    let mensaje = boton.getAttribute('data-titulo')

    let contenido = boton.getAttribute('data-contenido')

    document.getElementById('tituloModal').innerText = mensaje 
    document.querySelector('.modal-body').innerHTML = contenido

})


