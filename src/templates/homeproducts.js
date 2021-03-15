$(document).ready(function () {
  Handlebars.registerHelper("showPrice", function (price, salePrice) {
    return `${(price - salePrice).toLocaleString()}đ`;
  });

  Handlebars.registerHelper("salePecents", function (price, salePrice) {
    return `${Math.ceil((salePrice / price) * 100)}%`;
  });

  $.ajax({
    url: "/products/pro",
    dataType: "json",
  }).done(function (products) {
    $.each(products, function (index, product) {
      let html = Handlebars.templates["products.hbs"](product);
      $(".data").append(html);
    });
  });
});
