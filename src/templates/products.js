(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['products.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"col l-2-4 m-4 c-6\">\n  <!-- Product item -->\n  <a class=\"home-product-item\" href=\"/products/show/"
    + alias4(((helper = (helper = lookupProperty(helpers,"slug") || (depth0 != null ? lookupProperty(depth0,"slug") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"slug","hash":{},"data":data,"loc":{"start":{"line":3,"column":52},"end":{"line":3,"column":60}}}) : helper)))
    + "\">\n    <div\n      class=\"home-product-item__img\"\n      style=\"background-image: url(data:"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"contentType") : stack1), depth0))
    + ";base64,"
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"image") : depth0)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"data") : stack1), depth0))
    + ");\">\n    </div>\n    <h4 class=\"home-product-item__name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":8,"column":40},"end":{"line":8,"column":48}}}) : helper)))
    + "</h4>\n    <div class=\"home-product-item__price\">\n      <span class=\"home-product-item__price-old\">"
    + alias4((lookupProperty(helpers,"showPrice")||(depth0 && lookupProperty(depth0,"showPrice"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"price") : depth0),0,{"name":"showPrice","hash":{},"data":data,"loc":{"start":{"line":10,"column":49},"end":{"line":10,"column":70}}}))
    + "</span>\n      <span class=\"home-product-item__price-current\">"
    + alias4((lookupProperty(helpers,"showPrice")||(depth0 && lookupProperty(depth0,"showPrice"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"price") : depth0),(depth0 != null ? lookupProperty(depth0,"salePrice") : depth0),{"name":"showPrice","hash":{},"data":data,"loc":{"start":{"line":11,"column":53},"end":{"line":11,"column":82}}}))
    + "</span>\n    </div>\n    <div class=\"home-product-item__action\">\n      <span class=\"home-product-item__like home-product-item__like--liked\">\n        <i class=\"home-product-item__like-icon-empty far fa-heart\"></i>\n        <i class=\"home-product-item__like-icon-fill fas fa-heart\"></i>\n      </span>\n      <div class=\"home-product-item__rating\">\n        <i class=\"home-product-item__star--gold fas fa-star\"></i>\n        <i class=\"home-product-item__star--gold fas fa-star\"></i>\n        <i class=\"home-product-item__star--gold fas fa-star\"></i>\n        <i class=\"home-product-item__star--gold fas fa-star\"></i>\n        <i class=\"fas fa-star\"></i>\n      </div>\n      <span class=\"home-product-item__sold\">88 đã bán</span>\n    </div>\n\n    <div class=\"home-product-item__origin\">\n      <span class=\"home-product-item__brand\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"brand") || (depth0 != null ? lookupProperty(depth0,"brand") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"brand","hash":{},"data":data,"loc":{"start":{"line":29,"column":45},"end":{"line":29,"column":54}}}) : helper)))
    + "</span>\n      <span class=\"home-product-item__origin-name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"country") || (depth0 != null ? lookupProperty(depth0,"country") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"country","hash":{},"data":data,"loc":{"start":{"line":30,"column":51},"end":{"line":30,"column":62}}}) : helper)))
    + "</span>\n    </div>\n    <div class=\"home-product-item__favourite\">\n      <i class=\"fas fa-check\"></i>\n      <span>Yêu thích</span>\n    </div>\n    <div class=\"home-product-item__sale-off\">\n      <span class=\"home-product-item__sale-off-percent\"\n        >"
    + alias4((lookupProperty(helpers,"salePecents")||(depth0 && lookupProperty(depth0,"salePecents"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"price") : depth0),(depth0 != null ? lookupProperty(depth0,"salePrice") : depth0),{"name":"salePecents","hash":{},"data":data,"loc":{"start":{"line":38,"column":9},"end":{"line":38,"column":40}}}))
    + "</span>\n      <span class=\"home-product-item__sale-off-label\">GIẢM</span>\n    </div>\n  </a>\n</div>\n";
},"useData":true});
})();