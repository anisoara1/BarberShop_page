var e=1;s(1);var t=setInterval(function(){s(e+=1)},3e3),n=document.getElementsByClassName("slideshow-container")[0];function s(t){var n,s=document.getElementsByClassName("slide"),a=document.getElementsByClassName("slider__item");for(t>s.length&&(e=1),t<1&&(e=s.length),n=0;n<s.length;n+=1)s[n].style.display="none";for(n=0;n<a.length;n+=1)a[n].className=a[n].className.replace(" active","");s[e-1].style.display="block",a[e-1].className+=" active"}n.addEventListener("mouseenter",function(){clearInterval(t)}),n.addEventListener("mouseleave",function(){t=setInterval(function(){s(e+=1)},3e3)});
//# sourceMappingURL=index.dc9d2498.js.map
