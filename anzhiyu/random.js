var posts=["2024/11/15/可执行文件的相关概念/可执行文件的相关概念/","2024/11/17/汇编语言基本知识/汇编语言基本知识/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };