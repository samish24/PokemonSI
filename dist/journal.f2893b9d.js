document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("container-2"),t=JSON.parse(localStorage.getItem("favorites"))||[];0===t.length?e.innerHTML="<p class='text-gray-500 text-center w-full'>No favorite Pokémon yet!</p>":t.forEach(t=>{let n=document.createElement("div");n.className="border-2 h-80 border-orange-500 w-72 m-3 p-3 flex flex-col items-center";let r=`note-${t.name}`,o=`addnote-${t.name}`,a=`ul-${t.name}`;n.innerHTML=`
      <div class="overflow-auto text-center flex items-center justify-center flex-col"> 
        <img src="${t.sprite}" alt="${t.name}" class="h-40 w-40 object-contain mb-4">
        <h2 class="text-xl capitalize font-bold text-orange-500">${t.name}</h2>
        <p class="mt-2">Height: ${t.height}</p>
        <p>Weight: ${t.weight}</p>  
        <input type="text" maxlength="25" class="border-2 border-orange-400 p-1 m-1 rounded-md" id="${r}" />
        <button id="${o}" class="border-solid border-2 border-orange-500 m-1 p-1 rounded-md">Add Note</button>
        <ul id="${a}"></ul>
      </div>
      `,e.appendChild(n);let l=document.getElementById(r),d=document.getElementById(o),c=document.getElementById(a),i=localStorage.getItem(`text-${t.name}`)?function(e){try{let t=JSON.parse(localStorage.getItem(`text-${e}`));return Array.isArray(t)?t:[]}catch(e){return console.error("Failed to parse text from localStorage",e),[]}}(t.name):[];function m(e,t,n){let r=function(e){let t=document.createElement("li");return t.textContent=e,t}(e),o=function(){let e=document.createElement("button");return e.classList.add("border-2","border-orange-400","p-1","m-1","hover:bg-red-400","ml","rounded-md"),e.textContent="Delete",e}();r.appendChild(o),t.appendChild(r),i.includes(e)||(i.push(e),localStorage.setItem(`text-${n}`,JSON.stringify(i)))}i.forEach(e=>m(e,c,t.name)),d.addEventListener("click",()=>{let e=l.value.trim();e&&(m(e,c,t.name),l.value="")}),c.addEventListener("click",e=>{if("BUTTON"===e.target.tagName){let n=e.target.parentElement;(function(e,t){let n=i.indexOf(e);-1!==n&&(i.splice(n,1),localStorage.setItem(`text-${t}`,JSON.stringify(i)))})(n.firstChild.textContent,t.name),c.removeChild(n)}})})});
//# sourceMappingURL=journal.f2893b9d.js.map
