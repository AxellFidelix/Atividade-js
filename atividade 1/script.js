function adicionarItem(){
    const novoItem = document.querySelector('#item').value
    const ul = document.querySelector('#lista') 
    ul.innerHTML += `<li>${novoItem}</li>`

}