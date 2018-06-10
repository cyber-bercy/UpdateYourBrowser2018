(function($) {
    'use strict';

    $(function() {
        // on declare le timer
        var timer=0;
        // delai 1 seconde = 1000 millisecondes
        var delai=1000;
        var searchFieldValue;
        // A chaque saisie, lancement de la requête ajax pour la liste d'autocomplétion
        $(document).on("keyup", "#search-field", function(e) {
            // on arrete le timer en cours
            if (timer !=0) {
                clearTimeout(timer);
                timer=0;
            }
            searchFieldValue = $('#search-field').val();
            var code = e.keyCode || e.which;
            if (code == 9 || code == 13) {
                $('#auto-complete-keywords-ajax').hide('slow');
            } else {
                var keyword = null;
                if (searchFieldValue !== "" && searchFieldValue.length >= 3) {
                    // on lance le timer
                    timer=setTimeout(
                        function() {
                            $.ajax({
                                url: Drupal.settings.basePath + "search/autocomplete/" + searchFieldValue,
                                type: 'GET',
                                dataType: 'json',
                                success: function(data) {
                                    $('#auto-complete-keywords-ajax').show();
                                    document.getElementById("list-auto-complete").innerHTML = "";
                                    keyword = data.output;
                                    for (var i = 0; i < keyword.length; i++) {
                                        document.getElementById('list-auto-complete').innerHTML = document.getElementById('list-auto-complete').innerHTML + "<li class='li-list-autocomplete'>" + keyword[i].title[0] + "</li>";
                                    }
                                    document.getElementById('auto-complete-keywords-ajax').style.width = document.getElementById('search-field').offsetWidth + "px";
                                }
                            });
                            // on efface le timer echu
                            timer=0;
                        },
                        delai);
                }
            }
        });

        $("#search-field").focusout(function() {
            $('#auto-complete-keywords-ajax').hide('slow');
        });

        // Si on click sur un li de la liste autocomplete, alors declenchement du submit form de recherche
        $(document).on("click", ".li-list-autocomplete", function(e) {
            var keyword = $(this).text();

            // On réinjecte le point d'interrogation (cf bug 179850).
            if (keyword.indexOf('?', -1)!==-1){
                var a_eliminer = '?';
                var keyword_propre = keyword.replace(a_eliminer,'');
                keyword = keyword_propre+' '+a_eliminer;
            }

            $('#search-field').val(keyword.substr(0, 512));
            $("#search-block-form--2").submit();
        });

        $(document).on("click", "body", function() {
            $('#auto-complete-keywords-ajax').hide();
        });
    });
})(jQuery);

window.onload = function() {
    ajuste_size_search_result_form();
};
window.resize = ajuste_size_autocomplete;

// Ajuste la hauteur du bloc formulaire
function ajuste_size_search_result_form() {
    if ((window.innerWidth > 992)) {
        if (document.getElementsByClassName('content-result')[0] && document.getElementsByClassName('text-center')[0]) {
            heigh_result_main_block = document.getElementsByClassName('content-result')[0].offsetHeight;
            height_nav_page_main_block = document.getElementsByClassName('text-center')[0].offsetHeight;
            document.getElementsByClassName('content-result-formulaire')[0].style.maxHeight = heigh_result_main_block + height_nav_page_main_block + "px";
        }
    }
}

// Ajuste la largeur du bloc autocomplete
function ajuste_size_autocomplete() {
    document.getElementById('auto-complete-keywords-ajax').style.maxWidth = document.getElementById('search-field').offsetWidth + "px";
}
;
