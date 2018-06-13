# bubbles

bubble--rounded
Radius plus important

bubble--elevated
ajoute une légère ombre

bubble--color-orange
met le texte en orange

bubble--picto{
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    min-height: 275px;
    border-top-left-radius: 0 !important;

    svg{
        display: block;
        width: 90px;
        height: auto;
        margin:0 auto 25px;
    }
}

bubble--bg-orange{
    background-color: $orange;
    border-top-left-radius: 0 !important;

    &.bubble--transparent::after{
        background-color: $orange;
    }
}

bubble--bg-white{
    background-color: $white;
    color: $orange;

    &.bubble--transparent::after{
        background-color: $white;
    }
}

bubble--bg-blue{
    background-color: $blue;
    border-top-right-radius: 0 !important;

    &.bubble--transparent::after{
        background-color: $blue;
    }
}

bubble--transparent{
    background-color: transparent;

    &::after{
        content:"";
        z-index: 0;
        position: absolute;
        top:0;
        left: 0;
        width:100%;
        height:100%;
        opacity: 0.9;
    }

    @supports (mix-blend-mode: multiply){
        &::before{
            content:"";
            z-index: 0;
            position: absolute;
            top:0;
            left: 0;
            width:100%;
            height:100%;
            background-color: rgba($white, 0.75);
        }

        &::after{
            opacity: 1;
            mix-blend-mode: multiply;
        }
    }
}

bubble--border-orange{
    border:3px solid $orange;
}

bubble--border-white{
    border:3px solid $white;
}

bubble--corner-left{
    border-top-left-radius: 0 !important;
}

bubble--corner-right{
    border-top-right-radius: 0 !important;
}

bubble--bbloc,
bubble--bbloc-orange{
    .bubble__container{
        padding-top:calc(28px/2 + 28px + 28px/2);
        padding-left:calc(40px/2 + 28px/2);

        &::before{
            content:"";
            position: absolute;
            top:12px;
            left: 12px;
            width:40px;
            height: 30px;
            background-image: url("../svg/b-bloc.svg");
            background-repeat: no-repeat;
            background-size: 100% auto;
        }
    }
}

bubble--bbloc-orange .bubble__container::before{
    background-image: url("../svg/b-bloc_orange.svg");
}