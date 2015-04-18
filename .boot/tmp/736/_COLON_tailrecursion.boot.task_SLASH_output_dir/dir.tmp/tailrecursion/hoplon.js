// Compiled by ClojureScript 0.0-2234
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('tailrecursion.javelin');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('tailrecursion.javelin');
tailrecursion.hoplon.is_ie8 = cljs.core.not.call(null,(window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__9694_SHARP_){return (p1__9694_SHARP_ instanceof Node);
}):(function (p1__9695_SHARP_){try{return p1__9695_SHARP_.nodeType;
}catch (e9696){if((e9696 instanceof Error))
{var _ = e9696;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9696;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__9697_SHARP_){try{return cljs.core.vector_QMARK_.call(null,p1__9697_SHARP_);
}catch (e9698){if((e9698 instanceof Error))
{var _ = e9698;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9698;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__9699_SHARP_){try{return cljs.core.seq_QMARK_.call(null,p1__9699_SHARP_);
}catch (e9700){if((e9700 instanceof Error))
{var _ = e9700;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9700;
} else
{return null;
}
}
}}));
cljs.core.set_print_fn_BANG_.call(null,(function (p1__9701_SHARP_){if(cljs.core.truth_((function (){var and__7523__auto__ = console;if(cljs.core.truth_(and__7523__auto__))
{return console.log;
} else
{return and__7523__auto__;
}
})()))
{return console.log(p1__9701_SHARP_);
} else
{return null;
}
}));
tailrecursion.hoplon.safe_nth = (function() {
var safe_nth = null;
var safe_nth__2 = (function (coll,index){return safe_nth.call(null,coll,index,null);
});
var safe_nth__3 = (function (coll,index,not_found){try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e9703){if((e9703 instanceof Error))
{var _ = e9703;return not_found;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9703;
} else
{return null;
}
}
}});
safe_nth = function(coll,index,not_found){
switch(arguments.length){
case 2:
return safe_nth__2.call(this,coll,index);
case 3:
return safe_nth__3.call(this,coll,index,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
safe_nth.cljs$core$IFn$_invoke$arity$2 = safe_nth__2;
safe_nth.cljs$core$IFn$_invoke$arity$3 = safe_nth__3;
return safe_nth;
})()
;
tailrecursion.hoplon.timeout = (function() {
var timeout = null;
var timeout__1 = (function (f){return timeout.call(null,f,0);
});
var timeout__2 = (function (f,t){return window.setTimeout(f,t);
});
timeout = function(f,t){
switch(arguments.length){
case 1:
return timeout__1.call(this,f);
case 2:
return timeout__2.call(this,f,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
timeout.cljs$core$IFn$_invoke$arity$1 = timeout__1;
timeout.cljs$core$IFn$_invoke$arity$2 = timeout__2;
return timeout;
})()
;
tailrecursion.hoplon.unsplice = (function unsplice(forms){return cljs.core.mapcat.call(null,(function (p1__9704_SHARP_){if(cljs.core.truth_((function (){var or__7535__auto__ = tailrecursion.hoplon.seq_QMARK__STAR_.call(null,p1__9704_SHARP_);if(cljs.core.truth_(or__7535__auto__))
{return or__7535__auto__;
} else
{return tailrecursion.hoplon.vector_QMARK__STAR_.call(null,p1__9704_SHARP_);
}
})()))
{return unsplice.call(null,p1__9704_SHARP_);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9704_SHARP_], null);
}
}),forms);
});
tailrecursion.hoplon.when_dom = (function when_dom(this$,f){if(!((this$ instanceof Element)))
{return f.call(null);
} else
{return tailrecursion.hoplon.timeout.call(null,(function doit(){if(cljs.core.truth_(document.documentElement.contains(this$)))
{return f.call(null);
} else
{return tailrecursion.hoplon.timeout.call(null,doit,20);
}
}));
}
});
tailrecursion.hoplon.parse_args = (function parse_args(p__9707){var vec__9709 = p__9707;var head = cljs.core.nth.call(null,vec__9709,0,null);var tail = cljs.core.nthnext.call(null,vec__9709,1);var args = vec__9709;var kw1_QMARK_ = cljs.core.comp.call(null,cljs.core.keyword_QMARK_,cljs.core.first);var mkkw = ((function (kw1_QMARK_,vec__9709,head,tail,args){
return (function (p1__9705_SHARP_){return cljs.core.map.call(null,cljs.core.vec,cljs.core.take_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,2,p1__9705_SHARP_)));
});})(kw1_QMARK_,vec__9709,head,tail,args))
;var drkw = ((function (kw1_QMARK_,mkkw,vec__9709,head,tail,args){
return (function (p1__9706_SHARP_){return cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.drop_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,2,2,cljs.core.PersistentVector.EMPTY,p1__9706_SHARP_)));
});})(kw1_QMARK_,mkkw,vec__9709,head,tail,args))
;if(cljs.core.map_QMARK_.call(null,head))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,tailrecursion.hoplon.unsplice.call(null,tail)], null);
} else
{if((head instanceof cljs.core.Keyword))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,mkkw.call(null,args)),tailrecursion.hoplon.unsplice.call(null,drkw.call(null,args))], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,tailrecursion.hoplon.unsplice.call(null,args)], null);
} else
{return null;
}
}
}
});
tailrecursion.hoplon.add_attributes_BANG_ = (function add_attributes_BANG_(this$,attr){var key_STAR_ = (function (p1__9711_SHARP_,p2__9710_SHARP_){var n = (function (){var s = cljs.core.name.call(null,p2__9710_SHARP_);var c = cljs.core.last.call(null,s);if(!(cljs.core._EQ_.call(null,"=",c)))
{return s;
} else
{return s.slice(0,-1);
}
})();var p = n.substr(0,3);return cljs.core.keyword.call(null,cljs.core.namespace.call(null,p2__9710_SHARP_),((!(cljs.core._EQ_.call(null,p1__9711_SHARP_,p)))?n:n.substr(3)));
});var dokey = cljs.core.partial.call(null,key_STAR_,"do-");var onkey = cljs.core.partial.call(null,key_STAR_,"on-");var dos = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ons = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var addcls = ((function (key_STAR_,dokey,onkey,dos,ons){
return (function (p1__9712_SHARP_,p2__9713_SHARP_){return clojure.string.join.call(null," ",cljs.core.into.call(null,cljs.core.set.call(null,clojure.string.split.call(null,p1__9712_SHARP_,/ /)),clojure.string.split.call(null,p2__9713_SHARP_,/ /)));
});})(key_STAR_,dokey,onkey,dos,ons))
;var seq__9736_9754 = cljs.core.seq.call(null,attr);var chunk__9737_9755 = null;var count__9738_9756 = 0;var i__9739_9757 = 0;while(true){
if((i__9739_9757 < count__9738_9756))
{var vec__9740_9758 = cljs.core._nth.call(null,chunk__9737_9755,i__9739_9757);var k_9759 = cljs.core.nth.call(null,vec__9740_9758,0,null);var v_9760 = cljs.core.nth.call(null,vec__9740_9758,1,null);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,v_9760)))
{cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,dokey.call(null,k_9759),v_9760);
} else
{if(cljs.core.fn_QMARK_.call(null,v_9760))
{cljs.core.swap_BANG_.call(null,ons,cljs.core.assoc,onkey.call(null,k_9759),v_9760);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{tailrecursion.hoplon.do_BANG_.call(null,this$,dokey.call(null,k_9759),v_9760);
} else
{}
}
}
{
var G__9761 = seq__9736_9754;
var G__9762 = chunk__9737_9755;
var G__9763 = count__9738_9756;
var G__9764 = (i__9739_9757 + 1);
seq__9736_9754 = G__9761;
chunk__9737_9755 = G__9762;
count__9738_9756 = G__9763;
i__9739_9757 = G__9764;
continue;
}
} else
{var temp__4126__auto___9765 = cljs.core.seq.call(null,seq__9736_9754);if(temp__4126__auto___9765)
{var seq__9736_9766__$1 = temp__4126__auto___9765;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9736_9766__$1))
{var c__8291__auto___9767 = cljs.core.chunk_first.call(null,seq__9736_9766__$1);{
var G__9768 = cljs.core.chunk_rest.call(null,seq__9736_9766__$1);
var G__9769 = c__8291__auto___9767;
var G__9770 = cljs.core.count.call(null,c__8291__auto___9767);
var G__9771 = 0;
seq__9736_9754 = G__9768;
chunk__9737_9755 = G__9769;
count__9738_9756 = G__9770;
i__9739_9757 = G__9771;
continue;
}
} else
{var vec__9741_9772 = cljs.core.first.call(null,seq__9736_9766__$1);var k_9773 = cljs.core.nth.call(null,vec__9741_9772,0,null);var v_9774 = cljs.core.nth.call(null,vec__9741_9772,1,null);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,v_9774)))
{cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,dokey.call(null,k_9773),v_9774);
} else
{if(cljs.core.fn_QMARK_.call(null,v_9774))
{cljs.core.swap_BANG_.call(null,ons,cljs.core.assoc,onkey.call(null,k_9773),v_9774);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{tailrecursion.hoplon.do_BANG_.call(null,this$,dokey.call(null,k_9773),v_9774);
} else
{}
}
}
{
var G__9775 = cljs.core.next.call(null,seq__9736_9766__$1);
var G__9776 = null;
var G__9777 = 0;
var G__9778 = 0;
seq__9736_9754 = G__9775;
chunk__9737_9755 = G__9776;
count__9738_9756 = G__9777;
i__9739_9757 = G__9778;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.seq.call(null,cljs.core.deref.call(null,dos)))
{setTimeout(((function (key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (){var seq__9742 = cljs.core.seq.call(null,cljs.core.deref.call(null,dos));var chunk__9743 = null;var count__9744 = 0;var i__9745 = 0;while(true){
if((i__9745 < count__9744))
{var vec__9746 = cljs.core._nth.call(null,chunk__9743,i__9745);var k = cljs.core.nth.call(null,vec__9746,0,null);var v = cljs.core.nth.call(null,vec__9746,1,null);tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref.call(null,v));
cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),((function (seq__9742,chunk__9743,count__9744,i__9745,vec__9746,k,v,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__9715_SHARP_,p2__9716_SHARP_,p3__9717_SHARP_,p4__9714_SHARP_){return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__9714_SHARP_);
});})(seq__9742,chunk__9743,count__9744,i__9745,vec__9746,k,v,key_STAR_,dokey,onkey,dos,ons,addcls))
);
{
var G__9779 = seq__9742;
var G__9780 = chunk__9743;
var G__9781 = count__9744;
var G__9782 = (i__9745 + 1);
seq__9742 = G__9779;
chunk__9743 = G__9780;
count__9744 = G__9781;
i__9745 = G__9782;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9742);if(temp__4126__auto__)
{var seq__9742__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9742__$1))
{var c__8291__auto__ = cljs.core.chunk_first.call(null,seq__9742__$1);{
var G__9783 = cljs.core.chunk_rest.call(null,seq__9742__$1);
var G__9784 = c__8291__auto__;
var G__9785 = cljs.core.count.call(null,c__8291__auto__);
var G__9786 = 0;
seq__9742 = G__9783;
chunk__9743 = G__9784;
count__9744 = G__9785;
i__9745 = G__9786;
continue;
}
} else
{var vec__9747 = cljs.core.first.call(null,seq__9742__$1);var k = cljs.core.nth.call(null,vec__9747,0,null);var v = cljs.core.nth.call(null,vec__9747,1,null);tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref.call(null,v));
cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),((function (seq__9742,chunk__9743,count__9744,i__9745,vec__9747,k,v,seq__9742__$1,temp__4126__auto__,key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (p1__9715_SHARP_,p2__9716_SHARP_,p3__9717_SHARP_,p4__9714_SHARP_){return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__9714_SHARP_);
});})(seq__9742,chunk__9743,count__9744,i__9745,vec__9747,k,v,seq__9742__$1,temp__4126__auto__,key_STAR_,dokey,onkey,dos,ons,addcls))
);
{
var G__9787 = cljs.core.next.call(null,seq__9742__$1);
var G__9788 = null;
var G__9789 = 0;
var G__9790 = 0;
seq__9742 = G__9787;
chunk__9743 = G__9788;
count__9744 = G__9789;
i__9745 = G__9790;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(key_STAR_,dokey,onkey,dos,ons,addcls))
,0);
} else
{}
if(cljs.core.seq.call(null,cljs.core.deref.call(null,ons)))
{setTimeout(((function (key_STAR_,dokey,onkey,dos,ons,addcls){
return (function (){var seq__9748 = cljs.core.seq.call(null,cljs.core.deref.call(null,ons));var chunk__9749 = null;var count__9750 = 0;var i__9751 = 0;while(true){
if((i__9751 < count__9750))
{var vec__9752 = cljs.core._nth.call(null,chunk__9749,i__9751);var k = cljs.core.nth.call(null,vec__9752,0,null);var v = cljs.core.nth.call(null,vec__9752,1,null);tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);
{
var G__9791 = seq__9748;
var G__9792 = chunk__9749;
var G__9793 = count__9750;
var G__9794 = (i__9751 + 1);
seq__9748 = G__9791;
chunk__9749 = G__9792;
count__9750 = G__9793;
i__9751 = G__9794;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9748);if(temp__4126__auto__)
{var seq__9748__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9748__$1))
{var c__8291__auto__ = cljs.core.chunk_first.call(null,seq__9748__$1);{
var G__9795 = cljs.core.chunk_rest.call(null,seq__9748__$1);
var G__9796 = c__8291__auto__;
var G__9797 = cljs.core.count.call(null,c__8291__auto__);
var G__9798 = 0;
seq__9748 = G__9795;
chunk__9749 = G__9796;
count__9750 = G__9797;
i__9751 = G__9798;
continue;
}
} else
{var vec__9753 = cljs.core.first.call(null,seq__9748__$1);var k = cljs.core.nth.call(null,vec__9753,0,null);var v = cljs.core.nth.call(null,vec__9753,1,null);tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);
{
var G__9799 = cljs.core.next.call(null,seq__9748__$1);
var G__9800 = null;
var G__9801 = 0;
var G__9802 = 0;
seq__9748 = G__9799;
chunk__9749 = G__9800;
count__9750 = G__9801;
i__9751 = G__9802;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(key_STAR_,dokey,onkey,dos,ons,addcls))
,0);
} else
{}
return this$;
});
tailrecursion.hoplon.append_child = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__9803_SHARP_,p2__9804_SHARP_){return p1__9803_SHARP_.appendChild(p2__9804_SHARP_);
}):(function (p1__9805_SHARP_,p2__9806_SHARP_){try{return p1__9805_SHARP_.appendChild(p2__9806_SHARP_);
}catch (e9807){if((e9807 instanceof Error))
{var _ = e9807;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9807;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.replace_children_BANG_ = (function replace_children_BANG_(this$,new_children){jQuery(this$).empty();
return tailrecursion.hoplon.add_children_BANG_.call(null,this$,((cljs.core.sequential_QMARK_.call(null,new_children))?new_children:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_children], null)));
});
tailrecursion.hoplon.add_children_BANG_ = (function add_children_BANG_(this$,p__9813){var vec__9819 = p__9813;var child_cell = cljs.core.nth.call(null,vec__9819,0,null);var _ = cljs.core.nthnext.call(null,vec__9819,1);var kids = vec__9819;if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,child_cell)))
{tailrecursion.hoplon.replace_children_BANG_.call(null,this$,cljs.core.deref.call(null,child_cell));
cljs.core.add_watch.call(null,child_cell,cljs.core.gensym.call(null),((function (vec__9819,child_cell,_,kids){
return (function (p1__9809_SHARP_,p2__9810_SHARP_,p3__9811_SHARP_,p4__9808_SHARP_){return tailrecursion.hoplon.replace_children_BANG_.call(null,this$,p4__9808_SHARP_);
});})(vec__9819,child_cell,_,kids))
);
} else
{var node_9824 = ((function (vec__9819,child_cell,_,kids){
return (function (p1__9812_SHARP_){if(typeof p1__9812_SHARP_ === 'string')
{return tailrecursion.hoplon.$text.call(null,p1__9812_SHARP_);
} else
{if(cljs.core.truth_(tailrecursion.hoplon.node_QMARK_.call(null,p1__9812_SHARP_)))
{return p1__9812_SHARP_;
} else
{return null;
}
}
});})(vec__9819,child_cell,_,kids))
;var seq__9820_9825 = cljs.core.seq.call(null,cljs.core.keep.call(null,node_9824,tailrecursion.hoplon.unsplice.call(null,kids)));var chunk__9821_9826 = null;var count__9822_9827 = 0;var i__9823_9828 = 0;while(true){
if((i__9823_9828 < count__9822_9827))
{var x_9829 = cljs.core._nth.call(null,chunk__9821_9826,i__9823_9828);tailrecursion.hoplon.append_child.call(null,this$,x_9829);
{
var G__9830 = seq__9820_9825;
var G__9831 = chunk__9821_9826;
var G__9832 = count__9822_9827;
var G__9833 = (i__9823_9828 + 1);
seq__9820_9825 = G__9830;
chunk__9821_9826 = G__9831;
count__9822_9827 = G__9832;
i__9823_9828 = G__9833;
continue;
}
} else
{var temp__4126__auto___9834 = cljs.core.seq.call(null,seq__9820_9825);if(temp__4126__auto___9834)
{var seq__9820_9835__$1 = temp__4126__auto___9834;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9820_9835__$1))
{var c__8291__auto___9836 = cljs.core.chunk_first.call(null,seq__9820_9835__$1);{
var G__9837 = cljs.core.chunk_rest.call(null,seq__9820_9835__$1);
var G__9838 = c__8291__auto___9836;
var G__9839 = cljs.core.count.call(null,c__8291__auto___9836);
var G__9840 = 0;
seq__9820_9825 = G__9837;
chunk__9821_9826 = G__9838;
count__9822_9827 = G__9839;
i__9823_9828 = G__9840;
continue;
}
} else
{var x_9841 = cljs.core.first.call(null,seq__9820_9835__$1);tailrecursion.hoplon.append_child.call(null,this$,x_9841);
{
var G__9842 = cljs.core.next.call(null,seq__9820_9835__$1);
var G__9843 = null;
var G__9844 = 0;
var G__9845 = 0;
seq__9820_9825 = G__9842;
chunk__9821_9826 = G__9843;
count__9822_9827 = G__9844;
i__9823_9828 = G__9845;
continue;
}
}
} else
{}
}
break;
}
}
return this$;
});
tailrecursion.hoplon.on_append_BANG_ = (function on_append_BANG_(this$,f){return this$.hoplonIFn = f;
});
Element.prototype.cljs$core$IFn$ = true;
Element.prototype.call = (function() { 
var G__9853__delegate = function (self__,args){var self____$1 = this;var this$ = self____$1;var vec__9847 = tailrecursion.hoplon.parse_args.call(null,args);var attr = cljs.core.nth.call(null,vec__9847,0,null);var kids = cljs.core.nth.call(null,vec__9847,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__9848 = this$;G__9848.hoplonIFn(attr,kids);
return G__9848;
} else
{var G__9849 = this$;tailrecursion.hoplon.add_attributes_BANG_.call(null,G__9849,attr);
tailrecursion.hoplon.add_children_BANG_.call(null,G__9849,kids);
return G__9849;
}
};
var G__9853 = function (self__,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__9853__delegate.call(this,self__,args);};
G__9853.cljs$lang$maxFixedArity = 1;
G__9853.cljs$lang$applyTo = (function (arglist__9854){
var self__ = cljs.core.first(arglist__9854);
var args = cljs.core.rest(arglist__9854);
return G__9853__delegate(self__,args);
});
G__9853.cljs$core$IFn$_invoke$arity$variadic = G__9853__delegate;
return G__9853;
})()
;
Element.prototype.apply = (function (self__,args9846){var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9846)));
});
Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__9855__delegate = function (args){var this$ = this;var vec__9850 = tailrecursion.hoplon.parse_args.call(null,args);var attr = cljs.core.nth.call(null,vec__9850,0,null);var kids = cljs.core.nth.call(null,vec__9850,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__9851 = this$;G__9851.hoplonIFn(attr,kids);
return G__9851;
} else
{var G__9852 = this$;tailrecursion.hoplon.add_attributes_BANG_.call(null,G__9852,attr);
tailrecursion.hoplon.add_children_BANG_.call(null,G__9852,kids);
return G__9852;
}
};
var G__9855 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9855__delegate.call(this,args);};
G__9855.cljs$lang$maxFixedArity = 0;
G__9855.cljs$lang$applyTo = (function (arglist__9856){
var args = cljs.core.seq(arglist__9856);
return G__9855__delegate(args);
});
G__9855.cljs$core$IFn$_invoke$arity$variadic = G__9855__delegate;
return G__9855;
})()
;
Element.prototype.cljs$core$IPrintWithWriter$ = true;
Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var this$__$1 = this;return cljs.core.write_all.call(null,writer,"#<Element: ",this$__$1.tagName,">");
});
tailrecursion.hoplon.make_singleton_ctor = (function make_singleton_ctor(tag){return (function() { 
var G__9857__delegate = function (args){var old = (document.getElementsByTagName(tag)[0]);var new$ = document.createElement(tag);if(cljs.core.truth_(old))
{old.parentNode.replaceChild(new$,old);
} else
{}
return cljs.core.apply.call(null,new$,args);
};
var G__9857 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9857__delegate.call(this,args);};
G__9857.cljs$lang$maxFixedArity = 0;
G__9857.cljs$lang$applyTo = (function (arglist__9858){
var args = cljs.core.seq(arglist__9858);
return G__9857__delegate(args);
});
G__9857.cljs$core$IFn$_invoke$arity$variadic = G__9857__delegate;
return G__9857;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function make_elem_ctor(tag){return (function() { 
var G__9859__delegate = function (args){return cljs.core.apply.call(null,document.createElement(tag),args);
};
var G__9859 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9859__delegate.call(this,args);};
G__9859.cljs$lang$maxFixedArity = 0;
G__9859.cljs$lang$applyTo = (function (arglist__9860){
var args = cljs.core.seq(arglist__9860);
return G__9859__delegate(args);
});
G__9859.cljs$core$IFn$_invoke$arity$variadic = G__9859__delegate;
return G__9859;
})()
;
});
tailrecursion.hoplon.html_body = tailrecursion.hoplon.make_singleton_ctor.call(null,"body");
tailrecursion.hoplon.html_head = tailrecursion.hoplon.make_singleton_ctor.call(null,"head");
tailrecursion.hoplon.html = tailrecursion.hoplon.make_singleton_ctor.call(null,"html");
tailrecursion.hoplon.a = tailrecursion.hoplon.make_elem_ctor.call(null,"a");
tailrecursion.hoplon.abbr = tailrecursion.hoplon.make_elem_ctor.call(null,"abbr");
tailrecursion.hoplon.acronym = tailrecursion.hoplon.make_elem_ctor.call(null,"acronym");
tailrecursion.hoplon.address = tailrecursion.hoplon.make_elem_ctor.call(null,"address");
tailrecursion.hoplon.applet = tailrecursion.hoplon.make_elem_ctor.call(null,"applet");
tailrecursion.hoplon.area = tailrecursion.hoplon.make_elem_ctor.call(null,"area");
tailrecursion.hoplon.article = tailrecursion.hoplon.make_elem_ctor.call(null,"article");
tailrecursion.hoplon.aside = tailrecursion.hoplon.make_elem_ctor.call(null,"aside");
tailrecursion.hoplon.audio = tailrecursion.hoplon.make_elem_ctor.call(null,"audio");
tailrecursion.hoplon.b = tailrecursion.hoplon.make_elem_ctor.call(null,"b");
tailrecursion.hoplon.base = tailrecursion.hoplon.make_elem_ctor.call(null,"base");
tailrecursion.hoplon.basefont = tailrecursion.hoplon.make_elem_ctor.call(null,"basefont");
tailrecursion.hoplon.bdi = tailrecursion.hoplon.make_elem_ctor.call(null,"bdi");
tailrecursion.hoplon.bdo = tailrecursion.hoplon.make_elem_ctor.call(null,"bdo");
tailrecursion.hoplon.big = tailrecursion.hoplon.make_elem_ctor.call(null,"big");
tailrecursion.hoplon.blockquote = tailrecursion.hoplon.make_elem_ctor.call(null,"blockquote");
tailrecursion.hoplon.br = tailrecursion.hoplon.make_elem_ctor.call(null,"br");
tailrecursion.hoplon.button = tailrecursion.hoplon.make_elem_ctor.call(null,"button");
tailrecursion.hoplon.canvas = tailrecursion.hoplon.make_elem_ctor.call(null,"canvas");
tailrecursion.hoplon.caption = tailrecursion.hoplon.make_elem_ctor.call(null,"caption");
tailrecursion.hoplon.center = tailrecursion.hoplon.make_elem_ctor.call(null,"center");
tailrecursion.hoplon.cite = tailrecursion.hoplon.make_elem_ctor.call(null,"cite");
tailrecursion.hoplon.code = tailrecursion.hoplon.make_elem_ctor.call(null,"code");
tailrecursion.hoplon.col = tailrecursion.hoplon.make_elem_ctor.call(null,"col");
tailrecursion.hoplon.colgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"colgroup");
tailrecursion.hoplon.command = tailrecursion.hoplon.make_elem_ctor.call(null,"command");
tailrecursion.hoplon.data = tailrecursion.hoplon.make_elem_ctor.call(null,"data");
tailrecursion.hoplon.datalist = tailrecursion.hoplon.make_elem_ctor.call(null,"datalist");
tailrecursion.hoplon.dd = tailrecursion.hoplon.make_elem_ctor.call(null,"dd");
tailrecursion.hoplon.del = tailrecursion.hoplon.make_elem_ctor.call(null,"del");
tailrecursion.hoplon.details = tailrecursion.hoplon.make_elem_ctor.call(null,"details");
tailrecursion.hoplon.dfn = tailrecursion.hoplon.make_elem_ctor.call(null,"dfn");
tailrecursion.hoplon.dir = tailrecursion.hoplon.make_elem_ctor.call(null,"dir");
tailrecursion.hoplon.div = tailrecursion.hoplon.make_elem_ctor.call(null,"div");
tailrecursion.hoplon.dl = tailrecursion.hoplon.make_elem_ctor.call(null,"dl");
tailrecursion.hoplon.dt = tailrecursion.hoplon.make_elem_ctor.call(null,"dt");
tailrecursion.hoplon.em = tailrecursion.hoplon.make_elem_ctor.call(null,"em");
tailrecursion.hoplon.embed = tailrecursion.hoplon.make_elem_ctor.call(null,"embed");
tailrecursion.hoplon.eventsource = tailrecursion.hoplon.make_elem_ctor.call(null,"eventsource");
tailrecursion.hoplon.fieldset = tailrecursion.hoplon.make_elem_ctor.call(null,"fieldset");
tailrecursion.hoplon.figcaption = tailrecursion.hoplon.make_elem_ctor.call(null,"figcaption");
tailrecursion.hoplon.figure = tailrecursion.hoplon.make_elem_ctor.call(null,"figure");
tailrecursion.hoplon.font = tailrecursion.hoplon.make_elem_ctor.call(null,"font");
tailrecursion.hoplon.footer = tailrecursion.hoplon.make_elem_ctor.call(null,"footer");
tailrecursion.hoplon.form = tailrecursion.hoplon.make_elem_ctor.call(null,"form");
tailrecursion.hoplon.frame = tailrecursion.hoplon.make_elem_ctor.call(null,"frame");
tailrecursion.hoplon.frameset = tailrecursion.hoplon.make_elem_ctor.call(null,"frameset");
tailrecursion.hoplon.h1 = tailrecursion.hoplon.make_elem_ctor.call(null,"h1");
tailrecursion.hoplon.h2 = tailrecursion.hoplon.make_elem_ctor.call(null,"h2");
tailrecursion.hoplon.h3 = tailrecursion.hoplon.make_elem_ctor.call(null,"h3");
tailrecursion.hoplon.h4 = tailrecursion.hoplon.make_elem_ctor.call(null,"h4");
tailrecursion.hoplon.h5 = tailrecursion.hoplon.make_elem_ctor.call(null,"h5");
tailrecursion.hoplon.h6 = tailrecursion.hoplon.make_elem_ctor.call(null,"h6");
tailrecursion.hoplon.header = tailrecursion.hoplon.make_elem_ctor.call(null,"header");
tailrecursion.hoplon.hgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"hgroup");
tailrecursion.hoplon.hr = tailrecursion.hoplon.make_elem_ctor.call(null,"hr");
tailrecursion.hoplon.i = tailrecursion.hoplon.make_elem_ctor.call(null,"i");
tailrecursion.hoplon.iframe = tailrecursion.hoplon.make_elem_ctor.call(null,"iframe");
tailrecursion.hoplon.img = tailrecursion.hoplon.make_elem_ctor.call(null,"img");
tailrecursion.hoplon.input = tailrecursion.hoplon.make_elem_ctor.call(null,"input");
tailrecursion.hoplon.ins = tailrecursion.hoplon.make_elem_ctor.call(null,"ins");
tailrecursion.hoplon.isindex = tailrecursion.hoplon.make_elem_ctor.call(null,"isindex");
tailrecursion.hoplon.kbd = tailrecursion.hoplon.make_elem_ctor.call(null,"kbd");
tailrecursion.hoplon.keygen = tailrecursion.hoplon.make_elem_ctor.call(null,"keygen");
tailrecursion.hoplon.label = tailrecursion.hoplon.make_elem_ctor.call(null,"label");
tailrecursion.hoplon.legend = tailrecursion.hoplon.make_elem_ctor.call(null,"legend");
tailrecursion.hoplon.li = tailrecursion.hoplon.make_elem_ctor.call(null,"li");
tailrecursion.hoplon.link = tailrecursion.hoplon.make_elem_ctor.call(null,"link");
tailrecursion.hoplon.html_map = tailrecursion.hoplon.make_elem_ctor.call(null,"map");
tailrecursion.hoplon.mark = tailrecursion.hoplon.make_elem_ctor.call(null,"mark");
tailrecursion.hoplon.menu = tailrecursion.hoplon.make_elem_ctor.call(null,"menu");
tailrecursion.hoplon.html_meta = tailrecursion.hoplon.make_elem_ctor.call(null,"meta");
tailrecursion.hoplon.meter = tailrecursion.hoplon.make_elem_ctor.call(null,"meter");
tailrecursion.hoplon.nav = tailrecursion.hoplon.make_elem_ctor.call(null,"nav");
tailrecursion.hoplon.noframes = tailrecursion.hoplon.make_elem_ctor.call(null,"noframes");
tailrecursion.hoplon.noscript = tailrecursion.hoplon.make_elem_ctor.call(null,"noscript");
tailrecursion.hoplon.object = tailrecursion.hoplon.make_elem_ctor.call(null,"object");
tailrecursion.hoplon.ol = tailrecursion.hoplon.make_elem_ctor.call(null,"ol");
tailrecursion.hoplon.optgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"optgroup");
tailrecursion.hoplon.option = tailrecursion.hoplon.make_elem_ctor.call(null,"option");
tailrecursion.hoplon.output = tailrecursion.hoplon.make_elem_ctor.call(null,"output");
tailrecursion.hoplon.p = tailrecursion.hoplon.make_elem_ctor.call(null,"p");
tailrecursion.hoplon.param = tailrecursion.hoplon.make_elem_ctor.call(null,"param");
tailrecursion.hoplon.pre = tailrecursion.hoplon.make_elem_ctor.call(null,"pre");
tailrecursion.hoplon.progress = tailrecursion.hoplon.make_elem_ctor.call(null,"progress");
tailrecursion.hoplon.q = tailrecursion.hoplon.make_elem_ctor.call(null,"q");
tailrecursion.hoplon.rp = tailrecursion.hoplon.make_elem_ctor.call(null,"rp");
tailrecursion.hoplon.rt = tailrecursion.hoplon.make_elem_ctor.call(null,"rt");
tailrecursion.hoplon.ruby = tailrecursion.hoplon.make_elem_ctor.call(null,"ruby");
tailrecursion.hoplon.s = tailrecursion.hoplon.make_elem_ctor.call(null,"s");
tailrecursion.hoplon.samp = tailrecursion.hoplon.make_elem_ctor.call(null,"samp");
tailrecursion.hoplon.script = tailrecursion.hoplon.make_elem_ctor.call(null,"script");
tailrecursion.hoplon.section = tailrecursion.hoplon.make_elem_ctor.call(null,"section");
tailrecursion.hoplon.select = tailrecursion.hoplon.make_elem_ctor.call(null,"select");
tailrecursion.hoplon.small = tailrecursion.hoplon.make_elem_ctor.call(null,"small");
tailrecursion.hoplon.source = tailrecursion.hoplon.make_elem_ctor.call(null,"source");
tailrecursion.hoplon.span = tailrecursion.hoplon.make_elem_ctor.call(null,"span");
tailrecursion.hoplon.strike = tailrecursion.hoplon.make_elem_ctor.call(null,"strike");
tailrecursion.hoplon.strong = tailrecursion.hoplon.make_elem_ctor.call(null,"strong");
tailrecursion.hoplon.style = tailrecursion.hoplon.make_elem_ctor.call(null,"style");
tailrecursion.hoplon.sub = tailrecursion.hoplon.make_elem_ctor.call(null,"sub");
tailrecursion.hoplon.summary = tailrecursion.hoplon.make_elem_ctor.call(null,"summary");
tailrecursion.hoplon.sup = tailrecursion.hoplon.make_elem_ctor.call(null,"sup");
tailrecursion.hoplon.table = tailrecursion.hoplon.make_elem_ctor.call(null,"table");
tailrecursion.hoplon.tbody = tailrecursion.hoplon.make_elem_ctor.call(null,"tbody");
tailrecursion.hoplon.td = tailrecursion.hoplon.make_elem_ctor.call(null,"td");
tailrecursion.hoplon.textarea = tailrecursion.hoplon.make_elem_ctor.call(null,"textarea");
tailrecursion.hoplon.tfoot = tailrecursion.hoplon.make_elem_ctor.call(null,"tfoot");
tailrecursion.hoplon.th = tailrecursion.hoplon.make_elem_ctor.call(null,"th");
tailrecursion.hoplon.thead = tailrecursion.hoplon.make_elem_ctor.call(null,"thead");
tailrecursion.hoplon.html_time = tailrecursion.hoplon.make_elem_ctor.call(null,"time");
tailrecursion.hoplon.title = tailrecursion.hoplon.make_elem_ctor.call(null,"title");
tailrecursion.hoplon.tr = tailrecursion.hoplon.make_elem_ctor.call(null,"tr");
tailrecursion.hoplon.track = tailrecursion.hoplon.make_elem_ctor.call(null,"track");
tailrecursion.hoplon.tt = tailrecursion.hoplon.make_elem_ctor.call(null,"tt");
tailrecursion.hoplon.u = tailrecursion.hoplon.make_elem_ctor.call(null,"u");
tailrecursion.hoplon.ul = tailrecursion.hoplon.make_elem_ctor.call(null,"ul");
tailrecursion.hoplon.html_var = tailrecursion.hoplon.make_elem_ctor.call(null,"var");
tailrecursion.hoplon.video = tailrecursion.hoplon.make_elem_ctor.call(null,"video");
tailrecursion.hoplon.wbr = tailrecursion.hoplon.make_elem_ctor.call(null,"wbr");
tailrecursion.hoplon.spliced = cljs.core.vector;
tailrecursion.hoplon.$text = (function $text(p1__9861_SHARP_){return document.createTextNode(p1__9861_SHARP_);
});
tailrecursion.hoplon.$comment = (function $comment(p1__9862_SHARP_){return document.createComment(p1__9862_SHARP_);
});
tailrecursion.hoplon.initialized_QMARK_ = cljs.core.atom.call(null,false);
tailrecursion.hoplon._STAR_initfns_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
tailrecursion.hoplon.add_initfn_BANG_ = (function add_initfn_BANG_(f){if(cljs.core.truth_(cljs.core.deref.call(null,tailrecursion.hoplon.initialized_QMARK_)))
{return setTimeout(f,0);
} else
{return cljs.core.swap_BANG_.call(null,tailrecursion.hoplon._STAR_initfns_STAR_,cljs.core.conj,f);
}
});
tailrecursion.hoplon.init = (function init(){return setTimeout((function (){jQuery("body").on("submit",(function (p1__9863_SHARP_){var e = jQuery(p1__9863_SHARP_.target);if(cljs.core.truth_((function (){var or__7535__auto__ = e.attr("action");if(cljs.core.truth_(or__7535__auto__))
{return or__7535__auto__;
} else
{return e.attr("method");
}
})()))
{return null;
} else
{return p1__9863_SHARP_.preventDefault();
}
}));
cljs.core.reset_BANG_.call(null,tailrecursion.hoplon.initialized_QMARK_,true);
var seq__9868 = cljs.core.seq.call(null,cljs.core.deref.call(null,tailrecursion.hoplon._STAR_initfns_STAR_));var chunk__9869 = null;var count__9870 = 0;var i__9871 = 0;while(true){
if((i__9871 < count__9870))
{var f = cljs.core._nth.call(null,chunk__9869,i__9871);f.call(null);
{
var G__9872 = seq__9868;
var G__9873 = chunk__9869;
var G__9874 = count__9870;
var G__9875 = (i__9871 + 1);
seq__9868 = G__9872;
chunk__9869 = G__9873;
count__9870 = G__9874;
i__9871 = G__9875;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9868);if(temp__4126__auto__)
{var seq__9868__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9868__$1))
{var c__8291__auto__ = cljs.core.chunk_first.call(null,seq__9868__$1);{
var G__9876 = cljs.core.chunk_rest.call(null,seq__9868__$1);
var G__9877 = c__8291__auto__;
var G__9878 = cljs.core.count.call(null,c__8291__auto__);
var G__9879 = 0;
seq__9868 = G__9876;
chunk__9869 = G__9877;
count__9870 = G__9878;
i__9871 = G__9879;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__9868__$1);f.call(null);
{
var G__9880 = cljs.core.next.call(null,seq__9868__$1);
var G__9881 = null;
var G__9882 = 0;
var G__9883 = 0;
seq__9868 = G__9880;
chunk__9869 = G__9881;
count__9870 = G__9882;
i__9871 = G__9883;
continue;
}
}
} else
{return null;
}
}
break;
}
}),0);
});
tailrecursion.hoplon.by_id = (function by_id(id){return document.getElementById(cljs.core.name.call(null,id));
});
tailrecursion.hoplon.val_id = (function val_id(id){return tailrecursion.hoplon.do_BANG_.call(null,tailrecursion.hoplon.by_id.call(null,id),new cljs.core.Keyword(null,"value","value",1125876963));
});
tailrecursion.hoplon.rel = (function rel(other,event){var os = cljs.core.js__GT_clj.call(null,jQuery(other).offset());var ox = os.call(null,"left");var oy = os.call(null,"top");return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),(event.pageX - ox),new cljs.core.Keyword(null,"y","y",1013904363),(event.pageY - oy)], null);
});
tailrecursion.hoplon.relx = (function relx(other,event){return new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel.call(null,other,event));
});
tailrecursion.hoplon.rely = (function rely(other,event){return new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel.call(null,other,event));
});
tailrecursion.hoplon.rel_event = (function rel_event(rel_to,tag,handler){return (function (event){(event[(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+"X")] = tailrecursion.hoplon.relx.call(null,rel_to,event));
(event[(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+"Y")] = tailrecursion.hoplon.rely.call(null,rel_to,event));
return handler.call(null,event);
});
});
tailrecursion.hoplon.text_val_BANG_ = (function() {
var text_val_BANG_ = null;
var text_val_BANG___1 = (function (e){return e.val();
});
var text_val_BANG___2 = (function (e,v){return e.val((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
});
text_val_BANG_ = function(e,v){
switch(arguments.length){
case 1:
return text_val_BANG___1.call(this,e);
case 2:
return text_val_BANG___2.call(this,e,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = text_val_BANG___1;
text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = text_val_BANG___2;
return text_val_BANG_;
})()
;
tailrecursion.hoplon.check_val_BANG_ = (function() {
var check_val_BANG_ = null;
var check_val_BANG___1 = (function (e){return e.is(":checked");
});
var check_val_BANG___2 = (function (e,v){return e.prop("checked",cljs.core.boolean$.call(null,v));
});
check_val_BANG_ = function(e,v){
switch(arguments.length){
case 1:
return check_val_BANG___1.call(this,e);
case 2:
return check_val_BANG___2.call(this,e,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = check_val_BANG___1;
check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = check_val_BANG___2;
return check_val_BANG_;
})()
;
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__8401__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8402__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8403__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8404__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8405__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",2558708147),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("do!",((function (method_table__8401__auto__,prefer_table__8402__auto__,method_cache__8403__auto__,cached_hierarchy__8404__auto__,hierarchy__8405__auto__){
return (function (elem,key,val){return key;
});})(method_table__8401__auto__,prefer_table__8402__auto__,method_cache__8403__auto__,cached_hierarchy__8404__auto__,hierarchy__8405__auto__))
,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704),hierarchy__8405__auto__,method_table__8401__auto__,prefer_table__8402__auto__,method_cache__8403__auto__,cached_hierarchy__8404__auto__));
})();
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704),(function (elem,key,val){return tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",1016909155),new cljs.core.PersistentArrayMap.fromArray([key,val], true, false));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"value","value",1125876963),(function() { 
var G__9884__delegate = function (elem,_,args){var e = jQuery(elem);return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__9884 = function (elem,_,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9884__delegate.call(this,elem,_,args);};
G__9884.cljs$lang$maxFixedArity = 2;
G__9884.cljs$lang$applyTo = (function (arglist__9885){
var elem = cljs.core.first(arglist__9885);
arglist__9885 = cljs.core.next(arglist__9885);
var _ = cljs.core.first(arglist__9885);
var args = cljs.core.rest(arglist__9885);
return G__9884__delegate(elem,_,args);
});
G__9884.cljs$core$IFn$_invoke$arity$variadic = G__9884__delegate;
return G__9884;
})()
);
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"attr","attr",1016909155),(function (elem,_,kvs){var e = jQuery(elem);var seq__9886 = cljs.core.seq.call(null,kvs);var chunk__9887 = null;var count__9888 = 0;var i__9889 = 0;while(true){
if((i__9889 < count__9888))
{var vec__9890 = cljs.core._nth.call(null,chunk__9887,i__9889);var k = cljs.core.nth.call(null,vec__9890,0,null);var v = cljs.core.nth.call(null,vec__9890,1,null);var k_9892__$1 = cljs.core.name.call(null,k);if(cljs.core._EQ_.call(null,false,v))
{e.removeAttr(k_9892__$1);
} else
{e.attr(k_9892__$1,((cljs.core._EQ_.call(null,true,v))?k_9892__$1:v));
}
{
var G__9893 = seq__9886;
var G__9894 = chunk__9887;
var G__9895 = count__9888;
var G__9896 = (i__9889 + 1);
seq__9886 = G__9893;
chunk__9887 = G__9894;
count__9888 = G__9895;
i__9889 = G__9896;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9886);if(temp__4126__auto__)
{var seq__9886__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9886__$1))
{var c__8291__auto__ = cljs.core.chunk_first.call(null,seq__9886__$1);{
var G__9897 = cljs.core.chunk_rest.call(null,seq__9886__$1);
var G__9898 = c__8291__auto__;
var G__9899 = cljs.core.count.call(null,c__8291__auto__);
var G__9900 = 0;
seq__9886 = G__9897;
chunk__9887 = G__9898;
count__9888 = G__9899;
i__9889 = G__9900;
continue;
}
} else
{var vec__9891 = cljs.core.first.call(null,seq__9886__$1);var k = cljs.core.nth.call(null,vec__9891,0,null);var v = cljs.core.nth.call(null,vec__9891,1,null);var k_9901__$1 = cljs.core.name.call(null,k);if(cljs.core._EQ_.call(null,false,v))
{e.removeAttr(k_9901__$1);
} else
{e.attr(k_9901__$1,((cljs.core._EQ_.call(null,true,v))?k_9901__$1:v));
}
{
var G__9902 = cljs.core.next.call(null,seq__9886__$1);
var G__9903 = null;
var G__9904 = 0;
var G__9905 = 0;
seq__9886 = G__9902;
chunk__9887 = G__9903;
count__9888 = G__9904;
i__9889 = G__9905;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"class","class",1108647146),(function (elem,_,kvs){var elem__$1 = jQuery(elem);var __GT_map = ((function (elem__$1){
return (function (p1__9906_SHARP_){return cljs.core.zipmap.call(null,p1__9906_SHARP_,cljs.core.repeat.call(null,true));
});})(elem__$1))
;var clmap = ((cljs.core.map_QMARK_.call(null,kvs))?kvs:__GT_map.call(null,((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq.call(null,kvs))));var seq__9907 = cljs.core.seq.call(null,clmap);var chunk__9908 = null;var count__9909 = 0;var i__9910 = 0;while(true){
if((i__9910 < count__9909))
{var vec__9911 = cljs.core._nth.call(null,chunk__9908,i__9910);var c = cljs.core.nth.call(null,vec__9911,0,null);var p_QMARK_ = cljs.core.nth.call(null,vec__9911,1,null);elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));
{
var G__9913 = seq__9907;
var G__9914 = chunk__9908;
var G__9915 = count__9909;
var G__9916 = (i__9910 + 1);
seq__9907 = G__9913;
chunk__9908 = G__9914;
count__9909 = G__9915;
i__9910 = G__9916;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9907);if(temp__4126__auto__)
{var seq__9907__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9907__$1))
{var c__8291__auto__ = cljs.core.chunk_first.call(null,seq__9907__$1);{
var G__9917 = cljs.core.chunk_rest.call(null,seq__9907__$1);
var G__9918 = c__8291__auto__;
var G__9919 = cljs.core.count.call(null,c__8291__auto__);
var G__9920 = 0;
seq__9907 = G__9917;
chunk__9908 = G__9918;
count__9909 = G__9919;
i__9910 = G__9920;
continue;
}
} else
{var vec__9912 = cljs.core.first.call(null,seq__9907__$1);var c = cljs.core.nth.call(null,vec__9912,0,null);var p_QMARK_ = cljs.core.nth.call(null,vec__9912,1,null);elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));
{
var G__9921 = cljs.core.next.call(null,seq__9907__$1);
var G__9922 = null;
var G__9923 = 0;
var G__9924 = 0;
seq__9907 = G__9921;
chunk__9908 = G__9922;
count__9909 = G__9923;
i__9910 = G__9924;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"css","css",1014003061),(function (elem,_,kvs){var e = jQuery(elem);var seq__9925 = cljs.core.seq.call(null,kvs);var chunk__9926 = null;var count__9927 = 0;var i__9928 = 0;while(true){
if((i__9928 < count__9927))
{var vec__9929 = cljs.core._nth.call(null,chunk__9926,i__9928);var k = cljs.core.nth.call(null,vec__9929,0,null);var v = cljs.core.nth.call(null,vec__9929,1,null);e.css(cljs.core.name.call(null,k),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
{
var G__9931 = seq__9925;
var G__9932 = chunk__9926;
var G__9933 = count__9927;
var G__9934 = (i__9928 + 1);
seq__9925 = G__9931;
chunk__9926 = G__9932;
count__9927 = G__9933;
i__9928 = G__9934;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9925);if(temp__4126__auto__)
{var seq__9925__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9925__$1))
{var c__8291__auto__ = cljs.core.chunk_first.call(null,seq__9925__$1);{
var G__9935 = cljs.core.chunk_rest.call(null,seq__9925__$1);
var G__9936 = c__8291__auto__;
var G__9937 = cljs.core.count.call(null,c__8291__auto__);
var G__9938 = 0;
seq__9925 = G__9935;
chunk__9926 = G__9936;
count__9927 = G__9937;
i__9928 = G__9938;
continue;
}
} else
{var vec__9930 = cljs.core.first.call(null,seq__9925__$1);var k = cljs.core.nth.call(null,vec__9930,0,null);var v = cljs.core.nth.call(null,vec__9930,1,null);e.css(cljs.core.name.call(null,k),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
{
var G__9939 = cljs.core.next.call(null,seq__9925__$1);
var G__9940 = null;
var G__9941 = 0;
var G__9942 = 0;
seq__9925 = G__9939;
chunk__9926 = G__9940;
count__9927 = G__9941;
i__9928 = G__9942;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"toggle","toggle",4440567494),(function (elem,_,v){return jQuery(elem).toggle(cljs.core.boolean$.call(null,v));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"slide-toggle","slide-toggle",3005235810),(function (elem,_,v){if(cljs.core.truth_(v))
{return jQuery(elem).hide().slideDown("fast");
} else
{return jQuery(elem).slideUp("fast");
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"fade-toggle","fade-toggle",514539319),(function (elem,_,v){if(cljs.core.truth_(v))
{return jQuery(elem).hide().fadeIn("fast");
} else
{return jQuery(elem).fadeOut("fast");
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"focus","focus",1111509066),(function (elem,_,v){return setTimeout((function (){if(cljs.core.truth_(v))
{return jQuery(elem).focus();
} else
{return jQuery(elem).focusout();
}
}),0);
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"select","select",4402849902),(function (elem,_,___$1){return jQuery(elem).select();
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"focus-select","focus-select",3635190531),(function (elem,_,v){if(cljs.core.truth_(v))
{tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"focus","focus",1111509066),v);
return tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"select","select",4402849902),v);
} else
{return null;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"text","text",1017460895),(function (elem,_,v){return jQuery(elem).text((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"html","html",1017117469),(function (elem,_,v){return jQuery(elem).html(v);
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",1431647469),(function (elem,_,v){if(cljs.core.truth_(v))
{var body = jQuery("body,html");var elem__$1 = jQuery(elem);return body.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollTop","scrollTop",1431684794),elem__$1.offset().top], null)));
} else
{return null;
}
}));
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__8401__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__8402__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__8403__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__8404__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__8405__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",2558708147),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("on!",((function (method_table__8401__auto__,prefer_table__8402__auto__,method_cache__8403__auto__,cached_hierarchy__8404__auto__,hierarchy__8405__auto__){
return (function (elem,event,callback){return event;
});})(method_table__8401__auto__,prefer_table__8402__auto__,method_cache__8403__auto__,cached_hierarchy__8404__auto__,hierarchy__8405__auto__))
,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704),hierarchy__8405__auto__,method_table__8401__auto__,prefer_table__8402__auto__,method_cache__8403__auto__,cached_hierarchy__8404__auto__));
})();
jQuery.Event.prototype.cljs$core$IDeref$ = true;
jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var this$__$1 = this;return jQuery(this$__$1.target).val();
});
cljs.core._add_method.call(null,tailrecursion.hoplon.on_BANG_,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704),(function (elem,event,callback){return tailrecursion.hoplon.when_dom.call(null,elem,(function (){return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
}));
tailrecursion.hoplon.loop_tpl_STAR_ = (function loop_tpl_STAR_(items,reverse_QMARK_,tpl){var pool_size = tailrecursion.javelin.cell.call(null,0);var items_seq = tailrecursion.javelin.formula.call(null,((function (pool_size){
return (function (G__9968,G__9969){return G__9968.call(null,G__9969);
});})(pool_size))
).call(null,cljs.core.seq,items);var cur_count = tailrecursion.javelin.formula.call(null,((function (pool_size,items_seq){
return (function (G__9971,G__9970){return G__9970.call(null,G__9971);
});})(pool_size,items_seq))
).call(null,items_seq,cljs.core.count);var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__9943_SHARP_){return tailrecursion.javelin.formula.call(null,((function (pool_size,items_seq,cur_count){
return (function (G__9973,G__9972){return (G__9972 < G__9973);
});})(pool_size,items_seq,cur_count))
).call(null,cur_count,p1__9943_SHARP_);
});})(pool_size,items_seq,cur_count))
;var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__9944_SHARP_){return tailrecursion.javelin.formula.call(null,((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__9975,G__9974,G__9976){return G__9974.call(null,G__9975,G__9976);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,items_seq,tailrecursion.hoplon.safe_nth,p1__9944_SHARP_);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;var d = tailrecursion.hoplon.span.call(null);tailrecursion.hoplon.when_dom.call(null,d,((function (d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (){var p = d.parentNode;p.removeChild(d);
return tailrecursion.javelin.formula.call(null,((function (p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item){
return (function (G__9990,G__9988,G__9983,G__9981,G__9982,G__9987,G__9989,G__9984,G__9986,G__9985){if(cljs.core.truth_((G__9981 < G__9982)))
{var seq__9977_9991 = cljs.core.seq.call(null,G__9983.call(null,G__9981,G__9982));var chunk__9978_9992 = null;var count__9979_9993 = 0;var i__9980_9994 = 0;while(true){
if(cljs.core.truth_((i__9980_9994 < count__9979_9993)))
{var i_9995 = cljs.core._nth.call(null,chunk__9978_9992,i__9980_9994);var e_9996 = G__9984.call(null,G__9985.call(null,i_9995)).call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",1250159176),G__9986.call(null,i_9995));if(cljs.core.not.call(null,G__9987))
{G__9988.appendChild(e_9996);
} else
{G__9988.insertBefore(e_9996,G__9988.firstChild);
}
{
var G__9997 = seq__9977_9991;
var G__9998 = chunk__9978_9992;
var G__9999 = count__9979_9993;
var G__10000 = (i__9980_9994 + 1);
seq__9977_9991 = G__9997;
chunk__9978_9992 = G__9998;
count__9979_9993 = G__9999;
i__9980_9994 = G__10000;
continue;
}
} else
{var temp__4126__auto___10001 = cljs.core.seq.call(null,seq__9977_9991);if(temp__4126__auto___10001)
{var seq__9977_10002__$1 = temp__4126__auto___10001;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9977_10002__$1))
{var c__8291__auto___10003 = cljs.core.chunk_first.call(null,seq__9977_10002__$1);{
var G__10004 = cljs.core.chunk_rest.call(null,seq__9977_10002__$1);
var G__10005 = c__8291__auto___10003;
var G__10006 = cljs.core.count.call(null,c__8291__auto___10003);
var G__10007 = 0;
seq__9977_9991 = G__10004;
chunk__9978_9992 = G__10005;
count__9979_9993 = G__10006;
i__9980_9994 = G__10007;
continue;
}
} else
{var i_10008 = cljs.core.first.call(null,seq__9977_10002__$1);var e_10009 = G__9984.call(null,G__9985.call(null,i_10008)).call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",1250159176),G__9986.call(null,i_10008));if(cljs.core.not.call(null,G__9987))
{G__9988.appendChild(e_10009);
} else
{G__9988.insertBefore(e_10009,G__9988.firstChild);
}
{
var G__10010 = cljs.core.next.call(null,seq__9977_10002__$1);
var G__10011 = null;
var G__10012 = 0;
var G__10013 = 0;
seq__9977_9991 = G__10010;
chunk__9978_9992 = G__10011;
count__9979_9993 = G__10012;
i__9980_9994 = G__10013;
continue;
}
}
} else
{}
}
break;
}
return G__9989.call(null,G__9990,G__9982);
} else
{return null;
}
});})(p,d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item))
).call(null,tailrecursion.javelin.cell.call(null,pool_size),p,cljs.core.range,pool_size,cur_count,reverse_QMARK_,cljs.core.reset_BANG_,tpl,show_ith_QMARK_,ith_item);
});})(d,pool_size,items_seq,cur_count,show_ith_QMARK_,ith_item))
);
return d;
});
/**
* Manage the URL hash via Javelin cells. There are three arities:
* 
* - When called with no arguments this function returns a formula cell whose
* value is the URL hash or nil.
* 
* - When called with a single string argument, the argument is taken as the
* default value, which is returned in place of nil when there is no hash.
* 
* - When a single cell argument is provided, the URL hash is kept synced to the
* value of the cell.
* 
* - When a cell and a callback function are both provided, the URL hash is kept
* synced to the value of the cell as above, and any attempt to change the hash
* other than via the setter cell causes the callback to be called. The callback
* should be a function of one argument, the requested URL hash.
*/
tailrecursion.hoplon.route_cell = (function() {
var route_cell = null;
var route_cell__0 = (function (){var r = (function (){var ret__8556__auto__ = tailrecursion.javelin.cell.call(null,window.location.hash);setInterval(((function (ret__8556__auto__){
return (function (){return cljs.core.reset_BANG_.call(null,ret__8556__auto__,window.location.hash);
});})(ret__8556__auto__))
,100);
return tailrecursion.javelin.formula.call(null,((function (ret__8556__auto__){
return (function (G__10023){return G__10023;
});})(ret__8556__auto__))
).call(null,ret__8556__auto__);
})();return tailrecursion.javelin.formula.call(null,((function (r){
return (function (G__10025,G__10024){if(cljs.core.truth_(G__10024.call(null,"",G__10025)))
{return G__10025;
} else
{return null;
}
});})(r))
).call(null,r,cljs.core.not_EQ_);
});
var route_cell__1 = (function (setter_or_dfl){if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,setter_or_dfl)))
{var setter__8557__auto__ = setter_or_dfl;var callback__8558__auto__ = (function (){var or__7535__auto__ = null;if(cljs.core.truth_(or__7535__auto__))
{return or__7535__auto__;
} else
{return cljs.core.identity;
}
})();tailrecursion.javelin.formula.call(null,((function (setter__8557__auto__,callback__8558__auto__){
return (function (G__10027,G__10026){return G__10026.location.hash = G__10027;
});})(setter__8557__auto__,callback__8558__auto__))
).call(null,setter__8557__auto__,window);
setInterval(((function (setter__8557__auto__,callback__8558__auto__){
return (function (){if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,setter__8557__auto__),window.location.hash))
{callback__8558__auto__.call(null,window.location.hash);
return window.location.hash = cljs.core.deref.call(null,setter__8557__auto__);
} else
{return null;
}
});})(setter__8557__auto__,callback__8558__auto__))
,100);
return setter__8557__auto__;
} else
{var r = route_cell.call(null);return tailrecursion.javelin.formula.call(null,((function (r){
return (function (G__10028,G__10029){var or__7535__auto__ = G__10028;if(cljs.core.truth_(or__7535__auto__))
{return or__7535__auto__;
} else
{return G__10029;
}
});})(r))
).call(null,r,setter_or_dfl);
}
});
var route_cell__2 = (function (setter,callback){var setter__8557__auto__ = setter;var callback__8558__auto__ = (function (){var or__7535__auto__ = callback;if(cljs.core.truth_(or__7535__auto__))
{return or__7535__auto__;
} else
{return cljs.core.identity;
}
})();tailrecursion.javelin.formula.call(null,((function (setter__8557__auto__,callback__8558__auto__){
return (function (G__10031,G__10030){return G__10030.location.hash = G__10031;
});})(setter__8557__auto__,callback__8558__auto__))
).call(null,setter__8557__auto__,window);
setInterval(((function (setter__8557__auto__,callback__8558__auto__){
return (function (){if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,setter__8557__auto__),window.location.hash))
{callback__8558__auto__.call(null,window.location.hash);
return window.location.hash = cljs.core.deref.call(null,setter__8557__auto__);
} else
{return null;
}
});})(setter__8557__auto__,callback__8558__auto__))
,100);
return setter__8557__auto__;
});
route_cell = function(setter,callback){
switch(arguments.length){
case 0:
return route_cell__0.call(this);
case 1:
return route_cell__1.call(this,setter);
case 2:
return route_cell__2.call(this,setter,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
route_cell.cljs$core$IFn$_invoke$arity$0 = route_cell__0;
route_cell.cljs$core$IFn$_invoke$arity$1 = route_cell__1;
route_cell.cljs$core$IFn$_invoke$arity$2 = route_cell__2;
return route_cell;
})()
;
