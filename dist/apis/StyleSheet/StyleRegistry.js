var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();



var _createReactDOMStyle=require('./createReactDOMStyle');var _createReactDOMStyle2=_interopRequireDefault(_createReactDOMStyle);
var _flattenArray=require('../../modules/flattenArray');var _flattenArray2=_interopRequireDefault(_flattenArray);
var _flattenStyle=require('./flattenStyle');var _flattenStyle2=_interopRequireDefault(_flattenStyle);
var _I18nManager=require('../I18nManager');var _I18nManager2=_interopRequireDefault(_I18nManager);
var _i18nStyle=require('./i18nStyle');var _i18nStyle2=_interopRequireDefault(_i18nStyle);
var _prefixStyles=require('../../modules/prefixStyles');
var _ReactNativePropRegistry=require('../../modules/ReactNativePropRegistry');var _ReactNativePropRegistry2=_interopRequireDefault(_ReactNativePropRegistry);
var _StyleManager=require('./StyleManager');var _StyleManager2=_interopRequireDefault(_StyleManager);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var emptyObject={};

var createCacheKey=function createCacheKey(id){
var prefix='rn';
return prefix+'-'+id;
};

var classListToString=function classListToString(list){return list.join(' ').trim();};var

StyleRegistry=function(){
function StyleRegistry(){_classCallCheck(this,StyleRegistry);
this.cache={ltr:{},rtl:{}};
this.styleManager=new _StyleManager2.default();
}_createClass(StyleRegistry,[{key:'getStyleSheetHtml',value:function getStyleSheetHtml()

{
return this.styleManager.getStyleSheetHtml();
}},{key:'register',value:function register(




flatStyle){
var id=_ReactNativePropRegistry2.default.register(flatStyle);
this._registerById(id);
return id;
}},{key:'_registerById',value:function _registerById(

id){var _this=this;
var dir=_I18nManager2.default.isRTL?'rtl':'ltr';
if(!this.cache[dir][id]){
var style=(0,_flattenStyle2.default)(id);
var domStyle=(0,_createReactDOMStyle2.default)((0,_i18nStyle2.default)(style));
Object.keys(domStyle).forEach(function(styleProp){
var value=domStyle[styleProp];
if(value!=null){
_this.styleManager.setDeclaration(styleProp,value);
}
});
this.cache[dir][id]=true;
}
}},{key:'resolve',value:function resolve(




reactNativeStyle){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:emptyObject;
if(!reactNativeStyle){
return undefined;
}


if(typeof reactNativeStyle==='number'){
this._registerById(reactNativeStyle);
var _key=createCacheKey(reactNativeStyle);
return this._resolveStyleIfNeeded(reactNativeStyle,options,_key);
}


if(!Array.isArray(reactNativeStyle)){
return this._resolveStyle(reactNativeStyle,options);
}




var flatArray=(0,_flattenArray2.default)(reactNativeStyle);
var isArrayOfNumbers=true;
for(var i=0;i<flatArray.length;i++){
var id=flatArray[i];
if(typeof id!=='number'){
isArrayOfNumbers=false;
}else{
this._registerById(id);
}
}
var key=isArrayOfNumbers?createCacheKey(flatArray.join('-')):null;
return this._resolveStyleIfNeeded(flatArray,options,key);
}},{key:'resolveStateful',value:function resolveStateful(








rnStyleNext,domStyleProps,options){var _this2=this;var
rdomClassList=domStyleProps.classList,rdomStyle=domStyleProps.style;var _rdomClassList$reduce=



rdomClassList.reduce(
function(styleProps,className){var _styleManager$getDecl=
_this2.styleManager.getDeclaration(className),prop=_styleManager$getDecl.prop,value=_styleManager$getDecl.value;
if(prop){
styleProps.style[prop]=value;
}else{
styleProps.classList.push(className);
}
return styleProps;
},
{classList:[],style:{}}),rnClassList=_rdomClassList$reduce.classList,rnStyle=_rdomClassList$reduce.style;var _resolve=



this.resolve(
[rnStyle,rnStyleNext],
options),rdomClassListNext=_resolve.classList,rdomStyleNext=_resolve.style;



var style=_extends({},rdomStyle);
rdomClassListNext.forEach(function(className){var _styleManager$getDecl2=
_this2.styleManager.getDeclaration(className),prop=_styleManager$getDecl2.prop;
if(style[prop]){
style[prop]='';
}
});


_extends(style,rdomStyleNext);


var className=classListToString(rdomClassListNext.concat(rnClassList));

return{className:className,style:style};
}},{key:'_resolveStyle',value:function _resolveStyle(




reactNativeStyle,options){var _this3=this;
var flatStyle=(0,_flattenStyle2.default)(reactNativeStyle);
var domStyle=(0,_createReactDOMStyle2.default)(options.i18n===false?flatStyle:(0,_i18nStyle2.default)(flatStyle));

var props=Object.keys(domStyle).reduce(
function(props,styleProp){
var value=domStyle[styleProp];
if(value!=null){
var className=_this3.styleManager.getClassName(styleProp,value);
if(className){
props.classList.push(className);
}else{
if(!props.style){
props.style={};
}

props.style[styleProp]=value;
}
}
return props;
},
{classList:[]});


props.className=classListToString(props.classList);
if(props.style){
props.style=(0,_prefixStyles.prefixInlineStyles)(props.style);
}
return props;
}},{key:'_resolveStyleIfNeeded',value:function _resolveStyleIfNeeded(




style,options,key){
var dir=_I18nManager2.default.isRTL?'rtl':'ltr';
if(key){
if(!this.cache[dir][key]){

this.cache[dir][key]=this._resolveStyle(style,options);
}
return this.cache[dir][key];
}
return this._resolveStyle(style,options);
}}]);return StyleRegistry;}();


module.exports=StyleRegistry;