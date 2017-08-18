///<reference path="../typings/globals/jquery/index.d.ts"/>
var ExternalLinks;
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
