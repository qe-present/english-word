import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    title: '学习英语',
    description: '学习英语的笔记',
    head: [["link", { rel: "icon", href: "/img/29.ico" }]],
    bundler: viteBundler(),
    theme: defaultTheme({
        // override the default theme config here
        logo: '/img/29.ico',
        navbar: [
            { text: '月份', link: '/month/'},
        ],
        sidebar: {
            '/month/': [
                {
                    text: '2024年',
                    children: [
                        { text: '5月', link: '/month/2024/05/' },
                        { text: '6月', link: '/month/2024/06/' },
                        { text: '7月', link: '/month/2024/07/' },
                        { text: '8月', link: '/month/2024/08/' },
                        { text: '9月', link: '/month/2024/09/' },
                        { text: '10月', link: '/month/2024/10/' },
                        { text: '11月', link: '/month/2024/11/' },
                        { text: '12月', link: '/month/2024/12/' },
                    ],
                },
            ],
        },

    }),
})
