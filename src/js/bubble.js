$j(document).ready(function(){
    //methode pour le cacul du radius de chaques bulles
    $j.fn.calcRadius = function(){
        return $j(this).each(function(){
            var radius = ($j(this).hasClass("bubble--rounded"))? ($j(this).height()/2) : ($j(this).height()/4);
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