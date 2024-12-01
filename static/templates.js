(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['partials/gamesPlayed'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<span>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"games") || (depth0 != null ? lookupProperty(depth0,"games") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"games","hash":{},"data":data,"loc":{"start":{"line":1,"column":6},"end":{"line":1,"column":15}}}) : helper)))
    + "</span>";
},"useData":true});
})();