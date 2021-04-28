var BrownBunny = cc.Class({
    extends: require("Bunny"),

    properties:{
        brown_countFrame: 0,
    },

    update(dt){
        this.brown_countFrame++;
        if (this.brown_countFrame <= 1/dt){
            var angle = 180 * dt;
        }
        else if(1/dt < this.brown_countFrame <= 4/dt){
            var angle = 0;
        }
        if(this.brown_countFrame > 4/dt){
            this.brown_countFrame = 0;
        }
        this.node.angle += angle;
    }
})