const dataDisplayer = document.querySelectorAll(".dataget");

fetch('https://fakestoreapi.com/products')
  .then((response) => response.json())
  .then((data) => {
    dataDisplayer.forEach((element) => {
      element.innerHTML += data.map((getData) => {
        return `
        <div class="myImg">
        <h1>${getData.title}</h1>
        <p>${getData.description}</p>
        <img src="${getData.image}" alt="" >
        </div>
        
        `;
      }).join('');
    });
  })
  .catch((error) => console.error(error));