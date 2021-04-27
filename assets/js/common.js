---
---

$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');

    {% if site.navbar_fixed %}
    $('body').addClass('fixed-top-nav');
    $('body > header').addClass('fixed-top');
    {% else %}
    $('body > header').addClass('sticky-top');
    {% endif %}

    $('.navbar').removeClass('navbar-expand').addClass('navbar-expand-md');
    $('.navbar-collapse').addClass('text-right');
});
