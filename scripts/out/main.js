///<reference path="../typings/globals/jquery/index.d.ts"/>
function init() {
    // Text Writer
    var $textWriterContainer = $('#text-writer');
    var descriptors = [
        'a Computer Scientist',
        'a Gamer',
        'a Student',
        'a Dinosaur'
    ];
    var textWriter = new TextWriter($textWriterContainer, descriptors);
    // External Links
    var $externalLinksContainer = $('#external-links');
    var externalLinks = [
        new ExternalLinks.Link('Github', 'https://github.com/sirgeoffers', '#f62800'),
        new ExternalLinks.Link('LinkedIn', 'https://github.com/sirgeoffers', '#00f652'),
        new ExternalLinks.Link('Email', 'mailto:jcb6017@rit.edu?subject=Hey, Jeff!', '#00c0f6')
    ];
    var externalLinksDisplay = new ExternalLinks.Display($externalLinksContainer, externalLinks);
    // Projects
    var $projectsContainer = $('#projects');
    var projects = [
        new Project('One Stop Dashboard', 'projects/osd/osd-animated.gif', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit fermentum mauris, vitae finibus quam rutrum id. Phasellus molestie egestas erat sed tempus. Suspendisse non velit et justo egestas interdum. Vestibulum euismod est at fermentum maximus. Maecenas scelerisque nulla libero, a porta nulla congue at. Nullam a ante vel sapien sodales hendrerit. Nulla sed convallis urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in ante libero. Aliquam elit odio, feugiat eu dapibus vel, scelerisque sit amet orci. Ut porttitor tempor augue, in lobortis lectus tristique id. In non accumsan justo, eget blandit eros. Mauris nec luctus orci, vitae tristique sapien.'),
        new Project('Project 2', 'projects/osd/osd-animated.gif', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit fermentum mauris, vitae finibus quam rutrum id. Phasellus molestie egestas erat sed tempus. Suspendisse non velit et justo egestas interdum. Vestibulum euismod est at fermentum maximus. Maecenas scelerisque nulla libero, a porta nulla congue at. Nullam a ante vel sapien sodales hendrerit. Nulla sed convallis urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in ante libero. Aliquam elit odio, feugiat eu dapibus vel, scelerisque sit amet orci. Ut porttitor tempor augue, in lobortis lectus tristique id. In non accumsan justo, eget blandit eros. Mauris nec luctus orci, vitae tristique sapien.'),
        new Project('Project 3', 'projects/osd/osd-animated.gif', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit fermentum mauris, vitae finibus quam rutrum id. Phasellus molestie egestas erat sed tempus. Suspendisse non velit et justo egestas interdum. Vestibulum euismod est at fermentum maximus. Maecenas scelerisque nulla libero, a porta nulla congue at. Nullam a ante vel sapien sodales hendrerit. Nulla sed convallis urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in ante libero. Aliquam elit odio, feugiat eu dapibus vel, scelerisque sit amet orci. Ut porttitor tempor augue, in lobortis lectus tristique id. In non accumsan justo, eget blandit eros. Mauris nec luctus orci, vitae tristique sapien.')
    ];
    var portfolio = new Portfolio($projectsContainer, projects);
}
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
///<reference path="../typings/globals/jquery/index.d.ts"/>
var ExternalLinks;
///<reference path="../typings/globals/jquery/index.d.ts"/>
(function (ExternalLinks) {
    var Display = (function () {
        function Display($container, links) {
            var _loop_1 = function (link) {
                $container.append(link.toHtml());
                var $el = $('#el-' + link.name);
                $el.hover(function () {
                    $(this).css('color', link.color);
                    $(this).css('border-color', link.color);
                }, function () {
                    $(this).css('color', '');
                    $(this).css('border-color', '');
                });
            };
            for (var _i = 0, links_1 = links; _i < links_1.length; _i++) {
                var link = links_1[_i];
                _loop_1(link);
            }
        }
        return Display;
    }());
    ExternalLinks.Display = Display;
    var Link = (function () {
        function Link(name, url, color) {
            this.name = name;
            this.url = url;
            this.color = color;
        }
        Link.prototype.toHtml = function () {
            return '<a id="el-' + this.name + '" class="button" href="' + this.url + '">' + this.name + '</a>';
        };
        return Link;
    }());
    ExternalLinks.Link = Link;
})(ExternalLinks || (ExternalLinks = {}));
///<reference path="../typings/index.d.ts"/>
var Portfolio = (function () {
    function Portfolio($container, projects) {
        for (var _i = 0, projects_1 = projects; _i < projects_1.length; _i++) {
            var project = projects_1[_i];
            var projectStr = '<hr>';
            projectStr += '<div class="project">';
            projectStr += '<img src="./images/' + project.imagePath + '"></img>';
            projectStr += '<div class="name">' + project.name + '</div>';
            projectStr += '<div class="description">' + project.description + '</div>';
            $container.append(projectStr);
        }
    }
    return Portfolio;
}());
var Project = (function () {
    function Project(name, imagePath, description) {
        this.name = name;
        this.imagePath = imagePath;
        this.description = description;
    }
    return Project;
}());
