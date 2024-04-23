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

function vinteCinco_310A(){
    let a = parseInt(prompt("Digite o valor de A: "))
    let b = parseInt(prompt("Digite o valor de B: "))
    let c = parseInt(prompt("Digite o valor de C: "))
    let d = parseInt(prompt("Digite o valor de D: "))

    let p = a * c
    let s = b + d

    alert(`Produto de A com C = ${p}\nSoma de B com D = ${s}`)
}

function vinteCinco_310B(){
    let SM = parseFloat(prompt("Digite quanto você recebe por mês: "))
    let PR = parseFloat(prompt("Digite o percentual de reajuste do salário: "))

    let NS = SM + ((PR/100) * SM)

    alert(`Seu saláro mensal: ${SM}R$\nPercentual de reajuste do salário: ${PR}%\nSalário após reajuste: ${NS}R$`)
}

function vinteCinco_310C(){
    let votos_validos = parseInt(prompt("Digite a quantidade de votos válidos: "))
    let votos_nulos = parseInt(prompt("Digite a quantidade de votos válidos: "))
    let votos_brancos = parseInt(prompt("Digite a quantidade de votos válidos: "))

    let quantidade_total_votos = votos_brancos + votos_nulos + votos_validos

    alert(`Total de votos : ${quantidade_total_votos}\nVotos validos : ${(votos_validos/100) * quantidade_total_votos}%\nVotos nulos : ${(votos_nulos/100) * quantidade_total_votos}%\nVotos brancos : ${(votos_brancos / 100) * quantidade_total_votos}%`)
}

function quarentaUm_4A(){
    let valor_um = parseInt(prompt("Digite o primeiro valor: "))
    let valor_dois = parseInt(prompt("Digite o segundo valor: "))

    let resposta = (valor_um > valor_dois) ? `Maior valor = ${valor_um}\nMenor valor = ${valor_dois}\nDiferença = ${valor_um - valor_dois}` : `Maior valor = ${valor_dois}\nMenor valor = ${valor_um}\nDiferença = ${valor_dois - valor_um}`

    alert(resposta)
}

function quarentaUm_4B(){
    let valor = parseFloat(prompt("Digite o valor desejado: "))
    let resposta = (valor < 0) ? `O módulo de ${valor} é ${valor * -1}`: `O módulo de ${valor} é ${valor * -1}`
    alert(resposta)
}

function quarentaUm_4C(){
    let nota1 = parseFloat(prompt("Digite a primeira nota: "))
    let nota2 = parseFloat(prompt("Digite a segunda nota: "))
    let nota3 = parseFloat(prompt("Digite a terceira nota: "))
    let nota4 = parseFloat(prompt("Digite a quarta nota: "))
    let media = (nota1 + nota2 + nota3 + nota4) / 4
    let resposta = (media >= 5) ? `Você foi aprovado!\nMédia = ${media}` : `Você foi reprovado\nMédia = ${media}`
    alert(resposta)
}

function quarentaUm_4D(){
    let nota1 = parseFloat(prompt("Digite a primeira nota: "))
    let nota2 = parseFloat(prompt("Digite a segunda nota: "))
    let nota3 = parseFloat(prompt("Digite a terceira nota: "))
    let nota4 = parseFloat(prompt("Digite a quarta nota: "))
    let media = (nota1 + nota2 + nota3 + nota4) / 4

    if(media >= 7){
        alert(`Você foi aprovado!\nSua média final : ${media}`)
    }else{  
        let nota_exame = parseFloat(prompt("Recuperação!\nDigite a nota do exame:"))
        let nova_media = (nota_exame + media) / 2
        if(nova_media >= 5){
            alert(`Você foi aprovado no exame!\nSua média final : ${nova_media}`)
        }else{
            alert(`Você foi reprovado no exame!\nSua média final : ${nova_media}`)
        }
    }
}

function quarentaUm_4E(){
    var valorA = parseFloat(prompt("Digite o valor de A:"));
    var valorB = parseFloat(prompt("Digite o valor de B:"));
    var valorC = parseFloat(prompt("Digite o valor de C:"));

        if (valorA === 0) {
            console.log("A variável 'a' deve ser diferente de zero.");
            return;
        }
    
        var delta = valorB * valorB - 4 * valorA * valorC;

        if (delta < 0) {
            console.log("Não há raízes reais para os valores informados.");
            return;
        }
    
        var x1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
        var x2 = (-valorB - Math.sqrt(delta)) / (2 * valorA);
    
        console.log("As raízes da equação são:");
        console.log("x1 =", x1);
        console.log("x2 =", x2);
}

function quarentaUm_4F(){
    let A = parseInt(prompt("Digite o valor de A"))
    let B = parseInt(prompt("Digite o valor de B"))
    let C = parseInt(prompt("Digite o valor de C"))

    if(A > B && A > C){
        if(B > C){
            alert(`${C}, ${B}, ${A}`)
        }else{
            alert(`${B}, ${C}, ${A}`)
        }
    }else if(B > A && B > C){
        if(A > C){
            alert(`${C}, ${A}, ${B}`)
        }else{
            alert(`${A}, ${C}, ${B}`)
        }
    }else{
        if(B > A){
            alert(`${A}, ${B}, ${C}`)
        }else{
            alert(`${B}, ${A}, ${C}`)
        }
    }
}

function quarentaUm_4G(){
    let valor = parseInt(prompt("Digite o valor: "))

    if((valor % 3) == 0){
        alert(`${valor} divide por três!`)
    }else if((valor % 2) == 0){
        alert(`${valor} divide por dois!`)
    }else{
        alert(`${valor} não divide por nenhum dos dois!`)
    }
}

function quarentaUm_4H(){
    let valores = []

    for(let i = 0; i < 5; i++){
        let numero = parseInt(prompt("digite o valor: "))
        valores.push(numero)
    }

    let maior = valores[0]
    let menor = valores[0]

    for(let contador = 1; contador < valores.length; contador++){
        if(valores[contador] > maior){
            maior = valores[contador]
        }
        if(valores[contador] < menor){
            menor = valores[contador]
        }
    }

    alert(`menor valor = ${menor}\nMaior valor = ${maior}`)
  
}

function quarentaUm_4I(){
    let valor = parseInt(prompt("Digite o valor: "))

    if((valor % 2) == 0){
        alert("Valor é par")
    }else{
        alert("Valor é impar")
    }
}

function quarentaUm_4J(){
    let valor = parseInt(prompt("Digite o valor: "))
    let resposta = (valor > 1 && valor < 9) ? "O valor está na faixa permitida!" : "O valor está fora da faixa permitida!"
    alert(resposta)
}

function quarentaUm_4K(){
    let valor = parseInt(prompt("Digite o valor"))
    let resposta = (valor > 3) ? `ERRO` : `${valor}`
    alert(resposta)
}

function quarentaUm_4L(){
    let nome = prompt("Digite o nome: ")
    let sexo = prompt("Digite o seu sexo\nM - Masculino ou F - Feminino")

    if(sexo == "M" || sexo == "m"){
        alert(`Llmo Sr. ${nome}`)
    }else if(sexo == "F" || sexo == "f"){
        alert(`Llmo Sra. ${nome}`)
    }
}