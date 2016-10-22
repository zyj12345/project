/*
 * 自己的JS脚步
 * @Author: iceStone
 * @Date:   2015-12-12 10:59:26
 * @Last Modified by:   iceStone
 * @Last Modified time: 2015-12-15 12:05:19
 */

'use strict';

$(function() {
  // 当文档加载完成才会执行
  /**
   * 根据屏幕宽度的变化决定轮播图片应该展示什么
   * @return {[type]} [description]
   */
  function resize() {
    // 获取屏幕宽度
    var windowWidth = $(window).width();
    // 判断屏幕属于大还是小
    var isSmallScreen = windowWidth < 768;
    // 根据大小为界面上的每一张轮播图设置背景
    // $('#main_ad > .carousel-inner > .item') // 获取到的是一个DOM数组（多个元素）
    $('#main_ad > .carousel-inner > .item').each(function(i, item) {
      // 因为拿到是DOM对象 需要转换
      var $item = $(item);
      // var imgSrc = $item.data(isSmallScreen ? 'image-xs' : 'image-lg');
      var imgSrc =
        isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');

      // 设置背景图片
      $item.css('backgroundImage', 'url("' + imgSrc + '")');
      //
      // 因为我们需要小图时 尺寸等比例变化，所以小图时我们使用img方式
      if (isSmallScreen) {
        $item.html('<img src="' + imgSrc + '" alt="" />');
      } else {
        $item.empty();
      }
    });
  }

  $(window).on('resize', resize).trigger('resize');

  // 初始化tooltips插件
  $('[data-toggle="tooltip"]').tooltip();

  /**
   * 控制标签页的标签容器宽度
   */
  var $ulContainer = $('.nav-tabs');
  // 获取所有子元素的宽度和
  var width = 30; // 因为原本ul上有padding-left
  // 遍历子元素
  $ulContainer.children().each(function(index, element) {
    // console.log(element.clientWidth);
    // console.log($(element).width());
    width += element.clientWidth;
  });
  // 此时width等于所有LI的宽度总和
  // 判断当前UL的宽度是否超出屏幕，如果超出就显示横向滚动条
  if (width > $(window).width()) {

    $ulContainer
      .css('width', width)
      .parent().css('overflow-x', 'scroll');
  }

  // a点击注册事件
  var $newTitle = $('.news-title');
  $('#news .nav-pills a').on('click', function() {
    // 获取当前点击元素
    var $this = $(this);
    // 获取对应的title值
    var title = $this.data('title');
    // 将title设置到相应的位置
    $newTitle.text(title);
  });
});
