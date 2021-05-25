 class contact {
    constructor(nom, prenom, email) {
        this.nom = this.checkMinLenght(nom,2);
        this.prenom =  this.checkMinLenght(prenom, 2);  
        this.email = email ? email : "";//Condition ternaire 
        //(évite, si non défini d'être inscrit "not defined" dans la console mais comme ceci: " " (vide))
    }
    get Info(){//méthode
    //    return 'Nom : ${this.nom} || Prénom : ${this.prenom} || email : ${this.email}'//CELLE-CI NE MARCHE PAS??
       return "Nom :" + this.nom + "|| Prénom :" + this.prenom +" || Email :" + this.email; //Templates strings 
    }
    displayInConsole = () => {
        console.log(this.Info)
    }
  
    checkMinLenght(target, minLength){ //methode recursive
        if (target === undefined || target.minLength < minLength){
            let newString = prompt("Veuillez entrez au moins " + minLength + " caractères.");//LA BOITE N'APPARAÎT PAS??
            return this.checkMinLength(newString, minLength);
        }
        
            return target
        
    }

 

}








