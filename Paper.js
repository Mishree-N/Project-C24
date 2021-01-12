class Paper {

    constructor (){

        //set predefined x,y and radius
        this.x=100;
        this.y=200;
        this.radius=20;

        //give options
        var paper_options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        //create body for paper
        this.body=Bodies.circle(this.x,this.y,this.radius,paper_options);

        //add body to world
        World.add(world,this.body);
    }

    //display to show
    display(){
        
        //control position
        var pos=this.body.position;

        push()

        //translate origin
        translate(pos.x,pos.y);
        //ellipseMode(RADIUS);
        ellipseMode (RADIUS); //NALINI
        //give stroke weight
        strokeWeight(2);
        //make it purple
        fill ("purple");
        //create ellipse to display
        ellipse(0,0,this.radius);

        pop ()

    }



}