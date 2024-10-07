function descuento(){
    const precio = +document.querySelector('.total').value;
    const mostrar = document.querySelector('.mostrar');
    const precioDes2 = (precio *0.25);
    const precioDes = (precio * 0.1);
    
    if(precio < 50 ){
        mostrar.textContent = 'Su total a pagar es de: ' + (precio - precioDes) + ' !!Se le hizo descuento del 10% de descuento!!'; 
    }
    else {
        mostrar.textContent = 'Su total a pagar es de: ' + (precio - precioDes2) + ' !!Se le hizo descuento del 25% de descuento!!';
    }
}