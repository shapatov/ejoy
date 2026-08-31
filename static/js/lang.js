(function () {
    var STORAGE_KEY = 'ejoyLang';

    function read() {
        try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
    }

    function store(value) {
        try { localStorage.setItem(STORAGE_KEY, value); } catch (e) { }
    }

    var current = document.documentElement.lang === 'en' ? 'en' : 'bg';
    var file = location.pathname.split('/').pop() || 'index.html';

    function variant(lang) {
        var bg = file.replace(/_en\.html$/, '.html');
        return lang === 'en' ? bg.replace(/\.html$/, '_en.html') : bg;
    }

    var preferred = read();
    if ((preferred === 'bg' || preferred === 'en') && preferred !== current) {
        location.replace(variant(preferred) + location.search + location.hash);
        return;
    }

    document.addEventListener('DOMContentLoaded', function () {
        var links = document.querySelectorAll('.lang-switch a[data-lang]');
        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function () {
                store(this.getAttribute('data-lang'));
            });
        }
    });
})();
