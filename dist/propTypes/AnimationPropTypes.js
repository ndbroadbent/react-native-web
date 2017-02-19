var _react=require('react');var

number=_react.PropTypes.number;var oneOf=_react.PropTypes.oneOf;var oneOfType=_react.PropTypes.oneOfType;var string=_react.PropTypes.string;

var AnimationPropTypes={
animationDelay:string,
animationDirection:oneOf(['alternate','alternate-reverse','normal','reverse']),
animationDuration:string,
animationFillMode:oneOf(['none','forwards','backwards','both']),
animationIterationCount:oneOfType([number,oneOf(['infinite'])]),
animationName:string,
animationPlayState:oneOf(['paused','running']),
animationTimingFunction:string};


module.exports=AnimationPropTypes;