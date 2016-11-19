/**
 * Created by Administrator on 2016/9/24.
 */
$(function(){

   /*转换产品*/
   function transformProduct(data){
      var product =  new Product()
      product.name=data.name;
      product.description=decodeURI(data.description)
      product.normalPrice=data.price;
      product.youhuijia=data.youhuijia;
      product.buySum=data.sum;
      product.images=[
         {small:'images/s11.jpg',big:'images/s11.jpg'},
         {small:'images/s12.jpg',big:'images/s12.jpg'},
         {small:'images/s13.jpg',big:'images/s13.jpg'}
      ]
      return product
   }

   /*转换产品列表*/
   function transformProducts(data){
      var products =[]
      for(var i=0;i<data.length;i++){
         var product = transformProduct(data[i])
         products.push(product)
      }
      return products
   }

   /*转换购物车*/
   function transformCart(data){
      var cart =  new Cart()
      cart.sum=data.sum;
      cart.allPrice=data.allprice;
      cart.products = transformProducts(data.products);
      return cart;
   }

//页面的业务逻辑
   myAjax('http://localhost/data/data.json',function(e){
      var json = JSON.parse(e);
      var product = transformProduct(json.product)
      var cart = transformCart(json.cart);

      /*使用对象中的方法属性*/
      product.bindDetaill();
      product.bindImages();

      /*使用对象中的方法属性*/
      cart.bindBasc();
      cart.bindList();

      /*绑定事件*/
      $('#btnaddcart').click(function(){
         /*购物车新增一个产品*/
         product.addToCart(cart);
         $(window).scrollTop(0);
      });


   });

   //ajax - 前面我们学习的
   function myAjax(URL,fn){
      var xhr = createXHR();	//返回了一个对象，这个对象IE6兼容。
      xhr.onreadystatechange = function(){
         if(xhr.readyState === 4){
            if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
               fn(xhr.responseText);
            }else{
               alert("错误的文件！");
            }
         }
      };
      xhr.open("get",URL,true);
      xhr.send();

      //闭包形式，因为这个函数只服务于ajax函数，所以放在里面
      function createXHR() {
         //本函数来自于《JavaScript高级程序设计 第3版》第21章
         if (typeof XMLHttpRequest != "undefined") {
            return new XMLHttpRequest();
         } else if (typeof ActiveXObject != "undefined") {
            if (typeof arguments.callee.activeXString != "string") {
               var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                      "MSXML2.XMLHttp"
                   ],
                   i, len;

               for (i = 0, len = versions.length; i < len; i++) {
                  try {
                     new ActiveXObject(versions[i]);
                     arguments.callee.activeXString = versions[i];
                     break;
                  } catch (ex) {
                     //skip
                  }
               }
            }

            return new ActiveXObject(arguments.callee.activeXString);
         } else {
            throw new Error("No XHR object available.");
         }
      }
   }
});
