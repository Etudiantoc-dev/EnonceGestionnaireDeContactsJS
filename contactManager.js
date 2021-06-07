class contactManager {
    conductor (Contact,nom,prenom,email) {
        this.contact = Contact;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;

    }
    
    displayMenu  (){
       
        
         
      do{
          var menu= Number(prompt(" 1 - Lister les  contacts\n 2 - Ajouter un nouveau contact \n 3 - Modifier un contact existant \n 4 - Supprimer un contact \n 5 - Quitter le gestionnaire de contacts"));
     
  
      }while(menu<5);

}}
let menu = new contactManager();
menu.displayMenu();





