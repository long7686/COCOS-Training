(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/Bunny.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '8cbdaJYrs9Iu5SxikOhhhFq', 'Bunny', __filename);
// Scripts/Bunny.js

"use strict";

cc.Class({
    extends: cc.Component,
    ctor: function ctor() {
        this.firstPos;
    },


    properties: {
        countFrame: 0,
        jumpForce: {
            get: function get() {
                return this._jumpForce;
            },
            set: function set(value) {
                this._jumpForce = value;
            }
        }
    },

    talk: function talk() {
        cc.log("1s");
    },
    start: function start() {
        this.firstPos = this.node.y;
    },
    update: function update(dt) {
        this.countFrame++;
        if (this.countFrame <= 1 / (2 * dt)) {
            this._jumpForce = 2;
        } else if (this.countFrame <= 1 / dt) {
            this._jumpForce = -2;
        }
        if (this.countFrame > 1 / dt) {
            this.node.y = this.firstPos;
            this.countFrame = 0;
            this.talk();
        }
        this.node.y += this._jumpForce;
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
        //# sourceMappingURL=Bunny.js.map
        