class enemy extends Baseclass {
    constructor(x, y){
      super(x,y,50,50);
      this.image = loadImage("enemy.jpg");
      
    
    }
  
   display(){
     super.display();
      image("enemy.jpg",200,300,40,40);
      
     show();
     }
     
   }
  
  Show(){
   this.body.position(random(1,6));

  }
  
  