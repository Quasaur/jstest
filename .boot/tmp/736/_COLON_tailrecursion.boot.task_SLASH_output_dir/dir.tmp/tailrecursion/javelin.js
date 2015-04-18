// Compiled by ClojureScript 0.0-2234
goog.provide('tailrecursion.javelin');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');
goog.require('tailrecursion.priority_map');
tailrecursion.javelin._STAR_tx_STAR_ = null;
tailrecursion.javelin.last_rank = cljs.core.atom.call(null,0);
/**
* Like tree-seq but traversal is breadth-first instead of depth-first.
*/
tailrecursion.javelin.bf_seq = (function bf_seq(branch_QMARK_,children,root){var walk = (function walk(queue){var temp__4126__auto__ = cljs.core.peek.call(null,queue);if(cljs.core.truth_(temp__4126__auto__))
{var node = temp__4126__auto__;return (new cljs.core.LazySeq(null,((function (node,temp__4126__auto__){
return (function (){return cljs.core.cons.call(null,node,walk.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(cljs.core.truth_(branch_QMARK_.call(null,node))?children.call(null,node):null))));
});})(node,temp__4126__auto__))
,null,null));
} else
{return null;
}
});
return walk.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,root));
});
tailrecursion.javelin.propagate_STAR_ = (function propagate_STAR_(pri_map){while(true){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_))
{cljs.core.prn.call(null,new cljs.core.Keyword(null,"propagate","propagate",4582222491),pri_map);
} else
{}
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.peek.call(null,pri_map));if(cljs.core.truth_(temp__4126__auto__))
{var next = temp__4126__auto__;var popq = cljs.core.pop.call(null,pri_map);var old = next.prev;var new$ = (function (){var temp__4124__auto__ = next.thunk;if(cljs.core.truth_(temp__4124__auto__))
{var f = temp__4124__auto__;return f.call(null);
} else
{return next.state;
}
})();var diff_QMARK_ = cljs.core.not_EQ_.call(null,new$,old);if(diff_QMARK_)
{next.prev = new$;
cljs.core._notify_watches.call(null,next,old,new$);
} else
{}
{
var G__11194 = ((!(diff_QMARK_))?popq:cljs.core.reduce.call(null,((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4126__auto__){
return (function (p1__11192_SHARP_,p2__11193_SHARP_){return cljs.core.assoc.call(null,p1__11192_SHARP_,p2__11193_SHARP_,p2__11193_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4126__auto__))
,popq,next.sinks));
pri_map = G__11194;
continue;
}
} else
{return null;
}
break;
}
});
tailrecursion.javelin.deref_STAR_ = (function deref_STAR_(x){if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
tailrecursion.javelin.next_rank = (function next_rank(){return cljs.core.swap_BANG_.call(null,tailrecursion.javelin.last_rank,cljs.core.inc);
});
tailrecursion.javelin.cell__GT_pm = (function cell__GT_pm(c){return tailrecursion.priority_map.priority_map.call(null,c,c.rank);
});
tailrecursion.javelin.add_sync_BANG_ = (function add_sync_BANG_(c){return cljs.core.swap_BANG_.call(null,tailrecursion.javelin._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
tailrecursion.javelin.safe_nth = (function safe_nth(c,i){try{return cljs.core.nth.call(null,c,i);
}catch (e11196){if((e11196 instanceof Error))
{var _ = e11196;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11196;
} else
{return null;
}
}
}});
tailrecursion.javelin.propagate_BANG_ = (function propagate_BANG_(c){if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_))
{var G__11199 = c;tailrecursion.javelin.add_sync_BANG_.call(null,G__11199);
return G__11199;
} else
{var G__11200 = c;tailrecursion.javelin.propagate_STAR_.call(null,tailrecursion.javelin.cell__GT_pm.call(null,G__11200));
return G__11200;
}
});
/**
* @param {...*} var_args
*/
tailrecursion.javelin.destroy_cell_BANG_ = (function() { 
var destroy_cell_BANG___delegate = function (this$,p__11201){var vec__11207 = p__11201;var keep_watches_QMARK_ = cljs.core.nth.call(null,vec__11207,0,null);var srcs = this$.sources;this$.sources = cljs.core.PersistentVector.EMPTY;
this$.update = null;
this$.thunk = null;
if(cljs.core.truth_(keep_watches_QMARK_))
{} else
{this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}
var seq__11208 = cljs.core.seq.call(null,srcs);var chunk__11209 = null;var count__11210 = 0;var i__11211 = 0;while(true){
if((i__11211 < count__11210))
{var src = cljs.core._nth.call(null,chunk__11209,i__11211);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,src)))
{src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else
{}
{
var G__11212 = seq__11208;
var G__11213 = chunk__11209;
var G__11214 = count__11210;
var G__11215 = (i__11211 + 1);
seq__11208 = G__11212;
chunk__11209 = G__11213;
count__11210 = G__11214;
i__11211 = G__11215;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11208);if(temp__4126__auto__)
{var seq__11208__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11208__$1))
{var c__8291__auto__ = cljs.core.chunk_first.call(null,seq__11208__$1);{
var G__11216 = cljs.core.chunk_rest.call(null,seq__11208__$1);
var G__11217 = c__8291__auto__;
var G__11218 = cljs.core.count.call(null,c__8291__auto__);
var G__11219 = 0;
seq__11208 = G__11216;
chunk__11209 = G__11217;
count__11210 = G__11218;
i__11211 = G__11219;
continue;
}
} else
{var src = cljs.core.first.call(null,seq__11208__$1);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,src)))
{src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else
{}
{
var G__11220 = cljs.core.next.call(null,seq__11208__$1);
var G__11221 = null;
var G__11222 = 0;
var G__11223 = 0;
seq__11208 = G__11220;
chunk__11209 = G__11221;
count__11210 = G__11222;
i__11211 = G__11223;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var destroy_cell_BANG_ = function (this$,var_args){
var p__11201 = null;if (arguments.length > 1) {
  p__11201 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return destroy_cell_BANG___delegate.call(this,this$,p__11201);};
destroy_cell_BANG_.cljs$lang$maxFixedArity = 1;
destroy_cell_BANG_.cljs$lang$applyTo = (function (arglist__11224){
var this$ = cljs.core.first(arglist__11224);
var p__11201 = cljs.core.rest(arglist__11224);
return destroy_cell_BANG___delegate(this$,p__11201);
});
destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = destroy_cell_BANG___delegate;
return destroy_cell_BANG_;
})()
;
/**
* @param {...*} var_args
*/
tailrecursion.javelin.set_formula_BANG_ = (function() { 
var set_formula_BANG___delegate = function (this$,p__11227){var vec__11241 = p__11227;var f = cljs.core.nth.call(null,vec__11241,0,null);var sources = cljs.core.nth.call(null,vec__11241,1,null);tailrecursion.javelin.destroy_cell_BANG_.call(null,this$,true);
if(cljs.core.truth_(f))
{this$.sources = cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f);
var seq__11242_11254 = cljs.core.seq.call(null,this$.sources);var chunk__11243_11255 = null;var count__11244_11256 = 0;var i__11245_11257 = 0;while(true){
if((i__11245_11257 < count__11244_11256))
{var source_11258 = cljs.core._nth.call(null,chunk__11243_11255,i__11245_11257);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,source_11258)))
{source_11258.sinks = cljs.core.conj.call(null,source_11258.sinks,this$);
if((source_11258.rank > this$.rank))
{var seq__11246_11259 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__11242_11254,chunk__11243_11255,count__11244_11256,i__11245_11257,source_11258,vec__11241,f,sources){
return (function (p1__11225_SHARP_){return p1__11225_SHARP_.sinks;
});})(seq__11242_11254,chunk__11243_11255,count__11244_11256,i__11245_11257,source_11258,vec__11241,f,sources))
,source_11258));var chunk__11247_11260 = null;var count__11248_11261 = 0;var i__11249_11262 = 0;while(true){
if((i__11249_11262 < count__11248_11261))
{var dep_11263 = cljs.core._nth.call(null,chunk__11247_11260,i__11249_11262);dep_11263.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__11264 = seq__11246_11259;
var G__11265 = chunk__11247_11260;
var G__11266 = count__11248_11261;
var G__11267 = (i__11249_11262 + 1);
seq__11246_11259 = G__11264;
chunk__11247_11260 = G__11265;
count__11248_11261 = G__11266;
i__11249_11262 = G__11267;
continue;
}
} else
{var temp__4126__auto___11268 = cljs.core.seq.call(null,seq__11246_11259);if(temp__4126__auto___11268)
{var seq__11246_11269__$1 = temp__4126__auto___11268;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11246_11269__$1))
{var c__8291__auto___11270 = cljs.core.chunk_first.call(null,seq__11246_11269__$1);{
var G__11271 = cljs.core.chunk_rest.call(null,seq__11246_11269__$1);
var G__11272 = c__8291__auto___11270;
var G__11273 = cljs.core.count.call(null,c__8291__auto___11270);
var G__11274 = 0;
seq__11246_11259 = G__11271;
chunk__11247_11260 = G__11272;
count__11248_11261 = G__11273;
i__11249_11262 = G__11274;
continue;
}
} else
{var dep_11275 = cljs.core.first.call(null,seq__11246_11269__$1);dep_11275.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__11276 = cljs.core.next.call(null,seq__11246_11269__$1);
var G__11277 = null;
var G__11278 = 0;
var G__11279 = 0;
seq__11246_11259 = G__11276;
chunk__11247_11260 = G__11277;
count__11248_11261 = G__11278;
i__11249_11262 = G__11279;
continue;
}
}
} else
{}
}
break;
}
} else
{}
} else
{}
{
var G__11280 = seq__11242_11254;
var G__11281 = chunk__11243_11255;
var G__11282 = count__11244_11256;
var G__11283 = (i__11245_11257 + 1);
seq__11242_11254 = G__11280;
chunk__11243_11255 = G__11281;
count__11244_11256 = G__11282;
i__11245_11257 = G__11283;
continue;
}
} else
{var temp__4126__auto___11284 = cljs.core.seq.call(null,seq__11242_11254);if(temp__4126__auto___11284)
{var seq__11242_11285__$1 = temp__4126__auto___11284;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11242_11285__$1))
{var c__8291__auto___11286 = cljs.core.chunk_first.call(null,seq__11242_11285__$1);{
var G__11287 = cljs.core.chunk_rest.call(null,seq__11242_11285__$1);
var G__11288 = c__8291__auto___11286;
var G__11289 = cljs.core.count.call(null,c__8291__auto___11286);
var G__11290 = 0;
seq__11242_11254 = G__11287;
chunk__11243_11255 = G__11288;
count__11244_11256 = G__11289;
i__11245_11257 = G__11290;
continue;
}
} else
{var source_11291 = cljs.core.first.call(null,seq__11242_11285__$1);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,source_11291)))
{source_11291.sinks = cljs.core.conj.call(null,source_11291.sinks,this$);
if((source_11291.rank > this$.rank))
{var seq__11250_11292 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__11242_11254,chunk__11243_11255,count__11244_11256,i__11245_11257,source_11291,seq__11242_11285__$1,temp__4126__auto___11284,vec__11241,f,sources){
return (function (p1__11225_SHARP_){return p1__11225_SHARP_.sinks;
});})(seq__11242_11254,chunk__11243_11255,count__11244_11256,i__11245_11257,source_11291,seq__11242_11285__$1,temp__4126__auto___11284,vec__11241,f,sources))
,source_11291));var chunk__11251_11293 = null;var count__11252_11294 = 0;var i__11253_11295 = 0;while(true){
if((i__11253_11295 < count__11252_11294))
{var dep_11296 = cljs.core._nth.call(null,chunk__11251_11293,i__11253_11295);dep_11296.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__11297 = seq__11250_11292;
var G__11298 = chunk__11251_11293;
var G__11299 = count__11252_11294;
var G__11300 = (i__11253_11295 + 1);
seq__11250_11292 = G__11297;
chunk__11251_11293 = G__11298;
count__11252_11294 = G__11299;
i__11253_11295 = G__11300;
continue;
}
} else
{var temp__4126__auto___11301__$1 = cljs.core.seq.call(null,seq__11250_11292);if(temp__4126__auto___11301__$1)
{var seq__11250_11302__$1 = temp__4126__auto___11301__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11250_11302__$1))
{var c__8291__auto___11303 = cljs.core.chunk_first.call(null,seq__11250_11302__$1);{
var G__11304 = cljs.core.chunk_rest.call(null,seq__11250_11302__$1);
var G__11305 = c__8291__auto___11303;
var G__11306 = cljs.core.count.call(null,c__8291__auto___11303);
var G__11307 = 0;
seq__11250_11292 = G__11304;
chunk__11251_11293 = G__11305;
count__11252_11294 = G__11306;
i__11253_11295 = G__11307;
continue;
}
} else
{var dep_11308 = cljs.core.first.call(null,seq__11250_11302__$1);dep_11308.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__11309 = cljs.core.next.call(null,seq__11250_11302__$1);
var G__11310 = null;
var G__11311 = 0;
var G__11312 = 0;
seq__11250_11292 = G__11309;
chunk__11251_11293 = G__11310;
count__11252_11294 = G__11311;
i__11253_11295 = G__11312;
continue;
}
}
} else
{}
}
break;
}
} else
{}
} else
{}
{
var G__11313 = cljs.core.next.call(null,seq__11242_11285__$1);
var G__11314 = null;
var G__11315 = 0;
var G__11316 = 0;
seq__11242_11254 = G__11313;
chunk__11243_11255 = G__11314;
count__11244_11256 = G__11315;
i__11245_11257 = G__11316;
continue;
}
}
} else
{}
}
break;
}
var compute_11317 = ((function (vec__11241,f,sources){
return (function (p1__11226_SHARP_){return cljs.core.apply.call(null,tailrecursion.javelin.deref_STAR_.call(null,cljs.core.peek.call(null,p1__11226_SHARP_)),cljs.core.map.call(null,tailrecursion.javelin.deref_STAR_,cljs.core.pop.call(null,p1__11226_SHARP_)));
});})(vec__11241,f,sources))
;this$.thunk = ((function (compute_11317,vec__11241,f,sources){
return (function (){return this$.state = compute_11317.call(null,this$.sources);
});})(compute_11317,vec__11241,f,sources))
;
} else
{}
return tailrecursion.javelin.propagate_BANG_.call(null,this$);
};
var set_formula_BANG_ = function (this$,var_args){
var p__11227 = null;if (arguments.length > 1) {
  p__11227 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_formula_BANG___delegate.call(this,this$,p__11227);};
set_formula_BANG_.cljs$lang$maxFixedArity = 1;
set_formula_BANG_.cljs$lang$applyTo = (function (arglist__11318){
var this$ = cljs.core.first(arglist__11318);
var p__11227 = cljs.core.rest(arglist__11318);
return set_formula_BANG___delegate(this$,p__11227);
});
set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_formula_BANG___delegate;
return set_formula_BANG_;
})()
;

/**
* @constructor
*/
tailrecursion.javelin.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,update){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.update = update;
this.cljs$lang$protocol_mask$partition1$ = 98306;
this.cljs$lang$protocol_mask$partition0$ = 2147647488;
})
tailrecursion.javelin.Cell.cljs$lang$type = true;
tailrecursion.javelin.Cell.cljs$lang$ctorStr = "tailrecursion.javelin/Cell";
tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__8102__auto__,writer__8103__auto__,opt__8104__auto__){return cljs.core._write.call(null,writer__8103__auto__,"tailrecursion.javelin/Cell");
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){var self__ = this;
var this$__$1 = this;var seq__11319 = cljs.core.seq.call(null,self__.watches);var chunk__11320 = null;var count__11321 = 0;var i__11322 = 0;while(true){
if((i__11322 < count__11321))
{var vec__11323 = cljs.core._nth.call(null,chunk__11320,i__11322);var key = cljs.core.nth.call(null,vec__11323,0,null);var f = cljs.core.nth.call(null,vec__11323,1,null);f.call(null,key,this$__$1,o,n);
{
var G__11325 = seq__11319;
var G__11326 = chunk__11320;
var G__11327 = count__11321;
var G__11328 = (i__11322 + 1);
seq__11319 = G__11325;
chunk__11320 = G__11326;
count__11321 = G__11327;
i__11322 = G__11328;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__11319);if(temp__4126__auto__)
{var seq__11319__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11319__$1))
{var c__8291__auto__ = cljs.core.chunk_first.call(null,seq__11319__$1);{
var G__11329 = cljs.core.chunk_rest.call(null,seq__11319__$1);
var G__11330 = c__8291__auto__;
var G__11331 = cljs.core.count.call(null,c__8291__auto__);
var G__11332 = 0;
seq__11319 = G__11329;
chunk__11320 = G__11330;
count__11321 = G__11331;
i__11322 = G__11332;
continue;
}
} else
{var vec__11324 = cljs.core.first.call(null,seq__11319__$1);var key = cljs.core.nth.call(null,vec__11324,0,null);var f = cljs.core.nth.call(null,vec__11324,1,null);f.call(null,key,this$__$1,o,n);
{
var G__11333 = cljs.core.next.call(null,seq__11319__$1);
var G__11334 = null;
var G__11335 = 0;
var G__11336 = 0;
seq__11319 = G__11333;
chunk__11320 = G__11334;
count__11321 = G__11335;
i__11322 = G__11336;
continue;
}
}
} else
{return null;
}
}
break;
}
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,f){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,k,f);
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,k);
});
tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){var self__ = this;
var this$__$1 = this;return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state));
});
tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){var self__ = this;
var this$__$1 = this;return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a));
});
tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){var self__ = this;
var this$__$1 = this;return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a,b));
});
tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){var self__ = this;
var this$__$1 = this;return cljs.core.reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,this$__$1.state,a,b,xs));
});
tailrecursion.javelin.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(tailrecursion.javelin.lens_QMARK_.call(null,this$__$1)))
{this$__$1.update.call(null,x);
} else
{if(cljs.core.truth_(tailrecursion.javelin.input_QMARK_.call(null,this$__$1)))
{this$__$1.state = x;
tailrecursion.javelin.propagate_BANG_.call(null,this$__$1);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error("can't swap! or reset! formula cell"));
} else
{}
}
}
return this$__$1.state;
});
tailrecursion.javelin.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1.state;
});
tailrecursion.javelin.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
tailrecursion.javelin.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){var self__ = this;
var this$__$1 = this;return cljs.core.write_all.call(null,w,"#<Cell: ",cljs.core.pr_str.call(null,self__.state),">");
});
tailrecursion.javelin.__GT_Cell = (function __GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){return (new tailrecursion.javelin.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});
tailrecursion.javelin.cell_QMARK_ = (function cell_QMARK_(c){if(cljs.core._EQ_.call(null,cljs.core.type.call(null,c),tailrecursion.javelin.Cell))
{return c;
} else
{return null;
}
});
tailrecursion.javelin.formula_QMARK_ = (function formula_QMARK_(c){if(cljs.core.truth_((function (){var and__7523__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);if(cljs.core.truth_(and__7523__auto__))
{return c.thunk;
} else
{return and__7523__auto__;
}
})()))
{return c;
} else
{return null;
}
});
tailrecursion.javelin.lens_QMARK_ = (function lens_QMARK_(c){if(cljs.core.truth_((function (){var and__7523__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);if(cljs.core.truth_(and__7523__auto__))
{return c.update;
} else
{return and__7523__auto__;
}
})()))
{return c;
} else
{return null;
}
});
tailrecursion.javelin.input_QMARK_ = (function input_QMARK_(c){if(cljs.core.truth_((function (){var and__7523__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);if(cljs.core.truth_(and__7523__auto__))
{return cljs.core.not.call(null,tailrecursion.javelin.formula_QMARK_.call(null,c));
} else
{return and__7523__auto__;
}
})()))
{return c;
} else
{return null;
}
});
tailrecursion.javelin.set_cell_BANG_ = (function set_cell_BANG_(c,x){c.state = x;
return tailrecursion.javelin.set_formula_BANG_.call(null,c);
});
tailrecursion.javelin.formula = (function formula(f){return (function() { 
var G__11337__delegate = function (sources){return tailrecursion.javelin.set_formula_BANG_.call(null,tailrecursion.javelin.cell.call(null,new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",3109973412)),f,sources);
};
var G__11337 = function (var_args){
var sources = null;if (arguments.length > 0) {
  sources = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11337__delegate.call(this,sources);};
G__11337.cljs$lang$maxFixedArity = 0;
G__11337.cljs$lang$applyTo = (function (arglist__11338){
var sources = cljs.core.seq(arglist__11338);
return G__11337__delegate(sources);
});
G__11337.cljs$core$IFn$_invoke$arity$variadic = G__11337__delegate;
return G__11337;
})()
;
});
tailrecursion.javelin.lens = (function lens(c,f){var c__$1 = tailrecursion.javelin.formula.call(null,cljs.core.identity).call(null,c);c__$1.update = f;
return c__$1;
});
tailrecursion.javelin.cell = (function cell(x){return tailrecursion.javelin.set_formula_BANG_.call(null,(new tailrecursion.javelin.Cell(cljs.core.PersistentArrayMap.EMPTY,x,tailrecursion.javelin.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});
tailrecursion.javelin.lift = tailrecursion.javelin.formula;
tailrecursion.javelin.dosync_STAR_ = (function dosync_STAR_(thunk){var bind = (function (p1__11339_SHARP_){var _STAR_tx_STAR_11342 = tailrecursion.javelin._STAR_tx_STAR_;try{tailrecursion.javelin._STAR_tx_STAR_ = cljs.core.atom.call(null,tailrecursion.priority_map.priority_map.call(null));
return p1__11339_SHARP_.call(null);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_11342;
}});var prop = ((function (bind){
return (function (){var tx = cljs.core.deref.call(null,tailrecursion.javelin._STAR_tx_STAR_);var _STAR_tx_STAR_11343 = tailrecursion.javelin._STAR_tx_STAR_;try{tailrecursion.javelin._STAR_tx_STAR_ = null;
return tailrecursion.javelin.propagate_STAR_.call(null,tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_11343;
}});})(bind))
;if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_))
{return thunk.call(null);
} else
{return bind.call(null,((function (bind,prop){
return (function (){thunk.call(null);
return prop.call(null);
});})(bind,prop))
);
}
});
/**
* @param {...*} var_args
*/
tailrecursion.javelin.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (cells){var olds = cljs.core.atom.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,cells),new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",3109973412)));var tag_neq = ((function (olds){
return (function (p1__11344_SHARP_,p2__11345_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__11344_SHARP_,p2__11345_SHARP_),p2__11345_SHARP_],null));
});})(olds))
;var diff = ((function (olds,tag_neq){
return (function (p1__11347_SHARP_,p2__11346_SHARP_){return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__11347_SHARP_,p2__11346_SHARP_))));
});})(olds,tag_neq))
;var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__11349__delegate = function (rest__11348_SHARP_){var news = diff.call(null,cljs.core.deref.call(null,olds),rest__11348_SHARP_);cljs.core.reset_BANG_.call(null,olds,rest__11348_SHARP_);
return news;
};
var G__11349 = function (var_args){
var rest__11348_SHARP_ = null;if (arguments.length > 0) {
  rest__11348_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11349__delegate.call(this,rest__11348_SHARP_);};
G__11349.cljs$lang$maxFixedArity = 0;
G__11349.cljs$lang$applyTo = (function (arglist__11350){
var rest__11348_SHARP_ = cljs.core.seq(arglist__11350);
return G__11349__delegate(rest__11348_SHARP_);
});
G__11349.cljs$core$IFn$_invoke$arity$variadic = G__11349__delegate;
return G__11349;
})()
;})(olds,tag_neq,diff))
;return cljs.core.apply.call(null,tailrecursion.javelin.formula.call(null,proc),cells);
};
var alts_BANG_ = function (var_args){
var cells = null;if (arguments.length > 0) {
  cells = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return alts_BANG___delegate.call(this,cells);};
alts_BANG_.cljs$lang$maxFixedArity = 0;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11351){
var cells = cljs.core.seq(arglist__11351);
return alts_BANG___delegate(cells);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
tailrecursion.javelin.cell_map = (function cell_map(f,c){var cseq = tailrecursion.javelin.formula.call(null,cljs.core.seq).call(null,c);return cljs.core.map.call(null,((function (cseq){
return (function (p1__11352_SHARP_){return tailrecursion.javelin.formula.call(null,cljs.core.comp.call(null,f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__11352_SHARP_);
});})(cseq))
,cljs.core.range.call(null,0,cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function cell_doseq_STAR_(items,f){var pool_size = tailrecursion.javelin.cell.call(null,0);var items_seq = tailrecursion.javelin.formula.call(null,cljs.core.seq).call(null,items);var cur_count = tailrecursion.javelin.formula.call(null,cljs.core.count).call(null,items_seq);var ith_item = ((function (pool_size,items_seq,cur_count){
return (function (p1__11353_SHARP_){return tailrecursion.javelin.formula.call(null,tailrecursion.javelin.safe_nth).call(null,items_seq,p1__11353_SHARP_);
});})(pool_size,items_seq,cur_count))
;return tailrecursion.javelin.formula.call(null,((function (pool_size,items_seq,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){if((pool_size__$1 < cur_count__$1))
{var seq__11358_11362 = cljs.core.seq.call(null,cljs.core.range.call(null,pool_size__$1,cur_count__$1));var chunk__11359_11363 = null;var count__11360_11364 = 0;var i__11361_11365 = 0;while(true){
if((i__11361_11365 < count__11360_11364))
{var i_11366 = cljs.core._nth.call(null,chunk__11359_11363,i__11361_11365);f__$1.call(null,ith_item__$1.call(null,i_11366));
{
var G__11367 = seq__11358_11362;
var G__11368 = chunk__11359_11363;
var G__11369 = count__11360_11364;
var G__11370 = (i__11361_11365 + 1);
seq__11358_11362 = G__11367;
chunk__11359_11363 = G__11368;
count__11360_11364 = G__11369;
i__11361_11365 = G__11370;
continue;
}
} else
{var temp__4126__auto___11371 = cljs.core.seq.call(null,seq__11358_11362);if(temp__4126__auto___11371)
{var seq__11358_11372__$1 = temp__4126__auto___11371;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11358_11372__$1))
{var c__8291__auto___11373 = cljs.core.chunk_first.call(null,seq__11358_11372__$1);{
var G__11374 = cljs.core.chunk_rest.call(null,seq__11358_11372__$1);
var G__11375 = c__8291__auto___11373;
var G__11376 = cljs.core.count.call(null,c__8291__auto___11373);
var G__11377 = 0;
seq__11358_11362 = G__11374;
chunk__11359_11363 = G__11375;
count__11360_11364 = G__11376;
i__11361_11365 = G__11377;
continue;
}
} else
{var i_11378 = cljs.core.first.call(null,seq__11358_11372__$1);f__$1.call(null,ith_item__$1.call(null,i_11378));
{
var G__11379 = cljs.core.next.call(null,seq__11358_11372__$1);
var G__11380 = null;
var G__11381 = 0;
var G__11382 = 0;
seq__11358_11362 = G__11379;
chunk__11359_11363 = G__11380;
count__11360_11364 = G__11381;
i__11361_11365 = G__11382;
continue;
}
}
} else
{}
}
break;
}
return reset_pool_size_BANG_.call(null,cur_count__$1);
} else
{return null;
}
});})(pool_size,items_seq,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.call(null,cljs.core.reset_BANG_,pool_size));
});
