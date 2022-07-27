const $btnSignIn = document.querySelector('.sign-in-btn'),
    $btnSignUp = document.querySelector('.sign-up-btn'),
    $signUp = document.querySelector('.sign-up'),
    $singIn = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $singIn.classList.toggle('active');
        $signUp.classList.toggle('active');
    }
});
class Users {
    constructor(usermail,userpassword,permission) {
        this.usermail = usermail;
        this.userpassword = userpassword;
        this.permission = permission;
        
        if (this.permission == 'Usuario'){
            this.carrito = []
        }
        
    }
}

let userEmailReg = document.getElementById('email-registro');
let userPassReg = document.getElementById('password-registro');
let formRegistro = document.getElementById('form-registro');

let logUserEmail = document.getElementById('email-login');
let logUserPass = document.getElementById('password-login');
let formLogin = document.getElementById('form-login');


let usuarios = [];
const userAdmin = new Users('admin@demo.com',123,'Admin'); 
usuarios.push(userAdmin);

if(localStorage.getItem('ListaUsuarios')){
    usuarios = JSON.parse(localStorage.getItem('ListaUsuarios'))
}

formRegistro.onsubmit = ()=>{

    event.preventDefault();

    const userNuevo = new Users(userEmailReg.value,userPassReg.value,'Usuario')
    usuarios.push(userNuevo);
    localStorage.setItem('ListaUsuarios',JSON.stringify(usuarios));

}

formLogin.onsubmit = ()=>{

    event.preventDefault();

    let userN = logUserEmail.value;
    let userP = logUserPass.value;
    let userInfo = usuarios.filter((el) => el.usermail==userN && el.userpassword == userP)
    let passOk = userInfo.some((el)=> el.usermail ==userN && el.userpassword == userP)

    if (passOk && userInfo[0].permission == 'Admin'){
        setTimeout(()=>{ location.href='vistaAdmin.html'},1000);

    } else if (passOk && userInfo[0].permission == 'Usuario'){
        setTimeout(()=>{ location.href='vistatodos.html'},1000);
    } else {
        alert('error')
    }
}
