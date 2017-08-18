///<reference path="../typings/globals/jquery/index.d.ts"/>

function init() {

    let $textWriterContainer: JQuery = $('#text-writer');
    let descriptors: Array<string> = [
        'a Computer Scientist',
        'a Gamer',
        'a Student',
        'a Dinosaur'
    ]
    let textWriter = new TextWriter($textWriterContainer, descriptors);

}