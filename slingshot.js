class Slingshot{

    //passing a body and point in the constructor
    //in order to attach bird to a point(x,y)
    constructor(bodyA,pointB){
    
        //changed the properties for the chain
        //JSON format
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
            
        }

        this.pointB= pointB;
        //created chain out of constraint class
        this.slingshot=Constraint.create(options);
        //added the chain to the main World
        World.add(world,this.slingshot);   
    
    }
fly(){
    //to replace bodyA by nothing, ie make it empty
    this.slingshot.bodyA = null;
}
 display(){
    //to display a line only when there is some body in bodyA
    //it won't be displayed when it's null
    if(this.slingshot.bodyA){
        //namespaced body A and B positions
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB;

        //to show the link between the contrained bodies A and B
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
            }
 }    
}




