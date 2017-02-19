Object.defineProperty(exports,"__esModule",{value:true});var _requestIdleCallback=function _requestIdleCallback(cb){
return setTimeout(function(){
var start=Date.now();
cb({
didTimeout:false,
timeRemaining:function timeRemaining(){
return Math.max(0,50-(Date.now()-start));
}});

},1);
};

var _cancelIdleCallback=function _cancelIdleCallback(id){
clearTimeout(id);
};

var requestIdleCallback=window.requestIdleCallback||_requestIdleCallback;
var cancelIdleCallback=window.cancelIdleCallback||_cancelIdleCallback;exports.default=

requestIdleCallback;exports.
cancelIdleCallback=cancelIdleCallback;