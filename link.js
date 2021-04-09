class Link{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 50
        }
        
        this.Link= Constraint.create(options);
        World.add(myWorld, this.Link);
    }


      display(){
        var pointA = this.Link.bodyA.position;
        var pointB = this.Link.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);   
    }   
}
