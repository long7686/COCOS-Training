(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/BrownBunny.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9b535RZ8mdD6bzD5bMJx0MI', 'BrownBunny', __filename);
// Scripts/BrownBunny.js

"use strict";

var BrownBunny = cc.Class({
    extends: require("Bunny"),

    properties: {
        brown_countFrame: 0
    },

    update: function update(dt) {
        this.brown_countFrame++;
        if (this.brown_countFrame <= 1 / dt) {
            var angle = 180 * dt;
        } else if (this.brown_countFrame <= 4 / dt) {
            this.node.angle = Math.round(this.node.angle / 180) * 180;
            var angle = 0;
        }
        if (this.brown_countFrame > 4 / dt) {
            this.brown_countFrame = 0;
            var angle = 180 * dt;
        }
        this.node.angle += angle;
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
        //# sourceMappingURL=BrownBunny.js.map
        