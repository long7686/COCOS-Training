var greenBunny = cc.Class({
    extends: require("Bunny"),

    properties:{
        green_countFrame: 0,
        scaleXValue: {
            get: function(){
                return this._scaleXValue;
            },
            set: function(value){
                this._scaleXValue = value;
            }
        }
    },

    update(dt){
        this.green_countFrame++;
        if (this.green_countFrame <= 1/(2*dt)){
            this.scaleXValue = 0.025 * (2 * dt);
        }
        else if (1/(2*dt) < this.green_countFrame <= 1/dt){
            this.scaleXValue = -0.05 * (2 * dt);
            // cc.log("2")
        }
        else if (1/dt < this.green_countFrame <= 2/dt){
            this.scaleXValue = 0;
            cc.log(this.node.scaleX)
        }
        if (this.green_countFrame > 2/dt){
            this.green_countFrame = 0;
            this.node.scaleX = 0.05;
        }
        this.node.scaleX +=  this.scaleXValue;
    }
})