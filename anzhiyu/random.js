var posts=["2025/01/19/Re小登对题目的基础理解/","2024/11/17/汇编语言基本知识/汇编语言基本知识/","2024/12/02/脱壳以及简单练习/","2024/11/15/可执行文件的相关概念/可执行文件的相关概念/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };