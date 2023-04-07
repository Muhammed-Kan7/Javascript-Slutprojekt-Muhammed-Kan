const apiKey="26c72b1be7839b165f1d4370d6a5dd35",searchButton=document.getElementById("get-images"),searchInput=document.querySelector('input[name="search-text"]'),imageSize=document.getElementById("image-size"),imageCount=document.getElementById("image-count"),imageContainer=document.getElementById("image-container");function clearErrors(){document.querySelectorAll(".error").forEach((e=>e.remove()))}function showError(e){const t=document.createElement("p");t.innerText="Bilden som angivet kunde inte hittas, var god försök igen",t.classList.add("error"),t.textContent=e,imageContainer.appendChild(t)}function displayImg(e){const t=document.createElement("img");t.src=e,t.addEventListener("error",(function(){showError(`Fel vid hämtning av bild ${e}`)})),imageContainer.appendChild(t)}function clearImages(){const e=document.querySelectorAll("img");for(const t of e)t.remove()}searchButton.addEventListener("click",(async function(){clearErrors();const e=searchInput.value.trim(),t=imageSize.value,o=parseInt(imageCount.value);if(""!==e){clearImages();const r=`https://www.flickr.com/services/rest/?api_key=${apiKey}&method=flickr.photos.search&text=${e}&format=json&nojsoncallback=1&per_page=${o}&page=1`;try{const e=await fetch(r);if(!e.ok)throw new Error("Oops, något gick fel!");(await e.json()).photos.photo.forEach((e=>{let o;"l"===t?o=`https://live.staticflickr.com/${e.server}/${e.id}_${e.secret}_b.jpg`:("m"===t||"s"===t)&&(o=`https://live.staticflickr.com/${e.server}/${e.id}_${e.secret}_${t}.jpg`),displayImg(o)}))}catch(e){showError(e.message)}}else showError("Var god ange ett sökord")}));const sizeOptions=document.querySelectorAll("#image-size option");sizeOptions.forEach((e=>{e.addEventListener("click",(function(){clearImages();document.querySelector("#image-size option:checked").value;sizeOptions.forEach((e=>{e.removeAttribute("selected")})),e.setAttribute("selected","selected")}))}));
//# sourceMappingURL=index.dbd35124.js.map