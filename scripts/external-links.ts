///<reference path="../typings/globals/jquery/index.d.ts"/>

namespace ExternalLinks {

    export class Display {

        constructor($container: JQuery, links: Array<Link>) {
            for (let link of links) {
                $container.append(link.toHtml());
                let $el: JQuery = $('#el-' + link.name);
                $el.hover(
                    function() {
                        $(this).css('color', link.color);
                        $(this).css('border-color', link.color);
                    },
                    function() {
                        $(this).css('color', '');
                        $(this).css('border-color', '');
                    }
                );
            }
        }

    }

    export class Link {

        name: string;
        url: string;
        color: string;

        constructor(name: string, url: string, color: string) {
            this.name = name;
            this.url = url;
            this.color = color;
        }

        toHtml() {
            return '<a id="el-' + this.name + '" class="button" href="' + this.url + '">' + this.name + '</a>';
        }

    }

}

