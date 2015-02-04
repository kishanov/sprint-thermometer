// Compiled by ClojureScript 0.0-2755 {}
goog.provide('sprint_thermometer.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.browser.repl');
cljs.core.enable_console_print_BANG_();
sprint_thermometer.core.c_to_f = (function c_to_f(n){
return ((1.8 * n) + (32));
});
sprint_thermometer.core.thermometer = (function thermometer(data){
var width = (240);
var height = (510);
var margin = (10);
var padding = (10);
var border_width = (10);
var notches_margin_top = (20);
var notch_width = (20);
var notch_height = (4);
var border_color = "#ccc";
var mercury_border_width = (3);
var mercury_bubble_rx = (15);
var mercury_bubble_y = ((height - (margin * (3))) - mercury_bubble_rx);
var mercury_bubble_x = cljs.core.quot(width,(2));
var mercury_column_width = (14);
var mercury_column_height = ((((height - ((2) * border_width)) - (margin * (2))) - (padding * (2))) - mercury_bubble_rx);
var pvc_ratio = ((100) - (((100) * (cljs.core.constant$keyword$54.cljs$core$IFn$_invoke$arity$1(data) / ((cljs.core.constant$keyword$55.cljs$core$IFn$_invoke$arity$1(data) / cljs.core.constant$keyword$56.cljs$core$IFn$_invoke$arity$1(data)) * cljs.core.constant$keyword$57.cljs$core$IFn$_invoke$arity$1(data)))) | (0)));
var status_color = (((pvc_ratio < (0)))?"blue":(((pvc_ratio === (0)))?"green":(((pvc_ratio < (10)))?"gold":(((pvc_ratio < (20)))?"orange":"red"
))));
var zero_y = (((440) - (366)) * notch_height);
var status_bar_y = (((((zero_y + margin) + border_width) + padding) + notches_margin_top) - (notch_height * pvc_ratio));
console.log(pvc_ratio);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$58,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$59,"http://www.w3.org/2000/svg",cljs.core.constant$keyword$60,width,cljs.core.constant$keyword$61,height], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$64,margin,cljs.core.constant$keyword$65,margin,cljs.core.constant$keyword$60,(width - ((2) * margin)),cljs.core.constant$keyword$61,(height - ((2) * margin)),cljs.core.constant$keyword$66,cljs.core.quot(width,(6)),cljs.core.constant$keyword$67,cljs.core.quot(width,(6)),cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,border_color,cljs.core.constant$keyword$69,border_width,cljs.core.constant$keyword$70,"white"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$64,(cljs.core.quot(width,(2)) - cljs.core.quot(mercury_column_width,(2))),cljs.core.constant$keyword$65,((margin + border_width) + padding),cljs.core.constant$keyword$60,mercury_column_width,cljs.core.constant$keyword$61,mercury_column_height,cljs.core.constant$keyword$66,cljs.core.quot(mercury_column_width,(2)),cljs.core.constant$keyword$67,cljs.core.quot(mercury_column_width,(2)),cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,border_color,cljs.core.constant$keyword$69,mercury_border_width,cljs.core.constant$keyword$70,"#eee"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$71,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$64,(mercury_bubble_x + cljs.core.quot(notch_width,1.5)),cljs.core.constant$keyword$65,(((margin + border_width) + padding) + cljs.core.quot(notches_margin_top,(2)))], null),"C"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$71,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$64,(mercury_bubble_x - (1.2 * notch_width)),cljs.core.constant$keyword$65,(((margin + border_width) + padding) + cljs.core.quot(notches_margin_top,(2)))], null),"F"], null),(function (){var iter__4528__auto__ = ((function (width,height,margin,padding,border_width,notches_margin_top,notch_width,notch_height,border_color,mercury_border_width,mercury_bubble_rx,mercury_bubble_y,mercury_bubble_x,mercury_column_width,mercury_column_height,pvc_ratio,status_color,zero_y,status_bar_y){
return (function iter__17335(s__17336){
return (new cljs.core.LazySeq(null,((function (width,height,margin,padding,border_width,notches_margin_top,notch_width,notch_height,border_color,mercury_border_width,mercury_bubble_rx,mercury_bubble_y,mercury_bubble_x,mercury_column_width,mercury_column_height,pvc_ratio,status_color,zero_y,status_bar_y){
return (function (){
var s__17336__$1 = s__17336;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__17336__$1);
if(temp__4126__auto__){
var s__17336__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17336__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__17336__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__17338 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__17337 = (0);
while(true){
if((i__17337 < size__4527__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__17337);
cljs.core.chunk_append(b__17338,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$64,(cljs.core.quot(width,(2)) + mercury_column_width),cljs.core.constant$keyword$65,(((((i * (4)) + margin) + padding) + border_width) + notches_margin_top),cljs.core.constant$keyword$60,(((cljs.core.mod(i,(10)) === (0)))?((2) * notch_width):(((cljs.core.mod(i,(5)) === (0)))?(1.5 * notch_width):notch_width
)),cljs.core.constant$keyword$61,(2),cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$70,"#333"], null)], null)], null),(((cljs.core.mod(i,(10)) === (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$71,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$64,((cljs.core.quot(width,(2)) + mercury_column_width) + (2.5 * notch_width)),cljs.core.constant$keyword$65,((((((i * (4)) + margin) + padding) + border_width) + notches_margin_top) + (6)),cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$72,(16),cljs.core.constant$keyword$73,"bold"], null)], null),(function (){var G__17345 = "%.1f";
var G__17346 = (((440) - i) / (10));
return goog.string.format(G__17345,G__17346);
})()], null):null)], null));

var G__17363 = (i__17337 + (1));
i__17337 = G__17363;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17338),iter__17335(cljs.core.chunk_rest(s__17336__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17338),null);
}
} else {
var i = cljs.core.first(s__17336__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$64,(cljs.core.quot(width,(2)) + mercury_column_width),cljs.core.constant$keyword$65,(((((i * (4)) + margin) + padding) + border_width) + notches_margin_top),cljs.core.constant$keyword$60,(((cljs.core.mod(i,(10)) === (0)))?((2) * notch_width):(((cljs.core.mod(i,(5)) === (0)))?(1.5 * notch_width):notch_width
)),cljs.core.constant$keyword$61,(2),cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$70,"#333"], null)], null)], null),(((cljs.core.mod(i,(10)) === (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$71,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$64,((cljs.core.quot(width,(2)) + mercury_column_width) + (2.5 * notch_width)),cljs.core.constant$keyword$65,((((((i * (4)) + margin) + padding) + border_width) + notches_margin_top) + (6)),cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$72,(16),cljs.core.constant$keyword$73,"bold"], null)], null),(function (){var G__17347 = "%.1f";
var G__17348 = (((440) - i) / (10));
return goog.string.format(G__17347,G__17348);
})()], null):null)], null),iter__17335(cljs.core.rest(s__17336__$2)));
}
} else {
return null;
}
break;
}
});})(width,height,margin,padding,border_width,notches_margin_top,notch_width,notch_height,border_color,mercury_border_width,mercury_bubble_rx,mercury_bubble_y,mercury_bubble_x,mercury_column_width,mercury_column_height,pvc_ratio,status_color,zero_y,status_bar_y))
,null,null));
});})(width,height,margin,padding,border_width,notches_margin_top,notch_width,notch_height,border_color,mercury_border_width,mercury_bubble_rx,mercury_bubble_y,mercury_bubble_x,mercury_column_width,mercury_column_height,pvc_ratio,status_color,zero_y,status_bar_y))
;
return iter__4528__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((101)));
})(),(function (){var iter__4528__auto__ = ((function (width,height,margin,padding,border_width,notches_margin_top,notch_width,notch_height,border_color,mercury_border_width,mercury_bubble_rx,mercury_bubble_y,mercury_bubble_x,mercury_column_width,mercury_column_height,pvc_ratio,status_color,zero_y,status_bar_y){
return (function iter__17349(s__17350){
return (new cljs.core.LazySeq(null,((function (width,height,margin,padding,border_width,notches_margin_top,notch_width,notch_height,border_color,mercury_border_width,mercury_bubble_rx,mercury_bubble_y,mercury_bubble_x,mercury_column_width,mercury_column_height,pvc_ratio,status_color,zero_y,status_bar_y){
return (function (){
var s__17350__$1 = s__17350;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__17350__$1);
if(temp__4126__auto__){
var s__17350__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17350__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__17350__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__17352 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__17351 = (0);
while(true){
if((i__17351 < size__4527__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__17351);
cljs.core.chunk_append(b__17352,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$64,((cljs.core.quot(width,(2)) - mercury_column_width) - (((cljs.core.mod(i,(10)) === (0)))?((2) * notch_width):(((cljs.core.mod(i,(5)) === (0)))?(1.5 * notch_width):notch_width
))),cljs.core.constant$keyword$65,(((((i * (4)) + margin) + padding) + border_width) + notches_margin_top),cljs.core.constant$keyword$60,(((cljs.core.mod(i,(10)) === (0)))?((2) * notch_width):(((cljs.core.mod(i,(5)) === (0)))?(1.5 * notch_width):notch_width
)),cljs.core.constant$keyword$61,(2),cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$70,"#333"], null)], null)], null),(((cljs.core.mod(i,(10)) === (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$71,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$64,((cljs.core.quot(width,(2)) - mercury_column_width) - ((4) * notch_width)),cljs.core.constant$keyword$65,((((((i * (4)) + margin) + padding) + border_width) + notches_margin_top) + (6)),cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$72,(16),cljs.core.constant$keyword$73,"bold"], null)], null),(function (){var G__17359 = "%.1f";
var G__17360 = sprint_thermometer.core.c_to_f((((440) - i) / (10)));
return goog.string.format(G__17359,G__17360);
})()], null):null)], null));

var G__17364 = (i__17351 + (1));
i__17351 = G__17364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17352),iter__17349(cljs.core.chunk_rest(s__17350__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17352),null);
}
} else {
var i = cljs.core.first(s__17350__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$64,((cljs.core.quot(width,(2)) - mercury_column_width) - (((cljs.core.mod(i,(10)) === (0)))?((2) * notch_width):(((cljs.core.mod(i,(5)) === (0)))?(1.5 * notch_width):notch_width
))),cljs.core.constant$keyword$65,(((((i * (4)) + margin) + padding) + border_width) + notches_margin_top),cljs.core.constant$keyword$60,(((cljs.core.mod(i,(10)) === (0)))?((2) * notch_width):(((cljs.core.mod(i,(5)) === (0)))?(1.5 * notch_width):notch_width
)),cljs.core.constant$keyword$61,(2),cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$70,"#333"], null)], null)], null),(((cljs.core.mod(i,(10)) === (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$71,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$64,((cljs.core.quot(width,(2)) - mercury_column_width) - ((4) * notch_width)),cljs.core.constant$keyword$65,((((((i * (4)) + margin) + padding) + border_width) + notches_margin_top) + (6)),cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$72,(16),cljs.core.constant$keyword$73,"bold"], null)], null),(function (){var G__17361 = "%.1f";
var G__17362 = sprint_thermometer.core.c_to_f((((440) - i) / (10)));
return goog.string.format(G__17361,G__17362);
})()], null):null)], null),iter__17349(cljs.core.rest(s__17350__$2)));
}
} else {
return null;
}
break;
}
});})(width,height,margin,padding,border_width,notches_margin_top,notch_width,notch_height,border_color,mercury_border_width,mercury_bubble_rx,mercury_bubble_y,mercury_bubble_x,mercury_column_width,mercury_column_height,pvc_ratio,status_color,zero_y,status_bar_y))
,null,null));
});})(width,height,margin,padding,border_width,notches_margin_top,notch_width,notch_height,border_color,mercury_border_width,mercury_bubble_rx,mercury_bubble_y,mercury_bubble_x,mercury_column_width,mercury_column_height,pvc_ratio,status_color,zero_y,status_bar_y))
;
return iter__4528__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((101)));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$64,(((cljs.core.quot(width,(2)) - cljs.core.quot(mercury_column_width,(2))) - (1)) + mercury_border_width),cljs.core.constant$keyword$65,status_bar_y,cljs.core.constant$keyword$60,((mercury_column_width - (mercury_border_width * (2))) + (2)),cljs.core.constant$keyword$61,(mercury_bubble_y - status_bar_y),cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$70,status_color], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$75,mercury_bubble_x,cljs.core.constant$keyword$76,mercury_bubble_y,cljs.core.constant$keyword$77,(15),cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,border_color,cljs.core.constant$keyword$69,mercury_border_width,cljs.core.constant$keyword$70,status_color], null)], null)], null)], null)], null);
});
sprint_thermometer.core.app = (function app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$79,"Thermometer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sprint_thermometer.core.thermometer,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$55,(70),cljs.core.constant$keyword$54,(63),cljs.core.constant$keyword$56,(10),cljs.core.constant$keyword$57,(10)], null)], null)], null);
});
reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(sprint_thermometer.core.app,document.getElementById("app"));
