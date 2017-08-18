///<reference path="../typings/globals/jquery/index.d.ts"/>
function init() {
    var $textWriterContainer = $('#text-writer');
    var descriptors = [
        'a Computer Scientist',
        'a Gamer',
        'a Student',
        'a Dinosaur'
    ];
    var textWriter = new TextWriter($textWriterContainer, descriptors);
}
