// Compiled by ClojureScript 0.0-2755 {}
goog.provide('reagent.ratom');
goog.require('cljs.core');
reagent.ratom.debug = false;
reagent.ratom._running = (function (){var G__16917 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16917) : cljs.core.atom.call(null,G__16917));
})();
reagent.ratom.running = (function running(){
var G__16919 = reagent.ratom._running;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16919) : cljs.core.deref.call(null,G__16919));
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_16921 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_16921;
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
var G__16922 = this$__$1;
return goog.getUid(G__16922);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){
var G__16923_16934 = key;
var G__16924_16935 = this$__$1;
var G__16925_16936 = oldval;
var G__16926_16937 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__16923_16934,G__16924_16935,G__16925_16936,G__16926_16937) : f.call(null,G__16923_16934,G__16924_16935,G__16925_16936,G__16926_16937));

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
return cljs.core._reset_BANG_(a__$1,(function (){var G__16927 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16927) : f.call(null,G__16927));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__16928 = self__.state;
var G__16929 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16928,G__16929) : f.call(null,G__16928,G__16929));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__16930 = self__.state;
var G__16931 = x;
var G__16932 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__16930,G__16931,G__16932) : f.call(null,G__16930,G__16931,G__16932));
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
if(cljs.core.truth_((function (){var G__16933 = new_value;
return (self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(G__16933) : self__.validator.call(null,G__16933));
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
var G__16941__delegate = function (x,p__16938){
var map__16940 = p__16938;
var map__16940__$1 = ((cljs.core.seq_QMARK_(map__16940))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16940):map__16940);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16940__$1,cljs.core.constant$keyword$13);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16940__$1,cljs.core.constant$keyword$3);
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__16941 = function (x,var_args){
var p__16938 = null;
if (arguments.length > 1) {
var G__16942__i = 0, G__16942__a = new Array(arguments.length -  1);
while (G__16942__i < G__16942__a.length) {G__16942__a[G__16942__i] = arguments[G__16942__i + 1]; ++G__16942__i;}
  p__16938 = new cljs.core.IndexedSeq(G__16942__a,0);
} 
return G__16941__delegate.call(this,x,p__16938);};
G__16941.cljs$lang$maxFixedArity = 1;
G__16941.cljs$lang$applyTo = (function (arglist__16943){
var x = cljs.core.first(arglist__16943);
var p__16938 = cljs.core.rest(arglist__16943);
return G__16941__delegate(x,p__16938);
});
G__16941.cljs$core$IFn$_invoke$arity$variadic = G__16941__delegate;
return G__16941;
})()
;
atom = function(x,var_args){
var p__16938 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
var G__16944 = null;
if (arguments.length > 1) {
var G__16945__i = 0, G__16945__a = new Array(arguments.length -  1);
while (G__16945__i < G__16945__a.length) {G__16945__a[G__16945__i] = arguments[G__16945__i + 1]; ++G__16945__i;}
G__16944 = new cljs.core.IndexedSeq(G__16945__a,0);
}
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__16944);
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
var G__16946 = this$__$1;
return goog.getUid(G__16946);
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
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__16947 = self__.ratom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__16947) : cljs.core.deref.call(null,G__16947));
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

reagent.ratom.IDisposable = (function (){var obj16949 = {};
return obj16949;
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
return (function (){var or__3772__auto__ = (reagent.ratom.dispose_BANG_[(function (){var G__16953 = x__4416__auto__;
return goog.typeOf(G__16953);
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


reagent.ratom.IRunnable = (function (){var obj16955 = {};
return obj16955;
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
return (function (){var or__3772__auto__ = (reagent.ratom.run[(function (){var G__16959 = x__4416__auto__;
return goog.typeOf(G__16959);
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


reagent.ratom.IComputedImpl = (function (){var obj16961 = {};
return obj16961;
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
return (function (){var or__3772__auto__ = (reagent.ratom._update_watching[(function (){var G__16965 = x__4416__auto__;
return goog.typeOf(G__16965);
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
return (function (){var or__3772__auto__ = (reagent.ratom._handle_change[(function (){var G__16969 = x__4416__auto__;
return goog.typeOf(G__16969);
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
var G__16974_16978 = key;
var G__16975_16979 = obs;
var G__16976_16980 = oldval;
var G__16977_16981 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__16974_16978,G__16975_16979,G__16976_16980,G__16977_16981) : f.call(null,G__16974_16978,G__16975_16979,G__16976_16980,G__16977_16981));

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
var seq__16982_17003 = cljs.core.seq(derefed);
var chunk__16983_17004 = null;
var count__16984_17005 = (0);
var i__16985_17006 = (0);
while(true){
if((i__16985_17006 < count__16984_17005)){
var w_17007 = chunk__16983_17004.cljs$core$IIndexed$_nth$arity$2(null,i__16985_17006);
if(cljs.core.contains_QMARK_(self__.watching,w_17007)){
} else {
cljs.core.add_watch(w_17007,this$__$1,reagent.ratom._handle_change);
}

var G__17008 = seq__16982_17003;
var G__17009 = chunk__16983_17004;
var G__17010 = count__16984_17005;
var G__17011 = (i__16985_17006 + (1));
seq__16982_17003 = G__17008;
chunk__16983_17004 = G__17009;
count__16984_17005 = G__17010;
i__16985_17006 = G__17011;
continue;
} else {
var temp__4126__auto___17012 = cljs.core.seq(seq__16982_17003);
if(temp__4126__auto___17012){
var seq__16982_17013__$1 = temp__4126__auto___17012;
if(cljs.core.chunked_seq_QMARK_(seq__16982_17013__$1)){
var c__4559__auto___17014 = cljs.core.chunk_first(seq__16982_17013__$1);
var G__17015 = cljs.core.chunk_rest(seq__16982_17013__$1);
var G__17016 = c__4559__auto___17014;
var G__17017 = cljs.core.count(c__4559__auto___17014);
var G__17018 = (0);
seq__16982_17003 = G__17015;
chunk__16983_17004 = G__17016;
count__16984_17005 = G__17017;
i__16985_17006 = G__17018;
continue;
} else {
var w_17019 = cljs.core.first(seq__16982_17013__$1);
if(cljs.core.contains_QMARK_(self__.watching,w_17019)){
} else {
cljs.core.add_watch(w_17019,this$__$1,reagent.ratom._handle_change);
}

var G__17020 = cljs.core.next(seq__16982_17013__$1);
var G__17021 = null;
var G__17022 = (0);
var G__17023 = (0);
seq__16982_17003 = G__17020;
chunk__16983_17004 = G__17021;
count__16984_17005 = G__17022;
i__16985_17006 = G__17023;
continue;
}
} else {
}
}
break;
}

var seq__16986_17024 = cljs.core.seq(self__.watching);
var chunk__16987_17025 = null;
var count__16988_17026 = (0);
var i__16989_17027 = (0);
while(true){
if((i__16989_17027 < count__16988_17026)){
var w_17028 = chunk__16987_17025.cljs$core$IIndexed$_nth$arity$2(null,i__16989_17027);
if(cljs.core.contains_QMARK_(derefed,w_17028)){
} else {
cljs.core.remove_watch(w_17028,this$__$1);
}

var G__17029 = seq__16986_17024;
var G__17030 = chunk__16987_17025;
var G__17031 = count__16988_17026;
var G__17032 = (i__16989_17027 + (1));
seq__16986_17024 = G__17029;
chunk__16987_17025 = G__17030;
count__16988_17026 = G__17031;
i__16989_17027 = G__17032;
continue;
} else {
var temp__4126__auto___17033 = cljs.core.seq(seq__16986_17024);
if(temp__4126__auto___17033){
var seq__16986_17034__$1 = temp__4126__auto___17033;
if(cljs.core.chunked_seq_QMARK_(seq__16986_17034__$1)){
var c__4559__auto___17035 = cljs.core.chunk_first(seq__16986_17034__$1);
var G__17036 = cljs.core.chunk_rest(seq__16986_17034__$1);
var G__17037 = c__4559__auto___17035;
var G__17038 = cljs.core.count(c__4559__auto___17035);
var G__17039 = (0);
seq__16986_17024 = G__17036;
chunk__16987_17025 = G__17037;
count__16988_17026 = G__17038;
i__16989_17027 = G__17039;
continue;
} else {
var w_17040 = cljs.core.first(seq__16986_17034__$1);
if(cljs.core.contains_QMARK_(derefed,w_17040)){
} else {
cljs.core.remove_watch(w_17040,this$__$1);
}

var G__17041 = cljs.core.next(seq__16986_17034__$1);
var G__17042 = null;
var G__17043 = (0);
var G__17044 = (0);
seq__16986_17024 = G__17041;
chunk__16987_17025 = G__17042;
count__16988_17026 = G__17043;
i__16989_17027 = G__17044;
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
var G__16990 = this$__$1;
return goog.getUid(G__16990);
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
var seq__16991_17045 = cljs.core.seq(self__.watching);
var chunk__16992_17046 = null;
var count__16993_17047 = (0);
var i__16994_17048 = (0);
while(true){
if((i__16994_17048 < count__16993_17047)){
var w_17049 = chunk__16992_17046.cljs$core$IIndexed$_nth$arity$2(null,i__16994_17048);
cljs.core.remove_watch(w_17049,this$__$1);

var G__17050 = seq__16991_17045;
var G__17051 = chunk__16992_17046;
var G__17052 = count__16993_17047;
var G__17053 = (i__16994_17048 + (1));
seq__16991_17045 = G__17050;
chunk__16992_17046 = G__17051;
count__16993_17047 = G__17052;
i__16994_17048 = G__17053;
continue;
} else {
var temp__4126__auto___17054 = cljs.core.seq(seq__16991_17045);
if(temp__4126__auto___17054){
var seq__16991_17055__$1 = temp__4126__auto___17054;
if(cljs.core.chunked_seq_QMARK_(seq__16991_17055__$1)){
var c__4559__auto___17056 = cljs.core.chunk_first(seq__16991_17055__$1);
var G__17057 = cljs.core.chunk_rest(seq__16991_17055__$1);
var G__17058 = c__4559__auto___17056;
var G__17059 = cljs.core.count(c__4559__auto___17056);
var G__17060 = (0);
seq__16991_17045 = G__17057;
chunk__16992_17046 = G__17058;
count__16993_17047 = G__17059;
i__16994_17048 = G__17060;
continue;
} else {
var w_17061 = cljs.core.first(seq__16991_17055__$1);
cljs.core.remove_watch(w_17061,this$__$1);

var G__17062 = cljs.core.next(seq__16991_17055__$1);
var G__17063 = null;
var G__17064 = (0);
var G__17065 = (0);
seq__16991_17045 = G__17062;
chunk__16992_17046 = G__17063;
count__16993_17047 = G__17064;
i__16994_17048 = G__17065;
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
return cljs.core._reset_BANG_(a__$1,(function (){var G__16995 = self__.state;
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__16995) : f__$1.call(null,G__16995));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__16996 = self__.state;
var G__16997 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__16996,G__16997) : f__$1.call(null,G__16996,G__16997));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__16998 = self__.state;
var G__16999 = x;
var G__17000 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__16998,G__16999,G__17000) : f__$1.call(null,G__16998,G__16999,G__17000));
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
var G__17001_17066 = oldval;
var G__17002_17067 = newval;
(self__.on_set.cljs$core$IFn$_invoke$arity$2 ? self__.on_set.cljs$core$IFn$_invoke$arity$2(G__17001_17066,G__17002_17067) : self__.on_set.call(null,G__17001_17066,G__17002_17067));
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
var x__16296__auto___17068 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,reagent.ratom._STAR_ratom_context_STAR_], null);
if(typeof console !== 'undefined'){
console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("reagent.ratom"),cljs.core.str(":"),cljs.core.str(231),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x__16296__auto___17068], 0)))].join(''))].join(''));
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
var make_reaction__delegate = function (f,p__17069){
var map__17071 = p__17069;
var map__17071__$1 = ((cljs.core.seq_QMARK_(map__17071))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17071):map__17071);
var derefed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17071__$1,cljs.core.constant$keyword$39);
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17071__$1,cljs.core.constant$keyword$40);
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17071__$1,cljs.core.constant$keyword$41);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17071__$1,cljs.core.constant$keyword$42);
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
var p__17069 = null;
if (arguments.length > 1) {
var G__17072__i = 0, G__17072__a = new Array(arguments.length -  1);
while (G__17072__i < G__17072__a.length) {G__17072__a[G__17072__i] = arguments[G__17072__i + 1]; ++G__17072__i;}
  p__17069 = new cljs.core.IndexedSeq(G__17072__a,0);
} 
return make_reaction__delegate.call(this,f,p__17069);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__17073){
var f = cljs.core.first(arglist__17073);
var p__17069 = cljs.core.rest(arglist__17073);
return make_reaction__delegate(f,p__17069);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;
