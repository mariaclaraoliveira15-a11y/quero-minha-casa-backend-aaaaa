
function lutar(){
    const classe = document.getElementById('classe').value;
    const arma = document.getElementById('arma').value.trim() ;
    const log = document.getElementById('log');
    
    if(!arma){
    log.innerHTML= "Você esqueceu de equipar uma arma"
    }
    let dado = Math.floor(Math.random() * 20) + 1;
    let resultado= 'dado ${dado} | <strong>'{classe} </strong> com <strong${arma} </strong>;
    switch(classe){
        case "guerreiro";
        if(arma.tolowerCase()==="espada" && dado >5)
            resultado+="<span classe= 'sucesso'>SUCESSO: você decptou o monstro com um golpe de espada!</span"
    }else if (dado>15){
        resultado+="<spam> classe 'sucesso' > VITORIA: na força bruta, você o esmagou o inimigo com seu "=arma"</span>  
          } else

}
    
