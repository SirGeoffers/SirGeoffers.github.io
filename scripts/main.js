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
}
