//Agora no JavaScript crie uma interação entre o botão e os inputs,  habilitando  o botão quando o input1 tiver um valor  E o input2  conter 8 ou mais caracteres .


//Bônus //


//Como bônus crie o design responsivo (celular).

const [username,password] = document.querySelectorAll('input')
const btn = document.querySelector('button')



function handleChange(){
    if(username.value && password.value.length >= 8){
        btn.classList.add('hab')
    }else{
        btn.classList.remove('hab')
    }
}

username.addEventListener('input', handleChange)
password.addEventListener('input', handleChange)