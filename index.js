


function mostarAlerta(){
    const divAlerta = document.getElementById('alerta' )
    console.log(divAlerta)
    divAlerta.classList.add('mostrar')
   
}

function fecharAlerta(){
    const divAlerta = document.getElementById('alerta', 'alerte2')
    divAlerta.classList.remove('mostrar')
}

const btnMostrar = document.getElementById('mostrar')
const btnFechar = document.getElementById('fechar')

btnMostrar.addEventListener('click', mostarAlerta)
btnFechar.addEventListener('click', fecharAlerta)