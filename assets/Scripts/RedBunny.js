var RedBunny = cc.Class({
    extends: require("Bunny"),

    properties:{
        red_countFrame: 0,
        skewVal:{
            get: function(){
                return this._skewVal;
            },
            set: function(value){
                this._skewVal = value;
            }
        }
    },

    update(dt){
        this.red_countFrame++;
        if (this.red_countFrame <= 1/(3*dt)){
            this.skewVal = 20 * (3*dt)
            if (this.node.skewX > 20){
                this.node.skewX = 20;
            }
        }
        else if (this.red_countFrame <= 1/dt){
            this.skewVal = -(40 * 3 * dt) / 2
            if (this.node.skewX < -20){
                this.node.skewX = -20;
            }
        }
        else if (this.red_countFrame <= 1.5/dt){
            this.skewVal = 20 * (2 * dt);
        }
        else if (this.red_countFrame <= 2.5/dt){
            this.skewVal = 0
        }
        if (this.red_countFrame > 2.5/dt){
            this.red_countFrame = 0
        }
        this.node.skewX += this.skewVal;
    }
})