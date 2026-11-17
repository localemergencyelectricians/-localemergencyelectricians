/* Loads the shared header/footer on inner pages. Requires HTTP(S), not file://. */
function loadPartial(id,url){return fetch(url).then(function(r){if(!r.ok)throw 0;return r.text()}).then(function(t){
 var box=document.getElementById(id),tpl=document.createElement('template');tpl.innerHTML=t;
 tpl.content.querySelectorAll('script').forEach(function(o){var s=document.createElement('script');s.textContent=o.textContent;o.replaceWith(s)});
 box.appendChild(tpl.content)}).catch(function(){})}
loadPartial('site-header','/header.html');loadPartial('site-footer','/footer.html');
