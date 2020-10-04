// 三种模式 history hash abstract 三种模式

// HTML5History  HashHistory AbstractHistory 三个函数创建对象
let base ='https://github.com/vuejs/vue-router?000'

base = base.replace(/^https?:\/\/[^\?]+/, '')
console.log(base);

HTML5History

HashHistory

AbstractHistory
三大类实现对History的继承

HashHistory 设置监听 hash监听 hashchange事件 
HTML5History 设置监听 popstate事件 
最终都会交给transitionTo进行处理
history模式通过history.pushstate完成url的跳转，不用重新加载页面

利用pushState将 stateObj title url放入pushState把页面的状态保存在state中
使用history模式的化，刷新页面会请求服务器，如果地址找不到，服务器没有做设置的话，会报404错误

pushState 创建新的历史记录
replaceState 修改历史记录
popState 监听浏览器的前进后退事件

hash做了兼容，当客户端不支持 history的时候，使用hash模式





