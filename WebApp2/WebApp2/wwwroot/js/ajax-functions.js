// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function getPage(action) {
    var url = "Engines/" + action;

    getRequest(url);
}

function getPage(action, _id) {
    var url = "Engines/" + action + "/" + _id;

    getRequestwithId(url, _id);
}

function getPagewithController(controller, action) {
    var url = "/" + controller + "/" + action;

    getRequest(url);
}

function getRequest(url) {
    $.get(url, function (response) {
        loadPage(response);
    });
}

function getRequestwithId(url, _id) {
    $.get(url, { id: _id }, function (response) {
        loadPage(response);
    });
}

function loadPage(response) {
    var node = getParsedHtml(response);
    var container = getContainer(node);

    setContainer(container);
}

function getParsedHtml(html) {
    return $.parseHTML(html);
}

function getContainer(node) {
    return $(node).filter('#app-container');
}

function setContainer(text) {
    $('#app-container').html(text);
}