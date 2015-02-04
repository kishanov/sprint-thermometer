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
var enough_data_QMARK_ = ((cljs.core.constant$keyword$142.cljs$core$IFn$_invoke$arity$1(data) > (0))) && ((cljs.core.constant$keyword$143.cljs$core$IFn$_invoke$arity$1(data) > (0))) && ((cljs.core.constant$keyword$144.cljs$core$IFn$_invoke$arity$1(data) > (0))) && ((cljs.core.constant$keyword$145.cljs$core$IFn$_invoke$arity$1(data) > (0)));
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
var max_temperature = (440);
var min_temperature = (341);
var normal_temperature = (366);
var notches_count = (max_temperature - min_temperature);
var pvc_ratio = ((enough_data_QMARK_)?(function (){var x__4089__auto__ = (function (){var x__4096__auto__ = (notches_count - (((100) * (cljs.core.constant$keyword$145.cljs$core$IFn$_invoke$arity$1(data) / ((cljs.core.constant$keyword$144.cljs$core$IFn$_invoke$arity$1(data) / cljs.core.constant$keyword$142.cljs$core$IFn$_invoke$arity$1(data)) * cljs.core.constant$keyword$143.cljs$core$IFn$_invoke$arity$1(data)))) | (0)));
var y__4097__auto__ = (max_temperature - normal_temperature);
return ((x__4096__auto__ < y__4097__auto__) ? x__4096__auto__ : y__4097__auto__);
})();
var y__4090__auto__ = (min_temperature - normal_temperature);
return ((x__4089__auto__ > y__4090__auto__) ? x__4089__auto__ : y__4090__auto__);
})():(0));
var status_color = (((pvc_ratio < (0)))?"blue":(((pvc_ratio === (0)))?"green":(((pvc_ratio < (10)))?"gold":(((pvc_ratio < (20)))?"orange":"red"
))));
var zero_y = ((max_temperature - normal_temperature) * notch_height);
var status_bar_y = (((((zero_y + margin) + border_width) + padding) + notches_margin_top) - (notch_height * pvc_ratio));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$146,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$147,"http://www.w3.org/2000/svg",cljs.core.constant$keyword$148,width,cljs.core.constant$keyword$149,height], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$150,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$151,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$152,margin,cljs.core.constant$keyword$153,margin,cljs.core.constant$keyword$148,(width - ((2) * margin)),cljs.core.constant$keyword$149,(height - ((2) * margin)),cljs.core.constant$keyword$154,cljs.core.quot(width,(6)),cljs.core.constant$keyword$155,cljs.core.quot(width,(6)),cljs.core.constant$keyword$23,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$156,border_color,cljs.core.constant$keyword$157,border_width,cljs.core.constant$keyword$158,"white"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$151,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$152,(cljs.core.quot(width,(2)) - cljs.core.quot(mercury_column_width,(2))),cljs.core.constant$keyword$153,((margin + border_width) + padding),cljs.core.constant$keyword$148,mercury_column_width,cljs.core.constant$keyword$149,mercury_column_height,cljs.core.constant$keyword$154,cljs.core.quot(mercury_column_width,(2)),cljs.core.constant$keyword$155,cljs.core.quot(mercury_column_width,(2)),cljs.core.constant$keyword$23,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$156,border_color,cljs.core.constant$keyword$157,mercury_border_width,cljs.core.constant$keyword$158,"#eee"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$93,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$152,(mercury_bubble_x + cljs.core.quot(notch_width,1.5)),cljs.core.constant$keyword$153,(((margin + border_width) + padding) + cljs.core.quot(notches_margin_top,(2)))], null),"C"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$93,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$152,(mercury_bubble_x - (1.2 * notch_width)),cljs.core.constant$keyword$153,(((margin + border_width) + padding) + cljs.core.quot(notches_margin_top,(2)))], null),"F"], null),(function (){var iter__4528__auto__ = ((function (enough_data_QMARK_,width,height,margin,padding,border_width,notches_margin_top,notch_width,notch_height,border_color,mercury_border_width,mercury_bubble_rx,mercury_bubble_y,mercury_bubble_x,mercury_column_width,mercury_column_height,max_temperature,min_temperature,normal_temperature,notches_count,pvc_ratio,status_color,zero_y,status_bar_y){
return (function iter__23162(s__23163){
return (new cljs.core.LazySeq(null,((function (enough_data_QMARK_,width,height,margin,padding,border_width,notches_margin_top,notch_width,notch_height,border_color,mercury_border_width,mercury_bubble_rx,mercury_bubble_y,mercury_bubble_x,mercury_column_width,mercury_column_height,max_temperature,min_temperature,normal_temperature,notches_count,pvc_ratio,status_color,zero_y,status_bar_y){
return (function (){
var s__23163__$1 = s__23163;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__23163__$1);
if(temp__4126__auto__){
var s__23163__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23163__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__23163__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__23165 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__23164 = (0);
while(true){
if((i__23164 < size__4527__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__23164);
cljs.core.chunk_append(b__23165,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$150,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$151,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$152,(cljs.core.quot(width,(2)) + mercury_column_width),cljs.core.constant$keyword$153,(((((i * (4)) + margin) + padding) + border_width) + notches_margin_top),cljs.core.constant$keyword$148,(((cljs.core.mod(i,(10)) === (0)))?((2) * notch_width):(((cljs.core.mod(i,(5)) === (0)))?(1.5 * notch_width):notch_width
)),cljs.core.constant$keyword$149,(2),cljs.core.constant$keyword$23,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$158,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(max_temperature - normal_temperature)))?"red":"#333")], null)], null)], null),(((cljs.core.mod(i,(10)) === (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$93,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$152,((cljs.core.quot(width,(2)) + mercury_column_width) + (2.2 * notch_width)),cljs.core.constant$keyword$153,((((((i * (4)) + margin) + padding) + border_width) + notches_margin_top) + (6)),cljs.core.constant$keyword$23,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$159,(16),cljs.core.constant$keyword$160,"bold"], null)], null),(function (){var G__23172 = "%.1f";
var G__23173 = ((max_temperature - i) / (10));
return goog.string.format(G__23172,G__23173);
})()], null):null)], null));

var G__23190 = (i__23164 + (1));
i__23164 = G__23190;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23165),iter__23162(cljs.core.chunk_rest(s__23163__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23165),null);
}
} else {
var i = cljs.core.first(s__23163__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$150,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$151,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$152,(cljs.core.quot(width,(2)) + mercury_column_width),cljs.core.constant$keyword$153,(((((i * (4)) + margin) + padding) + border_width) + notches_margin_top),cljs.core.constant$keyword$148,(((cljs.core.mod(i,(10)) === (0)))?((2) * notch_width):(((cljs.core.mod(i,(5)) === (0)))?(1.5 * notch_width):notch_width
)),cljs.core.constant$keyword$149,(2),cljs.core.constant$keyword$23,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$158,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(max_temperature - normal_temperature)))?"red":"#333")], null)], null)], null),(((cljs.core.mod(i,(10)) === (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$93,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$152,((cljs.core.quot(width,(2)) + mercury_column_width) + (2.2 * notch_width)),cljs.core.constant$keyword$153,((((((i * (4)) + margin) + padding) + border_width) + notches_margin_top) + (6)),cljs.core.constant$keyword$23,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$159,(16),cljs.core.constant$keyword$160,"bold"], null)], null),(function (){var G__23174 = "%.1f";
var G__23175 = ((max_temperature - i) / (10));
return goog.string.format(G__23174,G__23175);
})()], null):null)], null),iter__23162(cljs.core.rest(s__23163__$2)));
}
} else {
return null;
}
break;
}
});})(enough_data_QMARK_,width,height,margin,padding,border_width,notches_margin_top,notch_width,notch_height,border_color,mercury_border_width,mercury_bubble_rx,mercury_bubble_y,mercury_bubble_x,mercury_column_width,mercury_column_height,max_temperature,min_temperature,normal_temperature,notches_count,pvc_ratio,status_color,zero_y,status_bar_y))
,null,null));
});})(enough_data_QMARK_,width,height,margin,padding,border_width,notches_margin_top,notch_width,notch_height,border_color,mercury_border_width,mercury_bubble_rx,mercury_bubble_y,mercury_bubble_x,mercury_column_width,mercury_column_height,max_temperature,min_temperature,normal_temperature,notches_count,pvc_ratio,status_color,zero_y,status_bar_y))
;
return iter__4528__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((notches_count + (1))));
})(),(function (){var iter__4528__auto__ = ((function (enough_data_QMARK_,width,height,margin,padding,border_width,notches_margin_top,notch_width,notch_height,border_color,mercury_border_width,mercury_bubble_rx,mercury_bubble_y,mercury_bubble_x,mercury_column_width,mercury_column_height,max_temperature,min_temperature,normal_temperature,notches_count,pvc_ratio,status_color,zero_y,status_bar_y){
return (function iter__23176(s__23177){
return (new cljs.core.LazySeq(null,((function (enough_data_QMARK_,width,height,margin,padding,border_width,notches_margin_top,notch_width,notch_height,border_color,mercury_border_width,mercury_bubble_rx,mercury_bubble_y,mercury_bubble_x,mercury_column_width,mercury_column_height,max_temperature,min_temperature,normal_temperature,notches_count,pvc_ratio,status_color,zero_y,status_bar_y){
return (function (){
var s__23177__$1 = s__23177;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__23177__$1);
if(temp__4126__auto__){
var s__23177__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23177__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__23177__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__23179 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__23178 = (0);
while(true){
if((i__23178 < size__4527__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__23178);
cljs.core.chunk_append(b__23179,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$150,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$151,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$152,((cljs.core.quot(width,(2)) - mercury_column_width) - (((cljs.core.mod(i,(10)) === (0)))?((2) * notch_width):(((cljs.core.mod(i,(5)) === (0)))?(1.5 * notch_width):notch_width
))),cljs.core.constant$keyword$153,(((((i * (4)) + margin) + padding) + border_width) + notches_margin_top),cljs.core.constant$keyword$148,(((cljs.core.mod(i,(10)) === (0)))?((2) * notch_width):(((cljs.core.mod(i,(5)) === (0)))?(1.5 * notch_width):notch_width
)),cljs.core.constant$keyword$149,(2),cljs.core.constant$keyword$23,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$158,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(max_temperature - normal_temperature)))?"red":"#333")], null)], null)], null),(((cljs.core.mod(i,(10)) === (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$93,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$152,((cljs.core.quot(width,(2)) - mercury_column_width) - (2.2 * notch_width)),cljs.core.constant$keyword$153,((((((i * (4)) + margin) + padding) + border_width) + notches_margin_top) + (6)),cljs.core.constant$keyword$188,"end",cljs.core.constant$keyword$23,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$159,(16),cljs.core.constant$keyword$160,"bold"], null)], null),(function (){var G__23186 = "%.1f";
var G__23187 = sprint_thermometer.core.c_to_f(((max_temperature - i) / (10)));
return goog.string.format(G__23186,G__23187);
})()], null):null)], null));

var G__23191 = (i__23178 + (1));
i__23178 = G__23191;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23179),iter__23176(cljs.core.chunk_rest(s__23177__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23179),null);
}
} else {
var i = cljs.core.first(s__23177__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$150,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$151,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$152,((cljs.core.quot(width,(2)) - mercury_column_width) - (((cljs.core.mod(i,(10)) === (0)))?((2) * notch_width):(((cljs.core.mod(i,(5)) === (0)))?(1.5 * notch_width):notch_width
))),cljs.core.constant$keyword$153,(((((i * (4)) + margin) + padding) + border_width) + notches_margin_top),cljs.core.constant$keyword$148,(((cljs.core.mod(i,(10)) === (0)))?((2) * notch_width):(((cljs.core.mod(i,(5)) === (0)))?(1.5 * notch_width):notch_width
)),cljs.core.constant$keyword$149,(2),cljs.core.constant$keyword$23,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$158,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(max_temperature - normal_temperature)))?"red":"#333")], null)], null)], null),(((cljs.core.mod(i,(10)) === (0)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$93,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$152,((cljs.core.quot(width,(2)) - mercury_column_width) - (2.2 * notch_width)),cljs.core.constant$keyword$153,((((((i * (4)) + margin) + padding) + border_width) + notches_margin_top) + (6)),cljs.core.constant$keyword$188,"end",cljs.core.constant$keyword$23,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$159,(16),cljs.core.constant$keyword$160,"bold"], null)], null),(function (){var G__23188 = "%.1f";
var G__23189 = sprint_thermometer.core.c_to_f(((max_temperature - i) / (10)));
return goog.string.format(G__23188,G__23189);
})()], null):null)], null),iter__23176(cljs.core.rest(s__23177__$2)));
}
} else {
return null;
}
break;
}
});})(enough_data_QMARK_,width,height,margin,padding,border_width,notches_margin_top,notch_width,notch_height,border_color,mercury_border_width,mercury_bubble_rx,mercury_bubble_y,mercury_bubble_x,mercury_column_width,mercury_column_height,max_temperature,min_temperature,normal_temperature,notches_count,pvc_ratio,status_color,zero_y,status_bar_y))
,null,null));
});})(enough_data_QMARK_,width,height,margin,padding,border_width,notches_margin_top,notch_width,notch_height,border_color,mercury_border_width,mercury_bubble_rx,mercury_bubble_y,mercury_bubble_x,mercury_column_width,mercury_column_height,max_temperature,min_temperature,normal_temperature,notches_count,pvc_ratio,status_color,zero_y,status_bar_y))
;
return iter__4528__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((notches_count + (1))));
})(),((enough_data_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$151,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$152,(((cljs.core.quot(width,(2)) - cljs.core.quot(mercury_column_width,(2))) - (1)) + mercury_border_width),cljs.core.constant$keyword$153,status_bar_y,cljs.core.constant$keyword$148,((mercury_column_width - (mercury_border_width * (2))) + (2)),cljs.core.constant$keyword$149,(mercury_bubble_y - status_bar_y),cljs.core.constant$keyword$23,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$158,status_color], null)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$161,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$162,mercury_bubble_x,cljs.core.constant$keyword$163,mercury_bubble_y,cljs.core.constant$keyword$164,(15),cljs.core.constant$keyword$23,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$156,border_color,cljs.core.constant$keyword$157,mercury_border_width,cljs.core.constant$keyword$158,((enough_data_QMARK_)?status_color:"#eee")], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$151,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$152,(cljs.core.quot(width,(2)) - ((4) * mercury_column_width)),cljs.core.constant$keyword$153,((((((max_temperature - normal_temperature) * (4)) + margin) + padding) + border_width) + notches_margin_top),cljs.core.constant$keyword$148,((8) * mercury_column_width),cljs.core.constant$keyword$149,(2),cljs.core.constant$keyword$23,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$158,"red"], null)], null)], null)], null);
});
sprint_thermometer.core.form_row = (function form_row(form_entry){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$171,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$181,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$166,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$182,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$22,cljs.core.constant$keyword$183.cljs$core$IFn$_invoke$arity$1(form_entry)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$130,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$92,cljs.core.constant$keyword$91,cljs.core.constant$keyword$99,cljs.core.constant$keyword$99.cljs$core$IFn$_invoke$arity$1(form_entry)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$117,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$34,cljs.core.name(cljs.core.constant$keyword$99.cljs$core$IFn$_invoke$arity$1(form_entry))], null),cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(form_entry)], null)], null)], null)], null);
});
sprint_thermometer.core.form_template = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$165,(function (){var iter__4528__auto__ = (function iter__23192(s__23193){
return (new cljs.core.LazySeq(null,(function (){
var s__23193__$1 = s__23193;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__23193__$1);
if(temp__4126__auto__){
var s__23193__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23193__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__23193__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__23195 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__23194 = (0);
while(true){
if((i__23194 < size__4527__auto__)){
var form_entry = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__23194);
cljs.core.chunk_append(b__23195,sprint_thermometer.core.form_row(form_entry));

var G__23198 = (i__23194 + (1));
i__23194 = G__23198;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23195),iter__23192(cljs.core.chunk_rest(s__23193__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23195),null);
}
} else {
var form_entry = cljs.core.first(s__23193__$2);
return cljs.core.cons(sprint_thermometer.core.form_row(form_entry),iter__23192(cljs.core.rest(s__23193__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4528__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$99,cljs.core.constant$keyword$142,cljs.core.constant$keyword$117,"Sprint Duration, Days",cljs.core.constant$keyword$183,"mdi-action-today"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$99,cljs.core.constant$keyword$143,cljs.core.constant$keyword$117,"Sprint Day Number",cljs.core.constant$keyword$183,"mdi-action-schedule"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$99,cljs.core.constant$keyword$144,cljs.core.constant$keyword$117,"Planned Tasks Count",cljs.core.constant$keyword$183,"mdi-action-assignment"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$99,cljs.core.constant$keyword$145,cljs.core.constant$keyword$117,"Completed Tasks Count",cljs.core.constant$keyword$183,"mdi-action-done-all"], null)], null));
})()], null);
sprint_thermometer.core.legend = (function legend(data){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$84,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$171,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$177,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$171,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$175,"Expected Task Resolution Ratio"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$171,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,"(Planned Tasks Count / Sprint Duration)"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$172,(cljs.core.truth_((function (){var and__3760__auto__ = cljs.core.constant$keyword$142.cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__3760__auto__)){
return cljs.core.constant$keyword$144.cljs$core$IFn$_invoke$arity$1(data);
} else {
return and__3760__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$176,(function (){var G__23205 = "%.1f";
var G__23206 = (cljs.core.constant$keyword$144.cljs$core$IFn$_invoke$arity$1(data) / cljs.core.constant$keyword$142.cljs$core$IFn$_invoke$arity$1(data));
return goog.string.format(G__23205,G__23206);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$186,"N/A"], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$171,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$177,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$171,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$175,"Expected Completion Count (to date)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$171,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,"(Expected Task Resolution Ratio * Sprint Day Number)"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$172,(cljs.core.truth_((function (){var and__3760__auto__ = cljs.core.constant$keyword$142.cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__3760__auto__)){
var and__3760__auto____$1 = cljs.core.constant$keyword$144.cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__3760__auto____$1)){
return cljs.core.constant$keyword$143.cljs$core$IFn$_invoke$arity$1(data);
} else {
return and__3760__auto____$1;
}
} else {
return and__3760__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$176,(function (){var G__23207 = "%.1f";
var G__23208 = (cljs.core.constant$keyword$143.cljs$core$IFn$_invoke$arity$1(data) * (cljs.core.constant$keyword$144.cljs$core$IFn$_invoke$arity$1(data) / cljs.core.constant$keyword$142.cljs$core$IFn$_invoke$arity$1(data)));
return goog.string.format(G__23207,G__23208);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$186,"N/A"], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$171,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$177,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$171,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$175,"Completion Percentage, %"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$171,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,"(Expected Completion Count / Actually Completed)"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$172,(cljs.core.truth_((function (){var and__3760__auto__ = cljs.core.constant$keyword$142.cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__3760__auto__)){
var and__3760__auto____$1 = cljs.core.constant$keyword$144.cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__3760__auto____$1)){
var and__3760__auto____$2 = cljs.core.constant$keyword$143.cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__3760__auto____$2)){
return cljs.core.constant$keyword$145.cljs$core$IFn$_invoke$arity$1(data);
} else {
return and__3760__auto____$2;
}
} else {
return and__3760__auto____$1;
}
} else {
return and__3760__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$176,(function (){var G__23209 = "%.2f";
var G__23210 = ((100) * (cljs.core.constant$keyword$145.cljs$core$IFn$_invoke$arity$1(data) / (cljs.core.constant$keyword$143.cljs$core$IFn$_invoke$arity$1(data) * (cljs.core.constant$keyword$144.cljs$core$IFn$_invoke$arity$1(data) / cljs.core.constant$keyword$142.cljs$core$IFn$_invoke$arity$1(data)))));
return goog.string.format(G__23209,G__23210);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$186,"N/A"], null))], null)], null)], null);
});
sprint_thermometer.core.app = (function app(){
var doc = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return ((function (doc){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$171,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$172,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$173,"Sprint Params"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,sprint_thermometer.core.form_template,doc], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$172,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$173,"Data Interpretation"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sprint_thermometer.core.legend,(function (){var G__23213 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23213) : cljs.core.deref.call(null,G__23213));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$172,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$173,"Thermometer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sprint_thermometer.core.thermometer,(function (){var G__23214 = doc;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23214) : cljs.core.deref.call(null,G__23214));
})()], null)], null)], null);
});
;})(doc))
});
reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sprint_thermometer.core.app], null),document.getElementById("app"));
