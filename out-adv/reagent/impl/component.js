// Compiled by ClojureScript 0.0-2755 {}
goog.provide('reagent.impl.component');
goog.require('cljs.core');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.util');
reagent.impl.component.state_atom = (function state_atom(this$){
var sa = (this$["cljsState"]);
if(!((sa == null))){
return sa;
} else {
return (this$["cljsState"] = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null));
}
});
reagent.impl.component.state = (function state(this$){
var G__16720 = reagent.impl.component.state_atom(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16720) : cljs.core.deref.call(null,G__16720));
});
reagent.impl.component.replace_state = (function replace_state(this$,new_state){
var G__16723 = reagent.impl.component.state_atom(this$);
var G__16724 = new_state;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16723,G__16724) : cljs.core.reset_BANG_.call(null,G__16723,G__16724));
});
reagent.impl.component.set_state = (function set_state(this$,new_state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.impl.component.state_atom(this$),cljs.core.merge,new_state);
});
reagent.impl.component.do_render = (function do_render(c){
var _STAR_current_component_STAR_16739 = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.component._STAR_current_component_STAR_ = c;

try{var f = (c["cljsRender"]);
var _ = ((reagent.impl.util.clj_ifn_QMARK_(f))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("util","clj-ifn?","util/clj-ifn?",259370460,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')))})());
var p = (c["props"]);
var res = ((((c["componentFunction"]) == null))?(function (){var G__16740 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16740) : f.call(null,G__16740));
})():(function (){var argv = (p["argv"]);
var n = cljs.core.count(argv);
var G__16741 = n;
switch (G__16741) {
case (1):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (2):
var G__16742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16742) : f.call(null,G__16742));

break;
case (3):
var G__16743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__16744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16743,G__16744) : f.call(null,G__16743,G__16744));

break;
case (4):
var G__16745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__16746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__16747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__16745,G__16746,G__16747) : f.call(null,G__16745,G__16746,G__16747));

break;
case (5):
var G__16748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__16749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__16750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
var G__16751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(4));
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__16748,G__16749,G__16750,G__16751) : f.call(null,G__16748,G__16749,G__16750,G__16751));

break;
default:
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(argv,(1)));

}
})());
if(cljs.core.vector_QMARK_(res)){
return (c["asComponent"])(res,(p["level"]));
} else {
if(cljs.core.ifn_QMARK_(res)){
(c["cljsRender"] = res);

return do_render(c);
} else {
return res;
}
}
}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_16739;
}});
reagent.impl.component.custom_wrapper = (function custom_wrapper(key,f){
var G__16765 = (((key instanceof cljs.core.Keyword))?key.fqn:null);
switch (G__16765) {
case "componentWillUnmount":
return ((function (G__16765){
return (function (){
var c = this;
reagent.impl.batching.dispose(c);

if((f == null)){
return null;
} else {
var G__16766 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16766) : f.call(null,G__16766));
}
});
;})(G__16765))

break;
case "componentDidUpdate":
return ((function (G__16765){
return (function (oldprops){
var c = this;
var G__16767 = c;
var G__16768 = (oldprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16767,G__16768) : f.call(null,G__16767,G__16768));
});
;})(G__16765))

break;
case "componentWillUpdate":
return ((function (G__16765){
return (function (nextprops){
var c = this;
var G__16769 = c;
var G__16770 = (nextprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16769,G__16770) : f.call(null,G__16769,G__16770));
});
;})(G__16765))

break;
case "shouldComponentUpdate":
return ((function (G__16765){
return (function (nextprops,nextstate){
var or__3772__auto__ = reagent.impl.util._STAR_always_update_STAR_;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
if((f == null)){
return cljs.core.not(reagent.impl.util.equal_args(old_argv,new_argv));
} else {
var G__16771 = c;
var G__16772 = old_argv;
var G__16773 = new_argv;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__16771,G__16772,G__16773) : f.call(null,G__16771,G__16772,G__16773));
}
}
});
;})(G__16765))

break;
case "componentWillReceiveProps":
return ((function (G__16765){
return (function (props){
var c = this;
var G__16774 = c;
var G__16775 = (props["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16774,G__16775) : f.call(null,G__16774,G__16775));
});
;})(G__16765))

break;
case "getInitialState":
return ((function (G__16765){
return (function (){
var c = this;
return reagent.impl.component.set_state(c,(function (){var G__16776 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16776) : f.call(null,G__16776));
})());
});
;})(G__16765))

break;
case "getDefaultProps":
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("getDefaultProps not supported yet"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0)))].join('')));


break;
default:
return null;

}
});
reagent.impl.component.default_wrapper = (function default_wrapper(f){
if(cljs.core.ifn_QMARK_(f)){
return (function() { 
var G__16778__delegate = function (args){
var c = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,c,args);
};
var G__16778 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16779__i = 0, G__16779__a = new Array(arguments.length -  0);
while (G__16779__i < G__16779__a.length) {G__16779__a[G__16779__i] = arguments[G__16779__i + 0]; ++G__16779__i;}
  args = new cljs.core.IndexedSeq(G__16779__a,0);
} 
return G__16778__delegate.call(this,args);};
G__16778.cljs$lang$maxFixedArity = 0;
G__16778.cljs$lang$applyTo = (function (arglist__16780){
var args = cljs.core.seq(arglist__16780);
return G__16778__delegate(args);
});
G__16778.cljs$core$IFn$_invoke$arity$variadic = G__16778__delegate;
return G__16778;
})()
;
} else {
return f;
}
});
reagent.impl.component.dont_wrap = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$43,null,cljs.core.constant$keyword$44,null,cljs.core.constant$keyword$45,null], null), null);
reagent.impl.component.dont_bind = (function dont_bind(f){
if(cljs.core.ifn_QMARK_(f)){
var G__16782 = f;
(G__16782["__reactDontBind"] = true);

return G__16782;
} else {
return f;
}
});
reagent.impl.component.get_wrapper = (function get_wrapper(key,f,name){
if(cljs.core.truth_((function (){var G__16784 = key;
return (reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1(G__16784) : reagent.impl.component.dont_wrap.call(null,G__16784));
})())){
return reagent.impl.component.dont_bind(f);
} else {
var wrap = reagent.impl.component.custom_wrapper(key,f);
if(cljs.core.truth_((function (){var and__3760__auto__ = wrap;
if(cljs.core.truth_(and__3760__auto__)){
return f;
} else {
return and__3760__auto__;
}
})())){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Expected function in "),cljs.core.str(name),cljs.core.str(key),cljs.core.str(" but got "),cljs.core.str(f)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}
} else {
}

var or__3772__auto__ = wrap;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return reagent.impl.component.default_wrapper(f);
}
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$46,null,cljs.core.constant$keyword$47,null], null);
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1(reagent.impl.util.dash_to_camel);
reagent.impl.component.camelify_map_keys = (function camelify_map_keys(fun_map){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__16786 = k;
return (reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1(G__16786) : reagent.impl.component.dash_to_camel.call(null,G__16786));
})()),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function add_obligatory(fun_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.impl.component.obligatory,fun_map], 0));
});
reagent.impl.component.add_render = (function add_render(fun_map,render_f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fun_map,cljs.core.constant$keyword$43,render_f,cljs.core.array_seq([cljs.core.constant$keyword$44,(cljs.core.truth_(reagent.impl.util.is_client)?(function (){
var c = this;
return reagent.impl.batching.run_reactively(c,((function (c){
return (function (){
return reagent.impl.component.do_render(c);
});})(c))
);
}):(function (){
var c = this;
return reagent.impl.component.do_render(c);
}))], 0));
});
reagent.impl.component.wrap_funs = (function wrap_funs(fun_map){
var render_fun = (function (){var or__3772__auto__ = cljs.core.constant$keyword$45.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return cljs.core.constant$keyword$44.cljs$core$IFn$_invoke$arity$1(fun_map);
}
})();
var _ = ((reagent.impl.util.clj_ifn_QMARK_(render_fun))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Render must be a function, not "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([render_fun], 0)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("util","clj-ifn?","util/clj-ifn?",259370460,null),new cljs.core.Symbol(null,"render-fun","render-fun",-1209513086,null))], 0)))].join('')))})());
var name = (function (){var or__3772__auto__ = cljs.core.constant$keyword$48.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (render_fun["displayName"]);
if(cljs.core.truth_(or__3772__auto____$1)){
return or__3772__auto____$1;
} else {
return (render_fun["name"]);
}
}
})();
var name_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_(name))?[cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent"))].join(''):name);
var fmap = reagent.impl.component.add_render(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fun_map,cljs.core.constant$keyword$48,name_SINGLEQUOTE_),render_fun);
return cljs.core.reduce_kv(((function (render_fun,_,name,name_SINGLEQUOTE_,fmap){
return (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,reagent.impl.component.get_wrapper(k,v,name_SINGLEQUOTE_));
});})(render_fun,_,name,name_SINGLEQUOTE_,fmap))
,cljs.core.PersistentArrayMap.EMPTY,fmap);
});
reagent.impl.component.map_to_js = (function map_to_js(m){
return cljs.core.reduce_kv((function (o,k,v){
var G__16788 = o;
(G__16788[cljs.core.name(k)] = v);

return G__16788;
}),{},m);
});
reagent.impl.component.cljsify = (function cljsify(body){
return reagent.impl.component.map_to_js(reagent.impl.component.wrap_funs(reagent.impl.component.add_obligatory(reagent.impl.component.camelify_map_keys(body))));
});
reagent.impl.component.create_class = (function create_class(body,as_component){
if(cljs.core.map_QMARK_(body)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"body","body",-408674142,null))], 0)))].join('')));
}

var spec = reagent.impl.component.cljsify(body);
var _ = (spec["asComponent"] = reagent.impl.component.dont_bind(as_component));
var res = (React["createClass"])(spec);
var f = ((function (spec,_,res){
return (function() { 
var G__16791__delegate = function (args){
var G__16790 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args);
return (as_component.cljs$core$IFn$_invoke$arity$1 ? as_component.cljs$core$IFn$_invoke$arity$1(G__16790) : as_component.call(null,G__16790));
};
var G__16791 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16792__i = 0, G__16792__a = new Array(arguments.length -  0);
while (G__16792__i < G__16792__a.length) {G__16792__a[G__16792__i] = arguments[G__16792__i + 0]; ++G__16792__i;}
  args = new cljs.core.IndexedSeq(G__16792__a,0);
} 
return G__16791__delegate.call(this,args);};
G__16791.cljs$lang$maxFixedArity = 0;
G__16791.cljs$lang$applyTo = (function (arglist__16793){
var args = cljs.core.seq(arglist__16793);
return G__16791__delegate(args);
});
G__16791.cljs$core$IFn$_invoke$arity$variadic = G__16791__delegate;
return G__16791;
})()
;})(spec,_,res))
;
reagent.impl.util.cache_react_class(f,res);

reagent.impl.util.cache_react_class(res,res);

return f;
});