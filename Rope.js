class Rope{

    constructor(bodyA,pointB){


var options = {


bodyA:bodyA,
pointB:pointB,

'length' : 10,

'stiffness':0.01



}

this.pointB = pointB;

this.rope = Constraint.create(options)





World.add(world,this.rope)



    }

attach(body){

this.rope.bodyA=body


}

fly(){


    this.rope.body= null
}
display(){

if(this.rope.body){
var pointA = this.rope.bodyA.position
var pointB = this.pointB

line(pointA.x,pointA.y,pointB.x,pointB.y)

}


}





}