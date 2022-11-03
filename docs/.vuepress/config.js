import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { sidebar } from './sidebar'

module.exports = {
    lang: 'zh-CN',
    base: '/everest-mod-develop-tutorial/',
    title: '蔚蓝模组开发教程',
    description: '咕咕咕',
    theme: defaultTheme({
        logo: '/images/everest.png',
        repo: 'https://github.com/optimize-2/everest-mod-develop-tutorial',
        docsDir: 'docs',
        navbar: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '开始',
                link: '/getstarted.html'
            },
            {
                text: '介绍',
                link: '/intro.html'
            }
        ],
        sidebar
    }),
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: '搜索'
                }
            },
            isSearchable: (page) => page.path !== '/',
            getExtraFields: (page) => page.frontmatter.tags ?? []
        })
    ]
}
