
$(function () {

    var index = 0;
    var timer = null;

    //0.调用显示 和隐藏内容
    ShowAndHideEle();

    //1.监听点击事件
    $('.gps li').on('click',function () {

        // 1.0 获取对应的索引值
        index = $(this).index();

        // 1.1 替换 样式
        $(this).addClass('current').siblings().removeClass('current');

        // 1.2 让index对应的屏显示
        $('section').eq(index).show().siblings('section').hide();



        // 1.3 调用显示 和隐藏内容
        ShowAndHideEle();

        // 1.4 处理落空类
        setTimeout(function () {
            $('section').eq(index).removeClass('current').siblings('section').addClass('current');
        },10)
    });

    //2.监听鼠标滚轮滑动事件
    $(window).mousewheel(function (event,delta) {

        clearTimeout(timer);

        //使用一次性定时器 控制速度
        timer = setTimeout(function () {

            //delta的值：1向上 -1向下
            index -= delta;

            //设置临界值
            if(index > $('.gps li').length-1){
                index = $('.gps li').length-1;
            }
            else if(index<0){
                index = 0;
            }

            //替换 样式
            $('.gps li').eq(index).addClass('current').siblings().removeClass('current');

            // //让index对应的屏显示
            $('section').eq(index).show().siblings('section').hide();

            //调用显示 和隐藏内容
            ShowAndHideEle();

            // 1.4 处理落空类
            setTimeout(function () {
                $('section').eq(index).removeClass('current').siblings('section').addClass('current');
            },10)

        },400)
    });

    //3.封装 显示和隐藏内容
    function ShowAndHideEle() {
        if(index == 0){
            $('.left_logo').hide();
            $('.scroll').show();
        }
        else{
            $('.left_logo').show();
            $('.scroll').hide();
        }
    }

});


