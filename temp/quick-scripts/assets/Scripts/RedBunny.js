(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/RedBunny.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c2faep2/XhFTJqkCtMcw4tB', 'RedBunny', __filename);
// Scripts/RedBunny.js

"use strict";

var RedBunny = cc.Class({
    extends: require("Bunny"),

    properties: {
        red_countFrame: 0,
        skewVal: {
            get: function get() {
                return this._skewVal;
            },
            set: function set(value) {
                this._skewVal = value;
            }
        }
    },

    update: function update(dt) {
        this.red_countFrame++;
        if (this.red_countFrame <= 1 / (3 * dt)) {
            this.skewVal = 20 * (3 * dt);
            if (this.node.skewX > 20) {
                this.node.skewX = 20;
            }
        } else if (this.red_countFrame <= 1 / dt) {
            this.skewVal = -(40 * 3 * dt) / 2;
            if (this.node.skewX < -20) {
                this.node.skewX = -20;
            }
        } else if (this.red_countFrame <= 1.5 / dt) {
            this.skewVal = 20 * (2 * dt);
        } else if (this.red_countFrame <= 2.5 / dt) {
            this.skewVal = 0;
        }
        if (this.red_countFrame > 2.5 / dt) {
            this.red_countFrame = 0;
        }
        this.node.skewX += this.skewVal;
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=RedBunny.js.map
        