///<reference path="../typings/globals/jquery/index.d.ts"/>
var TextWriter = (function () {
    function TextWriter($container, descriptors) {
        this.$container = $container;
        this.descriptors = descriptors;
        this.currentDescriptorIndex = 0;
        this.prefix = "and I am ";
        this.prefixLength = this.prefix.length;
        this.suffixLength = this.getCurrentDescriptor().length;
        this.currentState = TextWriter.STATE_REMOVE;
        this.pushWait = 100;
        this.pushWaitVariance = 20;
        this.popWait = 40;
        this.popWaitInital = 300;
        this.emptyWait = 1000;
        this.fullWait = 2000;
        this.updateContainer();
        var that = this;
        window.setTimeout(function () {
            that.popCharacter(true);
        }, this.fullWait);
    }
    TextWriter.prototype.getCurrentDescriptor = function () {
        return this.descriptors[this.currentDescriptorIndex];
    };
    TextWriter.prototype.updateContainer = function () {
        var suffixStr = this.getCurrentDescriptor().substring(0, this.suffixLength);
        this.$container.text(this.prefix + suffixStr);
    };
    TextWriter.prototype.popCharacter = function (initialPop) {
        if (initialPop === void 0) { initialPop = false; }
        var that = this;
        if (this.suffixLength <= 0) {
            this.suffixLength = 0;
            this.currentDescriptorIndex = (this.currentDescriptorIndex + 1) % this.descriptors.length;
            window.setTimeout(function () {
                that.pushCharacter();
            }, this.emptyWait);
        }
        else {
            this.suffixLength--;
            this.updateContainer();
            window.setTimeout(function () {
                that.popCharacter();
            }, initialPop ? this.popWaitInital : this.popWait);
        }
    };
    TextWriter.prototype.pushCharacter = function () {
        var that = this;
        if (this.suffixLength >= this.getCurrentDescriptor().length) {
            window.setTimeout(function () {
                that.popCharacter(true);
            }, this.fullWait);
        }
        else {
            this.suffixLength++;
            this.updateContainer();
            var waitTime = this.pushWait + Math.pow(Math.floor(Math.random() * this.pushWaitVariance), 2);
            window.setTimeout(function () {
                that.pushCharacter();
            }, waitTime);
        }
    };
    TextWriter.STATE_APPEND = 0;
    TextWriter.STATE_REMOVE = 1;
    return TextWriter;
}());
