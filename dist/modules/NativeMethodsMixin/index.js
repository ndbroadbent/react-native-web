







var _createDOMProps=require('../createDOMProps');var _createDOMProps2=_interopRequireDefault(_createDOMProps);
var _findNodeHandle=require('../findNodeHandle');var _findNodeHandle2=_interopRequireDefault(_findNodeHandle);
var _i18nStyle=require('../../apis/StyleSheet/i18nStyle');var _i18nStyle2=_interopRequireDefault(_i18nStyle);
var _registry=require('../../apis/StyleSheet/registry');var _registry2=_interopRequireDefault(_registry);
var _UIManager=require('../../apis/UIManager');var _UIManager2=_interopRequireDefault(_UIManager);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var hyphenPattern=/-([a-z])/g;
var toCamelCase=function toCamelCase(str){return str.replace(hyphenPattern,function(m){return m[1].toUpperCase();});};

var NativeMethodsMixin={



blur:function blur(){
_UIManager2.default.blur((0,_findNodeHandle2.default)(this));
},





focus:function focus(){
_UIManager2.default.focus((0,_findNodeHandle2.default)(this));
},




measure:function measure(callback){
_UIManager2.default.measure((0,_findNodeHandle2.default)(this),callback);
},
















measureInWindow:function measureInWindow(callback){
_UIManager2.default.measureInWindow((0,_findNodeHandle2.default)(this),callback);
},




measureLayout:function measureLayout(relativeToNativeNode,onSuccess,onFail){
_UIManager2.default.measureLayout((0,_findNodeHandle2.default)(this),relativeToNativeNode,onFail,onSuccess);
},







setNativeProps:function setNativeProps(nativeProps){

var node=(0,_findNodeHandle2.default)(this);
var nodeStyle=node.style;
var classList=Array.prototype.slice.call(node.classList);
var style={};


for(var i=0;i<node.style.length;i+=1){
var property=nodeStyle.item(i);
if(property){


style[toCamelCase(property)]=nodeStyle.getPropertyValue(property);
}
}
var domStyleProps={classList:classList,style:style};


var domProps=(0,_createDOMProps2.default)((0,_i18nStyle2.default)(nativeProps),function(style){return(
_registry2.default.resolveStateful(style,domStyleProps,{i18n:false}));});

_UIManager2.default.updateView(node,domProps,this);
}};


module.exports=NativeMethodsMixin;