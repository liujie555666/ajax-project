/**
 * Created by Administrator on 2016/9/30.
 */
function Movie() {
    this.img="";
    this.title="";
    this.year="";
    this.name="";
    this.link="";
    this.average="";
    var that=this;
    var bindDom=function () {
        var str="";
        str+='<li class="clearfix">';
        str+='<a href="'+that.link+'">';
        str+='<div class="cont_img"><img src="'+that.img+'" alt="'+that.title+'"></div>';
        str+='<div class="cont_tit">';
        str+='<h3>'+that.title+'</h3>';
        str+='<p>'+that.title+'('+that.year+')</p>';
        str+='<p>导演:'+that.name+'</p>';
        str+='</div>';
        str+='<div class="cont_average">'+that.average+'</div>';
        str+='</a>';
        str+='</li>';
        $("#movies").append($(str));
    }
    this.init=function () {
        bindDom();
    }
}
