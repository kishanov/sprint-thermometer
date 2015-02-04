// Compiled by ClojureScript 0.0-2755 {}
goog.provide('sprint_thermometer.core');
goog.require('cljs.core');
goog.require('reagent_forms.core');
goog.require('reagent.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.browser.repl');
cljs.core.enable_console_print_BANG_();
sprint_thermometer.core.c_to_f = (function c_to_f(n){
return ((1.8 * n) + (32));
});
sprint_thermometer.core.thermometer = (function thermometer(data){
var enough_data_QMARK_ = ((cljs.core.constant$keyword$56.cljs$core$IFn$_invoke$arity$1(data) > (0))) && ((cljs.core.constant$keyword$57.cljs$core$IFn$_invoke$arity$1(data) > (0))) && ((cljs.core.constant$keyword$55.cljs$core$IFn$_invoke$arity$1(data) > (0))) && ((cljs.core.constant$keyword$54.cljs$core$IFn$_invoke$arity$1(data) > (0)));
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
var pvc_ratio = ((enough_data_QMARK_)?(function (){var x__4096__auto__ = ((100) - (((100) * (cljs.core.constant$keyword$54.cljs$core$IFn$_invoke$arity$1(data) / ((cljs.core.constant$keyword$55.cljs$core$IFn$_invoke$arity$1(data) / cljs.core.constant$keyword$56.cljs$core$IFn$_invoke$arity$1(data)) * cljs.core.constant$keyword$57.cljs$core$IFn$_invoke$arity$1(data)))) | (0)));
var y__4097__auto__ = ((440) - (366));
return ((x__4096__auto__ < y__4097__auto__) ? x__4096__auto__ : y__4097__auto__);
})():(0));
var status_color = (((pvc_ratio < (0)))?"blue":(((pvc_ratio === (0)))?"green":(((pvc_ratio < (10)))?"gold":(((pvc_ratio < (20)))?"orange":"red"
))));
var zero_y = (((440) - (366)) * notch_height);
var status_bar_y = (((((zero_y + margin) + border_width) + padding) + notches_margin_top) - (notch_height * pvc_ratio));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$58,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$59,"http://www.w3.org/2000/svg",cljs.core.constant$keyword$60,width,cljs.core.constant$keyword$61,height], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$64,margin,cljs.core.constant$keyword$65,margin,cljs.core.constant$keyword$60,(width - ((2) * margin)),cljs.core.constant$keyword$61,(height - ((2) * margin)),cljs.core.constant$keyword$66,cljs.core.quot(width,(6)),cljs.core.constant$keyword$67,cljs.core.quot(width,(6)),cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,border_color,cljs.core.constant$keyword$69,border_width,cljs.core.constant$keyword$70,"white"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$64,(cljs.core.quot(width,(2)) - cljs.core.quot(mercury_column_width,(2))),cljs.core.constant$keyword$65,((margin + border_width) + padding),cljs.core.constant$keyword$60,mercury_column_width,cljs.core.constant$keyword$61,mercury_column_height,cljs.core.constant$keyword$66,cljs.core.quot(mercury_column_width,(2)),cljs.core.constant$keyword$67,cljs.core.quot(mercury_column_width,(2)),cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,border_color,cljs.core.constant$keyword$69,mercury_border_width,cljs.core.constant$keyword$70,"#eee"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$71,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$64,(mercury_bubble_x + cljs.core.quot(notch_width,1.5)),cljs.core.constant$keyword$65,(((margin + border_width) + padding) + cljs.core.quot(notches_margin_top,(2)))], null),"C"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$71,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$64,(mercury_bubble_x - (1.2 * notch_width)),cljs.core.constant$keyword$65,(((margin + border_width) + padding) + cljs.core.quot(notches_margin_top,(2)))], null),"F"], null),(function (){var iter__4528__auto__ = ((function (enough_data_QMARK_,width,height,margin,padding,border_width,notches_margin_top,notch_width,notch_height,border_color,mercury_border_width,mercury_bubble_rx,mercury_bubble_y,mercury_bubble_x,mercury_column_width,mercury_column_height,pvc_ratio,status_color,zero_y,status_bar_y){
return (function iter__23975(s__23976){
return (new cljs.core.LazySeq(null,((function (enough_data_QMARK_,width,height,margin,padding,border_width,notches_margin_top,notch_width,notch_height,border_color,mercury_border_width,mercury_bubble_rx,mercury_bubble_y,mercury_bubble_x,mercury_column_width,mercury_column_height,pvc_ratio,status_color,zero_y,status_bar_y){
return (function (){
var s__23976__$1 = s__23976;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__23976__$1);
if(temp__4126__auto__){
var s__23976__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23976__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__23976__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__23978 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__23977 = (0);
while(true){
if((i__23977 < size__4527__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__23977);
cljs.core.chunk_append(b__23978,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$64,(cljs.core.quot(width,(2)) + mercury_column_width),cljs.core.constant$keyword$65,(((((i * (4)) + margin) + padding) + border_width) + notches_margin_top),cljs.core.constant$keyword$60,(((cljs.core.mod(i,(10)) === (0)))?((2) * notch_width):(((cljs.core.mod(i,(5)) === (0)))?(1.5 * notch_width):notch_width
)),cljs.core.constant$keyword$61,(2),cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$70,"#333"], null)], null)], null),(((cljs.core.mod(i,(10)) === (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$71,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$64,((cljs.core.quot(width,(2)) + mercury_column_width) + (2.5 * notch_width)),cljs.core.constant$keyword$65,((((((i * (4)) + margin) + padding) + border_width) + notches_margin_top) + (6)),cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$72,(16),cljs.core.constant$keyword$73,"bold"], null)], null),(function (){var G__23985 = "%.1f";
var G__23986 = (((440) - i) / (10));
return goog.string.format(G__23985,G__23986);
})()], null):null)], null));

var G__24003 = (i__23977 + (1));
i__23977 = G__24003;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23978),iter__23975(cljs.core.chunk_rest(s__23976__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23978),null);
}
} else {
var i = cljs.core.first(s__23976__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$64,(cljs.core.quot(width,(2)) + mercury_column_width),cljs.core.constant$keyword$65,(((((i * (4)) + margin) + padding) + border_width) + notches_margin_top),cljs.core.constant$keyword$60,(((cljs.core.mod(i,(10)) === (0)))?((2) * notch_width):(((cljs.core.mod(i,(5)) === (0)))?(1.5 * notch_width):notch_width
)),cljs.core.constant$keyword$61,(2),cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$70,"#333"], null)], null)], null),(((cljs.core.mod(i,(10)) === (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$71,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$64,((cljs.core.quot(width,(2)) + mercury_column_width) + (2.5 * notch_width)),cljs.core.constant$keyword$65,((((((i * (4)) + margin) + padding) + border_width) + notches_margin_top) + (6)),cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$72,(16),cljs.core.constant$keyword$73,"bold"], null)], null),(function (){var G__23987 = "%.1f";
var G__23988 = (((440) - i) / (10));
return goog.string.format(G__23987,G__23988);
})()], null):null)], null),iter__23975(cljs.core.rest(s__23976__$2)));
}
} else {
return null;
}
break;
}
});})(enough_data_QMARK_,width,height,margin,padding,border_width,notches_margin_top,notch_width,notch_height,border_color,mercury_border_width,mercury_bubble_rx,mercury_bubble_y,mercury_bubble_x,mercury_column_width,mercury_column_height,pvc_ratio,status_color,zero_y,status_bar_y))
,null,null));
});})(enough_data_QMARK_,width,height,margin,padding,border_width,notches_margin_top,notch_width,notch_height,border_color,mercury_border_width,mercury_bubble_rx,mercury_bubble_y,mercury_bubble_x,mercury_column_width,mercury_column_height,pvc_ratio,status_color,zero_y,status_bar_y))
;
return iter__4528__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((101)));
})(),(function (){var iter__4528__auto__ = ((function (enough_data_QMARK_,width,height,margin,padding,border_width,notches_margin_top,notch_width,notch_height,border_color,mercury_border_width,mercury_bubble_rx,mercury_bubble_y,mercury_bubble_x,mercury_column_width,mercury_column_height,pvc_ratio,status_color,zero_y,status_bar_y){
return (function iter__23989(s__23990){
return (new cljs.core.LazySeq(null,((function (enough_data_QMARK_,width,height,margin,padding,border_width,notches_margin_top,notch_width,notch_height,border_color,mercury_border_width,mercury_bubble_rx,mercury_bubble_y,mercury_bubble_x,mercury_column_width,mercury_column_height,pvc_ratio,status_color,zero_y,status_bar_y){
return (function (){
var s__23990__$1 = s__23990;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__23990__$1);
if(temp__4126__auto__){
var s__23990__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23990__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__23990__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__23992 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__23991 = (0);
while(true){
if((i__23991 < size__4527__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__23991);
cljs.core.chunk_append(b__23992,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$64,((cljs.core.quot(width,(2)) - mercury_column_width) - (((cljs.core.mod(i,(10)) === (0)))?((2) * notch_width):(((cljs.core.mod(i,(5)) === (0)))?(1.5 * notch_width):notch_width
))),cljs.core.constant$keyword$65,(((((i * (4)) + margin) + padding) + border_width) + notches_margin_top),cljs.core.constant$keyword$60,(((cljs.core.mod(i,(10)) === (0)))?((2) * notch_width):(((cljs.core.mod(i,(5)) === (0)))?(1.5 * notch_width):notch_width
)),cljs.core.constant$keyword$61,(2),cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$70,"#333"], null)], null)], null),(((cljs.core.mod(i,(10)) === (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$71,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$64,((cljs.core.quot(width,(2)) - mercury_column_width) - ((4) * notch_width)),cljs.core.constant$keyword$65,((((((i * (4)) + margin) + padding) + border_width) + notches_margin_top) + (6)),cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$72,(16),cljs.core.constant$keyword$73,"bold"], null)], null),(function (){var G__23999 = "%.1f";
var G__24000 = sprint_thermometer.core.c_to_f((((440) - i) / (10)));
return goog.string.format(G__23999,G__24000);
})()], null):null)], null));

var G__24004 = (i__23991 + (1));
i__23991 = G__24004;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23992),iter__23989(cljs.core.chunk_rest(s__23990__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23992),null);
}
} else {
var i = cljs.core.first(s__23990__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$64,((cljs.core.quot(width,(2)) - mercury_column_width) - (((cljs.core.mod(i,(10)) === (0)))?((2) * notch_width):(((cljs.core.mod(i,(5)) === (0)))?(1.5 * notch_width):notch_width
))),cljs.core.constant$keyword$65,(((((i * (4)) + margin) + padding) + border_width) + notches_margin_top),cljs.core.constant$keyword$60,(((cljs.core.mod(i,(10)) === (0)))?((2) * notch_width):(((cljs.core.mod(i,(5)) === (0)))?(1.5 * notch_width):notch_width
)),cljs.core.constant$keyword$61,(2),cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$70,"#333"], null)], null)], null),(((cljs.core.mod(i,(10)) === (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$71,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$64,((cljs.core.quot(width,(2)) - mercury_column_width) - ((4) * notch_width)),cljs.core.constant$keyword$65,((((((i * (4)) + margin) + padding) + border_width) + notches_margin_top) + (6)),cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$72,(16),cljs.core.constant$keyword$73,"bold"], null)], null),(function (){var G__24001 = "%.1f";
var G__24002 = sprint_thermometer.core.c_to_f((((440) - i) / (10)));
return goog.string.format(G__24001,G__24002);
})()], null):null)], null),iter__23989(cljs.core.rest(s__23990__$2)));
}
} else {
return null;
}
break;
}
});})(enough_data_QMARK_,width,height,margin,padding,border_width,notches_margin_top,notch_width,notch_height,border_color,mercury_border_width,mercury_bubble_rx,mercury_bubble_y,mercury_bubble_x,mercury_column_width,mercury_column_height,pvc_ratio,status_color,zero_y,status_bar_y))
,null,null));
});})(enough_data_QMARK_,width,height,margin,padding,border_width,notches_margin_top,notch_width,notch_height,border_color,mercury_border_width,mercury_bubble_rx,mercury_bubble_y,mercury_bubble_x,mercury_column_width,mercury_column_height,pvc_ratio,status_color,zero_y,status_bar_y))
;
return iter__4528__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((101)));
})(),((enough_data_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$64,(((cljs.core.quot(width,(2)) - cljs.core.quot(mercury_column_width,(2))) - (1)) + mercury_border_width),cljs.core.constant$keyword$65,status_bar_y,cljs.core.constant$keyword$60,((mercury_column_width - (mercury_border_width * (2))) + (2)),cljs.core.constant$keyword$61,(mercury_bubble_y - status_bar_y),cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$70,status_color], null)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$74,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$75,mercury_bubble_x,cljs.core.constant$keyword$76,mercury_bubble_y,cljs.core.constant$keyword$77,(15),cljs.core.constant$keyword$38,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$68,border_color,cljs.core.constant$keyword$69,mercury_border_width,cljs.core.constant$keyword$70,status_color], null)], null)], null)], null)], null);
});
sprint_thermometer.core.form_template = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$177,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$184], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$85,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$130,cljs.core.constant$keyword$129,cljs.core.constant$keyword$86,cljs.core.constant$keyword$56], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$153,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$49,"sprint-duration"], null),"Sprint Duration, Days"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$177,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$182], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$85,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$130,cljs.core.constant$keyword$129,cljs.core.constant$keyword$86,cljs.core.constant$keyword$57], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$153,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$49,"sprint-day-number"], null),"Sprint Day Number"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$177,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$180], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$85,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$130,cljs.core.constant$keyword$129,cljs.core.constant$keyword$86,cljs.core.constant$keyword$55], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$153,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$49,"planned"], null),"Planned Tasks Count"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$177,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$181], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$85,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$130,cljs.core.constant$keyword$129,cljs.core.constant$keyword$86,cljs.core.constant$keyword$54], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$153,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$49,"completed"], null),"Completed Tasks Count"], null)], null)], null);
sprint_thermometer.core.app = (function app(){
var doc = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return ((function (doc){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$80,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$183,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$83,"Sprint Params"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,sprint_thermometer.core.form_template,doc], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$183,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$83,"Data Interpretation"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$153,[cljs.core.str((function (){var G__24007 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24007) : cljs.core.deref.call(null,G__24007));
})())].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$183,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$83,"Thermometer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sprint_thermometer.core.thermometer,(function (){var G__24008 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24008) : cljs.core.deref.call(null,G__24008));
})()], null)], null)], null);
});
;})(doc))
});
reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sprint_thermometer.core.app], null),document.getElementById("app"));
