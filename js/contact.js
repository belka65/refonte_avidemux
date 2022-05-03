document.querySelector("form").addEventListener("submit" , function(e){
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const commentaire = document.querySelector("#commentaire").value;
    if(email != "" && commentaire != ""){
        document.querySelector(".response").innerHTML = `<div>merci pour votre message, nous revenons vers vous au plus vite </div>`
    }else{
        document.querySelector(".response").innerHTML = `<div>veuillez compléter les deux champs</div>`
    }
});