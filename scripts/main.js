jQuery(document).ready(function ($) {

    var $grid = $('.project-card').isotope({
        itemSelector: '.card',
        filter: '*',
        masonry: {
            columnWidth: '.card',
            gutter: 10,
        }
    });

    $('.button-links').on('click','button', function(){
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue,
        });
    });
});

