function mostra(){
    let x = document.getElementById("password");
    if(x.type === "password"){//se il tipo si quello che sta dentro x è password -> cambio il tipo in testo
        x.type = "text";
    }else{
        x.type = "password";//altrimenti se è testo cambio il tipo in password
    }
}
function valida(){

    let pas = document.getElementById("password").value;
    

    let check1= /[A-Z]/;
    if(check1.test(pas)){
        let x = document.getElementById("paragrafoPass");
        x.innerHTML="contiene almeno una lettera maiuscola";
        x.style.color = '#00FF00';
        

    }else{
        let x = document.getElementById("paragrafoPass");
        x.innerHTML="contiene almeno una lettera maiuscola";
        x.style.color = '#FF0000';
        
    }

    let check2 = /[!?@_]/;
    if(check2.test(pas)){
        let x = document.getElementById("carattereSpeciale");
        x.innerHTML = "hai inserito un carattere speciale ";
        x.style.color = '#00FF00'
    }else{
        let x = document.getElementById("carattereSpeciale");
        x.innerHTML = "Inserire un carattere speciale tra: ! ? @ _";
        x.style.color = '#FF0000';
    }

    
    if(pas.length >= 8){
        let x = document.getElementById("lunghezzaPass");
        x.innerHTML = "ha almeno almeno 8 caratteri";
        x.style.color = '#00FF00';
    }else{
        let x = document.getElementById("lunghezzaPass");
        x.innerHTML= "deve avere almeno 8 caratteri";
        x.style.color = '#FF0000';
    }
    let x = document.getElementById("password");
    if(check1.test(pas) && check2.test(pas) && pas.length >= 8){
        document.getElementById("password").style.backgroundColor = '#00FF00';
    }else{
        document.getElementById("password").style.backgroundColor = '#FF0000';
    }
    
   
    
}
// let d = new Date();
// let g = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate();
// let data = document.getElementById("calendario");
// data.setAttribute('max',g);

function rosso(){
    let parola1 = document.getElementById("nome").value;
    let parola2 = document.getElementById("cognome").value;
    
    
    if(parola1.length > 1 ){
        let x = document.getElementById("nome");
        x.style.backgroundColor ='#00FF00';
    }else{
        let x = document.getElementById("nome");
        x.style.backgroundColor ='#FF0000';
    }

    
    if(parola2.length > 1 ){
        let x = document.getElementById("cognome");
        x.style.backgroundColor ='#00FF00';
    }else{
        let x = document.getElementById("cognome");
        x.style.backgroundColor ='#FF0000';
    }

    
}

function iscrizioneEff(){
    if(document.getElementById("nome").value != "" && document.getElementById("cognome").value!= "" && document.getElementById("password").value!= "" 
    && document.getElementById("voto").value != "" && document.getElementById("calendario").value != ""){
        document.body.innerHTML='<div><h1 class="modifica"> Iscrizione effettuata</h1><img src='+"https://media.giphy.com/media/26u4lOMA8JKSnL9Uk/giphy.gif"+'><style>body{height: 100vh;display:flex; justify-content:center; align-content:center; background: url("https://images.unsplash.com/photo-1605106715994-18d3fecffb98?q=80&w=1326&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");} .modifica{color:white; width: 100hw;;display: flex; justify-content: center;}</style></div>';
        
        
        
    }else{
        alert("compilare tutti i campi");
    }
    
}
