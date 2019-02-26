$("iframe").hide();
$(".call").hide();
$(".li").hide();

$(".button").click(function(){
    $("iframe").slideToggle();
});

$(".hotline").click(function(){
    $(".call").slideToggle();
});

$(".safe").click(function(){
    $(".li").slideToggle();
});