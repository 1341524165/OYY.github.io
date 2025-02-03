---
sidebar_position: 2
id: Blog base
title: Blog base
tags:
  - Study
  - Code
  - Blog base
---

## _docusaurus 博客基础_

### 1.md 文件文字换行

:::tip markdown 文件文字换行
双空格+换行打字
:::

### 2.代码块

:::info 代码块
`点点点`后加要 highlight 的语言类型，换行 copy 你的代码，再换行用`点点点`收尾【相当于 pre 标签】

````js
```js
var handsome;
```;
````

:::

### 3.发布多个 blog

:::tip 发布**多个 blog**
在 config.js 中声明，如下所示：

```js title="docusaurus.config.js"
plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * 多实例插件必填。
         */
        id: 'second-blog',
        /**
         * 你的网站上博客的 URL 路由。
         * !!请务必不要 添加末尾斜杠。
         */
        routeBasePath: 'my-second-blog',
        /**
         * 相对于站点目录的文件系统路径。
         */
        path: './my-second-blog',
      },
    ],
  ],
```

:::

### 4.告示类

```markdown
p.s. 避免 prettier 将代码格式化成错误语法的影响，还是多空两行比较保险

:::note

一些包含 _Markdown_ `语法` 的 **内容**。 看看[这个 `link`](#4告示类)。

:::

:::tip

一些包含 _Markdown_ `语法` 的 **内容**。 看看[这个 `link`](#4告示类)。

:::

:::info

一些包含 _Markdown_ `语法` 的 **内容**。 看看[这个 `link`](#4告示类)。

:::

:::caution

一些包含 _Markdown_ `语法` 的 **内容**。 看看[这个 `link`](#4告示类)。

:::

:::danger

一些包含 _Markdown_ `语法` 的 **内容**。 看看[这个 `link`](#4告示类)。

:::
```

:::note

一些包含 _Markdown_ `语法` 的 **内容**。 看看[这个 `link`](#4告示类)。

:::

:::tip

一些包含 _Markdown_ `语法` 的 **内容**。 看看[这个 `link`](#4告示类)。

:::

:::info

一些包含 _Markdown_ `语法` 的 **内容**。 看看[这个 `link`](#4告示类)。

:::

:::caution

一些包含 _Markdown_ `语法` 的 **内容**。 看看[这个 `link`](#4告示类)。

:::

:::danger

一些包含 _Markdown_ `语法` 的 **内容**。 看看[这个 `link`](#4告示类)。

:::

import ColorGenerator from '@site/src/components/ColorGenerator';

### 5.颜色生成器

是个人都不会喜欢最初始给你的颜色主题吧【🐶.jpg】  
于是乎，你可以在下面**选择**你喜欢的颜色，**微调**，就可以得到一个颜色主题（一系列颜色）；你甚至可以**直接在该页面预览**，你会发现这个博客已经被替换成你的目标颜色主题了。  
它会自动生成代码，你可以将其复制到你的 src\css\custom.css 文件，覆盖掉原有的样式。

<ColorGenerator/>
