// console.log("hi mom");
fetch("http://mosholm.com/2ndSem/wp_bikeStock/wp-json/wp/v2/categories")
  .then(function (res) {
    return res.json();
  })

  .then(function (data) {
    categoryList(data);
  });

function categoryList(catArray) {
  //   console.log(data);

  const template = document.querySelector("template#categoryList").content;
  const parrentelement = document.querySelector("nav");
  catArray.forEach((cat) => {
    const copy = template.cloneNode(true);
    copy.querySelector("li").textContent = cat.name;
    parrentelement.appendChild(copy);
  });
}

fetch("http://mosholm.com/2ndSem/wp_bikeStock/wp-json/wp/v2/bike?_embed")
  .then(function (res) {
    return res.json();
  })

  .then(function (data) {
    productList(data);
  });

function productList(data) {
  const template = document.querySelector("template#productCard").content;
  const parrentelement = document.querySelector("article");

  data.forEach((product) => {
    fetch("http://mosholm.com/2ndSem/wp_bikeStock/wp-json/wp/v2/categories")
      .then(function (res) {
        return res.json();
      })

      .then((e) => {
        const copy = template.cloneNode(true);
        console.log(e.name);
        copy.querySelector(".type").textContent = data.name;
        copy.querySelector(".name").textContent = product.title.rendered;
        copy.querySelector(".price").textContent = `Price - ${product.price}`;
        copy.querySelector(".color");
        copy.querySelector(".stock").textContent = `Stock - ${product.stock}`;
        copy.querySelector(".button");
        copy.querySelector("img").src = product._embeded.source_url;

        parrentelement.appendChild(copy);
      });
  });
}
