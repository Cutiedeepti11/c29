class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        this.Slingshot = Constraint.create(options);
        World.add(world, this.Slingshot);
    }

    fly(){
        this.Slingshot.bodyA = null;
    }

    display(){
        image(this.sling1, 220,100,40,140);
        image(this.sling2,197,90,35,90);
        
        if(this.Slingshot.bodyA){
            var pointA = this.Slingshot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x-20, pointA.y, pointB.x, pointB.y);
            line(pointA.x-20,pointA.y,pointB.x+50,pointB.y);
            image(this.sling3,pointA.x-30,pointA.y-10,15,20)
        }
    }
    
}