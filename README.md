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
![img](https://raw.githubusercontent.com/LelesBox/wenode/master/danzhou.png)

经过windows下各种终端一轮下来的测试，发现只有我笔记本在cmder环境下是正常显示的，包括颜色，公司的电脑cmder显示中文重叠，℃显示也稀奇古怪，windows自带的powershell更是乱码。zsh这个终端则出现字符位移偏差，唉 到底是中文字符串的原因还是windows的原因，突然没动力更新下去了

颜色没有添加完，添加也很方便，扩展了字符类型。只需要类似如 "天气".red 打印出来的字体颜色就是红色的了，太多了，懒得配色，还有一个就是抄wego的天气图标的时候看到各式各样的英文天气名称，真心看不懂全部 = =.
