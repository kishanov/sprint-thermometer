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
var path = (function (){var G__19528 = id;
return (reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(G__19528) : reagent_forms.core.id__GT_path.call(null,G__19528));
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (path){
return (function (p1__19520_SHARP_,p2__19519_SHARP_){
var or__3772__auto__ = (function (){var G__19532 = path;
var G__19533 = value;
var G__19534 = p1__19520_SHARP_;
return (p2__19519_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p2__19519_SHARP_.cljs$core$IFn$_invoke$arity$3(G__19532,G__19533,G__19534) : p2__19519_SHARP_.call(null,G__19532,G__19533,G__19534));
})();
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return p1__19520_SHARP_;
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
var G__19537 = (function (){var G__19538 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19538) : get.call(null,G__19538));
})();
return (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(G__19537) : wrapper.call(null,G__19537));
});
});
reagent_forms.core.wrap_save_fn = (function wrap_save_fn(save_BANG_,wrapper){
return (function (id,value){
var G__19542 = id;
var G__19543 = (function (){var G__19544 = value;
return (wrapper.cljs$core$IFn$_invoke$arity$1 ? wrapper.cljs$core$IFn$_invoke$arity$1(G__19544) : wrapper.call(null,G__19544));
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19542,G__19543) : save_BANG_.call(null,G__19542,G__19543));
});
});
reagent_forms.core.wrap_fns = (function wrap_fns(opts,node){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$124,(function (){var temp__4124__auto__ = cljs.core.constant$keyword$126.cljs$core$IFn$_invoke$arity$1(cljs.core.second(node));
if(cljs.core.truth_(temp__4124__auto__)){
var in_fn = temp__4124__auto__;
return reagent_forms.core.wrap_get_fn(cljs.core.constant$keyword$124.cljs$core$IFn$_invoke$arity$1(opts),in_fn);
} else {
return cljs.core.constant$keyword$124.cljs$core$IFn$_invoke$arity$1(opts);
}
})(),cljs.core.constant$keyword$125,(function (){var temp__4124__auto__ = cljs.core.constant$keyword$127.cljs$core$IFn$_invoke$arity$1(cljs.core.second(node));
if(cljs.core.truth_(temp__4124__auto__)){
var out_fn = temp__4124__auto__;
return reagent_forms.core.wrap_save_fn(cljs.core.constant$keyword$125.cljs$core$IFn$_invoke$arity$1(opts),out_fn);
} else {
return cljs.core.constant$keyword$125.cljs$core$IFn$_invoke$arity$1(opts);
}
})()], null);
});
reagent_forms.core.format_type = (function (){var method_table__4669__auto__ = (function (){var G__19545 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19545) : cljs.core.atom.call(null,G__19545));
})();
var prefer_table__4670__auto__ = (function (){var G__19546 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19546) : cljs.core.atom.call(null,G__19546));
})();
var method_cache__4671__auto__ = (function (){var G__19547 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19547) : cljs.core.atom.call(null,G__19547));
})();
var cached_hierarchy__4672__auto__ = (function (){var G__19548 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19548) : cljs.core.atom.call(null,G__19548));
})();
var hierarchy__4673__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$128,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","format-type"),((function (method_table__4669__auto__,prefer_table__4670__auto__,method_cache__4671__auto__,cached_hierarchy__4672__auto__,hierarchy__4673__auto__){
return (function (field_type,_){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([field_type], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$89,cljs.core.constant$keyword$129], null)))){
return cljs.core.constant$keyword$129;
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
if(cljs.core.truth_((function (){var and__3760__auto__ = cljs.core.not((function (){var G__19557 = (function (){var G__19558 = value;
return parseFloat(G__19558);
})();
return isNaN(G__19557);
})());
if(and__3760__auto__){
return fmt;
} else {
return and__3760__auto__;
}
})())){
var G__19559 = fmt;
var G__19560 = value;
return goog.string.format(G__19559,G__19560);
} else {
return value;
}
});
reagent_forms.core.format_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$129,(function (_,n){
if(cljs.core.truth_(cljs.core.not_empty(n))){
var parsed = (function (){var G__19561 = n;
return parseFloat(G__19561);
})();
if(cljs.core.truth_((function (){var G__19562 = parsed;
return isNaN(G__19562);
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
reagent_forms.core.bind = (function (){var method_table__4669__auto__ = (function (){var G__19563 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19563) : cljs.core.atom.call(null,G__19563));
})();
var prefer_table__4670__auto__ = (function (){var G__19564 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19564) : cljs.core.atom.call(null,G__19564));
})();
var method_cache__4671__auto__ = (function (){var G__19565 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19565) : cljs.core.atom.call(null,G__19565));
})();
var cached_hierarchy__4672__auto__ = (function (){var G__19566 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19566) : cljs.core.atom.call(null,G__19566));
})();
var hierarchy__4673__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$128,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","bind"),((function (method_table__4669__auto__,prefer_table__4670__auto__,method_cache__4671__auto__,cached_hierarchy__4672__auto__,hierarchy__4673__auto__){
return (function (p__19567,_){
var map__19568 = p__19567;
var map__19568__$1 = ((cljs.core.seq_QMARK_(map__19568))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19568):map__19568);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19568__$1,cljs.core.constant$keyword$130);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([field], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$71,cljs.core.constant$keyword$129,cljs.core.constant$keyword$131,cljs.core.constant$keyword$132,cljs.core.constant$keyword$89,cljs.core.constant$keyword$133], null)))){
return cljs.core.constant$keyword$134;
} else {
return field;
}
});})(method_table__4669__auto__,prefer_table__4670__auto__,method_cache__4671__auto__,cached_hierarchy__4672__auto__,hierarchy__4673__auto__))
,cljs.core.constant$keyword$7,hierarchy__4673__auto__,method_table__4669__auto__,prefer_table__4670__auto__,method_cache__4671__auto__,cached_hierarchy__4672__auto__));
})();
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$134,(function (p__19570,p__19571){
var map__19572 = p__19570;
var map__19572__$1 = ((cljs.core.seq_QMARK_(map__19572))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19572):map__19572);
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19572__$1,cljs.core.constant$keyword$135);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19572__$1,cljs.core.constant$keyword$86);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19572__$1,cljs.core.constant$keyword$130);
var map__19573 = p__19571;
var map__19573__$1 = ((cljs.core.seq_QMARK_(map__19573))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19573):map__19573);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19573__$1,cljs.core.constant$keyword$125);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19573__$1,cljs.core.constant$keyword$124);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$24,(function (){var value = (function (){var or__3772__auto__ = (function (){var G__19575 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19575) : get.call(null,G__19575));
})();
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value(fmt,value);
})(),cljs.core.constant$keyword$136,((function (map__19572,map__19572__$1,fmt,id,field,map__19573,map__19573__$1,save_BANG_,get){
return (function (p1__19569_SHARP_){
var G__19576 = id;
var G__19577 = (function (){var G__19578 = field;
var G__19579 = reagent_forms.core.value_of(p1__19569_SHARP_);
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__19578,G__19579) : reagent_forms.core.format_type.call(null,G__19578,G__19579));
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19576,G__19577) : save_BANG_.call(null,G__19576,G__19577));
});})(map__19572,map__19572__$1,fmt,id,field,map__19573,map__19573__$1,save_BANG_,get))
], null);
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$137,(function (p__19580,p__19581){
var map__19582 = p__19580;
var map__19582__$1 = ((cljs.core.seq_QMARK_(map__19582))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19582):map__19582);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19582__$1,cljs.core.constant$keyword$86);
var map__19583 = p__19581;
var map__19583__$1 = ((cljs.core.seq_QMARK_(map__19583))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19583):map__19583);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19583__$1,cljs.core.constant$keyword$125);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19583__$1,cljs.core.constant$keyword$124);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$138,(function (){var G__19584 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19584) : get.call(null,G__19584));
})(),cljs.core.constant$keyword$136,((function (map__19582,map__19582__$1,id,map__19583,map__19583__$1,save_BANG_,get){
return (function (){
var G__19585 = id;
var G__19586 = cljs.core.not((function (){var G__19587 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19587) : get.call(null,G__19587));
})());
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19585,G__19586) : save_BANG_.call(null,G__19585,G__19586));
});})(map__19582,map__19582__$1,id,map__19583,map__19583__$1,save_BANG_,get))
], null);
}));
reagent_forms.core.bind.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$7,(function (_,___$1){
return null;
}));
/**
* @param {...*} var_args
*/
reagent_forms.core.set_attrs = (function() { 
var set_attrs__delegate = function (p__19588,opts,p__19589){
var vec__19594 = p__19588;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19594,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19594,(1),null);
var body = cljs.core.nthnext(vec__19594,(2));
var vec__19595 = p__19589;
var default_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19595,(0),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([default_attrs,(function (){var G__19596 = attrs;
var G__19597 = opts;
return (reagent_forms.core.bind.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.bind.cljs$core$IFn$_invoke$arity$2(G__19596,G__19597) : reagent_forms.core.bind.call(null,G__19596,G__19597));
})(),attrs], 0))], null),body);
};
var set_attrs = function (p__19588,opts,var_args){
var p__19589 = null;
if (arguments.length > 2) {
var G__19598__i = 0, G__19598__a = new Array(arguments.length -  2);
while (G__19598__i < G__19598__a.length) {G__19598__a[G__19598__i] = arguments[G__19598__i + 2]; ++G__19598__i;}
  p__19589 = new cljs.core.IndexedSeq(G__19598__a,0);
} 
return set_attrs__delegate.call(this,p__19588,opts,p__19589);};
set_attrs.cljs$lang$maxFixedArity = 2;
set_attrs.cljs$lang$applyTo = (function (arglist__19599){
var p__19588 = cljs.core.first(arglist__19599);
arglist__19599 = cljs.core.next(arglist__19599);
var opts = cljs.core.first(arglist__19599);
var p__19589 = cljs.core.rest(arglist__19599);
return set_attrs__delegate(p__19588,opts,p__19589);
});
set_attrs.cljs$core$IFn$_invoke$arity$variadic = set_attrs__delegate;
return set_attrs;
})()
;
reagent_forms.core.init_field = (function (){var method_table__4669__auto__ = (function (){var G__19600 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19600) : cljs.core.atom.call(null,G__19600));
})();
var prefer_table__4670__auto__ = (function (){var G__19601 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19601) : cljs.core.atom.call(null,G__19601));
})();
var method_cache__4671__auto__ = (function (){var G__19602 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19602) : cljs.core.atom.call(null,G__19602));
})();
var cached_hierarchy__4672__auto__ = (function (){var G__19603 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19603) : cljs.core.atom.call(null,G__19603));
})();
var hierarchy__4673__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$128,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reagent-forms.core","init-field"),((function (method_table__4669__auto__,prefer_table__4670__auto__,method_cache__4671__auto__,cached_hierarchy__4672__auto__,hierarchy__4673__auto__){
return (function (p__19604,_){
var vec__19605 = p__19604;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19605,(0),null);
var map__19606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19605,(1),null);
var map__19606__$1 = ((cljs.core.seq_QMARK_(map__19606))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19606):map__19606);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19606__$1,cljs.core.constant$keyword$130);
var field__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([field__$1], true),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$89,cljs.core.constant$keyword$71,cljs.core.constant$keyword$131,cljs.core.constant$keyword$132,cljs.core.constant$keyword$133], null)))){
return cljs.core.constant$keyword$134;
} else {
return field__$1;
}
});})(method_table__4669__auto__,prefer_table__4670__auto__,method_cache__4671__auto__,cached_hierarchy__4672__auto__,hierarchy__4673__auto__))
,cljs.core.constant$keyword$7,hierarchy__4673__auto__,method_table__4669__auto__,prefer_table__4670__auto__,method_cache__4671__auto__,cached_hierarchy__4672__auto__));
})();
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$139,(function (p__19607,p__19608){
var vec__19609 = p__19607;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19609,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19609,(1),null);
var component = vec__19609;
var map__19610 = p__19608;
var map__19610__$1 = ((cljs.core.seq_QMARK_(map__19610))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19610):map__19610);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19610__$1,cljs.core.constant$keyword$140);
return ((function (vec__19609,_,attrs,component,map__19610,map__19610__$1,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$141.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__18984__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__19611 = (function (){var G__19612 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19612) : cljs.core.deref.call(null,G__19612));
})();
return (visible__18984__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18984__auto__.cljs$core$IFn$_invoke$arity$1(G__19611) : visible__18984__auto__.call(null,G__19611));
})())){
return component;
} else {
return null;
}
} else {
return component;
}
});
;})(vec__19609,_,attrs,component,map__19610,map__19610__$1,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$134,(function (p__19613,p__19614){
var vec__19615 = p__19613;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19615,(0),null);
var map__19616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19615,(1),null);
var map__19616__$1 = ((cljs.core.seq_QMARK_(map__19616))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19616):map__19616);
var attrs = map__19616__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19616__$1,cljs.core.constant$keyword$130);
var component = vec__19615;
var map__19617 = p__19614;
var map__19617__$1 = ((cljs.core.seq_QMARK_(map__19617))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19617):map__19617);
var opts = map__19617__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19617__$1,cljs.core.constant$keyword$140);
return ((function (vec__19615,_,map__19616,map__19616__$1,attrs,field,component,map__19617,map__19617__$1,opts,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$141.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__18984__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__19618 = (function (){var G__19619 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19619) : cljs.core.deref.call(null,G__19619));
})();
return (visible__18984__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18984__auto__.cljs$core$IFn$_invoke$arity$1(G__19618) : visible__18984__auto__.call(null,G__19618));
})())){
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$29,field], null)], 0));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$29,field], null)], 0));
}
});
;})(vec__19615,_,map__19616,map__19616__$1,attrs,field,component,map__19617,map__19617__$1,opts,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$129,(function (p__19621,p__19622){
var vec__19623 = p__19621;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19623,(0),null);
var map__19624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19623,(1),null);
var map__19624__$1 = ((cljs.core.seq_QMARK_(map__19624))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19624):map__19624);
var attrs = map__19624__$1;
var fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19624__$1,cljs.core.constant$keyword$135);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19624__$1,cljs.core.constant$keyword$86);
var map__19625 = p__19622;
var map__19625__$1 = ((cljs.core.seq_QMARK_(map__19625))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19625):map__19625);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19625__$1,cljs.core.constant$keyword$125);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19625__$1,cljs.core.constant$keyword$124);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19625__$1,cljs.core.constant$keyword$140);
var display_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$142,false,cljs.core.constant$keyword$24,(function (){var G__19626 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19626) : get.call(null,G__19626));
})()], null));
return ((function (display_value,vec__19623,type,map__19624,map__19624__$1,attrs,fmt,id,map__19625,map__19625__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$141.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__18984__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__19627 = (function (){var G__19628 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19628) : cljs.core.deref.call(null,G__19628));
})();
return (visible__18984__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18984__auto__.cljs$core$IFn$_invoke$arity$1(G__19627) : visible__18984__auto__.call(null,G__19627));
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$29,cljs.core.constant$keyword$71,cljs.core.constant$keyword$24,(function (){var doc_value = (function (){var or__3772__auto__ = (function (){var G__19631 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19631) : get.call(null,G__19631));
})();
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return "";
}
})();
var map__19629 = (function (){var G__19632 = display_value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19632) : cljs.core.deref.call(null,G__19632));
})();
var map__19629__$1 = ((cljs.core.seq_QMARK_(map__19629))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19629):map__19629);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19629__$1,cljs.core.constant$keyword$24);
var changed_self_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19629__$1,cljs.core.constant$keyword$142);
var value__$1 = (cljs.core.truth_(changed_self_QMARK_)?value:doc_value);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(display_value,cljs.core.dissoc,cljs.core.constant$keyword$142);

return reagent_forms.core.format_value(fmt,value__$1);
})(),cljs.core.constant$keyword$136,((function (visible__18984__auto__,temp__4124__auto__,display_value,vec__19623,type,map__19624,map__19624__$1,attrs,fmt,id,map__19625,map__19625__$1,save_BANG_,get,doc){
return (function (p1__19620_SHARP_){
var temp__4124__auto____$1 = (function (){var G__19633 = cljs.core.constant$keyword$129;
var G__19634 = reagent_forms.core.value_of(p1__19620_SHARP_);
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__19633,G__19634) : reagent_forms.core.format_type.call(null,G__19633,G__19634));
})();
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
var G__19635_19655 = display_value;
var G__19636_19656 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$142,true,cljs.core.constant$keyword$24,value], null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19635_19655,G__19636_19656) : cljs.core.reset_BANG_.call(null,G__19635_19655,G__19636_19656));

var G__19637 = id;
var G__19638 = (function (){var G__19639 = value;
return parseFloat(G__19639);
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19637,G__19638) : save_BANG_.call(null,G__19637,G__19638));
} else {
var G__19640 = id;
var G__19641 = null;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19640,G__19641) : save_BANG_.call(null,G__19640,G__19641));
}
});})(visible__18984__auto__,temp__4124__auto__,display_value,vec__19623,type,map__19624,map__19624__$1,attrs,fmt,id,map__19625,map__19625__$1,save_BANG_,get,doc))
], null),attrs], 0))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$29,cljs.core.constant$keyword$71,cljs.core.constant$keyword$24,(function (){var doc_value = (function (){var or__3772__auto__ = (function (){var G__19644 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19644) : get.call(null,G__19644));
})();
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return "";
}
})();
var map__19642 = (function (){var G__19645 = display_value;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19645) : cljs.core.deref.call(null,G__19645));
})();
var map__19642__$1 = ((cljs.core.seq_QMARK_(map__19642))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19642):map__19642);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19642__$1,cljs.core.constant$keyword$24);
var changed_self_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19642__$1,cljs.core.constant$keyword$142);
var value__$1 = (cljs.core.truth_(changed_self_QMARK_)?value:doc_value);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(display_value,cljs.core.dissoc,cljs.core.constant$keyword$142);

return reagent_forms.core.format_value(fmt,value__$1);
})(),cljs.core.constant$keyword$136,((function (temp__4124__auto__,display_value,vec__19623,type,map__19624,map__19624__$1,attrs,fmt,id,map__19625,map__19625__$1,save_BANG_,get,doc){
return (function (p1__19620_SHARP_){
var temp__4124__auto____$1 = (function (){var G__19646 = cljs.core.constant$keyword$129;
var G__19647 = reagent_forms.core.value_of(p1__19620_SHARP_);
return (reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.format_type.cljs$core$IFn$_invoke$arity$2(G__19646,G__19647) : reagent_forms.core.format_type.call(null,G__19646,G__19647));
})();
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
var G__19648_19657 = display_value;
var G__19649_19658 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$142,true,cljs.core.constant$keyword$24,value], null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19648_19657,G__19649_19658) : cljs.core.reset_BANG_.call(null,G__19648_19657,G__19649_19658));

var G__19650 = id;
var G__19651 = (function (){var G__19652 = value;
return parseFloat(G__19652);
})();
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19650,G__19651) : save_BANG_.call(null,G__19650,G__19651));
} else {
var G__19653 = id;
var G__19654 = null;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19653,G__19654) : save_BANG_.call(null,G__19653,G__19654));
}
});})(temp__4124__auto__,display_value,vec__19623,type,map__19624,map__19624__$1,attrs,fmt,id,map__19625,map__19625__$1,save_BANG_,get,doc))
], null),attrs], 0))], null);
}
});
;})(display_value,vec__19623,type,map__19624,map__19624__$1,attrs,fmt,id,map__19625,map__19625__$1,save_BANG_,get,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$143,(function (p__19660,p__19661){
var vec__19662 = p__19660;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19662,(0),null);
var map__19663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19662,(1),null);
var map__19663__$1 = ((cljs.core.seq_QMARK_(map__19663))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19663):map__19663);
var attrs = map__19663__$1;
var auto_close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19663__$1,cljs.core.constant$keyword$144);
var inline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19663__$1,cljs.core.constant$keyword$145);
var date_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19663__$1,cljs.core.constant$keyword$146);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19663__$1,cljs.core.constant$keyword$86);
var map__19664 = p__19661;
var map__19664__$1 = ((cljs.core.seq_QMARK_(map__19664))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19664):map__19664);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19664__$1,cljs.core.constant$keyword$125);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19664__$1,cljs.core.constant$keyword$124);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19664__$1,cljs.core.constant$keyword$140);
var fmt = reagent_forms.datepicker.parse_format(date_format);
var today = (new Date());
var expanded_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (fmt,today,expanded_QMARK_,vec__19662,_,map__19663,map__19663__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__19664,map__19664__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$141.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__18984__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__19665 = (function (){var G__19666 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19666) : cljs.core.deref.call(null,G__19666));
})();
return (visible__18984__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18984__auto__.cljs$core$IFn$_invoke$arity$1(G__19665) : visible__18984__auto__.call(null,G__19665));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$147,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$148,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$149,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$150,true,cljs.core.constant$keyword$29,cljs.core.constant$keyword$71,cljs.core.constant$keyword$112,((function (visible__18984__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__19662,_,map__19663,map__19663__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__19664,map__19664__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(visible__18984__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__19662,_,map__19663,map__19663__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__19664,map__19664__$1,save_BANG_,get,doc))
,cljs.core.constant$keyword$24,(function (){var temp__4126__auto__ = (function (){var G__19667 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19667) : get.call(null,G__19667));
})();
if(cljs.core.truth_(temp__4126__auto__)){
var date = temp__4126__auto__;
return reagent_forms.datepicker.format_date(date,fmt);
} else {
return null;
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$151,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$112,((function (visible__18984__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__19662,_,map__19663,map__19663__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__19664,map__19664__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(visible__18984__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__19662,_,map__19663,map__19663__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__19664,map__19664__$1,save_BANG_,get,doc))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$152], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),today.getDate(),expanded_QMARK_,auto_close_QMARK_,((function (visible__18984__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__19662,_,map__19663,map__19663__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__19664,map__19664__$1,save_BANG_,get,doc){
return (function (){
var G__19668 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19668) : get.call(null,G__19668));
});})(visible__18984__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__19662,_,map__19663,map__19663__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__19664,map__19664__$1,save_BANG_,get,doc))
,((function (visible__18984__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__19662,_,map__19663,map__19663__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__19664,map__19664__$1,save_BANG_,get,doc){
return (function (p1__19659_SHARP_){
var G__19669 = id;
var G__19670 = p1__19659_SHARP_;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19669,G__19670) : save_BANG_.call(null,G__19669,G__19670));
});})(visible__18984__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__19662,_,map__19663,map__19663__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__19664,map__19664__$1,save_BANG_,get,doc))
,inline], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$147,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$148,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$149,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$150,true,cljs.core.constant$keyword$29,cljs.core.constant$keyword$71,cljs.core.constant$keyword$112,((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__19662,_,map__19663,map__19663__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__19664,map__19664__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__19662,_,map__19663,map__19663__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__19664,map__19664__$1,save_BANG_,get,doc))
,cljs.core.constant$keyword$24,(function (){var temp__4126__auto__ = (function (){var G__19671 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19671) : get.call(null,G__19671));
})();
if(cljs.core.truth_(temp__4126__auto__)){
var date = temp__4126__auto__;
return reagent_forms.datepicker.format_date(date,fmt);
} else {
return null;
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$151,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$112,((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__19662,_,map__19663,map__19663__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__19664,map__19664__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__19662,_,map__19663,map__19663__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__19664,map__19664__$1,save_BANG_,get,doc))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$152], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),today.getDate(),expanded_QMARK_,auto_close_QMARK_,((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__19662,_,map__19663,map__19663__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__19664,map__19664__$1,save_BANG_,get,doc){
return (function (){
var G__19672 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19672) : get.call(null,G__19672));
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__19662,_,map__19663,map__19663__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__19664,map__19664__$1,save_BANG_,get,doc))
,((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__19662,_,map__19663,map__19663__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__19664,map__19664__$1,save_BANG_,get,doc){
return (function (p1__19659_SHARP_){
var G__19673 = id;
var G__19674 = p1__19659_SHARP_;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19673,G__19674) : save_BANG_.call(null,G__19673,G__19674));
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__19662,_,map__19663,map__19663__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__19664,map__19664__$1,save_BANG_,get,doc))
,inline], null)], null);
}
});
;})(fmt,today,expanded_QMARK_,vec__19662,_,map__19663,map__19663__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__19664,map__19664__$1,save_BANG_,get,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$137,(function (p__19675,p__19676){
var vec__19677 = p__19675;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19677,(0),null);
var map__19678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19677,(1),null);
var map__19678__$1 = ((cljs.core.seq_QMARK_(map__19678))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19678):map__19678);
var attrs = map__19678__$1;
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19678__$1,cljs.core.constant$keyword$130);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19678__$1,cljs.core.constant$keyword$86);
var component = vec__19677;
var map__19679 = p__19676;
var map__19679__$1 = ((cljs.core.seq_QMARK_(map__19679))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19679):map__19679);
var opts = map__19679__$1;
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19679__$1,cljs.core.constant$keyword$124);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19679__$1,cljs.core.constant$keyword$140);
return ((function (vec__19677,_,map__19678,map__19678__$1,attrs,field,id,component,map__19679,map__19679__$1,opts,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$141.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__18984__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__19680 = (function (){var G__19681 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19681) : cljs.core.deref.call(null,G__19681));
})();
return (visible__18984__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18984__auto__.cljs$core$IFn$_invoke$arity$1(G__19680) : visible__18984__auto__.call(null,G__19680));
})())){
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$29,field], null)], 0));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(component,opts,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$29,field], null)], 0));
}
});
;})(vec__19677,_,map__19678,map__19678__$1,attrs,field,id,component,map__19679,map__19679__$1,opts,get,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$153,(function (p__19682,p__19683){
var vec__19684 = p__19682;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19684,(0),null);
var map__19685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19684,(1),null);
var map__19685__$1 = ((cljs.core.seq_QMARK_(map__19685))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19685):map__19685);
var attrs = map__19685__$1;
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19685__$1,cljs.core.constant$keyword$154);
var postamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19685__$1,cljs.core.constant$keyword$155);
var preamble = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19685__$1,cljs.core.constant$keyword$156);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19685__$1,cljs.core.constant$keyword$86);
var map__19686 = p__19683;
var map__19686__$1 = ((cljs.core.seq_QMARK_(map__19686))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19686):map__19686);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19686__$1,cljs.core.constant$keyword$124);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19686__$1,cljs.core.constant$keyword$140);
return ((function (vec__19684,type,map__19685,map__19685__$1,attrs,placeholder,postamble,preamble,id,map__19686,map__19686__$1,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$141.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__18984__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__19687 = (function (){var G__19688 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19688) : cljs.core.deref.call(null,G__19688));
})();
return (visible__18984__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18984__auto__.cljs$core$IFn$_invoke$arity$1(G__19687) : visible__18984__auto__.call(null,G__19687));
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4124__auto____$1 = (function (){var G__19689 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19689) : get.call(null,G__19689));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4124__auto____$1 = (function (){var G__19690 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19690) : get.call(null,G__19690));
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
;})(vec__19684,type,map__19685,map__19685__$1,attrs,placeholder,postamble,preamble,id,map__19686,map__19686__$1,get,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$157,(function (p__19691,p__19692){
var vec__19693 = p__19691;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19693,(0),null);
var map__19694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19693,(1),null);
var map__19694__$1 = ((cljs.core.seq_QMARK_(map__19694))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19694):map__19694);
var attrs = map__19694__$1;
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19694__$1,cljs.core.constant$keyword$158);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19694__$1,cljs.core.constant$keyword$159);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19694__$1,cljs.core.constant$keyword$86);
var body = cljs.core.nthnext(vec__19693,(2));
var map__19695 = p__19692;
var map__19695__$1 = ((cljs.core.seq_QMARK_(map__19695))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19695):map__19695);
var opts = map__19695__$1;
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19695__$1,cljs.core.constant$keyword$125);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19695__$1,cljs.core.constant$keyword$124);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19695__$1,cljs.core.constant$keyword$140);
return ((function (vec__19693,type,map__19694,map__19694__$1,attrs,touch_event,event,id,body,map__19695,map__19695__$1,opts,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$141.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__18984__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__19696 = (function (){var G__19697 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19697) : cljs.core.deref.call(null,G__19697));
})();
return (visible__18984__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18984__auto__.cljs$core$IFn$_invoke$arity$1(G__19696) : visible__18984__auto__.call(null,G__19696));
})())){
if(cljs.core.truth_(event)){
if(cljs.core.truth_((function (){var G__19698 = (function (){var G__19699 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19699) : get.call(null,G__19699));
})();
return (event.cljs$core$IFn$_invoke$arity$1 ? event.cljs$core$IFn$_invoke$arity$1(G__19698) : event.call(null,G__19698));
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4124__auto____$1 = cljs.core.not_empty((function (){var G__19700 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19700) : get.call(null,G__19700));
})());
if(cljs.core.truth_(temp__4124__auto____$1)){
var message = temp__4124__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$160,new cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$29,"button",cljs.core.constant$keyword$161,true,(function (){var or__3772__auto__ = touch_event;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return cljs.core.constant$keyword$112;
}
})(),((function (message,temp__4124__auto____$1,visible__18984__auto__,temp__4124__auto__,vec__19693,type,map__19694,map__19694__$1,attrs,touch_event,event,id,body,map__19695,map__19695__$1,opts,save_BANG_,get,doc){
return (function (){
var G__19701 = id;
var G__19702 = null;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19701,G__19702) : save_BANG_.call(null,G__19701,G__19702));
});})(message,temp__4124__auto____$1,visible__18984__auto__,temp__4124__auto__,vec__19693,type,map__19694,map__19694__$1,attrs,touch_event,event,id,body,map__19695,map__19695__$1,opts,save_BANG_,get,doc))
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
if(cljs.core.truth_((function (){var G__19703 = (function (){var G__19704 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19704) : get.call(null,G__19704));
})();
return (event.cljs$core$IFn$_invoke$arity$1 ? event.cljs$core$IFn$_invoke$arity$1(G__19703) : event.call(null,G__19703));
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4124__auto____$1 = cljs.core.not_empty((function (){var G__19705 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19705) : get.call(null,G__19705));
})());
if(cljs.core.truth_(temp__4124__auto____$1)){
var message = temp__4124__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$160,new cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$29,"button",cljs.core.constant$keyword$161,true,(function (){var or__3772__auto__ = touch_event;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return cljs.core.constant$keyword$112;
}
})(),((function (message,temp__4124__auto____$1,temp__4124__auto__,vec__19693,type,map__19694,map__19694__$1,attrs,touch_event,event,id,body,map__19695,map__19695__$1,opts,save_BANG_,get,doc){
return (function (){
var G__19706 = id;
var G__19707 = null;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19706,G__19707) : save_BANG_.call(null,G__19706,G__19707));
});})(message,temp__4124__auto____$1,temp__4124__auto__,vec__19693,type,map__19694,map__19694__$1,attrs,touch_event,event,id,body,map__19695,map__19695__$1,opts,save_BANG_,get,doc))
], true, false),"X"], null),message], null);
} else {
return null;
}
}
}
});
;})(vec__19693,type,map__19694,map__19694__$1,attrs,touch_event,event,id,body,map__19695,map__19695__$1,opts,save_BANG_,get,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$162,(function (p__19708,p__19709){
var vec__19710 = p__19708;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19710,(0),null);
var map__19711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19710,(1),null);
var map__19711__$1 = ((cljs.core.seq_QMARK_(map__19711))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19711):map__19711);
var attrs = map__19711__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19711__$1,cljs.core.constant$keyword$24);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19711__$1,cljs.core.constant$keyword$163);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19711__$1,cljs.core.constant$keyword$130);
var body = cljs.core.nthnext(vec__19710,(2));
var map__19712 = p__19709;
var map__19712__$1 = ((cljs.core.seq_QMARK_(map__19712))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19712):map__19712);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19712__$1,cljs.core.constant$keyword$125);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19712__$1,cljs.core.constant$keyword$124);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19712__$1,cljs.core.constant$keyword$140);
return ((function (vec__19710,type,map__19711,map__19711__$1,attrs,value,name,field,body,map__19712,map__19712__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$141.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__18984__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__19713 = (function (){var G__19714 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19714) : cljs.core.deref.call(null,G__19714));
})();
return (visible__18984__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18984__auto__.cljs$core$IFn$_invoke$arity$1(G__19713) : visible__18984__auto__.call(null,G__19713));
})())){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$29,cljs.core.constant$keyword$162,cljs.core.constant$keyword$138,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(function (){var G__19715 = name;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19715) : get.call(null,G__19715));
})()),cljs.core.constant$keyword$136,((function (visible__18984__auto__,temp__4124__auto__,vec__19710,type,map__19711,map__19711__$1,attrs,value,name,field,body,map__19712,map__19712__$1,save_BANG_,get,doc){
return (function (){
var G__19716 = name;
var G__19717 = value;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19716,G__19717) : save_BANG_.call(null,G__19716,G__19717));
});})(visible__18984__auto__,temp__4124__auto__,vec__19710,type,map__19711,map__19711__$1,attrs,value,name,field,body,map__19712,map__19712__$1,save_BANG_,get,doc))
], null),attrs], 0))], null),body);
} else {
return null;
}
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$29,cljs.core.constant$keyword$162,cljs.core.constant$keyword$138,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,(function (){var G__19718 = name;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19718) : get.call(null,G__19718));
})()),cljs.core.constant$keyword$136,((function (temp__4124__auto__,vec__19710,type,map__19711,map__19711__$1,attrs,value,name,field,body,map__19712,map__19712__$1,save_BANG_,get,doc){
return (function (){
var G__19719 = name;
var G__19720 = value;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19719,G__19720) : save_BANG_.call(null,G__19719,G__19720));
});})(temp__4124__auto__,vec__19710,type,map__19711,map__19711__$1,attrs,value,name,field,body,map__19712,map__19712__$1,save_BANG_,get,doc))
], null),attrs], 0))], null),body);
}
});
;})(vec__19710,type,map__19711,map__19711__$1,attrs,value,name,field,body,map__19712,map__19712__$1,save_BANG_,get,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$164,(function (p__19722,p__19723){
var vec__19724 = p__19722;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19724,(0),null);
var map__19725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19724,(1),null);
var map__19725__$1 = ((cljs.core.seq_QMARK_(map__19725))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19725):map__19725);
var attrs = map__19725__$1;
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19725__$1,cljs.core.constant$keyword$165);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19725__$1,cljs.core.constant$keyword$86);
var map__19726 = p__19723;
var map__19726__$1 = ((cljs.core.seq_QMARK_(map__19726))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19726):map__19726);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19726__$1,cljs.core.constant$keyword$125);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19726__$1,cljs.core.constant$keyword$124);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19726__$1,cljs.core.constant$keyword$140);
var typeahead_hidden_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var mouse_on_list_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$141.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__18984__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__19727 = (function (){var G__19728 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19728) : cljs.core.deref.call(null,G__19728));
})();
return (visible__18984__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18984__auto__.cljs$core$IFn$_invoke$arity$1(G__19727) : visible__18984__auto__.call(null,G__19727));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$85,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$29,cljs.core.constant$keyword$71,cljs.core.constant$keyword$24,(function (){var G__19729 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19729) : get.call(null,G__19729));
})(),cljs.core.constant$keyword$166,((function (visible__18984__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc){
return (function (){
if(cljs.core.truth_((function (){var G__19730 = mouse_on_list_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19730) : cljs.core.deref.call(null,G__19730));
})())){
return null;
} else {
var G__19731 = typeahead_hidden_QMARK_;
var G__19732 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19731,G__19732) : cljs.core.reset_BANG_.call(null,G__19731,G__19732));
}
});})(visible__18984__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc))
,cljs.core.constant$keyword$136,((function (visible__18984__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc){
return (function (p1__19721_SHARP_){
var G__19733_19805 = id;
var G__19734_19806 = reagent_forms.core.value_of(p1__19721_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19733_19805,G__19734_19806) : save_BANG_.call(null,G__19733_19805,G__19734_19806));

var G__19735 = typeahead_hidden_QMARK_;
var G__19736 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19735,G__19736) : cljs.core.reset_BANG_.call(null,G__19735,G__19736));
});})(visible__18984__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc))
], null)], null),(function (){var temp__4126__auto__ = (function (){var G__19737 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19737) : get.call(null,G__19737));
})();
if(cljs.core.truth_(temp__4126__auto__)){
var value = temp__4126__auto__;
var results = (function (){var G__19738 = value.toLowerCase();
return (data_source.cljs$core$IFn$_invoke$arity$1 ? data_source.cljs$core$IFn$_invoke$arity$1(G__19738) : data_source.call(null,G__19738));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$167,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$168,(function (){var or__3772__auto__ = cljs.core.empty_QMARK_(results);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var G__19740 = typeahead_hidden_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19740) : cljs.core.deref.call(null,G__19740));
}
})(),cljs.core.constant$keyword$169,((function (results,value,temp__4126__auto__,visible__18984__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc){
return (function (){
var G__19741 = mouse_on_list_QMARK_;
var G__19742 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19741,G__19742) : cljs.core.reset_BANG_.call(null,G__19741,G__19742));
});})(results,value,temp__4126__auto__,visible__18984__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc))
,cljs.core.constant$keyword$170,((function (results,value,temp__4126__auto__,visible__18984__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc){
return (function (){
var G__19743 = mouse_on_list_QMARK_;
var G__19744 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19743,G__19744) : cljs.core.reset_BANG_.call(null,G__19743,G__19744));
});})(results,value,temp__4126__auto__,visible__18984__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc))
], null),(function (){var iter__4528__auto__ = ((function (results,value,temp__4126__auto__,visible__18984__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc){
return (function iter__19745(s__19746){
return (new cljs.core.LazySeq(null,((function (results,value,temp__4126__auto__,visible__18984__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc){
return (function (){
var s__19746__$1 = s__19746;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__19746__$1);
if(temp__4126__auto____$1){
var s__19746__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19746__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__19746__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__19748 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__19747 = (0);
while(true){
if((i__19747 < size__4527__auto__)){
var result = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__19747);
cljs.core.chunk_append(b__19748,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$171,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$112,((function (i__19747,result,c__4526__auto__,size__4527__auto__,b__19748,s__19746__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,visible__18984__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc){
return (function (){
var G__19759_19807 = typeahead_hidden_QMARK_;
var G__19760_19808 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19759_19807,G__19760_19808) : cljs.core.reset_BANG_.call(null,G__19759_19807,G__19760_19808));

var G__19761 = id;
var G__19762 = result;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19761,G__19762) : save_BANG_.call(null,G__19761,G__19762));
});})(i__19747,result,c__4526__auto__,size__4527__auto__,b__19748,s__19746__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,visible__18984__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc))
], null),result], null));

var G__19809 = (i__19747 + (1));
i__19747 = G__19809;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19748),iter__19745(cljs.core.chunk_rest(s__19746__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19748),null);
}
} else {
var result = cljs.core.first(s__19746__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$171,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$112,((function (result,s__19746__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,visible__18984__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc){
return (function (){
var G__19763_19810 = typeahead_hidden_QMARK_;
var G__19764_19811 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19763_19810,G__19764_19811) : cljs.core.reset_BANG_.call(null,G__19763_19810,G__19764_19811));

var G__19765 = id;
var G__19766 = result;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19765,G__19766) : save_BANG_.call(null,G__19765,G__19766));
});})(result,s__19746__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,visible__18984__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc))
], null),result], null),iter__19745(cljs.core.rest(s__19746__$2)));
}
} else {
return null;
}
break;
}
});})(results,value,temp__4126__auto__,visible__18984__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc))
,null,null));
});})(results,value,temp__4126__auto__,visible__18984__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc))
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$85,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$29,cljs.core.constant$keyword$71,cljs.core.constant$keyword$24,(function (){var G__19767 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19767) : get.call(null,G__19767));
})(),cljs.core.constant$keyword$166,((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc){
return (function (){
if(cljs.core.truth_((function (){var G__19768 = mouse_on_list_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19768) : cljs.core.deref.call(null,G__19768));
})())){
return null;
} else {
var G__19769 = typeahead_hidden_QMARK_;
var G__19770 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19769,G__19770) : cljs.core.reset_BANG_.call(null,G__19769,G__19770));
}
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc))
,cljs.core.constant$keyword$136,((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc){
return (function (p1__19721_SHARP_){
var G__19771_19812 = id;
var G__19772_19813 = reagent_forms.core.value_of(p1__19721_SHARP_);
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19771_19812,G__19772_19813) : save_BANG_.call(null,G__19771_19812,G__19772_19813));

var G__19773 = typeahead_hidden_QMARK_;
var G__19774 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19773,G__19774) : cljs.core.reset_BANG_.call(null,G__19773,G__19774));
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc))
], null)], null),(function (){var temp__4126__auto__ = (function (){var G__19775 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19775) : get.call(null,G__19775));
})();
if(cljs.core.truth_(temp__4126__auto__)){
var value = temp__4126__auto__;
var results = (function (){var G__19776 = value.toLowerCase();
return (data_source.cljs$core$IFn$_invoke$arity$1 ? data_source.cljs$core$IFn$_invoke$arity$1(G__19776) : data_source.call(null,G__19776));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$167,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$168,(function (){var or__3772__auto__ = cljs.core.empty_QMARK_(results);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var G__19778 = typeahead_hidden_QMARK_;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19778) : cljs.core.deref.call(null,G__19778));
}
})(),cljs.core.constant$keyword$169,((function (results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc){
return (function (){
var G__19779 = mouse_on_list_QMARK_;
var G__19780 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19779,G__19780) : cljs.core.reset_BANG_.call(null,G__19779,G__19780));
});})(results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc))
,cljs.core.constant$keyword$170,((function (results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc){
return (function (){
var G__19781 = mouse_on_list_QMARK_;
var G__19782 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19781,G__19782) : cljs.core.reset_BANG_.call(null,G__19781,G__19782));
});})(results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc))
], null),(function (){var iter__4528__auto__ = ((function (results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc){
return (function iter__19783(s__19784){
return (new cljs.core.LazySeq(null,((function (results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc){
return (function (){
var s__19784__$1 = s__19784;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__19784__$1);
if(temp__4126__auto____$1){
var s__19784__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19784__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__19784__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__19786 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__19785 = (0);
while(true){
if((i__19785 < size__4527__auto__)){
var result = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__19785);
cljs.core.chunk_append(b__19786,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$171,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$112,((function (i__19785,result,c__4526__auto__,size__4527__auto__,b__19786,s__19784__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc){
return (function (){
var G__19797_19814 = typeahead_hidden_QMARK_;
var G__19798_19815 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19797_19814,G__19798_19815) : cljs.core.reset_BANG_.call(null,G__19797_19814,G__19798_19815));

var G__19799 = id;
var G__19800 = result;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19799,G__19800) : save_BANG_.call(null,G__19799,G__19800));
});})(i__19785,result,c__4526__auto__,size__4527__auto__,b__19786,s__19784__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc))
], null),result], null));

var G__19816 = (i__19785 + (1));
i__19785 = G__19816;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19786),iter__19783(cljs.core.chunk_rest(s__19784__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19786),null);
}
} else {
var result = cljs.core.first(s__19784__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$171,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$112,((function (result,s__19784__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc){
return (function (){
var G__19801_19817 = typeahead_hidden_QMARK_;
var G__19802_19818 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19801_19817,G__19802_19818) : cljs.core.reset_BANG_.call(null,G__19801_19817,G__19802_19818));

var G__19803 = id;
var G__19804 = result;
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19803,G__19804) : save_BANG_.call(null,G__19803,G__19804));
});})(result,s__19784__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc))
], null),result], null),iter__19783(cljs.core.rest(s__19784__$2)));
}
} else {
return null;
}
break;
}
});})(results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc))
,null,null));
});})(results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc))
;
return iter__4528__auto__(results);
})()], null);
} else {
return null;
}
})()], null);
}
});
;})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__19724,type,map__19725,map__19725__$1,attrs,data_source,id,map__19726,map__19726__$1,save_BANG_,get,doc))
}));
reagent_forms.core.group_item = (function group_item(p__19819,p__19820,selections,field,id){
var vec__19861 = p__19819;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19861,(0),null);
var map__19862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19861,(1),null);
var map__19862__$1 = ((cljs.core.seq_QMARK_(map__19862))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19862):map__19862);
var attrs = map__19862__$1;
var touch_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19862__$1,cljs.core.constant$keyword$158);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19862__$1,cljs.core.constant$keyword$52);
var body = cljs.core.nthnext(vec__19861,(2));
var map__19863 = p__19820;
var map__19863__$1 = ((cljs.core.seq_QMARK_(map__19863))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19863):map__19863);
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19863__$1,cljs.core.constant$keyword$172);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19863__$1,cljs.core.constant$keyword$125);
var handle_click_BANG_ = ((function (vec__19861,type,map__19862,map__19862__$1,attrs,touch_event,key,body,map__19863,map__19863__$1,multi_select,save_BANG_){
return (function handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

var G__19891 = id;
var G__19892 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,(function (){var G__19893 = selections;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19893) : cljs.core.deref.call(null,G__19893));
})()));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19891,G__19892) : save_BANG_.call(null,G__19891,G__19892));
} else {
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__19894 = selections;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19894) : cljs.core.deref.call(null,G__19894));
})(),key);
var G__19895_19901 = selections;
var G__19896_19902 = new cljs.core.PersistentArrayMap.fromArray([key,cljs.core.not(value)], true, false);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19895_19901,G__19896_19902) : cljs.core.reset_BANG_.call(null,G__19895_19901,G__19896_19902));

var G__19897 = id;
var G__19898 = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__19899 = selections;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19899) : cljs.core.deref.call(null,G__19899));
})(),key))?key:null);
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19897,G__19898) : save_BANG_.call(null,G__19897,G__19898));
}
});})(vec__19861,type,map__19862,map__19862__$1,attrs,touch_event,key,body,map__19863,map__19863__$1,multi_select,save_BANG_))
;
return ((function (vec__19861,type,map__19862,map__19862__$1,attrs,touch_event,key,body,map__19863,map__19863__$1,multi_select,save_BANG_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap.fromArray([cljs.core.constant$keyword$37,(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__19900 = selections;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19900) : cljs.core.deref.call(null,G__19900));
})(),key))?"active":null),(function (){var or__3772__auto__ = touch_event;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return cljs.core.constant$keyword$112;
}
})(),handle_click_BANG_], true, false),attrs], 0)),body], null);
});
;})(vec__19861,type,map__19862,map__19862__$1,attrs,touch_event,key,body,map__19863,map__19863__$1,multi_select,save_BANG_))
});
reagent_forms.core.mk_selections = (function mk_selections(id,selectors,p__19903){
var map__19909 = p__19903;
var map__19909__$1 = ((cljs.core.seq_QMARK_(map__19909))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19909):map__19909);
var multi_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19909__$1,cljs.core.constant$keyword$172);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19909__$1,cljs.core.constant$keyword$124);
var value = (function (){var G__19910 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19910) : get.call(null,G__19910));
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (value,map__19909,map__19909__$1,multi_select,get){
return (function (m,p__19911){
var vec__19912 = p__19911;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19912,(0),null);
var map__19913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19912,(1),null);
var map__19913__$1 = ((cljs.core.seq_QMARK_(map__19913))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19913):map__19913);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19913__$1,cljs.core.constant$keyword$52);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.fromArray([key], true),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
});})(value,map__19909,map__19909__$1,multi_select,get))
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
reagent_forms.core.selection_group = (function selection_group(p__19916,p__19917){
var vec__19926 = p__19916;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19926,(0),null);
var map__19927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19926,(1),null);
var map__19927__$1 = ((cljs.core.seq_QMARK_(map__19927))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19927):map__19927);
var attrs = map__19927__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19927__$1,cljs.core.constant$keyword$86);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19927__$1,cljs.core.constant$keyword$130);
var selection_items = cljs.core.nthnext(vec__19926,(2));
var map__19928 = p__19917;
var map__19928__$1 = ((cljs.core.seq_QMARK_(map__19928))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19928):map__19928);
var opts = map__19928__$1;
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19928__$1,cljs.core.constant$keyword$124);
var selection_items__$1 = reagent_forms.core.extract_selectors(selection_items);
var selections = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(reagent_forms.core.mk_selections(id,selection_items__$1,opts));
var selectors = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,vec__19926,type,map__19927,map__19927__$1,attrs,id,field,selection_items,map__19928,map__19928__$1,opts,get){
return (function (item){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$141,cljs.core.constant$keyword$141.cljs$core$IFn$_invoke$arity$1(cljs.core.second(item)),cljs.core.constant$keyword$173,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item(item,opts,selections,field,id)], null)], null);
});})(selection_items__$1,selections,vec__19926,type,map__19927,map__19927__$1,attrs,id,field,selection_items,map__19928,map__19928__$1,opts,get))
,selection_items__$1);
return ((function (selection_items__$1,selections,selectors,vec__19926,type,map__19927,map__19927__$1,attrs,id,field,selection_items,map__19928,map__19928__$1,opts,get){
return (function (){
if(cljs.core.truth_((function (){var G__19929 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19929) : get.call(null,G__19929));
})())){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selections,((function (selection_items__$1,selections,selectors,vec__19926,type,map__19927,map__19927__$1,attrs,id,field,selection_items,map__19928,map__19928__$1,opts,get){
return (function (p1__19914_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,selectors,vec__19926,type,map__19927,map__19927__$1,attrs,id,field,selection_items,map__19928,map__19928__$1,opts,get){
return (function (p__19930){
var vec__19931 = p__19930;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19931,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
});})(selection_items__$1,selections,selectors,vec__19926,type,map__19927,map__19927__$1,attrs,id,field,selection_items,map__19928,map__19928__$1,opts,get))
,p1__19914_SHARP_));
});})(selection_items__$1,selections,selectors,vec__19926,type,map__19927,map__19927__$1,attrs,id,field,selection_items,map__19928,map__19928__$1,opts,get))
);
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$173,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (selection_items__$1,selections,selectors,vec__19926,type,map__19927,map__19927__$1,attrs,id,field,selection_items,map__19928,map__19928__$1,opts,get){
return (function (p1__19915_SHARP_){
var temp__4124__auto__ = cljs.core.constant$keyword$141.cljs$core$IFn$_invoke$arity$1(p1__19915_SHARP_);
if(cljs.core.truth_(temp__4124__auto__)){
var visible_QMARK_ = temp__4124__auto__;
var G__19932 = (function (){var G__19933 = cljs.core.constant$keyword$140.cljs$core$IFn$_invoke$arity$1(opts);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19933) : cljs.core.deref.call(null,G__19933));
})();
return (visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? visible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__19932) : visible_QMARK_.call(null,G__19932));
} else {
return true;
}
});})(selection_items__$1,selections,selectors,vec__19926,type,map__19927,map__19927__$1,attrs,id,field,selection_items,map__19928,map__19928__$1,opts,get))
,selectors)))], null);
});
;})(selection_items__$1,selections,selectors,vec__19926,type,map__19927,map__19927__$1,attrs,id,field,selection_items,map__19928,map__19928__$1,opts,get))
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$174,(function (p__19934,p__19935){
var vec__19936 = p__19934;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19936,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19936,(1),null);
var field = vec__19936;
var map__19937 = p__19935;
var map__19937__$1 = ((cljs.core.seq_QMARK_(map__19937))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19937):map__19937);
var opts = map__19937__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19937__$1,cljs.core.constant$keyword$140);
return ((function (vec__19936,_,attrs,field,map__19937,map__19937__$1,opts,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$141.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__18984__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__19938 = (function (){var G__19939 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19939) : cljs.core.deref.call(null,G__19939));
})();
return (visible__18984__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18984__auto__.cljs$core$IFn$_invoke$arity$1(G__19938) : visible__18984__auto__.call(null,G__19938));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
}
});
;})(vec__19936,_,attrs,field,map__19937,map__19937__$1,opts,doc))
}));
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$172,(function (p__19940,p__19941){
var vec__19942 = p__19940;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19942,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19942,(1),null);
var field = vec__19942;
var map__19943 = p__19941;
var map__19943__$1 = ((cljs.core.seq_QMARK_(map__19943))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19943):map__19943);
var opts = map__19943__$1;
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19943__$1,cljs.core.constant$keyword$140);
return ((function (vec__19942,_,attrs,field,map__19943,map__19943__$1,opts,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$141.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__18984__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__19944 = (function (){var G__19945 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19945) : cljs.core.deref.call(null,G__19945));
})();
return (visible__18984__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18984__auto__.cljs$core$IFn$_invoke$arity$1(G__19944) : visible__18984__auto__.call(null,G__19944));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$172,true)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$172,true)], null);
}
});
;})(vec__19942,_,attrs,field,map__19943,map__19943__$1,opts,doc))
}));
reagent_forms.core.map_options = (function map_options(options){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4528__auto__ = (function iter__19960(s__19961){
return (new cljs.core.LazySeq(null,(function (){
var s__19961__$1 = s__19961;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__19961__$1);
if(temp__4126__auto__){
var s__19961__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19961__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__19961__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__19963 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__19962 = (0);
while(true){
if((i__19962 < size__4527__auto__)){
var vec__19970 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__19962);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19970,(0),null);
var map__19971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19970,(1),null);
var map__19971__$1 = ((cljs.core.seq_QMARK_(map__19971))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19971):map__19971);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19971__$1,cljs.core.constant$keyword$52);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19970,(2),null);
cljs.core.chunk_append(b__19963,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null));

var G__19974 = (i__19962 + (1));
i__19962 = G__19974;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19963),iter__19960(cljs.core.chunk_rest(s__19961__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19963),null);
}
} else {
var vec__19972 = cljs.core.first(s__19961__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19972,(0),null);
var map__19973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19972,(1),null);
var map__19973__$1 = ((cljs.core.seq_QMARK_(map__19973))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19973):map__19973);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19973__$1,cljs.core.constant$keyword$52);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19972,(2),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null),iter__19960(cljs.core.rest(s__19961__$2)));
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
return cljs.core.last(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19975_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__19975_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.constant$keyword$52], null)));
}),options)));
});
reagent_forms.core.init_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$175,(function (p__19978,p__19979){
var vec__19980 = p__19978;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19980,(0),null);
var map__19981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19980,(1),null);
var map__19981__$1 = ((cljs.core.seq_QMARK_(map__19981))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19981):map__19981);
var attrs = map__19981__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19981__$1,cljs.core.constant$keyword$86);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19981__$1,cljs.core.constant$keyword$130);
var options = cljs.core.nthnext(vec__19980,(2));
var map__19982 = p__19979;
var map__19982__$1 = ((cljs.core.seq_QMARK_(map__19982))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19982):map__19982);
var save_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19982__$1,cljs.core.constant$keyword$125);
var get = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19982__$1,cljs.core.constant$keyword$124);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19982__$1,cljs.core.constant$keyword$140);
var options__$1 = reagent_forms.core.extract_selectors(options);
var options_lookup = reagent_forms.core.map_options(options__$1);
var selection = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__3772__auto__ = (function (){var G__19984 = id;
return (get.cljs$core$IFn$_invoke$arity$1 ? get.cljs$core$IFn$_invoke$arity$1(G__19984) : get.call(null,G__19984));
})();
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.first(options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.constant$keyword$52], null));
}
})());
var G__19985_20000 = id;
var G__19986_20001 = (function (){var G__19987 = selection;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19987) : cljs.core.deref.call(null,G__19987));
})();
(save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19985_20000,G__19986_20001) : save_BANG_.call(null,G__19985_20000,G__19986_20001));

return ((function (options__$1,options_lookup,selection,vec__19980,type,map__19981,map__19981__$1,attrs,id,field,options,map__19982,map__19982__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = cljs.core.constant$keyword$141.cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__18984__auto__ = temp__4124__auto__;
if(cljs.core.truth_((function (){var G__19988 = (function (){var G__19989 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19989) : cljs.core.deref.call(null,G__19989));
})();
return (visible__18984__auto__.cljs$core$IFn$_invoke$arity$1 ? visible__18984__auto__.cljs$core$IFn$_invoke$arity$1(G__19988) : visible__18984__auto__.call(null,G__19988));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$176,reagent_forms.core.default_selection(options__$1,(function (){var G__19990 = selection;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19990) : cljs.core.deref.call(null,G__19990));
})()),cljs.core.constant$keyword$136,((function (visible__18984__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__19980,type,map__19981,map__19981__$1,attrs,id,field,options,map__19982,map__19982__$1,save_BANG_,get,doc){
return (function (p1__19976_SHARP_){
var G__19991 = id;
var G__19992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options_lookup,reagent_forms.core.value_of(p1__19976_SHARP_));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19991,G__19992) : save_BANG_.call(null,G__19991,G__19992));
});})(visible__18984__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__19980,type,map__19981,map__19981__$1,attrs,id,field,options,map__19982,map__19982__$1,save_BANG_,get,doc))
], null)], 0)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (visible__18984__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__19980,type,map__19981,map__19981__$1,attrs,id,field,options,map__19982,map__19982__$1,save_BANG_,get,doc){
return (function (p1__19977_SHARP_){
var temp__4124__auto____$1 = cljs.core.constant$keyword$141.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__19977_SHARP_));
if(cljs.core.truth_(temp__4124__auto____$1)){
var visible_QMARK_ = temp__4124__auto____$1;
var G__19993 = (function (){var G__19994 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19994) : cljs.core.deref.call(null,G__19994));
})();
return (visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? visible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__19993) : visible_QMARK_.call(null,G__19993));
} else {
return true;
}
});})(visible__18984__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__19980,type,map__19981,map__19981__$1,attrs,id,field,options,map__19982,map__19982__$1,save_BANG_,get,doc))
,options__$1))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([attrs,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$176,reagent_forms.core.default_selection(options__$1,(function (){var G__19995 = selection;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19995) : cljs.core.deref.call(null,G__19995));
})()),cljs.core.constant$keyword$136,((function (temp__4124__auto__,options__$1,options_lookup,selection,vec__19980,type,map__19981,map__19981__$1,attrs,id,field,options,map__19982,map__19982__$1,save_BANG_,get,doc){
return (function (p1__19976_SHARP_){
var G__19996 = id;
var G__19997 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(options_lookup,reagent_forms.core.value_of(p1__19976_SHARP_));
return (save_BANG_.cljs$core$IFn$_invoke$arity$2 ? save_BANG_.cljs$core$IFn$_invoke$arity$2(G__19996,G__19997) : save_BANG_.call(null,G__19996,G__19997));
});})(temp__4124__auto__,options__$1,options_lookup,selection,vec__19980,type,map__19981,map__19981__$1,attrs,id,field,options,map__19982,map__19982__$1,save_BANG_,get,doc))
], null)], 0)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (temp__4124__auto__,options__$1,options_lookup,selection,vec__19980,type,map__19981,map__19981__$1,attrs,id,field,options,map__19982,map__19982__$1,save_BANG_,get,doc){
return (function (p1__19977_SHARP_){
var temp__4124__auto____$1 = cljs.core.constant$keyword$141.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__19977_SHARP_));
if(cljs.core.truth_(temp__4124__auto____$1)){
var visible_QMARK_ = temp__4124__auto____$1;
var G__19998 = (function (){var G__19999 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19999) : cljs.core.deref.call(null,G__19999));
})();
return (visible_QMARK_.cljs$core$IFn$_invoke$arity$1 ? visible_QMARK_.cljs$core$IFn$_invoke$arity$1(G__19998) : visible_QMARK_.call(null,G__19998));
} else {
return true;
}
});})(temp__4124__auto__,options__$1,options_lookup,selection,vec__19980,type,map__19981,map__19981__$1,attrs,id,field,options,map__19982,map__19982__$1,save_BANG_,get,doc))
,options__$1))], null);
}
});
;})(options__$1,options_lookup,selection,vec__19980,type,map__19981,map__19981__$1,attrs,id,field,options,map__19982,map__19982__$1,save_BANG_,get,doc))
}));
reagent_forms.core.field_QMARK_ = (function field_QMARK_(node){
return (cljs.core.coll_QMARK_(node)) && (cljs.core.map_QMARK_(cljs.core.second(node))) && (cljs.core.contains_QMARK_(cljs.core.second(node),cljs.core.constant$keyword$130));
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
var opts = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$140,doc,cljs.core.constant$keyword$124,(function (p1__20002_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__20007 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20007) : cljs.core.deref.call(null,G__20007));
})(),(function (){var G__20008 = p1__20002_SHARP_;
return (reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1 ? reagent_forms.core.id__GT_path.cljs$core$IFn$_invoke$arity$1(G__20008) : reagent_forms.core.id__GT_path.call(null,G__20008));
})());
}),cljs.core.constant$keyword$125,reagent_forms.core.mk_save_fn(doc,events)], null);
var form__$1 = clojure.walk.postwalk(((function (opts){
return (function (node){
if(reagent_forms.core.field_QMARK_(node)){
var opts__$1 = reagent_forms.core.wrap_fns(opts,node);
var field = (function (){var G__20009 = node;
var G__20010 = opts__$1;
return (reagent_forms.core.init_field.cljs$core$IFn$_invoke$arity$2 ? reagent_forms.core.init_field.cljs$core$IFn$_invoke$arity$2(G__20009,G__20010) : reagent_forms.core.init_field.call(null,G__20009,G__20010));
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
var G__20011__i = 0, G__20011__a = new Array(arguments.length -  2);
while (G__20011__i < G__20011__a.length) {G__20011__a[G__20011__i] = arguments[G__20011__i + 2]; ++G__20011__i;}
  events = new cljs.core.IndexedSeq(G__20011__a,0);
} 
return bind_fields__delegate.call(this,form,doc,events);};
bind_fields.cljs$lang$maxFixedArity = 2;
bind_fields.cljs$lang$applyTo = (function (arglist__20012){
var form = cljs.core.first(arglist__20012);
arglist__20012 = cljs.core.next(arglist__20012);
var doc = cljs.core.first(arglist__20012);
var events = cljs.core.rest(arglist__20012);
return bind_fields__delegate(form,doc,events);
});
bind_fields.cljs$core$IFn$_invoke$arity$variadic = bind_fields__delegate;
return bind_fields;
})()
;
