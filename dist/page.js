'use strict';var _slicedToArray=function(){function c(d,e){var f=[],g=!0,h=!1,j=void 0;try{for(var l,k=d[Symbol.iterator]();!(g=(l=k.next()).done)&&(f.push(l.value),!(e&&f.length===e));g=!0);}catch(m){h=!0,j=m}finally{try{!g&&k['return']&&k['return']()}finally{if(h)throw j}}return f}return function(d,e){if(Array.isArray(d))return d;if(Symbol.iterator in Object(d))return c(d,e);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}();Object.defineProperty(exports,'__esModule',{value:!0});exports.default=wikiPage;var _util=require('./util'),_infoboxParser=require('infobox-parser'),_infoboxParser2=_interopRequireDefault(_infoboxParser),_coordinates=require('./coordinates');function _interopRequireDefault(c){return c&&c.__esModule?c:{default:c}}function _toConsumableArray(c){if(Array.isArray(c)){for(var d=0,e=Array(c.length);d<c.length;d++)e[d]=c[d];return e}return Array.from(c)}var getFileName=function(c){if(c){if(-1!==c.indexOf(':')){var d=c.split(':'),e=_slicedToArray(d,2),f=e[1];return f}return c}};function wikiPage(c,d){function h(){return(0,_util.api)(d,{generator:'images',gimlimit:'max',prop:'imageinfo',iiprop:'url',titles:t.title}).then(function(v){return v.query?Object.keys(v.query.pages).map(function(w){return v.query.pages[w]}):[]})}function p(){return(0,_util.api)(d,{prop:'revisions',rvprop:'content',rvsection:0,titles:t.title}).then(function(v){return v.query.pages[t.pageid].revisions[0]['*']})}function q(v){return p().then(function(w){return(0,_infoboxParser2.default)(w,d.parser)}).then(function(w){return v?w.hasOwnProperty(v)?w[v]:void 0:w})}var t=c;return{raw:t,html:function(){return(0,_util.api)(d,{prop:'revisions',rvprop:'content',rvlimit:1,rvparse:'',titles:t.title}).then(function(v){return v.query.pages[t.pageid].revisions[0]['*']})},content:function(){return(0,_util.api)(d,{prop:'extracts',explaintext:'',titles:t.title}).then(function(v){return v.query.pages[t.pageid].extract})},summary:function(){return(0,_util.api)(d,{prop:'extracts',explaintext:'',exintro:'',titles:t.title}).then(function(v){return v.query.pages[t.pageid].extract})},images:function(){return h().then(function(v){return v.map(function(w){return w.imageinfo}).reduce(function(w,x){return[].concat(_toConsumableArray(w),_toConsumableArray(x))},[]).map(function(w){return w.url})})},references:function(){return(0,_util.api)(d,{prop:'extlinks',ellimit:'max',titles:t.title}).then(function(v){return v.query.pages[t.pageid].extlinks.map(function(w){return w['*']})})},links:function(){var v=0<arguments.length&&arguments[0]!==void 0?arguments[0]:!0,w=1<arguments.length&&arguments[1]!==void 0?arguments[1]:100,x=(0,_util.pagination)(d,{prop:'links',plnamespace:0,pllimit:w,titles:t.title},function(y){return y.query.pages[t.pageid].links.map(function(z){return z.title})});return v?(0,_util.aggregatePagination)(x):x},categories:function(){var v=0<arguments.length&&arguments[0]!==void 0?arguments[0]:!0,w=1<arguments.length&&arguments[1]!==void 0?arguments[1]:100,x=(0,_util.pagination)(d,{prop:'categories',pllimit:w,titles:t.title},function(y){return y.query.pages[t.pageid].categories.map(function(z){return z.title})});return v?(0,_util.aggregatePagination)(x):x},coordinates:function(){return(0,_util.api)(d,{prop:'coordinates',titles:t.title}).then(function(v){var w=v.query.pages[t.pageid];return w.coordinates?w.coordinates[0]:q().then(function(x){return(0,_coordinates.parseCoordinates)(x)})})},info:q,backlinks:function(){var v=0<arguments.length&&arguments[0]!==void 0?arguments[0]:!0,w=1<arguments.length&&arguments[1]!==void 0?arguments[1]:100,x=(0,_util.pagination)(d,{list:'backlinks',bllimit:w,bltitle:t.title},function(y){return y.query.backlinks.map(function(z){return z.title})});return v?(0,_util.aggregatePagination)(x):x},rawImages:h,mainImage:function(){return Promise.all([h(),q()]).then(function(v){var w=_slicedToArray(v,2),x=w[0],y=w[1],z=getFileName(y.image||y.bildname||y.imagen||y.Immagine||y.badge||y.logo);if(!z)return p().then(function(B){if(x.length){x.sort(function(D,E){return B.indexOf(E.title)-B.indexOf(D.title)});var C=x[0];return 0<C.imageinfo.length?C.imageinfo[0].url:void 0}});var A=x.find(function(B){var C=B.title,D=getFileName(C);return D===z||D.replace(/\s/g,'_')===z});return A&&0<A.imageinfo.length?A.imageinfo[0].url:void 0})},langlinks:function(){return(0,_util.api)(d,{prop:'langlinks',lllimit:'max',titles:t.title}).then(function(v){return v.query.pages[t.pageid].langlinks.map(function(w){return{lang:w.lang,title:w['*']}})})},rawInfo:p}}
//# sourceMappingURL=page.js.map