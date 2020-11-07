'use strict';

$(function () {

// sign up 
    // when click him show option type account 
    $(".seller input").on("click",function () {
        $(".storename ").addClass("storenameactive");
    });
    // when click buer disply none store name 
    $(".buyer input").on("click",function () {
        $(".storename ").removeClass("storenameactive");
        $(".username ").addClass("storenameactive");

    });
// ./ sign up 
// Setup seller
    $(".gostore").on("click",function () {
        $(".loading_setup").addClass("loading_setup_active");
        setTimeout(() => {
            window.location.href="dashstore.html"
        }, 2000);
    });
// ./ Setup seller

// Setup Users 
$(".Categories").on("click",function () {
    $(this).addClass("active-select");
    $(".btn-primary").addClass("opacity-show");
    // when finish 
    $(".btn-primary").on("click",function () {
        $(".loading_setup").addClass("loading_setup_active");
        setTimeout(() => {
            window.location.href="home.html"
        }, 2000);
    });
});
// ./ Setup Users

// home page 
    // show product for shopping cart fixed 
    $(".show-cart").on("click",function () {
        $(".sidebarcart").toggleClass("activesidebar");
        $(this).toggleClass("activebag");
    });

    // delte product 
    $(".cart .delete").on("click",function(){
        $(".cart").fadeOut(100);
    });
    // ./ shopping card 

 
// ./ home page 

// show product 

// aother products 
for (let loop = 0; loop < $(".aother-product").length; loop++) {

    $(".aother-product").eq(loop).on("click",function () {
        $(".overlay-product").toggleClass("activenow");
    });

    
}

// priceing 


$(".plusproduct").on("keyup",function () {

    let price = $(".sameprice").val(50);
    console.log(price + 2);
    
});

// When you add product to cart true 
$(".addcart").on("click",function () {
    $(".cart").addClass("fas fa-check")
    $(this).addClass("btn-primary")
    $(this).css({color:'white'})
    $(".show-cart").addClass("add-cart-rotate");
});

$(".addbuy").on("click",function () {

    $(this).html("waiting...." )
    setTimeout(() => {
        if(true) {
            $(this).html("You will Redirect now ..." )
        }
    }, 1000);

});




// ./ show product 

});


// Window for loading...
$(window).on('load',function() {
    $(".loading-auto").addClass("hiddenloading");
});