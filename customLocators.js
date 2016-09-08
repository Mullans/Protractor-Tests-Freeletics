by.addLocator('link', function (href, parentElement) {
    parentElement = parentElement || document;
    return links = parentElement.querySelectorAll('a[href="' + href + '"]');
});
