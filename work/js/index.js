/**
 * Created by Administrator on 2016/9/30.
 */
var opts = {
    lines: 13, // The number of lines to draw
    length: 10, // The length of each line
    width: 2, // The line thickness
    radius: 10, // The radius of the inner circle
    corners: 0.8, // Corner roundness (0..1)
    rotate: 44, // The rotation offset
    color: '#000', // #rgb or #rrggbb
    speed: 1, // Rounds per second
    trail: 21, // Afterglow percentage
    shadow: false, // Whether to render a shadow
    hwaccel: false, // Whether to use hardware acceleration
    className: 'spinner', // The CSS class to assign to the spinner
    zIndex: 2e9, // The z-index (defaults to 2000000000)
    top: '50%', // Top position relative to parent in px
    left: '50%' // Left position relative to parent in px
};
var target = document.getElementById('movies');
var spinner = new Spinner(opts).spin(target);
function gongchang(classname,url) {
    $(classname).on("click",function () {
        $(".foot-bar-tab li").removeClass("current");
        $(classname).addClass("current");
        $("#movies").empty();
        $.ajax({
            type: "get",
            async: true,
            url: url,
            dataType: "jsonp",
            beforeSend: function () {
                //异步请求时spinner出现
                spinner.spin(target);
            },
            success:function (data) {
                //关闭spinner
                spinner.spin();
                console.log(data);
                var contTitlie=data.title;
                $(".jd-gwc-topb").text(contTitlie);
                var subOJect=data.subjects;
                for(var i=0;i<subOJect.length;i++){
                    var moviesLi=new Movie();
                    moviesLi.img=subOJect[i].images.small;
                    moviesLi.title=subOJect[i].title;
                    moviesLi.year=subOJect[i].year;
                    moviesLi.name=subOJect[i].directors[0].name;
                    moviesLi.link=subOJect[i].alt;
                    moviesLi.average=subOJect[i].rating.average;
                    moviesLi.init();
                }
            },
            error:function (e) {
                $("#movies").text("请求发生错误...");
                //关闭spinner
                spinner.spin();
                console.log(e);
            }
        });
    });
}
function gongchang1(classname,url) {
    $(classname).on("click",function () {
        console.log(url);
        $(".foot-bar-tab li").removeClass("current");
        $(classname).addClass("current");
        $("#movies").empty();
        $.ajax({
            type: "get",
            async: true,
            url: url,
            dataType: "jsonp",
            beforeSend: function () {
                //异步请求时spinner出现
                spinner.spin(target);
            },
            success:function (data) {
                console.log(data);
                spinner.spin();
                var contTitlie=data.title;
                $(".jd-gwc-topb").text(contTitlie);
                var subOJect=data.subjects;
                for(var i=0;i<subOJect.length;i++){
                    var moviesLi=new Movie();
                    moviesLi.img=subOJect[i].subject.images.small;
                    moviesLi.title=subOJect[i].subject.title;
                    moviesLi.year=subOJect[i].subject.year;
                    moviesLi.name=subOJect[i].subject.directors[0].name;
                    moviesLi.link=subOJect[i].subject.alt;
                    moviesLi.average=subOJect[i].subject.rating.average;
                    moviesLi.init();
                }
            },
            error:function (e) {
                $("#movies").text("请求发生错误...");
                spinner.spin();
                console.log(e);
            }
        });
    });
}
function gongchang2(url) {
        console.log(url);
    $(".pushButton1").addClass("current");
        $("#movies").empty();
        $.ajax({
            type: "get",
            async: true,
            url: url,
            dataType: "jsonp",
            beforeSend: function () {
                //异步请求时spinner出现
                spinner.spin(target);
            },
            success:function (data) {
                spinner.spin();
                console.log(data);
                var contTitlie=data.title;
                $(".jd-gwc-topb").text(contTitlie);
                var subOJect=data.subjects;
                for(var i=0;i<subOJect.length;i++){
                    var moviesLi=new Movie();
                    moviesLi.img=subOJect[i].images.small;
                    moviesLi.title=subOJect[i].title;
                    moviesLi.year=subOJect[i].year;
                    moviesLi.name=subOJect[i].directors[0].name;
                    moviesLi.link=subOJect[i].alt;
                    moviesLi.average=subOJect[i].rating.average;
                    moviesLi.init();
                }
            },
            error:function (e) {
                $("#movies").text("请求发生错误...");
                spinner.spin();
                console.log(e);
            }
        });
}
gongchang(".pushButton1","https://api.douban.com/v2/movie/in_theaters");
gongchang(".pushButton2","https://api.douban.com/v2/movie/coming_soon");
gongchang(".pushButton3","https://api.douban.com/v2/movie/top250");
gongchang1(".pushButton4","https://api.douban.com/v2/movie/us_box");
gongchang2("https://api.douban.com/v2/movie/in_theaters","active");
