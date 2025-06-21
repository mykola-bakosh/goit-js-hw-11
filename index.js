import{a as m,S as f,i}from"./assets/vendor-frHSA4Lh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const g="50781933-cd9c20a0da5c230dc3f91d18e",y="https://pixabay.com/api/";async function h(s){try{return(await m.get(y,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(t){throw console.error("Error fetching images:","Sorry, there are no images matching your search query. Please try again!",t.message),t}}const l=document.querySelector(".gallery"),b=new f(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const t=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:r,views:a,comments:u,downloads:d})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${e}"
            />
          </a>
          <div class="image-info">
            <p class="info-item"><b>Likes</b><span>${r}</span></p>
            <p class="info-item"><b>Views</b><span>${a}</span></p>
            <p class="info-item"><b>Comments</b><span>${u}</span></p>
            <p class="info-item"><b>Downloads</b><span>${d}</span></p>
          </div>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",t),b.refresh()}function S(){l.innerHTML=""}const p=document.querySelector(".loader-backdrop");function w(){p.classList.remove("is-hidden")}function q(){p.classList.add("is-hidden")}const c=document.querySelector(".form"),v=c.elements.searchQuery;c.addEventListener("submit",async s=>{s.preventDefault();const t=v.value.trim();if(!t){i.error({message:"Search field cannot be empty!",position:"topRight"});return}S(),w();try{const o=await h(t);o.hits.length===0?i.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):L(o.hits)}catch(o){console.error("Error during image search:",o),i.error({message:"Something went wrong! Please try again later.",position:"topRight"})}finally{q(),c.reset()}});
//# sourceMappingURL=index.js.map
