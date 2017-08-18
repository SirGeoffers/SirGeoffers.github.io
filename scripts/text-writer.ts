///<reference path="../typings/globals/jquery/index.d.ts"/>

class TextWriter {

    $container: JQuery;
    descriptors: Array<string>;
    currentDescriptorIndex: number;
    prefix: string;
    prefixLength: number;
    suffixLength: number;

    static STATE_APPEND: number = 0;
    static STATE_REMOVE: number = 1;
    currentState: number;
    pushWait: number;
    pushWaitVariance: number;
    popWait: number;
    popWaitInital: number;
    emptyWait: number;
    fullWait: number;

    constructor($container: JQuery, descriptors: Array<string>) {

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

        let that = this;
        window.setTimeout(function() {
            that.popCharacter(true);
        }, this.fullWait);

    }

    getCurrentDescriptor() {
        return this.descriptors[this.currentDescriptorIndex];
    }

    updateContainer() {
        let suffixStr = this.getCurrentDescriptor().substring(0, this.suffixLength);
        this.$container.text(this.prefix + suffixStr);
    }

    popCharacter(initialPop: boolean = false) {
        let that = this;
        if (this.suffixLength <= 0) {
            this.suffixLength = 0;
            this.currentDescriptorIndex = (this.currentDescriptorIndex + 1) % this.descriptors.length;
            window.setTimeout(function() {
                that.pushCharacter();
            }, this.emptyWait);
        } else {
            this.suffixLength--;
            this.updateContainer();
            window.setTimeout(function() {
                that.popCharacter();
            }, initialPop ? this.popWaitInital : this.popWait);
        }
    }

    pushCharacter() {
        let that = this;
        if (this.suffixLength >= this.getCurrentDescriptor().length) {
            window.setTimeout(function() {
                that.popCharacter(true);
            }, this.fullWait);
        } else {
            this.suffixLength++;
            this.updateContainer();
            let waitTime: number = 
                this.pushWait + Math.pow(Math.floor(Math.random() * this.pushWaitVariance), 2);
            window.setTimeout(function() {
                that.pushCharacter();
            }, waitTime);
        }
    }

}