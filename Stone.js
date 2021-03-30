class Stone
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			'restitution':0.3,
			'friction': 0,
			'density':1.2
	
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.image = loadImage("Image/stone.png");
        this.image.scale=0.1

		this.body=Bodies.circle(x, y,this.r,   options)
 		World.add(world, this.body);

	}
	display()
	{
			
	
           
			
           ellipse(0,0,this.r,this.r)
           imageMode(CENTER) 
           image(this.image, this.body.position.x, this.body.position.y, 40, 40);
            

			
	}


}