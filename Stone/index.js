// Programa-Test para o Desafio Stone
// Ryan Camilo
// Classe preparada para mensagem de erro que deve ser chamada caso uma das listas esteja vazia.
class EmptyListException extends Error {
    constructor (listName) {
      super()
      this.message = `A lista '${listName}' está vazia`
    }
  }
  
  // Calculando o preço dos produtos, multiplicando a quantidade e o preço para cada vetor de dentro do array
  const calculateTotalPrice = listOfProducts => {
     
    let total = 0
    for (let i = 0; i < listOfProducts.length; i++) {
      total += listOfProducts[i].price * listOfProducts[i].quantity
    }
  
    return total
  }
  
  // Calculo total por pessoa e calculo do resto da divisão
  const calculateTotalPerPerson = (listOfProducts, listOfEmails) => {
    if (!listOfProducts.length) {
      throw new EmptyListException('produtos')
    }
  
    if (!listOfEmails.length) {
      throw new EmptyListException('emails')
    }
  
    const total = calculateTotalPrice(listOfProducts)
    const totalPerPerson = Math.floor(total / listOfEmails.length)
    const rest = total % listOfEmails.length
  
    // Criação do mapa para apresentar o email e a quantidade a ser paga
    // Distribuição do resto, para que não sobre dinheiro após a divisão
    // Adiciona 1 para cada vetor do array até que não sobre mais resto a ser distribuído
    const listOfPayment = new Map()
    listOfEmails.forEach((email, index) => {
      if (index < rest) {
        listOfPayment.set(email, totalPerPerson + 1)
      } else {
        listOfPayment.set(email, totalPerPerson)
      }
    })
  
    return listOfPayment
  } 
  
  // Teste:
  // Gera listas aleatórias, utilizando math.random de produtos, quantidade, preços e emails
  const numberOfProducts = Math.floor(Math.random() * 20)
  const numberOfEmails = Math.floor(Math.random() * 10)
  const listOfProducts = []
  const listOfEmails = []
  
  for (let i = 0; i < numberOfProducts; i++) {
    listOfProducts.push({
      name: `product-${i}`,
      price: Math.floor(Math.random() * 1000),
      quantity: Math.floor(Math.random() * 10)
    })
  }
  
  for (let i = 0; i < numberOfEmails; i++) {
    listOfEmails.push(`email-${i}@mail.com`)
  }
  
  // Função principal para o cálculo e tratamento de erros com try/catch.
  const calculator = () => {
    try {
      const listOfPayment = calculateTotalPerPerson(listOfProducts, listOfEmails)
      console.log(listOfPayment)
    } catch (error) {
      console.log(error.message)
    }
  }
  
  calculator()