 class contact {
    constructor(nom, prenom, email) {
        this.nom = this.checkMinLength(nom,2);
        this.prenom =  this.checkMinLength(prenom, 2);  
        // this.email = this.checkEmailFormat(email.pattern);//Condition ternaire 
        //(évite, si non défini d'être inscrit "not defined" dans la console mais comme ceci: " " (vide))
    }
    get Info(){//méthode
    //    return 'Nom : ${this.nom} || Prénom : ${this.prenom} || email : ${this.email}'//CELLE-CI NE MARCHE PAS??
       return "Nom :" + this.nom + "|| Prénom :" + this.prenom +" || Email :" + this.email; //Templates strings 
    }
    displayInConsole = () => {
        console.log(this.Info)
    }
  
    checkMinLength(target, minLength){ //methode recursive
        if (target === undefined || target.length < minLength){
            let newString = prompt("Veuillez entrez au moins " + minLength + " caractères.");//LA BOITE N'APPARAÎT PAS??
            return this.checkMinLength(newString, minLength);
        }
        
            return target
        
    }
    // checkEmailFormat(email){
    
      
    //     if (email === undefined || email.pattern !=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/){
    //         let newEmail = prompt("veuillez entrer un format d' " + email +"  valide");
    //         return this.checkEmailFormat(newEmail,email)
    //     }
    //     return email

    // }

}









