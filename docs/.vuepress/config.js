module.exports = {
  /* 配置网站的基本信息 */
  title: '从计算机走向计算机世界',//配置网站的标题
  description: '为什么人与人之间的交流离不开问题',//配置网站的描述
  head: [//配置需要注入到HTML<head>元素内的标签
    /*
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],// 路径"/"等同于"public/"
    */
  ],

  base: '/WJWsir-s-Blog/',//URL中文件路径名的基路径

  /* 配置主题 */
  themeConfig: {
    nav: [//配置导航栏
      // 注释：
      //1. link属性的值符合URL中文件的路径名在省略文件名时的规则（详见《网络是怎样连接的》P9/1.1.3）
      //2. 该站点的"根目录"是 "docs/" 即 "/"
      { text: '主页', link: '/' },// 配置到跳转到主页的导航项，文本为“主页”链接路径"/"链接到根目录下即"docs/README.md"
      {
        text: '博文', items: [
          {
            text: '随笔&日记', items: [
              { text: '2021', link: '/posts/2021/' }
            ]
          },
          // { text: '计算机网络', link: '/Computer-Network/' },// 链接为文件路径名为"/Computer-Network/"的URL
        ]
      },
      // { text: '关于', link: '/about/' },
      { text: 'Github', link: 'https://www.github.com/WJWsir' },
    ],
    sidebar: {
      '/posts/2021/': [
        {
          title: '随笔&日记2021/01',
          collapsable: false,
          children: [
            '',
            '01/2021-01-23-passion-and-love',
            '01/2021-01-29-cohesion-and-tinder',
          ]
        },
        {
          title: '二月',
          collapsable: false,
          children: [
            '02/2021-02-01-writing',
            '02/2021-02-14-spring-festival-and-me',
          ]
        },
        {
          title: '三月',
          collapsable: false,
          children: [
            '03/2021-03-29-chat-or-communication',
          ]
        },
        {
          title: '五月',
          collapsable: false,
          children: [
            '05/2021-05-01-source-of-life',
          ]
        },
      ],
    }
  },
}
