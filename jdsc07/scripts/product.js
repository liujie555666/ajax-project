/**
 * Created by Administrator on 2016/9/24.
 */
function Product() {
    this.name="";
    this.buySum="";
    this.normalPrice="";
    this.youhuijia="";
    this.description="";
    this.images=[];
}
Product.prototype={
    bindDetaill:function () {
        $("#pname").html(this.name);
        $("#buyCount").html(this.buySum);
        $("#price").html(this.normalPrice);
        $("#groupPrice").html(this.youhuijia);
        $("#description").html(this.description);

    },bindImages:function () {
        var len=this.images.length;
        var str="";
        for(var i=0;i<len;i++){
            str+="<li>";
            str+="<img class='etalage_thumb_image' src='"+this.images[i].small+"' class='img-responsive' /> "
                str+="<img class='etalage_source_image' src='"+this.images[i].big+"' class='img-responsive' /></li>";
        }
        $("#etalage").html(str);
        /*jquery插件实现的幻灯片特效*/
        $('#etalage').etalage({
            thumb_image_width: 300,
            thumb_image_height: 400,

            show_hint: true,
            click_callback: function(image_anchor, instance_id){
                alert('Callback example:\nYou clicked on an image with the anchor: "'+image_anchor+'"\n(in Etalage instance: "'+instance_id+'")');
            }
        });
        // / This is for the dropdown list example:


    },addToCart:function (cart) {
        cart.products.push(this);
        cart.bindBasc();
        cart.bindList();
    },nowToBuy:function () {
        
    }

};