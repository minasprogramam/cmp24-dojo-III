//Código inicial
function avaliarPedido(tempoEntrega, qualidadeComida){
    let valorTempoEntrega;
    let valorQualidadeComida;

    if(tempoEntrega == "rapido"){
        valorTempoEntrega = 5
    }
    if (tempoEntrega == "medio"){
        valorTempoEntrega = 3
    }
    if(tempoEntrega == "ruim"){
        valorTempoEntrega = 1
    }

    if(qualidadeComida == "excelente"){
        valorQualidadeComida = 5
    }
    if (qualidadeComida == "boa"){
        valorQualidadeComida = 3
    }
    if(qualidadeComida == "pode melhorar"){
        valorQualidadeComida = 1
    }

let avaliarPedidoTotal = valorQualidadeComida + valorTempoEntrega

    if(avaliarPedidoTotal >= 8){
        console.log("Pedido excelente")
    } else if (avaliarPedidoTotal >= 5) {
        console.log("Pedido bom")
    } else {
        console.log("Pedido pode melhorar")
    }
}

avaliarPedido("rapido", "boa")

//Refatoração