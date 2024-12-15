import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'My Site',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/xp-bear',
      },
    ],
    outlineTitle: '标题目录',
    footer: {
      message:
        '<p>版权所有：<a href="https://github.com/xp-bear">Github</a> ©<strong>想走过亚洲的熊</strong>.保留所有权利</p>',
    },
    lastUpdated: true,
    lastUpdatedText: '上次更新',
    prevPageText: '前一篇',
    nextPageText: '后一篇',
    searchPlaceholderText: '搜索文档',
    searchNoResultsText: '未搜索到相关结果',
    searchSuggestedQueryText: '可更换不同的关键字后重试',
    hideNavbar: 'auto',
    enableScrollToTop: true,
  },
});
