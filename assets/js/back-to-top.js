// 当页面滚动时，显示或隐藏返回顶部按钮
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const mybutton = document.getElementById("back-to-top");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "flex";  // 显示按钮
  } else {
    mybutton.style.display = "none";  // 隐藏按钮
  }
}

// 点击按钮时平滑滚动到顶部
document.getElementById("back-to-top").addEventListener("click", function(){
  window.scrollTo({top: 0, behavior: 'smooth'});  // 平滑滚动回顶部
});
