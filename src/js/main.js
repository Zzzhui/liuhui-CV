$(document).ready(function() {
    var cn = ['个人信息', '教育背景', '校园经历', '擅长技术', '相关经历', '联系方式'];
    $('.section').addClass('initing');
    $('#pagepiling').fullpage({
        loopBottom: true,
        navigation: {
            'position': 'left',
            'tooltips':  cn,
        },
        easing: '',
        menu: '#lang-panel',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'，'page7'],
        scrollOverflow: true,
        verticalCentered: true,
        onLeave: function(index, nextIndex, direction) {
            var $pages = $('.section');
            for (var i = 0; i < $pages.length; ++i) {
                if (i + 1 !== nextIndex) {
                    $($pages[i]).addClass('leaving');
                } else {
                    $($pages[i]).removeClass('leaving');
                }
            }
        }
    });
    $('.initing').removeClass('initing');

    $('.skill span').each(function(index,item){
        $('.skill span').eq(index).width($(this).data('width')*0.01*$(this).parent().width());
    });
});
