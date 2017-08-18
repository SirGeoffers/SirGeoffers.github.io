///<reference path="../typings/index.d.ts"/>

class Portfolio {

    constructor($container: JQuery, projects: Array<Project>) {

        for (let project of projects) {

            let projectStr = '<hr>';
            projectStr += '<div class="project">';
            projectStr += '<div class="name">' + project.name + '</div>';
            projectStr += '<img src="./images/' + project.imagePath + '"></img>';
            projectStr += '<div class="description">' + project.description + '</div>';

            $container.append(projectStr);

        }

    }

}

class Project {

    name: string;
    imagePath: string;
    description: string;

    constructor(name: string, imagePath: string, description: string) {
        this.name = name;
        this.imagePath = imagePath;
        this.description = description;
    }

}