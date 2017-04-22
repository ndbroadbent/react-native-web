var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var ImageUriCache=function(){function ImageUriCache(){_classCallCheck(this,ImageUriCache);}_createClass(ImageUriCache,null,[{key:"has",value:function has(



uri){
var entries=ImageUriCache._entries;
var isDataUri=/^data:/.test(uri);
return isDataUri||Boolean(entries[uri]);
}},{key:"add",value:function add(

uri){
var entries=ImageUriCache._entries;
var lastUsedTimestamp=Date.now();
if(entries[uri]){
entries[uri].lastUsedTimestamp=lastUsedTimestamp;
entries[uri].refCount+=1;
}else{
entries[uri]={
lastUsedTimestamp:lastUsedTimestamp,
refCount:1};

}
}},{key:"remove",value:function remove(

uri){
var entries=ImageUriCache._entries;
if(entries[uri]){
entries[uri].refCount-=1;
}

ImageUriCache._cleanUpIfNeeded();
}},{key:"_cleanUpIfNeeded",value:function _cleanUpIfNeeded()

{
var entries=ImageUriCache._entries;
var imageUris=Object.keys(entries);

if(imageUris.length+1>ImageUriCache._maximumEntries){
var leastRecentlyUsedKey=void 0;
var leastRecentlyUsedEntry=void 0;

imageUris.forEach(function(uri){
var entry=entries[uri];
if(
(!leastRecentlyUsedEntry||
entry.lastUsedTimestamp<leastRecentlyUsedEntry.lastUsedTimestamp)&&
entry.refCount===0)
{
leastRecentlyUsedKey=uri;
leastRecentlyUsedEntry=entry;
}
});

if(leastRecentlyUsedKey){
delete entries[leastRecentlyUsedKey];
}
}
}}]);return ImageUriCache;}();ImageUriCache._maximumEntries=256;ImageUriCache._entries={};


module.exports=ImageUriCache;