function renderHTML(name, age, level) {
  return `
    <div>
        <b><label>Strudent Name: </label></b> 
        <label>${name}</label> <br>
        <b><label>Strudent Age: </label></b> 
        <label>${age}</label> <br>
        <b><label>Strudent Level: </label></b> 
        <label>${level}</label>
    </div>
    `;
}

document.querySelector(".my-div").innerHTML = renderHTML("Jamison", 28, 400);
