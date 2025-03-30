import{a as u,S as f,i as d}from"./assets/vendor-Db2TdIkw.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const p="49553304-bb2269abcee8455e1256fbbe8",y="https://pixabay.com/api/";async function m(s){try{return(await u.get(y,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(r){throw console.error("Помилка при запиті до Pixabay API:",r),r}}const i=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new f(".gallery a");function h(){c.style.display="block"}function b(){c.style.display="none"}function L(s){if(s.length===0){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const r=s.map(t=>`
    <li class="gallery-item">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p>Likes: ${t.likes}</p>
        <p>Views: ${t.views}</p>
        <p>Comments: ${t.comments}</p>
        <p>Downloads: ${t.downloads}</p>
      </div>
    </li>
  `).join("");i.innerHTML=r,g.refresh()}function w(){i.innerHTML=""}const l=document.querySelector(".form"),P=l.querySelector("input");l.addEventListener("submit",async s=>{s.preventDefault();const r=P.value.trim();if(!r){iziToast.warning({title:"Warning",message:"Please enter a search term!"});return}w(),h();try{const t=await m(r);L(t)}catch{iziToast.error({title:"Error",message:"Something went wrong! Please try again later."})}finally{b()}});
//# sourceMappingURL=index.js.map
