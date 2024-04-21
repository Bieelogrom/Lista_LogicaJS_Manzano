function vinteCinco(){
    window.location.href = "Views/25AB.html"
}

function vinteCinco_7A(){
    let temperatura_celcius = parseFloat(prompt("Digite a temperatura em celsius: "))
    let temperatura_fahrenheit = (9 * temperatura_celcius + 160)/5

    alert(`temperatura em celcius: ${temperatura_celcius}\ntemperatura em fahrenheit: ${temperatura_fahrenheit}`)
}

function vinteCinco_7B(){
    let temperatura_fahrenheit = parseFloat(prompt("Digite a temperatura em fahrenheit: "))
    let temperatura_celcius = (temperatura_fahrenheit - 32)*(5/9)

    alert(`temperatura em fahrenheit: ${temperatura_fahrenheit}\ntemperatura em celcius: ${temperatura_celcius}`)
}

function vinteCinco_7C(){
    let raio = parseFloat(prompt("Digite o valor do raio:"))
    let altura = parseFloat(prompt("Digite o valor da altura:"))
    let volume = Math.PI * raio**2 * altura

    alert(`Volume = ${volume.toFixed(1)}`)
}

function vinteCinco_7D(){
    let tempo = parseFloat(prompt("Digite o tempo gasto: "))
    let velocidade = parseFloat(prompt("Digite a velocidade: "))
    let distancia = tempo * velocidade
    let litros_usados = distancia / 12

    alert(`Velocidade média : ${velocidade}\nTempo gasto : ${tempo}\nDistancia percorrida : ${distancia}\nLitros usados : ${litros_usados}`)
}

function vinteCinco_7E(){
    let valor = parseFloat(prompt("Digite o valor: "))
    let taxa = parseFloat(prompt("Digite a taxa: "))
    let tempo = parseFloat(prompt("Digite o tempo: "))
    let prestacao = valor + (valor * taxa/100) * tempo
    alert(`Você deve pagar : ${prestacao}R$`)
}

function vinteCinco_7F(){
    let A = prompt("Digite o valor de A: ")
    let B = prompt("Digite o valor de B: ")

    let temp = A
    A = B
    B = temp

    alert(`Valores trocados!\nA = ${A} B = ${B}`)

}

function vinteCinco_7G(){
    let A = parseInt(prompt("Digite o valor de A: "))
    let B = parseInt(prompt("Digite o valor de B: "))
    let C = parseInt(prompt("Digite o valor de C: "))
    let D = parseInt(prompt("Digite o valor de D: "))

    alert(`Soma de A com B: ${A + B}\nSoma de A com C: ${A + C}\nSoma de A com D: ${A + D}\nMultiplicação de A com B: ${A * B}\nMultiplicação de A com C: ${A * C}\nMultiplicação de A com D: ${A * D}`)
    
    alert(`Soma de B com A: ${B + A}\nSoma de B com C: ${B + C}\nSoma de B com D: ${B + D}\nMultiplicação de B com A: ${B * A}\nMultiplicação de B com C: ${B * C}\nMultiplicação de B com D: ${B * C}`)
    
    alert(`Soma de C com A: ${C + A}\nSoma de C com B: ${C + B}\nSoma de C com D: ${C + C}\nMultiplicação de C com A: ${C * A}\nMultiplicação de C com B: ${C * B}\nMultiplicação de C com D: ${C * D}`)

    alert(`Soma de D com A: ${D + A}\nSoma de D com B: ${D + B}\nSoma de D com C: ${D + C}\nMultiplicação de D com A: ${D * A}\nMultiplicação de D com B: ${D * B}\nMultiplicação de D com C: ${D * C}`)
}

function vinteCinco_7H(){
    let comprimeto = parseFloat(prompt("Digite o valor do comprimento: "))
    let largura = parseFloat(prompt("Digite o valor da largura: "))
    let altura = parseFloat(prompt("Digite o valor da altura: "))
    let volume = comprimeto * largura * altura
    alert(`Volume = ${volume}`)
}

function vinteCinco_7I(){
    let A = parseInt(prompt("Digite o primeiro valor: "))
    let B = parseInt(prompt("Digite o segundo valor: "))
    let diferenca = A - B

    alert(`${A} - ${B} = ${diferenca}\nDiferença ao quadrado : ${diferenca*diferenca}`)
}

function vinteCinco_7J(){
    let valor_em_dolar = parseFloat(prompt("Digite o valor em dolar:"))
    let cotação_dolar = parseFloat(prompt("Digite o valor da cotação do dolar:"))

    alert(`Você tem ${valor_em_dolar * cotação_dolar}R$ convertidos do dolar.`)
}

function vinteCinco_7K(){
    let valor_em_reais = parseFloat(prompt("Digite o valor em reais:"))
    let cotação_real = parseFloat(prompt("Digite o valor da cotação do real:"))

    alert(`Você tem ${valor_em_reais * cotação_real}$ convertidos do real.`)
}

function vinteCinco_7L(){
    let A = parseInt(prompt("Digite o valor de A:"))
    let B = parseInt(prompt("Digite o valor de B:"))
    let C = parseInt(prompt("Digite o valor de B:"))
    alert(`Resultado : ${(A ** 2) + (B ** 2) + (C ** 2)}`)
}

function vinteCinco_7M(){
    let A = parseInt(prompt("Digite o valor de A:"))
    let B = parseInt(prompt("Digite o valor de B:"))
    let C = parseInt(prompt("Digite o valor de B:"))
    alert(`Resultado : ${(A + B + C) ** 2}`)
}