// Compiled by ClojureScript 0.0-2234
goog.provide('tailrecursion.hoplon.reload');
goog.require('cljs.core');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.hoplon');
goog.require('clojure.string');
goog.require('clojure.string');
tailrecursion.hoplon.reload.reload_BANG_ = (function reload_BANG_(sheet){var temp__4126__auto__ = sheet.href;if(cljs.core.truth_(temp__4126__auto__))
{var h = temp__4126__auto__;var k = "___tailrecursion_hoplon_reload___=";var q = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));return sheet.ownerNode.href = (((h.indexOf("?") < 0))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)):(((h.indexOf(k) < 0))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)+"&"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)):((new cljs.core.Keyword(null,"else","else",1017020587))?clojure.string.replace.call(null,h,cljs.core.re_pattern.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)+"\\d+")),q):null)));
} else
{return null;
}
});
/**
* Returns an atom whose value reflects the last modified time of the resource
* at the given `url`. The last modified time is obtained by polling the server
* with the given `interval` (in msec) with `HEAD` requests. If the response does
* not contain the special `X-Dev-Mode` header with the value `true` polling is
* then disabled.
*/
tailrecursion.hoplon.reload.file_modified_atom = (function file_modified_atom(url,interval){var last_mod = cljs.core.atom.call(null,null);var xhr_opts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",1014020321),url,new cljs.core.Keyword(null,"type","type",1017479852),"HEAD",new cljs.core.Keyword(null,"dataType","dataType",2802975094),"text"], null);var xhr_dev_QMARK_ = ((function (last_mod,xhr_opts){
return (function (p1__11421_SHARP_){return cljs.core._EQ_.call(null,"true",p1__11421_SHARP_.getResponseHeader("X-Dev-Mode"));
});})(last_mod,xhr_opts))
;var do_ajax = ((function (last_mod,xhr_opts,xhr_dev_QMARK_){
return (function (p1__11422_SHARP_,p2__11423_SHARP_){return jQuery.ajax(cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,p1__11422_SHARP_,new cljs.core.Keyword(null,"success","success",3441701749),p2__11423_SHARP_)));
});})(last_mod,xhr_opts,xhr_dev_QMARK_))
;var xhr_mod = ((function (last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax){
return (function (p1__11424_SHARP_){return Date.parse(p1__11424_SHARP_.getResponseHeader("Last-Modified"));
});})(last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax))
;((function (last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod){
return (function() { 
var do_poll__delegate = function (p__11428){var vec__11430 = p__11428;var _ = cljs.core.nth.call(null,vec__11430,0,null);var ___$1 = cljs.core.nth.call(null,vec__11430,1,null);var xhr = cljs.core.nth.call(null,vec__11430,2,null);if(cljs.core.truth_(xhr))
{cljs.core.reset_BANG_.call(null,last_mod,xhr_mod.call(null,xhr));
} else
{}
if((cljs.core.not.call(null,xhr)) || (xhr_dev_QMARK_.call(null,xhr)))
{return setTimeout(((function (vec__11430,_,___$1,xhr,last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod){
return (function (){return do_ajax.call(null,xhr_opts,do_poll);
});})(vec__11430,_,___$1,xhr,last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod))
,interval);
} else
{return null;
}
};
var do_poll = function (var_args){
var p__11428 = null;if (arguments.length > 0) {
  p__11428 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return do_poll__delegate.call(this,p__11428);};
do_poll.cljs$lang$maxFixedArity = 0;
do_poll.cljs$lang$applyTo = (function (arglist__11431){
var p__11428 = cljs.core.seq(arglist__11431);
return do_poll__delegate(p__11428);
});
do_poll.cljs$core$IFn$_invoke$arity$variadic = do_poll__delegate;
return do_poll;
})()
;})(last_mod,xhr_opts,xhr_dev_QMARK_,do_ajax,xhr_mod))
.call(null);
return last_mod;
});
/**
* Runs the given `callback` whenever the last modified time of the resource at
* the given `url` changes, polling with the given `interval` in milliseconds.
*/
tailrecursion.hoplon.reload.on_modified = (function on_modified(url,interval,callback){return cljs.core.add_watch.call(null,tailrecursion.hoplon.reload.file_modified_atom.call(null,url,(function (){var or__7535__auto__ = interval;if(cljs.core.truth_(or__7535__auto__))
{return or__7535__auto__;
} else
{return 100;
}
})()),null,(function (p1__11434_SHARP_,p2__11435_SHARP_,p3__11432_SHARP_,p4__11433_SHARP_){if(cljs.core.truth_((function (){var and__7523__auto__ = p3__11432_SHARP_;if(cljs.core.truth_(and__7523__auto__))
{return cljs.core.not_EQ_.call(null,p3__11432_SHARP_,p4__11433_SHARP_);
} else
{return and__7523__auto__;
}
})()))
{return callback.call(null);
} else
{return null;
}
}));
});
/**
* Reloads the page whenever Hoplon's .js file is modified. The optional
* `interval` argument specifies how often to poll the server for changes, in
* milliseconds.
* @param {...*} var_args
*/
tailrecursion.hoplon.reload.reload_js = (function() { 
var reload_js__delegate = function (p__11436){var vec__11438 = p__11436;var interval = cljs.core.nth.call(null,vec__11438,0,null);return tailrecursion.hoplon.reload.on_modified.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1("c6f4dce0-0384-11e4-9191-0800200c9a66")+".js"),interval,((function (vec__11438,interval){
return (function (){return window.location.reload();
});})(vec__11438,interval))
);
};
var reload_js = function (var_args){
var p__11436 = null;if (arguments.length > 0) {
  p__11436 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_js__delegate.call(this,p__11436);};
reload_js.cljs$lang$maxFixedArity = 0;
reload_js.cljs$lang$applyTo = (function (arglist__11439){
var p__11436 = cljs.core.seq(arglist__11439);
return reload_js__delegate(p__11436);
});
reload_js.cljs$core$IFn$_invoke$arity$variadic = reload_js__delegate;
return reload_js;
})()
;
/**
* Reloads CSS stylesheets whenever they are modified. The page itself is not
* reloaded, just the stylesheets. The optional `interval` argument specifies
* how often to poll the server for changes, in milliseconds.
* @param {...*} var_args
*/
tailrecursion.hoplon.reload.reload_css = (function() { 
var reload_css__delegate = function (p__11441){var vec__11459 = p__11441;var interval = cljs.core.nth.call(null,vec__11459,0,null);return ((function (vec__11459,interval){
return (function wait_css(){var css = document.styleSheets;var each = cljs.core.range.call(null,0,css.length);var css_seq = cljs.core.keep.call(null,((function (css,each,vec__11459,interval){
return (function (p1__11440_SHARP_){return p1__11440_SHARP_.href;
});})(css,each,vec__11459,interval))
,(function (){var iter__8260__auto__ = ((function (css,each,vec__11459,interval){
return (function iter__11468(s__11469){return (new cljs.core.LazySeq(null,((function (css,each,vec__11459,interval){
return (function (){var s__11469__$1 = s__11469;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11469__$1);if(temp__4126__auto__)
{var s__11469__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11469__$2))
{var c__8258__auto__ = cljs.core.chunk_first.call(null,s__11469__$2);var size__8259__auto__ = cljs.core.count.call(null,c__8258__auto__);var b__11471 = cljs.core.chunk_buffer.call(null,size__8259__auto__);if((function (){var i__11470 = 0;while(true){
if((i__11470 < size__8259__auto__))
{var s = cljs.core._nth.call(null,c__8258__auto__,i__11470);cljs.core.chunk_append.call(null,b__11471,(css[s]));
{
var G__11476 = (i__11470 + 1);
i__11470 = G__11476;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11471),iter__11468.call(null,cljs.core.chunk_rest.call(null,s__11469__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11471),null);
}
} else
{var s = cljs.core.first.call(null,s__11469__$2);return cljs.core.cons.call(null,(css[s]),iter__11468.call(null,cljs.core.rest.call(null,s__11469__$2)));
}
} else
{return null;
}
break;
}
});})(css,each,vec__11459,interval))
,null,null));
});})(css,each,vec__11459,interval))
;return iter__8260__auto__.call(null,each);
})());if(cljs.core.not.call(null,cljs.core.seq.call(null,css_seq)))
{return setTimeout(wait_css,(function (){var or__7535__auto__ = interval;if(cljs.core.truth_(or__7535__auto__))
{return or__7535__auto__;
} else
{return 100;
}
})());
} else
{var seq__11472 = cljs.core.seq.call(null,cljs.core.range.call(null,0,css.length));var chunk__11473 = null;var count__11474 = 0;var i__11475 = 0;while(true){
if((i__11475 < count__11474))
{var s = cljs.core._nth.call(null,chunk__11473,i__11475);var temp__4126__auto___11477 = (css[s]);if(cljs.core.truth_(temp__4126__auto___11477))
{var sheet_11478 = temp__4126__auto___11477;var temp__4126__auto___11479__$1 = sheet_11478.href;if(cljs.core.truth_(temp__4126__auto___11479__$1))
{var href_11480 = temp__4126__auto___11479__$1;tailrecursion.hoplon.reload.on_modified.call(null,href_11480,interval,((function (seq__11472,chunk__11473,count__11474,i__11475,href_11480,temp__4126__auto___11479__$1,sheet_11478,temp__4126__auto___11477,s,css,each,css_seq,vec__11459,interval){
return (function (){return tailrecursion.hoplon.reload.reload_BANG_.call(null,(css[s]));
});})(seq__11472,chunk__11473,count__11474,i__11475,href_11480,temp__4126__auto___11479__$1,sheet_11478,temp__4126__auto___11477,s,css,each,css_seq,vec__11459,interval))
);
} else
{}
} else
{}
{
var G__11481 = seq__11472;
var G__11482 = chunk__11473;
var G__11483 = count__11474;
var G__11484 = (i__11475 + 1);
seq__11472 = G__11481;
chunk__11473 = G__11482;
count__11474 = G__11483;
i__11475 = G__11484;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11472);if(temp__4126__auto__)
{var seq__11472__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11472__$1))
{var c__8291__auto__ = cljs.core.chunk_first.call(null,seq__11472__$1);{
var G__11485 = cljs.core.chunk_rest.call(null,seq__11472__$1);
var G__11486 = c__8291__auto__;
var G__11487 = cljs.core.count.call(null,c__8291__auto__);
var G__11488 = 0;
seq__11472 = G__11485;
chunk__11473 = G__11486;
count__11474 = G__11487;
i__11475 = G__11488;
continue;
}
} else
{var s = cljs.core.first.call(null,seq__11472__$1);var temp__4126__auto___11489__$1 = (css[s]);if(cljs.core.truth_(temp__4126__auto___11489__$1))
{var sheet_11490 = temp__4126__auto___11489__$1;var temp__4126__auto___11491__$2 = sheet_11490.href;if(cljs.core.truth_(temp__4126__auto___11491__$2))
{var href_11492 = temp__4126__auto___11491__$2;tailrecursion.hoplon.reload.on_modified.call(null,href_11492,interval,((function (seq__11472,chunk__11473,count__11474,i__11475,href_11492,temp__4126__auto___11491__$2,sheet_11490,temp__4126__auto___11489__$1,s,seq__11472__$1,temp__4126__auto__,css,each,css_seq,vec__11459,interval){
return (function (){return tailrecursion.hoplon.reload.reload_BANG_.call(null,(css[s]));
});})(seq__11472,chunk__11473,count__11474,i__11475,href_11492,temp__4126__auto___11491__$2,sheet_11490,temp__4126__auto___11489__$1,s,seq__11472__$1,temp__4126__auto__,css,each,css_seq,vec__11459,interval))
);
} else
{}
} else
{}
{
var G__11493 = cljs.core.next.call(null,seq__11472__$1);
var G__11494 = null;
var G__11495 = 0;
var G__11496 = 0;
seq__11472 = G__11493;
chunk__11473 = G__11494;
count__11474 = G__11495;
i__11475 = G__11496;
continue;
}
}
} else
{return null;
}
}
break;
}
}
});})(vec__11459,interval))
.call(null);
};
var reload_css = function (var_args){
var p__11441 = null;if (arguments.length > 0) {
  p__11441 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_css__delegate.call(this,p__11441);};
reload_css.cljs$lang$maxFixedArity = 0;
reload_css.cljs$lang$applyTo = (function (arglist__11497){
var p__11441 = cljs.core.seq(arglist__11497);
return reload_css__delegate(p__11441);
});
reload_css.cljs$core$IFn$_invoke$arity$variadic = reload_css__delegate;
return reload_css;
})()
;
/**
* Reload the page when `main.js` is modified, and CSS stylesheets as needed.
* The optional `interval` argument specifies how often to poll the server for
* changes, in milliseconds.
* @param {...*} var_args
*/
tailrecursion.hoplon.reload.reload_all = (function() { 
var reload_all__delegate = function (p__11498){var vec__11500 = p__11498;var interval = cljs.core.nth.call(null,vec__11500,0,null);tailrecursion.hoplon.reload.reload_js.call(null,interval);
return tailrecursion.hoplon.reload.reload_css.call(null,interval);
};
var reload_all = function (var_args){
var p__11498 = null;if (arguments.length > 0) {
  p__11498 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return reload_all__delegate.call(this,p__11498);};
reload_all.cljs$lang$maxFixedArity = 0;
reload_all.cljs$lang$applyTo = (function (arglist__11501){
var p__11498 = cljs.core.seq(arglist__11501);
return reload_all__delegate(p__11498);
});
reload_all.cljs$core$IFn$_invoke$arity$variadic = reload_all__delegate;
return reload_all;
})()
;
