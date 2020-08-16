class Box{
  constructor(x,y,width,height,color){
    var options_box = {
      isStatic : false
    }

    this.body = Bodies.rectangle(x,y,width,height,options_box);
    this.width = width;
    this.height = height;
    this.color = color;

    World.add(world, this.body);
  }

  display(){
    rectMode(CENTER);
    var BoxPos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(BoxPos.x, BoxPos.y);
    rotate(angle);
    fill(this.color);
    rect(0,0,this.width,this.height);
    pop();
  }
}