// Compiled by ClojureScript 0.0-2755 {}
goog.provide('reagent_forms.core');
goog.require('cljs.core');
goog.require('reagent_forms.datepicker');
goog.require('reagent.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.walk');
reagent_forms.core.value_of = (function value_of(element){
return element.target.value;
});
reagent_forms.core.id__GT_path = cljs.core.memoize((function (id){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(id),/\./));
}));
reagent_forms.core.set_doc_value = (function set_doc_value(doc,id,value,events){
var path = (function (){var G__18746 = id;
return (reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(G__18746) : reagent_forms.core.id__GT_path.call(null,G__18746));
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (path){
return (function (p1__18738_SHARP_,p2__18737_SHARP_){
var or__3772__auto__ = (function (){var G__18750 = path;
var G__18751 = value;
var G__18752 = p1__18738_SHARP_;
return (p2__18737_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p2__18737_SHARP_.cljs$core$IFn$_invoke$arity$3(G__18750,G__18751,G__18752) : p2__18737_SHARP_.call(null,G__18750,G__18751,G__18752));
})();
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return p1__18738_SHARP_;
}
});})(path))
,cljs.core.assoc_in(doc,path,value),events);
});
reagent_forms.core.mk_save_fn = (function mk_save_fn(doc,events){
return (function (id,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(doc,reagent_forms.core.set_doc_value,id,value,cljs.core.array_seq([events], 0));
});
});
reagent_forms.core.wrap_get_fn = (function wrap_get_fn(get,wrapper){
return (function (id){
var G__18755 = (function (){var G__18756 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18756) : get.call(null,G__18756));
})();
return (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(G__18755) : wrapper.call(null,G__18755));
});
});
reagent_forms.core.wrap_save_fn = (function wrap_save_fn(save_BANG_,wrapper){
return (function (id,value){
var G__18760 = id;
var G__18761 = (function (){var G__18762 = value;
return (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(G__18762) : wrapper.call(null,G__18762));
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18760,G__18761) : save_BANG_.call(null,G__18760,G__18761));
});
});
reagent_forms.core.wrap_fns = (function wrap_fns(opts,node){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$85,(function (){var temp__4124__auto__ = cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1(cljs.core.second(node));
if(cljs.core.truth_(temp__4124__auto__)){
var in_fn = temp__4124__auto__;
return reagent_forms.core.wrap_get_fn(cljs.core.constant$keyword$85.cljs$core$IFn$_invoke$arity$1(opts),in_fn);
} else {
return cljs.core.constant$keyword$85.cljs$core$IFn$_invoke$arity$1(opts);
}
})(),cljs.core.constant$keyword$86,(function (){var temp__4124__auto__ = cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(cljs.core.second(node));
if(cljs.core.truth_(temp__4124__auto__)){
var out_fn = temp__4124__auto__;
return reagent_forms.core.wrap_save_fn(cljs.core.constant$keyword$86.cljs$core$IFn$_invoke$arity$1(opts),out_fn);
} else {
return cljs.core.constant$keyword$86.cljs$core$IFn$_invoke$arity$1(opts);
}
})()], null);
});
reagent_forms.core.format_type = (function (){var method_table__4669__auto__ = (function (){var G__18763 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18763) : cljs.core.atom.call(null,G__18763));
})();
var prefer_table__4670__auto__ = (function (){var G__18764 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18764) : cljs.core.atom.call(null,G__18764));
})();
var method_cache__4671__auto__ = (function (){var G__18765 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18765) : cljs.core.atom.call(null,G__18765));
})();
var cached_hierarchy__4672__auto__ = (function (){var G__18766 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18766) : cljs.core.atom.call(null,G__18766));
})();
var hierarchy__4673__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$89,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","format-type"),((function (method_table__4669__auto__,prefer_table__4670__auto__,method_cache__4671__auto__,cached_hierarchy__4672__auto__,hierarchy__4673__auto__){
return (function (field_type,_){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([field_type], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$90,cljs.core.constant$keyword$91], null)))){
return cljs.core.constant$keyword$91;
} else {
return field_type;
}
});})(method_table__4669__auto__,prefer_table__4670__auto__,method_cache__4671__auto__,cached_hierarchy__4672__auto__,hierarchy__4673__auto__))
,cljs.core.constant$keyword$7,hierarchy__4673__auto__,method_table__4669__auto__,prefer_table__4670__auto__,method_cache__4671__auto__,cached_hierarchy__4672__auto__));
})();
reagent_forms.core.valid_number_ending_QMARK_ = (function valid_number_ending_QMARK_(n){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(".",cljs.core.last(cljs.core.butlast(n)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",cljs.core.last(n)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("0",cljs.core.last(n)));
});
reagent_forms.core.format_value = (function format_value(fmt,value){
if(cljs.core.truth_((function (){var and__3760__auto__ = cljs.core.not((function (){var G__18775 = (function (){var G__18776 = value;
return parseFloat(G__18776);
})();
return isNaN(G__18775);
})());
if(and__3760__auto__){
return fmt;
} else {
return and__3760__auto__;
}
})())){
var G__18777 = fmt;
var G__18778 = value;
return goog.string.format(G__18777,G__18778);
} else {
return value;
}
});
reagent_forms.core.format_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$91,(function (_,n){
if(cljs.core.truth_(cljs.core.not_empty(n))){
var parsed = (function (){var G__18779 = n;
return parseFloat(G__18779);
})();
if(cljs.core.truth_((function (){var G__18780 = parsed;
return isNaN(G__18780);
})())){
return null;
} else {
if(reagent_forms.core.valid_number_ending_QMARK_(n)){
return n;
} else {
return parsed;
}
}
} else {
return null;
}
}));
reagent_forms.core.format_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$7,(function (_,value){
return value;
}));
reagent_forms.core.bind = (function (){var method_table__4669__auto__ = (function (){var G__18781 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18781) : cljs.core.atom.call(null,G__18781));
})();
var prefer_table__4670__auto__ = (function (){var G__18782 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18782) : cljs.core.atom.call(null,G__18782));
})();
var method_cache__4671__auto__ = (function (){var G__18783 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18783) : cljs.core.atom.call(null,G__18783));
})();
var cached_hierarchy__4672__auto__ = (function (){var G__18784 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18784) : cljs.core.atom.call(null,G__18784));
})();
var hierarchy__4673__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$89,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","bind"),((function (method_table__4669__auto__,prefer_table__4670__auto__,method_cache__4671__auto__,cached_hierarchy__4672__auto__,hierarchy__4673__auto__){
return (function (p__18785,_){
var map__18786 = p__18785;
var map__18786__$1 = ((cljs.core.seq_QMARK_(map__18786))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18786):map__18786);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18786__$1,cljs.core.constant$keyword$92);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([field], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$93,cljs.core.constant$keyword$91,cljs.core.constant$keyword$94,cljs.core.constant$keyword$95,cljs.core.constant$keyword$90,cljs.core.constant$keyword$96], null)))){
return cljs.core.constant$keyword$97;
} else {
return field;
}
});})(method_table__4669__auto__,prefer_table__4670__auto__,method_cache__4671__auto__,cached_hierarchy__4672__auto__,hierarchy__4673__auto__))
,cljs.core.constant$keyword$7,hierarchy__4673__auto__,method_table__4669__auto__,prefer_table__4670__auto__,method_cache__4671__auto__,cached_hierarchy__4672__auto__));
})();
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$97,(function (p__18788,p__18789){
var map__18790 = p__18788;
var map__18790__$1 = ((cljs.core.seq_QMARK_(map__18790))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18790):map__18790);
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18790__$1,cljs.core.constant$keyword$98);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18790__$1,cljs.core.constant$keyword$99);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18790__$1,cljs.core.constant$keyword$92);
var map__18791 = p__18789;
var map__18791__$1 = ((cljs.core.seq_QMARK_(map__18791))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18791):map__18791);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18791__$1,cljs.core.constant$keyword$86);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18791__$1,cljs.core.constant$keyword$85);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$40,(function (){var value = (function (){var or__3772__auto__ = (function (){var G__18793 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18793) : get.call(null,G__18793));
})();
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value(fmt,value);
})(),cljs.core.constant$keyword$100,((function (map__18790,map__18790__$1,fmt,id,field,map__18791,map__18791__$1,save_BANG_,get){
return (function (p1__18787_SHARP_){
var G__18794 = id;
var G__18795 = (function (){var G__18796 = field;
var G__18797 = reagent_forms.core.value_of(p1__18787_SHARP_);
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__18796,G__18797) : reagent_forms.core.format_type.call(null,G__18796,G__18797));
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18794,G__18795) : save_BANG_.call(null,G__18794,G__18795));
});})(map__18790,map__18790__$1,fmt,id,field,map__18791,map__18791__$1,save_BANG_,get))
], null);
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$101,(function (p__18798,p__18799){
var map__18800 = p__18798;
var map__18800__$1 = ((cljs.core.seq_QMARK_(map__18800))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18800):map__18800);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18800__$1,cljs.core.constant$keyword$99);
var map__18801 = p__18799;
var map__18801__$1 = ((cljs.core.seq_QMARK_(map__18801))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18801):map__18801);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18801__$1,cljs.core.constant$keyword$86);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18801__$1,cljs.core.constant$keyword$85);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$102,(function (){var G__18802 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18802) : get.call(null,G__18802));
})(),cljs.core.constant$keyword$100,((function (map__18800,map__18800__$1,id,map__18801,map__18801__$1,save_BANG_,get){
return (function (){
var G__18803 = id;
var G__18804 = cljs.core.not((function (){var G__18805 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18805) : get.call(null,G__18805));
})());
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18803,G__18804) : save_BANG_.call(null,G__18803,G__18804));
});})(map__18800,map__18800__$1,id,map__18801,map__18801__$1,save_BANG_,get))
], null);
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$7,(function (_,___$1){
return null;
}));
/**
* @param {...*} var_args
*/
reagent_forms.core.set_attrs = (function() { 
var set_attrs__delegate = function (p__18806,opts,p__18807){
var vec__18812 = p__18806;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18812,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18812,(1),null);
var body = cljs.core.nthnext(vec__18812,(2));
var vec__18813 = p__18807;
var default_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18813,(0),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([default_attrs,(function (){var G__18814 = attrs;
var G__18815 = opts;
return (reagent_forms.core.bind.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.bind.cljs$core$IFn$_invoke$arity$2(G__18814,G__18815) : reagent_forms.core.bind.call(null,G__18814,G__18815));
})(),attrs], 0))], null),body);
};
var set_attrs = function (p__18806,opts,var_args){
var p__18807 = null;
if (arguments.length > 2) {
var G__18816__i = 0, G__18816__a = new Array(arguments.length -  2);
while (G__18816__i < G__18816__a.length) {G__18816__a[G__18816__i] = arguments[G__18816__i + 2]; ++G__18816__i;}
  p__18807 = new cljs.core.IndexedSeq(G__18816__a,0);
} 
return set_attrs__delegate.call(this,p__18806,opts,p__18807);};
set_attrs.cljs$lang$maxFixedArity = 2;
set_attrs.cljs$lang$applyTo = (function (arglist__18817){
var p__18806 = cljs.core.first(arglist__18817);
arglist__18817 = cljs.core.next(arglist__18817);
var opts = cljs.core.first(arglist__18817);
var p__18807 = cljs.core.rest(arglist__18817);
return set_attrs__delegate(p__18806,opts,p__18807);
});
set_attrs.cljs$core$IFn$_invoke$arity$variadic = set_attrs__delegate;
return set_attrs;
})()
;
reagent_forms.core.init_field = (function (){var method_table__4669__auto__ = (function (){var G__18818 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18818) : cljs.core.atom.call(null,G__18818));
})();
var prefer_table__4670__auto__ = (function (){var G__18819 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18819) : cljs.core.atom.call(null,G__18819));
})();
var method_cache__4671__auto__ = (function (){var G__18820 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18820) : cljs.core.atom.call(null,G__18820));
})();
var cached_hierarchy__4672__auto__ = (function (){var G__18821 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18821) : cljs.core.atom.call(null,G__18821));
})();
var hierarchy__4673__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$89,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","init-field"),((function (method_table__4669__auto__,prefer_table__4670__auto__,method_cache__4671__auto__,cached_hierarchy__4672__auto__,hierarchy__4673__auto__){
return (function (p__18822,_){
var vec__18823 = p__18822;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18823,(0),null);
var map__18824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18823,(1),null);
var map__18824__$1 = ((cljs.core.seq_QMARK_(map__18824))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18824):map__18824);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18824__$1,cljs.core.constant$keyword$92);
var field__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([field__$1], true),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$90,cljs.core.constant$keyword$93,cljs.core.constant$keyword$94,cljs.core.constant$keyword$95,cljs.core.constant$keyword$96], null)))){
return cljs.core.constant$keyword$97;
} else {
return field__$1;
}
});})(method_table__4669__auto__,prefer_table__4670__auto__,method_cache__4671__auto__,cached_hierarchy__4672__auto__,hierarchy__4673__auto__))
,cljs.core.constant$keyword$7,hierarchy__4673__auto__,method_table__4669__auto__,prefer_table__4670__auto__,method_cache__4671__auto__,cached_hierarchy__4672__auto__));
})();
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$103,(function (p__18825,p__18826){
var vec__18827 = p__18825;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18827,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18827,(1),null);
var component = vec__18827;
var map__18828 = p__18826;
var map__18828__$1 = ((cljs.core.seq_QMARK_(map__18828))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18828):map__18828);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18828__$1,cljs.core.constant$keyword$104);
return ((function (vec__18827,_,attrs,component,map__18828,map__18828__$1,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__11383__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__18829 = (function (){var G__18830 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18830) : cljs.core.deref.call(null,G__18830));
})();
return (visible__11383__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__11383__auto__.cljs$core$IFn$_invoke$arity$1(G__18829) : visible__11383__auto__.call(null,G__18829));
})())){
return component;
} else {
return null;
}
} else {
return component;
}
});
;})(vec__18827,_,attrs,component,map__18828,map__18828__$1,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$97,(function (p__18831,p__18832){
var vec__18833 = p__18831;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18833,(0),null);
var map__18834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18833,(1),null);
var map__18834__$1 = ((cljs.core.seq_QMARK_(map__18834))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18834):map__18834);
var attrs = map__18834__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18834__$1,cljs.core.constant$keyword$92);
var component = vec__18833;
var map__18835 = p__18832;
var map__18835__$1 = ((cljs.core.seq_QMARK_(map__18835))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18835):map__18835);
var opts = map__18835__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18835__$1,cljs.core.constant$keyword$104);
return ((function (vec__18833,_,map__18834,map__18834__$1,attrs,field,component,map__18835,map__18835__$1,opts,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__11383__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__18836 = (function (){var G__18837 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18837) : cljs.core.deref.call(null,G__18837));
})();
return (visible__11383__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__11383__auto__.cljs$core$IFn$_invoke$arity$1(G__18836) : visible__11383__auto__.call(null,G__18836));
})())){
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$45,field], null)], 0));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$45,field], null)], 0));
}
});
;})(vec__18833,_,map__18834,map__18834__$1,attrs,field,component,map__18835,map__18835__$1,opts,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$91,(function (p__18839,p__18840){
var vec__18841 = p__18839;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18841,(0),null);
var map__18842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18841,(1),null);
var map__18842__$1 = ((cljs.core.seq_QMARK_(map__18842))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18842):map__18842);
var attrs = map__18842__$1;
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18842__$1,cljs.core.constant$keyword$98);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18842__$1,cljs.core.constant$keyword$99);
var map__18843 = p__18840;
var map__18843__$1 = ((cljs.core.seq_QMARK_(map__18843))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18843):map__18843);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18843__$1,cljs.core.constant$keyword$86);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18843__$1,cljs.core.constant$keyword$85);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18843__$1,cljs.core.constant$keyword$104);
var display_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$106,false,cljs.core.constant$keyword$40,(function (){var G__18844 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18844) : get.call(null,G__18844));
})()], null));
return ((function (display_value,vec__18841,type,map__18842,map__18842__$1,attrs,fmt,id,map__18843,map__18843__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__11383__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__18845 = (function (){var G__18846 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18846) : cljs.core.deref.call(null,G__18846));
})();
return (visible__11383__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__11383__auto__.cljs$core$IFn$_invoke$arity$1(G__18845) : visible__11383__auto__.call(null,G__18845));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$45,cljs.core.constant$keyword$93,cljs.core.constant$keyword$40,(function (){var doc_value = (function (){var or__3772__auto__ = (function (){var G__18849 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18849) : get.call(null,G__18849));
})();
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return "";
}
})();
var map__18847 = (function (){var G__18850 = display_value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18850) : cljs.core.deref.call(null,G__18850));
})();
var map__18847__$1 = ((cljs.core.seq_QMARK_(map__18847))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18847):map__18847);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18847__$1,cljs.core.constant$keyword$40);
var changed_self_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18847__$1,cljs.core.constant$keyword$106);
var value__$1 = (cljs.core.truth_(changed_self_QMARK_)?value:doc_value);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(display_value,cljs.core.dissoc,cljs.core.constant$keyword$106);

return reagent_forms.core.format_value(fmt,value__$1);
})(),cljs.core.constant$keyword$100,((function (visible__11383__auto__,temp__4124__auto__,display_value,vec__18841,type,map__18842,map__18842__$1,attrs,fmt,id,map__18843,map__18843__$1,save_BANG_,get,doc){
return (function (p1__18838_SHARP_){
var temp__4124__auto____$1 = (function (){var G__18851 = cljs.core.constant$keyword$91;
var G__18852 = reagent_forms.core.value_of(p1__18838_SHARP_);
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__18851,G__18852) : reagent_forms.core.format_type.call(null,G__18851,G__18852));
})();
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
var G__18853_18873 = display_value;
var G__18854_18874 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$106,true,cljs.core.constant$keyword$40,value], null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18853_18873,G__18854_18874) : cljs.core.reset_BANG_.call(null,G__18853_18873,G__18854_18874));

var G__18855 = id;
var G__18856 = (function (){var G__18857 = value;
return parseFloat(G__18857);
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18855,G__18856) : save_BANG_.call(null,G__18855,G__18856));
} else {
var G__18858 = id;
var G__18859 = null;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18858,G__18859) : save_BANG_.call(null,G__18858,G__18859));
}
});})(visible__11383__auto__,temp__4124__auto__,display_value,vec__18841,type,map__18842,map__18842__$1,attrs,fmt,id,map__18843,map__18843__$1,save_BANG_,get,doc))
], null),attrs], 0))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$45,cljs.core.constant$keyword$93,cljs.core.constant$keyword$40,(function (){var doc_value = (function (){var or__3772__auto__ = (function (){var G__18862 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18862) : get.call(null,G__18862));
})();
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return "";
}
})();
var map__18860 = (function (){var G__18863 = display_value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18863) : cljs.core.deref.call(null,G__18863));
})();
var map__18860__$1 = ((cljs.core.seq_QMARK_(map__18860))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18860):map__18860);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18860__$1,cljs.core.constant$keyword$40);
var changed_self_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18860__$1,cljs.core.constant$keyword$106);
var value__$1 = (cljs.core.truth_(changed_self_QMARK_)?value:doc_value);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(display_value,cljs.core.dissoc,cljs.core.constant$keyword$106);

return reagent_forms.core.format_value(fmt,value__$1);
})(),cljs.core.constant$keyword$100,((function (temp__4124__auto__,display_value,vec__18841,type,map__18842,map__18842__$1,attrs,fmt,id,map__18843,map__18843__$1,save_BANG_,get,doc){
return (function (p1__18838_SHARP_){
var temp__4124__auto____$1 = (function (){var G__18864 = cljs.core.constant$keyword$91;
var G__18865 = reagent_forms.core.value_of(p1__18838_SHARP_);
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__18864,G__18865) : reagent_forms.core.format_type.call(null,G__18864,G__18865));
})();
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
var G__18866_18875 = display_value;
var G__18867_18876 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$106,true,cljs.core.constant$keyword$40,value], null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18866_18875,G__18867_18876) : cljs.core.reset_BANG_.call(null,G__18866_18875,G__18867_18876));

var G__18868 = id;
var G__18869 = (function (){var G__18870 = value;
return parseFloat(G__18870);
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18868,G__18869) : save_BANG_.call(null,G__18868,G__18869));
} else {
var G__18871 = id;
var G__18872 = null;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18871,G__18872) : save_BANG_.call(null,G__18871,G__18872));
}
});})(temp__4124__auto__,display_value,vec__18841,type,map__18842,map__18842__$1,attrs,fmt,id,map__18843,map__18843__$1,save_BANG_,get,doc))
], null),attrs], 0))], null);
}
});
;})(display_value,vec__18841,type,map__18842,map__18842__$1,attrs,fmt,id,map__18843,map__18843__$1,save_BANG_,get,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$107,(function (p__18878,p__18879){
var vec__18880 = p__18878;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18880,(0),null);
var map__18881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18880,(1),null);
var map__18881__$1 = ((cljs.core.seq_QMARK_(map__18881))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18881):map__18881);
var attrs = map__18881__$1;
var auto_close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18881__$1,cljs.core.constant$keyword$108);
var inline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18881__$1,cljs.core.constant$keyword$109);
var date_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18881__$1,cljs.core.constant$keyword$110);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18881__$1,cljs.core.constant$keyword$99);
var map__18882 = p__18879;
var map__18882__$1 = ((cljs.core.seq_QMARK_(map__18882))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18882):map__18882);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18882__$1,cljs.core.constant$keyword$86);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18882__$1,cljs.core.constant$keyword$85);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18882__$1,cljs.core.constant$keyword$104);
var fmt = reagent_forms.datepicker.parse_format(date_format);
var today = (new Date());
var expanded_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (fmt,today,expanded_QMARK_,vec__18880,_,map__18881,map__18881__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__18882,map__18882__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__11383__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__18883 = (function (){var G__18884 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18884) : cljs.core.deref.call(null,G__18884));
})();
return (visible__11383__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__11383__auto__.cljs$core$IFn$_invoke$arity$1(G__18883) : visible__11383__auto__.call(null,G__18883));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$111,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$112,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$113,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$114,true,cljs.core.constant$keyword$45,cljs.core.constant$keyword$93,cljs.core.constant$keyword$72,((function (visible__11383__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__18880,_,map__18881,map__18881__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__18882,map__18882__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(visible__11383__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__18880,_,map__18881,map__18881__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__18882,map__18882__$1,save_BANG_,get,doc))
,cljs.core.constant$keyword$40,(function (){var temp__4126__auto__ = (function (){var G__18885 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18885) : get.call(null,G__18885));
})();
if(cljs.core.truth_(temp__4126__auto__)){
var date = temp__4126__auto__;
return reagent_forms.datepicker.format_date(date,fmt);
} else {
return null;
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$115,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$72,((function (visible__11383__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__18880,_,map__18881,map__18881__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__18882,map__18882__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(visible__11383__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__18880,_,map__18881,map__18881__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__18882,map__18882__$1,save_BANG_,get,doc))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$116], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),today.getDate(),expanded_QMARK_,auto_close_QMARK_,((function (visible__11383__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__18880,_,map__18881,map__18881__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__18882,map__18882__$1,save_BANG_,get,doc){
return (function (){
var G__18886 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18886) : get.call(null,G__18886));
});})(visible__11383__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__18880,_,map__18881,map__18881__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__18882,map__18882__$1,save_BANG_,get,doc))
,((function (visible__11383__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__18880,_,map__18881,map__18881__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__18882,map__18882__$1,save_BANG_,get,doc){
return (function (p1__18877_SHARP_){
var G__18887 = id;
var G__18888 = p1__18877_SHARP_;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18887,G__18888) : save_BANG_.call(null,G__18887,G__18888));
});})(visible__11383__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__18880,_,map__18881,map__18881__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__18882,map__18882__$1,save_BANG_,get,doc))
,inline], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$111,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$112,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$113,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$114,true,cljs.core.constant$keyword$45,cljs.core.constant$keyword$93,cljs.core.constant$keyword$72,((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__18880,_,map__18881,map__18881__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__18882,map__18882__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__18880,_,map__18881,map__18881__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__18882,map__18882__$1,save_BANG_,get,doc))
,cljs.core.constant$keyword$40,(function (){var temp__4126__auto__ = (function (){var G__18889 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18889) : get.call(null,G__18889));
})();
if(cljs.core.truth_(temp__4126__auto__)){
var date = temp__4126__auto__;
return reagent_forms.datepicker.format_date(date,fmt);
} else {
return null;
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$115,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$72,((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__18880,_,map__18881,map__18881__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__18882,map__18882__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__18880,_,map__18881,map__18881__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__18882,map__18882__$1,save_BANG_,get,doc))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$116], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),today.getDate(),expanded_QMARK_,auto_close_QMARK_,((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__18880,_,map__18881,map__18881__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__18882,map__18882__$1,save_BANG_,get,doc){
return (function (){
var G__18890 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18890) : get.call(null,G__18890));
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__18880,_,map__18881,map__18881__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__18882,map__18882__$1,save_BANG_,get,doc))
,((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__18880,_,map__18881,map__18881__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__18882,map__18882__$1,save_BANG_,get,doc){
return (function (p1__18877_SHARP_){
var G__18891 = id;
var G__18892 = p1__18877_SHARP_;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18891,G__18892) : save_BANG_.call(null,G__18891,G__18892));
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__18880,_,map__18881,map__18881__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__18882,map__18882__$1,save_BANG_,get,doc))
,inline], null)], null);
}
});
;})(fmt,today,expanded_QMARK_,vec__18880,_,map__18881,map__18881__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__18882,map__18882__$1,save_BANG_,get,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$101,(function (p__18893,p__18894){
var vec__18895 = p__18893;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18895,(0),null);
var map__18896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18895,(1),null);
var map__18896__$1 = ((cljs.core.seq_QMARK_(map__18896))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18896):map__18896);
var attrs = map__18896__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18896__$1,cljs.core.constant$keyword$92);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18896__$1,cljs.core.constant$keyword$99);
var component = vec__18895;
var map__18897 = p__18894;
var map__18897__$1 = ((cljs.core.seq_QMARK_(map__18897))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18897):map__18897);
var opts = map__18897__$1;
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18897__$1,cljs.core.constant$keyword$85);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18897__$1,cljs.core.constant$keyword$104);
return ((function (vec__18895,_,map__18896,map__18896__$1,attrs,field,id,component,map__18897,map__18897__$1,opts,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__11383__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__18898 = (function (){var G__18899 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18899) : cljs.core.deref.call(null,G__18899));
})();
return (visible__11383__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__11383__auto__.cljs$core$IFn$_invoke$arity$1(G__18898) : visible__11383__auto__.call(null,G__18898));
})())){
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$45,field], null)], 0));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$45,field], null)], 0));
}
});
;})(vec__18895,_,map__18896,map__18896__$1,attrs,field,id,component,map__18897,map__18897__$1,opts,get,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$117,(function (p__18900,p__18901){
var vec__18902 = p__18900;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18902,(0),null);
var map__18903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18902,(1),null);
var map__18903__$1 = ((cljs.core.seq_QMARK_(map__18903))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18903):map__18903);
var attrs = map__18903__$1;
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18903__$1,cljs.core.constant$keyword$118);
var postamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18903__$1,cljs.core.constant$keyword$119);
var preamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18903__$1,cljs.core.constant$keyword$120);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18903__$1,cljs.core.constant$keyword$99);
var map__18904 = p__18901;
var map__18904__$1 = ((cljs.core.seq_QMARK_(map__18904))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18904):map__18904);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18904__$1,cljs.core.constant$keyword$85);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18904__$1,cljs.core.constant$keyword$104);
return ((function (vec__18902,type,map__18903,map__18903__$1,attrs,placeholder,postamble,preamble,id,map__18904,map__18904__$1,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__11383__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__18905 = (function (){var G__18906 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18906) : cljs.core.deref.call(null,G__18906));
})();
return (visible__11383__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__11383__auto__.cljs$core$IFn$_invoke$arity$1(G__18905) : visible__11383__auto__.call(null,G__18905));
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4124__auto____$1 = (function (){var G__18907 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18907) : get.call(null,G__18907));
})();
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else {
return placeholder;
}
})()], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4124__auto____$1 = (function (){var G__18908 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18908) : get.call(null,G__18908));
})();
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else {
return placeholder;
}
})()], null);
}
});
;})(vec__18902,type,map__18903,map__18903__$1,attrs,placeholder,postamble,preamble,id,map__18904,map__18904__$1,get,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$121,(function (p__18909,p__18910){
var vec__18911 = p__18909;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18911,(0),null);
var map__18912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18911,(1),null);
var map__18912__$1 = ((cljs.core.seq_QMARK_(map__18912))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18912):map__18912);
var attrs = map__18912__$1;
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18912__$1,cljs.core.constant$keyword$122);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18912__$1,cljs.core.constant$keyword$123);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18912__$1,cljs.core.constant$keyword$99);
var body = cljs.core.nthnext(vec__18911,(2));
var map__18913 = p__18910;
var map__18913__$1 = ((cljs.core.seq_QMARK_(map__18913))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18913):map__18913);
var opts = map__18913__$1;
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18913__$1,cljs.core.constant$keyword$86);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18913__$1,cljs.core.constant$keyword$85);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18913__$1,cljs.core.constant$keyword$104);
return ((function (vec__18911,type,map__18912,map__18912__$1,attrs,touch_event,event,id,body,map__18913,map__18913__$1,opts,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__11383__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__18914 = (function (){var G__18915 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18915) : cljs.core.deref.call(null,G__18915));
})();
return (visible__11383__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__11383__auto__.cljs$core$IFn$_invoke$arity$1(G__18914) : visible__11383__auto__.call(null,G__18914));
})())){
if(cljs.core.truth_(event)){
if(cljs.core.truth_((function (){var G__18916 = (function (){var G__18917 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18917) : get.call(null,G__18917));
})();
return (event.cljs$core$IFn$_invoke$arity$1 ? event.cljs$core$IFn$_invoke$arity$1(G__18916) : event.call(null,G__18916));
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4124__auto____$1 = cljs.core.not_empty((function (){var G__18918 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18918) : get.call(null,G__18918));
})());
if(cljs.core.truth_(temp__4124__auto____$1)){
var message = temp__4124__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124,new cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$45,"button",cljs.core.constant$keyword$125,true,(function (){var or__3772__auto__ = touch_event;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return cljs.core.constant$keyword$72;
}
})(),((function (message,temp__4124__auto____$1,visible__11383__auto__,temp__4124__auto__,vec__18911,type,map__18912,map__18912__$1,attrs,touch_event,event,id,body,map__18913,map__18913__$1,opts,save_BANG_,get,doc){
return (function (){
var G__18919 = id;
var G__18920 = null;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18919,G__18920) : save_BANG_.call(null,G__18919,G__18920));
});})(message,temp__4124__auto____$1,visible__11383__auto__,temp__4124__auto__,vec__18911,type,map__18912,map__18912__$1,attrs,touch_event,event,id,body,map__18913,map__18913__$1,opts,save_BANG_,get,doc))
], true, false),"X"], null),message], null);
} else {
return null;
}
}
} else {
return null;
}
} else {
if(cljs.core.truth_(event)){
if(cljs.core.truth_((function (){var G__18921 = (function (){var G__18922 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18922) : get.call(null,G__18922));
})();
return (event.cljs$core$IFn$_invoke$arity$1 ? event.cljs$core$IFn$_invoke$arity$1(G__18921) : event.call(null,G__18921));
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4124__auto____$1 = cljs.core.not_empty((function (){var G__18923 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18923) : get.call(null,G__18923));
})());
if(cljs.core.truth_(temp__4124__auto____$1)){
var message = temp__4124__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$124,new cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$45,"button",cljs.core.constant$keyword$125,true,(function (){var or__3772__auto__ = touch_event;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return cljs.core.constant$keyword$72;
}
})(),((function (message,temp__4124__auto____$1,temp__4124__auto__,vec__18911,type,map__18912,map__18912__$1,attrs,touch_event,event,id,body,map__18913,map__18913__$1,opts,save_BANG_,get,doc){
return (function (){
var G__18924 = id;
var G__18925 = null;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18924,G__18925) : save_BANG_.call(null,G__18924,G__18925));
});})(message,temp__4124__auto____$1,temp__4124__auto__,vec__18911,type,map__18912,map__18912__$1,attrs,touch_event,event,id,body,map__18913,map__18913__$1,opts,save_BANG_,get,doc))
], true, false),"X"], null),message], null);
} else {
return null;
}
}
}
});
;})(vec__18911,type,map__18912,map__18912__$1,attrs,touch_event,event,id,body,map__18913,map__18913__$1,opts,save_BANG_,get,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$126,(function (p__18926,p__18927){
var vec__18928 = p__18926;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18928,(0),null);
var map__18929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18928,(1),null);
var map__18929__$1 = ((cljs.core.seq_QMARK_(map__18929))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18929):map__18929);
var attrs = map__18929__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18929__$1,cljs.core.constant$keyword$40);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18929__$1,cljs.core.constant$keyword$127);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18929__$1,cljs.core.constant$keyword$92);
var body = cljs.core.nthnext(vec__18928,(2));
var map__18930 = p__18927;
var map__18930__$1 = ((cljs.core.seq_QMARK_(map__18930))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18930):map__18930);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18930__$1,cljs.core.constant$keyword$86);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18930__$1,cljs.core.constant$keyword$85);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18930__$1,cljs.core.constant$keyword$104);
return ((function (vec__18928,type,map__18929,map__18929__$1,attrs,value,name,field,body,map__18930,map__18930__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__11383__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__18931 = (function (){var G__18932 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18932) : cljs.core.deref.call(null,G__18932));
})();
return (visible__11383__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__11383__auto__.cljs$core$IFn$_invoke$arity$1(G__18931) : visible__11383__auto__.call(null,G__18931));
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$45,cljs.core.constant$keyword$126,cljs.core.constant$keyword$102,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(function (){var G__18933 = name;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18933) : get.call(null,G__18933));
})()),cljs.core.constant$keyword$100,((function (visible__11383__auto__,temp__4124__auto__,vec__18928,type,map__18929,map__18929__$1,attrs,value,name,field,body,map__18930,map__18930__$1,save_BANG_,get,doc){
return (function (){
var G__18934 = name;
var G__18935 = value;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18934,G__18935) : save_BANG_.call(null,G__18934,G__18935));
});})(visible__11383__auto__,temp__4124__auto__,vec__18928,type,map__18929,map__18929__$1,attrs,value,name,field,body,map__18930,map__18930__$1,save_BANG_,get,doc))
], null),attrs], 0))], null),body);
} else {
return null;
}
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$45,cljs.core.constant$keyword$126,cljs.core.constant$keyword$102,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(function (){var G__18936 = name;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18936) : get.call(null,G__18936));
})()),cljs.core.constant$keyword$100,((function (temp__4124__auto__,vec__18928,type,map__18929,map__18929__$1,attrs,value,name,field,body,map__18930,map__18930__$1,save_BANG_,get,doc){
return (function (){
var G__18937 = name;
var G__18938 = value;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18937,G__18938) : save_BANG_.call(null,G__18937,G__18938));
});})(temp__4124__auto__,vec__18928,type,map__18929,map__18929__$1,attrs,value,name,field,body,map__18930,map__18930__$1,save_BANG_,get,doc))
], null),attrs], 0))], null),body);
}
});
;})(vec__18928,type,map__18929,map__18929__$1,attrs,value,name,field,body,map__18930,map__18930__$1,save_BANG_,get,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$128,(function (p__18940,p__18941){
var vec__18942 = p__18940;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18942,(0),null);
var map__18943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18942,(1),null);
var map__18943__$1 = ((cljs.core.seq_QMARK_(map__18943))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18943):map__18943);
var attrs = map__18943__$1;
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18943__$1,cljs.core.constant$keyword$129);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18943__$1,cljs.core.constant$keyword$99);
var map__18944 = p__18941;
var map__18944__$1 = ((cljs.core.seq_QMARK_(map__18944))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18944):map__18944);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18944__$1,cljs.core.constant$keyword$86);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18944__$1,cljs.core.constant$keyword$85);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18944__$1,cljs.core.constant$keyword$104);
var typeahead_hidden_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var mouse_on_list_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__11383__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__18945 = (function (){var G__18946 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18946) : cljs.core.deref.call(null,G__18946));
})();
return (visible__11383__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__11383__auto__.cljs$core$IFn$_invoke$arity$1(G__18945) : visible__11383__auto__.call(null,G__18945));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$45,cljs.core.constant$keyword$93,cljs.core.constant$keyword$40,(function (){var G__18947 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18947) : get.call(null,G__18947));
})(),cljs.core.constant$keyword$131,((function (visible__11383__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc){
return (function (){
if(cljs.core.truth_((function (){var G__18948 = mouse_on_list_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18948) : cljs.core.deref.call(null,G__18948));
})())){
return null;
} else {
var G__18949 = typeahead_hidden_QMARK_;
var G__18950 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18949,G__18950) : cljs.core.reset_BANG_.call(null,G__18949,G__18950));
}
});})(visible__11383__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc))
,cljs.core.constant$keyword$100,((function (visible__11383__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc){
return (function (p1__18939_SHARP_){
var G__18951_19023 = id;
var G__18952_19024 = reagent_forms.core.value_of(p1__18939_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18951_19023,G__18952_19024) : save_BANG_.call(null,G__18951_19023,G__18952_19024));

var G__18953 = typeahead_hidden_QMARK_;
var G__18954 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18953,G__18954) : cljs.core.reset_BANG_.call(null,G__18953,G__18954));
});})(visible__11383__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc))
], null)], null),(function (){var temp__4126__auto__ = (function (){var G__18955 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18955) : get.call(null,G__18955));
})();
if(cljs.core.truth_(temp__4126__auto__)){
var value = temp__4126__auto__;
var results = (function (){var G__18956 = value.toLowerCase();
return (data_source.cljs$core$IFn$_invoke$arity$1 ? data_source.cljs$core$IFn$_invoke$arity$1(G__18956) : data_source.call(null,G__18956));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$133,(function (){var or__3772__auto__ = cljs.core.empty_QMARK_(results);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var G__18958 = typeahead_hidden_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18958) : cljs.core.deref.call(null,G__18958));
}
})(),cljs.core.constant$keyword$134,((function (results,value,temp__4126__auto__,visible__11383__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc){
return (function (){
var G__18959 = mouse_on_list_QMARK_;
var G__18960 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18959,G__18960) : cljs.core.reset_BANG_.call(null,G__18959,G__18960));
});})(results,value,temp__4126__auto__,visible__11383__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc))
,cljs.core.constant$keyword$135,((function (results,value,temp__4126__auto__,visible__11383__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc){
return (function (){
var G__18961 = mouse_on_list_QMARK_;
var G__18962 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18961,G__18962) : cljs.core.reset_BANG_.call(null,G__18961,G__18962));
});})(results,value,temp__4126__auto__,visible__11383__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc))
], null),(function (){var iter__4528__auto__ = ((function (results,value,temp__4126__auto__,visible__11383__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc){
return (function iter__18963(s__18964){
return (new cljs.core.LazySeq(null,((function (results,value,temp__4126__auto__,visible__11383__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc){
return (function (){
var s__18964__$1 = s__18964;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__18964__$1);
if(temp__4126__auto____$1){
var s__18964__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18964__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__18964__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__18966 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__18965 = (0);
while(true){
if((i__18965 < size__4527__auto__)){
var result = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__18965);
cljs.core.chunk_append(b__18966,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$136,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$72,((function (i__18965,result,c__4526__auto__,size__4527__auto__,b__18966,s__18964__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,visible__11383__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc){
return (function (){
var G__18977_19025 = typeahead_hidden_QMARK_;
var G__18978_19026 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18977_19025,G__18978_19026) : cljs.core.reset_BANG_.call(null,G__18977_19025,G__18978_19026));

var G__18979 = id;
var G__18980 = result;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18979,G__18980) : save_BANG_.call(null,G__18979,G__18980));
});})(i__18965,result,c__4526__auto__,size__4527__auto__,b__18966,s__18964__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,visible__11383__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc))
], null),result], null));

var G__19027 = (i__18965 + (1));
i__18965 = G__19027;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18966),iter__18963(cljs.core.chunk_rest(s__18964__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18966),null);
}
} else {
var result = cljs.core.first(s__18964__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$136,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$72,((function (result,s__18964__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,visible__11383__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc){
return (function (){
var G__18981_19028 = typeahead_hidden_QMARK_;
var G__18982_19029 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18981_19028,G__18982_19029) : cljs.core.reset_BANG_.call(null,G__18981_19028,G__18982_19029));

var G__18983 = id;
var G__18984 = result;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18983,G__18984) : save_BANG_.call(null,G__18983,G__18984));
});})(result,s__18964__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,visible__11383__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc))
], null),result], null),iter__18963(cljs.core.rest(s__18964__$2)));
}
} else {
return null;
}
break;
}
});})(results,value,temp__4126__auto__,visible__11383__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc))
,null,null));
});})(results,value,temp__4126__auto__,visible__11383__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc))
;
return iter__4528__auto__(results);
})()], null);
} else {
return null;
}
})()], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$45,cljs.core.constant$keyword$93,cljs.core.constant$keyword$40,(function (){var G__18985 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18985) : get.call(null,G__18985));
})(),cljs.core.constant$keyword$131,((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc){
return (function (){
if(cljs.core.truth_((function (){var G__18986 = mouse_on_list_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18986) : cljs.core.deref.call(null,G__18986));
})())){
return null;
} else {
var G__18987 = typeahead_hidden_QMARK_;
var G__18988 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18987,G__18988) : cljs.core.reset_BANG_.call(null,G__18987,G__18988));
}
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc))
,cljs.core.constant$keyword$100,((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc){
return (function (p1__18939_SHARP_){
var G__18989_19030 = id;
var G__18990_19031 = reagent_forms.core.value_of(p1__18939_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__18989_19030,G__18990_19031) : save_BANG_.call(null,G__18989_19030,G__18990_19031));

var G__18991 = typeahead_hidden_QMARK_;
var G__18992 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18991,G__18992) : cljs.core.reset_BANG_.call(null,G__18991,G__18992));
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc))
], null)], null),(function (){var temp__4126__auto__ = (function (){var G__18993 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__18993) : get.call(null,G__18993));
})();
if(cljs.core.truth_(temp__4126__auto__)){
var value = temp__4126__auto__;
var results = (function (){var G__18994 = value.toLowerCase();
return (data_source.cljs$core$IFn$_invoke$arity$1 ? data_source.cljs$core$IFn$_invoke$arity$1(G__18994) : data_source.call(null,G__18994));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$133,(function (){var or__3772__auto__ = cljs.core.empty_QMARK_(results);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var G__18996 = typeahead_hidden_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__18996) : cljs.core.deref.call(null,G__18996));
}
})(),cljs.core.constant$keyword$134,((function (results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc){
return (function (){
var G__18997 = mouse_on_list_QMARK_;
var G__18998 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18997,G__18998) : cljs.core.reset_BANG_.call(null,G__18997,G__18998));
});})(results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc))
,cljs.core.constant$keyword$135,((function (results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc){
return (function (){
var G__18999 = mouse_on_list_QMARK_;
var G__19000 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18999,G__19000) : cljs.core.reset_BANG_.call(null,G__18999,G__19000));
});})(results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc))
], null),(function (){var iter__4528__auto__ = ((function (results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc){
return (function iter__19001(s__19002){
return (new cljs.core.LazySeq(null,((function (results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc){
return (function (){
var s__19002__$1 = s__19002;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__19002__$1);
if(temp__4126__auto____$1){
var s__19002__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19002__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__19002__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__19004 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__19003 = (0);
while(true){
if((i__19003 < size__4527__auto__)){
var result = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__19003);
cljs.core.chunk_append(b__19004,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$136,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$72,((function (i__19003,result,c__4526__auto__,size__4527__auto__,b__19004,s__19002__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc){
return (function (){
var G__19015_19032 = typeahead_hidden_QMARK_;
var G__19016_19033 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19015_19032,G__19016_19033) : cljs.core.reset_BANG_.call(null,G__19015_19032,G__19016_19033));

var G__19017 = id;
var G__19018 = result;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19017,G__19018) : save_BANG_.call(null,G__19017,G__19018));
});})(i__19003,result,c__4526__auto__,size__4527__auto__,b__19004,s__19002__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc))
], null),result], null));

var G__19034 = (i__19003 + (1));
i__19003 = G__19034;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19004),iter__19001(cljs.core.chunk_rest(s__19002__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19004),null);
}
} else {
var result = cljs.core.first(s__19002__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$136,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$72,((function (result,s__19002__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc){
return (function (){
var G__19019_19035 = typeahead_hidden_QMARK_;
var G__19020_19036 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19019_19035,G__19020_19036) : cljs.core.reset_BANG_.call(null,G__19019_19035,G__19020_19036));

var G__19021 = id;
var G__19022 = result;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19021,G__19022) : save_BANG_.call(null,G__19021,G__19022));
});})(result,s__19002__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc))
], null),result], null),iter__19001(cljs.core.rest(s__19002__$2)));
}
} else {
return null;
}
break;
}
});})(results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc))
,null,null));
});})(results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc))
;
return iter__4528__auto__(results);
})()], null);
} else {
return null;
}
})()], null);
}
});
;})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__18942,type,map__18943,map__18943__$1,attrs,data_source,id,map__18944,map__18944__$1,save_BANG_,get,doc))
}));
reagent_forms.core.group_item = (function group_item(p__19037,p__19038,selections,field,id){
var vec__19079 = p__19037;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19079,(0),null);
var map__19080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19079,(1),null);
var map__19080__$1 = ((cljs.core.seq_QMARK_(map__19080))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19080):map__19080);
var attrs = map__19080__$1;
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19080__$1,cljs.core.constant$keyword$122);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19080__$1,cljs.core.constant$keyword$37);
var body = cljs.core.nthnext(vec__19079,(2));
var map__19081 = p__19038;
var map__19081__$1 = ((cljs.core.seq_QMARK_(map__19081))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19081):map__19081);
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19081__$1,cljs.core.constant$keyword$137);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19081__$1,cljs.core.constant$keyword$86);
var handle_click_BANG_ = ((function (vec__19079,type,map__19080,map__19080__$1,attrs,touch_event,key,body,map__19081,map__19081__$1,multi_select,save_BANG_){
return (function handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

var G__19109 = id;
var G__19110 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,(function (){var G__19111 = selections;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19111) : cljs.core.deref.call(null,G__19111));
})()));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19109,G__19110) : save_BANG_.call(null,G__19109,G__19110));
} else {
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__19112 = selections;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19112) : cljs.core.deref.call(null,G__19112));
})(),key);
var G__19113_19119 = selections;
var G__19114_19120 = new cljs.core.PersistentArrayMap.fromArray([key,cljs.core.not(value)], true, false);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19113_19119,G__19114_19120) : cljs.core.reset_BANG_.call(null,G__19113_19119,G__19114_19120));

var G__19115 = id;
var G__19116 = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__19117 = selections;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19117) : cljs.core.deref.call(null,G__19117));
})(),key))?key:null);
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19115,G__19116) : save_BANG_.call(null,G__19115,G__19116));
}
});})(vec__19079,type,map__19080,map__19080__$1,attrs,touch_event,key,body,map__19081,map__19081__$1,multi_select,save_BANG_))
;
return ((function (vec__19079,type,map__19080,map__19080__$1,attrs,touch_event,key,body,map__19081,map__19081__$1,multi_select,save_BANG_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$22,(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__19118 = selections;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19118) : cljs.core.deref.call(null,G__19118));
})(),key))?"active":null),(function (){var or__3772__auto__ = touch_event;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return cljs.core.constant$keyword$72;
}
})(),handle_click_BANG_], true, false),attrs], 0)),body], null);
});
;})(vec__19079,type,map__19080,map__19080__$1,attrs,touch_event,key,body,map__19081,map__19081__$1,multi_select,save_BANG_))
});
reagent_forms.core.mk_selections = (function mk_selections(id,selectors,p__19121){
var map__19127 = p__19121;
var map__19127__$1 = ((cljs.core.seq_QMARK_(map__19127))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19127):map__19127);
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19127__$1,cljs.core.constant$keyword$137);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19127__$1,cljs.core.constant$keyword$85);
var value = (function (){var G__19128 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19128) : get.call(null,G__19128));
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (value,map__19127,map__19127__$1,multi_select,get){
return (function (m,p__19129){
var vec__19130 = p__19129;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19130,(0),null);
var map__19131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19130,(1),null);
var map__19131__$1 = ((cljs.core.seq_QMARK_(map__19131))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19131):map__19131);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19131__$1,cljs.core.constant$keyword$37);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.fromArray([key], true),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
});})(value,map__19127,map__19127__$1,multi_select,get))
,cljs.core.PersistentArrayMap.EMPTY,selectors);
});
/**
* selectors might be passed in inline or as a collection
*/
reagent_forms.core.extract_selectors = (function extract_selectors(selectors){
if((cljs.core.ffirst(selectors) instanceof cljs.core.Keyword)){
return selectors;
} else {
return cljs.core.first(selectors);
}
});
reagent_forms.core.selection_group = (function selection_group(p__19134,p__19135){
var vec__19144 = p__19134;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19144,(0),null);
var map__19145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19144,(1),null);
var map__19145__$1 = ((cljs.core.seq_QMARK_(map__19145))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19145):map__19145);
var attrs = map__19145__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19145__$1,cljs.core.constant$keyword$99);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19145__$1,cljs.core.constant$keyword$92);
var selection_items = cljs.core.nthnext(vec__19144,(2));
var map__19146 = p__19135;
var map__19146__$1 = ((cljs.core.seq_QMARK_(map__19146))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19146):map__19146);
var opts = map__19146__$1;
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19146__$1,cljs.core.constant$keyword$85);
var selection_items__$1 = reagent_forms.core.extract_selectors(selection_items);
var selections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(reagent_forms.core.mk_selections(id,selection_items__$1,opts));
var selectors = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,vec__19144,type,map__19145,map__19145__$1,attrs,id,field,selection_items,map__19146,map__19146__$1,opts,get){
return (function (item){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$105,cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(cljs.core.second(item)),cljs.core.constant$keyword$138,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item(item,opts,selections,field,id)], null)], null);
});})(selection_items__$1,selections,vec__19144,type,map__19145,map__19145__$1,attrs,id,field,selection_items,map__19146,map__19146__$1,opts,get))
,selection_items__$1);
return ((function (selection_items__$1,selections,selectors,vec__19144,type,map__19145,map__19145__$1,attrs,id,field,selection_items,map__19146,map__19146__$1,opts,get){
return (function (){
if(cljs.core.truth_((function (){var G__19147 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19147) : get.call(null,G__19147));
})())){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selections,((function (selection_items__$1,selections,selectors,vec__19144,type,map__19145,map__19145__$1,attrs,id,field,selection_items,map__19146,map__19146__$1,opts,get){
return (function (p1__19132_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,selectors,vec__19144,type,map__19145,map__19145__$1,attrs,id,field,selection_items,map__19146,map__19146__$1,opts,get){
return (function (p__19148){
var vec__19149 = p__19148;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19149,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
});})(selection_items__$1,selections,selectors,vec__19144,type,map__19145,map__19145__$1,attrs,id,field,selection_items,map__19146,map__19146__$1,opts,get))
,p1__19132_SHARP_));
});})(selection_items__$1,selections,selectors,vec__19144,type,map__19145,map__19145__$1,attrs,id,field,selection_items,map__19146,map__19146__$1,opts,get))
);
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$138,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,selectors,vec__19144,type,map__19145,map__19145__$1,attrs,id,field,selection_items,map__19146,map__19146__$1,opts,get){
return (function (p1__19133_SHARP_){
var temp__4124__auto__ = cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(p1__19133_SHARP_);
if(cljs.core.truth_(temp__4124__auto__)){
var visible_QMARK_ = temp__4124__auto__;
var G__19150 = (function (){var G__19151 = cljs.core.constant$keyword$104.cljs$core$IFn$_invoke$arity$1(opts);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19151) : cljs.core.deref.call(null,G__19151));
})();
return (visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? visible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__19150) : visible_QMARK_.call(null,G__19150));
} else {
return true;
}
});})(selection_items__$1,selections,selectors,vec__19144,type,map__19145,map__19145__$1,attrs,id,field,selection_items,map__19146,map__19146__$1,opts,get))
,selectors)))], null);
});
;})(selection_items__$1,selections,selectors,vec__19144,type,map__19145,map__19145__$1,attrs,id,field,selection_items,map__19146,map__19146__$1,opts,get))
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$139,(function (p__19152,p__19153){
var vec__19154 = p__19152;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19154,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19154,(1),null);
var field = vec__19154;
var map__19155 = p__19153;
var map__19155__$1 = ((cljs.core.seq_QMARK_(map__19155))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19155):map__19155);
var opts = map__19155__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19155__$1,cljs.core.constant$keyword$104);
return ((function (vec__19154,_,attrs,field,map__19155,map__19155__$1,opts,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__11383__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__19156 = (function (){var G__19157 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19157) : cljs.core.deref.call(null,G__19157));
})();
return (visible__11383__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__11383__auto__.cljs$core$IFn$_invoke$arity$1(G__19156) : visible__11383__auto__.call(null,G__19156));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
}
});
;})(vec__19154,_,attrs,field,map__19155,map__19155__$1,opts,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$137,(function (p__19158,p__19159){
var vec__19160 = p__19158;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19160,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19160,(1),null);
var field = vec__19160;
var map__19161 = p__19159;
var map__19161__$1 = ((cljs.core.seq_QMARK_(map__19161))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19161):map__19161);
var opts = map__19161__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19161__$1,cljs.core.constant$keyword$104);
return ((function (vec__19160,_,attrs,field,map__19161,map__19161__$1,opts,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__11383__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__19162 = (function (){var G__19163 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19163) : cljs.core.deref.call(null,G__19163));
})();
return (visible__11383__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__11383__auto__.cljs$core$IFn$_invoke$arity$1(G__19162) : visible__11383__auto__.call(null,G__19162));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$137,true)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$137,true)], null);
}
});
;})(vec__19160,_,attrs,field,map__19161,map__19161__$1,opts,doc))
}));
reagent_forms.core.map_options = (function map_options(options){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4528__auto__ = (function iter__19178(s__19179){
return (new cljs.core.LazySeq(null,(function (){
var s__19179__$1 = s__19179;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__19179__$1);
if(temp__4126__auto__){
var s__19179__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19179__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__19179__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__19181 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__19180 = (0);
while(true){
if((i__19180 < size__4527__auto__)){
var vec__19188 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__19180);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19188,(0),null);
var map__19189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19188,(1),null);
var map__19189__$1 = ((cljs.core.seq_QMARK_(map__19189))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19189):map__19189);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19189__$1,cljs.core.constant$keyword$37);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19188,(2),null);
cljs.core.chunk_append(b__19181,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null));

var G__19192 = (i__19180 + (1));
i__19180 = G__19192;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19181),iter__19178(cljs.core.chunk_rest(s__19179__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19181),null);
}
} else {
var vec__19190 = cljs.core.first(s__19179__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19190,(0),null);
var map__19191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19190,(1),null);
var map__19191__$1 = ((cljs.core.seq_QMARK_(map__19191))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19191):map__19191);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19191__$1,cljs.core.constant$keyword$37);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19190,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null),iter__19178(cljs.core.rest(s__19179__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4528__auto__(options);
})());
});
reagent_forms.core.default_selection = (function default_selection(options,v){
return cljs.core.last(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19193_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__19193_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.constant$keyword$37], null)));
}),options)));
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$140,(function (p__19196,p__19197){
var vec__19198 = p__19196;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19198,(0),null);
var map__19199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19198,(1),null);
var map__19199__$1 = ((cljs.core.seq_QMARK_(map__19199))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19199):map__19199);
var attrs = map__19199__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19199__$1,cljs.core.constant$keyword$99);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19199__$1,cljs.core.constant$keyword$92);
var options = cljs.core.nthnext(vec__19198,(2));
var map__19200 = p__19197;
var map__19200__$1 = ((cljs.core.seq_QMARK_(map__19200))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19200):map__19200);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19200__$1,cljs.core.constant$keyword$86);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19200__$1,cljs.core.constant$keyword$85);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19200__$1,cljs.core.constant$keyword$104);
var options__$1 = reagent_forms.core.extract_selectors(options);
var options_lookup = reagent_forms.core.map_options(options__$1);
var selection = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__3772__auto__ = (function (){var G__19202 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19202) : get.call(null,G__19202));
})();
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.first(options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.constant$keyword$37], null));
}
})());
var G__19203_19218 = id;
var G__19204_19219 = (function (){var G__19205 = selection;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19205) : cljs.core.deref.call(null,G__19205));
})();
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19203_19218,G__19204_19219) : save_BANG_.call(null,G__19203_19218,G__19204_19219));

return ((function (options__$1,options_lookup,selection,vec__19198,type,map__19199,map__19199__$1,attrs,id,field,options,map__19200,map__19200__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__11383__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__19206 = (function (){var G__19207 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19207) : cljs.core.deref.call(null,G__19207));
})();
return (visible__11383__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__11383__auto__.cljs$core$IFn$_invoke$arity$1(G__19206) : visible__11383__auto__.call(null,G__19206));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$141,reagent_forms.core.default_selection(options__$1,(function (){var G__19208 = selection;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19208) : cljs.core.deref.call(null,G__19208));
})()),cljs.core.constant$keyword$100,((function (visible__11383__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__19198,type,map__19199,map__19199__$1,attrs,id,field,options,map__19200,map__19200__$1,save_BANG_,get,doc){
return (function (p1__19194_SHARP_){
var G__19209 = id;
var G__19210 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options_lookup,reagent_forms.core.value_of(p1__19194_SHARP_));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19209,G__19210) : save_BANG_.call(null,G__19209,G__19210));
});})(visible__11383__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__19198,type,map__19199,map__19199__$1,attrs,id,field,options,map__19200,map__19200__$1,save_BANG_,get,doc))
], null)], 0)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (visible__11383__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__19198,type,map__19199,map__19199__$1,attrs,id,field,options,map__19200,map__19200__$1,save_BANG_,get,doc){
return (function (p1__19195_SHARP_){
var temp__4124__auto____$1 = cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__19195_SHARP_));
if(cljs.core.truth_(temp__4124__auto____$1)){
var visible_QMARK_ = temp__4124__auto____$1;
var G__19211 = (function (){var G__19212 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19212) : cljs.core.deref.call(null,G__19212));
})();
return (visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? visible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__19211) : visible_QMARK_.call(null,G__19211));
} else {
return true;
}
});})(visible__11383__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__19198,type,map__19199,map__19199__$1,attrs,id,field,options,map__19200,map__19200__$1,save_BANG_,get,doc))
,options__$1))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$141,reagent_forms.core.default_selection(options__$1,(function (){var G__19213 = selection;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19213) : cljs.core.deref.call(null,G__19213));
})()),cljs.core.constant$keyword$100,((function (temp__4124__auto__,options__$1,options_lookup,selection,vec__19198,type,map__19199,map__19199__$1,attrs,id,field,options,map__19200,map__19200__$1,save_BANG_,get,doc){
return (function (p1__19194_SHARP_){
var G__19214 = id;
var G__19215 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options_lookup,reagent_forms.core.value_of(p1__19194_SHARP_));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19214,G__19215) : save_BANG_.call(null,G__19214,G__19215));
});})(temp__4124__auto__,options__$1,options_lookup,selection,vec__19198,type,map__19199,map__19199__$1,attrs,id,field,options,map__19200,map__19200__$1,save_BANG_,get,doc))
], null)], 0)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (temp__4124__auto__,options__$1,options_lookup,selection,vec__19198,type,map__19199,map__19199__$1,attrs,id,field,options,map__19200,map__19200__$1,save_BANG_,get,doc){
return (function (p1__19195_SHARP_){
var temp__4124__auto____$1 = cljs.core.constant$keyword$105.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__19195_SHARP_));
if(cljs.core.truth_(temp__4124__auto____$1)){
var visible_QMARK_ = temp__4124__auto____$1;
var G__19216 = (function (){var G__19217 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19217) : cljs.core.deref.call(null,G__19217));
})();
return (visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? visible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__19216) : visible_QMARK_.call(null,G__19216));
} else {
return true;
}
});})(temp__4124__auto__,options__$1,options_lookup,selection,vec__19198,type,map__19199,map__19199__$1,attrs,id,field,options,map__19200,map__19200__$1,save_BANG_,get,doc))
,options__$1))], null);
}
});
;})(options__$1,options_lookup,selection,vec__19198,type,map__19199,map__19199__$1,attrs,id,field,options,map__19200,map__19200__$1,save_BANG_,get,doc))
}));
reagent_forms.core.field_QMARK_ = (function field_QMARK_(node){
return (cljs.core.coll_QMARK_(node)) && (cljs.core.map_QMARK_(cljs.core.second(node))) && (cljs.core.contains_QMARK_(cljs.core.second(node),cljs.core.constant$keyword$92));
});
/**
* creates data bindings between the form fields and the supplied atom
* form - the form template with the fields
* doc - the document that the fields will be bound to
* events - any events that should be triggered when the document state changes
* @param {...*} var_args
*/
reagent_forms.core.bind_fields = (function() { 
var bind_fields__delegate = function (form,doc,events){
var opts = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$104,doc,cljs.core.constant$keyword$85,(function (p1__19220_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__19225 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19225) : cljs.core.deref.call(null,G__19225));
})(),(function (){var G__19226 = p1__19220_SHARP_;
return (reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(G__19226) : reagent_forms.core.id__GT_path.call(null,G__19226));
})());
}),cljs.core.constant$keyword$86,reagent_forms.core.mk_save_fn(doc,events)], null);
var form__$1 = clojure.walk.postwalk(((function (opts){
return (function (node){
if(reagent_forms.core.field_QMARK_(node)){
var opts__$1 = reagent_forms.core.wrap_fns(opts,node);
var field = (function (){var G__19227 = node;
var G__19228 = opts__$1;
return (reagent_forms.core.init_field.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.init_field.cljs$core$IFn$_invoke$arity$2(G__19227,G__19228) : reagent_forms.core.init_field.call(null,G__19227,G__19228));
})();
if(cljs.core.fn_QMARK_(field)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null);
} else {
return field;
}
} else {
return node;
}
});})(opts))
,form);
return ((function (opts,form__$1){
return (function (){
return form__$1;
});
;})(opts,form__$1))
};
var bind_fields = function (form,doc,var_args){
var events = null;
if (arguments.length > 2) {
var G__19229__i = 0, G__19229__a = new Array(arguments.length -  2);
while (G__19229__i < G__19229__a.length) {G__19229__a[G__19229__i] = arguments[G__19229__i + 2]; ++G__19229__i;}
  events = new cljs.core.IndexedSeq(G__19229__a,0);
} 
return bind_fields__delegate.call(this,form,doc,events);};
bind_fields.cljs$lang$maxFixedArity = 2;
bind_fields.cljs$lang$applyTo = (function (arglist__19230){
var form = cljs.core.first(arglist__19230);
arglist__19230 = cljs.core.next(arglist__19230);
var doc = cljs.core.first(arglist__19230);
var events = cljs.core.rest(arglist__19230);
return bind_fields__delegate(form,doc,events);
});
bind_fields.cljs$core$IFn$_invoke$arity$variadic = bind_fields__delegate;
return bind_fields;
})()
;
