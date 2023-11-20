const searchInput = document.getElementById("inputBox");

function searchCategory(category){

    let mainlist = document.getElementById("mainlist");
    mainlist.innerHTML = "";
    
    fetch("https://isro.vercel.app/api/centres")
        .then(response => response.json())
        .then(data => {
            data.centres.forEach(centre => {    
                
                if ((category === 'name' && centre.name.toLowerCase().includes(searchInput.value.toLowerCase())) ||
                (category === 'Place' && centre.Place.toLowerCase().includes(searchInput.value.toLowerCase())) ||
                (category === 'State' && centre.State.toLowerCase().includes(searchInput.value.toLowerCase())) || category === '') {       
                    let newlist = document.createElement("li");
                    let newlistdata = `
                            <div class="listHead" id="CenterData">CENTER 
                            <div class="listdata">
                                ${centre.name}  
                            </div>
                            </div>
                            <div class="listHead" id="CityData">CITY 
                                <div class="listdata">
                                ${centre.Place}
                                </div>
                            </div>
                            <div class="listHead" id="StateData">STATE 
                                <div class="listdata">
                                ${centre.State}
                                </div>
                            </div>
                        `;
  
                        newlist.innerHTML = newlistdata;
                        mainlist.appendChild(newlist);
                    }
                });
        });   
}

searchCategory("");

searchInput.addEventListener("input", ()=>{
    searchCategory(document.querySelector('input[name="FillterBtns"]:checked').value);
    console.log(searchInput.value)
});