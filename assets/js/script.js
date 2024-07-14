const mode = document.getElementById('mode_icon');

mode.addEventListener('click' , () => {
    const form = document.getElementById('login_form');
    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        return;
    } 
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon')
        form.classList.remove('dark');
    
});

const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = ''
    spans[index].style.display = 'none';
}

function nameValidate(){
    if(campos[0].value.length < 4)
    {
        setError(0);
    }
    else {
        removeError(0);
    }
}

function emailValidate(){
    if(!emailRegex.test(campos[1].value)){
        setError(1);
    }
    else {
        removeError(1);
    }
}

function mainPasswordValidate(){
    if(campos[2].value.length < 8){
        setError(2);
    }
    else {
        removeError(2);
    }

}

