async function newOne(){
  let result = await fetch("https://restcountries.com/v3.1/all")
  let result1 = await result.json()
  sample(result1)
}
newOne()

var container = document.createElement("div")
container.className = "container"

var row = document.createElement("div")
row.className = "row"

function sample(data1) {
  for (i = 0; i < data1.length; i++) {
    var col = document.createElement("div")
    col.className = "col-md-4"
    col.innerHTML = `<div class="card border-light mb-3" style="max-width: 18rem;">
  <div class="card-header" style="text-align:center;background-color:black;color:white">${data1[i].name.common}</div>
  <div class="card-body">
    <img src="${data1[i].flags.png}">
    <div class="content">
    <p class="card-text">Capital:${data1[i].capital}</p>
    <p class="card-text">Region:${data1[i].region}</p>
    <a class="nav-link active" href="#">Click for Weather</a>
    </div>
  </div>
</div>`

    row.append(col)
    container.append(row)
    document.body.append(container)
  }

}