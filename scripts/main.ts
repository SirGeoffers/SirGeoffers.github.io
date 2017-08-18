///<reference path="../typings/globals/jquery/index.d.ts"/>

function init() {

    // Text Writer
    let $textWriterContainer: JQuery = $('#text-writer');
    let descriptors: Array<string> = [
        'a Computer Scientist',
        'a Gamer',
        'a Student',
        'a Dinosaur'
    ]
    let textWriter = new TextWriter($textWriterContainer, descriptors);

    // External Links
    let $externalLinksContainer: JQuery = $('#external-links');
    let externalLinks: Array<ExternalLinks.Link> = [
        new ExternalLinks.Link('Github', 'https://github.com/sirgeoffers', '#f62800'),
        new ExternalLinks.Link('LinkedIn', 'https://github.com/sirgeoffers', '#00f652'),
        new ExternalLinks.Link('Email', 'mailto:jcb6017@rit.edu?subject=Hey, Jeff!', '#00c0f6')
    ];
    let externalLinksDisplay = new ExternalLinks.Display($externalLinksContainer, externalLinks);

    // Projects
    let $projectsContainer: JQuery = $('#projects');
    let projects: Array<Project> =  [
        new Project('One Stop Dashboard', 'projects/osd/tree.gif', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit fermentum mauris, vitae finibus quam rutrum id. Phasellus molestie egestas erat sed tempus. Suspendisse non velit et justo egestas interdum. Vestibulum euismod est at fermentum maximus. Maecenas scelerisque nulla libero, a porta nulla congue at. Nullam a ante vel sapien sodales hendrerit. Nulla sed convallis urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in ante libero. Aliquam elit odio, feugiat eu dapibus vel, scelerisque sit amet orci. Ut porttitor tempor augue, in lobortis lectus tristique id. In non accumsan justo, eget blandit eros. Mauris nec luctus orci, vitae tristique sapien.'),
        new Project('Project 2', 'projects/osd/tree.gif', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit fermentum mauris, vitae finibus quam rutrum id. Phasellus molestie egestas erat sed tempus. Suspendisse non velit et justo egestas interdum. Vestibulum euismod est at fermentum maximus. Maecenas scelerisque nulla libero, a porta nulla congue at. Nullam a ante vel sapien sodales hendrerit. Nulla sed convallis urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in ante libero. Aliquam elit odio, feugiat eu dapibus vel, scelerisque sit amet orci. Ut porttitor tempor augue, in lobortis lectus tristique id. In non accumsan justo, eget blandit eros. Mauris nec luctus orci, vitae tristique sapien.'),
        new Project('Project 3', 'projects/osd/tree.gif', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit fermentum mauris, vitae finibus quam rutrum id. Phasellus molestie egestas erat sed tempus. Suspendisse non velit et justo egestas interdum. Vestibulum euismod est at fermentum maximus. Maecenas scelerisque nulla libero, a porta nulla congue at. Nullam a ante vel sapien sodales hendrerit. Nulla sed convallis urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in ante libero. Aliquam elit odio, feugiat eu dapibus vel, scelerisque sit amet orci. Ut porttitor tempor augue, in lobortis lectus tristique id. In non accumsan justo, eget blandit eros. Mauris nec luctus orci, vitae tristique sapien.')
    ];
    let portfolio = new Portfolio($projectsContainer, projects)

}