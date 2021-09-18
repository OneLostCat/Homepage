function yiXuan(th) {
    if ($(th).is('.this') == 0) {
        $(".cai").removeClass("this");
        $(th).removeClass("xuan");
        $(th).addClass("this");
    }
}
function xuanZe(th, bl) {
    if (bl == 1) {
        if ($(th).is('.this') == 0) {
            $(th).addClass("xuan");
        }
    }
    else if (bl == 0) {
        if ($(th).is('.this') == 0) {
            $(th).removeClass("xuan");
        }
    }
}
function wind() {
    var h = $(window).height();
    var w = $(window).width();
    $(".h1Text").css({
        "margin-top": (h - $(".h1Text").outerHeight()) / 2-80
    });
    $(".jieshao2").css({
        top: (h - $(".jieshao2").outerHeight()) / 2,
        left: (w - $(".jieshao2").outerWidth()) / 2
    });
    $(".caiBox").css({
        "margin-left": ($(".caidan").width() - $(".caiBox").outerWidth()) / 2,
        "margin-right": ($(".caidan").width() - $(".caiBox").outerWidth()) / 2
    });
    $(".jieshao2").css({
        top: (h - $(".jieshao2").outerHeight()) / 2,
        left: (w - $(".jieshao2").outerWidth()) / 2
    });
    $(".jieZongBox").css({
        "margin-top" : (h - $(".jieZongBox").outerHeight()) / 2
    });
}
function fanYe() {
    var sol = $(window).scrollTop();
    var sol_ = $(window).scrollTop() + $(window).height();
    if (sol <= $(".h1Box").height() * 0.6) {
        yiXuan("#cai1");
        return;
    }
    if (sol_ >= $(document).height() - $(".h1Box").height() * 0.6) {
        yiXuan("#cai3");
        return;
    }
    if ($(".jieZongBox").height() <= 448) {
        if (sol < $(".h1Box").height() + $(".jieshaoBox").height() * 0.6 && sol_ > $(".h1Box").height() + $(".jieshaoBox").height() * 0.4) {
            yiXuan("#cai2");
            return;
        }
    }
    else {
        if (sol <= $(".h1Box").height() + $(".jieZongBox").height() * 0.6 && sol_ >= $(".h1Box").height() + $(".jieZongBox").height() * 0.4) {
            yiXuan("#cai2");
            return;
        }
    }
}
