# wenode
仿照wego用nodejs编写的一个小应用,wego:https://github.com/schachmat/wego

#启动
node index [城市拼音，默认是南京]
如 node index beijing
#小记
我还不知道怎么做成全局的类似命令行的效果，改天再学习学习，做这个花了一天，三分之一的时间在找天气的API接口，= =，没有符合要求的，又要有当天不同时段的预报又要有后几天的天气预报，总之找的不是很顺利，瞎找，最后看到自己的魅族手机里自带的天气应用恰好都有这些信息，所以用fiddle抓包抓取了数据。
天气接口如下：
额额额额。。。。。。说到这里的时候，这个接口挂了~~~

效果如图：
![img](https://github.com/LelesBox/wenode/blob/master/weather.png)

