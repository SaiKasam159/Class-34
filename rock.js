class Rock{
    constructor(x,y,width,height, image){
      var options ={ 
          isStatic: false,
          restitution: 0.4
        }
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      World.add(myWorld,this.body);
      this.width = width;
      this.height = height;
      this.image = loadImage('images/rock1.png')
    }
    display()
    {
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y,this.width, this.height);
    }
  
  
  }
  