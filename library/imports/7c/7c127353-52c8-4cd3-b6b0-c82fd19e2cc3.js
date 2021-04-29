"use strict";
cc._RF.push(module, '7c127NTUshM07awyC/RnizD', 'GreenBunny');
// Scripts/GreenBunny.js

"use strict";

var greenBunny = cc.Class({
    extends: require("Bunny"),

    properties: {
        green_countFrame: 0,
        scaleXValue: {
            get: function get() {
                return this._scaleXValue;
            },
            set: function set(value) {
                this._scaleXValue = value;
            }
        }
    },

    update: function update(dt) {

        this.green_countFrame++;
        if (this.green_countFrame <= 1 / (2 * dt)) {
            if (this.node.scaleX >= 0.075) {
                this.scaleXValue = 0;
            } else {
                this.scaleXValue = 0.075 * dt;
            }
        } else if (1 / (2 * dt) < this.green_countFrame <= 1 / dt) {
            if (this.node.scaleX <= 0.025) {
                this.scaleXValue = 0;
            } else {
                this.scaleXValue = -(0.075 * dt);
            }
        } else if (1 / dt < this.green_countFrame <= 2 / dt) {
            this.scaleXValue = 0;
        }

        if (this.green_countFrame > 2 / dt) {
            this.green_countFrame = 0;
            this.node.scaleX = 0.05;
        }
        this.node.scaleX += this.scaleXValue;
    }
});

cc._RF.pop();