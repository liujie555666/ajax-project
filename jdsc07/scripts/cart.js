/**
 * Created by Administrator on 2016/9/24.
 */
function Cart() {
    this.products=[];
    this.sum=0;
    this.allPrice="";
}
Cart.prototype={
  bindBasc:function () {
      $(".cartsum").html(this.getSum());$("#cartprice").html(this.getAllPrice());
  },
    bindList:function () {
        var str="";
        for(var i=0;i<this.products.length;i++){
            str+='<div class="cart_box">';
            str+=' <div class="message">';
            str+='<div class="alert-close"> </div >';
            str+='<div class="list_img"><img src="'+this.products[i].images[0].small+'" class="img-responsive" alt=""/></div>';
            str+='<div class="list_desc"><h4><a href="#">'+this.products[i].name+'</a></h4>1 x<span class="actual">'+this.products[i].youhuijia+'</span></div>';
            str+='<div class="clearfix"></div></div></div>';
        }
        $(".shopping_cart").html(str);
    }
    ,cal:function () {

    },getSum:function () {
        this.sum=this.products.length
        return this.sum;
    },getAllPrice:function () {
        this.allPrice=0;
        for(var i=0;i<this.products.length;i++){
            this.allPrice+=this.products[i].groundPrice;
        }
        return this.allPrice;
    }
};