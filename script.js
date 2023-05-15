let container=document.createElement("div");
container.setAttribute("class","container");

let row=document.createElement("div");
row.setAttribute("class","row")

container.append(row);


async function foo() {
    let p1 = await fetch("https://api.fbi.gov/wanted/v1/list");
    console.log(p1)
    let data1 = await p1.json();
    console.log(data1)
    for(let i=0;i<data1.items.length;i++){
      row.innerHTML+=`<div class="col-sm-4 text-center">
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <img class="card-img-top" src="${data1.items[i].images[0].original}" alt="Card image cap">
        <div class="card-header">${data1.items[i].title}</div>
        <div class="card-body">
          <p class="card-title">Age: ${data1.items[i].age_max}</p>
          <p class="card-title">Gender: ${data1.items[i].sex}</p>
          <p class="card-title">Clarification: ${data1.items[i].poster_classification}</p>
         
        </div>
      </div>
      </div>`
    }
    document.body.append(container)
  }

  foo()