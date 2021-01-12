//create box class
class Trash {

    //give any x,y,width and height
    constructor (x,y,width,height){

        //control width and height
        this.width = width
        this.height= height

        //give restitution option
        var trash_options = {
            isStatic : true
        }

        //create box body
        this.body = Bodies.rectangle (x, y, width, height, trash_options);
        //add box body to world
        World.add (world, this.body );
    }

    //display function to show 
    display () {

        //make pos variable to control positions
        var pos =this.body.position;
        //make rectMode center
        rectMode(CENTER);
        //color and make rectangle visible
        fill("black");
        rect(pos.x, pos.y, this.width, this.height);
        
    }
}