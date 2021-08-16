const elementoLista = document.querySelector('ul')
const elementoInput = document.querySelector('input')
const elementoBotao = document.querySelector('button')
//  Trazendo a função do HTML para dentro da constante

function mostraTarefas() {
  // função para mostrar as tarefas
  elementoLista.innerHTML = ' ' // Excluir qualquer tipo de conteudo que esteja dentro da tag ul

  for (tarefa of tarefas) {
    // for para varer a constante Tarefas
    const elementoTarefa = document.createElement('li') // const para criar elemento li no HTML
    const textoTarefa = document.createTextNode(tarefa) // Const para os elementos que está dentro da cons tarefa

    const elementoLink = document.createElement('a') // const para criar tag 'a' no HTML
    const pos = tarefas.indexOf(tarefa) //pegar a posiçao do item dentro da array

    const linkText = document.createTextNode('X') // criar escrita dentro HTML
    elementoLink.appendChild(linkText) //Pegando a cons A e adicionando dentro dentra dela a escrita do HTML 'X'

    elementoLink.setAttribute('onclick', `deletaTarefa(${pos})`) // Pegando a tag 'a' é atribuindo a ação de click para função deletarTarefa(é dentro da função temos a posição do item)

    elementoTarefa.appendChild(textoTarefa) // Pegando a tag li é adicionando o texto da array de repetição
    elementoLista.appendChild(elementoTarefa) //Pegando a tag ul é adicionando o li com array dentro
    elementoTarefa.appendChild(elementoLink) //Pegando a tag li é adicionando a tag 'a' com escrita X
  }
}

const tarefas = [] //array das tarefas

function addTarefa() {
  //função para adicionar tarefa
  const textoTarefa = elementoInput.value // O que for escrito dentro do Input, vai ser atribuido para textoTarefa
  tarefas.push(textoTarefa) //Pegando a array e vai puxar o texto que foi escrito no Input
  elementoInput.value = ' ' //para excluir qualquer tipo de escrita dentro do input

  mostraTarefas() // ele chama a função de mostrar na tela
}

elementoBotao.setAttribute('onclick', 'addTarefa()') // Elemento botão é atribuido a ação do click é ele chama a função de add a tarefa

function deletaTarefa(pos) {
  //Função para deletar a tarefa
  tarefas.splice(pos, 1) //Pegar a array de tarefa, vai pegar a posiçao e vai excluir um item
  mostraTarefas() // vai cahmar a função de mostrar tarefas
}
