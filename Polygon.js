class Polygon{
    constructor(x,y,diameter){
        var options_polygon = {
            isStatic : false,
            restitution : 0.8
        }

        this.body = Bodies.circle(x,y,diameter,options_polygon);
        this.size = diameter/2;

        World.add(world, this.body);
    }

    display(){
        ellipseMode(CENTER);
        var posP = this.body.position;
        fill("red");
        ellipse(posP.x, posP.y, this.size, this.size);
    }

}