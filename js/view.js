var Center = Backbone.View.extend({
    template : null,
    index : 0,
    maxNum: [2, 3, 4, 5, 4, 5],
    query: 0,

    events : {
        //"click .product .list" : "getMask"
        'click .list_left .arrow_top': 'prewImg',
        'click .list_left .arrow_bottom': 'nextImg'
    },

    /**
     * 前一张图片
     */
    prewImg: function () {
        var self = this.$el;
        var img = self.find('.show_img');
        var next = self.find('.arrow_bottom');
        var pre = self.find('.arrow_top');
        var src = img.attr('src');
        var img_num = src.split('-')[1].split('.')[0];
        if (img_num > 1 ) {
            img_num--;
            img.attr('src', './content/' + this.query + '-' + img_num + '.jpg');
            // 如果为第一张图片则隐藏上一张按钮
            if (img_num === 1) {
                pre.addClass('fade');
            }
            if (img_num === this.maxNum[this.query - 1] - 1 ) {
                next.removeClass('fade');
            }
        }
    },

    /**
     * 后一张图片
     */
    nextImg: function () {
        var self = this.$el;
        var img = self.find('.show_img');
        var next = self.find('.arrow_bottom');
        var pre = self.find('.arrow_top');
        var src = img.attr('src');
        var img_num = parseInt(src.split('-')[1].split('.')[0], 10);
        if (img_num < this.maxNum[this.query-1] ) {
            img_num++;
            img.attr('src', './content/' + this.query + '-' + img_num + '.jpg');
            // 如果为第最后一张图片则隐藏下一张的按钮
            if (img_num === 2) {
                pre.removeClass('fade');
            }
            if (img_num === this.maxNum[this.query - 1]) {
                next.addClass('fade');
            }
        }
    },

    getMask : function (e) {
        var that = this,
            self = this.$el,
            tar = e.target;
        var mask = $('.mask'),
            center = $('.center');
        // mask.fadeIn(2000);
        // mask.css('display', 'block');
        mask.addClass('fadeIn');
        center.addClass('fixed');
    },
    
    initialize: function () {
        // this.template = _.template($('#home_tem').html());
        // this.render();
        var self = this.$el;
        var that = this;
        self.bind('webkitTransitionEnd', function (e) {
            // console.log(e.target);
            // console.log(e.currentTarget);
            if (e.target === this.el) {
                console.log(123);
            }
        });
        self.bind('transitionend', function (e) {
            // console.log(e.target);
            // console.log(e.currentTarget);
            if (e.target === that.el) {
                console.log(123);
                self.children().eq(0).remove();
                self.css({
                    'transform' : 'translateX(0px)',
                    'transition': 'all 0s ease-in-out'
                });
            }
        })
    },

    /**
     * 模板渲染
     * @params {Object} params 模板内容
     */
    render : function (params) {
        var self = this.$el;
        var that = this;
        if(self.children().length === 0){
            self.html(that.template(params));
            self.children().css('display', 'none');
            self.children().fadeIn(400);
        } else {
            var current = self.html();
            var next = that.template(params);
            
            self.html(current + next);
            var x = -1200;
            self.css({
                'transform' : 'translateX(' + x + 'px)',
                'transition': 'all 0.5s ease-in-out'
            });

        }

        return this;
    },

    /**
     * @params {Object} params 模板内容
     */
    html : function (params) {
        var self = this.$el;
        var that = this;
        self.html(that.template(params));
        self.css({
            'transform' : 'translateX(0)'
        });
    }
});


var Nav = Backbone.View.extend({
    events : {
        "click a" : 'select'
    },

    select : function (e) {
        var self = this.$el;
        var that = e.target;
        self.find('a').removeClass('selected');
        $(that).addClass('selected');
    },

    selectItem : function (str) {
        var self = this.$el;
        var routes = {
            'home' : 0,
            'resume' : 1,
            'project' : 2,
            'contact' : 3
        };
        self.find('a').eq(routes[str]).trigger('click');
    }

});

