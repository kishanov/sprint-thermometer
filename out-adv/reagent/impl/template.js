// Compiled by ClojureScript 0.0-2755 {}
goog.provide('reagent.impl.template');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.batching');
goog.require('clojure.string');
goog.require('reagent.debug');
/**
* Regular expression that parses a CSS-style id and class
* from a tag name.
*/
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
reagent.impl.template.attr_aliases = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$22,"className",cljs.core.constant$keyword$34,"htmlFor",cljs.core.constant$keyword$35,"charSet"], null);
reagent.impl.template.hiccup_tag_QMARK_ = (function hiccup_tag_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
reagent.impl.template.valid_tag_QMARK_ = (function valid_tag_QMARK_(x){
return (reagent.impl.template.hiccup_tag_QMARK_(x)) || (reagent.impl.util.clj_ifn_QMARK_(x));
});
reagent.impl.template.to_js_val = (function to_js_val(v){
if(typeof v === 'string'){
return v;
} else {
if(typeof v === 'number'){
return v;
} else {
if((v instanceof cljs.core.Keyword)){
return cljs.core.name(v);
} else {
if((v instanceof cljs.core.Symbol)){
return [cljs.core.str(v)].join('');
} else {
if(cljs.core.coll_QMARK_(v)){
return cljs.core.clj__GT_js(v);
} else {
if(cljs.core.ifn_QMARK_(v)){
return (function() { 
var G__12073__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(v,args);
};
var G__12073 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12074__i = 0, G__12074__a = new Array(arguments.length -  0);
while (G__12074__i < G__12074__a.length) {G__12074__a[G__12074__i] = arguments[G__12074__i + 0]; ++G__12074__i;}
  args = new cljs.core.IndexedSeq(G__12074__a,0);
} 
return G__12073__delegate.call(this,args);};
G__12073.cljs$lang$maxFixedArity = 0;
G__12073.cljs$lang$applyTo = (function (arglist__12075){
var args = cljs.core.seq(arglist__12075);
return G__12073__delegate(args);
});
G__12073.cljs$core$IFn$_invoke$arity$variadic = G__12073__delegate;
return G__12073;
})()
;
} else {
return v;

}
}
}
}
}
}
});
reagent.impl.template.undash_prop_name = (function undash_prop_name(n){
var or__3772__auto__ = (function (){var G__12079 = n;
return (reagent.impl.template.attr_aliases.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.attr_aliases.cljs$core$IFn$_invoke$arity$1(G__12079) : reagent.impl.template.attr_aliases.call(null,G__12079));
})();
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return reagent.impl.util.dash_to_camel(n);
}
});
reagent.impl.template.cached_prop_name = reagent.impl.util.memoize_1(reagent.impl.template.undash_prop_name);
reagent.impl.template.cached_style_name = reagent.impl.util.memoize_1(reagent.impl.util.dash_to_camel);
reagent.impl.template.convert_prop_value = (function convert_prop_value(x){
if(typeof x === 'string'){
return x;
} else {
if(typeof x === 'number'){
return x;
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv((function (o,k,v){
var G__12082 = o;
(G__12082[(function (){var G__12083 = k;
return (reagent.impl.template.cached_prop_name.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.cached_prop_name.cljs$core$IFn$_invoke$arity$1(G__12083) : reagent.impl.template.cached_prop_name.call(null,G__12083));
})()] = reagent.impl.template.to_js_val(v));

return G__12082;
}),{},x);
} else {
return reagent.impl.template.to_js_val(x);

}
}
}
});
reagent.impl.template.set_id_class = (function set_id_class(props,p__12084){
var vec__12086 = p__12084;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12086,(0),null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12086,(1),null);
var pid = (props["id"]);
(props["id"] = ((!((pid == null)))?pid:id));

if((class$ == null)){
return null;
} else {
var old = (props["className"]);
return (props["className"] = ((!((old == null)))?[cljs.core.str(class$),cljs.core.str(" "),cljs.core.str(old)].join(''):class$));
}
});
reagent.impl.template.convert_props = (function convert_props(props,id_class){
if((cljs.core.empty_QMARK_(props)) && ((id_class == null))){
return null;
} else {
if((cljs.core.type(props) === Object)){
return props;
} else {
var objprops = cljs.core.reduce_kv((function (o,k,v){
var pname_12089 = (function (){var G__12088 = k;
return (reagent.impl.template.cached_prop_name.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.cached_prop_name.cljs$core$IFn$_invoke$arity$1(G__12088) : reagent.impl.template.cached_prop_name.call(null,G__12088));
})();
if(!((pname_12089 === "key"))){
(o[pname_12089] = reagent.impl.template.convert_prop_value(v));
} else {
}

return o;
}),{},props);
if((id_class == null)){
} else {
reagent.impl.template.set_id_class(objprops,id_class);
}

return objprops;

}
}
});
reagent.impl.template.input_handle_change = (function input_handle_change(this$,on_change,e){
var res = (function (){var G__12091 = e;
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__12091) : on_change.call(null,G__12091));
})();
reagent.impl.batching.queue_render(this$);

return res;
});
reagent.impl.template.input_did_update = (function input_did_update(this$){
var value = (this$["cljsInputValue"]);
if((value == null)){
return null;
} else {
var node = (this$["getDOMNode"])();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,(node["value"]))){
return (node["value"] = value);
} else {
return null;
}
}
});
reagent.impl.template.input_render_setup = (function input_render_setup(this$,jsprops){
var on_change = (jsprops["onChange"]);
var value = (((on_change == null))?null:(jsprops["value"]));
(this$["cljsInputValue"] = value);

if((value == null)){
return null;
} else {
reagent.impl.batching.mark_rendered(this$);

var G__12094 = jsprops;
(G__12094["defaultValue"] = value);

(G__12094["value"] = null);

(G__12094["onChange"] = ((function (G__12094,on_change,value){
return (function (p1__12092_SHARP_){
return reagent.impl.template.input_handle_change(this$,on_change,p1__12092_SHARP_);
});})(G__12094,on_change,value))
);

return G__12094;
}
});
reagent.impl.template.input_component_QMARK_ = (function input_component_QMARK_(x){
var DOM = (React["DOM"]);
return ((x === (DOM["input"]))) || ((x === (DOM["textarea"])));
});
reagent.impl.template.wrapped_render = (function wrapped_render(this$,comp,id_class,input_setup){
var inprops = (this$["props"]);
var argv = (inprops["argv"]);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,(1),null);
var hasprops = ((props == null)) || (cljs.core.map_QMARK_(props));
var jsargs = (function (){var G__12100 = argv;
var G__12101 = ((hasprops)?(2):(1));
var G__12102 = ((inprops["level"]) + (1));
return (reagent.impl.template.convert_args.cljs$core$IFn$_invoke$arity$3 ? reagent.impl.template.convert_args.cljs$core$IFn$_invoke$arity$3(G__12100,G__12101,G__12102) : reagent.impl.template.convert_args.call(null,G__12100,G__12101,G__12102));
})();
var jsprops = reagent.impl.template.convert_props(((hasprops)?props:null),id_class);
if((input_setup == null)){
} else {
var G__12103_12105 = this$;
var G__12104_12106 = jsprops;
(input_setup.cljs$core$IFn$_invoke$arity$2 ? input_setup.cljs$core$IFn$_invoke$arity$2(G__12103_12105,G__12104_12106) : input_setup.call(null,G__12103_12105,G__12104_12106));
}

(jsargs[(0)] = jsprops);

return comp.apply(null,jsargs);
});
reagent.impl.template.wrapped_should_update = (function wrapped_should_update(c,nextprops,nextstate){
var or__3772__auto__ = reagent.impl.util._STAR_always_update_STAR_;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
var a1 = (c["props"]["argv"]);
var a2 = (nextprops["argv"]);
return cljs.core.not(reagent.impl.util.equal_args(a1,a2));
}
});
reagent.impl.template.add_input_methods = (function add_input_methods(spec){
var G__12108 = spec;
(G__12108["componentDidUpdate"] = ((function (G__12108){
return (function (){
var c = this;
return reagent.impl.template.input_did_update(c);
});})(G__12108))
);

(G__12108["componentWillUnmount"] = ((function (G__12108){
return (function (){
var c = this;
return reagent.impl.batching.dispose(c);
});})(G__12108))
);

return G__12108;
});
reagent.impl.template.wrap_component = (function wrap_component(comp,extras,name){
var input_QMARK_ = reagent.impl.template.input_component_QMARK_(comp);
var input_setup = ((input_QMARK_)?reagent.impl.template.input_render_setup:null);
var spec = {"displayName": (function (){var or__3772__auto__ = name;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return "ComponentWrapper";
}
})(), "shouldComponentUpdate": ((function (input_QMARK_,input_setup){
return (function (p1__12109_SHARP_,p2__12110_SHARP_){
var C = this;
return reagent.impl.template.wrapped_should_update(C,p1__12109_SHARP_,p2__12110_SHARP_);
});})(input_QMARK_,input_setup))
, "render": ((function (input_QMARK_,input_setup){
return (function (){
var C = this;
return reagent.impl.template.wrapped_render(C,comp,extras,input_setup);
});})(input_QMARK_,input_setup))
};
if(input_QMARK_){
reagent.impl.template.add_input_methods(spec);
} else {
}

return (React["createClass"])(spec);
});
reagent.impl.template.parse_tag = (function parse_tag(hiccup_tag){
var vec__12112 = cljs.core.next(cljs.core.re_matches(reagent.impl.template.re_tag,cljs.core.name(hiccup_tag)));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12112,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12112,(1),null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12112,(2),null);
var comp = ((React["DOM"])[tag]);
var class_SINGLEQUOTE_ = (cljs.core.truth_(class$)?clojure.string.replace(class$,/\./," "):null);
if(cljs.core.truth_(comp)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Unknown tag: '"),cljs.core.str(hiccup_tag),cljs.core.str("'")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"comp","comp",-1462482139,null)], 0)))].join('')));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,(cljs.core.truth_((function (){var or__3772__auto__ = id;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return class_SINGLEQUOTE_;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,class_SINGLEQUOTE_], null):null)], null);
});
reagent.impl.template.get_wrapper = (function get_wrapper(tag){
var vec__12114 = reagent.impl.template.parse_tag(tag);
var comp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12114,(0),null);
var id_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12114,(1),null);
return reagent.impl.template.wrap_component(comp,id_class,[cljs.core.str(tag)].join(''));
});
reagent.impl.template.cached_wrapper = reagent.impl.util.memoize_1(reagent.impl.template.get_wrapper);
reagent.impl.template.fn_to_class = (function fn_to_class(f){
var spec = cljs.core.meta(f);
var withrender = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.constant$keyword$36,f);
var res = (function (){var G__12116 = withrender;
return (reagent.impl.template.create_class.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.create_class.cljs$core$IFn$_invoke$arity$1(G__12116) : reagent.impl.template.create_class.call(null,G__12116));
})();
var wrapf = reagent.impl.util.cached_react_class(res);
reagent.impl.util.cache_react_class(f,wrapf);

return wrapf;
});
reagent.impl.template.as_class = (function as_class(tag){
if(reagent.impl.template.hiccup_tag_QMARK_(tag)){
var G__12118 = tag;
return (reagent.impl.template.cached_wrapper.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.cached_wrapper.cljs$core$IFn$_invoke$arity$1(G__12118) : reagent.impl.template.cached_wrapper.call(null,G__12118));
} else {
var cached_class = reagent.impl.util.cached_react_class(tag);
if(!((cached_class == null))){
return cached_class;
} else {
if(cljs.core.truth_((React["isValidClass"])(tag))){
return reagent.impl.util.cache_react_class(tag,reagent.impl.template.wrap_component(tag,null,null));
} else {
return reagent.impl.template.fn_to_class(tag);
}
}
}
});
reagent.impl.template.get_key = (function get_key(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,cljs.core.constant$keyword$37);
} else {
return null;
}
});
reagent.impl.template.vec_to_comp = (function vec_to_comp(v,level){
if((cljs.core.count(v) > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Hiccup form should not be empty"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"v","v",1661996586,null)))], 0)))].join('')));
}

if(reagent.impl.template.valid_tag_QMARK_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Hiccup form: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v], 0)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"valid-tag?","valid-tag?",1243064160,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"v","v",1661996586,null),(0)))], 0)))].join('')));
}

var c = reagent.impl.template.as_class(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0)));
var jsprops = {"level": level, "argv": v};
var k_12121 = reagent.impl.template.get_key(cljs.core.meta(v));
var k_SINGLEQUOTE__12122 = (((k_12121 == null))?reagent.impl.template.get_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null)):k_12121);
if((k_SINGLEQUOTE__12122 == null)){
} else {
(jsprops["key"] = k_SINGLEQUOTE__12122);
}

var G__12120 = jsprops;
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(G__12120) : c.call(null,G__12120));
});
reagent.impl.template.seq_ctx = {};
reagent.impl.template.warn_on_deref = (function warn_on_deref(x){
if(cljs.core.truth_((reagent.impl.template.seq_ctx["warned"]))){
return null;
} else {
if(typeof console !== 'undefined'){
console.log("Warning: Reactive deref not supported in seq in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0)));
} else {
}

return (reagent.impl.template.seq_ctx["warned"] = true);
}
});
reagent.impl.template.as_component = (function() {
var as_component = null;
var as_component__1 = (function (x){
return as_component.cljs$core$IFn$_invoke$arity$2(x,(0));
});
var as_component__2 = (function (x,level){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.vector_QMARK_(x)){
return reagent.impl.template.vec_to_comp(x,level);
} else {
if(cljs.core.seq_QMARK_(x)){
if(!((true) && ((reagent.ratom._STAR_ratom_context_STAR_ == null)))){
var G__12129 = x;
var G__12130 = level;
return (reagent.impl.template.expand_seq.cljs$core$IFn$_invoke$arity$2 ? reagent.impl.template.expand_seq.cljs$core$IFn$_invoke$arity$2(G__12129,G__12130) : reagent.impl.template.expand_seq.call(null,G__12129,G__12130));
} else {
var s = reagent.ratom.capture_derefed((function (){
var G__12131 = x;
var G__12132 = level;
return (reagent.impl.template.expand_seq.cljs$core$IFn$_invoke$arity$2 ? reagent.impl.template.expand_seq.cljs$core$IFn$_invoke$arity$2(G__12131,G__12132) : reagent.impl.template.expand_seq.call(null,G__12131,G__12132));
}),reagent.impl.template.seq_ctx);
if(cljs.core.truth_(reagent.ratom.captured(reagent.impl.template.seq_ctx))){
reagent.impl.template.warn_on_deref(x);
} else {
}

return s;
}
} else {
return x;

}
}
}
});
as_component = function(x,level){
switch(arguments.length){
case 1:
return as_component__1.call(this,x);
case 2:
return as_component__2.call(this,x,level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
as_component.cljs$core$IFn$_invoke$arity$1 = as_component__1;
as_component.cljs$core$IFn$_invoke$arity$2 = as_component__2;
return as_component;
})()
;
reagent.impl.template.create_class = (function create_class(spec){
return reagent.impl.component.create_class(spec,reagent.impl.template.as_component);
});
reagent.impl.template.expand_seq = (function expand_seq(s,level){
var a = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(s);
var level_SINGLEQUOTE_ = (level + (1));
var n__4659__auto___12133 = a.length;
var i_12134 = (0);
while(true){
if((i_12134 < n__4659__auto___12133)){
(a[i_12134] = reagent.impl.template.as_component.cljs$core$IFn$_invoke$arity$2((a[i_12134]),level_SINGLEQUOTE_));

var G__12135 = (i_12134 + (1));
i_12134 = G__12135;
continue;
} else {
}
break;
}

return a;
});
reagent.impl.template.convert_args = (function convert_args(argv,first_child,level){
if((cljs.core.count(argv) === (first_child + (1)))){
return [null,reagent.impl.template.as_component.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,first_child),level)];
} else {
return cljs.core.reduce_kv((function (a,k,v){
if((k >= first_child)){
a.push(reagent.impl.template.as_component.cljs$core$IFn$_invoke$arity$2(v,level));
} else {
}

return a;
}),[null],argv);
}
});
