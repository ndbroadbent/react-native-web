Object.defineProperty(exports,"__esModule",{value:true});exports.cancelIdleCallback=undefined;
var _ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');

var _requestIdleCallback=function _requestIdleCallback(cb){
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

var isSupported=_ExecutionEnvironment.canUseDOM&&typeof window.requestIdleCallback!=='undefined';

var requestIdleCallback=isSupported?window.requestIdleCallback:_requestIdleCallback;
var cancelIdleCallback=isSupported?window.cancelIdleCallback:_cancelIdleCallback;exports.default=

requestIdleCallback;exports.
cancelIdleCallback=cancelIdleCallback;