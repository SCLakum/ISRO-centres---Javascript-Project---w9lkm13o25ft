const searchInput = document.getElementById("inputBox");
let mainlist = document.getElementById("mainlist");
let apiData = [];

async function fetchApiData() {
  apiData = await fetch("https://isro.vercel.app/api/centres")
    .then((response) => response.json())
    .then((data) => data.centres);
  apiData.forEach((centre) => {
    UpdateList(centre);
  });
}

fetchApiData();

function searchCategory(category) {
  mainlist.innerHTML = "";

  apiData.forEach((centre) => {
    if (
      (category === "name" &&
        centre.name.toLowerCase().includes(searchInput.value.toLowerCase())) ||
      (category === "Place" &&
        centre.Place.toLowerCase().includes(searchInput.value.toLowerCase())) ||
      (category === "State" &&
        centre.State.toLowerCase().includes(searchInput.value.toLowerCase())) ||
      category === ""
    ) {
      UpdateList(centre);
    }
  });
}

function UpdateList(centre) {
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

searchCategory("");

searchInput.addEventListener("input", () => {
  searchCategory(
    document.querySelector('input[name="FillterBtns"]:checked').value
  );
});

document.querySelectorAll('input[name="FillterBtns"]').forEach(doc =>{
    doc.addEventListener("click", ()=>{
        searchCategory(doc.value);
    })
});