var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _ColorPropType=require('../../propTypes/ColorPropType');var _ColorPropType2=_interopRequireDefault(_ColorPropType);
var _ViewStylePropTypes=require('../View/ViewStylePropTypes');var _ViewStylePropTypes2=_interopRequireDefault(_ViewStylePropTypes);
var _propTypes=require('prop-types');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var numberOrString=(0,_propTypes.oneOfType)([_propTypes.number,_propTypes.string]);

var ShadowOffsetPropType=(0,_propTypes.shape)({width:_propTypes.number,height:_propTypes.number});
var TextAlignPropType=(0,_propTypes.oneOf)(['center','inherit','justify','justify-all','left','right']);
var WritingDirectionPropType=(0,_propTypes.oneOf)(['auto','ltr','rtl']);

var TextOnlyStylePropTypes={
color:_ColorPropType2.default,
fontFamily:_propTypes.string,
fontFeatureSettings:_propTypes.string,
fontSize:numberOrString,
fontStyle:_propTypes.string,
fontWeight:_propTypes.string,
letterSpacing:numberOrString,
lineHeight:numberOrString,
textAlign:TextAlignPropType,
textAlignVertical:(0,_propTypes.oneOf)(['auto','bottom','center','top']),
textDecorationLine:_propTypes.string,
textShadowColor:_ColorPropType2.default,
textShadowOffset:ShadowOffsetPropType,
textShadowRadius:_propTypes.number,
writingDirection:WritingDirectionPropType,

textOverflow:_propTypes.string,
textRendering:(0,_propTypes.oneOf)(['auto','geometricPrecision','optimizeLegibility','optimizeSpeed']),
textTransform:(0,_propTypes.oneOf)(['capitalize','lowercase','none','uppercase']),
unicodeBidi:(0,_propTypes.oneOf)([
'normal',
'bidi-override',
'embed',
'isolate',
'isolate-override',
'plaintext']),

whiteSpace:_propTypes.string,
wordWrap:_propTypes.string,
MozOsxFontSmoothing:_propTypes.string,
WebkitFontSmoothing:_propTypes.string};


module.exports=_extends({},_ViewStylePropTypes2.default,

TextOnlyStylePropTypes);