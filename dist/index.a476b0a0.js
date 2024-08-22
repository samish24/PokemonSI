const e=document.getElementById("search-button"),t=document.getElementById("search"),o=document.getElementById("results");async function a(e){let t=document.createElement("div");t.className="border-2 h-80 border-orange-500 w-80 m-3 p-3 flex flex-col items-center",t.innerHTML=`
    <img src="${e.sprites.other.showdown.front_shiny}" alt="${e.name}" class="h-40 w-40 object-contain mb-4">
    <h2 class="text-xl capitalize font-bold text-orange-500">${e.name}</h2>
    <p class="mt-2">Height: ${e.height}</p>
    <p>Weight: ${e.weight}</p>
    <button class="mt-2 bg-green-500 text-white p-1 rounded-md">Add to Favorites</button>
  `,t.classList.add("bg-white","rounded-lg","shadow-lg","p-4","flex","flex-col","items-center","text-center"),t.querySelector("button").addEventListener("click",()=>{var t,o,a,n,s;let i;t=e.id,o=e.name,a=e.sprites.front_default,n=e.height,s=e.weight,(i=JSON.parse(localStorage.getItem("favorites"))||[]).some(e=>e.id===t)?alert(`${o} is already in your favorites!`):(i.push({id:t,name:o,sprite:a,height:n,weight:s}),localStorage.setItem("favorites",JSON.stringify(i)),alert(`${o} has been added to your favorites!`))}),o.appendChild(t)}e.addEventListener("click",async()=>{let e=t.value.toLowerCase(),o=await fetch(`https://pokeapi.co/api/v2/pokemon/${e}`);o.ok?a(await o.json()):alert("Pokemon not found!")});
//# sourceMappingURL=index.a476b0a0.js.map
