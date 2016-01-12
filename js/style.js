$(function () {
  //二级导航下拉
  $(".nav_list").click(function () {
    $(this).parent().siblings().slideToggle();
  });
  //二级导航背景切换
  $(".nav_list_con li").click(function () {
    $(this).addClass("nav_select").siblings().removeClass("nav_select");
    $(this).parent().slideUp();
  });
  //保险各类选择
  $(".pro_kide ul li").click(function () {
    $(this).addClass("select_kide").siblings().removeClass("select_kide");
  });
  //保险流程
  $(".insur_flow ul li h3").click(function () {
    $(this).siblings("p").slideToggle();
    $(this).parent().toggleClass("select_flow");
  });
  //
  $('.write_info dt').click(function () {
    $(this).find('span').toggleClass('active');
    $(this).next('dd').slideToggle();
  });
  //保险产品
  $(".insur_product ul li p").click(function () {
    $(this).parents("li").addClass("select_arrow").siblings().removeClass("select_arrow");
  });
  // 我的订单nav tab切换
  $('.order_nav li').click(function () {
    $(this).addClass('active2').siblings().removeClass('active2');
  });
  // 关闭弹层
  $('.mask p i,.mask_btn').click(function () {
    $('.mask').hide();
  });
  //弹层高
    //获取高度
    var docH = $(document).height();
    $(".mask").height(docH);
  //同意声明
  $(".statement span i").click(function () {
    $(this).toggleClass("select_agren");
  });
  //支付方式
  $('.pay_mode01 li em').click(function(){
    if ($(this).hasClass("select_card")){
      $(this).removeClass("select_card");
    } else {
      $(this).addClass("select_card").parent().siblings().children("em").removeClass("select_card");
    }
  });
});