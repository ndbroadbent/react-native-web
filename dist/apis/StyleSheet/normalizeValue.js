var _unitlessNumbers=require('../../modules/unitlessNumbers');var _unitlessNumbers2=_interopRequireDefault(_unitlessNumbers);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var normalizeValue=function normalizeValue(property,value){
if(!_unitlessNumbers2.default[property]&&typeof value==='number'){
value=value+'px';
}
return value;
};

module.exports=normalizeValue;