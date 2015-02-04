// Compiled by ClojureScript 0.0-2755 {}
goog.provide('reagent.ratom');
goog.require('cljs.core');
reagent.ratom.debug = false;
reagent.ratom._running = (function (){var G__12138 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12138) : cljs.core.atom.call(null,G__12138));
})();
reagent.ratom.running = (function running(){
var G__12140 = reagent.ratom._running;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12140) : cljs.core.deref.call(null,G__12140));
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_12142 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_12142;
}});
reagent.ratom.captured = (function captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__12143 = this$__$1;
return goog.getUid(G__12143);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){
var G__12144_12155 = key;
var G__12145_12156 = this$__$1;
var G__12146_12157 = oldval;
var G__12147_12158 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__12144_12155,G__12145_12156,G__12146_12157,G__12147_12158) : f.call(null,G__12144_12155,G__12145_12156,G__12146_12157,G__12147_12158));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write(writer,"#<Atom: ");

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__12148 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12148) : f.call(null,G__12148));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__12149 = self__.state;
var G__12150 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12149,G__12150) : f.call(null,G__12149,G__12150));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__12151 = self__.state;
var G__12152 = x;
var G__12153 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12151,G__12152,G__12153) : f.call(null,G__12151,G__12152,G__12153));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_((function (){var G__12154 = new_value;
return (self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(G__12154) : self__.validator.call(null,G__12154));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))], 0)))].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches(a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

return self__.state;
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write(writer__4360__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__12162__delegate = function (x,p__12159){
var map__12161 = p__12159;
var map__12161__$1 = ((cljs.core.seq_QMARK_(map__12161))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12161):map__12161);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12161__$1,cljs.core.constant$keyword$13);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12161__$1,cljs.core.constant$keyword$3);
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__12162 = function (x,var_args){
var p__12159 = null;
if (arguments.length > 1) {
var G__12163__i = 0, G__12163__a = new Array(arguments.length -  1);
while (G__12163__i < G__12163__a.length) {G__12163__a[G__12163__i] = arguments[G__12163__i + 1]; ++G__12163__i;}
  p__12159 = new cljs.core.IndexedSeq(G__12163__a,0);
} 
return G__12162__delegate.call(this,x,p__12159);};
G__12162.cljs$lang$maxFixedArity = 1;
G__12162.cljs$lang$applyTo = (function (arglist__12164){
var x = cljs.core.first(arglist__12164);
var p__12159 = cljs.core.rest(arglist__12164);
return G__12162__delegate(x,p__12159);
});
G__12162.cljs$core$IFn$_invoke$arity$variadic = G__12162__delegate;
return G__12162;
})()
;
atom = function(x,var_args){
var p__12159 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
var G__12165 = null;
if (arguments.length > 1) {
var G__12166__i = 0, G__12166__a = new Array(arguments.length -  1);
while (G__12166__i < G__12166__a.length) {G__12166__a[G__12166__i] = arguments[G__12166__i + 1]; ++G__12166__i;}
G__12165 = new cljs.core.IndexedSeq(G__12166__a,0);
}
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__12165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;

/**
* @constructor
*/
reagent.ratom.RCursor = (function (path,ratom){
this.path = path;
this.ratom = ratom;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__12167 = this$__$1;
return goog.getUid(G__12167);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core._notify_watches(self__.ratom,oldval,newval);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._add_watch(self__.ratom,key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core._remove_watch(self__.ratom,key);
});

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write(writer,"#<Cursor: ");

cljs.core.pr_writer(self__.path,writer,opts);

cljs.core._write(writer," ");

cljs.core.pr_writer(self__.ratom,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.RCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._meta(self__.ratom);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.update_in,self__.path,f);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.ratom,cljs.core.update_in,self__.path,f,cljs.core.array_seq([x], 0));
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.ratom,cljs.core.update_in,self__.path,f,cljs.core.array_seq([x,y], 0));
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.ratom,cljs.core.update_in,self__.path,f,cljs.core.array_seq([x,y,more], 0));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,new_value);
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__12168 = self__.ratom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12168) : cljs.core.deref.call(null,G__12168));
})(),self__.path);
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write(writer__4360__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function __GT_RCursor(path,ratom){
return (new reagent.ratom.RCursor(path,ratom));
});

reagent.ratom.cursor = (function cursor(path,ra){
return (new reagent.ratom.RCursor(path,ra));
});

reagent.ratom.IDisposable = (function (){var obj12170 = {};
return obj12170;
})();

reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__3760__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (reagent.ratom.dispose_BANG_[(function (){var G__12174 = x__4416__auto__;
return goog.typeOf(G__12174);
})()]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj12176 = {};
return obj12176;
})();

reagent.ratom.run = (function run(this$){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__3760__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (reagent.ratom.run[(function (){var G__12180 = x__4416__auto__;
return goog.typeOf(G__12180);
})()]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (reagent.ratom.run["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj12182 = {};
return obj12182;
})();

reagent.ratom._update_watching = (function _update_watching(this$,derefed){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__3760__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (reagent.ratom._update_watching[(function (){var G__12186 = x__4416__auto__;
return goog.typeOf(G__12186);
})()]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){
if((function (){var and__3760__auto__ = k;
if(and__3760__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__3760__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__4416__auto__ = (((k == null))?null:k);
return (function (){var or__3772__auto__ = (reagent.ratom._handle_change[(function (){var G__12190 = x__4416__auto__;
return goog.typeOf(G__12190);
})()]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});

reagent.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){
return cljs.core.reduce_kv((function (_,key,f){
var G__12195_12199 = key;
var G__12196_12200 = obs;
var G__12197_12201 = oldval;
var G__12198_12202 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__12195_12199,G__12196_12200,G__12197_12201,G__12198_12202) : f.call(null,G__12195_12199,G__12196_12200,G__12197_12201,G__12198_12202));

return null;
}),null,watches);
});

/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__3760__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__3760__auto__)){
return (cljs.core.not(self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__3760__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__3772__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__12203_12224 = cljs.core.seq(derefed);
var chunk__12204_12225 = null;
var count__12205_12226 = (0);
var i__12206_12227 = (0);
while(true){
if((i__12206_12227 < count__12205_12226)){
var w_12228 = chunk__12204_12225.cljs$core$IIndexed$_nth$arity$2(null,i__12206_12227);
if(cljs.core.contains_QMARK_(self__.watching,w_12228)){
} else {
cljs.core.add_watch(w_12228,this$__$1,reagent.ratom._handle_change);
}

var G__12229 = seq__12203_12224;
var G__12230 = chunk__12204_12225;
var G__12231 = count__12205_12226;
var G__12232 = (i__12206_12227 + (1));
seq__12203_12224 = G__12229;
chunk__12204_12225 = G__12230;
count__12205_12226 = G__12231;
i__12206_12227 = G__12232;
continue;
} else {
var temp__4126__auto___12233 = cljs.core.seq(seq__12203_12224);
if(temp__4126__auto___12233){
var seq__12203_12234__$1 = temp__4126__auto___12233;
if(cljs.core.chunked_seq_QMARK_(seq__12203_12234__$1)){
var c__4559__auto___12235 = cljs.core.chunk_first(seq__12203_12234__$1);
var G__12236 = cljs.core.chunk_rest(seq__12203_12234__$1);
var G__12237 = c__4559__auto___12235;
var G__12238 = cljs.core.count(c__4559__auto___12235);
var G__12239 = (0);
seq__12203_12224 = G__12236;
chunk__12204_12225 = G__12237;
count__12205_12226 = G__12238;
i__12206_12227 = G__12239;
continue;
} else {
var w_12240 = cljs.core.first(seq__12203_12234__$1);
if(cljs.core.contains_QMARK_(self__.watching,w_12240)){
} else {
cljs.core.add_watch(w_12240,this$__$1,reagent.ratom._handle_change);
}

var G__12241 = cljs.core.next(seq__12203_12234__$1);
var G__12242 = null;
var G__12243 = (0);
var G__12244 = (0);
seq__12203_12224 = G__12241;
chunk__12204_12225 = G__12242;
count__12205_12226 = G__12243;
i__12206_12227 = G__12244;
continue;
}
} else {
}
}
break;
}

var seq__12207_12245 = cljs.core.seq(self__.watching);
var chunk__12208_12246 = null;
var count__12209_12247 = (0);
var i__12210_12248 = (0);
while(true){
if((i__12210_12248 < count__12209_12247)){
var w_12249 = chunk__12208_12246.cljs$core$IIndexed$_nth$arity$2(null,i__12210_12248);
if(cljs.core.contains_QMARK_(derefed,w_12249)){
} else {
cljs.core.remove_watch(w_12249,this$__$1);
}

var G__12250 = seq__12207_12245;
var G__12251 = chunk__12208_12246;
var G__12252 = count__12209_12247;
var G__12253 = (i__12210_12248 + (1));
seq__12207_12245 = G__12250;
chunk__12208_12246 = G__12251;
count__12209_12247 = G__12252;
i__12210_12248 = G__12253;
continue;
} else {
var temp__4126__auto___12254 = cljs.core.seq(seq__12207_12245);
if(temp__4126__auto___12254){
var seq__12207_12255__$1 = temp__4126__auto___12254;
if(cljs.core.chunked_seq_QMARK_(seq__12207_12255__$1)){
var c__4559__auto___12256 = cljs.core.chunk_first(seq__12207_12255__$1);
var G__12257 = cljs.core.chunk_rest(seq__12207_12255__$1);
var G__12258 = c__4559__auto___12256;
var G__12259 = cljs.core.count(c__4559__auto___12256);
var G__12260 = (0);
seq__12207_12245 = G__12257;
chunk__12208_12246 = G__12258;
count__12209_12247 = G__12259;
i__12210_12248 = G__12260;
continue;
} else {
var w_12261 = cljs.core.first(seq__12207_12255__$1);
if(cljs.core.contains_QMARK_(derefed,w_12261)){
} else {
cljs.core.remove_watch(w_12261,this$__$1);
}

var G__12262 = cljs.core.next(seq__12207_12255__$1);
var G__12263 = null;
var G__12264 = (0);
var G__12265 = (0);
seq__12207_12245 = G__12262;
chunk__12208_12246 = G__12263;
count__12209_12247 = G__12264;
i__12210_12248 = G__12265;
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write(writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash(this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__12211 = this$__$1;
return goog.getUid(G__12211);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__12212_12266 = cljs.core.seq(self__.watching);
var chunk__12213_12267 = null;
var count__12214_12268 = (0);
var i__12215_12269 = (0);
while(true){
if((i__12215_12269 < count__12214_12268)){
var w_12270 = chunk__12213_12267.cljs$core$IIndexed$_nth$arity$2(null,i__12215_12269);
cljs.core.remove_watch(w_12270,this$__$1);

var G__12271 = seq__12212_12266;
var G__12272 = chunk__12213_12267;
var G__12273 = count__12214_12268;
var G__12274 = (i__12215_12269 + (1));
seq__12212_12266 = G__12271;
chunk__12213_12267 = G__12272;
count__12214_12268 = G__12273;
i__12215_12269 = G__12274;
continue;
} else {
var temp__4126__auto___12275 = cljs.core.seq(seq__12212_12266);
if(temp__4126__auto___12275){
var seq__12212_12276__$1 = temp__4126__auto___12275;
if(cljs.core.chunked_seq_QMARK_(seq__12212_12276__$1)){
var c__4559__auto___12277 = cljs.core.chunk_first(seq__12212_12276__$1);
var G__12278 = cljs.core.chunk_rest(seq__12212_12276__$1);
var G__12279 = c__4559__auto___12277;
var G__12280 = cljs.core.count(c__4559__auto___12277);
var G__12281 = (0);
seq__12212_12266 = G__12278;
chunk__12213_12267 = G__12279;
count__12214_12268 = G__12280;
i__12215_12269 = G__12281;
continue;
} else {
var w_12282 = cljs.core.first(seq__12212_12276__$1);
cljs.core.remove_watch(w_12282,this$__$1);

var G__12283 = cljs.core.next(seq__12212_12276__$1);
var G__12284 = null;
var G__12285 = (0);
var G__12286 = (0);
seq__12212_12266 = G__12283;
chunk__12213_12267 = G__12284;
count__12214_12268 = G__12285;
i__12215_12269 = G__12286;
continue;
}
} else {
}
}
break;
}

self__.watching = cljs.core.PersistentHashSet.EMPTY;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return (self__.on_dispose.cljs$core$IFn$_invoke$arity$0 ? self__.on_dispose.cljs$core$IFn$_invoke$arity$0() : self__.on_dispose.call(null));
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
var old_value = self__.state;
self__.state = new_value;

cljs.core._notify_watches(a__$1,old_value,new_value);

return new_value;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__12216 = self__.state;
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__12216) : f__$1.call(null,G__12216));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__12217 = self__.state;
var G__12218 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__12217,G__12218) : f__$1.call(null,G__12217,G__12218));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__12219 = self__.state;
var G__12220 = x;
var G__12221 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__12219,G__12220,G__12221) : f__$1.call(null,G__12219,G__12220,G__12221));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,self__.state,x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed(self__.f,this$__$1);
var derefed = reagent.ratom.captured(this$__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(derefed,self__.watching)){
reagent.ratom._update_watching(this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

reagent.ratom.call_watches(this$__$1,self__.watches,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.on_set)){
var G__12222_12287 = oldval;
var G__12223_12288 = newval;
(self__.on_set.cljs$core$IFn$_invoke$arity$2 ? self__.on_set.cljs$core$IFn$_invoke$arity$2(G__12222_12287,G__12223_12288) : self__.on_set.call(null,G__12222_12287,G__12223_12288));
} else {
}

return reagent.ratom.call_watches(this$__$1,self__.watches,oldval,newval);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);

if(cljs.core.empty_QMARK_(self__.watches)){
return reagent.ratom.dispose_BANG_(this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not((function (){var or__3772__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
var x__9881__auto___12289 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);
if(typeof console !== 'undefined'){
console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("reagent.ratom"),cljs.core.str(":"),cljs.core.str(231),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x__9881__auto___12289], 0)))].join(''))].join(''));
} else {
}

} else {
}

if(cljs.core.truth_((function (){var or__3772__auto__ = self__.auto_run;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return reagent.ratom._STAR_ratom_context_STAR_;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reaction derefed outside auto-running context"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",-1557728360,null))], 0)))].join('')));
}

reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run(this$__$1);
} else {
return self__.state;
}
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write(writer__4360__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__12290){
var map__12292 = p__12290;
var map__12292__$1 = ((cljs.core.seq_QMARK_(map__12292))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12292):map__12292);
var derefed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12292__$1,cljs.core.constant$keyword$24);
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12292__$1,cljs.core.constant$keyword$25);
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12292__$1,cljs.core.constant$keyword$26);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12292__$1,cljs.core.constant$keyword$27);
var runner = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else {
}

reaction.reagent$ratom$IComputedImpl$_update_watching$arity$2(null,derefed);
}

return reaction;
};
var make_reaction = function (f,var_args){
var p__12290 = null;
if (arguments.length > 1) {
var G__12293__i = 0, G__12293__a = new Array(arguments.length -  1);
while (G__12293__i < G__12293__a.length) {G__12293__a[G__12293__i] = arguments[G__12293__i + 1]; ++G__12293__i;}
  p__12290 = new cljs.core.IndexedSeq(G__12293__a,0);
} 
return make_reaction__delegate.call(this,f,p__12290);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__12294){
var f = cljs.core.first(arglist__12294);
var p__12290 = cljs.core.rest(arglist__12294);
return make_reaction__delegate(f,p__12290);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;
