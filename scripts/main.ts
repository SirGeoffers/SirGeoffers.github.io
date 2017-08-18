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

}