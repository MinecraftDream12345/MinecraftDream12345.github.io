// ==UserScript==
// @name         Ex517
// @namespace    http://tampermonkey.net/
// @version      0.1.2
// @description  Made 517coding power and prettier
// @description:zh  让517拥有更多功能且更加美观
// @author       517Group
// @match        https://www.517coding.com/*
// @match        https://517coding.com/*
// @icon         https://www.517coding.com/_next/static/media/logo.5ade6b94.png
//
// @grant          GM_addStyle
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_deleteValue
// @grant          GM_listValues
// @grant          GM_setClipboard
// @grant          GM_xmlhttpRequest
// @grant          GM_getResourceText
// @grant          unsafeWindow
// ==/UserScript==

var linkElement = document.createElement("link");

// 设置 link 元素的属性
linkElement.rel = "stylesheet";
linkElement.type = "text/css";
linkElement.href = "your-external-styles.css"; // 替换成你的外部 CSS 文件路径

// 将 link 元素添加到 head 中
document.head.appendChild(linkElement);