class Customer { 
    constructor(amount) { 
     this.amount = amount; 
    } 
    viewDetails() { 
     console.log('You paid ' + this.amount + ' USD'); 
    } 
   } 
   class Overseas extends Customer { 
    viewDetails() { 
     const euros = this.amount * 0.94; 
     console.log('You paid ' + euros + ' EUR'); 
    } 
   } 
   const hanna = new Customer(350); 
   hanna.viewDetails(); 
   const hans = new Overseas(350); 
   hans.viewDetails();
   