$j(document).ready(function(){
    //methode pour le cacul du radius de chaques bulles
    $j.fn.calcRadius = function(){
        return $j(this).each(function(){
            var radius = (!$j(this).hasClass("bubble--less-rounded") && !$j(this).hasClass("bubble--picto"))? ($j(this).height()/2) : ($j(this).height()/4);
            var max = parseInt($j(this).children().css("padding-left")) + parseInt($j(this).children().css("paddingBottom")) + 15;
            radius = Math.min(max, radius);
            $j(this).css({borderRadius : radius})
        })
    };

    //calcul initial
    $j(".bubble").calcRadius();

    //calcul au resize de la fenetre
    $j(window).resize( $j.debounce(function(e){
        $j(".bubble").calcRadius();
    }, 200));
});