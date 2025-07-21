let tarefa = document.querySelector('#tarefa')
const adicionar = document.querySelector('#adicionar')
const quadro = document.querySelector('#quadro')

let lista = []

adicionar.addEventListener('click',add)

function add(){

    if(tarefa.value === ''){
        alert('O campo tarefa está vazio!')
        return
    }
    
    let texto = tarefa.value.trim()

    tarefa.value = ''



    item = document.createElement('li')
    const feito = document.createElement('button')
    const excluir = document.createElement('button')
    const botoes = document.createElement('div')

    feito.textContent = 'Concluida'
    excluir.textContent = 'Excluir'
    item.textContent = texto
    lista.push(item)

    botoes.appendChild(feito)
    botoes.appendChild(excluir)

    quadro.appendChild(item)
    item.appendChild(botoes)
    
    feito.addEventListener('click',concluir)
    excluir.addEventListener('click',deletar)


    function concluir(){
    const li = this.parentNode.parentNode
    li.style.textDecoration = 
        li.style.textDecoration === 'line-through' ? '' : 'line-through';
}

    function deletar(){
        const li = this.parentNode.parentNode
        li.remove()
    }

}