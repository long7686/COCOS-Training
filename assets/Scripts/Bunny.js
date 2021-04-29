cc.Class({
    extends: cc.Component,
    ctor(){
        this.firstPos;
    },

    properties: {
        countFrame: 0,
        jumpForce: {
            get: function() {
                return this._jumpForce
            },
            set: function(value) {
                this._jumpForce = value;
            }
        },
    },

    talk(){
        cc.log("1s")
    },

    start(){
        this.firstPos = this.node.y;
    },

    update (dt) {
        this.countFrame ++;
        if (this.countFrame <= 1/(2*dt)){
            this._jumpForce = 2;
        }
        else if (this.countFrame <= 1/dt){
            this._jumpForce = -2;
        }
        if (this.countFrame > 1/dt){
            this.node.y = this.firstPos;
            this.countFrame = 0;
            this.talk();
        }
        this.node.y += this._jumpForce;
    },
});
