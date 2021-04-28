cc.Class({
    extends: cc.Component,

    properties: {
        countFrame: 0,
        jumpForce: {
            get: function() {
                return this._jumpForce
            },
            set: function(value) {
                this._jumpForce = value;
            }
        }
    },

    talk(){
        cc.log("1s")
    },
    update (dt) {
        this.countFrame ++;
        if (this.countFrame <= 1/(2*dt)){
            this.jumpForce = 2;
        }
        else if (1/(2*dt) < this.countFrame <= 1/dt){
            this.jumpForce = -2;
            if (this.node.y <-200){
                this.node.y = -200
            }
        }
        if (this.countFrame > 1/dt){
            this.countFrame = 0;
            this.talk();
        }
        this.node.y += this.jumpForce;
    },
});
