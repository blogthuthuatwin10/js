/*! Adblocker-Detected v3.3.1 | (c) JS Foundation and other contributors | blogthuthuatwin10.com/license */
for(var ifrVlZdbtRis="",uPzUXYgAgl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=0;12>i;i++)ifrVlZdbtRis+=uPzUXYgAgl.charAt(Math.floor(Math.random()*uPzUXYgAgl.length));var eGCnWMIlae=3,oADdgoPzIM=25,SgFrAQBBRZ=259,ZEwZVbGGgd=211,YAEhHtBPuj=function(t){var e=!1,n=function(){document.addEventListener?(document.removeEventListener("DOMContentLoaded",o),window.removeEventListener("load",o)):(document.detachEvent("onreadystatechange",o),window.detachEvent("onload",o))},o=function(){e||!document.addEventListener&&"load"!==event.type&&"complete"!==document.readyState||(e=!0,n(),t())};if("complete"===document.readyState)t();else if(document.addEventListener)document.addEventListener("DOMContentLoaded",o),window.addEventListener("load",o);else{document.attachEvent("onreadystatechange",o),window.attachEvent("onload",o);var r=!1;try{r=null==window.frameElement&&document.documentElement}catch(i){}r&&r.doScroll&&!function d(){if(!e){try{r.doScroll("left")}catch(o){return setTimeout(d,50)}e=!0,n(),t()}}()}};window[""+ifrVlZdbtRis]=function(){function t(t){t&&(t=t.substr(t.length-15));for(var e=document.getElementsByTagName("script"),n=e.length;n--;){var o=String(e[n].src);if(o&&(o=o.substr(o.length-15)),o===t)return!0}return!1}function e(t){t&&(t=t.substr(t.length-15));var e=document.styleSheets;for(x=0;x<e.length;){if(thisurl=e[x].href,thisurl&&(thisurl=thisurl.substr(thisurl.length-15)),thisurl===t)return!0;x++}return!1}function n(t){var e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";t=t||30;for(var o=0;t>o;o++)e+=n.charAt(Math.floor(Math.random()*n.length));return e}function o(t){var e=["YWRuLmViYXkuY29t","YWQubWFpbC5ydQ==","anVpY3lhZHMuY29t","YWQuZm94bmV0d29ya3MuY29t","cGFydG5lcmFkcy55c20ueWFob28uY29t","YS5saXZlc3BvcnRtZWRpYS5ldQ==","YWdvZGEubmV0L2Jhbm5lcnM=","YWR2ZXJ0aXNpbmcuYW9sLmNvbQ==","Y2FzLmNsaWNrYWJpbGl0eS5jb20=","cHJvbW90ZS5wYWlyLmNvbQ==","YWRzLnlhaG9vLmNvbQ==","YWRzLnp5bmdhLmNvbQ==","YWRzYXR0LmFiY25ld3Muc3RhcndhdmUuY29t","YWRzYXR0LmVzcG4uc3RhcndhdmUuY29t","YXMuaW5ib3guY29t","cGFydG5lcmFkcy55c20ueWFob28uY29t"],o=["ZmF2aWNvbi5pY28=","YmFubmVyLmpwZw==","NDY4eDYwLmpwZw==","NzIweDkwLmpwZw==","c2t5c2NyYXBlci5qcGc=","MTM2N19hZC1jbGllbnRJRDI0NjQuanBn","YWRjbGllbnQtMDAyMTQ3LWhvc3QxLWJhbm5lci1hZC5qcGc=","Q0ROLTMzNC0xMDktMTM3eC1hZC1iYW5uZXI=","ZmF2aWNvbi5pY28=","YWQtbGFyZ2UucG5n","c3F1YXJlLWFkLnBuZw==","ZmF2aWNvbjEuaWNv","YmFubmVyX2FkLmdpZg==","bGFyZ2VfYmFubmVyLmdpZg==","d2lkZV9za3lzY3JhcGVyLmpwZw==","YWR2ZXJ0aXNlbWVudC0zNDMyMy5qcGc="];for(x=0,spimg=[];x<t;){c=e[Math.floor(Math.random()*e.length)],d=o[Math.floor(Math.random()*o.length)],c=r.decode(c),d=r.decode(d);var i=Math.floor(2*Math.random())+1;w=1==i?"//"+c+"/"+d:"//"+c+"/"+n(Math.floor(20*Math.random())+4)+".jpg",spimg[x]=new Image,spimg[x].onerror=function(){for(var t=1;7>t;)t++},spimg[x].src=w,x++}}var r={t$:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(t){var e,n,o,i,d,a,l,c="",s=0;for(t=r.e$(t);s<t.length;)e=t.charCodeAt(s++),n=t.charCodeAt(s++),o=t.charCodeAt(s++),i=e>>2,d=(3&e)<<4|n>>4,a=(15&n)<<2|o>>6,l=63&o,isNaN(n)?a=l=64:isNaN(o)&&(l=64),c=c+this.t$.charAt(i)+this.t$.charAt(d)+this.t$.charAt(a)+this.t$.charAt(l);return c},decode:function(t){var e,n,o,i,d,a,l,c="",s=0;for(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");s<t.length;)i=this.t$.indexOf(t.charAt(s++)),d=this.t$.indexOf(t.charAt(s++)),a=this.t$.indexOf(t.charAt(s++)),l=this.t$.indexOf(t.charAt(s++)),e=i<<2|d>>4,n=(15&d)<<4|a>>2,o=(3&a)<<6|l,c+=String.fromCharCode(e),64!=a&&(c+=String.fromCharCode(n)),64!=l&&(c+=String.fromCharCode(o));return c=r.n$(c)},e$:function(t){t=t.replace(/;/g,";");for(var e="",n=0;n<t.length;n++){var o=t.charCodeAt(n);128>o?e+=String.fromCharCode(o):o>127&&2048>o?(e+=String.fromCharCode(o>>6|192),e+=String.fromCharCode(63&o|128)):(e+=String.fromCharCode(o>>12|224),e+=String.fromCharCode(o>>6&63|128),e+=String.fromCharCode(63&o|128))}return e},n$:function(t){for(var e="",n=0,o=c1=c2=0;n<t.length;)o=t.charCodeAt(n),128>o?(e+=String.fromCharCode(o),n++):o>191&&224>o?(c2=t.charCodeAt(n+1),e+=String.fromCharCode((31&o)<<6|63&c2),n+=2):(c2=t.charCodeAt(n+1),c3=t.charCodeAt(n+2),e+=String.fromCharCode((15&o)<<12|(63&c2)<<6|63&c3),n+=3);return e}},i=["YWQtbGVmdA==","YWRCYW5uZXJXcmFw","YWQtZnJhbWU=","YWQtaGVhZGVy","YWQtaW1n","YWQtaW5uZXI=","YWQtbGFiZWw=","YWQtbGI=","YWQtZm9vdGVy","YWQtY29udGFpbmVy","YWQtY29udGFpbmVyLTE=","YWQtY29udGFpbmVyLTI=","QWQzMDB4MTQ1","QWQzMDB4MjUw","QWQ3Mjh4OTA=","QWRBcmVh","QWRGcmFtZTE=","QWRGcmFtZTI=","QWRGcmFtZTM=","QWRGcmFtZTQ=","QWRMYXllcjE=","QWRMYXllcjI=","QWRzX2dvb2dsZV8wMQ==","QWRzX2dvb2dsZV8wMg==","QWRzX2dvb2dsZV8wMw==","QWRzX2dvb2dsZV8wNA==","RGl2QWQ=","RGl2QWQx","RGl2QWQy","RGl2QWQz","RGl2QWRB","RGl2QWRC","RGl2QWRD","QWRJbWFnZQ==","QWREaXY=","QWRCb3gxNjA=","QWRDb250YWluZXI=","Z2xpbmtzd3JhcHBlcg==","YWRUZWFzZXI=","YmFubmVyX2Fk","YWRCYW5uZXI=","YWRiYW5uZXI=","YWRBZA==","YmFubmVyYWQ=","IGFkX2JveA==","YWRfY2hhbm5lbA==","YWRzZXJ2ZXI=","YmFubmVyaWQ=","YWRzbG90","cG9wdXBhZA==","YWRzZW5zZQ==","Z29vZ2xlX2Fk","b3V0YnJhaW4tcGFpZA==","c3BvbnNvcmVkX2xpbms="],a=Math.floor(Math.random()*i.length),l=r.decode(i[a]),s=l,m="#EEEEEE",h="#777777",u="rgb(0, 114, 198)",y="#FFFFFF",b="Uh Oh...Adblocker detected!",p="We are deeply concerned with our user experience. Which is why we use responsible ads",g="Please support us by whitelisting our site in your Adblocking software. We bring Windows tutorials & freeware without any cost to you and we do not implement any annoying ads.",f="OK, I have disabled my ad blocker",v=0,W=0,w="moc.kcolbdakcolb",Y=0;n()+".jpg";return{MxZrEHLfwf:function(t,e){if("undefined"!=typeof document.body){var n="0.1",e=s,o=document.createElement("DIV");o.id=e,o.style.position="absolute",o.style.left="-5000px",o.style.top="-5000px",o.style.height="60px",o.style.width="468px";var r=document.body.childNodes,i=Math.floor(r.length/2);if(i>15){var d=document.createElement("div");d.style.position="absolute",d.style.height="0px",d.style.width="0px",d.style.top="-5000px",d.style.left="-5000px",document.body.insertBefore(d,document.body.childNodes[i]),d.appendChild(o);var a=document.createElement("DIV");a.id="banner_ad",a.style.position="absolute",a.style.left="-5000px",a.style.top="-5000px",document.body.appendChild(a)}else o.id="banner_ad",document.body.appendChild(o);Y=setInterval(function(){o?(t(0==o.clientHeight,n),t(0==o.clientWidth,n),t("hidden"==o.display,n),t("none"==o.visibility,n),t(0==o.opacity,n)):t(!0,n)},1e3)}},cTigOuiaIn:function(e,n){if(e&&0==v)v=1,window[""+ifrVlZdbtRis].YojpkupnwJ(),window[""+ifrVlZdbtRis].cTigOuiaIn=function(){};else{var i=r.decode("aW5zLmFkc2J5Z29vZ2xl"),d=document.querySelector(i);if(d&&0==v&&oADdgoPzIM%3==0){var a="Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wYWdlYWQvanMvYWRzYnlnb29nbGUuanM=";a=r.decode(a),t(a)&&0==d.innerHTML.replace(/\s/g,"").length&&(v=1,window[""+ifrVlZdbtRis].YojpkupnwJ())}if(0==v&&SgFrAQBBRZ%3==0){if(!window[""+ifrVlZdbtRis].ranAlready){for(var l=["Ly93d3cuZ29vZ2xlLmNvbS9hZHNlbnNlL3N0YXJ0L2ltYWdlcy9mYXZpY29uLmljbw==","Ly93d3cuZ3N0YXRpYy5jb20vYWR4L2RvdWJsZWNsaWNrLmljbw==","Ly9hZHZlcnRpc2luZy55YWhvby5jb20vZmF2aWNvbi5pY28=","Ly9hZHMudHdpdHRlci5jb20vZmF2aWNvbi5pY28=","Ly93d3cuZG91YmxlY2xpY2tieWdvb2dsZS5jb20vZmF2aWNvbi5pY28="],c=l.length,s=l[Math.floor(Math.random()*c)],m=s;s==m;)m=l[Math.floor(Math.random()*c)];s=r.decode(s),m=r.decode(m),o(Math.floor(2*Math.random())+1);var h=new Image,u=new Image;h.onerror=function(){o(Math.floor(2*Math.random())+1),u.src=m,o(Math.floor(2*Math.random())+1)},u.onerror=function(){v=1,o(Math.floor(3*Math.random())+1),window[""+ifrVlZdbtRis].YojpkupnwJ()},h.src=s,ZEwZVbGGgd%3==0&&(h.onload=function(){h.width<8&&h.width>0&&window[""+ifrVlZdbtRis].YojpkupnwJ()}),o(Math.floor(3*Math.random())+1),window[""+ifrVlZdbtRis].ranAlready=!0}window[""+ifrVlZdbtRis].cTigOuiaIn=function(){}}}},YojpkupnwJ:function(){if(1==W){var t=sessionStorage.getItem("babn");if(t>0)return!0;sessionStorage.setItem("babn",1e3*(Math.random()+1))}var o="Ly95dWkueWFob29hcGlzLmNvbS8zLjE4LjEvYnVpbGQvY3NzcmVzZXQvY3NzcmVzZXQtbWluLmNzcw==";if(o=r.decode(o),!e(o)){var i=document.createElement("link");i.setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("href",o),document.getElementsByTagName("head")[0].appendChild(i)}clearInterval(Y),document.body.innerHTML="",document.body.style.cssText+="margin:0px !important",document.body.style.cssText+="padding:0px !important";var d=document.documentElement.clientWidth||window.innerWidth||document.body.clientWidth,a=window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight,l=document.createElement("DIV"),c=n();l.id=c,l.style.position="fixed",l.style.left="0",l.style.top="0",l.style.width=d+"px",l.style.height=a+"px",l.style.backgroundColor=m,l.style.zIndex="9999",document.body.appendChild(l);var s='<a href="https://www.blogthuthuatwin10.com"><svg id="FILLVECTID1" width="160" height="40"><image id="FILLVECTID2" width="160" height="40" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAoCAMAAABO8gGqAAAB+1BMVEXr6+sAAADr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+sAAADMAAAsKysKCgokJCRycnIEBATq6uoUFBTMzMzr6urjqqoSEhIGBgaxsbHcd3dYWFg0NDTmw8PZY2M5OTkfHx+enp7TNTUoJyfm5ualpaV5eXkODg7k5OTaamoqKSnc3NzZ2dmHh4dra2tHR0fVQUFAQEDPExPNBQXo6Ohvb28ICAjp19fS0tLnzc29vb25ubm1tbWWlpaNjY3dfX1oaGhUVFRMTEwaGhoXFxfq5ubh4eHe3t7Hx8fgk5PfjY3eg4OBgYF+fn5EREQ9PT3SKSnV1dXks7OsrKypqambmpqRkZFdXV1RUVHRISHQHR309PTq4eHp3NzPz8/Ly8vKysrDw8O4uLjkt7fhnJzgl5d7e3tkZGTYVlZPT08vLi7OCwu/v792dnbbdHTZYWHZXl7YWlpZWVnVRkYnJib8/PzNzc3myMjlurrjsLDhoaHdf3/aa2thYWHXUFDUPDzUOTno0dHipqbceHjaZ2dCQkLSLy/v7+/b29vlvb2xn5/ejIzabW26SkqgMDA7HByRAADoM7kjAAAAInRSTlM6ACT4xhkPtY5iNiAI9PLv6drSpqGYclpM5bengkQ8NDAnsGiGMwAABetJREFUWMPN2GdTE1EYhmFQ7L339rwngV2IiRJNIGAg1SQkFAHpgnQpKnZBAXvvvXf9mb5nsxuTqDN+cIa9Z8IkGYa9OGXPJDm5RnMX5pim7YtTLB24btUKmKnZeWsWpgHnzIP5UucvNoDrl8GUrVyUBM4xqQ/ISwIz5vfQyDF3X+MgzNFaCVyHVIONbx1EDrtCzt6zMEGzFzFwFZJ19jpJy2qx5BcmyBM/oGKmW8DAFeDOxfOJM4DcnTYrtT7dhZltTW7OXHB1ClEWkPO0JmgEM1pebs5CcA2UCTS6QyHMaEtyc3LAlWcDjZReyLpKZS9uT02086vu0tJa/Lnx0tILMKp3uvxI61iYH33Qq3M24k/VOPel7RIdeIBkdo/HY9WAzpZLSSCNQrZbGO1n4V4h9uDP7RTiIIyaFQoirfxCftiht4sK8KeKqPh34D2S7TsROHRiyMrAxrtNms9H5Qaw9ObU1H4Wdv8z0J8obvOo/wd4KAnkmbaePspA/0idvgbrDeBhcK+EuJ0GtLUjVftvwEYqmaR66JX9Apap6cCyKhiV/RUIrwGk+qdWy60K14k+CXRTTQawVogbKeDEs2hs4MtJcNVTY2KgclwH2vYODFTa4FQ+1FMzZIGQR3HWJ4F1TqWtOaADq0Z9itVZrg1S6JLi7B1MAtUCX1xNB0Y0oL9hpK4+YbUMNVjqGySwrRUGsLu6+uWD20LsNIDdQut4LXA/KmSx+0nga14QJ3GOWqDmOwJgRoSme8OOhAQqiUhPMbUGksCj5Lta4CbeFhX9NN0Tpny/BKpxaqlAOvCqBjzTFAp2NFudJ5paelS5TbwtBlAvNgEdeEGI6O6JUt42NhuvzZvjXTHxwiaBXUIMnAKa5Pq9SL3gn1KAOEkgHVWBIMU14DBF2OH3KOfQpG2oSQpKYAEdK0MGcDg1xbdOWy+iqKjoRAEDlZ4soLhxSgcy6ghgOy7EeC2PI4DHb7pO7mRwTByv5hGxF/I1TpO7CnBZO+QcWrURHJSLrbBNAxZTHbgSCsHXJkmBxisMvErFVcgE+h0GsOCs9UwP2xo6+UimAyng9UePurpvM8WmAdsvi6gNwBMhPrPqemoXywZs8qL9JZybhqF6LZBZJNANmYsOSaBTkSqcpnCFEkntYjtREFlATEtgxdDQlffhS3ddDAzfbbHYPUDGJpGT+UADVgvxHBzP9LUufqQDtV/uI70wOsgFWUQCfZC1UI0Ettoh66D+szSdAtKtwkRRNnCIiDzNzc0RO/kmLbKmsE/pyQLiBu8WDYgxEZMbeEqIiSM8r/x0z6tauQYvPxwT0VM1lH9Adt5Lp+F2Q+bTplhb/E5HlQS6SHvVSU0V+j9xJVBEEbWEXFVZQNX9+1HX6ghkAR9E5crTgM+0t6qjIlZbzSpemi+E+MjA3XJUKy/SRWhNsmOazvKzQYcE0hV5nDkuQQKfUgm4HmqA2yuPxfMU1m4zLRTMAqLhN6BHCeEXMDo2NsY8MdCeBB6JydMlps3uGxZefy7EO1vyPvhOxL7TPWjVUVvZkNJ/CGf7SAP2V6AjTOUa8IzD3ckqe2ENGulWGfx9VKIBB72JM1lAuLKB3taONCBn3PY0II5cFrLr7cCp/UIWrdVPEp7zHy7oWXiUgmR3kdujbZI73kghTaoaEKMOh8up2M8BVceotd/BNyENiFGe5CxgZyIT6KVyGO2s5J5ce/14XO7cR5WV1QBedt3c/+QhZLYLN54/e8xr8n5lpXyn++u3T9AbDjXwIMXfxmsarwK9wUBB5Kj8y2dCw/Kq8b7m0RpwasnR/uJylU+dEflqX6gzC4hd1jSgz0ujmPkygDjvNYDsU0ZggjKBqLPrQLfDUQIzxMBtSOucRwLzrdQ2DFO0NDdnsYq0yoJyEB0FHTBHefyxcyUy8jflH7sHszSfgath4hYwcD3M29I5DMzdBNO2IFcC5y6HSduof4G5dQNMWd4cDcjNNeNGmb02/Uv0LfPzlsBELZ+3eUeuATRaNMs0zfml+gkJocgFtzfMzwAAAABJRU5ErkJggg==">;</svg></a>';s=s.replace("FILLVECTID1",n()),s=s.replace("FILLVECTID2",n());var v=document.createElement("DIV");v.innerHTML=s,v.style.position="absolute",v.style.bottom="30px",v.style.left="30px",v.style.width="160px",v.style.height="40px",v.style.zIndex="10000",v.style.opacity=".6",v.style.cursor="pointer",v.addEventListener("click",function(){w=w.split("").reverse().join(""),window.location.href="//"+w}),document.getElementById(c).appendChild(v);var Z=document.createElement("DIV"),A=n();Z.id=A,Z.style.position="fixed",Z.style.top="10%",Z.style.left="10%",Z.style.backgroundColor="#fff",Z.style.width="80%",Z.style.zIndex="10000",Z.style.padding="20px 0",Z.style.cssText+="text-align: center !important",Z.style.display+="block",document.body.appendChild(Z),Z.style.visibility="visible";var M=30,x=22,L=18,R=16;if(window.innerWidth<640||screen.width<640){Z.style.zoom="50%",Z.style.cssText+="font-size: 18pt !important",Z.style.marginLeft="45px;",v.style.zoom="65%";var M=22,x=18,L=12,R=12}Z.innerHTML='<h3 style="color:#999;font-size:'+M+"pt;color:"+h+';font-family:Helvetica, geneva, sans-serif;font-weight:200;margin-top:10px;margin-bottom:10px;text-align:center;">'+b+'</h3><h1 style="font-size:'+x+"pt;font-weight:500;font-family:Helvetica, geneva, sans-serif;color:"+h+';margin-top:10px;margin-bottom:10px;text-align:center;">'+p+'</h1><hr style=" display: block;margin-top: 0.5em;margin-bottom: 0.5em;margin-left: auto;margin-right: auto; border:1px solid #CCC; width: 25%;text-align:center;"><p style="font-family:Helvetica, geneva, sans-serif;font-weight:300;font-size:'+L+"pt;color:"+h+';text-align:center;padding: 20px;">'+g+'</p><p style="margin-top:35px;"><div onmouseover="this.style.opacity=.9;" onmouseout="this.style.opacity=1;"  id="'+n()+'" style="cursor:pointer;font-size:'+R+"pt;font-family:Helvetica, geneva, sans-serif; font-weight:400;border-radius:3px;background-color:"+u+";color:"+y+';padding:10px 15px 10px 15px;width:30%;margin:auto;margin-top:10px;margin-bottom:10px;" onclick="window.location.reload();">'+f+"</div></p>"}}}(),window.dyPGLLstXt=function(t,e){var n,o=Date.now,r=window.requestAnimationFrame,i=o(),d=function(){o()-i<e?n||r(d):t()};return r(d),{clear:function(){n=1}}};var ySztljaayy;document.body&&(document.body.style.visibility="visible"),YAEhHtBPuj(function(){document.getElementById("babasbmsgx")&&(document.getElementById("babasbmsgx").style.visibility="hidden",document.getElementById("babasbmsgx").style.display="none"),ySztljaayy=window.dyPGLLstXt(function(){window[""+ifrVlZdbtRis].MxZrEHLfwf(window[""+ifrVlZdbtRis].cTigOuiaIn,window[""+ifrVlZdbtRis].UfVtKGPoyL)},1e3*eGCnWMIlae)});
