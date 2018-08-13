import DsSmoothScroll from './ds-smooth-scroll';

let dsScroll = new DsSmoothScroll(
    "a",
    {
        easing: "easeOutQuint",
        ignore: ".ignore",
        posFix: 60,
        blank: true,
    }
);

dsScroll.ScrollEnd = function(){
    console.log("ScrollEnd")
};
