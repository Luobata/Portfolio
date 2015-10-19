var Workspace = new (Backbone.Router.extend({

    routes: {
      "project" : "project",    
      "resume" : "resume",  
      "home" : "index",
      "" : "index",  
      "list/:query" : "list"
    },
    valueToString: {
        0: 'XI QUE SHUO',
        1: 'LENOVO SCHOOL',
        2: 'RAIN LOCKSCREEN',
        3: 'LOVE TREE',
        4: 'BAOCOO WANG',
        5: 'CHINA MOBILE WAP'
    },

    project : function () {
                  center.template = _.template($('#project_tem').html());
                  center.index = 2;
                  center.render();
                  nav.selectItem('project');
              },

    resume : function () {
                 center.template = _.template($('#resume_tem').html());
                 center.index = 1;
                 center.render();
                 nav.selectItem('resume');
             },

    index : function () {
                center.template = _.template($('#home_tem').html());
                center.index = 0;
                center.render();
                nav.selectItem('home');
            },

    list : function (query) {
               // 作品详情页面
               params = {
                   title: query,
                   text: this.valueToString[query-1]
               };
               center.template = _.template($('#detail_tem').html());
               center.query = query;
               center.render(params);
               nav.selectItem('project');
           },

    start : function() { 
                // 封装一下 Backbone.history API
                Backbone.history.start();
            }

}));

var center = new Center({
    el : $('#home')
});
var nav = new Nav({
    el : $('#nav')
});
