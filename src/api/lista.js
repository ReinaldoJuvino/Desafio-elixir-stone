
module.exports = app => {

    const gerarDivisao = async (request,response) => {

        const itens = request.body.itens
        const emails = request.body.emails

        const valorTotal = somaItens(itens)
        console.log(valorTotal)
        let quantidadeEmails = emails.length
        if (quantidadeEmails == 0) {
            response.json( { "valorTotal": valorTotal } )
        }
        let valorIndividual = valorTotal / quantidadeEmails
        let email
        const emailsValores = {}
        for (let i = 0; i < emails.length; i++){
            valorIndividual = Math.round(valorIndividual)
            console.log(valorIndividual)
            email = emails[i]
            emailsValores[email.email] = valorIndividual
        }
        try {
            //valorIndividual = Math.floor(valorIndividual)
            if (valorIndividual * quantidadeEmails != valorTotal) {
                acrescimoIndividual = valorTotal - (valorIndividual * quantidadeEmails)
                emailsValores[email.email] = valorIndividual + acrescimoIndividual
            }
        } catch (error) {
            
        }
        return response.json(emailsValores)
    }

    const somaItens = (itens) => {
        let itensValorTotal = 0
        for (let i = 0; i < itens.length; i++){
            itensValorTotal = itensValorTotal + valorTotalPorQuantidade(itens[i])
        }
        return itensValorTotal
    }
    const valorTotalPorQuantidade = (iten) => iten.quantidade * iten.preco

    return { gerarDivisao }

}