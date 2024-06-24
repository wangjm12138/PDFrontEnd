<h1>PD项目 基于vue-pure-admin精简版</h1>

[![license](https://img.shields.io/github/license/pure-admin/vue-pure-admin.svg)](LICENSE)

**中文** | [English](./README.en-US.md)

## 介绍
PD项目是基于vue-pure-admin框架精简版来开发的，主要来展示Jabra项目数据的分析和展示。

整个PD项目包括三个部分：

- 数据采集采用，python脚本数据获取Jira和Jama数据
- 数据分析和展示，前端展示基于Vue-pure-admin
- 数据的处理和存储，后端是基于Java Spring Alibaba Cloud微服务架构

具体项目框架图还在制作中...

以下是前端部分Vue-pure-admin精简版的的介绍。
精简版是基于 [vue-pure-admin](https://github.com/pure-admin/vue-pure-admin) 提炼出的架子，包含主体功能，更适合实际项目开发，打包后的大小在全局引入 [element-plus](https://element-plus.org) 的情况下仍然低于 `2.3MB`，并且会永久同步完整版的代码。开启 `brotli` 压缩和 `cdn` 替换本地库模式后，打包大小低于 `350kb`

## 项目的安装和启动

- pnpm 版本大于9
- node 版本大于20，推荐20.15.0 LTS

- 安装：pnpm install
- 启动：pnpm dev

## 版本选择

当前是国际化版本，如果您需要非国际化版本 [请点击](https://github.com/pure-admin/pure-admin-thin)

## `js` 版本

[点我查看 js 版本](https://pure-admin.github.io/pure-admin-doc/pages/js/)

## `max` 版本

[点我查看 max 版本](https://github.com/pure-admin/vue-pure-admin-max)

## 配套视频

[点我查看 UI 设计](https://www.bilibili.com/video/BV17g411T7rq)  
[点我查看快速开发教程](https://www.bilibili.com/video/BV1kg411v7QT)

## 配套保姆级文档

[点我查看 vue-pure-admin 文档](https://pure-admin.github.io/pure-admin-doc)  
[点我查看 @pureadmin/utils 文档](https://pure-admin-utils.netlify.app)

