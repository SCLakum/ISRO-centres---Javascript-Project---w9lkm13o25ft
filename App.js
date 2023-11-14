function searchCategory(category){

    const searchInput = document.getElementById("inputBox").value.toLowerCase();

    let mainlist = document.getElementById("mainlist");
    mainlist.innerHTML = "";
    
    fetch("https://isro.vercel.app/api/centres")
        .then(response => response.json())
        .then(data => {
            data.centres.forEach(centre => {    
                
                if ((category === 'name' && centre.name.toLowerCase().includes(searchInput)) ||
                (category === 'Place' && centre.Place.toLowerCase().includes(searchInput)) ||
                (category === 'State' && centre.State.toLowerCase().includes(searchInput)) || category === '') {       
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