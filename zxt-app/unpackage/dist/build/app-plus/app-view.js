var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190312_syb_scopedata*/window.__wcc_version__='v0.5vv_20190312_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'btn'])
Z([[6],[[7],[3,'$slots']],[3,'default']])
Z([3,'提交'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'enter-panel'])
Z([3,'panel-header'])
Z([[2,'+'],[[2,'+'],[1,'background:'],[[7],[3,'bgColor']]],[1,';']])
Z([3,'title'])
Z([a,[[7],[3,'panelTitle']]])
Z([3,'more'])
Z([3,'查看更多'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'answer-input'])
Z([3,'question'])
Z([a,[[6],[[7],[3,'data']],[3,'question']]])
Z([[2,'&&'],[[2,'&&'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'data']],[3,'type']],[1,1]],[[2,'=='],[[6],[[7],[3,'data']],[3,'type']],[1,2]]],[[6],[[7],[3,'data']],[3,'options']]],[[2,'>'],[[6],[[6],[[7],[3,'data']],[3,'options']],[3,'length']],[1,0]]])
Z([3,'options'])
Z([3,'index'])
Z([3,'answer'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[5])
Z([3,'__e'])
Z([[4],[[5],[[5],[[5],[[5],[1,'option']],[[2,'?:'],[[6],[[7],[3,'selectedOption']],[[7],[3,'index']]],[1,'selected'],[1,'']]],[[2,'?:'],[[6],[[7],[3,'correctOption']],[[7],[3,'index']]],[1,'correct'],[1,'']]],[[2,'?:'],[[6],[[7],[3,'wrongOption']],[[7],[3,'index']]],[1,'wrong'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'selectOption']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([3,'option-num'])
Z([a,[[6],[[7],[3,'answer']],[3,'m0']]])
Z([3,'option-answer'])
Z([a,[[6],[[7],[3,'answer']],[3,'$orig']]])
Z([[2,'&&'],[[2,'=='],[[7],[3,'status']],[1,'notdeal']],[[2,'||'],[[2,'=='],[[6],[[7],[3,'data']],[3,'type']],[1,3]],[[2,'=='],[[6],[[7],[3,'data']],[3,'type']],[1,4]]]])
Z([3,'jieda-answer'])
Z(z[9])
Z([[4],[[5],[[5],[[5],[1,'answer-upload answer-by-input']],[[2,'?:'],[[2,'=='],[[7],[3,'inputType']],[1,1]],[1,'inputing'],[1,'']]],[[2,'?:'],[[2,'=='],[[7],[3,'inputType']],[1,2]],[1,'unwrite'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changeInputType']],[[4],[[5],[1,1]]]]]]]]]]])
Z([[2,'!='],[[7],[3,'inputType']],[1,1]])
Z([3,'title'])
Z([3,'直接填写答案'])
Z([[2,'=='],[[7],[3,'inputType']],[1,1]])
Z(z[9])
Z(z[9])
Z([3,'uni-input vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[1,'onKeyInput']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'blur']],[[4],[[5],[[4],[[5],[1,'resetInputType']]]]]]]]])
Z([3,'answerinput'])
Z([[2,'?:'],[[2,'=='],[[7],[3,'inputType']],[1,1]],[1,true],[1,false]])
Z([3,'输入答案'])
Z([[2,'!='],[[7],[3,'inputType']],[1,2]])
Z(z[9])
Z([[4],[[5],[[5],[1,'answer-upload answer-by-img']],[[2,'?:'],[[2,'!='],[[7],[3,'inputValue']],[1,'']],[1,'unwrite'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changeInputType']],[[4],[[5],[1,2]]]]]]]]]]])
Z(z[22])
Z([3,'拍照上传答案'])
Z([[2,'=='],[[7],[3,'inputType']],[1,2]])
Z([3,'answer-img'])
Z([3,'返回图片'])
Z([[2,'&&'],[[2,'!='],[[7],[3,'status']],[1,'notdeal']],[[2,'||'],[[2,'=='],[[6],[[7],[3,'data']],[3,'type']],[1,3]],[[2,'=='],[[6],[[7],[3,'data']],[3,'type']],[1,4]]]])
Z([3,'jieda-answer-noreview'])
Z(z[22])
Z([3,'【填写答案】'])
Z(z[6])
Z([a,[[2,'?:'],[[2,'=='],[[6],[[6],[[7],[3,'data']],[3,'studentAnswer']],[3,'answer']],[1,'']],[1,'未作答'],[[6],[[6],[[7],[3,'data']],[3,'studentAnswer']],[3,'answer']]]])
Z([[2,'&&'],[[2,'=='],[[7],[3,'status']],[1,'haveReview']],[[2,'!='],[[6],[[7],[3,'data']],[3,'type']],[1,5]]])
Z([3,'teacherword-anlysis'])
Z([[4],[[5],[[5],[[5],[1,'ifcorrect-pic']],[[2,'?:'],[[6],[[7],[3,'data']],[3,'ifCorrect']],[1,'correct'],[1,'']]],[[2,'?:'],[[2,'!'],[[6],[[7],[3,'data']],[3,'ifCorrect']]],[1,'wrong'],[1,'']]]])
Z([3,'line-block'])
Z(z[22])
Z([3,'【老师批改】:'])
Z([3,'content'])
Z([3,'错误'])
Z(z[50])
Z(z[22])
Z([3,'【老师评语】:'])
Z(z[53])
Z([3,'看清楚题目'])
Z(z[50])
Z(z[22])
Z([3,'【文字解析】:'])
Z(z[53])
Z([3,'略'])
Z(z[50])
Z(z[22])
Z([3,'【视频解析】:'])
Z(z[53])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'subquestion-box'])
Z([3,'subquestion-title'])
Z([3,'test-num'])
Z([a,[[2,'+'],[[2,'+'],[1,'第'],[[7],[3,'currentNum']]],[1,'题']]])
Z([3,'test-current'])
Z([a,[[7],[3,'currentNum']]])
Z([3,'test-totalnum'])
Z([a,[[2,'+'],[1,'/'],[[6],[[6],[[7],[3,'data']],[3,'subquestion']],[3,'length']]]])
Z([3,'__e'])
Z([3,'swiper'])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'swiperChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'indicatorDots']])
Z([[7],[3,'interval']])
Z([3,'height:100%;overflow-y:scroll;'])
Z([3,'index'])
Z([3,'test'])
Z([[6],[[7],[3,'data']],[3,'subquestion']])
Z(z[14])
Z([3,'test-content'])
Z([3,'__l'])
Z(z[8])
Z([[7],[3,'test']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^changeAnswer']],[[4],[[5],[[4],[[5],[1,'changeAnswer']]]]]]]]])
Z([[7],[3,'status']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'mix-list-cell']],[[7],[3,'border']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'eventClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'cell-hover'])
Z([1,50])
Z([[7],[3,'icon']])
Z([[4],[[5],[[5],[1,'cell-icon yticon']],[[7],[3,'icon']]]])
Z([[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'iconColor']]],[1,';']])
Z([3,'cell-tit clamp'])
Z([a,[[7],[3,'title']]])
Z([[7],[3,'tips']])
Z([3,'cell-tip'])
Z([a,[[7],[3,'tips']]])
Z([[4],[[5],[[5],[1,'cell-more yticon']],[[6],[[7],[3,'typeList']],[[7],[3,'navigateType']]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-numbox'])
Z([3,'__e'])
Z([3,'uni-numbox-minus'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'_calcValue']],[[4],[[5],[1,'subtract']]]]]]]]]]])
Z([[4],[[5],[[5],[1,'yticon icon--jianhao']],[[2,'?:'],[[7],[3,'minDisabled']],[1,'uni-numbox-disabled'],[1,'']]]])
Z(z[1])
Z([3,'uni-numbox-value'])
Z([[4],[[5],[[4],[[5],[[5],[1,'blur']],[[4],[[5],[[4],[[5],[[5],[1,'_onBlur']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'disabled']])
Z([3,'number'])
Z([[7],[3,'inputValue']])
Z(z[1])
Z([3,'uni-numbox-plus'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'_calcValue']],[[4],[[5],[1,'add']]]]]]]]]]])
Z([[4],[[5],[[5],[1,'yticon icon-jia2']],[[2,'?:'],[[7],[3,'maxDisabled']],[1,'uni-numbox-disabled'],[1,'']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[1,'wrong-test']],[[2,'?:'],[[7],[3,'selectShow']],[1,'choosing'],[1,'']]]])
Z([3,'choose-area'])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'choose-btn']],[[2,'?:'],[[7],[3,'isSelect']],[1,'is-select'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'chooseThis']],[[4],[[5],[1,'$0']]]],[[4],[[5],[1,'data.id']]]]]]]]]]])
Z([[2,'!'],[[7],[3,'selectShow']]])
Z([3,'time'])
Z([3,'2019.07.15'])
Z([3,'question'])
Z([3,'下列图形中，阴影部分的面积为2的有（    ）个'])
Z([[2,'&&'],[[2,'&&'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'data']],[3,'type']],[1,1]],[[2,'=='],[[6],[[7],[3,'data']],[3,'type']],[1,2]]],[[6],[[7],[3,'data']],[3,'options']]],[[2,'>'],[[6],[[6],[[7],[3,'data']],[3,'options']],[3,'length']],[1,0]]])
Z([3,'options'])
Z([3,'index'])
Z([3,'answer'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[12])
Z([3,'option'])
Z([3,'option-num'])
Z([a,[[6],[[7],[3,'answer']],[3,'m0']]])
Z([3,'option-answer'])
Z([a,[[6],[[7],[3,'answer']],[3,'$orig']]])
Z([3,'teacherword-anlysis'])
Z([[2,'!'],[[2,'!'],[[7],[3,'selectShow']]]])
Z([3,'line-block'])
Z([3,'answer-title'])
Z([3,'正确答案 :'])
Z([3,'correct content'])
Z([3,'12'])
Z(z[23])
Z(z[24])
Z([3,'您的答案 :'])
Z([3,'wrong content'])
Z(z[27])
Z(z[23])
Z([3,'answer-result answer-title'])
Z([3,'回答:'])
Z([3,'content'])
Z([3,'错误'])
Z([3,'anlysis'])
Z(z[23])
Z([3,'title'])
Z([3,'【文字解析】:'])
Z(z[36])
Z([3,'略'])
Z(z[23])
Z(z[40])
Z([3,'【视频解析】:'])
Z(z[36])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[2,'||'],[[2,'!'],[[7],[3,'hasLogin']]],[[2,'==='],[[7],[3,'empty']],[1,true]]])
Z([3,'empty'])
Z([3,'aspectFit'])
Z([3,'/static/emptyCart.jpg'])
Z([[7],[3,'hasLogin']])
Z([3,'empty-tips'])
Z([3,'空空如也'])
Z(z[5])
Z([3,'navigator'])
Z([3,'switchTab'])
Z([3,'../index/index'])
Z([3,'随便逛逛\x3e'])
Z(z[6])
Z(z[7])
Z([3,'__e'])
Z(z[9])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'navToLogin']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'去登陆\x3e'])
Z([3,'cart-list'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'cartList']])
Z([3,'id'])
Z([[4],[[5],[[5],[1,'cart-item']],[[2,'?:'],[[2,'!=='],[[7],[3,'index']],[[2,'-'],[[6],[[7],[3,'cartList']],[3,'length']],[1,1]]],[1,'b-b'],[1,'']]]])
Z([3,'image-wrapper'])
Z(z[15])
Z(z[15])
Z([[4],[[5],[[6],[[7],[3,'item']],[3,'loaded']]]])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'load']],[[4],[[5],[[4],[[5],[[5],[1,'onImageLoad']],[[4],[[5],[[5],[1,'cartList']],[[7],[3,'index']]]]]]]]]]],[[4],[[5],[[5],[1,'error']],[[4],[[5],[[4],[[5],[[5],[1,'onImageError']],[[4],[[5],[[5],[1,'cartList']],[[7],[3,'index']]]]]]]]]]]])
Z([3,'aspectFill'])
Z([[6],[[7],[3,'item']],[3,'image']])
Z(z[15])
Z([[4],[[5],[[5],[1,'yticon icon-xuanzhong2 checkbox']],[[2,'?:'],[[6],[[7],[3,'item']],[3,'checked']],[1,'checked'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'check']],[[4],[[5],[[5],[1,'item']],[[7],[3,'index']]]]]]]]]]]])
Z([3,'item-right'])
Z([3,'clamp title'])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z([3,'attr'])
Z([a,[[6],[[7],[3,'item']],[3,'attr_val']]])
Z([3,'price'])
Z([a,[[2,'+'],[1,'¥'],[[6],[[7],[3,'item']],[3,'price']]]])
Z([3,'__l'])
Z(z[15])
Z([3,'step'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^eventChange']],[[4],[[5],[[4],[[5],[1,'numberChange']]]]]]]]])
Z([[7],[3,'index']])
Z([[2,'?:'],[[2,'>='],[[6],[[7],[3,'item']],[3,'number']],[[6],[[7],[3,'item']],[3,'stock']]],[1,true],[1,false]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'number']],[1,1]])
Z([[6],[[7],[3,'item']],[3,'stock']])
Z([1,1])
Z([[2,'?:'],[[2,'>'],[[6],[[7],[3,'item']],[3,'number']],[[6],[[7],[3,'item']],[3,'stock']]],[[6],[[7],[3,'item']],[3,'stock']],[[6],[[7],[3,'item']],[3,'number']]])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z(z[15])
Z([3,'del-btn yticon icon-fork'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'deleteCartItem']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([3,'action-section'])
Z([3,'checkbox'])
Z(z[15])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'check']],[[4],[[5],[1,'all']]]]]]]]]]])
Z(z[3])
Z([[2,'?:'],[[7],[3,'allChecked']],[1,'/static/selected.png'],[1,'/static/select.png']])
Z(z[15])
Z([[4],[[5],[[5],[1,'clear-btn']],[[2,'?:'],[[7],[3,'allChecked']],[1,'show'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clearCart']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'清空'])
Z([3,'total-box'])
Z(z[40])
Z([a,[[2,'+'],[1,'¥'],[[7],[3,'total']]]])
Z([3,'coupon'])
Z([3,'已优惠'])
Z([3,'74.35'])
Z([3,'元'])
Z(z[15])
Z([3,'no-border confirm-btn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'createOrder']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'primary'])
Z([3,'去结算'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'left-aside'])
Z([3,'__i0__'])
Z([3,'item'])
Z([[7],[3,'flist']])
Z([3,'id'])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'f-item b-b']],[[2,'?:'],[[2,'==='],[[6],[[7],[3,'item']],[3,'id']],[[7],[3,'currentId']]],[1,'active'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'tabtap']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'flist']],[1,'id']],[[6],[[7],[3,'item']],[3,'id']]]]]]]]]]]]]]]])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'name']]],[1,'']]])
Z(z[6])
Z([3,'right-aside'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[[4],[[5],[[5],[1,'asideScroll']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'tabScrollTop']])
Z([3,'__i1__'])
Z(z[3])
Z([[7],[3,'slist']])
Z(z[5])
Z([3,'s-list'])
Z([[2,'+'],[1,'main-'],[[6],[[7],[3,'item']],[3,'id']]])
Z([3,'s-item'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([3,'t-list'])
Z([3,'__i2__'])
Z([3,'titem'])
Z([[7],[3,'tlist']])
Z(z[5])
Z([[2,'==='],[[6],[[7],[3,'titem']],[3,'pid']],[[6],[[7],[3,'item']],[3,'id']]])
Z(z[6])
Z([3,'t-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navToList']],[[4],[[5],[[5],[1,'$0']],[1,'$1']]]],[[4],[[5],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'slist']],[1,'id']],[[6],[[7],[3,'item']],[3,'id']]],[1,'id']]]]]],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'tlist']],[1,'id']],[[6],[[7],[3,'titem']],[3,'id']]],[1,'id']]]]]]]]]]]]]]])
Z([[6],[[7],[3,'titem']],[3,'picture']])
Z([a,[[6],[[7],[3,'titem']],[3,'name']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'carousel-section'])
Z([3,'__e'])
Z([3,'carousel'])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'swiperChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'carouselList']])
Z(z[5])
Z(z[2])
Z([3,'carousel-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'navToDetailPage']],[[4],[[5],[[4],[[5],[[5],[1,'o']],[[4],[[5],[[5],[1,'title']],[1,'轮播广告']]]]]]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'src']])
Z([3,'swiper-dots'])
Z([3,'num'])
Z([a,[[2,'+'],[[7],[3,'swiperCurrent']],[1,1]]])
Z([3,'sign'])
Z([3,'/'])
Z(z[14])
Z([a,[[7],[3,'swiperLength']]])
Z([3,'quick-way-enter'])
Z([3,'qw-li'])
Z([3,'qw-area'])
Z([3,'qw-icon subscribe-icon'])
Z([3,'qw-title'])
Z([3,'订阅'])
Z(z[21])
Z(z[22])
Z([3,'qw-icon homework-icon'])
Z(z[24])
Z([3,'作业'])
Z(z[21])
Z(z[22])
Z([3,'qw-icon wrongtopic-icon'])
Z(z[24])
Z([3,'错题'])
Z([3,'#0066ff'])
Z([3,'__l'])
Z([3,'进阶课程'])
Z([3,'1'])
Z([3,'#ffcc00'])
Z(z[37])
Z([3,'系统训练'])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'course'])
Z([3,'subscribe'])
Z([3,'index'])
Z([3,'sub'])
Z([[7],[3,'subscribeData']])
Z(z[2])
Z([3,'__e'])
Z([3,'subs-li'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'gotoSubscribeDetail']]]]]]]]])
Z([3,'course-img'])
Z([3,'_img'])
Z([[6],[[7],[3,'$root']],[3,'m0']])
Z([3,'course-title'])
Z([a,[[6],[[7],[3,'sub']],[3,'name']]])
Z([3,'course-status'])
Z([3,'all-num'])
Z([a,[[2,'+'],[[2,'+'],[1,'共'],[[6],[[7],[3,'sub']],[3,'classNum']]],[1,'节']]])
Z([3,'have-learn'])
Z([3,'已学'])
Z([3,'num'])
Z([a,[[6],[[7],[3,'sub']],[3,'haveLearn']]])
Z([3,'节'])
Z([3,'curse-more'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'course-detail'])
Z([3,'course-ad'])
Z([3,'_img'])
Z([[6],[[7],[3,'$root']],[3,'m0']])
Z([3,'course-tab'])
Z([3,'tab-title'])
Z([3,'章节'])
Z([3,'vedio-list'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'videoData']])
Z(z[8])
Z([3,'list-li'])
Z([3,'video-title'])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z([3,'booking-btn'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'do-homework'])
Z([3,'homework-head'])
Z([3,'__e'])
Z([3,'close-btn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'showBackTipBox']]]]]]]]])
Z([3,'page-prv'])
Z([3,'now-current'])
Z([a,[[2,'+'],[[7],[3,'currentNum']],[1,1]]])
Z([3,'allnum'])
Z([a,[[2,'+'],[1,'/'],[[7],[3,'testNum']]]])
Z(z[2])
Z([3,'homework-btn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'e0']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'homework-content'])
Z(z[2])
Z([3,'swiper'])
Z([[7],[3,'currentNum']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'swiperChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'indicatorDots']])
Z([[7],[3,'interval']])
Z([3,'height:100%;'])
Z([3,'index'])
Z([3,'test'])
Z([[7],[3,'testData']])
Z(z[21])
Z([3,'swiper-item'])
Z([3,'test-content'])
Z([3,'__l'])
Z(z[2])
Z([[7],[3,'test']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^changeAnswer']],[[4],[[5],[[4],[[5],[1,'changeAnswer']]]]]]]]])
Z([3,'notdeal'])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([[2,'>'],[[6],[[6],[[7],[3,'test']],[3,'subquestion']],[3,'length']],[1,0]])
Z(z[27])
Z(z[2])
Z(z[29])
Z([[4],[[5],[[4],[[5],[[5],[1,'^changeSubAnswer']],[[4],[[5],[[4],[[5],[1,'changeSubAnswer']]]]]]]]])
Z(z[31])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z([3,'answer-card'])
Z([[2,'!'],[[7],[3,'answerCardShow']]])
Z(z[2])
Z([3,'card-bg'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'e1']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'card-content'])
Z([3,'card-header'])
Z([3,'title'])
Z([3,'答题卡'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'e2']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'option-box'])
Z(z[21])
Z([3,'item'])
Z(z[23])
Z(z[21])
Z([3,'opt-li'])
Z(z[2])
Z([[4],[[5],[[5],[1,'opt']],[[2,'?:'],[[6],[[6],[[7],[3,'answerData']],[[7],[3,'index']]],[3,'done']],[1,'done'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'slideToTest']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([a,[[2,'?:'],[[2,'>'],[[2,'+'],[[7],[3,'index']],[1,1]],[1,9]],[[2,'+'],[[7],[3,'index']],[1,1]],[[2,'+'],[1,'0'],[[2,'+'],[[7],[3,'index']],[1,1]]]]])
Z([3,'not-deal-tip'])
Z([3,'你还有题目没完成哦！确认提交吗？'])
Z([3,'upload-homework'])
Z([3,'提交作业'])
Z([[7],[3,'backTipBoxShow']])
Z([3,'back-tip-box'])
Z(z[2])
Z([3,'tip-bg'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'e3']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'tip-content'])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'e4']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'btn'])
Z([3,'继续做题'])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'saveHomework']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[74])
Z([3,'保存作业'])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]]])
Z(z[74])
Z([3,'退出作业'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'homework-box'])
Z([3,'navTitle'])
Z([3,'nav subject'])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'title']],[[2,'?:'],[[2,'=='],[[7],[3,'currentIndex']],[1,1]],[1,'current'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toggleNav']],[[4],[[5],[1,1]]]]]]]]]]])
Z([a,[[2,'?:'],[[2,'>'],[[7],[3,'subjectSelect']],[[2,'-'],[1,1]]],[[6],[[7],[3,'subjectSelectData']],[[7],[3,'subjectSelect']]],[1,'选择科目']]])
Z([3,'nav process'])
Z(z[3])
Z([[4],[[5],[[5],[1,'title']],[[2,'?:'],[[2,'=='],[[7],[3,'currentIndex']],[1,2]],[1,'current'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toggleNav']],[[4],[[5],[1,2]]]]]]]]]]])
Z([a,[[2,'?:'],[[2,'=='],[[7],[3,'processSelect']],[1,1]],[1,'已完成'],[1,'待完成']]])
Z([3,'select-box'])
Z([[2,'!'],[[2,'!='],[[7],[3,'currentIndex']],[1,0]]])
Z(z[3])
Z([3,'select-bg'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toggleNav']],[[4],[[5],[1,0]]]]]]]]]]])
Z([3,'select-tab subject-select'])
Z([[2,'!'],[[2,'=='],[[7],[3,'currentIndex']],[1,1]]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'subjectSelectData']])
Z(z[19])
Z(z[3])
Z([[4],[[5],[[5],[1,'btn']],[[2,'?:'],[[2,'=='],[[7],[3,'subjectSelect']],[[7],[3,'index']]],[1,'is-select'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'e0']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'subject-btn'])
Z([a,[[7],[3,'item']]])
Z([3,'select-tab process-select'])
Z([[2,'!'],[[2,'=='],[[7],[3,'currentIndex']],[1,2]]])
Z(z[19])
Z(z[20])
Z([[7],[3,'processSelectData']])
Z(z[19])
Z(z[3])
Z([[4],[[5],[[5],[1,'btn']],[[2,'?:'],[[2,'=='],[[7],[3,'processSelect']],[[7],[3,'index']]],[1,'is-select'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'e1']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'process-btn'])
Z([a,z[27][1]])
Z([3,'homework-list'])
Z(z[19])
Z(z[20])
Z([[7],[3,'homeworkList']])
Z(z[19])
Z(z[3])
Z([3,'homework-li'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'gotoDoHomework']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'homeworkList']],[1,'']],[[7],[3,'index']]],[1,'type']]]]]]]]]]]]]]])
Z([3,'title'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([3,'if-review'])
Z([a,[[6],[[7],[3,'item']],[3,'status']]])
Z([3,'time'])
Z([a,[[2,'+'],[[2,'+'],[[2,'+'],[1,'开始时间: '],[[6],[[7],[3,'item']],[3,'startTime']]],[1,' 结束时间: ']],[[6],[[7],[3,'item']],[3,'endTime']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'do-homework'])
Z([3,'homework-head'])
Z([3,'__e'])
Z([3,'close-btn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]]])
Z([3,'page-prv'])
Z([3,'now-current'])
Z([a,[[2,'+'],[[7],[3,'currentNum']],[1,1]]])
Z([3,'allnum'])
Z([a,[[2,'+'],[1,'/'],[[7],[3,'testNum']]]])
Z(z[2])
Z([3,'homework-btn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'e0']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'homework-content'])
Z(z[2])
Z([3,'swiper'])
Z([[7],[3,'currentNum']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'swiperChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'indicatorDots']])
Z([[7],[3,'interval']])
Z([3,'height:100%;'])
Z([3,'index'])
Z([3,'test'])
Z([[7],[3,'testData']])
Z(z[21])
Z([3,'overflow-y:scroll;'])
Z([3,'swiper-item'])
Z([3,'test-content'])
Z([3,'__l'])
Z([[7],[3,'test']])
Z([3,'haveReview'])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([[2,'>'],[[6],[[6],[[7],[3,'test']],[3,'subquestion']],[3,'length']],[1,0]])
Z(z[28])
Z(z[29])
Z(z[30])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z([3,'answer-card'])
Z([[2,'!'],[[7],[3,'answerCardShow']]])
Z(z[2])
Z([3,'card-bg'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'e1']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'card-content'])
Z([3,'card-header'])
Z([3,'title'])
Z([3,'答题卡'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'e2']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'option-box'])
Z(z[21])
Z([3,'item'])
Z(z[23])
Z(z[21])
Z([3,'opt-li'])
Z(z[2])
Z([[4],[[5],[[5],[1,'opt']],[[2,'?:'],[[2,'!'],[[6],[[6],[[7],[3,'testData']],[[7],[3,'index']]],[3,'ifCorrect']]],[1,'wrong'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'slideToTest']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([a,[[2,'?:'],[[2,'>'],[[2,'+'],[[7],[3,'index']],[1,1]],[1,9]],[[2,'+'],[[7],[3,'index']],[1,1]],[[2,'+'],[1,'0'],[[2,'+'],[[7],[3,'index']],[1,1]]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'do-homework'])
Z([3,'homework-head'])
Z([3,'__e'])
Z([3,'close-btn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]]])
Z([3,'page-prv'])
Z([3,'now-current'])
Z([a,[[2,'+'],[[7],[3,'currentNum']],[1,1]]])
Z([3,'allnum'])
Z([a,[[2,'+'],[1,'/'],[[7],[3,'testNum']]]])
Z(z[2])
Z([3,'homework-btn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'e0']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'homework-content'])
Z(z[2])
Z([3,'swiper'])
Z([[7],[3,'currentNum']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'swiperChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'indicatorDots']])
Z([[7],[3,'interval']])
Z([3,'height:100%;'])
Z([3,'index'])
Z([3,'test'])
Z([[7],[3,'testData']])
Z(z[21])
Z([3,'swiper-item'])
Z([3,'test-content'])
Z([3,'__l'])
Z([[7],[3,'test']])
Z([3,'noReview'])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([[2,'>'],[[6],[[6],[[7],[3,'test']],[3,'subquestion']],[3,'length']],[1,0]])
Z(z[27])
Z(z[28])
Z(z[29])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z([3,'answer-card'])
Z([[2,'!'],[[7],[3,'answerCardShow']]])
Z(z[2])
Z([3,'card-bg'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'e1']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'card-content'])
Z([3,'card-header'])
Z([3,'title'])
Z([3,'答题卡'])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'e2']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'option-box'])
Z(z[21])
Z([3,'item'])
Z(z[23])
Z(z[21])
Z([3,'opt-li'])
Z(z[2])
Z([[4],[[5],[[5],[1,'opt']],[[2,'?:'],[[6],[[6],[[7],[3,'answerData']],[[7],[3,'index']]],[3,'done']],[1,'done'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'slideToTest']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([a,[[2,'?:'],[[2,'>'],[[2,'+'],[[7],[3,'index']],[1,1]],[1,9]],[[2,'+'],[[7],[3,'index']],[1,1]],[[2,'+'],[1,'0'],[[2,'+'],[[7],[3,'index']],[1,1]]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'learn-page'])
Z([3,'head-tab'])
Z([3,'index'])
Z([3,'tab'])
Z([[7],[3,'headTabArr']])
Z([3,'*this'])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'tab']],[[2,'?:'],[[2,'=='],[[7],[3,'index']],[[7],[3,'currentIndex']]],[1,'current'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'currentThis']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([3,'tab-title'])
Z([a,[[7],[3,'tab']]])
Z([[2,'=='],[[7],[3,'currentIndex']],[1,2]])
Z([3,'wrong-topic-tools'])
Z(z[6])
Z([3,'icon scan-icon'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'scan']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[6])
Z([3,'icon delete-icon'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'showDelete']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[6])
Z([3,'icon download-icon'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'showDownload']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'tab-content'])
Z([[2,'=='],[[7],[3,'currentIndex']],[1,0]])
Z([3,'__l'])
Z([3,'1'])
Z([[2,'=='],[[7],[3,'currentIndex']],[1,1]])
Z(z[24])
Z([[7],[3,'loadMoreHomeWork']])
Z([3,'2'])
Z(z[11])
Z(z[24])
Z(z[6])
Z([[4],[[5],[[4],[[5],[[5],[1,'^selectHide']],[[4],[[5],[[4],[[5],[1,'selectHide']]]]]]]]])
Z([[7],[3,'loadMoreWrongTest']])
Z([[7],[3,'wrongSelectShow']])
Z([[7],[3,'selectType']])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'wrong-topic'])
Z([3,'select-tab'])
Z([3,'__e'])
Z([3,'selecter subject-select'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'selectTab']],[[4],[[5],[1,1]]]]]]]]]]])
Z([[4],[[5],[[5],[1,'nav-title']],[[2,'?:'],[[2,'=='],[[7],[3,'selectTabType']],[1,1]],[1,'current'],[1,'']]]])
Z([3,'数学'])
Z([3,'arrow'])
Z(z[2])
Z([3,'selecter edition-select'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'selectTab']],[[4],[[5],[1,2]]]]]]]]]]])
Z([[4],[[5],[[5],[1,'nav-title']],[[2,'?:'],[[2,'=='],[[7],[3,'selectTabType']],[1,2]],[1,'current'],[1,'']]]])
Z([3,'八年级上'])
Z(z[7])
Z(z[2])
Z([3,'selecter time-select'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'selectTab']],[[4],[[5],[1,3]]]]]]]]]]])
Z([[4],[[5],[[5],[1,'nav-title']],[[2,'?:'],[[2,'=='],[[7],[3,'selectTabType']],[1,3]],[1,'current'],[1,'']]]])
Z([3,'选择时间'])
Z(z[7])
Z([3,'tab-main-content'])
Z([[2,'!'],[[7],[3,'selectTabShow']]])
Z(z[2])
Z([3,'tab-bg'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'closeSelectTab']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'tab subject-tab'])
Z([[2,'!'],[[2,'=='],[[7],[3,'selectTabType']],[1,1]]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'subjectSelectData']])
Z(z[27])
Z(z[2])
Z([[4],[[5],[[5],[1,'btn']],[[2,'?:'],[[2,'=='],[[7],[3,'subjectSelect']],[[7],[3,'index']]],[1,'is-select'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'e0']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'subject-btn'])
Z([a,[[7],[3,'item']]])
Z([3,'tab edition-tab'])
Z([[2,'!'],[[2,'=='],[[7],[3,'selectTabType']],[1,2]]])
Z([3,'章节'])
Z([3,'tab time-tab'])
Z([[2,'!'],[[2,'=='],[[7],[3,'selectTabType']],[1,3]]])
Z(z[27])
Z(z[28])
Z([[7],[3,'timeData']])
Z(z[27])
Z(z[2])
Z([[4],[[5],[[5],[1,'btn']],[[2,'?:'],[[2,'=='],[[7],[3,'timeSelect']],[[7],[3,'index']]],[1,'is-select'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'e1']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[34])
Z([a,z[35][1]])
Z([3,'wrong-test-box'])
Z(z[27])
Z([3,'test'])
Z([[7],[3,'wrongTestData']])
Z(z[27])
Z([3,'__l'])
Z(z[2])
Z(z[2])
Z([[7],[3,'cancelSelect']])
Z([[7],[3,'chooseAll']])
Z([[7],[3,'test']])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^chooseConfirm']],[[4],[[5],[[4],[[5],[1,'chooseConfirm']]]]]]]],[[4],[[5],[[5],[1,'^chooseCancel']],[[4],[[5],[[4],[[5],[1,'chooseCancel']]]]]]]]])
Z([[7],[3,'selectShow']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z(z[62])
Z([3,'choose-tab'])
Z(z[2])
Z([3,'choose-all'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'chooseAllTest']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[4],[[5],[[5],[1,'choose-icon']],[[2,'?:'],[[7],[3,'chooseAll']],[1,'is-select'],[1,'']]]])
Z([3,'全选'])
Z([3,'done-btn'])
Z([a,[[2,'?:'],[[2,'=='],[[7],[3,'selectType']],[1,'delete']],[1,'删除已选中错题'],[1,'下载已选中错题']]])
Z(z[2])
Z([3,'cancel-btn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'selectHide']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'取消'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'left-bottom-sign'])
Z([3,'__e'])
Z([3,'back-btn yticon icon-zuojiantou-up'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'navBack']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'right-top-sign'])
Z([3,'wrapper'])
Z([3,'left-top-sign'])
Z([3,'LOGIN'])
Z([3,'welcome'])
Z([3,'欢迎回来！'])
Z([3,'input-content'])
Z([3,'input-item'])
Z([3,'tit'])
Z([3,'手机号码'])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[1,'inputChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'mobile'])
Z([3,'11'])
Z([3,'请输入手机号码'])
Z([3,'number'])
Z([[7],[3,'mobile']])
Z(z[12])
Z(z[13])
Z([3,'密码'])
Z(z[2])
Z(z[2])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[1,'inputChange']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'confirm']],[[4],[[5],[[4],[[5],[[5],[1,'toLogin']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'password'])
Z([3,'20'])
Z([3,'8-18位不含特殊字符的数字、字母组合'])
Z([3,'input-empty'])
Z(z[17])
Z([3,''])
Z(z[2])
Z([3,'confirm-btn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toLogin']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'logining']])
Z([3,'登录'])
Z([3,'forget-section'])
Z([3,'忘记密码?'])
Z([3,'register-section'])
Z([3,'还没有账号?'])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toRegist']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'马上注册'])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'__e'])
Z([3,'list-cell b-b m-t'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'navTo']],[[4],[[5],[1,'个人资料']]]]]]]]]]])
Z([3,'cell-hover'])
Z([1,50])
Z([3,'cell-tit'])
Z([3,'个人资料'])
Z([3,'cell-more yticon icon-you'])
Z(z[1])
Z([3,'list-cell b-b'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'navTo']],[[4],[[5],[1,'收货地址']]]]]]]]]]])
Z(z[4])
Z(z[5])
Z(z[6])
Z([3,'收货地址'])
Z(z[8])
Z(z[1])
Z([3,'list-cell'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'navTo']],[[4],[[5],[1,'实名认证']]]]]]]]]]])
Z(z[4])
Z(z[5])
Z(z[6])
Z([3,'实名认证'])
Z(z[8])
Z([3,'list-cell m-t'])
Z(z[6])
Z([3,'消息推送'])
Z(z[1])
Z([3,'#fa436a'])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'switchChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[1])
Z([3,'list-cell m-t b-b'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'navTo']],[[4],[[5],[1,'清除缓存']]]]]]]]]]])
Z(z[4])
Z(z[5])
Z(z[6])
Z([3,'清除缓存'])
Z(z[8])
Z(z[1])
Z(z[10])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'navTo']],[[4],[[5],[1,'关于Dcloud']]]]]]]]]]])
Z(z[4])
Z(z[5])
Z(z[6])
Z([3,'关于Dcloud'])
Z(z[8])
Z(z[18])
Z(z[6])
Z([3,'检查更新'])
Z([3,'cell-tip'])
Z([3,'当前版本 1.0.3'])
Z(z[8])
Z(z[1])
Z([3,'list-cell log-out-btn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toLogout']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[6])
Z([3,'退出登录'])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'user-section'])
Z([3,'bg'])
Z([3,'/static/user-bg.jpg'])
Z([3,'user-info-box'])
Z([3,'portrait-box'])
Z([3,'portrait'])
Z([[2,'||'],[[6],[[7],[3,'userInfo']],[3,'portrait']],[1,'/static/missing-face.png']])
Z([3,'info-box'])
Z([3,'username'])
Z([a,[[2,'||'],[[6],[[7],[3,'userInfo']],[3,'nickname']],[1,'游客']]])
Z([3,'__e'])
Z(z[11])
Z(z[11])
Z([3,'cover-container'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'coverTouchstart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'coverTouchmove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'coverTouchend']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'transform:'],[[7],[3,'coverTransform']]],[1,';']],[[2,'+'],[[2,'+'],[1,'transition:'],[[7],[3,'coverTransition']]],[1,';']]])
Z([3,'arc'])
Z([3,'/static/arc.png'])
Z([3,'history-section icon'])
Z([3,'__l'])
Z([3,'icon-shoucang_xuanzhongzhuangtai'])
Z([3,'#54b4ef'])
Z([3,'我的收藏'])
Z([3,'1'])
Z(z[20])
Z(z[11])
Z([[4],[[5],[[4],[[5],[[5],[1,'^eventClick']],[[4],[[5],[[4],[[5],[[5],[1,'navTo']],[[4],[[5],[1,'/pages/set/set']]]]]]]]]]])
Z([3,'icon-shezhi1'])
Z([3,'#e07472'])
Z([3,'设置'])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'user-section'])
Z([3,'bg'])
Z([3,'/static/user-bg.jpg'])
Z([3,'bg-upload-btn yticon icon-paizhao'])
Z([3,'portrait-box'])
Z([3,'portrait'])
Z([[2,'||'],[[6],[[7],[3,'userInfo']],[3,'portrait']],[1,'/static/missing-face.png']])
Z([3,'pt-upload-btn yticon icon-paizhao'])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/button/button.wxml','./components/enter-panel/enter-panel.wxml','./components/homework_answer_input/index.wxml','./components/homework_subquestion_swiper/index.wxml','./components/mix-list-cell.wxml','./components/uni-number-box.wxml','./components/wrong_test/wrong_test.wxml','./pages/cart/cart.wxml','./pages/category/category.wxml','./pages/index/index.wxml','./pages/learning/course/course.wxml','./pages/learning/course/course_detail/course_detail.wxml','./pages/learning/homework/do_homework.wxml','./pages/learning/homework/homework.wxml','./pages/learning/homework/homework_have_review.wxml','./pages/learning/homework/homework_no_review.wxml','./pages/learning/index.wxml','./pages/learning/worngtopic/worngtopic.wxml','./pages/notice/notice.wxml','./pages/public/login.wxml','./pages/set/set.wxml','./pages/user/user.wxml','./pages/userinfo/userinfo.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,1,e,s,gg)){xC.wxVkey=1
var oD=_n('slot')
_(xC,oD)
}
else{xC.wxVkey=2
var fE=_oz(z,2,e,s,gg)
_(xC,fE)
}
xC.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var hG=_n('view')
_rz(z,hG,'class',0,e,s,gg)
var oH=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var cI=_n('text')
_rz(z,cI,'class',3,e,s,gg)
var oJ=_oz(z,4,e,s,gg)
_(cI,oJ)
_(oH,cI)
var lK=_n('text')
_rz(z,lK,'class',5,e,s,gg)
var aL=_oz(z,6,e,s,gg)
_(lK,aL)
_(oH,lK)
_(hG,oH)
_(r,hG)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var eN=_n('view')
_rz(z,eN,'class',0,e,s,gg)
var fS=_n('view')
_rz(z,fS,'class',1,e,s,gg)
var cT=_oz(z,2,e,s,gg)
_(fS,cT)
_(eN,fS)
var bO=_v()
_(eN,bO)
if(_oz(z,3,e,s,gg)){bO.wxVkey=1
var hU=_n('view')
_rz(z,hU,'class',4,e,s,gg)
var oV=_v()
_(hU,oV)
var cW=function(lY,oX,aZ,gg){
var e2=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2],[],lY,oX,gg)
var b3=_n('view')
_rz(z,b3,'class',12,lY,oX,gg)
var o4=_oz(z,13,lY,oX,gg)
_(b3,o4)
_(e2,b3)
var x5=_n('view')
_rz(z,x5,'class',14,lY,oX,gg)
var o6=_oz(z,15,lY,oX,gg)
_(x5,o6)
_(e2,x5)
_(aZ,e2)
return aZ
}
oV.wxXCkey=2
_2z(z,7,cW,e,s,gg,oV,'answer','index','index')
_(bO,hU)
}
var oP=_v()
_(eN,oP)
if(_oz(z,16,e,s,gg)){oP.wxVkey=1
var f7=_n('view')
_rz(z,f7,'class',17,e,s,gg)
var o0=_mz(z,'view',['bindtap',18,'class',1,'data-event-opts',2],[],e,s,gg)
var cAB=_v()
_(o0,cAB)
if(_oz(z,21,e,s,gg)){cAB.wxVkey=1
var lCB=_n('text')
_rz(z,lCB,'class',22,e,s,gg)
var aDB=_oz(z,23,e,s,gg)
_(lCB,aDB)
_(cAB,lCB)
}
var oBB=_v()
_(o0,oBB)
if(_oz(z,24,e,s,gg)){oBB.wxVkey=1
var tEB=_mz(z,'input',['bindblur',25,'bindinput',1,'class',2,'data-event-opts',3,'data-ref',4,'focus',5,'placeholder',6],[],e,s,gg)
_(oBB,tEB)
}
cAB.wxXCkey=1
oBB.wxXCkey=1
_(f7,o0)
var c8=_v()
_(f7,c8)
if(_oz(z,32,e,s,gg)){c8.wxVkey=1
var eFB=_mz(z,'view',['bindtap',33,'class',1,'data-event-opts',2],[],e,s,gg)
var bGB=_n('text')
_rz(z,bGB,'class',36,e,s,gg)
var oHB=_oz(z,37,e,s,gg)
_(bGB,oHB)
_(eFB,bGB)
_(c8,eFB)
}
var h9=_v()
_(f7,h9)
if(_oz(z,38,e,s,gg)){h9.wxVkey=1
var xIB=_n('view')
_rz(z,xIB,'class',39,e,s,gg)
var oJB=_oz(z,40,e,s,gg)
_(xIB,oJB)
_(h9,xIB)
}
c8.wxXCkey=1
h9.wxXCkey=1
_(oP,f7)
}
var xQ=_v()
_(eN,xQ)
if(_oz(z,41,e,s,gg)){xQ.wxVkey=1
var fKB=_n('view')
_rz(z,fKB,'class',42,e,s,gg)
var cLB=_n('text')
_rz(z,cLB,'class',43,e,s,gg)
var hMB=_oz(z,44,e,s,gg)
_(cLB,hMB)
_(fKB,cLB)
var oNB=_n('text')
_rz(z,oNB,'class',45,e,s,gg)
var cOB=_oz(z,46,e,s,gg)
_(oNB,cOB)
_(fKB,oNB)
_(xQ,fKB)
}
var oR=_v()
_(eN,oR)
if(_oz(z,47,e,s,gg)){oR.wxVkey=1
var oPB=_n('view')
_rz(z,oPB,'class',48,e,s,gg)
var lQB=_n('view')
_rz(z,lQB,'class',49,e,s,gg)
_(oPB,lQB)
var aRB=_n('view')
_rz(z,aRB,'class',50,e,s,gg)
var tSB=_n('text')
_rz(z,tSB,'class',51,e,s,gg)
var eTB=_oz(z,52,e,s,gg)
_(tSB,eTB)
_(aRB,tSB)
var bUB=_n('text')
_rz(z,bUB,'class',53,e,s,gg)
var oVB=_oz(z,54,e,s,gg)
_(bUB,oVB)
_(aRB,bUB)
_(oPB,aRB)
var xWB=_n('view')
_rz(z,xWB,'class',55,e,s,gg)
var oXB=_n('text')
_rz(z,oXB,'class',56,e,s,gg)
var fYB=_oz(z,57,e,s,gg)
_(oXB,fYB)
_(xWB,oXB)
var cZB=_n('text')
_rz(z,cZB,'class',58,e,s,gg)
var h1B=_oz(z,59,e,s,gg)
_(cZB,h1B)
_(xWB,cZB)
_(oPB,xWB)
var o2B=_n('view')
_rz(z,o2B,'class',60,e,s,gg)
var c3B=_n('text')
_rz(z,c3B,'class',61,e,s,gg)
var o4B=_oz(z,62,e,s,gg)
_(c3B,o4B)
_(o2B,c3B)
var l5B=_n('text')
_rz(z,l5B,'class',63,e,s,gg)
var a6B=_oz(z,64,e,s,gg)
_(l5B,a6B)
_(o2B,l5B)
_(oPB,o2B)
var t7B=_n('view')
_rz(z,t7B,'class',65,e,s,gg)
var e8B=_n('text')
_rz(z,e8B,'class',66,e,s,gg)
var b9B=_oz(z,67,e,s,gg)
_(e8B,b9B)
_(t7B,e8B)
var o0B=_n('text')
_rz(z,o0B,'class',68,e,s,gg)
_(t7B,o0B)
_(oPB,t7B)
_(oR,oPB)
}
bO.wxXCkey=1
oP.wxXCkey=1
xQ.wxXCkey=1
oR.wxXCkey=1
_(r,eN)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var oBC=_n('view')
_rz(z,oBC,'class',0,e,s,gg)
var fCC=_n('view')
_rz(z,fCC,'class',1,e,s,gg)
var cDC=_n('text')
_rz(z,cDC,'class',2,e,s,gg)
var hEC=_oz(z,3,e,s,gg)
_(cDC,hEC)
_(fCC,cDC)
var oFC=_n('text')
_rz(z,oFC,'class',4,e,s,gg)
var cGC=_oz(z,5,e,s,gg)
_(oFC,cGC)
var oHC=_n('text')
_rz(z,oHC,'class',6,e,s,gg)
var lIC=_oz(z,7,e,s,gg)
_(oHC,lIC)
_(oFC,oHC)
_(fCC,oFC)
_(oBC,fCC)
var aJC=_mz(z,'swiper',['bindchange',8,'class',1,'data-event-opts',2,'indicatorDots',3,'interval',4,'style',5],[],e,s,gg)
var tKC=_v()
_(aJC,tKC)
var eLC=function(oNC,bMC,xOC,gg){
var fQC=_n('swiper-item')
var cRC=_n('view')
_rz(z,cRC,'class',18,oNC,bMC,gg)
var hSC=_mz(z,'answerinput',['bind:__l',19,'bind:changeAnswer',1,'data',2,'data-event-opts',3,'status',4,'vueId',5],[],oNC,bMC,gg)
_(cRC,hSC)
_(fQC,cRC)
_(xOC,fQC)
return xOC
}
tKC.wxXCkey=4
_2z(z,16,eLC,e,s,gg,tKC,'test','index','index')
_(oBC,aJC)
_(r,oBC)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var cUC=_n('view')
_rz(z,cUC,'class',0,e,s,gg)
var oVC=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2,'hoverClass',3,'hoverStayTime',4],[],e,s,gg)
var lWC=_v()
_(oVC,lWC)
if(_oz(z,6,e,s,gg)){lWC.wxVkey=1
var tYC=_mz(z,'text',['class',7,'style',1],[],e,s,gg)
_(lWC,tYC)
}
var eZC=_n('text')
_rz(z,eZC,'class',9,e,s,gg)
var b1C=_oz(z,10,e,s,gg)
_(eZC,b1C)
_(oVC,eZC)
var aXC=_v()
_(oVC,aXC)
if(_oz(z,11,e,s,gg)){aXC.wxVkey=1
var o2C=_n('text')
_rz(z,o2C,'class',12,e,s,gg)
var x3C=_oz(z,13,e,s,gg)
_(o2C,x3C)
_(aXC,o2C)
}
var o4C=_n('text')
_rz(z,o4C,'class',14,e,s,gg)
_(oVC,o4C)
lWC.wxXCkey=1
aXC.wxXCkey=1
_(cUC,oVC)
_(r,cUC)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var c6C=_n('view')
_rz(z,c6C,'class',0,e,s,gg)
var h7C=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var o8C=_n('text')
_rz(z,o8C,'class',4,e,s,gg)
_(h7C,o8C)
_(c6C,h7C)
var c9C=_mz(z,'input',['bindblur',5,'class',1,'data-event-opts',2,'disabled',3,'type',4,'value',5],[],e,s,gg)
_(c6C,c9C)
var o0C=_mz(z,'view',['bindtap',11,'class',1,'data-event-opts',2],[],e,s,gg)
var lAD=_n('text')
_rz(z,lAD,'class',14,e,s,gg)
_(o0C,lAD)
_(c6C,o0C)
_(r,c6C)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var tCD=_n('view')
_rz(z,tCD,'class',0,e,s,gg)
var bED=_n('view')
_rz(z,bED,'class',1,e,s,gg)
var oFD=_mz(z,'view',['bindtap',2,'class',1,'data-event-opts',2,'hidden',3],[],e,s,gg)
_(bED,oFD)
_(tCD,bED)
var xGD=_n('text')
_rz(z,xGD,'class',6,e,s,gg)
var oHD=_oz(z,7,e,s,gg)
_(xGD,oHD)
_(tCD,xGD)
var fID=_n('text')
_rz(z,fID,'class',8,e,s,gg)
var cJD=_oz(z,9,e,s,gg)
_(fID,cJD)
_(tCD,fID)
var eDD=_v()
_(tCD,eDD)
if(_oz(z,10,e,s,gg)){eDD.wxVkey=1
var hKD=_n('view')
_rz(z,hKD,'class',11,e,s,gg)
var oLD=_v()
_(hKD,oLD)
var cMD=function(lOD,oND,aPD,gg){
var eRD=_n('view')
_rz(z,eRD,'class',16,lOD,oND,gg)
var bSD=_n('view')
_rz(z,bSD,'class',17,lOD,oND,gg)
var oTD=_oz(z,18,lOD,oND,gg)
_(bSD,oTD)
_(eRD,bSD)
var xUD=_n('view')
_rz(z,xUD,'class',19,lOD,oND,gg)
var oVD=_oz(z,20,lOD,oND,gg)
_(xUD,oVD)
_(eRD,xUD)
_(aPD,eRD)
return aPD
}
oLD.wxXCkey=2
_2z(z,14,cMD,e,s,gg,oLD,'answer','index','index')
_(eDD,hKD)
}
var fWD=_mz(z,'view',['class',21,'hidden',1],[],e,s,gg)
var cXD=_n('view')
_rz(z,cXD,'class',23,e,s,gg)
var hYD=_n('text')
_rz(z,hYD,'class',24,e,s,gg)
var oZD=_oz(z,25,e,s,gg)
_(hYD,oZD)
_(cXD,hYD)
var c1D=_n('text')
_rz(z,c1D,'class',26,e,s,gg)
var o2D=_oz(z,27,e,s,gg)
_(c1D,o2D)
_(cXD,c1D)
_(fWD,cXD)
var l3D=_n('view')
_rz(z,l3D,'class',28,e,s,gg)
var a4D=_n('text')
_rz(z,a4D,'class',29,e,s,gg)
var t5D=_oz(z,30,e,s,gg)
_(a4D,t5D)
_(l3D,a4D)
var e6D=_n('text')
_rz(z,e6D,'class',31,e,s,gg)
var b7D=_oz(z,32,e,s,gg)
_(e6D,b7D)
_(l3D,e6D)
_(fWD,l3D)
var o8D=_n('view')
_rz(z,o8D,'class',33,e,s,gg)
var x9D=_n('text')
_rz(z,x9D,'class',34,e,s,gg)
var o0D=_oz(z,35,e,s,gg)
_(x9D,o0D)
_(o8D,x9D)
var fAE=_n('text')
_rz(z,fAE,'class',36,e,s,gg)
var cBE=_oz(z,37,e,s,gg)
_(fAE,cBE)
_(o8D,fAE)
_(fWD,o8D)
var hCE=_n('view')
_rz(z,hCE,'class',38,e,s,gg)
var oDE=_n('view')
_rz(z,oDE,'class',39,e,s,gg)
var cEE=_n('text')
_rz(z,cEE,'class',40,e,s,gg)
var oFE=_oz(z,41,e,s,gg)
_(cEE,oFE)
_(oDE,cEE)
var lGE=_n('text')
_rz(z,lGE,'class',42,e,s,gg)
var aHE=_oz(z,43,e,s,gg)
_(lGE,aHE)
_(oDE,lGE)
_(hCE,oDE)
var tIE=_n('view')
_rz(z,tIE,'class',44,e,s,gg)
var eJE=_n('text')
_rz(z,eJE,'class',45,e,s,gg)
var bKE=_oz(z,46,e,s,gg)
_(eJE,bKE)
_(tIE,eJE)
var oLE=_n('text')
_rz(z,oLE,'class',47,e,s,gg)
_(tIE,oLE)
_(hCE,tIE)
_(fWD,hCE)
_(tCD,fWD)
eDD.wxXCkey=1
_(r,tCD)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var oNE=_n('view')
_rz(z,oNE,'class',0,e,s,gg)
var fOE=_v()
_(oNE,fOE)
if(_oz(z,1,e,s,gg)){fOE.wxVkey=1
var cPE=_n('view')
_rz(z,cPE,'class',2,e,s,gg)
var oRE=_mz(z,'image',['mode',3,'src',1],[],e,s,gg)
_(cPE,oRE)
var hQE=_v()
_(cPE,hQE)
if(_oz(z,5,e,s,gg)){hQE.wxVkey=1
var cSE=_n('view')
_rz(z,cSE,'class',6,e,s,gg)
var lUE=_oz(z,7,e,s,gg)
_(cSE,lUE)
var oTE=_v()
_(cSE,oTE)
if(_oz(z,8,e,s,gg)){oTE.wxVkey=1
var aVE=_mz(z,'navigator',['class',9,'openType',1,'url',2],[],e,s,gg)
var tWE=_oz(z,12,e,s,gg)
_(aVE,tWE)
_(oTE,aVE)
}
oTE.wxXCkey=1
_(hQE,cSE)
}
else{hQE.wxVkey=2
var eXE=_n('view')
_rz(z,eXE,'class',13,e,s,gg)
var bYE=_oz(z,14,e,s,gg)
_(eXE,bYE)
var oZE=_mz(z,'view',['bindtap',15,'class',1,'data-event-opts',2],[],e,s,gg)
var x1E=_oz(z,18,e,s,gg)
_(oZE,x1E)
_(eXE,oZE)
_(hQE,eXE)
}
hQE.wxXCkey=1
_(fOE,cPE)
}
else{fOE.wxVkey=2
var o2E=_n('view')
var f3E=_n('view')
_rz(z,f3E,'class',19,e,s,gg)
var c4E=_v()
_(f3E,c4E)
var h5E=function(c7E,o6E,o8E,gg){
var a0E=_n('view')
_rz(z,a0E,'class',24,c7E,o6E,gg)
var tAF=_n('view')
_rz(z,tAF,'class',25,c7E,o6E,gg)
var eBF=_mz(z,'image',['lazyLoad',-1,'binderror',26,'bindload',1,'class',2,'data-event-opts',3,'mode',4,'src',5],[],c7E,o6E,gg)
_(tAF,eBF)
var bCF=_mz(z,'view',['bindtap',32,'class',1,'data-event-opts',2],[],c7E,o6E,gg)
_(tAF,bCF)
_(a0E,tAF)
var oDF=_n('view')
_rz(z,oDF,'class',35,c7E,o6E,gg)
var xEF=_n('text')
_rz(z,xEF,'class',36,c7E,o6E,gg)
var oFF=_oz(z,37,c7E,o6E,gg)
_(xEF,oFF)
_(oDF,xEF)
var fGF=_n('text')
_rz(z,fGF,'class',38,c7E,o6E,gg)
var cHF=_oz(z,39,c7E,o6E,gg)
_(fGF,cHF)
_(oDF,fGF)
var hIF=_n('text')
_rz(z,hIF,'class',40,c7E,o6E,gg)
var oJF=_oz(z,41,c7E,o6E,gg)
_(hIF,oJF)
_(oDF,hIF)
var cKF=_mz(z,'uni-number-box',['bind:__l',42,'bind:eventChange',1,'class',2,'data-event-opts',3,'index',4,'isMax',5,'isMin',6,'max',7,'min',8,'value',9,'vueId',10],[],c7E,o6E,gg)
_(oDF,cKF)
_(a0E,oDF)
var oLF=_mz(z,'text',['bindtap',53,'class',1,'data-event-opts',2],[],c7E,o6E,gg)
_(a0E,oLF)
_(o8E,a0E)
return o8E
}
c4E.wxXCkey=4
_2z(z,22,h5E,e,s,gg,c4E,'item','index','id')
_(o2E,f3E)
var lMF=_n('view')
_rz(z,lMF,'class',56,e,s,gg)
var aNF=_n('view')
_rz(z,aNF,'class',57,e,s,gg)
var tOF=_mz(z,'image',['bindtap',58,'data-event-opts',1,'mode',2,'src',3],[],e,s,gg)
_(aNF,tOF)
var ePF=_mz(z,'view',['bindtap',62,'class',1,'data-event-opts',2],[],e,s,gg)
var bQF=_oz(z,65,e,s,gg)
_(ePF,bQF)
_(aNF,ePF)
_(lMF,aNF)
var oRF=_n('view')
_rz(z,oRF,'class',66,e,s,gg)
var xSF=_n('text')
_rz(z,xSF,'class',67,e,s,gg)
var oTF=_oz(z,68,e,s,gg)
_(xSF,oTF)
_(oRF,xSF)
var fUF=_n('text')
_rz(z,fUF,'class',69,e,s,gg)
var cVF=_oz(z,70,e,s,gg)
_(fUF,cVF)
var hWF=_n('text')
var oXF=_oz(z,71,e,s,gg)
_(hWF,oXF)
_(fUF,hWF)
var cYF=_oz(z,72,e,s,gg)
_(fUF,cYF)
_(oRF,fUF)
_(lMF,oRF)
var oZF=_mz(z,'button',['bindtap',73,'class',1,'data-event-opts',2,'type',3],[],e,s,gg)
var l1F=_oz(z,77,e,s,gg)
_(oZF,l1F)
_(lMF,oZF)
_(o2E,lMF)
_(fOE,o2E)
}
fOE.wxXCkey=1
fOE.wxXCkey=3
_(r,oNE)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var t3F=_n('view')
_rz(z,t3F,'class',0,e,s,gg)
var e4F=_mz(z,'scroll-view',['scrollY',-1,'class',1],[],e,s,gg)
var b5F=_v()
_(e4F,b5F)
var o6F=function(o8F,x7F,f9F,gg){
var hAG=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],o8F,x7F,gg)
var oBG=_oz(z,9,o8F,x7F,gg)
_(hAG,oBG)
_(f9F,hAG)
return f9F
}
b5F.wxXCkey=2
_2z(z,4,o6F,e,s,gg,b5F,'item','__i0__','id')
_(t3F,e4F)
var cCG=_mz(z,'scroll-view',['scrollWithAnimation',-1,'scrollY',-1,'bindscroll',10,'class',1,'data-event-opts',2,'scrollTop',3],[],e,s,gg)
var oDG=_v()
_(cCG,oDG)
var lEG=function(tGG,aFG,eHG,gg){
var oJG=_mz(z,'view',['class',18,'id',1],[],tGG,aFG,gg)
var xKG=_n('text')
_rz(z,xKG,'class',20,tGG,aFG,gg)
var oLG=_oz(z,21,tGG,aFG,gg)
_(xKG,oLG)
_(oJG,xKG)
var fMG=_n('view')
_rz(z,fMG,'class',22,tGG,aFG,gg)
var cNG=_v()
_(fMG,cNG)
var hOG=function(cQG,oPG,oRG,gg){
var aTG=_v()
_(oRG,aTG)
if(_oz(z,27,cQG,oPG,gg)){aTG.wxVkey=1
var tUG=_mz(z,'view',['bindtap',28,'class',1,'data-event-opts',2],[],cQG,oPG,gg)
var eVG=_n('image')
_rz(z,eVG,'src',31,cQG,oPG,gg)
_(tUG,eVG)
var bWG=_n('text')
var oXG=_oz(z,32,cQG,oPG,gg)
_(bWG,oXG)
_(tUG,bWG)
_(aTG,tUG)
}
aTG.wxXCkey=1
return oRG
}
cNG.wxXCkey=2
_2z(z,25,hOG,tGG,aFG,gg,cNG,'titem','__i2__','id')
_(oJG,fMG)
_(eHG,oJG)
return eHG
}
oDG.wxXCkey=2
_2z(z,16,lEG,e,s,gg,oDG,'item','__i1__','id')
_(t3F,cCG)
_(r,t3F)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var oZG=_n('view')
_rz(z,oZG,'class',0,e,s,gg)
var f1G=_n('view')
_rz(z,f1G,'class',1,e,s,gg)
var c2G=_mz(z,'swiper',['autoplay',-1,'circular',-1,'bindchange',2,'class',1,'data-event-opts',2],[],e,s,gg)
var h3G=_v()
_(c2G,h3G)
var o4G=function(o6G,c5G,l7G,gg){
var t9G=_mz(z,'swiper-item',['bindtap',9,'class',1,'data-event-opts',2],[],o6G,c5G,gg)
var e0G=_n('image')
_rz(z,e0G,'src',12,o6G,c5G,gg)
_(t9G,e0G)
_(l7G,t9G)
return l7G
}
h3G.wxXCkey=2
_2z(z,7,o4G,e,s,gg,h3G,'item','index','index')
_(f1G,c2G)
var bAH=_n('view')
_rz(z,bAH,'class',13,e,s,gg)
var oBH=_n('text')
_rz(z,oBH,'class',14,e,s,gg)
var xCH=_oz(z,15,e,s,gg)
_(oBH,xCH)
_(bAH,oBH)
var oDH=_n('text')
_rz(z,oDH,'class',16,e,s,gg)
var fEH=_oz(z,17,e,s,gg)
_(oDH,fEH)
_(bAH,oDH)
var cFH=_n('text')
_rz(z,cFH,'class',18,e,s,gg)
var hGH=_oz(z,19,e,s,gg)
_(cFH,hGH)
_(bAH,cFH)
_(f1G,bAH)
_(oZG,f1G)
var oHH=_n('view')
_rz(z,oHH,'class',20,e,s,gg)
var cIH=_n('view')
_rz(z,cIH,'class',21,e,s,gg)
var oJH=_n('view')
_rz(z,oJH,'class',22,e,s,gg)
var lKH=_n('view')
_rz(z,lKH,'class',23,e,s,gg)
_(oJH,lKH)
var aLH=_n('text')
_rz(z,aLH,'class',24,e,s,gg)
var tMH=_oz(z,25,e,s,gg)
_(aLH,tMH)
_(oJH,aLH)
_(cIH,oJH)
_(oHH,cIH)
var eNH=_n('view')
_rz(z,eNH,'class',26,e,s,gg)
var bOH=_n('view')
_rz(z,bOH,'class',27,e,s,gg)
var oPH=_n('view')
_rz(z,oPH,'class',28,e,s,gg)
_(bOH,oPH)
var xQH=_n('text')
_rz(z,xQH,'class',29,e,s,gg)
var oRH=_oz(z,30,e,s,gg)
_(xQH,oRH)
_(bOH,xQH)
_(eNH,bOH)
_(oHH,eNH)
var fSH=_n('view')
_rz(z,fSH,'class',31,e,s,gg)
var cTH=_n('view')
_rz(z,cTH,'class',32,e,s,gg)
var hUH=_n('view')
_rz(z,hUH,'class',33,e,s,gg)
_(cTH,hUH)
var oVH=_n('text')
_rz(z,oVH,'class',34,e,s,gg)
var cWH=_oz(z,35,e,s,gg)
_(oVH,cWH)
_(cTH,oVH)
_(fSH,cTH)
_(oHH,fSH)
_(oZG,oHH)
var oXH=_mz(z,'enterpanel',['bgColor',36,'bind:__l',1,'panelTitle',2,'vueId',3],[],e,s,gg)
_(oZG,oXH)
var lYH=_mz(z,'enterpanel',['bgColor',40,'bind:__l',1,'panelTitle',2,'vueId',3],[],e,s,gg)
_(oZG,lYH)
_(r,oZG)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var t1H=_n('view')
_rz(z,t1H,'class',0,e,s,gg)
var e2H=_n('view')
_rz(z,e2H,'class',1,e,s,gg)
var b3H=_v()
_(e2H,b3H)
var o4H=function(o6H,x5H,f7H,gg){
var h9H=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],o6H,x5H,gg)
var o0H=_n('view')
_rz(z,o0H,'class',9,o6H,x5H,gg)
var cAI=_mz(z,'image',['alt',-1,'class',10,'src',1],[],o6H,x5H,gg)
_(o0H,cAI)
_(h9H,o0H)
var oBI=_n('view')
_rz(z,oBI,'class',12,o6H,x5H,gg)
var lCI=_n('text')
var aDI=_oz(z,13,o6H,x5H,gg)
_(lCI,aDI)
_(oBI,lCI)
var tEI=_n('view')
_rz(z,tEI,'class',14,o6H,x5H,gg)
var eFI=_n('text')
_rz(z,eFI,'class',15,o6H,x5H,gg)
var bGI=_oz(z,16,o6H,x5H,gg)
_(eFI,bGI)
_(tEI,eFI)
var oHI=_n('text')
_rz(z,oHI,'class',17,o6H,x5H,gg)
var xII=_oz(z,18,o6H,x5H,gg)
_(oHI,xII)
var oJI=_n('text')
_rz(z,oJI,'class',19,o6H,x5H,gg)
var fKI=_oz(z,20,o6H,x5H,gg)
_(oJI,fKI)
_(oHI,oJI)
var cLI=_oz(z,21,o6H,x5H,gg)
_(oHI,cLI)
_(tEI,oHI)
_(oBI,tEI)
_(h9H,oBI)
var hMI=_n('view')
_rz(z,hMI,'class',22,o6H,x5H,gg)
_(h9H,hMI)
_(f7H,h9H)
return f7H
}
b3H.wxXCkey=2
_2z(z,4,o4H,e,s,gg,b3H,'sub','index','index')
_(t1H,e2H)
_(r,t1H)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var cOI=_n('view')
_rz(z,cOI,'class',0,e,s,gg)
var oPI=_n('view')
_rz(z,oPI,'class',1,e,s,gg)
var lQI=_mz(z,'image',['alt',-1,'class',2,'src',1],[],e,s,gg)
_(oPI,lQI)
_(cOI,oPI)
var aRI=_n('view')
_rz(z,aRI,'class',4,e,s,gg)
var tSI=_n('text')
_rz(z,tSI,'class',5,e,s,gg)
var eTI=_oz(z,6,e,s,gg)
_(tSI,eTI)
_(aRI,tSI)
_(cOI,aRI)
var bUI=_n('view')
_rz(z,bUI,'class',7,e,s,gg)
var oVI=_v()
_(bUI,oVI)
var xWI=function(fYI,oXI,cZI,gg){
var o2I=_n('view')
_rz(z,o2I,'class',12,fYI,oXI,gg)
var c3I=_n('text')
_rz(z,c3I,'class',13,fYI,oXI,gg)
var o4I=_oz(z,14,fYI,oXI,gg)
_(c3I,o4I)
_(o2I,c3I)
_(cZI,o2I)
return cZI
}
oVI.wxXCkey=2
_2z(z,10,xWI,e,s,gg,oVI,'item','index','index')
_(cOI,bUI)
var l5I=_n('view')
_rz(z,l5I,'class',15,e,s,gg)
_(cOI,l5I)
_(r,cOI)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var t7I=_n('view')
_rz(z,t7I,'class',0,e,s,gg)
var b9I=_n('view')
_rz(z,b9I,'class',1,e,s,gg)
var o0I=_mz(z,'text',['bindtap',2,'class',1,'data-event-opts',2],[],e,s,gg)
_(b9I,o0I)
var xAJ=_n('text')
_rz(z,xAJ,'class',5,e,s,gg)
var oBJ=_n('text')
_rz(z,oBJ,'class',6,e,s,gg)
var fCJ=_oz(z,7,e,s,gg)
_(oBJ,fCJ)
_(xAJ,oBJ)
var cDJ=_n('text')
_rz(z,cDJ,'class',8,e,s,gg)
var hEJ=_oz(z,9,e,s,gg)
_(cDJ,hEJ)
_(xAJ,cDJ)
_(b9I,xAJ)
var oFJ=_mz(z,'text',['bindtap',10,'class',1,'data-event-opts',2],[],e,s,gg)
_(b9I,oFJ)
_(t7I,b9I)
var cGJ=_n('view')
_rz(z,cGJ,'class',13,e,s,gg)
var oHJ=_mz(z,'swiper',['bindchange',14,'class',1,'current',2,'data-event-opts',3,'indicatorDots',4,'interval',5,'style',6],[],e,s,gg)
var lIJ=_v()
_(oHJ,lIJ)
var aJJ=function(eLJ,tKJ,bMJ,gg){
var xOJ=_n('swiper-item')
var oPJ=_n('view')
_rz(z,oPJ,'class',25,eLJ,tKJ,gg)
var cRJ=_n('view')
_rz(z,cRJ,'class',26,eLJ,tKJ,gg)
var hSJ=_mz(z,'answerinput',['bind:__l',27,'bind:changeAnswer',1,'data',2,'data-event-opts',3,'status',4,'vueId',5],[],eLJ,tKJ,gg)
_(cRJ,hSJ)
_(oPJ,cRJ)
var fQJ=_v()
_(oPJ,fQJ)
if(_oz(z,33,eLJ,tKJ,gg)){fQJ.wxVkey=1
var oTJ=_mz(z,'subquestionswiper',['bind:__l',34,'bind:changeSubAnswer',1,'data',2,'data-event-opts',3,'status',4,'vueId',5],[],eLJ,tKJ,gg)
_(fQJ,oTJ)
}
fQJ.wxXCkey=1
fQJ.wxXCkey=3
_(xOJ,oPJ)
_(bMJ,xOJ)
return bMJ
}
lIJ.wxXCkey=4
_2z(z,23,aJJ,e,s,gg,lIJ,'test','index','index')
_(cGJ,oHJ)
_(t7I,cGJ)
var cUJ=_mz(z,'view',['class',40,'hidden',1],[],e,s,gg)
var oVJ=_mz(z,'view',['bindtap',42,'class',1,'data-event-opts',2],[],e,s,gg)
_(cUJ,oVJ)
var lWJ=_n('view')
_rz(z,lWJ,'class',45,e,s,gg)
var aXJ=_n('view')
_rz(z,aXJ,'class',46,e,s,gg)
var tYJ=_n('text')
_rz(z,tYJ,'class',47,e,s,gg)
var eZJ=_oz(z,48,e,s,gg)
_(tYJ,eZJ)
_(aXJ,tYJ)
var b1J=_mz(z,'text',['bindtap',49,'class',1,'data-event-opts',2],[],e,s,gg)
_(aXJ,b1J)
_(lWJ,aXJ)
var o2J=_n('view')
_rz(z,o2J,'class',52,e,s,gg)
var x3J=_v()
_(o2J,x3J)
var o4J=function(c6J,f5J,h7J,gg){
var c9J=_n('view')
_rz(z,c9J,'class',57,c6J,f5J,gg)
var o0J=_mz(z,'view',['bindtap',58,'class',1,'data-event-opts',2],[],c6J,f5J,gg)
var lAK=_oz(z,61,c6J,f5J,gg)
_(o0J,lAK)
_(c9J,o0J)
_(h7J,c9J)
return h7J
}
x3J.wxXCkey=2
_2z(z,55,o4J,e,s,gg,x3J,'item','index','index')
_(lWJ,o2J)
var aBK=_n('text')
_rz(z,aBK,'class',62,e,s,gg)
var tCK=_oz(z,63,e,s,gg)
_(aBK,tCK)
_(lWJ,aBK)
var eDK=_n('button')
_rz(z,eDK,'class',64,e,s,gg)
var bEK=_oz(z,65,e,s,gg)
_(eDK,bEK)
_(lWJ,eDK)
_(cUJ,lWJ)
_(t7I,cUJ)
var e8I=_v()
_(t7I,e8I)
if(_oz(z,66,e,s,gg)){e8I.wxVkey=1
var oFK=_n('view')
_rz(z,oFK,'class',67,e,s,gg)
var xGK=_mz(z,'view',['bindtap',68,'class',1,'data-event-opts',2],[],e,s,gg)
_(oFK,xGK)
var oHK=_n('view')
_rz(z,oHK,'class',71,e,s,gg)
var fIK=_mz(z,'view',['bindtap',72,'data-event-opts',1],[],e,s,gg)
var cJK=_n('button')
_rz(z,cJK,'class',74,e,s,gg)
var hKK=_oz(z,75,e,s,gg)
_(cJK,hKK)
_(fIK,cJK)
_(oHK,fIK)
var oLK=_mz(z,'view',['bindtap',76,'data-event-opts',1],[],e,s,gg)
var cMK=_n('button')
_rz(z,cMK,'class',78,e,s,gg)
var oNK=_oz(z,79,e,s,gg)
_(cMK,oNK)
_(oLK,cMK)
_(oHK,oLK)
var lOK=_mz(z,'view',['bindtap',80,'data-event-opts',1],[],e,s,gg)
var aPK=_n('button')
_rz(z,aPK,'class',82,e,s,gg)
var tQK=_oz(z,83,e,s,gg)
_(aPK,tQK)
_(lOK,aPK)
_(oHK,lOK)
_(oFK,oHK)
_(e8I,oFK)
}
e8I.wxXCkey=1
e8I.wxXCkey=3
_(r,t7I)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var bSK=_n('view')
_rz(z,bSK,'class',0,e,s,gg)
var oTK=_n('view')
_rz(z,oTK,'class',1,e,s,gg)
var xUK=_n('view')
_rz(z,xUK,'class',2,e,s,gg)
var oVK=_mz(z,'text',['bindtap',3,'class',1,'data-event-opts',2],[],e,s,gg)
var fWK=_oz(z,6,e,s,gg)
_(oVK,fWK)
_(xUK,oVK)
_(oTK,xUK)
var cXK=_n('view')
_rz(z,cXK,'class',7,e,s,gg)
var hYK=_mz(z,'text',['bindtap',8,'class',1,'data-event-opts',2],[],e,s,gg)
var oZK=_oz(z,11,e,s,gg)
_(hYK,oZK)
_(cXK,hYK)
_(oTK,cXK)
_(bSK,oTK)
var c1K=_mz(z,'view',['class',12,'hidden',1],[],e,s,gg)
var o2K=_mz(z,'view',['bindtap',14,'class',1,'data-event-opts',2],[],e,s,gg)
_(c1K,o2K)
var l3K=_mz(z,'view',['class',17,'hidden',1],[],e,s,gg)
var a4K=_v()
_(l3K,a4K)
var t5K=function(b7K,e6K,o8K,gg){
var o0K=_mz(z,'view',['bindtap',23,'class',1,'data-event-opts',2],[],b7K,e6K,gg)
var fAL=_n('text')
_rz(z,fAL,'class',26,b7K,e6K,gg)
var cBL=_oz(z,27,b7K,e6K,gg)
_(fAL,cBL)
_(o0K,fAL)
_(o8K,o0K)
return o8K
}
a4K.wxXCkey=2
_2z(z,21,t5K,e,s,gg,a4K,'item','index','index')
_(c1K,l3K)
var hCL=_mz(z,'view',['class',28,'hidden',1],[],e,s,gg)
var oDL=_v()
_(hCL,oDL)
var cEL=function(lGL,oFL,aHL,gg){
var eJL=_mz(z,'view',['bindtap',34,'class',1,'data-event-opts',2],[],lGL,oFL,gg)
var bKL=_n('text')
_rz(z,bKL,'class',37,lGL,oFL,gg)
var oLL=_oz(z,38,lGL,oFL,gg)
_(bKL,oLL)
_(eJL,bKL)
_(aHL,eJL)
return aHL
}
oDL.wxXCkey=2
_2z(z,32,cEL,e,s,gg,oDL,'item','index','index')
_(c1K,hCL)
_(bSK,c1K)
var xML=_n('view')
_rz(z,xML,'class',39,e,s,gg)
var oNL=_v()
_(xML,oNL)
var fOL=function(hQL,cPL,oRL,gg){
var oTL=_mz(z,'view',['bindtap',44,'class',1,'data-event-opts',2],[],hQL,cPL,gg)
var lUL=_n('text')
_rz(z,lUL,'class',47,hQL,cPL,gg)
var aVL=_oz(z,48,hQL,cPL,gg)
_(lUL,aVL)
_(oTL,lUL)
var tWL=_n('text')
_rz(z,tWL,'class',49,hQL,cPL,gg)
var eXL=_oz(z,50,hQL,cPL,gg)
_(tWL,eXL)
_(oTL,tWL)
var bYL=_n('text')
_rz(z,bYL,'class',51,hQL,cPL,gg)
var oZL=_oz(z,52,hQL,cPL,gg)
_(bYL,oZL)
_(oTL,bYL)
_(oRL,oTL)
return oRL
}
oNL.wxXCkey=2
_2z(z,42,fOL,e,s,gg,oNL,'item','index','index')
_(bSK,xML)
_(r,bSK)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var o2L=_n('view')
_rz(z,o2L,'class',0,e,s,gg)
var f3L=_n('view')
_rz(z,f3L,'class',1,e,s,gg)
var c4L=_mz(z,'text',['bindtap',2,'class',1,'data-event-opts',2],[],e,s,gg)
_(f3L,c4L)
var h5L=_n('text')
_rz(z,h5L,'class',5,e,s,gg)
var o6L=_n('text')
_rz(z,o6L,'class',6,e,s,gg)
var c7L=_oz(z,7,e,s,gg)
_(o6L,c7L)
_(h5L,o6L)
var o8L=_n('text')
_rz(z,o8L,'class',8,e,s,gg)
var l9L=_oz(z,9,e,s,gg)
_(o8L,l9L)
_(h5L,o8L)
_(f3L,h5L)
var a0L=_mz(z,'text',['bindtap',10,'class',1,'data-event-opts',2],[],e,s,gg)
_(f3L,a0L)
_(o2L,f3L)
var tAM=_n('view')
_rz(z,tAM,'class',13,e,s,gg)
var eBM=_mz(z,'swiper',['bindchange',14,'class',1,'current',2,'data-event-opts',3,'indicatorDots',4,'interval',5,'style',6],[],e,s,gg)
var bCM=_v()
_(eBM,bCM)
var oDM=function(oFM,xEM,fGM,gg){
var hIM=_n('swiper-item')
_rz(z,hIM,'style',25,oFM,xEM,gg)
var oJM=_n('view')
_rz(z,oJM,'class',26,oFM,xEM,gg)
var oLM=_n('view')
_rz(z,oLM,'class',27,oFM,xEM,gg)
var lMM=_mz(z,'answerinput',['bind:__l',28,'data',1,'status',2,'vueId',3],[],oFM,xEM,gg)
_(oLM,lMM)
_(oJM,oLM)
var cKM=_v()
_(oJM,cKM)
if(_oz(z,32,oFM,xEM,gg)){cKM.wxVkey=1
var aNM=_mz(z,'subquestionswiper',['bind:__l',33,'data',1,'status',2,'vueId',3],[],oFM,xEM,gg)
_(cKM,aNM)
}
cKM.wxXCkey=1
cKM.wxXCkey=3
_(hIM,oJM)
_(fGM,hIM)
return fGM
}
bCM.wxXCkey=4
_2z(z,23,oDM,e,s,gg,bCM,'test','index','index')
_(tAM,eBM)
_(o2L,tAM)
var tOM=_mz(z,'view',['class',37,'hidden',1],[],e,s,gg)
var ePM=_mz(z,'view',['bindtap',39,'class',1,'data-event-opts',2],[],e,s,gg)
_(tOM,ePM)
var bQM=_n('view')
_rz(z,bQM,'class',42,e,s,gg)
var oRM=_n('view')
_rz(z,oRM,'class',43,e,s,gg)
var xSM=_n('text')
_rz(z,xSM,'class',44,e,s,gg)
var oTM=_oz(z,45,e,s,gg)
_(xSM,oTM)
_(oRM,xSM)
var fUM=_mz(z,'text',['bindtap',46,'class',1,'data-event-opts',2],[],e,s,gg)
_(oRM,fUM)
_(bQM,oRM)
var cVM=_n('view')
_rz(z,cVM,'class',49,e,s,gg)
var hWM=_v()
_(cVM,hWM)
var oXM=function(oZM,cYM,l1M,gg){
var t3M=_n('view')
_rz(z,t3M,'class',54,oZM,cYM,gg)
var e4M=_mz(z,'view',['bindtap',55,'class',1,'data-event-opts',2],[],oZM,cYM,gg)
var b5M=_oz(z,58,oZM,cYM,gg)
_(e4M,b5M)
_(t3M,e4M)
_(l1M,t3M)
return l1M
}
hWM.wxXCkey=2
_2z(z,52,oXM,e,s,gg,hWM,'item','index','index')
_(bQM,cVM)
_(tOM,bQM)
_(o2L,tOM)
_(r,o2L)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var x7M=_n('view')
_rz(z,x7M,'class',0,e,s,gg)
var o8M=_n('view')
_rz(z,o8M,'class',1,e,s,gg)
var f9M=_mz(z,'text',['bindtap',2,'class',1,'data-event-opts',2],[],e,s,gg)
_(o8M,f9M)
var c0M=_n('text')
_rz(z,c0M,'class',5,e,s,gg)
var hAN=_n('text')
_rz(z,hAN,'class',6,e,s,gg)
var oBN=_oz(z,7,e,s,gg)
_(hAN,oBN)
_(c0M,hAN)
var cCN=_n('text')
_rz(z,cCN,'class',8,e,s,gg)
var oDN=_oz(z,9,e,s,gg)
_(cCN,oDN)
_(c0M,cCN)
_(o8M,c0M)
var lEN=_mz(z,'text',['bindtap',10,'class',1,'data-event-opts',2],[],e,s,gg)
_(o8M,lEN)
_(x7M,o8M)
var aFN=_n('view')
_rz(z,aFN,'class',13,e,s,gg)
var tGN=_mz(z,'swiper',['bindchange',14,'class',1,'current',2,'data-event-opts',3,'indicatorDots',4,'interval',5,'style',6],[],e,s,gg)
var eHN=_v()
_(tGN,eHN)
var bIN=function(xKN,oJN,oLN,gg){
var cNN=_n('swiper-item')
var hON=_n('view')
_rz(z,hON,'class',25,xKN,oJN,gg)
var cQN=_n('view')
_rz(z,cQN,'class',26,xKN,oJN,gg)
var oRN=_mz(z,'answerinput',['bind:__l',27,'data',1,'status',2,'vueId',3],[],xKN,oJN,gg)
_(cQN,oRN)
_(hON,cQN)
var oPN=_v()
_(hON,oPN)
if(_oz(z,31,xKN,oJN,gg)){oPN.wxVkey=1
var lSN=_mz(z,'subquestionswiper',['bind:__l',32,'data',1,'status',2,'vueId',3],[],xKN,oJN,gg)
_(oPN,lSN)
}
oPN.wxXCkey=1
oPN.wxXCkey=3
_(cNN,hON)
_(oLN,cNN)
return oLN
}
eHN.wxXCkey=4
_2z(z,23,bIN,e,s,gg,eHN,'test','index','index')
_(aFN,tGN)
_(x7M,aFN)
var aTN=_mz(z,'view',['class',36,'hidden',1],[],e,s,gg)
var tUN=_mz(z,'view',['bindtap',38,'class',1,'data-event-opts',2],[],e,s,gg)
_(aTN,tUN)
var eVN=_n('view')
_rz(z,eVN,'class',41,e,s,gg)
var bWN=_n('view')
_rz(z,bWN,'class',42,e,s,gg)
var oXN=_n('text')
_rz(z,oXN,'class',43,e,s,gg)
var xYN=_oz(z,44,e,s,gg)
_(oXN,xYN)
_(bWN,oXN)
var oZN=_mz(z,'text',['bindtap',45,'class',1,'data-event-opts',2],[],e,s,gg)
_(bWN,oZN)
_(eVN,bWN)
var f1N=_n('view')
_rz(z,f1N,'class',48,e,s,gg)
var c2N=_v()
_(f1N,c2N)
var h3N=function(c5N,o4N,o6N,gg){
var a8N=_n('view')
_rz(z,a8N,'class',53,c5N,o4N,gg)
var t9N=_mz(z,'view',['bindtap',54,'class',1,'data-event-opts',2],[],c5N,o4N,gg)
var e0N=_oz(z,57,c5N,o4N,gg)
_(t9N,e0N)
_(a8N,t9N)
_(o6N,a8N)
return o6N
}
c2N.wxXCkey=2
_2z(z,51,h3N,e,s,gg,c2N,'item','index','index')
_(eVN,f1N)
_(aTN,eVN)
_(x7M,aTN)
_(r,x7M)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var oBO=_n('view')
_rz(z,oBO,'class',0,e,s,gg)
var xCO=_n('view')
_rz(z,xCO,'class',1,e,s,gg)
var fEO=_v()
_(xCO,fEO)
var cFO=function(oHO,hGO,cIO,gg){
var lKO=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],oHO,hGO,gg)
var aLO=_n('text')
_rz(z,aLO,'class',9,oHO,hGO,gg)
var tMO=_oz(z,10,oHO,hGO,gg)
_(aLO,tMO)
_(lKO,aLO)
_(cIO,lKO)
return cIO
}
fEO.wxXCkey=2
_2z(z,4,cFO,e,s,gg,fEO,'tab','index','*this')
var oDO=_v()
_(xCO,oDO)
if(_oz(z,11,e,s,gg)){oDO.wxVkey=1
var eNO=_n('view')
_rz(z,eNO,'class',12,e,s,gg)
var bOO=_mz(z,'text',['bindtap',13,'class',1,'data-event-opts',2],[],e,s,gg)
_(eNO,bOO)
var oPO=_mz(z,'text',['bindtap',16,'class',1,'data-event-opts',2],[],e,s,gg)
_(eNO,oPO)
var xQO=_mz(z,'text',['bindtap',19,'class',1,'data-event-opts',2],[],e,s,gg)
_(eNO,xQO)
_(oDO,eNO)
}
oDO.wxXCkey=1
_(oBO,xCO)
var oRO=_n('view')
_rz(z,oRO,'class',22,e,s,gg)
var fSO=_v()
_(oRO,fSO)
if(_oz(z,23,e,s,gg)){fSO.wxVkey=1
var oVO=_mz(z,'course',['bind:__l',24,'vueId',1],[],e,s,gg)
_(fSO,oVO)
}
var cTO=_v()
_(oRO,cTO)
if(_oz(z,26,e,s,gg)){cTO.wxVkey=1
var cWO=_mz(z,'homework',['bind:__l',27,'ifLoadMore',1,'vueId',2],[],e,s,gg)
_(cTO,cWO)
}
var hUO=_v()
_(oRO,hUO)
if(_oz(z,30,e,s,gg)){hUO.wxVkey=1
var oXO=_mz(z,'worntopic',['bind:__l',31,'bind:selectHide',1,'data-event-opts',2,'ifLoadMore',3,'selectShow',4,'selectType',5,'vueId',6],[],e,s,gg)
_(hUO,oXO)
}
fSO.wxXCkey=1
fSO.wxXCkey=3
cTO.wxXCkey=1
cTO.wxXCkey=3
hUO.wxXCkey=1
hUO.wxXCkey=3
_(oBO,oRO)
_(r,oBO)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var aZO=_n('view')
_rz(z,aZO,'class',0,e,s,gg)
var e2O=_n('view')
_rz(z,e2O,'class',1,e,s,gg)
var b3O=_mz(z,'view',['bindtap',2,'class',1,'data-event-opts',2],[],e,s,gg)
var o4O=_n('text')
_rz(z,o4O,'class',5,e,s,gg)
var x5O=_oz(z,6,e,s,gg)
_(o4O,x5O)
var o6O=_n('text')
_rz(z,o6O,'class',7,e,s,gg)
_(o4O,o6O)
_(b3O,o4O)
_(e2O,b3O)
var f7O=_mz(z,'view',['bindtap',8,'class',1,'data-event-opts',2],[],e,s,gg)
var c8O=_n('text')
_rz(z,c8O,'class',11,e,s,gg)
var h9O=_oz(z,12,e,s,gg)
_(c8O,h9O)
var o0O=_n('text')
_rz(z,o0O,'class',13,e,s,gg)
_(c8O,o0O)
_(f7O,c8O)
_(e2O,f7O)
var cAP=_mz(z,'view',['bindtap',14,'class',1,'data-event-opts',2],[],e,s,gg)
var oBP=_n('text')
_rz(z,oBP,'class',17,e,s,gg)
var lCP=_oz(z,18,e,s,gg)
_(oBP,lCP)
var aDP=_n('text')
_rz(z,aDP,'class',19,e,s,gg)
_(oBP,aDP)
_(cAP,oBP)
_(e2O,cAP)
var tEP=_mz(z,'view',['class',20,'hidden',1],[],e,s,gg)
var eFP=_mz(z,'view',['bindtap',22,'class',1,'data-event-opts',2],[],e,s,gg)
_(tEP,eFP)
var bGP=_mz(z,'view',['class',25,'hidden',1],[],e,s,gg)
var oHP=_v()
_(bGP,oHP)
var xIP=function(fKP,oJP,cLP,gg){
var oNP=_mz(z,'view',['bindtap',31,'class',1,'data-event-opts',2],[],fKP,oJP,gg)
var cOP=_n('text')
_rz(z,cOP,'class',34,fKP,oJP,gg)
var oPP=_oz(z,35,fKP,oJP,gg)
_(cOP,oPP)
_(oNP,cOP)
_(cLP,oNP)
return cLP
}
oHP.wxXCkey=2
_2z(z,29,xIP,e,s,gg,oHP,'item','index','index')
_(tEP,bGP)
var lQP=_mz(z,'view',['class',36,'hidden',1],[],e,s,gg)
var aRP=_oz(z,38,e,s,gg)
_(lQP,aRP)
_(tEP,lQP)
var tSP=_mz(z,'view',['class',39,'hidden',1],[],e,s,gg)
var eTP=_v()
_(tSP,eTP)
var bUP=function(xWP,oVP,oXP,gg){
var cZP=_mz(z,'view',['bindtap',45,'class',1,'data-event-opts',2],[],xWP,oVP,gg)
var h1P=_n('text')
_rz(z,h1P,'class',48,xWP,oVP,gg)
var o2P=_oz(z,49,xWP,oVP,gg)
_(h1P,o2P)
_(cZP,h1P)
_(oXP,cZP)
return oXP
}
eTP.wxXCkey=2
_2z(z,43,bUP,e,s,gg,eTP,'item','index','index')
_(tEP,tSP)
_(e2O,tEP)
_(aZO,e2O)
var c3P=_n('view')
_rz(z,c3P,'class',50,e,s,gg)
var o4P=_v()
_(c3P,o4P)
var l5P=function(t7P,a6P,e8P,gg){
var o0P=_mz(z,'wrongtest',['bind:__l',55,'bind:chooseCancel',1,'bind:chooseConfirm',2,'cancelSelect',3,'chooseAll',4,'data',5,'data-event-opts',6,'selectShow',7,'vueId',8],[],t7P,a6P,gg)
_(e8P,o0P)
return e8P
}
o4P.wxXCkey=4
_2z(z,53,l5P,e,s,gg,o4P,'test','index','index')
_(aZO,c3P)
var t1O=_v()
_(aZO,t1O)
if(_oz(z,64,e,s,gg)){t1O.wxVkey=1
var xAQ=_n('view')
_rz(z,xAQ,'class',65,e,s,gg)
var oBQ=_mz(z,'view',['bindtap',66,'class',1,'data-event-opts',2],[],e,s,gg)
var fCQ=_n('view')
_rz(z,fCQ,'class',69,e,s,gg)
_(oBQ,fCQ)
var cDQ=_n('text')
var hEQ=_oz(z,70,e,s,gg)
_(cDQ,hEQ)
_(oBQ,cDQ)
_(xAQ,oBQ)
var oFQ=_n('view')
_rz(z,oFQ,'class',71,e,s,gg)
var cGQ=_oz(z,72,e,s,gg)
_(oFQ,cGQ)
_(xAQ,oFQ)
var oHQ=_mz(z,'view',['bindtap',73,'class',1,'data-event-opts',2],[],e,s,gg)
var lIQ=_oz(z,76,e,s,gg)
_(oHQ,lIQ)
_(xAQ,oHQ)
_(t1O,xAQ)
}
t1O.wxXCkey=1
_(r,aZO)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var tKQ=_n('view')
_(r,tKQ)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var bMQ=_n('view')
_rz(z,bMQ,'class',0,e,s,gg)
var oNQ=_n('view')
_rz(z,oNQ,'class',1,e,s,gg)
_(bMQ,oNQ)
var xOQ=_mz(z,'view',['bindtap',2,'class',1,'data-event-opts',2],[],e,s,gg)
_(bMQ,xOQ)
var oPQ=_n('view')
_rz(z,oPQ,'class',5,e,s,gg)
_(bMQ,oPQ)
var fQQ=_n('view')
_rz(z,fQQ,'class',6,e,s,gg)
var cRQ=_n('view')
_rz(z,cRQ,'class',7,e,s,gg)
var hSQ=_oz(z,8,e,s,gg)
_(cRQ,hSQ)
_(fQQ,cRQ)
var oTQ=_n('view')
_rz(z,oTQ,'class',9,e,s,gg)
var cUQ=_oz(z,10,e,s,gg)
_(oTQ,cUQ)
_(fQQ,oTQ)
var oVQ=_n('view')
_rz(z,oVQ,'class',11,e,s,gg)
var lWQ=_n('view')
_rz(z,lWQ,'class',12,e,s,gg)
var aXQ=_n('text')
_rz(z,aXQ,'class',13,e,s,gg)
var tYQ=_oz(z,14,e,s,gg)
_(aXQ,tYQ)
_(lWQ,aXQ)
var eZQ=_mz(z,'input',['bindinput',15,'data-event-opts',1,'data-key',2,'maxlength',3,'placeholder',4,'type',5,'value',6],[],e,s,gg)
_(lWQ,eZQ)
_(oVQ,lWQ)
var b1Q=_n('view')
_rz(z,b1Q,'class',22,e,s,gg)
var o2Q=_n('text')
_rz(z,o2Q,'class',23,e,s,gg)
var x3Q=_oz(z,24,e,s,gg)
_(o2Q,x3Q)
_(b1Q,o2Q)
var o4Q=_mz(z,'input',['password',-1,'bindconfirm',25,'bindinput',1,'data-event-opts',2,'data-key',3,'maxlength',4,'placeholder',5,'placeholderClass',6,'type',7,'value',8],[],e,s,gg)
_(b1Q,o4Q)
_(oVQ,b1Q)
_(fQQ,oVQ)
var f5Q=_mz(z,'button',['bindtap',34,'class',1,'data-event-opts',2,'disabled',3],[],e,s,gg)
var c6Q=_oz(z,38,e,s,gg)
_(f5Q,c6Q)
_(fQQ,f5Q)
var h7Q=_n('view')
_rz(z,h7Q,'class',39,e,s,gg)
var o8Q=_oz(z,40,e,s,gg)
_(h7Q,o8Q)
_(fQQ,h7Q)
_(bMQ,fQQ)
var c9Q=_n('view')
_rz(z,c9Q,'class',41,e,s,gg)
var o0Q=_oz(z,42,e,s,gg)
_(c9Q,o0Q)
var lAR=_mz(z,'text',['bindtap',43,'data-event-opts',1],[],e,s,gg)
var aBR=_oz(z,45,e,s,gg)
_(lAR,aBR)
_(c9Q,lAR)
_(bMQ,c9Q)
_(r,bMQ)
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var eDR=_n('view')
_rz(z,eDR,'class',0,e,s,gg)
var bER=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2,'hoverClass',3,'hoverStayTime',4],[],e,s,gg)
var oFR=_n('text')
_rz(z,oFR,'class',6,e,s,gg)
var xGR=_oz(z,7,e,s,gg)
_(oFR,xGR)
_(bER,oFR)
var oHR=_n('text')
_rz(z,oHR,'class',8,e,s,gg)
_(bER,oHR)
_(eDR,bER)
var fIR=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2,'hoverClass',3,'hoverStayTime',4],[],e,s,gg)
var cJR=_n('text')
_rz(z,cJR,'class',14,e,s,gg)
var hKR=_oz(z,15,e,s,gg)
_(cJR,hKR)
_(fIR,cJR)
var oLR=_n('text')
_rz(z,oLR,'class',16,e,s,gg)
_(fIR,oLR)
_(eDR,fIR)
var cMR=_mz(z,'view',['bindtap',17,'class',1,'data-event-opts',2,'hoverClass',3,'hoverStayTime',4],[],e,s,gg)
var oNR=_n('text')
_rz(z,oNR,'class',22,e,s,gg)
var lOR=_oz(z,23,e,s,gg)
_(oNR,lOR)
_(cMR,oNR)
var aPR=_n('text')
_rz(z,aPR,'class',24,e,s,gg)
_(cMR,aPR)
_(eDR,cMR)
var tQR=_n('view')
_rz(z,tQR,'class',25,e,s,gg)
var eRR=_n('text')
_rz(z,eRR,'class',26,e,s,gg)
var bSR=_oz(z,27,e,s,gg)
_(eRR,bSR)
_(tQR,eRR)
var oTR=_mz(z,'switch',['checked',-1,'bindchange',28,'color',1,'data-event-opts',2],[],e,s,gg)
_(tQR,oTR)
_(eDR,tQR)
var xUR=_mz(z,'view',['bindtap',31,'class',1,'data-event-opts',2,'hoverClass',3,'hoverStayTime',4],[],e,s,gg)
var oVR=_n('text')
_rz(z,oVR,'class',36,e,s,gg)
var fWR=_oz(z,37,e,s,gg)
_(oVR,fWR)
_(xUR,oVR)
var cXR=_n('text')
_rz(z,cXR,'class',38,e,s,gg)
_(xUR,cXR)
_(eDR,xUR)
var hYR=_mz(z,'view',['bindtap',39,'class',1,'data-event-opts',2,'hoverClass',3,'hoverStayTime',4],[],e,s,gg)
var oZR=_n('text')
_rz(z,oZR,'class',44,e,s,gg)
var c1R=_oz(z,45,e,s,gg)
_(oZR,c1R)
_(hYR,oZR)
var o2R=_n('text')
_rz(z,o2R,'class',46,e,s,gg)
_(hYR,o2R)
_(eDR,hYR)
var l3R=_n('view')
_rz(z,l3R,'class',47,e,s,gg)
var a4R=_n('text')
_rz(z,a4R,'class',48,e,s,gg)
var t5R=_oz(z,49,e,s,gg)
_(a4R,t5R)
_(l3R,a4R)
var e6R=_n('text')
_rz(z,e6R,'class',50,e,s,gg)
var b7R=_oz(z,51,e,s,gg)
_(e6R,b7R)
_(l3R,e6R)
var o8R=_n('text')
_rz(z,o8R,'class',52,e,s,gg)
_(l3R,o8R)
_(eDR,l3R)
var x9R=_mz(z,'view',['bindtap',53,'class',1,'data-event-opts',2],[],e,s,gg)
var o0R=_n('text')
_rz(z,o0R,'class',56,e,s,gg)
var fAS=_oz(z,57,e,s,gg)
_(o0R,fAS)
_(x9R,o0R)
_(eDR,x9R)
_(r,eDR)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var hCS=_n('view')
_rz(z,hCS,'class',0,e,s,gg)
var oDS=_n('view')
_rz(z,oDS,'class',1,e,s,gg)
var cES=_mz(z,'image',['class',2,'src',1],[],e,s,gg)
_(oDS,cES)
var oFS=_n('view')
_rz(z,oFS,'class',4,e,s,gg)
var lGS=_n('view')
_rz(z,lGS,'class',5,e,s,gg)
var aHS=_mz(z,'image',['class',6,'src',1],[],e,s,gg)
_(lGS,aHS)
_(oFS,lGS)
var tIS=_n('view')
_rz(z,tIS,'class',8,e,s,gg)
var eJS=_n('text')
_rz(z,eJS,'class',9,e,s,gg)
var bKS=_oz(z,10,e,s,gg)
_(eJS,bKS)
_(tIS,eJS)
_(oFS,tIS)
_(oDS,oFS)
_(hCS,oDS)
var oLS=_mz(z,'view',['bindtouchend',11,'bindtouchmove',1,'bindtouchstart',2,'class',3,'data-event-opts',4,'style',5],[],e,s,gg)
var xMS=_mz(z,'image',['class',17,'src',1],[],e,s,gg)
_(oLS,xMS)
var oNS=_n('view')
_rz(z,oNS,'class',19,e,s,gg)
var fOS=_mz(z,'list-cell',['bind:__l',20,'icon',1,'iconColor',2,'title',3,'vueId',4],[],e,s,gg)
_(oNS,fOS)
var cPS=_mz(z,'list-cell',['border',-1,'bind:__l',25,'bind:eventClick',1,'data-event-opts',2,'icon',3,'iconColor',4,'title',5,'vueId',6],[],e,s,gg)
_(oNS,cPS)
_(oLS,oNS)
_(hCS,oLS)
_(r,hCS)
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var oRS=_n('view')
var cSS=_n('view')
_rz(z,cSS,'class',0,e,s,gg)
var oTS=_mz(z,'image',['class',1,'src',1],[],e,s,gg)
_(cSS,oTS)
var lUS=_n('text')
_rz(z,lUS,'class',3,e,s,gg)
_(cSS,lUS)
var aVS=_n('view')
_rz(z,aVS,'class',4,e,s,gg)
var tWS=_mz(z,'image',['class',5,'src',1],[],e,s,gg)
_(aVS,tWS)
var eXS=_n('text')
_rz(z,eXS,'class',7,e,s,gg)
_(aVS,eXS)
_(cSS,aVS)
_(oRS,cSS)
_(r,oRS)
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],["@charset \x22UTF-8\x22;\n@font-face { font-family: yticon; font-weight: normal; font-style: normal; src: url(\x22https://at.alicdn.com/t/font_1078604_w4kpxh0rafi.ttf\x22) format(\x22truetype\x22); }\n.",[1],"yticon { font-family: \x22yticon\x22 !important; font-size: 16px; font-style: normal; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }\n.",[1],"icon-yiguoqi1:before { content: \x22\\E700\x22; }\n.",[1],"icon-iconfontshanchu1:before { content: \x22\\E619\x22; }\n.",[1],"icon-iconfontweixin:before { content: \x22\\E611\x22; }\n.",[1],"icon-alipay:before { content: \x22\\E636\x22; }\n.",[1],"icon-shang:before { content: \x22\\E624\x22; }\n.",[1],"icon-shouye:before { content: \x22\\E626\x22; }\n.",[1],"icon-shanchu4:before { content: \x22\\E622\x22; }\n.",[1],"icon-xiaoxi:before { content: \x22\\E618\x22; }\n.",[1],"icon-jiantour-copy:before { content: \x22\\E600\x22; }\n.",[1],"icon-fenxiang2:before { content: \x22\\E61E\x22; }\n.",[1],"icon-pingjia:before { content: \x22\\E67B\x22; }\n.",[1],"icon-daifukuan:before { content: \x22\\E68F\x22; }\n.",[1],"icon-pinglun-copy:before { content: \x22\\E612\x22; }\n.",[1],"icon-dianhua-copy:before { content: \x22\\E621\x22; }\n.",[1],"icon-shoucang:before { content: \x22\\E645\x22; }\n.",[1],"icon-xuanzhong2:before { content: \x22\\E62F\x22; }\n.",[1],"icon-gouwuche_:before { content: \x22\\E630\x22; }\n.",[1],"icon-icon-test:before { content: \x22\\E60C\x22; }\n.",[1],"icon-icon-test1:before { content: \x22\\E632\x22; }\n.",[1],"icon-bianji:before { content: \x22\\E646\x22; }\n.",[1],"icon-jiazailoading-A:before { content: \x22\\E8FC\x22; }\n.",[1],"icon-zuoshang:before { content: \x22\\E613\x22; }\n.",[1],"icon-jia2:before { content: \x22\\E60A\x22; }\n.",[1],"icon-huifu:before { content: \x22\\E68B\x22; }\n.",[1],"icon-sousuo:before { content: \x22\\E7CE\x22; }\n.",[1],"icon-arrow-fine-up:before { content: \x22\\E601\x22; }\n.",[1],"icon-hot:before { content: \x22\\E60E\x22; }\n.",[1],"icon-lishijilu:before { content: \x22\\E6B9\x22; }\n.",[1],"icon-zhengxinchaxun-zhifubaoceping-:before { content: \x22\\E616\x22; }\n.",[1],"icon-naozhong:before { content: \x22\\E64A\x22; }\n.",[1],"icon-xiatubiao--copy:before { content: \x22\\E608\x22; }\n.",[1],"icon-shoucang_xuanzhongzhuangtai:before { content: \x22\\E6A9\x22; }\n.",[1],"icon-jia1:before { content: \x22\\E61C\x22; }\n.",[1],"icon-bangzhu1:before { content: \x22\\E63D\x22; }\n.",[1],"icon-arrow-left-bottom:before { content: \x22\\E602\x22; }\n.",[1],"icon-arrow-right-bottom:before { content: \x22\\E603\x22; }\n.",[1],"icon-arrow-left-top:before { content: \x22\\E604\x22; }\n.",[1],"icon-icon--:before { content: \x22\\E744\x22; }\n.",[1],"icon-zuojiantou-up:before { content: \x22\\E605\x22; }\n.",[1],"icon-xia:before { content: \x22\\E62D\x22; }\n.",[1],"icon--jianhao:before { content: \x22\\E60B\x22; }\n.",[1],"icon-weixinzhifu:before { content: \x22\\E61A\x22; }\n.",[1],"icon-comment:before { content: \x22\\E64F\x22; }\n.",[1],"icon-weixin:before { content: \x22\\E61F\x22; }\n.",[1],"icon-fenlei1:before { content: \x22\\E620\x22; }\n.",[1],"icon-erjiye-yucunkuan:before { content: \x22\\E623\x22; }\n.",[1],"icon-Group-:before { content: \x22\\E688\x22; }\n.",[1],"icon-you:before { content: \x22\\E606\x22; }\n.",[1],"icon-forward:before { content: \x22\\E607\x22; }\n.",[1],"icon-tuijian:before { content: \x22\\E610\x22; }\n.",[1],"icon-bangzhu:before { content: \x22\\E679\x22; }\n.",[1],"icon-share:before { content: \x22\\E656\x22; }\n.",[1],"icon-yiguoqi:before { content: \x22\\E997\x22; }\n.",[1],"icon-shezhi1:before { content: \x22\\E61D\x22; }\n.",[1],"icon-fork:before { content: \x22\\E61B\x22; }\n.",[1],"icon-kafei:before { content: \x22\\E66A\x22; }\n.",[1],"icon-iLinkapp-:before { content: \x22\\E654\x22; }\n.",[1],"icon-saomiao:before { content: \x22\\E60D\x22; }\n.",[1],"icon-shezhi:before { content: \x22\\E60F\x22; }\n.",[1],"icon-shouhoutuikuan:before { content: \x22\\E631\x22; }\n.",[1],"icon-gouwuche:before { content: \x22\\E609\x22; }\n.",[1],"icon-dizhi:before { content: \x22\\E614\x22; }\n.",[1],"icon-fenlei:before { content: \x22\\E706\x22; }\n.",[1],"icon-xingxing:before { content: \x22\\E70B\x22; }\n.",[1],"icon-tuandui:before { content: \x22\\E633\x22; }\n.",[1],"icon-zuanshi:before { content: \x22\\E615\x22; }\n.",[1],"icon-zuo:before { content: \x22\\E63C\x22; }\n.",[1],"icon-shoucang2:before { content: \x22\\E62E\x22; }\n.",[1],"icon-shouhuodizhi:before { content: \x22\\E712\x22; }\n.",[1],"icon-yishouhuo:before { content: \x22\\E71A\x22; }\n.",[1],"icon-dianzan-ash:before { content: \x22\\E617\x22; }\nwx-view, wx-scroll-view, wx-swiper, wx-swiper-item, wx-cover-view, wx-cover-image, wx-icon, wx-text, wx-rich-text, wx-progress, wx-button, wx-checkbox, wx-form, wx-input, wx-label, wx-radio, wx-slider, wx-switch, wx-textarea, wx-navigator, wx-audio, wx-camera, wx-image, wx-video { box-sizing: border-box; }\n.",[1],"Skeleton { background: #f3f3f3; padding: ",[0,20]," 0; border-radius: ",[0,8],"; }\n.",[1],"image-wrapper { font-size: 0; background: #f3f3f3; border-radius: 4px; }\n.",[1],"image-wrapper wx-image { width: 100%; height: 100%; -webkit-transition: .6s; transition: .6s; opacity: 0; }\n.",[1],"image-wrapper wx-image.",[1],"loaded { opacity: 1; }\n.",[1],"clamp { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; display: block; }\n.",[1],"common-hover { background: #f5f5f5; }\n.",[1],"b-b:after, .",[1],"b-t:after { position: absolute; z-index: 3; left: 0; right: 0; height: 0; content: \x27\x27; -webkit-transform: scaleY(0.5); transform: scaleY(0.5); border-bottom: 1px solid #E4E7ED; }\n.",[1],"b-b:after { bottom: 0; }\n.",[1],"b-t:after { top: 0; }\nwx-uni-page-body { height: 100%; }\nwx-uni-button, wx-button { height: ",[0,80],"; line-height: ",[0,80],"; font-size: ",[0,34],"; font-weight: normal; }\nwx-uni-button.",[1],"no-border:before, wx-uni-button.",[1],"no-border:after, wx-button.",[1],"no-border:before, wx-button.",[1],"no-border:after { border: 0; }\nwx-uni-button[type\x3ddefault], wx-button[type\x3ddefault] { color: #303133; }\n.",[1],"input-placeholder { color: #999999; }\n.",[1],"placeholder { color: #999999; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./app.wxss:328:12)",{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./app.wxss:328:12)",{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/button/button.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"btn { margin: 0 auto; width: 90%; height: ",[0,100],"; background: -webkit-linear-gradient(left, #f9d423 0%, #ff794a 100%); background: linear-gradient(90deg, #f9d423 0%, #ff794a 100%); border-radius: ",[0,50],"; font-size: 16px; font-family: PingFang SC; font-weight: bold; color: white; text-align: center; line-height: ",[0,100],"; }\n",],undefined,{path:"./components/button/button.wxss"});    
__wxAppCode__['components/button/button.wxml']=$gwx('./components/button/button.wxml');

__wxAppCode__['components/enter-panel/enter-panel.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"enter-panel { width: ",[0,686],"; height: ",[0,300],"; margin: ",[0,40]," auto; background: #fff; border-radius: 10px; }\n.",[1],"enter-panel .",[1],"panel-header { border-radius: 10px; height: ",[0,100],"; color: #fff; }\n.",[1],"enter-panel .",[1],"panel-header .",[1],"title { font-size: 17px; float: left; margin: ",[0,26]," ",[0,0]," 0 ",[0,40],"; }\n.",[1],"enter-panel .",[1],"panel-header .",[1],"more { font-size: 13px; float: right; margin: ",[0,48]," ",[0,40]," 0 0; }\n",],undefined,{path:"./components/enter-panel/enter-panel.wxss"});    
__wxAppCode__['components/enter-panel/enter-panel.wxml']=$gwx('./components/enter-panel/enter-panel.wxml');

__wxAppCode__['components/homework_answer_input/index.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"answer-input .",[1],"question { line-height: 36px; }\n.",[1],"answer-input .",[1],"options { margin-top: ",[0,20],"; }\n.",[1],"answer-input .",[1],"options .",[1],"option { display: -webkit-box; display: -webkit-flex; display: flex; }\n.",[1],"answer-input .",[1],"options .",[1],"option .",[1],"option-num { -webkit-flex-basis: ",[0,72],"; flex-basis: ",[0,72],"; height: ",[0,72],"; background: white; border: 2px solid #e5e9ef; border-radius: 50%; text-align: center; line-height: ",[0,68],"; margin: 0 ",[0,32]," ",[0,40]," 0; }\n.",[1],"answer-input .",[1],"options .",[1],"option .",[1],"option-answer { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; line-height: 20px; margin-top: 6px; }\n.",[1],"answer-input .",[1],"options .",[1],"selected .",[1],"option-num { background: #FF9600; color: #fff; border: 0; }\n.",[1],"answer-input .",[1],"options .",[1],"correct .",[1],"option-num { background: #50C341; color: #fff; border: 0; }\n.",[1],"answer-input .",[1],"options .",[1],"wrong .",[1],"option-num { background: #FF5A5A; color: #fff; border: 0; }\n.",[1],"answer-input .",[1],"jieda-answer { margin: ",[0,80]," auto 0 auto; }\n.",[1],"answer-input .",[1],"answer-upload { margin-bottom: ",[0,60],"; width: ",[0,686],"; height: ",[0,100],"; line-height: ",[0,100],"; background: #fff5eb; border: 2px solid #ffc38c; border-radius: ",[0,20],"; text-align: center; }\n.",[1],"answer-input .",[1],"answer-upload .",[1],"title { font-size: 16px; color: #ff7800; }\n.",[1],"answer-input .",[1],"uni-input { margin-top: ",[0,24],"; }\n.",[1],"answer-input .",[1],"inputing { background: #fafafb; border: 2px solid #e5e9ef; }\n.",[1],"answer-input .",[1],"unwrite { background: #e5e9ef; border: 2px solid #e5e9ef; }\n.",[1],"answer-input .",[1],"unwrite .",[1],"title { color: #BEC3CD; }\n.",[1],"answer-input .",[1],"jieda-answer-noreview { margin: ",[0,80]," auto ",[0,20]," auto; }\n.",[1],"answer-input .",[1],"jieda-answer-noreview .",[1],"title { display: block; width: 100%; color: #FF7800; margin-left: ",[0,-12],"; }\n.",[1],"answer-input .",[1],"jieda-answer-noreview .",[1],"answer { display: block; margin-top: ",[0,30],"; color: #323643; }\n.",[1],"answer-input .",[1],"teacherword-anlysis { font-size: 13px; font-family: PingFang SC; font-weight: bold; color: #323643; line-height: 26px; margin-left: ",[0,-12],"; position: relative; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"line-block .",[1],"title { color: #FF7800; margin-right: ",[0,10],"; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"ifcorrect-pic { position: absolute; right: ",[0,32],"; top: ",[0,0],"; width: ",[0,142],"; height: ",[0,136],"; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"ifcorrect-pic.",[1],"correct { background: url(data:image/png;base64,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); background-size: ",[0,142]," ",[0,136],"; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"ifcorrect-pic.",[1],"wrong { background: url(data:image/png;base64,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\x3d); background-size: ",[0,142]," ",[0,136],"; }\n",],undefined,{path:"./components/homework_answer_input/index.wxss"});    
__wxAppCode__['components/homework_answer_input/index.wxml']=$gwx('./components/homework_answer_input/index.wxml');

__wxAppCode__['components/homework_subquestion_swiper/index.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"subquestion-box { height: ",[0,1200],"; margin-top: ",[0,60],"; }\n.",[1],"subquestion-box .",[1],"subquestion-title { overflow: hidden; height: ",[0,100],"; background: #f5f6f8; line-height: ",[0,100],"; padding: 0 ",[0,32],"; font-size: 16px; font-family: PingFang SC; font-weight: bold; color: #323643; }\n.",[1],"subquestion-box .",[1],"subquestion-title .",[1],"test-num { float: left; }\n.",[1],"subquestion-box .",[1],"subquestion-title .",[1],"test-current { float: right; }\n.",[1],"subquestion-box .",[1],"subquestion-title .",[1],"test-current .",[1],"test-totalnum { color: #878C9E; font-size: 12px; }\n.",[1],"subquestion-box .",[1],"test-content { padding: 0 ",[0,32],"; }\n.",[1],"subquestion-box .",[1],"test-content .",[1],"question { line-height: 36px; }\n.",[1],"subquestion-box .",[1],"test-content .",[1],"options { margin-top: ",[0,20],"; }\n.",[1],"subquestion-box .",[1],"test-content .",[1],"options .",[1],"option { display: -webkit-box; display: -webkit-flex; display: flex; }\n.",[1],"subquestion-box .",[1],"test-content .",[1],"options .",[1],"option .",[1],"option-num { -webkit-flex-basis: ",[0,72],"; flex-basis: ",[0,72],"; height: ",[0,72],"; background: white; border: 2px solid #e5e9ef; border-radius: 50%; text-align: center; line-height: ",[0,68],"; margin: 0 ",[0,32]," ",[0,40]," 0; }\n.",[1],"subquestion-box .",[1],"test-content .",[1],"options .",[1],"option .",[1],"option-answer { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; line-height: 20px; margin-top: 6px; }\n.",[1],"subquestion-box .",[1],"test-content .",[1],"jieda-answer { margin: ",[0,80]," auto; }\n",],undefined,{path:"./components/homework_subquestion_swiper/index.wxss"});    
__wxAppCode__['components/homework_subquestion_swiper/index.wxml']=$gwx('./components/homework_subquestion_swiper/index.wxml');

__wxAppCode__['components/mix-list-cell.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"icon .",[1],"mix-list-cell.",[1],"b-b:after { left: ",[0,90],"; }\n.",[1],"mix-list-cell { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: baseline; -webkit-align-items: baseline; align-items: baseline; padding: ",[0,20]," ",[0,30],"; line-height: ",[0,60],"; position: relative; }\n.",[1],"mix-list-cell.",[1],"cell-hover { background: #fafafa; }\n.",[1],"mix-list-cell.",[1],"b-b:after { left: ",[0,30],"; }\n.",[1],"mix-list-cell .",[1],"cell-icon { -webkit-align-self: center; align-self: center; width: ",[0,56],"; max-height: ",[0,60],"; font-size: ",[0,38],"; }\n.",[1],"mix-list-cell .",[1],"cell-more { -webkit-align-self: center; align-self: center; font-size: ",[0,30],"; color: #606266; margin-left: 10px; }\n.",[1],"mix-list-cell .",[1],"cell-tit { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; font-size: ",[0,28],"; color: #303133; margin-right: ",[0,10],"; }\n.",[1],"mix-list-cell .",[1],"cell-tip { font-size: ",[0,26],"; color: #909399; }\n",],undefined,{path:"./components/mix-list-cell.wxss"});    
__wxAppCode__['components/mix-list-cell.wxml']=$gwx('./components/mix-list-cell.wxml');

__wxAppCode__['components/uni-number-box.wxss']=setCssToHead([".",[1],"uni-numbox { position:absolute; left: ",[0,30],"; bottom: 0; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: start; -webkit-justify-content: flex-start; justify-content: flex-start; -webkit-box-align: center; -webkit-align-items: center; align-items: center; width:",[0,230],"; height: ",[0,70],"; background:#f5f5f5; }\n.",[1],"uni-numbox-minus, .",[1],"uni-numbox-plus { margin: 0; background-color: #f5f5f5; width: ",[0,70],"; height: 100%; line-height: ",[0,70],"; text-align: center; position: relative; }\n.",[1],"uni-numbox-minus .",[1],"yticon, .",[1],"uni-numbox-plus .",[1],"yticon{ font-size: ",[0,36],"; color: #555; }\n.",[1],"uni-numbox-minus { border-right: none; border-top-left-radius: ",[0,6],"; border-bottom-left-radius: ",[0,6],"; }\n.",[1],"uni-numbox-plus { border-left: none; border-top-right-radius: ",[0,6],"; border-bottom-right-radius: ",[0,6],"; }\n.",[1],"uni-numbox-value { position: relative; background-color: #f5f5f5; width: ",[0,90],"; height: ",[0,50],"; text-align: center; padding: 0; font-size: ",[0,30],"; }\n.",[1],"uni-numbox-disabled.",[1],"yticon { color: #d6d6d6; }\n",],undefined,{path:"./components/uni-number-box.wxss"});    
__wxAppCode__['components/uni-number-box.wxml']=$gwx('./components/uni-number-box.wxml');

__wxAppCode__['components/wrong_test/wrong_test.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"wrong-test { box-shadow: 0 0 12px 0px rgba(128, 128, 128, 0.2); background: white; border-radius: ",[0,20],"; font-family: PingFang SC; font-weight: bold; padding: ",[0,32],"; font-size: 13px; margin-bottom: ",[0,33],"; position: relative; }\n.",[1],"wrong-test.",[1],"choosing { -webkit-transform: translate(",[0,99],", 0); transform: translate(",[0,99],", 0); }\n.",[1],"wrong-test .",[1],"choose-area { position: absolute; left: ",[0,-100],"; top: 0; width: ",[0,40],"; height: 100%; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"wrong-test .",[1],"choose-area .",[1],"choose-btn { width: ",[0,40],"; height: ",[0,40],"; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAE2UlEQVRYR81ZS1BbZRT+zs0DQqGUailFClaZoa0ttSTWGXlooA4LhxnHhS6sK8fH2NGd3djRdnSj3enI1FbdqDOOCx/DuGA0iTSkM2JuLNhKmUErD3laKA0vk9x7nD9wY3KTNBBCyNnk5n+d7/7nP+c/57uENOQMs9TULT/EgB2QrAR1P0AVzFwEIoUYt0E8wZCuA6pMgOtSg/WXM0TqetXReiY4HL4qMvMrAJ4DsGc9cwGMA/iMA9Te0lI3tNa5awLY2ekpNVvyzjLR8wBMa108ybggEX0SWFh6q7W1firVWikBurrkZ1WJ3yfQzlSLraefwTOSSq/ZH7V+cad5SQF6vV7T7SX6EMALiRYwGCTcVVKMkh1FKNxmgSU/D0ajITw0FFKwtPwv5heWMHvLj5uzc1CUpMfv4nYLn7TZbMFEehIC7OjwFmwrpq9BaNVPsuSbUVlRht27SmAwrABKJYqiYHJ6FsOjk2HgccLoXJjjp9rabIv6vjiAqzvXAcSCkyTCvspyVJSXQjynI6rKGB2bwo3hMYhnnXRut3CbfifjNDnc8gXSmTU/34zDB+4PmzITIkx/tf8PLC0H9MtdbG60vhjdGANQOARL+Dx6QGGBBUcOVcNs3qjzxmIJBILovTqI+cWlmA5ScSLacSIARSgxFuT1R3ur2DlrbU3GwWmIBEi5bwDLUTspvDskmQ601h8Jh6AIQKdbPg/gJW2yOGd1tTUoKizIhFWTruGfX4Svb0B/Jj9qbrS+HAH4g9tbaQANRgfh+6rKUbW3bFPBaYsPjUzgz6GxaF1BBVz9eKNtOLyDTrf8LoBT2ggRSo7VHYQkSVkBKDy6x/d7TAhSGeeON1lP0crF7xuNvltrqitRXnZ3VsBpSsYm/sHA4HC0znF7Q10FObp6HiHJ4NF6xA1Rf6wW4jebIm4aT09fzI3DqlJPLrf8BgPvaGBKd5XggZp92cQW0XVt4Aampmcj/wk4TQ63/A0BT2qtW2HeZGZm4FtyuuVrAA5qg2wP7t/00JLMPH7/Iry91yPdzOgXAMWe7tBaGx6uhclk3BITB4MhdP/cF637lgAo0pwIosfqj4IovWRgo2/FzPjJ82vUDrJCTrdvGeA8rXUrAaqqiq7LV/QA5WkAkaC3lSYOBEPwJDBx7jjJ/CK8V3ROksthBszfkaPLe5okejt3A3WuX3XMLLlyOVkQpv3xkvyeRHj9/3QrbzXdyk48TJRugXGuWaRbAlQuJqwmcHWjlrCuJq1xKb+oRwo3OeWfn18M1yW6MjQ25RcAOz29pUY1uOVFE0AzQckQXzQJkEnLzsPVMJsyXHYGg+j9LUHZSdIJe8PRCF8T5wVOt3xBz8eIGuVQFgp3Zv64pckWwwWti/q4d+8e7L1HUB/plQPinI38PYm/RsbTpz6EqcPkUQl9BcYT+hRKsFiVFbszSx4Rvl+Y5afXRB5pgFwulxGGog+YKFxA6yVMv+0sRklxLP3GDISUUJgtCNNvc37cnElOvxHzeSj+V+12eyiRnpSR2NUtP6Myt28GgcksnTzeVPflnRLdlAC1EGRm5SwzZ4QCBvBpUDK+qfEvGwaoLeDw+KpI3SCJLlF7S32GSXT9G2qfIcBoBsgK4hrxGQLgopWx5Ad4FEwDAMsgONP9DPEfgr5kIbSn2nIAAAAASUVORK5CYII\x3d) no-repeat; background-size: ",[0,40]," ",[0,40],"; }\n.",[1],"wrong-test .",[1],"choose-area .",[1],"choose-btn.",[1],"is-select { background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAEc0lEQVRYR9WZf0yVVRjHPwcuggjhBSJFBEwydXNtlWvDtZZbq63VWitbIWUKN8pqbRSXlVP6YXKxH8smE1DXVv6sCDKcpAI16Ze55lxZq39qbTRb0owaCZfTzvtyue8L7733PZdL0fsP2z3P830+5zmc5z3neQVxPLKOJAZYTjI3AtcgWIykAMhEEERyAcEvSL4FThGkmwxOijpGdMMJHQdZTREeHkFQDszV8QX6kLzJMI3iZX506+sKUD5JHh6eRbIOQYpbcUc7yRCCXQyzSbzEuVhaMQFlDWUItiHIjiWmNS45j+Rx0cCeaH4RAaWPFLxsR1CpFVjXWNJCP+tFM0NOro6A0kc6ObQiuVk3Xlz2gk5+407RzF/j/ScAjmbuEOJfggsRSTrp57bxmZwI6Kd5ypc1UpolLSKAzzpsAzQ2RBJvxbVMiXIaYbV144wBGqUkmbMJ36264Gp3B1kSKkFhQD87EDykqzcl9pImEaBKaRuA0k8h8MOki7Bb2kW3wF27ITkV2qrgzNt2T1XMoUQE+CkEGEBQ41Z/UnYKrrwNPKmmzMA52HyZk+RWUU+NMF78g/wcx7tVn7PkJri/HVJmhn0v9MGWfCetPtIoENJPKYJe/WiaHgtXwgOHICU97Bgcgr13wzftzmKSFULW8gzwgmY4PfMFN8CaDpgxK+w3Mgz7y+DMwWhaG1QG30Nwh6NVkgeW3A4XB+D7D/WgQtbF18ODh2FGhgUuCAfL4fS+6JqSNpXBr4Gljpb3HYBlq8yhky3QqqqQdA9aWAprj0Bqph3unTXwlYv3geSsymA/gtkToook2DwE6m/o+bwJ2h52Bzn/OljbCWlZYX85Au+ug1NvuJuk5HeVQVVzPI4eVb1QVGof+nQ7vP9o9ADzroWKo5BmmbeCa/XBl7vcwSkrSVABDgKjRWmc7yX5UNkDuVfYB3pfgw+ecA6UfzVUHIOZXkvmpJn5L5rcw1kAfwVyI3pmFZiQOQvtJidegY5q+29zr4KK45CeY4dTGf+sUQ/OBDSWOPImCUnOLgRfD3gX2IN81ABH/OZvc5ZBRRfMssxVSjPTn2zThzMBjU0SucxYZb3FZia9RfZg3S/C6b0mXEaePXOHq+HEq/HBmYDtCnADguddqWRfbmYya77d/OKf9iKsMqcy+/FWV7JRjIxCrfeqyykxM5k1L7Ju59PQs2WycCqDK+I7LOQuMjOZ6XB3P7oRutwtSIwZmIcFY6lraQCe0prypYuhshsy54Tdjj8HxzZpyUQxNo9bBmC8B9a8pXDvAcguBrVZErGs5uawH1hHIafvkd8AnO6XptH/xTL4j6+dsFrUh/s10+viDjtFvb0X9P9rfRhLrZpH2aiz+K2JqhkxdDo4zypXzaOQkKzDwyCvg3mBnsJnB2k8JuoYdooRu4FZyz1IGhPeElEtDlgvAuyPNvmYgGMlKJEtYNhNkI0JaQFbZzdtm+jjl8DoRvzNciQrjc8QcOXYZwjT+A+E0a34zvgMIegiNb7PEP8AC6xsD2sMAc4AAAAASUVORK5CYII\x3d) no-repeat; background-size: ",[0,40]," ",[0,40],"; }\n.",[1],"wrong-test .",[1],"time { display: block; width: 100%; font-size: 10px; color: #878c9e; line-height: ",[0,30],"; margin-bottom: ",[0,61],"; }\n.",[1],"wrong-test .",[1],"question { display: block; color: #323643; line-height: ",[0,36],"; margin-bottom: ",[0,60],"; }\n.",[1],"wrong-test .",[1],"options { margin-top: ",[0,20],"; }\n.",[1],"wrong-test .",[1],"options .",[1],"option { display: -webkit-box; display: -webkit-flex; display: flex; }\n.",[1],"wrong-test .",[1],"options .",[1],"option .",[1],"option-num { -webkit-flex-basis: ",[0,72],"; flex-basis: ",[0,72],"; height: ",[0,72],"; background: white; border: 2px solid #e5e9ef; border-radius: 50%; text-align: center; line-height: ",[0,68],"; margin: 0 ",[0,32]," ",[0,40]," 0; }\n.",[1],"wrong-test .",[1],"options .",[1],"option .",[1],"option-answer { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; line-height: 20px; margin-top: 6px; }\n.",[1],"wrong-test .",[1],"options .",[1],"correct .",[1],"option-num { background: #50C341; color: #fff; border: 0; }\n.",[1],"wrong-test .",[1],"options .",[1],"wrong .",[1],"option-num { background: #FF5A5A; color: #fff; border: 0; }\n.",[1],"wrong-test .",[1],"teacherword-anlysis .",[1],"line-block { display: block; margin-bottom: ",[0,28],"; }\n.",[1],"wrong-test .",[1],"teacherword-anlysis .",[1],"line-block .",[1],"correct { color: #50C341; }\n.",[1],"wrong-test .",[1],"teacherword-anlysis .",[1],"line-block .",[1],"wrong { color: #FF5A5A; }\n.",[1],"wrong-test .",[1],"teacherword-anlysis .",[1],"line-block .",[1],"answer-title { margin-right: ",[0,10],"; }\n.",[1],"wrong-test .",[1],"teacherword-anlysis .",[1],"line-block .",[1],"title { margin-left: ",[0,-16],"; color: #FF7800; margin-right: ",[0,10],"; }\n.",[1],"wrong-test .",[1],"teacherword-anlysis .",[1],"anlysis { margin-top: ",[0,61],"; }\n.",[1],"wrong-test .",[1],"teacherword-anlysis .",[1],"anlysis .",[1],"line-block { margin-bottom: ",[0,50],"; }\n",],undefined,{path:"./components/wrong_test/wrong_test.wxss"});    
__wxAppCode__['components/wrong_test/wrong_test.wxml']=$gwx('./components/wrong_test/wrong_test.wxml');

__wxAppCode__['pages/cart/cart.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"container { padding-bottom: ",[0,134],"; }\n.",[1],"container .",[1],"empty { position: fixed; left: 0; top: 0; width: 100%; height: 100vh; padding-bottom: ",[0,100],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; align-items: center; background: #fff; }\n.",[1],"container .",[1],"empty wx-image { width: ",[0,240],"; height: ",[0,160],"; margin-bottom: ",[0,30],"; }\n.",[1],"container .",[1],"empty .",[1],"empty-tips { display: -webkit-box; display: -webkit-flex; display: flex; font-size: ",[0,26],"; color: #C0C4CC; }\n.",[1],"container .",[1],"empty .",[1],"empty-tips .",[1],"navigator { color: #fa436a; margin-left: ",[0,16],"; }\n.",[1],"cart-item { display: -webkit-box; display: -webkit-flex; display: flex; position: relative; padding: ",[0,30]," ",[0,40],"; }\n.",[1],"cart-item .",[1],"image-wrapper { width: ",[0,230],"; height: ",[0,230],"; -webkit-flex-shrink: 0; flex-shrink: 0; position: relative; }\n.",[1],"cart-item .",[1],"image-wrapper wx-image { border-radius: ",[0,8],"; }\n.",[1],"cart-item .",[1],"checkbox { position: absolute; left: ",[0,-16],"; top: ",[0,-16],"; z-index: 8; font-size: ",[0,44],"; line-height: 1; padding: ",[0,4],"; color: #C0C4CC; background: #fff; border-radius: 50px; }\n.",[1],"cart-item .",[1],"item-right { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; overflow: hidden; position: relative; padding-left: ",[0,30],"; }\n.",[1],"cart-item .",[1],"item-right .",[1],"title, .",[1],"cart-item .",[1],"item-right .",[1],"price { font-size: ",[0,30],"; color: #303133; height: ",[0,40],"; line-height: ",[0,40],"; }\n.",[1],"cart-item .",[1],"item-right .",[1],"attr { font-size: ",[0,26],"; color: #909399; height: ",[0,50],"; line-height: ",[0,50],"; }\n.",[1],"cart-item .",[1],"item-right .",[1],"price { height: ",[0,50],"; line-height: ",[0,50],"; }\n.",[1],"cart-item .",[1],"del-btn { padding: ",[0,4]," ",[0,10],"; font-size: ",[0,34],"; height: ",[0,50],"; color: #909399; }\n.",[1],"action-section { position: fixed; left: ",[0,30],"; bottom: ",[0,30],"; z-index: 95; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; width: ",[0,690],"; height: ",[0,100],"; padding: 0 ",[0,30],"; background: rgba(255, 255, 255, 0.9); box-shadow: 0 0 ",[0,20]," 0 rgba(0, 0, 0, 0.5); border-radius: ",[0,16],"; }\n.",[1],"action-section .",[1],"checkbox { height: ",[0,52],"; position: relative; }\n.",[1],"action-section .",[1],"checkbox wx-image { width: ",[0,52],"; height: 100%; position: relative; z-index: 5; }\n.",[1],"action-section .",[1],"clear-btn { position: absolute; left: ",[0,26],"; top: 0; z-index: 4; width: 0; height: ",[0,52],"; line-height: ",[0,52],"; padding-left: ",[0,38],"; font-size: ",[0,28],"; color: #fff; background: #C0C4CC; border-radius: 0 50px 50px 0; opacity: 0; -webkit-transition: .2s; transition: .2s; }\n.",[1],"action-section .",[1],"clear-btn.",[1],"show { opacity: 1; width: ",[0,120],"; }\n.",[1],"action-section .",[1],"total-box { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; text-align: right; padding-right: ",[0,40],"; }\n.",[1],"action-section .",[1],"total-box .",[1],"price { font-size: ",[0,32],"; color: #303133; }\n.",[1],"action-section .",[1],"total-box .",[1],"coupon { font-size: ",[0,24],"; color: #909399; }\n.",[1],"action-section .",[1],"total-box .",[1],"coupon wx-text { color: #303133; }\n.",[1],"action-section .",[1],"confirm-btn { padding: 0 ",[0,38],"; margin: 0; border-radius: 100px; height: ",[0,76],"; line-height: ",[0,76],"; font-size: ",[0,30],"; background: #fa436a; box-shadow: 1px 2px 5px rgba(217, 60, 93, 0.72); }\n.",[1],"action-section .",[1],"checkbox.",[1],"checked, .",[1],"cart-item .",[1],"checkbox.",[1],"checked { color: #fa436a; }\n",],undefined,{path:"./pages/cart/cart.wxss"});    
__wxAppCode__['pages/cart/cart.wxml']=$gwx('./pages/cart/cart.wxml');

__wxAppCode__['pages/category/category.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\nbody, .",[1],"content { height: 100%; background-color: #f8f8f8; }\n.",[1],"content { display: -webkit-box; display: -webkit-flex; display: flex; }\n.",[1],"left-aside { -webkit-flex-shrink: 0; flex-shrink: 0; width: ",[0,200],"; height: 100%; background-color: #fff; }\n.",[1],"f-item { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; width: 100%; height: ",[0,100],"; font-size: ",[0,28],"; color: #606266; position: relative; }\n.",[1],"f-item.",[1],"active { color: #fa436a; background: #f8f8f8; }\n.",[1],"f-item.",[1],"active:before { content: \x27\x27; position: absolute; left: 0; top: 50%; -webkit-transform: translateY(-50%); transform: translateY(-50%); height: ",[0,36],"; width: ",[0,8],"; background-color: #fa436a; border-radius: 0 4px 4px 0; opacity: .8; }\n.",[1],"right-aside { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; overflow: hidden; padding-left: ",[0,20],"; }\n.",[1],"s-item { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; height: ",[0,70],"; padding-top: ",[0,8],"; font-size: ",[0,28],"; color: #303133; }\n.",[1],"t-list { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-flex-wrap: wrap; flex-wrap: wrap; width: 100%; background: #fff; padding-top: ",[0,12],"; }\n.",[1],"t-list:after { content: \x27\x27; -webkit-box-flex: 99; -webkit-flex: 99; flex: 99; height: 0; }\n.",[1],"t-item { -webkit-flex-shrink: 0; flex-shrink: 0; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; width: ",[0,176],"; font-size: ",[0,26],"; color: #666; padding-bottom: ",[0,20],"; }\n.",[1],"t-item wx-image { width: ",[0,140],"; height: ",[0,140],"; }\n",],undefined,{path:"./pages/category/category.wxss"});    
__wxAppCode__['pages/category/category.wxml']=$gwx('./pages/category/category.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\nbody { background: #f5f5f5; }\n.",[1],"m-t { margin-top: ",[0,16],"; }\n.",[1],"carousel-section { position: relative; }\n.",[1],"carousel-section .",[1],"titleNview-placing { height: var(--status-bar-height); padding-top: 44px; box-sizing: content-box; }\n.",[1],"carousel-section .",[1],"titleNview-background { position: absolute; top: 0; left: 0; width: 100%; height: ",[0,426],"; -webkit-transition: .4s; transition: .4s; }\n.",[1],"carousel { width: 100%; height: ",[0,350],"; }\n.",[1],"carousel .",[1],"carousel-item { width: 100%; height: 100%; overflow: hidden; }\n.",[1],"carousel wx-image { width: 100%; height: 100%; }\n.",[1],"swiper-dots { display: -webkit-box; display: -webkit-flex; display: flex; position: absolute; left: ",[0,60],"; bottom: ",[0,15],"; width: ",[0,72],"; height: ",[0,36],"; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk4MzlBNjE0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk4MzlBNjA0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0E3RUNERkE0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E3RUNERkI0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Gh5BPAAACTUlEQVR42uzcQW7jQAwFUdN306l1uWwNww5kqdsmm6/2MwtVCp8CosQtP9vg/2+/gY+DRAMBgqnjIp2PaCxCLLldpPARRIiFj1yBbMV+cHZh9PURRLQNhY8kgWyL/WDtwujjI8hoE8rKLqb5CDJaRMJHokC6yKgSCR9JAukmokIknCQJpLOIrJFwMsBJELFcKHwM9BFkLBMKFxNcBCHlQ+FhoocgpVwwnv0Xn30QBJGMC0QcaBVJiAMiec/dcwKuL4j1QMsVCXFAJE4s4NQA3K/8Y6DzO4g40P7UcmIBJxbEesCKWBDg8wWxHrAiFgT4fEGsB/CwIhYE+AeBAAdPLOcV8HRmWRDAiQVcO7GcV8CLM8uCAE4sQCDAlHcQ7x+ABQEEAggEEAggEEAggEAAgQACASAQQCCAQACBAAIBBAIIBBAIIBBAIABe4e9iAe/xd7EAJxYgEGDeO4j3EODp/cOCAE4sYMyJ5cwCHs4rCwI4sYBxJ5YzC84rCwKcXxArAuthQYDzC2JF0H49LAhwYUGsCFqvx5EF2T07dMaJBetx4cRyaqFtHJ8EIhK0i8OJBQxcECuCVutxJhCRoE0cZwMRyRcFefa/ffZBVPogePihhyCnbBhcfMFFEFM+DD4m+ghSlgmDkwlOgpAl4+BkkJMgZdk4+EgaSCcpVX7bmY9kgXQQU+1TgE0c+QJZUUz1b2T4SBbIKmJW+3iMj2SBVBWz+leVfCQLpIqYbp8b85EskIxyfIOfK5Sf+wiCRJEsllQ+oqEkQfBxmD8BBgA5hVjXyrBNUQAAAABJRU5ErkJggg\x3d\x3d); background-size: 100% 100%; }\n.",[1],"swiper-dots .",[1],"num { width: ",[0,36],"; height: ",[0,36],"; border-radius: 50px; font-size: ",[0,24],"; color: #fff; text-align: center; line-height: ",[0,36],"; }\n.",[1],"swiper-dots .",[1],"sign { position: absolute; top: 0; left: 50%; line-height: ",[0,36],"; font-size: ",[0,12],"; color: #fff; -webkit-transform: translateX(-50%); transform: translateX(-50%); }\n.",[1],"cate-section { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-justify-content: space-around; justify-content: space-around; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-flex-wrap: wrap; flex-wrap: wrap; padding: ",[0,30]," ",[0,22],"; background: #fff; }\n.",[1],"cate-section .",[1],"cate-item { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; align-items: center; font-size: ",[0,26],"; color: #303133; }\n.",[1],"cate-section wx-image { width: ",[0,88],"; height: ",[0,88],"; margin-bottom: ",[0,14],"; border-radius: 50%; opacity: .7; box-shadow: ",[0,4]," ",[0,4]," ",[0,20]," rgba(250, 67, 106, 0.3); }\n.",[1],"quick-way-enter { position: relative; display: -webkit-box; display: -webkit-flex; display: flex; padding: ",[0,30]," 0; }\n.",[1],"quick-way-enter .",[1],"qw-li { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; text-align: center; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; }\n.",[1],"quick-way-enter .",[1],"qw-li .",[1],"qw-area { background: #fff; width: ",[0,150],"; height: ",[0,150],"; line-height: ",[0,150],"; box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1); border-radius: 5px; }\n.",[1],"quick-way-enter .",[1],"qw-li .",[1],"qw-area .",[1],"qw-icon { width: ",[0,96],"; height: ",[0,96],"; border-radius: 50%; margin: ",[0,10]," auto; }\n.",[1],"quick-way-enter .",[1],"qw-li .",[1],"qw-area .",[1],"qw-icon.",[1],"subscribe-icon { background: #fee46d; border: 1px solid #ffe56c; }\n.",[1],"quick-way-enter .",[1],"qw-li .",[1],"qw-area .",[1],"qw-icon.",[1],"homework-icon { background: #af9bff; border: 1px solid #896efe; }\n.",[1],"quick-way-enter .",[1],"qw-li .",[1],"qw-area .",[1],"qw-icon.",[1],"wrongtopic-icon { background: #85a6ff; border: 1px solid #7a9dff; }\n.",[1],"quick-way-enter .",[1],"qw-li .",[1],"qw-area .",[1],"qw-title { font-size: 12px; display: block; line-height: ",[0,22],"; }\n.",[1],"ad-1 { width: 100%; height: ",[0,210],"; padding: ",[0,10]," 0; background: #fff; }\n.",[1],"ad-1 wx-image { width: 100%; height: 100%; }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/learning/course/course_detail/course_detail.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"course-detail .",[1],"course-ad { width: 100%; }\n.",[1],"course-detail .",[1],"course-ad .",[1],"_img { width: 100%; height: ",[0,320],"; }\n.",[1],"course-detail .",[1],"course-tab { border-top: 1px solid #F8F6FC; box-shadow: 0px 5px 8px 2px rgba(0, 0, 0, 0.1); }\n.",[1],"course-detail .",[1],"course-tab .",[1],"tab-title { font-size: 13px; border-bottom: 2px solid #FF794A; margin: 0 ",[0,32],"; height: 25px; width: 40px; display: inline-block; text-align: center; }\n.",[1],"course-detail .",[1],"vedio-list { padding: ",[0,20]," ",[0,40],"; }\n.",[1],"course-detail .",[1],"vedio-list .",[1],"list-li { overflow: hidden; height: ",[0,120],"; line-height: ",[0,120],"; }\n.",[1],"course-detail .",[1],"vedio-list .",[1],"list-li .",[1],"video-title { font-size: 13px; }\n.",[1],"course-detail .",[1],"vedio-list .",[1],"list-li .",[1],"video-title::before { margin-top: ",[0,40],"; margin-right: ",[0,20],"; content: \x27\x27; width: ",[0,50],"; height: ",[0,50],"; float: left; background: url(data:image/png;base64,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\x3d); background-size: ",[0,50]," ",[0,50],"; }\n.",[1],"course-detail .",[1],"booking-btn { width: ",[0,88],"; height: ",[0,88],"; border-radius: 50%; background: -webkit-linear-gradient(left, #f9d423 0%, #ff794a 100%); background: linear-gradient(90deg, #f9d423 0%, #ff794a 100%); position: fixed; bottom: ",[0,80],"; right: ",[0,44],"; }\n.",[1],"course-detail .",[1],"booking-btn::before { content: \x27\x27; position: absolute; width: ",[0,50],"; height: ",[0,50],"; top: ",[0,18],"; left: ",[0,20],"; background: url(data:image/png;base64,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\x3d\x3d); background-size: ",[0,50]," ",[0,50],"; }\n.",[1],"course-detail .",[1],"booking-btn::after { content: \x27\\8BA2\\9605\x27; position: absolute; width: ",[0,50],"; height: ",[0,50],"; bottom: ",[0,-60],"; left: ",[0,20],"; font-size: 12px; color: #ff794a; }\n",],undefined,{path:"./pages/learning/course/course_detail/course_detail.wxss"});    
__wxAppCode__['pages/learning/course/course_detail/course_detail.wxml']=$gwx('./pages/learning/course/course_detail/course_detail.wxml');

__wxAppCode__['pages/learning/course/course.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"course .",[1],"subscribe { padding: ",[0,30]," ",[0,32],"; }\n.",[1],"course .",[1],"subscribe .",[1],"subs-li { display: -webkit-box; display: -webkit-flex; display: flex; margin-bottom: ",[0,32],"; }\n.",[1],"course .",[1],"subscribe .",[1],"subs-li .",[1],"course-img .",[1],"_img { width: ",[0,318],"; height: ",[0,182],"; }\n.",[1],"course .",[1],"subscribe .",[1],"subs-li .",[1],"course-title { font-size: 13px; margin: ",[0,30]," 0 0 ",[0,31],"; }\n.",[1],"course .",[1],"subscribe .",[1],"subs-li .",[1],"course-status { margin-top: ",[0,50],"; }\n.",[1],"course .",[1],"subscribe .",[1],"subs-li .",[1],"course-status .",[1],"all-num { background: #C6CBD4; font-size: 12px; color: #fff; border-radius: 50px; padding: 3px 8px; }\n.",[1],"course .",[1],"subscribe .",[1],"subs-li .",[1],"course-status .",[1],"have-learn { font-size: 12px; margin-left: ",[0,20],"; color: #C6CBD4; }\n.",[1],"course .",[1],"subscribe .",[1],"subs-li .",[1],"course-status .",[1],"have-learn .",[1],"num { color: #FF794A; }\n",],undefined,{path:"./pages/learning/course/course.wxss"});    
__wxAppCode__['pages/learning/course/course.wxml']=$gwx('./pages/learning/course/course.wxml');

__wxAppCode__['pages/learning/homework/do_homework.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"answer-input .",[1],"question { line-height: 36px; }\n.",[1],"answer-input .",[1],"options { margin-top: ",[0,20],"; }\n.",[1],"answer-input .",[1],"options .",[1],"option { display: -webkit-box; display: -webkit-flex; display: flex; }\n.",[1],"answer-input .",[1],"options .",[1],"option .",[1],"option-num { -webkit-flex-basis: ",[0,72],"; flex-basis: ",[0,72],"; height: ",[0,72],"; background: white; border: 2px solid #e5e9ef; border-radius: 50%; text-align: center; line-height: ",[0,68],"; margin: 0 ",[0,32]," ",[0,40]," 0; }\n.",[1],"answer-input .",[1],"options .",[1],"option .",[1],"option-answer { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; line-height: 20px; margin-top: 6px; }\n.",[1],"answer-input .",[1],"options .",[1],"selected .",[1],"option-num { background: #FF9600; color: #fff; border: 0; }\n.",[1],"answer-input .",[1],"options .",[1],"correct .",[1],"option-num { background: #50C341; color: #fff; border: 0; }\n.",[1],"answer-input .",[1],"options .",[1],"wrong .",[1],"option-num { background: #FF5A5A; color: #fff; border: 0; }\n.",[1],"answer-input .",[1],"jieda-answer { margin: ",[0,80]," auto 0 auto; }\n.",[1],"answer-input .",[1],"answer-upload { margin-bottom: ",[0,60],"; width: ",[0,686],"; height: ",[0,100],"; line-height: ",[0,100],"; background: #fff5eb; border: 2px solid #ffc38c; border-radius: ",[0,20],"; text-align: center; }\n.",[1],"answer-input .",[1],"answer-upload .",[1],"title { font-size: 16px; color: #ff7800; }\n.",[1],"answer-input .",[1],"uni-input { margin-top: ",[0,24],"; }\n.",[1],"answer-input .",[1],"inputing { background: #fafafb; border: 2px solid #e5e9ef; }\n.",[1],"answer-input .",[1],"unwrite { background: #e5e9ef; border: 2px solid #e5e9ef; }\n.",[1],"answer-input .",[1],"unwrite .",[1],"title { color: #BEC3CD; }\n.",[1],"answer-input .",[1],"jieda-answer-noreview { margin: ",[0,80]," auto ",[0,20]," auto; }\n.",[1],"answer-input .",[1],"jieda-answer-noreview .",[1],"title { display: block; width: 100%; color: #FF7800; margin-left: ",[0,-12],"; }\n.",[1],"answer-input .",[1],"jieda-answer-noreview .",[1],"answer { display: block; margin-top: ",[0,30],"; color: #323643; }\n.",[1],"answer-input .",[1],"teacherword-anlysis { font-size: 13px; font-family: PingFang SC; font-weight: bold; color: #323643; line-height: 26px; margin-left: ",[0,-12],"; position: relative; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"line-block .",[1],"title { color: #FF7800; margin-right: ",[0,10],"; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"ifcorrect-pic { position: absolute; right: ",[0,32],"; top: ",[0,0],"; width: ",[0,142],"; height: ",[0,136],"; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"ifcorrect-pic.",[1],"correct { background: url(data:image/png;base64,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); background-size: ",[0,142]," ",[0,136],"; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"ifcorrect-pic.",[1],"wrong { background: url(data:image/png;base64,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\x3d); background-size: ",[0,142]," ",[0,136],"; }\n@charset \x22UTF-8\x22;\n.",[1],"do-homework { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; height: 100%; font-family: PingFang SC; font-size: 13px; font-weight: bold; color: #333333; }\n.",[1],"do-homework .",[1],"homework-head { -webkit-flex-basis: ",[0,88],"; flex-basis: ",[0,88],"; height: ",[0,88],"; line-height: ",[0,88],"; }\n.",[1],"do-homework .",[1],"homework-head .",[1],"close-btn { position: absolute; display: block; margin: ",[0,32],"; width: ",[0,24],"; height: ",[0,24],"; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABk0lEQVRIS6WUTUsCURSG3zPZtv8RES2jP1Fg5EIwyCLap1DartKJ0W3gQoWgD0Jo019IWof0Q9yq88Y1x/yYO3PvNLuZued57rn3nCNuvblFSgPE2ggsXxWP3/CP567WTvvkDQR9n6NTqdZanwC2f5kc+mSuXDx5SeJwvXaWwgcAK5P4rhL0AGz8ATkUOrmL4pGVJAQOQL7E9Vp7FHYASc1KADm8LOSfTTIJh2Mwor8vCnDrNTOO4DGJRAcnkC0V8p2xIKkkDq64U4GtxAS+JDCVmMJDBepjtd4+gO8/QZYvXiiyUIoqZBCc+WJRzB3R7M8IiYoJ6jwSrs0gEIVL5vao3XmwSpuBgSQWHpuBWqC50PFYMWnGyAz08CC/eIlWoCtFgGLT8aGCqDon6diMlSWBSRPZzK45gQncdnZNBTZwG8lYkARuKpFKrZ0W8NWm/Rfnje5ORkRGql7zGyLrM0FGHWomQU8JuhDZmQQkguuOi+SHuG5jk6nVe4JrECmXzvPvi7uzea/Um7tC5xpgXxzn7AdtTE/GZoQWqQAAAABJRU5ErkJggg\x3d\x3d); background-size: ",[0,24]," ",[0,24],"; }\n.",[1],"do-homework .",[1],"homework-head .",[1],"page-prv { float: left; width: 100%; text-align: center; font-size: 18px; color: #323643; }\n.",[1],"do-homework .",[1],"homework-head .",[1],"page-prv .",[1],"allnum { font-size: 12px; color: #878C9E; }\n.",[1],"do-homework .",[1],"homework-head .",[1],"homework-btn { position: absolute; top: ",[0,28],"; right: ",[0,32],"; display: block; width: ",[0,32],"; height: ",[0,32],"; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAYAAAD7PHgWAAACfklEQVRYR+1Yv2/TYBB9lwQaIJXKAIKNjREJFpiQKoTEQlX+ACQSkURlShpD3S6ecCKnzdRfQU4l/gAQLEgdKjF1Q7ClWzeiIkFAgTaQ+pCNkjgmTePPtaBRvNm5d/fy7vtOukdwPNl5/Qoz4gCNA7gEIOyMOeL3PQDbAG8QoTgzHftgz0/NF0VZC49EjAJAcQCBIybRbzoD4OJO4Gu6kE7vmiCLYGph4dT5/bE3INzsN5OvcYy3O8HqHZOkRVDNry0DnPS1qMvkzFidlaJJ+nPm6J2jrWUGzf2s/VhXlEc1l7ldhSvKYuRk5PRtAj8FcNkGNoj4Kql5fRGgKdsPW/i1d0OWp764quQxWFWXzuJEeLOTJC+RqullELWZM9+TpdhLj/WE4KqmT4LoRQvMvEVqvmRe85Hmx3ptd9Tvth7EXtOen2lQw36k6iZBtgPkTLQ1eprfc/P6XcOgVRAugFEJBDjxZDr22lmoI66Xhj1yOPn0RVDVSh8tcu2nImeiF50cusT1otk9h0OwwSCY1UoTTFgBLBUrxEjOSNFXTnkccT3VOyiHUIuFrqQgaEhQULgWbDAVHM5B27kQavF/P6iHc9Bri72ODjd4oTPopoDX2MEkOJyDXi/JcA4eomDH0hTiUESS7n/3ehtF8LmcPmoE6ZsNWz8Oa+ffi3s9SNeV1IOqiAqiGGtxD4U3QW13gRnLXa0PBsrEPBvC53VJknxtt9XWAG6BSHVaH4bRuGbtwFmttMKEhOi/9wfHRTkTSxwP+81UwPQIz+2PFYjw8F8amMx49ilYTXUYmPYWmXacYZAp7TjIsoBbvo0/rUQdjG0GNpgbxbnH8ff2Or8BQSHzmITm7+wAAAAASUVORK5CYII\x3d); background-size: ",[0,32]," ",[0,32],"; }\n.",[1],"do-homework .",[1],"homework-content { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; padding: ",[0,40]," 0; }\n.",[1],"do-homework .",[1],"homework-content .",[1],"test-content { padding: 0 ",[0,32],"; }\n.",[1],"do-homework .",[1],"answer-card { width: 100%; height: 100%; position: fixed; top: 0; left: 0; z-index: 999; font-family: PingFang SC; font-weight: bold; color: #323643; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-bg { pointer-events: auto; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(10, 10, 10, 0.5); }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content { background: white; border-radius: ",[0,30]," ",[0,30]," 0px 0px; position: absolute; bottom: 0; left: 0; width: 100%; height: ",[0,800],"; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"card-header .",[1],"title { display: block; width: 100%; text-align: center; font-size: 18px; margin-top: ",[0,36],"; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"card-header .",[1],"close-btn { position: absolute; top: ",[0,42],"; right: ",[0,40],"; display: block; width: ",[0,24],"; height: ",[0,24],"; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABk0lEQVRIS6WUTUsCURSG3zPZtv8RES2jP1Fg5EIwyCLap1DartKJ0W3gQoWgD0Jo019IWof0Q9yq88Y1x/yYO3PvNLuZued57rn3nCNuvblFSgPE2ggsXxWP3/CP567WTvvkDQR9n6NTqdZanwC2f5kc+mSuXDx5SeJwvXaWwgcAK5P4rhL0AGz8ATkUOrmL4pGVJAQOQL7E9Vp7FHYASc1KADm8LOSfTTIJh2Mwor8vCnDrNTOO4DGJRAcnkC0V8p2xIKkkDq64U4GtxAS+JDCVmMJDBepjtd4+gO8/QZYvXiiyUIoqZBCc+WJRzB3R7M8IiYoJ6jwSrs0gEIVL5vao3XmwSpuBgSQWHpuBWqC50PFYMWnGyAz08CC/eIlWoCtFgGLT8aGCqDon6diMlSWBSRPZzK45gQncdnZNBTZwG8lYkARuKpFKrZ0W8NWm/Rfnje5ORkRGql7zGyLrM0FGHWomQU8JuhDZmQQkguuOi+SHuG5jk6nVe4JrECmXzvPvi7uzea/Um7tC5xpgXxzn7AdtTE/GZoQWqQAAAABJRU5ErkJggg\x3d\x3d); background-size: ",[0,24]," ",[0,24],"; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"option-box { padding: 0 ",[0,32],"; overflow: hidden; margin-top: ",[0,40],"; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"option-box .",[1],"opt-li { float: left; width: 20%; margin-top: ",[0,60],"; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"option-box .",[1],"opt-li .",[1],"opt { width: ",[0,80],"; height: ",[0,80],"; background: #c6cbd4; border-radius: 50%; margin: 0 auto; line-height: ",[0,80],"; text-align: center; color: #fff; font-size: 13px; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"option-box .",[1],"opt-li .",[1],"opt.",[1],"done { background: #ff9600; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"not-deal-tip { display: block; font-size: 16px; width: 100%; margin-top: ",[0,120],"; text-align: center; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"upload-homework { position: absolute; bottom: ",[0,32],"; left: 5%; }\n.",[1],"do-homework .",[1],"back-tip-box { width: 100%; height: 100%; position: fixed; top: 0; left: 0; z-index: 999; font-family: PingFang SC; font-weight: bold; }\n.",[1],"do-homework .",[1],"back-tip-box .",[1],"tip-bg { pointer-events: auto; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(10, 10, 10, 0.5); }\n.",[1],"do-homework .",[1],"back-tip-box .",[1],"tip-content { position: absolute; background: #fff; z-index: 1000; width: 90%; padding: ",[0,100]," ",[0,32]," ",[0,40]," ",[0,32],"; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); border-radius: ",[0,30],"; }\n.",[1],"do-homework .",[1],"back-tip-box .",[1],"tip-content .",[1],"btn { margin-bottom: ",[0,60],"; }\n",],undefined,{path:"./pages/learning/homework/do_homework.wxss"});    
__wxAppCode__['pages/learning/homework/do_homework.wxml']=$gwx('./pages/learning/homework/do_homework.wxml');

__wxAppCode__['pages/learning/homework/homework_have_review.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"answer-input .",[1],"question { line-height: 36px; }\n.",[1],"answer-input .",[1],"options { margin-top: ",[0,20],"; }\n.",[1],"answer-input .",[1],"options .",[1],"option { display: -webkit-box; display: -webkit-flex; display: flex; }\n.",[1],"answer-input .",[1],"options .",[1],"option .",[1],"option-num { -webkit-flex-basis: ",[0,72],"; flex-basis: ",[0,72],"; height: ",[0,72],"; background: white; border: 2px solid #e5e9ef; border-radius: 50%; text-align: center; line-height: ",[0,68],"; margin: 0 ",[0,32]," ",[0,40]," 0; }\n.",[1],"answer-input .",[1],"options .",[1],"option .",[1],"option-answer { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; line-height: 20px; margin-top: 6px; }\n.",[1],"answer-input .",[1],"options .",[1],"selected .",[1],"option-num { background: #FF9600; color: #fff; border: 0; }\n.",[1],"answer-input .",[1],"options .",[1],"correct .",[1],"option-num { background: #50C341; color: #fff; border: 0; }\n.",[1],"answer-input .",[1],"options .",[1],"wrong .",[1],"option-num { background: #FF5A5A; color: #fff; border: 0; }\n.",[1],"answer-input .",[1],"jieda-answer { margin: ",[0,80]," auto 0 auto; }\n.",[1],"answer-input .",[1],"answer-upload { margin-bottom: ",[0,60],"; width: ",[0,686],"; height: ",[0,100],"; line-height: ",[0,100],"; background: #fff5eb; border: 2px solid #ffc38c; border-radius: ",[0,20],"; text-align: center; }\n.",[1],"answer-input .",[1],"answer-upload .",[1],"title { font-size: 16px; color: #ff7800; }\n.",[1],"answer-input .",[1],"uni-input { margin-top: ",[0,24],"; }\n.",[1],"answer-input .",[1],"inputing { background: #fafafb; border: 2px solid #e5e9ef; }\n.",[1],"answer-input .",[1],"unwrite { background: #e5e9ef; border: 2px solid #e5e9ef; }\n.",[1],"answer-input .",[1],"unwrite .",[1],"title { color: #BEC3CD; }\n.",[1],"answer-input .",[1],"jieda-answer-noreview { margin: ",[0,80]," auto ",[0,20]," auto; }\n.",[1],"answer-input .",[1],"jieda-answer-noreview .",[1],"title { display: block; width: 100%; color: #FF7800; margin-left: ",[0,-12],"; }\n.",[1],"answer-input .",[1],"jieda-answer-noreview .",[1],"answer { display: block; margin-top: ",[0,30],"; color: #323643; }\n.",[1],"answer-input .",[1],"teacherword-anlysis { font-size: 13px; font-family: PingFang SC; font-weight: bold; color: #323643; line-height: 26px; margin-left: ",[0,-12],"; position: relative; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"line-block .",[1],"title { color: #FF7800; margin-right: ",[0,10],"; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"ifcorrect-pic { position: absolute; right: ",[0,32],"; top: ",[0,0],"; width: ",[0,142],"; height: ",[0,136],"; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"ifcorrect-pic.",[1],"correct { background: url(data:image/png;base64,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); background-size: ",[0,142]," ",[0,136],"; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"ifcorrect-pic.",[1],"wrong { background: url(data:image/png;base64,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\x3d); background-size: ",[0,142]," ",[0,136],"; }\n@charset \x22UTF-8\x22;\n.",[1],"do-homework { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; height: 100%; font-family: PingFang SC; font-size: 13px; font-weight: bold; color: #333333; }\n.",[1],"do-homework .",[1],"homework-head { -webkit-flex-basis: ",[0,88],"; flex-basis: ",[0,88],"; height: ",[0,88],"; line-height: ",[0,88],"; }\n.",[1],"do-homework .",[1],"homework-head .",[1],"close-btn { position: absolute; display: block; margin: ",[0,32],"; width: ",[0,24],"; height: ",[0,24],"; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABk0lEQVRIS6WUTUsCURSG3zPZtv8RES2jP1Fg5EIwyCLap1DartKJ0W3gQoWgD0Jo019IWof0Q9yq88Y1x/yYO3PvNLuZued57rn3nCNuvblFSgPE2ggsXxWP3/CP567WTvvkDQR9n6NTqdZanwC2f5kc+mSuXDx5SeJwvXaWwgcAK5P4rhL0AGz8ATkUOrmL4pGVJAQOQL7E9Vp7FHYASc1KADm8LOSfTTIJh2Mwor8vCnDrNTOO4DGJRAcnkC0V8p2xIKkkDq64U4GtxAS+JDCVmMJDBepjtd4+gO8/QZYvXiiyUIoqZBCc+WJRzB3R7M8IiYoJ6jwSrs0gEIVL5vao3XmwSpuBgSQWHpuBWqC50PFYMWnGyAz08CC/eIlWoCtFgGLT8aGCqDon6diMlSWBSRPZzK45gQncdnZNBTZwG8lYkARuKpFKrZ0W8NWm/Rfnje5ORkRGql7zGyLrM0FGHWomQU8JuhDZmQQkguuOi+SHuG5jk6nVe4JrECmXzvPvi7uzea/Um7tC5xpgXxzn7AdtTE/GZoQWqQAAAABJRU5ErkJggg\x3d\x3d); background-size: ",[0,24]," ",[0,24],"; }\n.",[1],"do-homework .",[1],"homework-head .",[1],"page-prv { float: left; width: 100%; text-align: center; font-size: 18px; color: #323643; }\n.",[1],"do-homework .",[1],"homework-head .",[1],"page-prv .",[1],"allnum { font-size: 12px; color: #878C9E; }\n.",[1],"do-homework .",[1],"homework-head .",[1],"homework-btn { position: absolute; top: ",[0,28],"; right: ",[0,32],"; display: block; width: ",[0,32],"; height: ",[0,32],"; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAYAAAD7PHgWAAACfklEQVRYR+1Yv2/TYBB9lwQaIJXKAIKNjREJFpiQKoTEQlX+ACQSkURlShpD3S6ecCKnzdRfQU4l/gAQLEgdKjF1Q7ClWzeiIkFAgTaQ+pCNkjgmTePPtaBRvNm5d/fy7vtOukdwPNl5/Qoz4gCNA7gEIOyMOeL3PQDbAG8QoTgzHftgz0/NF0VZC49EjAJAcQCBIybRbzoD4OJO4Gu6kE7vmiCLYGph4dT5/bE3INzsN5OvcYy3O8HqHZOkRVDNry0DnPS1qMvkzFidlaJJ+nPm6J2jrWUGzf2s/VhXlEc1l7ldhSvKYuRk5PRtAj8FcNkGNoj4Kql5fRGgKdsPW/i1d0OWp764quQxWFWXzuJEeLOTJC+RqullELWZM9+TpdhLj/WE4KqmT4LoRQvMvEVqvmRe85Hmx3ptd9Tvth7EXtOen2lQw36k6iZBtgPkTLQ1eprfc/P6XcOgVRAugFEJBDjxZDr22lmoI66Xhj1yOPn0RVDVSh8tcu2nImeiF50cusT1otk9h0OwwSCY1UoTTFgBLBUrxEjOSNFXTnkccT3VOyiHUIuFrqQgaEhQULgWbDAVHM5B27kQavF/P6iHc9Bri72ODjd4oTPopoDX2MEkOJyDXi/JcA4eomDH0hTiUESS7n/3ehtF8LmcPmoE6ZsNWz8Oa+ffi3s9SNeV1IOqiAqiGGtxD4U3QW13gRnLXa0PBsrEPBvC53VJknxtt9XWAG6BSHVaH4bRuGbtwFmttMKEhOi/9wfHRTkTSxwP+81UwPQIz+2PFYjw8F8amMx49ilYTXUYmPYWmXacYZAp7TjIsoBbvo0/rUQdjG0GNpgbxbnH8ff2Or8BQSHzmITm7+wAAAAASUVORK5CYII\x3d); background-size: ",[0,32]," ",[0,32],"; }\n.",[1],"do-homework .",[1],"homework-content { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; padding: ",[0,40]," 0; }\n.",[1],"do-homework .",[1],"homework-content .",[1],"test-content { padding: 0 ",[0,32],"; }\n.",[1],"do-homework .",[1],"answer-card { width: 100%; height: 100%; position: fixed; top: 0; left: 0; z-index: 999; font-family: PingFang SC; font-weight: bold; color: #323643; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-bg { pointer-events: auto; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(10, 10, 10, 0.5); }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content { background: white; border-radius: ",[0,30]," ",[0,30]," 0px 0px; position: absolute; bottom: 0; left: 0; width: 100%; height: ",[0,800],"; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"card-header .",[1],"title { display: block; width: 100%; text-align: center; font-size: 18px; margin-top: ",[0,36],"; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"card-header .",[1],"close-btn { position: absolute; top: ",[0,42],"; right: ",[0,40],"; display: block; width: ",[0,24],"; height: ",[0,24],"; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABk0lEQVRIS6WUTUsCURSG3zPZtv8RES2jP1Fg5EIwyCLap1DartKJ0W3gQoWgD0Jo019IWof0Q9yq88Y1x/yYO3PvNLuZued57rn3nCNuvblFSgPE2ggsXxWP3/CP567WTvvkDQR9n6NTqdZanwC2f5kc+mSuXDx5SeJwvXaWwgcAK5P4rhL0AGz8ATkUOrmL4pGVJAQOQL7E9Vp7FHYASc1KADm8LOSfTTIJh2Mwor8vCnDrNTOO4DGJRAcnkC0V8p2xIKkkDq64U4GtxAS+JDCVmMJDBepjtd4+gO8/QZYvXiiyUIoqZBCc+WJRzB3R7M8IiYoJ6jwSrs0gEIVL5vao3XmwSpuBgSQWHpuBWqC50PFYMWnGyAz08CC/eIlWoCtFgGLT8aGCqDon6diMlSWBSRPZzK45gQncdnZNBTZwG8lYkARuKpFKrZ0W8NWm/Rfnje5ORkRGql7zGyLrM0FGHWomQU8JuhDZmQQkguuOi+SHuG5jk6nVe4JrECmXzvPvi7uzea/Um7tC5xpgXxzn7AdtTE/GZoQWqQAAAABJRU5ErkJggg\x3d\x3d); background-size: ",[0,24]," ",[0,24],"; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"option-box { padding: 0 ",[0,32],"; overflow: hidden; margin-top: ",[0,40],"; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"option-box .",[1],"opt-li { float: left; width: 20%; margin-top: ",[0,60],"; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"option-box .",[1],"opt-li .",[1],"opt { width: ",[0,80],"; height: ",[0,80],"; background: #50C341; border-radius: 50%; margin: 0 auto; line-height: ",[0,80],"; text-align: center; color: #fff; font-size: 13px; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"option-box .",[1],"opt-li .",[1],"wrong { background: #FF5A5A; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"not-deal-tip { display: block; font-size: 16px; width: 100%; margin-top: ",[0,120],"; text-align: center; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"upload-homework { position: absolute; bottom: ",[0,32],"; left: 5%; }\n.",[1],"do-homework .",[1],"back-tip-box { width: 100%; height: 100%; position: fixed; top: 0; left: 0; z-index: 999; font-family: PingFang SC; font-weight: bold; }\n.",[1],"do-homework .",[1],"back-tip-box .",[1],"tip-bg { pointer-events: auto; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(10, 10, 10, 0.5); }\n.",[1],"do-homework .",[1],"back-tip-box .",[1],"tip-content { position: absolute; background: #fff; z-index: 1000; width: 90%; padding: ",[0,100]," ",[0,32]," ",[0,40]," ",[0,32],"; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); border-radius: ",[0,30],"; }\n.",[1],"do-homework .",[1],"back-tip-box .",[1],"tip-content .",[1],"btn { margin-bottom: ",[0,60],"; }\n",],undefined,{path:"./pages/learning/homework/homework_have_review.wxss"});    
__wxAppCode__['pages/learning/homework/homework_have_review.wxml']=$gwx('./pages/learning/homework/homework_have_review.wxml');

__wxAppCode__['pages/learning/homework/homework_no_review.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"answer-input .",[1],"question { line-height: 36px; }\n.",[1],"answer-input .",[1],"options { margin-top: ",[0,20],"; }\n.",[1],"answer-input .",[1],"options .",[1],"option { display: -webkit-box; display: -webkit-flex; display: flex; }\n.",[1],"answer-input .",[1],"options .",[1],"option .",[1],"option-num { -webkit-flex-basis: ",[0,72],"; flex-basis: ",[0,72],"; height: ",[0,72],"; background: white; border: 2px solid #e5e9ef; border-radius: 50%; text-align: center; line-height: ",[0,68],"; margin: 0 ",[0,32]," ",[0,40]," 0; }\n.",[1],"answer-input .",[1],"options .",[1],"option .",[1],"option-answer { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; line-height: 20px; margin-top: 6px; }\n.",[1],"answer-input .",[1],"options .",[1],"selected .",[1],"option-num { background: #FF9600; color: #fff; border: 0; }\n.",[1],"answer-input .",[1],"options .",[1],"correct .",[1],"option-num { background: #50C341; color: #fff; border: 0; }\n.",[1],"answer-input .",[1],"options .",[1],"wrong .",[1],"option-num { background: #FF5A5A; color: #fff; border: 0; }\n.",[1],"answer-input .",[1],"jieda-answer { margin: ",[0,80]," auto 0 auto; }\n.",[1],"answer-input .",[1],"answer-upload { margin-bottom: ",[0,60],"; width: ",[0,686],"; height: ",[0,100],"; line-height: ",[0,100],"; background: #fff5eb; border: 2px solid #ffc38c; border-radius: ",[0,20],"; text-align: center; }\n.",[1],"answer-input .",[1],"answer-upload .",[1],"title { font-size: 16px; color: #ff7800; }\n.",[1],"answer-input .",[1],"uni-input { margin-top: ",[0,24],"; }\n.",[1],"answer-input .",[1],"inputing { background: #fafafb; border: 2px solid #e5e9ef; }\n.",[1],"answer-input .",[1],"unwrite { background: #e5e9ef; border: 2px solid #e5e9ef; }\n.",[1],"answer-input .",[1],"unwrite .",[1],"title { color: #BEC3CD; }\n.",[1],"answer-input .",[1],"jieda-answer-noreview { margin: ",[0,80]," auto ",[0,20]," auto; }\n.",[1],"answer-input .",[1],"jieda-answer-noreview .",[1],"title { display: block; width: 100%; color: #FF7800; margin-left: ",[0,-12],"; }\n.",[1],"answer-input .",[1],"jieda-answer-noreview .",[1],"answer { display: block; margin-top: ",[0,30],"; color: #323643; }\n.",[1],"answer-input .",[1],"teacherword-anlysis { font-size: 13px; font-family: PingFang SC; font-weight: bold; color: #323643; line-height: 26px; margin-left: ",[0,-12],"; position: relative; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"line-block .",[1],"title { color: #FF7800; margin-right: ",[0,10],"; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"ifcorrect-pic { position: absolute; right: ",[0,32],"; top: ",[0,0],"; width: ",[0,142],"; height: ",[0,136],"; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"ifcorrect-pic.",[1],"correct { background: url(data:image/png;base64,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); background-size: ",[0,142]," ",[0,136],"; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"ifcorrect-pic.",[1],"wrong { background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAACICAYAAAAxpNMVAAAgAElEQVR4Xu1dCZgcVdU9t7o7G0FAkC2IOyAKKoorCgoiILsOM92TYEBBFgVxQ3EBEQVBFAj7TpLpmmEwhIAsgogCBlQUUASBH0TJJGwSwmSju+v+36lXNV1dXd1VPV09GaL3++YjdFe9elV1+727nHuu4H8S+wS0u/udsKwPAngbgA0ATITIywD+jUrlQWSzd0tf37LYgdaiA2QtupfUb0V7et4DkaMAvLXp4CKvQPUmrFx5pcyfvzT1iYzDAf+nOBEvRffZZwqmTj0aIntCtZVntBQip0ixeN84fNepTqmVh5LqhcfrYJrPbw/gWwA2G+UcS7CsH0hf392jPP9Vcdr/FMd7TXr44Tm8/PKhAA4CYLX19rh1ASeszSvP/xQHgBYK7wZwLFTf2JbCBE8WWYlM5psyZ87fUhtzHA30X6s4Cgh6et4PkYMg8p4WbZlkr1BkGMBXpVh8LNkJr56jxrXiaFdXBpa1FSxrC6hOhWWtBvA8VJ8Q236+1cesJ51k4eGHt4VlfQTAJwBs3OoYLR+v+hIsi8rzRMvnjuMTxqXiaE/P62FZ3QB2dhUmSvhCRP4PIo8DeAKqT7tKtXLlaohkMGXKZDfm4jibQuRNbgxG9e0A1hnT9yHyHFQnQfVE6e//y5heu4MXG1eKo3vuORHrr/95iBwI1UwH73vshxapAJiNUqlPBgf571e1jBvF0UJhA6ieCmDrV/UTjZs8V0nVc8S2H4w7dDx/Py4UR7u6piKXm5WqV9PsqYv8B6pPQnURLGsxHOc5APxsGSxrGOXyKgBcFfiXQS6XQ6k0BRMnToXqa+A4GwLYBCLT4DhbwLLeCFVujYCIumOL5KD6+shpmGPuhOPMloGB/xvPCtJobuNDcQqFk6H60Y48QJMO+DuAB+E4D2P16kfSTgu4Hlpv7zSobgPgHVDdHiL/gurOVKWG92UU6M8Arse66/5eLr641JFn0IFB17jiaG/vB+E43KLSFHpcd0N1IV566X656SZ6Y2Mq2tX1WuRyO8JxPgKRHQFMipnAcqjeA5E/QeRhFIv/EkDHdNItXGzNK04+fx6AbVuYc/ShJmZyO1R/Ddv+63h66K7Rv956O0FkN1eJkhn+qyCyBI4zDBEqfgUiZaiWvS10pfu9yCNYtOgvcscd/HzMZI0qjnZ1bYls9qq27lb1UajOx7Jlt6+JlaXVuWtX1+uQyXwalrUPVF+b8HzHtcGAjQLHc1U1/0+bDZiHUmmeDA6uTDhmW4etWcXJ5w8BcHDLd0DbAPgDLMuWuXMfaPl8phl6e1+DcnlLN7gosjFUN4Lq+hCZAmACRCZC1YII7Y4SVGkwE3PzoheEXOzicZYseXo0v3Y3N7Z8+W5QzTc0os2NEffDOBDjU8GYlkLkGahu6ikPDfk78eKLp0X9gPSAAzbEqlXDaf241pjiuAZlPt83iiz0H+E4V8jAwMNJFUZ32SWLzTajm0+jldvi1lB9XdLzY47jFkHP6BHXNimV/iyDg/TSEokXzd4NmcznoLp53UmqC2BZm0D1A3XfidClXwbVnQAsRLl8jgwOLgkep11dE5DJdEOk4K5MjvPTNAKRa05xenu3g+Ock+jpmuWYL+eCpBln18W3rA976YX3jlnE2KyGT0GVCn43BgZob3GraSquck+btj8chyvwuoGDOV70e6LH6DjcqvtkYOCe8AU0n98ZIkdCdZPQeL9ENnuhzJmzPG5ejb5fc4pTKBwH1X1jJ06j13EuxzbbXCcnndT0Bbi5rQkTPgjVPbxfaC5m/BJEFgEYgirtBP4xlrMa5fIrYLSXhmw2OwGVClMVhI1uBJENIbIZVJnrinuGL7hGe7l8gwwO/ivufnX//dfH5MlHANg9xpUfhuocLF48L7xV6vTpb0Wl8iUA72p4PZMK+bnY9sK4OUV9H3fToxkz9hwvtTAY+mVFnUcw1FlxCU33YU+Zsi9U9wkZkNUxTcj/UQB/deM53F4qlaF2wv86c+YklEpvdre+SmV7WNb2DQ1eE7OhPTYfW299Z+yPwMBWvwnA2DBV4Y/nRohcLsUi7a0R0Zkz18fq1cQUfboFTNFtKJfPlcHBl2JfXOCANaM4PT0HQOSYJhNdAZFzpFi8pdnNaD5PryLvPaiJdcea1eped/9fseIPsmABDc2Oiusp5nK0R3aC6jsbvMDFsKwiFi26uZlhrV1dk5HNfhnAnt6kH0Amc67MncvEblVhjA3H/N6MkAGd9F6Jk54ltn170hPGXHG8hzEHAMP2UfIPqJ4s/f1DjW5C9913XUyZ0gvL2h+qtQpjVpY/oVy+Beuvf9eajMa6ii3yKQB7RRq+jMNUKldgYODWZnEnLRQ+DlVHbPu34WeiPT0f8AD1WyZ96U2OS7TC8/yxV5x8nlUDXYHJrwDA4B3tBYbeZzV62V5o/9NwnMMAvCb0ALiaLEC5fF0rXk0KDzt2CA809m6IfAbAh+pWIQbxKpVzWvIUDfTk6EhvK3ZGTQ4wgVQ6ITc2G2ZMFcetT8pkzqqLnDIi6jizpL9/QcNVplCgLfFVqL6j5hgR7s39KJWoMGMS/GrnvWih8AY4DreUj4cUyIHqdVi+/FK5/nr+mCLF9RbpuovsDyDbzlxizr0Pq1efKfPmMV5VJ2OmOK5BvMEG33CRd7UlJytgWSdJX98foyboxXt6ANDoCz6oVVAdRKVivxoUpm6L6e5+CyzriwCYx6qKyG+lWDyp7ngC6PN5Gr18Dut3UGGCc1kJ1ctg2/PCW+mYKI4bo9hiC3ocROEd5q04jMSuguMcLwMD9HbqxA3PZ7MnACCYPCiMWdDbemZMHmAHL6I9PYw1HQNV/iguhW3fEn5JHpj+S1B9Swen0nhokYeQyZwuc+aMhBPGRnEKha8D+CRUJ4zMzgT0fijF4lORSjN9+g4ol78PkfUC37/geVu/WyMPsEMXdR0GGpyhrVa7ujZFLseYzsc6AqZv5X4MPGUOymWu8JWOKo6a5fUrABhfCcqLKJe/0iggpoXCgQCOqrGFRO6EyE//G2q0XUXKZPIu7jr4Y2vlRXfqWMv6LosNO6Y4bo4klzvBAzM5EFnqBcdehuMcF4V887yPoyDy2cB9M8l4vtj2/E49i/Eyrnv/3d2fhGXRawxmwsfLFDmPH4ttM3yQvnjxixO9ABgxJMsgwm3mDahUvikDA3UZbTddkM2y9Ha3kRkxDSDyfbHth9Kf5fgaUbu73w7LYpqgfWxSJ29N5CwpFq9LXXHcxBrA7cm3/OktPecW8Iv8SPr6fh2+L09pvu/u5VV5kookc+Y828nnsKbHduEOkyYd7tqAayCuNor7v1hs205NcdxVplyeEgnMEjkNwBZSLF5WpzQGXvE9AIxrGFH9GyqVb8vgIINRa6W4eJzh4YOgWgBADNCrQ0Tm8j22rTiaz7/DxXqYigDiZgkJYKWkLw4s68vo63s4KqyuPT3HQaSaJRf5C4aGTpA77qC7vlaK9vR81IU7jJ4RA5g4EdhqK+DRR4HVYwqpnie2PWvUiqM9Pe+DZa0LVcZZslD9DkT4N7nGdSRsoVQ6Oir7qoVCL1S/MKIdBCYNDR2/tiqNMvqtyqRlOC7V2g9k2jTghBOADTYAHnsM+OEPgfKYQY5vEds+rWXF0enTt0a5fCxEWE5LI3cDiAhKpe8ik2E+5rjAU1A4ztdlYIAlIDWi+TxRaycH9vXHMTx8bLNwe2tPd/wcrV1d6yGbPQQieycEqjee/Cc/CfT0AJNNGZcr3/wm8DQroMdAVO+U/v7vt6Q4ms8zP3K0F/rnTLdwp8rKxP7+a3XGjHVQqbCu6HOud6B6rfT316H8tKtrGrLZiwN7+7PI5Y6S2bMJelprxDP6mcGfOUq4Q/VZbLEFcOihwNveBtxzD3DbbcAuuwA77wyccgrwd5aOjYncJ7b99cSKo4UCM9qEIfKcf2F4+EhMnWq7WWqRuwDcClUaeTRymX95BosXHxLedjyj8FyobuXd5ipkMl8OY0zG5BF08CJaKLwfqkQCvKGty2y9NbDbbsAHPwj89a/A3LnAkIc42W474NvfNkp0+eVtXSbxySIPS7F4VCLF8UgUfxrI5jIo1+cyRFjWR+E4G7tbl9mm+DcZjnOm9PcTRFUjms9zj2dk2IhlnRLloie+kRQOdAHjjz1GoDhX0I3gOOt7EVvSrKyGKrG5L8JxFmPFiqeaZq8JdzCGL+ETo5fXvAb43vcA2jM0fq+8EvhtAI7D7z//eWDHHYFSCTjqKGD5qCHErczzKbHtmbGK4y23rH2aVjc6cSSO8xNYFh/0Echmv4Zy+X0sOpNikYpWqzQGDnnmiF1jWTdIXx//f0zFw/W8HZXKh1y4p6l6qEcQhmdlcDPnycBAHcuWu02XSoRL8EcRh3WOv1+uNCeeaI677jpgYKB6zic+AXR1AVOmAI8/Dtx9N/DAA8DHPsYfIvCLX1SP3WQTYOVKYFlqbLrPi213xStOT8+nIcIkJSsNiKh/k1cAdjyAz0OVv6ybAGwOx7kYlnUucrlDZPZsgsBHxINVXB5Awj2NiRMPkyuvHDO327WtMpm9YFlMuLZSHvMCHOcyDAzcXJe5Nsxee0Hk8x6YPV4pkh5xyCEAjeHnnjOrzxvfaAxjKsOCBWYF4mrzmc8Au+4KvPSS2cr+8AfgLW8xn3M7O/10s82lIyvEtj+dRHEugoixRxznKGQyu0OVUeDvuLEbx9kBliUu44PJoG4VaRD39BzmxXs4Er2tY6J+uencW2il6+p6K3K5g6HK+FIrxJCsgrgGL788N2p78hhKmSYgcfboJJsFNt3UuNNLakqizHjHHWe2I25XjN1wZbnoImDpUmMYH3QQMHUq8MtfmpWJ/+ZnH/4wkPEohr7/fbMypSMK2961qeJ4OaerA3GZEyBCHpuvQORUFp8hlyPjOLPfN8JxpqBSuV0GB1lmUl1tjBd1RWAJv0Fsu+NblAdmJ1hq15bD+TT4S6ULZXCwZuV0tf6AAzbG5Mm0Y8gYFvvja/q+fvAD4ylRuKUwoHfjjdUVYp11TJyGysUVhkrDwF9vb9XD6u8HVq0C9twT2GMPo2C+MM7jb3npKA4wPNx8xXFBRiI/8q5Hy4t5I5Zk/BsiuyKbnYlS6Rr3e642IrOkr++G8Py0UDjJy5LzK0IqDu50OkG7u/eDZTEH1Fo4X+SfqFRmRcaeDGMYo+SkmYu3iZK8qDlzqisDj3/+eeAnPwEWBfSVSsNVh94Ut6R3B+KHfX1mldl9dxPbqVSAJ58EHnkEeOop4E9/6kRkubmNo4XCfu7qUitlb5siZIKoNZ9Tr4RVq/Jy7bU1sRjt6toaudwFI79MxzlLBgauS/JMR3OMWxPuON8GwJWwFaH1eAXK5eujaq20p2dXF+rZmm0Uf31uNx/xMjR/+Qtw++31L/qtbwW+9jVgvfWMvcMVZp99jM3jC7e5W28FFi4021gnJZv9XNxWRVQ+9/CwMNq00KPsoFdCcUPRdatNPk/uG/8lPo1yeWY7RXDNnod2db0J2SxXyOSs6CyncZwFWLHiiqi6Ky9S/iWIsEaqs0J7h9sQV4qga93dDey3H3DHHSZeQ8P38MOBzbzb/M1vgEsuAd7/frOl/eMf5q9T4jjN4zja27srHOe7ia7vOF8MY4eVgOxM5pKR1aZSOVmuvvo3icZr8SDt6trOU5pg3XXcKPdB9Vzp7/9nncKTGCmbZR5tj5bto7irRn1PW+a73wXe8AbjHX3961Xl2XBDYPvtgQcfBA480Ljdr7xivt9oI+N+0yX/2c+qI/v20hNPmG2Pq1Ba0WWR5pFj7el5I0Ro1DYXkUekWKSxWCOazxOYxYI0yiLY9sFJCvDjLhdxHbJQnDbCwxc/ALn/Lojqt+BR8xOBOL1l+yj+utFHrL8+8NWvAtySfAnmn7iKUGE+8AETp/nd70xch646XW4qDv/yeeB97wM4np/Los3z7LPGq+JqlUYmXTU+V6X5PGu8m8MYPVRY8Kl4xfNXBzypn4ltXz/aZ9voPHdVs6yzE7JR0MDvw6OPXiP33VfHt+clXgkOrw92pj1xjvfmN5tUAg3eYNKS3/kuNCPEp55qMuE0nM87r7oNFQrA3ntXFacTcwyPyRp4ke/FupKaz38NwN5N5lTG8uUHhu0DLRR6oEpXmLIM5XKXDA6yOUZq4lHcXpiAIZ1UITehXL4sHCrgZDzbiMlb0qGMTrjV0LPhr5vbhi/8nO7xf2oiFAA/v/BC41FxW7n6anMcI8L87JZbgKuuMt4UYznPPGOSmS8EfA+62Ywwz5pljOLOy2OwLHrOpG5pLiGXPOrge8S26cXUiObzV44k+BznahkYuCDuWq1871VQMBbUHNtCNGE2y0L9OmvRrUGfOpUFbqRVa4+Qe/PNjRvNl85thAE5KhK3Em4vjAIHhSsJFWd4GGAsx3e/GYuZMcO41ccfb+ydH/8YoNv9z38axaTQQGZ8h0rHPFUaW1DjF/CiW5jX33+jHzmPVxwTu6D7HB23EDkjXGeshQIL7wibMFIuHyqDg0+2ohhxx2pvb8GrIW90KJ/wRVEMDG7+LZPZFyIzI2rQ4y7d+HtGbPff32wpqsDrXmcUgu7zfV7vMxq5xM5wBTrgABNveThELnbGGSa5yTQBtyl6W0wbXHGF+Yz/f/LJxh3vbGacFHbzsHz57HDkPFZx+JS01qUOPjjud5+p42mpTS88LrbNco/UxO31IEL8clQykdnsfrz0kh3JhVcocDtiVWT7LYa4hWy5pVk56P7SlT7Jq96l8th2dQvhCkG3+p3vBL70pfqtK/h0PvQh4MsEEVD1LzJGM7E3RxxhVpZjjwXe+16zfdET60RWXOT3EKEDEYkQS6Y4LJAzkMewsIsLk3s1ovk8XypJAiiXiW3PTU1rjCKfHlFzTeKiO7Bq1YVy7bV1lREeeIyeXxAP3d60jjwS+OhHTY7p/vuNkcucEw1dfkZPaYcdTBqACkOhW8ytpZlwRfn5zwG64b5QMS+4ADj6aJNqiLJ52rsbczYj54at4g/NhkuqOLVbT3XEQbHt84MXcOu9c7mBkdiN6iFRcZLR3qOLdRY5I3T+iNFWp8Tsr7nuutOhShe7fbhD8ALMUnMLyeXMSlAsAgzG0WjlCkMloWvsCzPZXEF+//v42+eqQvfbF3pT224LfPzjwB//aLatdCPEL0PkSo/1o6ZJiYuVBl4M7izJFIdVmdksoRO1mWXV70h/f81T0CAMA3hWbJt5ndREe3pmBaK4dUabfyGvKnIPZDJfaIFPuH6eTAdw9fi/UMsFGr5cSRhjodDIZdCOhvA3vgG8iZ2OGL1aZBSFcRRGhJPiYmgYv8uj8OMYRPp1ApBueA5vQLl8RbigwGWHz2a5ozAIelywcUkixeH9az4/rw5vInJgnX1TKDCHxeIyyk1i29xWUhG3FAc41+MdjjTa3LmaKDLd6/Y70fCXTTeZtgSjsBTGX+gaU6GIzKMLzRWGkAfaPIy58GVzBWL+iQYxbRLmoag8ScTfBrmS0Xvyr53k3KTHsBQJODfchM2j9yVUeDvPKdoBjvPlIAymFcWputecmMhzUiyy8WmNaD5fHMkVOc7pMjDAlSoV0Xz+2y7ou4HR5sIdJk48HJYV5uAZ3fW5NVBh6PISSOVnpuluM75CpaFhSuwLDV4KjeLBQeDOO802xejuvvtW4zU0qJOsOozz8HpUxqTKlvwuF0P1Aunvv7Pu/fX2fgSOQ1uQQVAGjRiAehvK5elBiEkrikP3ugpYErlLikVWYI6Im5kmPb6PURGZ2YjGJPk91oy/HYNPdTdrQgYkX+JfXLON5JdmVQGB4vzV02DlCuOvIhyFnzFvxLgLVyW6xlQqxnLolvPFcwvj+f6W5gf2ks8izSNJylnE1KlXh+nyvPQStT8YBGW9PxGa66FY3C+YLmpFcYKeElcctxS0RnEMpthk2tgFt1gk4KejHVBcYkWAcIcgCXT7D5sBOno29JD4iydU04/OcjXgSkOvibkhKsbFFxujlcYr80rEAxOQNX++iRKfyx2Wm2zJuNPpGrZx98t3cCvK5YvqQHbNg6AroHo+LGuaFIvVuFwrWV8tFFjVUKWMd5xTZWDgVyHFqdLQemUUcXc02u+9ICNDBNyH05eDDzbGbzCCy7wQ4ylceRjtZaifq85ppwHbbGNWJwbuqECM9DLKSwX8wheMgvnCrezaa9Ofc/SIhMCQivaRupXaIDPpFYeJOIOHOli6dK9wTKyVFYfIvmojVMs6Jrxt1JS+iNwqxeKP0346Xn7Khzu0gh9OPhUWv/3oR8bNvv56E9ybOdNAGKgUXEn4GWM4hGZSkbg60T3n51QqCqsRCC73scL0kjimH+NJPqPWjzTM6ZeQy6bRyV5sKy7G5hbghcdIpDjKWMjUqb8MndwT5uDTQuFHUP2wt1XVbWWt3331DNfS33TTz0BkRsJM+Ogux22F0V+uHMwN3Xuvifj68tOfmhdPYBUDcdyuKJ/7HPCpT5kVinBQKhU9LUI3maxkcjLoYge9tNHNNPos9rZynKuTkGp6nNOzAbD9UdSP0EG5/EUZHKxDuidTHNaLVyrMQhthan1oaPe6HgL5fNWAVmWXkrCyjeoRaT7PEhyGW03JcSeFEE26zkwuMpDHSC2NXhrAxPbyc/6XnhG3Iz+Yxy2JSsXvKLR7mHL4lbebUxGZX/LhE8xBpVeyYt4J8DsPYF/bQcb88Pcjr0340WmhcCNUSY8bRVgeiep0VSDJOwgF9XiKW1tTN4menqshYuqVHOfbUR1NklzPP8blBFZlPKaW0rWVQVo59rWvNQpCdB2BUX4mmnYM8TE+0IpgcCYifQOXWxRXFBrGfhb8hhuMB0bhlsWqBILNmdxkcpKZdL+Ut5U5Rh/7OETOk2Lx/uDXI0FQy2JL7nWlWPRBdSOHaaHQD8dhX65wnRkboRzQiAo4meKQNVQ1qCiREWEtFG4ZITu0rKOlr29UlfAe3IHEBSzYHx3cgS/77W83meeoiCuB31w94oQeEo3eYOqAgHGuTByXnzPtcNllZltjhJdFcMwl3XWXAaLTxqEiMgCYriyFZV2Gvj7CHeo663g4o2pRebm8WxjvrYXCFV5kvdZAVi1Kf/8ljaabVHH6Q+7uIrFtQiurmms4/G4b+WAUUAq3hvvRR/eB45ASJEhT2/rjZtCNhilrkRjAI7CbSUO+aH87ibMzfBAV7ZabbwZWrDBRYgorJmkkM73wnvdUwVYbb2yiyv41CDCnjZMuXoZkONeiXJ7drMyozvjNZvcO96jS3t5TobpDiN2UpOX5ZgyvsYpTh63hQxP5pxSLNcikOgPasmY0SslHaYF2d++ATIYUtemQQNOeCGJ4eVEatfR6WPTGv2DtUtSkaOCymoAxGkaCKQz/0+ilMlIp6bIzD8WtzBcq3DHHGHA5va00c0wi98JxzpP+/n/H/Zp0xoyNUS5Xi86jFKdQYOkS215XRWS+FIuE4zaUeMWpb9rBwR4T22axW3XFYdF9uVwtxlPtbdYBxj9Rp0/fzAtxs01P7HziHpb7PVcVxlj8ElgG4bhixIX6ub1xC/Phmfx/Ivv+FehPRpgEk5lBYeY6CBfld9yumF9KDyvDPubnRzGANHomLsF2Nls1iKMV56IA5Yw/1JFRcZ8a3Wr2ItyGE7mcDdVqE1FTH36/2DZJB6qKw6Zfq1dX81Ix6QaPBHo6LOuzqZNAM9RPChB6LXyBDLYx6NZMqBB0u6lghEY0EirTbHqwngTtnURa3eJBqsOwrNleh98auEPcSHVVKo8+unsYpO/ZOFVQW4McZPhazQvyenoO9eIm1fPYrUX1JbFtGq9VxTEs6lUqWpHDpVh8LHxB19IvFEhcQFRgo55Vcc/EfE8vhmg5vsgglRkTkswR8XPWGvGX7wflgiPTG2JEl4rm55K4tTDI10how5x1VvXbSy/thNFLc4BwhxuxcuXlMn/+qEoz3W49ljXLm2xZbNtHLVTfWz7PFSnYhe9XYtssomwqDRXHa39INvPapKHqc8ScNMiMc8Vho/UrUSxeH7b0tatrW+RyX67bU+NmGfU9f/lnnmlwvb5wi1m82NgjpPqgQUp7hDYG8010t/n/hHgyissIcVhomzDD3Ux8BgkqGBUtfbkf5fJ5UYG3Vi7lNUEz1bUi/5FikZW5NaL5fG1GAEhUxtRYcfJ5tgjaq26ipjn6ZCkW677TQmEGSqVrw5a+x3pxOFTJmp6OHcMoLaO1lBdfNMYuo770nqhUdMMfeshEgKkg/Au61FFvgApHeGYS4XjpEzYycHdhVCe8JFOqU4pC4VNQZVGk20VZisUqwytxS+RafvnlmnwjqWySNFyLfIk6Y8abUC5fGhmGNksoGSd64+qk3H4O2SwxO72pwh0YpWUAbdIkozRcdc45x2wxPhSCWxUNUz9I5/+Xx0cZrPyeXlKaHlDyt03oQh/K5avjnmnyIV3wHUMmBhOueq/09xsl8sTFL02aFKD6IlP18n2T9C6NVpxCgeW09Q3Sg1fNZAoyd25k9zR3noaan1WR4S62rdx79LGHHWbsGxq8v/61iZuQH4b/5dZBxWAgLqggBGXRnmHQjwRE40NYJXIbS4niOh2PZrqaz7OLsN8I9jqx7YBxBmhv77Z07UfGFlkZtZNEXbtOcfS9781hq61ujmGuWg7LOiIqTuP1vGaaoD0S6EZPyg/KUQG+8hVjx3A7ImcMjV1GeWm80sahvOMdACESr399Fe5AaCcL5f79b6NEcW76aN5a3DnkEyyVZsng4Kii63HDuz/eQmGW14iFWOjzpK/PcBn5Kw6pW0SCpBJLxLbZVTlW6hWnUGBe4xkvthImJWL7IBrAl9VhjU2jdXph7Hg7ujRB3HSDUVnaIn5Qjuf58RUWuDH4x2OZH6KiUUHoYTH4R14ZovMIb6B0gsjh7OAAABUGSURBVLGq+X0QVXcJisVfdRzkFjR8Vb8h/f1/qlGcQmGmx0ltPo4I7Da6lRrF8VzlBVCl+0dvqko2QLp81g2He14z1ZDLHQjHObhtEug4xSF+d/p0U2fNEltfaPQSP8MwPyO7zG7vtZdJEcybZ+IyBJgTUxMkI/LPT5cjL/ouGP9ynGtQqcyN6ISXwYQJe+KVV25KiztIDzxwC0ycyDbdvlJEFRYEmdJ4XGSdXNQN1SpONdJI/MUGbpzFrD4XSn//HeEBUu55baK2SRKPwYnQg2JfAyLwaPPQluG/qSzXeCszA3vEBjPlQGAWvSEGCP0SFp+YKE5xR/O9gTvc5dKqRNiE2t29o5dqeVJsmy0KUhHN5xmzYZ8NSnRSOp+nYlVjEiL/lmLx4CQTqFWcqrHE3gurYfbh/rCl75bgpt3z2sfvclvhCpA0KchcEuGcBF3R06KBzG2JZSkM7LGem4ZzODsdrExg3omKlLaw76jJK7EMpUbcFWHSJDLV+8C348KwiHamU8MyInK7FIs/DI7nIhDWWYdeQlUHRF6SYpFtF2KlVnFM3RINqttRqRDY/FzNxZiCyGapkQek2vPaL9b3LxaV+4m6FR8XTAD4d75jVhKuQLRrmMWmm04oA7e2oIdFahACtAgFpfh2UezjSniA6kuwrCuw1VbXy0kn1cAd3GTwOutwWw8Saf9DbJseaGpSU6YUxV9kWgb8JKzPWLp0z6ia+/DEahWnUNgAlrVxmBLEpRTp7d0LjsOfZTo9r/3SEkIwg9FfzpBAKSpCI+G5BFzR5qH44O+g8UxlYmSZGWpfGP/xty3GeYjOY5TYjzK3+9oY4wLmY3j4qjq+IJNq2dNrs0QzICgniG2nRnDjkTJUE2q53PQ6wvJ8nsFAxtdqpVw+QgYHYwkEY6O4bs9rg8IL8Iy1+YRpvNLjYX6IWJc//9lkoOlK086hNOqIQkzNF79YLeIPhv2D2w9XH9KhUaho3LbogvN6xNFQaZJuh8lu948eCq+uVNOrLGVFRhSR9gNi22Fm12RXbHBUiNSqDjvF07RQOB+qbB0VlnPFtgOc/tEXaZxy6ETPa4bpub34zA1/+1ttgpKAKAKjKGR/ILIuLOSU8cFUVBrCJ/xoL1MOVDjGcyj0vAj/ZFkLPS8qCyEW6UEdeBXSgLBLcd2K4UVmj4DILg0gI6T+/WK4BLctrTHBV+LDTfmz6oD091fx4qZEmv2zWNJdD1AXuVeKxZoIc9R86uM41Z7X7BeZDgl0cIsgRoZQBBqwPtlQcGY+WJyfMcsdLvbn5wz4EY4ZVU/N76g8QXZxbkcMCqZbf802knOwZMkv6kD7rCxdb708RFhZ2uwZzhbbjifnbEGTPMflqoCi1mFrNJjDCo/NsMGECfvF9dgIG8efhMhhqZFAB7cIxljovRDETZfYXyVopzDe4gOhCJxiBQADdI1WnbgHSb5fEhNRSYnOO/vsWu68uPObf09j92aIXBoOgro/8Hz+E25lKbBx02FEHkKpdGxacRv/WlpLavW02DbLiWpE8/lTmvIEeU3pm83fVZyO9LwmQwMDbr4dwzISVmcES1/97iicxLe+VUXa+YnKZqtO3MunvcPcFEHk6W1Nf3XbDkThjEwJEW3B+MpS9lOvVGiE1nitcbcU973HMkGmV9/4riO18roYzmsKnkvQDkq8IB6BO7GGctzE3e2BOSF6SjSAKQzpc1sKbjnExNA4ZqDOF644dMMpNIAJwGpn1YmdbAsHMAhKPsFisQ4aGOKQia8sZU19qXRcEs+lhRm6h2p39+6wLJ/Is4xVq3rqWiT09JD7MNg3NeoyL8D0pGpY9y9qaC24dI1euDV89rMGC+PjfGlXMOgW7Orm91BiQpKKQuYGsmwSxefXaPu1RsFVh5WVxNuMvRDu0I+lS/vDsY0Ahwxd2mppdNP1XUjXe4IUix6TZHo35KaL8nlCYXwKvdvEtv0GLiMXqjGcm8/1882MdvHc7fZgbD7frj8R4nZJ90F3l94Ma4t22snQzTPCS14ZXxH4PeMtrHD0WTY5Dj0jVkZSEcc6Eck0gePcjtWrL47kE6zlkEn69lcgk/mezJ1b1xE56QDNjvPIvU10mPMvlY4Mr2rKvl3ZbMNaqZrxVU+R/v4qFDh0cdHu7q1gWRe1NXkauEEeX+J7/SYUPsySF6BRXF+FakptGc2lBGudgh4WKyeZRui8/MODbdbz8JjKUsZjWiXSfpbwhSjbKI3bqVttVP8k/f1eXKN6Ba0trOT9ceVjeXU9c5mx5eiyRwq3qi3gONUs6mjvhFhd0stT6GZzFaH4aQH+Owzs5grkt0Tm99yuqES+2xw8lzVQfoxntHNsdh4hsZXKpZHtE5nXmTLlEFjWvqOAjNzHnl9RHlhat1HjXhvK/C+Fq2g9lg8C0014QITcN+wxxoI8bmlsIVUVyzpH+voacrGIZ9zFRgpjb5LBN7rRfv7HX3WCHd78rig0ehnEY8aawlJZRo9ZNssIMo3jcHtAHtcZ+EPD9oleI1t2/2PxYTMOmajHQ9D+5SgWr+kk7ibAOOFDYO4W267r+KPd3XvDso4dUZBVq7oxeTKJsUiDwhbXG0GVVSe+vfY9sW22BW+w4hgaNCL+2he64HSrKfSiGMCjcGWhgUuvi9AGphVo0zC5yI4mPuibcR96ZMTS+KwOBJ2TyZP5q2A9U/uz5Qh3o1y+ILJ9IitLLYvUZh59aMIL+jCKUul8GRyMaLKZcJyEh2mhwAy7z8VYhuqh4SpPryELW0jRzqJXRTDT71Cp7AiR46F6NiyLfDrVpOeqVd1R9p0/LRPHKRSIe00HtefjgTkwOX19r8ovkuPnXHnI5unDO/kZPTO66H7Ck1sTeWaCScqEDzP2MEMCTbbNOu/GrbfO5Y6A6k6x4wQPMArzB4jMHi3ZQkvX43tj7IiYYf/dRaQX3PfLalzVp5DJCFS5svC9cwslDPLHUCWqk4uHX+IRC+gyipPPLwDQSoOwxvfoVyBwVaFLTrvETybSgOb2RG+JpSuUcP6KWWu68QShp19xsAyqV6JSWVDH2jB6Im2iJW+H6vVpEoHHKZFX90Y+oi3dYxlrKpUOqUMXHnjgZpg06UqocptiJ2Yyjn4KIvd47b6ZECSx0hOBerezxbZZU9dQ/BWHZb7pVSOQD4a8dxQmGklAFJZw/oqGMQmMWK6bNnjcwB2ux/Dw5ZHtE7u79wQ5ZJJVlrLPFStUH4Tj8OH/Le20QZzSeD/2ajsos9p9K4pGX/P5r4J8xkNDC7H55mcTzek21BWhTRHlTS1BqfS5uDIdf8WpZRRNMvO4Y3xWByoES1WCdowPcfCpQMJZ8rixW/v+Ps+9bti9xqXZNQbiZi5XDGvluYyrEpxPajQS6TyPSuVpPPHE01FN0lqbUntHu6VHIicGEpmR7bjd9gWWRWzJKlQqp7vlwGzDBDwDNvlgIxQRVjX4HhXjV8fLwECTGmgzd6M4tTT37d2VfzajxDSIGcCjvcJ/s/SWACy/TrtZlrz9WbD/MqsiG3oG7V9i7EfwyJLIfetXoDyFxYuPkDvuYJR7RLxiSJIqbQ6R++A4d8Cy6IKzBzsbobD5XA9yOeJyfNIB1nfV0b1F3aW/4tCafn/qj8GnlefAtF38FSYqS57exclnNxfrrntNmAQ6vUusmZG8WAwTen6X41VQPTKyGW3V2/q7GxZ4+eWH2XNKa3NV/4LI60m85xUFMkGaSHzFISsQiabTFcZjaAgHsTGshQpnydO5Kvf5m1m6HNU+MZ1LrLlRXKzyuuv+fITLxqRFTo6sPsnn2dKbaaRq0lX156hU7kcu9wO3XzwDnqpsgvsoVM8R2/a8lWT36G9VX4dIHRlksiFijvJ7ZvOwThFDN2mfmMo9rOFB3G0nlzvDfdFViQSBeW0RzoUqV5KqMCvPZLYIo8TsfPcTqC4fLcGnv+KQCtYjt0v5KXG1YeUkcTjMhqcpJIF2nIuaJePSvNyaGEt32WUSNt/8h1CtUrOL3CzFYrhCgRgIQXf3NrAs2kBBiMdCkNcImOy12O4LthAazX35K85MiNQQJY1msDE8ZzWAASxdWkxSyjGG80r1Ui4jWiZzaqA/F+M1d2GrrU4Ml93wwprP8x0OBQrxqvMplw9FNkuaYWKL2hY/jtMF1Zh+f21fq/0BTLzit1i58oJm4fD2L7TmR3A7DWazbGlQrS6hCz00dGIY4+wpDdlBTgRAoiTG5Hxu6GUearHKCJvC7fkrzqchUsfXn8L4aQ7BoBtLNwKFUmkOP37GculHKpUfQoQRXSMiv8XQ0CkNlIaFlIQjcLVhBoA1Rjm3EnflyhM78SMzijN9+i6oVKit41Eatk8cj5Ntd07a27u3i/lRnRBQmgUoFs+OJMHu6XkjLOssqFJZGBFmz7CMu6W9+OIpndrK/a0qqhy03WfQ7vmm53UuNydM6tzuwOPxfK+Wm6u+hzVxVxmmSoh1jqRM9QiwyUccJuG8CeXymZ1MhRjFMWRKpP0qpFoTPvo3tNBr/VdDAu0m9jbZROJqfkZ/2TVzplswAHwt1E+BtsnJjfDJHgCPu0SwwpZ5tN/Atk/rJAbI3TmDj0q7u98CyyLksP0mqKN7B09B5PwGyTq/XqkCg067Z3SXGD9n6cEHb4hXXjkKlvXxmkpPkYdRKp3cCM/jvqdM5nSoMu1AHiPWel0K1cfw2GMPjEUurb6S0/RTYBXnzJgqxPTeAEmgSXFbLs+PWl41nycDARlLg8Lk5YXtUrqmdxPJR/KiwHzGjJ1VWc+4NTlOEUuWzI4ygt3dge0rLevkEGk5vc3bMGHCz8ZqNW5cO24Ynbjnes2vkz+YxEc26XldsxKafktsAbBvaJVk9vrXKJVsGRxsmP1OPJ8OH+huteuttw9EWFJTy/pBLh3LOiPMFFLzHAoF0uSRoMDjoRv5ls/ha2ny68Q9iqZFeB61GwHafGlhPsC4seO+v9+LL3jNvOMOdwNcdDsJSAqzPhCgTbtoYDy6625y0nH2g8h+ETQxJOK8Eq+8Qn7oSMp9r4aLLZ0PBAnKRfguqrVcqtdKf/858U8wvSMSVW+6XUgqla/GUtgmm1fjntcHHfQRZDLZZgTRXikIiZ9JVBluzsUZPOkRXN7WycqCuFt1ge4TJuwI1T2gShhDbRWByRfdgErlKhkcbNg4y+sAQyN42wbXXIrh4V5mvuPmlOb3iRTHv6BXYsr66FYR/xyicc/rcL0SwdQTJpzbbL92PcG3vY3IvXwketG4sg+iUrmLMMkknWzafbBuxYEI2yd9GCIf8WIrtcOaJipM2jFf1DT87xIYqB7XlJTTOBMxHU7avbP681tSHNc4M8vuMS7nSzIxPa9XrWJV5As1e3azeiWRIZRKZ8jgYE27wPAlvRIWhtvZp6DRr5IxkSVQfQDAQ8hkHsXq1U/GwSPjbk/z+U1cmIMqm22809tCw/aHP8xSd4VZvXp++DnU3ROfMbdkVd5XM1mB4eGusV5tOKGWFWdk9cnnWQVAQ61ZB5i/w3HODfcGaKFeiUrHYNbFzZbzwIpIN5V0aVTquM40NCipTIsg8iwc5z9uBtmUkBAgRXBT1o3gZjIT4DivgWW9Fo6zISyLCkO2zuZ2nwg72RF9dzOWLLmrkac0Mn9T/703AAK241d1kV9KsfjTOAXvxPejVhx39TFkkkdBhPt4cKzn4TiXYGDg1nAgyuuExyzuNk2oNqgwwfEYDLsKQ0ML4h6+Oy8DL9gemczOUGV5qY+Y68QzDI9JW4NE1AtRLi9MovDeSk7KPBJIJo+hZTJfkblzuYqOubSlOCO/lELhvVBl5HNDOM5AVM9rj9aM9tHH3DyKaZ4WRdtPoDSTdfRAwrLIZfPs6/tNVN6m0dNzQ/OZzLshQq9sG4hsmVodGbAUIiRb/DsqlQfw+ON/byUA57WuZA/SD7bYIfBZ2HZPpyPEjZ5pKorj/mJMh7z1ogw+D8HGikHmYXzvYjFENg09rOUAmNxbGbNUEytbxNDQr5OsQHU2BNvtLFs2DQD5mqe52w/JiET4x9pq2imcBw1sGrOkJxkGQLgl2y6REGkIlcpTo4WpqoF3sgKTPMejeQ80rklrskZkNBMe1US9Zq+MlJKA2Q9+saNYkPafL4TlKUmrStkX4TpWInai+8qobrTJSW4AcIMNdoUqeaLbY3HNZg+VOXPWWNBzzBRnZFvbZZcspk17n1s1qLpZ4BdOZeHfBA9MTVzJxokILE2o/l5ks7di9erft+stpa4whrGeZSlMm8QbvfETSJ1QO/6StUeMueK0MkGXmLurawvkcu/0MLfMIsdFsGmc3usWnJVKf0xqnLYyr7hj3c5zy5a9CyIf8uI5Hn9u3JmJv2/KJJF4lDYOHNeKU2ebGLQ/A2tkXHhXjDHJNMTvPI+KJEIPwbIewdy5S9I2KF0szZQpW8OytvUqERjTSYfqt/7lLhTb9pt7tPHq2zv1VaU4wVvVfJ7Mk+yJ0NgbESGeh4btmwNKRn7iJ2FZT3sxHNpVLO9dCsdZjgkTVmDZsjImTSpjnXUsLF9OY34ycrkpLrquUmEc53VwHG6z0yBCGhSfAaK9txF3Nu/HkCYtizu009+/ahVnxGbq6no3stljWuax6fSTTXt8Zs+z2eNl9uya6Hval0k63qtecXijbiQ6k5kBy5regkeW9Bmt6eMY4V6ACRMuGiusTZIbXisUZ2T1YSDScU6CCAvwq25+kifR/jG85iNuSW2l8k83nVGpvIBJk1ahXHZQLk+EZW2AbPb1UH2L+yfC/zbiJaKRfydU+8eSdyfpY1irFMddfQys8szIzHTSp5L8uBeg+htY1t0YGvrbqIKRTJRa1ptc20mEMNDlKJcX4YknHmklAp18yukcudYpjqc8pOD9WWLi6taf5f2wrAH09d2btofW+lTWzBlrpeK4ytPbux0chzRl/BWnI/RqHOeccDfddAZ/dY2y1iqOqzyGkepHTRteJHtfjAnNQ6lEeAfd+/96WasVx1Uegxsi9DIM3Uz68onV+YkMDHSESj/pJMbbcWu94oysPMB3IeL1bUz4GkRuRal0jgwOMjP+Pwk8gf8KxXGVh3BMVTKk7xFRXlKrFORBViUfXmoNVtc2rfuvURz/xbn9KDOZnWBZzHWRI5hlJqyEfN6thFRdiIGBB/9bvaWkCv7/FBIsqtc2JbMAAAAASUVORK5CYII\x3d); background-size: ",[0,142]," ",[0,136],"; }\n@charset \x22UTF-8\x22;\n.",[1],"do-homework { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; height: 100%; font-family: PingFang SC; font-size: 13px; font-weight: bold; color: #333333; }\n.",[1],"do-homework .",[1],"homework-head { -webkit-flex-basis: ",[0,88],"; flex-basis: ",[0,88],"; height: ",[0,88],"; line-height: ",[0,88],"; }\n.",[1],"do-homework .",[1],"homework-head .",[1],"close-btn { position: absolute; display: block; margin: ",[0,32],"; width: ",[0,24],"; height: ",[0,24],"; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABk0lEQVRIS6WUTUsCURSG3zPZtv8RES2jP1Fg5EIwyCLap1DartKJ0W3gQoWgD0Jo019IWof0Q9yq88Y1x/yYO3PvNLuZued57rn3nCNuvblFSgPE2ggsXxWP3/CP567WTvvkDQR9n6NTqdZanwC2f5kc+mSuXDx5SeJwvXaWwgcAK5P4rhL0AGz8ATkUOrmL4pGVJAQOQL7E9Vp7FHYASc1KADm8LOSfTTIJh2Mwor8vCnDrNTOO4DGJRAcnkC0V8p2xIKkkDq64U4GtxAS+JDCVmMJDBepjtd4+gO8/QZYvXiiyUIoqZBCc+WJRzB3R7M8IiYoJ6jwSrs0gEIVL5vao3XmwSpuBgSQWHpuBWqC50PFYMWnGyAz08CC/eIlWoCtFgGLT8aGCqDon6diMlSWBSRPZzK45gQncdnZNBTZwG8lYkARuKpFKrZ0W8NWm/Rfnje5ORkRGql7zGyLrM0FGHWomQU8JuhDZmQQkguuOi+SHuG5jk6nVe4JrECmXzvPvi7uzea/Um7tC5xpgXxzn7AdtTE/GZoQWqQAAAABJRU5ErkJggg\x3d\x3d); background-size: ",[0,24]," ",[0,24],"; }\n.",[1],"do-homework .",[1],"homework-head .",[1],"page-prv { float: left; width: 100%; text-align: center; font-size: 18px; color: #323643; }\n.",[1],"do-homework .",[1],"homework-head .",[1],"page-prv .",[1],"allnum { font-size: 12px; color: #878C9E; }\n.",[1],"do-homework .",[1],"homework-head .",[1],"homework-btn { position: absolute; top: ",[0,28],"; right: ",[0,32],"; display: block; width: ",[0,32],"; height: ",[0,32],"; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAYAAAD7PHgWAAACfklEQVRYR+1Yv2/TYBB9lwQaIJXKAIKNjREJFpiQKoTEQlX+ACQSkURlShpD3S6ecCKnzdRfQU4l/gAQLEgdKjF1Q7ClWzeiIkFAgTaQ+pCNkjgmTePPtaBRvNm5d/fy7vtOukdwPNl5/Qoz4gCNA7gEIOyMOeL3PQDbAG8QoTgzHftgz0/NF0VZC49EjAJAcQCBIybRbzoD4OJO4Gu6kE7vmiCLYGph4dT5/bE3INzsN5OvcYy3O8HqHZOkRVDNry0DnPS1qMvkzFidlaJJ+nPm6J2jrWUGzf2s/VhXlEc1l7ldhSvKYuRk5PRtAj8FcNkGNoj4Kql5fRGgKdsPW/i1d0OWp764quQxWFWXzuJEeLOTJC+RqullELWZM9+TpdhLj/WE4KqmT4LoRQvMvEVqvmRe85Hmx3ptd9Tvth7EXtOen2lQw36k6iZBtgPkTLQ1eprfc/P6XcOgVRAugFEJBDjxZDr22lmoI66Xhj1yOPn0RVDVSh8tcu2nImeiF50cusT1otk9h0OwwSCY1UoTTFgBLBUrxEjOSNFXTnkccT3VOyiHUIuFrqQgaEhQULgWbDAVHM5B27kQavF/P6iHc9Bri72ODjd4oTPopoDX2MEkOJyDXi/JcA4eomDH0hTiUESS7n/3ehtF8LmcPmoE6ZsNWz8Oa+ffi3s9SNeV1IOqiAqiGGtxD4U3QW13gRnLXa0PBsrEPBvC53VJknxtt9XWAG6BSHVaH4bRuGbtwFmttMKEhOi/9wfHRTkTSxwP+81UwPQIz+2PFYjw8F8amMx49ilYTXUYmPYWmXacYZAp7TjIsoBbvo0/rUQdjG0GNpgbxbnH8ff2Or8BQSHzmITm7+wAAAAASUVORK5CYII\x3d); background-size: ",[0,32]," ",[0,32],"; }\n.",[1],"do-homework .",[1],"homework-content { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; padding: ",[0,40]," 0; }\n.",[1],"do-homework .",[1],"homework-content .",[1],"test-content { padding: 0 ",[0,32],"; }\n.",[1],"do-homework .",[1],"answer-card { width: 100%; height: 100%; position: fixed; top: 0; left: 0; z-index: 999; font-family: PingFang SC; font-weight: bold; color: #323643; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-bg { pointer-events: auto; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(10, 10, 10, 0.5); }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content { background: white; border-radius: ",[0,30]," ",[0,30]," 0px 0px; position: absolute; bottom: 0; left: 0; width: 100%; height: ",[0,800],"; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"card-header .",[1],"title { display: block; width: 100%; text-align: center; font-size: 18px; margin-top: ",[0,36],"; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"card-header .",[1],"close-btn { position: absolute; top: ",[0,42],"; right: ",[0,40],"; display: block; width: ",[0,24],"; height: ",[0,24],"; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABk0lEQVRIS6WUTUsCURSG3zPZtv8RES2jP1Fg5EIwyCLap1DartKJ0W3gQoWgD0Jo019IWof0Q9yq88Y1x/yYO3PvNLuZued57rn3nCNuvblFSgPE2ggsXxWP3/CP567WTvvkDQR9n6NTqdZanwC2f5kc+mSuXDx5SeJwvXaWwgcAK5P4rhL0AGz8ATkUOrmL4pGVJAQOQL7E9Vp7FHYASc1KADm8LOSfTTIJh2Mwor8vCnDrNTOO4DGJRAcnkC0V8p2xIKkkDq64U4GtxAS+JDCVmMJDBepjtd4+gO8/QZYvXiiyUIoqZBCc+WJRzB3R7M8IiYoJ6jwSrs0gEIVL5vao3XmwSpuBgSQWHpuBWqC50PFYMWnGyAz08CC/eIlWoCtFgGLT8aGCqDon6diMlSWBSRPZzK45gQncdnZNBTZwG8lYkARuKpFKrZ0W8NWm/Rfnje5ORkRGql7zGyLrM0FGHWomQU8JuhDZmQQkguuOi+SHuG5jk6nVe4JrECmXzvPvi7uzea/Um7tC5xpgXxzn7AdtTE/GZoQWqQAAAABJRU5ErkJggg\x3d\x3d); background-size: ",[0,24]," ",[0,24],"; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"option-box { padding: 0 ",[0,32],"; overflow: hidden; margin-top: ",[0,40],"; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"option-box .",[1],"opt-li { float: left; width: 20%; margin-top: ",[0,60],"; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"option-box .",[1],"opt-li .",[1],"opt { width: ",[0,80],"; height: ",[0,80],"; background: #c6cbd4; border-radius: 50%; margin: 0 auto; line-height: ",[0,80],"; text-align: center; color: #fff; font-size: 13px; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"option-box .",[1],"opt-li .",[1],"opt.",[1],"done { background: #ff9600; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"not-deal-tip { display: block; font-size: 16px; width: 100%; margin-top: ",[0,120],"; text-align: center; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"upload-homework { position: absolute; bottom: ",[0,32],"; left: 5%; }\n.",[1],"do-homework .",[1],"back-tip-box { width: 100%; height: 100%; position: fixed; top: 0; left: 0; z-index: 999; font-family: PingFang SC; font-weight: bold; }\n.",[1],"do-homework .",[1],"back-tip-box .",[1],"tip-bg { pointer-events: auto; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(10, 10, 10, 0.5); }\n.",[1],"do-homework .",[1],"back-tip-box .",[1],"tip-content { position: absolute; background: #fff; z-index: 1000; width: 90%; padding: ",[0,100]," ",[0,32]," ",[0,40]," ",[0,32],"; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); border-radius: ",[0,30],"; }\n.",[1],"do-homework .",[1],"back-tip-box .",[1],"tip-content .",[1],"btn { margin-bottom: ",[0,60],"; }\n",],undefined,{path:"./pages/learning/homework/homework_no_review.wxss"});    
__wxAppCode__['pages/learning/homework/homework_no_review.wxml']=$gwx('./pages/learning/homework/homework_no_review.wxml');

__wxAppCode__['pages/learning/homework/homework.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"homework-box { font-family: PingFang-SC-Bold; position: relative; height: 100%; }\n.",[1],"homework-box .",[1],"navTitle { width: 100%; overflow: hidden; position: fixed; top: ",[0,166],"; background: #fff; left: 0; z-index: 999; }\n.",[1],"homework-box .",[1],"navTitle .",[1],"nav { position: relative; width: 50%; float: left; text-align: center; font-size: ",[0,24],"; font-weight: bold; color: #323643; height: ",[0,88],"; line-height: ",[0,88],"; }\n.",[1],"homework-box .",[1],"navTitle .",[1],"nav .",[1],"title { position: relative; }\n.",[1],"homework-box .",[1],"navTitle .",[1],"nav .",[1],"title::before { content: \x27\x27; position: absolute; top: ",[0,12],"; right: ",[0,-30],"; width: 0; height: 0; border-width: ",[0,10],"; border-style: solid; border-color: #BEC3CD transparent transparent transparent; }\n.",[1],"homework-box .",[1],"navTitle .",[1],"nav .",[1],"title.",[1],"current { color: #FF7800; }\n.",[1],"homework-box .",[1],"navTitle .",[1],"nav .",[1],"title.",[1],"current::before { -webkit-transform: rotate(180deg); transform: rotate(180deg); top: 0; border-color: #FF7800 transparent transparent transparent; }\n.",[1],"homework-box .",[1],"select-box { position: fixed; pointer-events: auto; top: ",[0,254],"; left: 0; width: 100%; height: 100%; overflow: hidden; z-index: 999; }\n.",[1],"homework-box .",[1],"select-box .",[1],"select-bg { pointer-events: auto; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(10, 10, 10, 0.5); }\n.",[1],"homework-box .",[1],"select-box .",[1],"select-tab { position: absolute; top: 0; left: 0; width: 100%; background: #fff; z-index: 1000; display: -webkit-box; display: -webkit-flex; display: flex; padding: ",[0,20]," ",[0,32],"; font-size: 12px; color: #323643; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-flow: row wrap; flex-flow: row wrap; }\n.",[1],"homework-box .",[1],"select-box .",[1],"select-tab .",[1],"btn { -webkit-box-flex: 0; -webkit-flex: 0 0 20%; flex: 0 0 20%; text-align: center; margin-bottom: ",[0,30],"; }\n.",[1],"homework-box .",[1],"select-box .",[1],"select-tab .",[1],"btn .",[1],"subject-btn, .",[1],"homework-box .",[1],"select-box .",[1],"select-tab .",[1],"btn .",[1],"process-btn { display: block; width: ",[0,120],"; height: ",[0,60],"; line-height: ",[0,60],"; }\n.",[1],"homework-box .",[1],"select-box .",[1],"select-tab .",[1],"btn.",[1],"is-select .",[1],"subject-btn, .",[1],"homework-box .",[1],"select-box .",[1],"select-tab .",[1],"btn.",[1],"is-select .",[1],"process-btn { color: #fff; background: -webkit-linear-gradient(left, #f9d423 0%, #ff794a 100%); background: linear-gradient(90deg, #f9d423 0%, #ff794a 100%); border-radius: 30px; }\n.",[1],"homework-box .",[1],"homework-list { width: 100%; padding: ",[0,32],"; margin-top: ",[0,80],"; margin-bottom: ",[0,60],"; }\n.",[1],"homework-box .",[1],"homework-list .",[1],"homework-li { width: 100%; border-radius: 12px; height: ",[0,185],"; box-shadow: 0 0 12px 0px rgba(128, 128, 128, 0.2); position: relative; padding: ",[0,37]," ",[0,33],"; font-size: 12px; color: #878C9E; margin-bottom: ",[0,32],"; }\n.",[1],"homework-box .",[1],"homework-list .",[1],"homework-li .",[1],"title { height: ",[0,35],"; font-size: 18px; font-family: PingFang SC; font-weight: bold; color: #323643; line-height: ",[0,42],"; display: block; }\n.",[1],"homework-box .",[1],"homework-list .",[1],"homework-li .",[1],"time { display: block; margin-top: ",[0,34],"; }\n.",[1],"homework-box .",[1],"homework-list .",[1],"homework-li .",[1],"if-review { float: right; margin-top: ",[0,-36],"; width: ",[0,120],"; height: ",[0,44],"; line-height: ",[0,44],"; font-size: 12px; color: #fff; background: -webkit-linear-gradient(left, #f9d423 0%, #ff794a 100%); background: linear-gradient(90deg, #f9d423 0%, #ff794a 100%); background: #c6cbd4; text-align: center; border-radius: 20px; }\n",],undefined,{path:"./pages/learning/homework/homework.wxss"});    
__wxAppCode__['pages/learning/homework/homework.wxml']=$gwx('./pages/learning/homework/homework.wxml');

__wxAppCode__['pages/learning/index.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"homework-box { font-family: PingFang-SC-Bold; position: relative; height: 100%; }\n.",[1],"homework-box .",[1],"navTitle { width: 100%; overflow: hidden; position: fixed; top: ",[0,166],"; background: #fff; left: 0; z-index: 999; }\n.",[1],"homework-box .",[1],"navTitle .",[1],"nav { position: relative; width: 50%; float: left; text-align: center; font-size: ",[0,24],"; font-weight: bold; color: #323643; height: ",[0,88],"; line-height: ",[0,88],"; }\n.",[1],"homework-box .",[1],"navTitle .",[1],"nav .",[1],"title { position: relative; }\n.",[1],"homework-box .",[1],"navTitle .",[1],"nav .",[1],"title::before { content: \x27\x27; position: absolute; top: ",[0,12],"; right: ",[0,-30],"; width: 0; height: 0; border-width: ",[0,10],"; border-style: solid; border-color: #BEC3CD transparent transparent transparent; }\n.",[1],"homework-box .",[1],"navTitle .",[1],"nav .",[1],"title.",[1],"current { color: #FF7800; }\n.",[1],"homework-box .",[1],"navTitle .",[1],"nav .",[1],"title.",[1],"current::before { -webkit-transform: rotate(180deg); transform: rotate(180deg); top: 0; border-color: #FF7800 transparent transparent transparent; }\n.",[1],"homework-box .",[1],"select-box { position: fixed; pointer-events: auto; top: ",[0,254],"; left: 0; width: 100%; height: 100%; overflow: hidden; z-index: 999; }\n.",[1],"homework-box .",[1],"select-box .",[1],"select-bg { pointer-events: auto; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(10, 10, 10, 0.5); }\n.",[1],"homework-box .",[1],"select-box .",[1],"select-tab { position: absolute; top: 0; left: 0; width: 100%; background: #fff; z-index: 1000; display: -webkit-box; display: -webkit-flex; display: flex; padding: ",[0,20]," ",[0,32],"; font-size: 12px; color: #323643; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-flow: row wrap; flex-flow: row wrap; }\n.",[1],"homework-box .",[1],"select-box .",[1],"select-tab .",[1],"btn { -webkit-box-flex: 0; -webkit-flex: 0 0 20%; flex: 0 0 20%; text-align: center; margin-bottom: ",[0,30],"; }\n.",[1],"homework-box .",[1],"select-box .",[1],"select-tab .",[1],"btn .",[1],"subject-btn, .",[1],"homework-box .",[1],"select-box .",[1],"select-tab .",[1],"btn .",[1],"process-btn { display: block; width: ",[0,120],"; height: ",[0,60],"; line-height: ",[0,60],"; }\n.",[1],"homework-box .",[1],"select-box .",[1],"select-tab .",[1],"btn.",[1],"is-select .",[1],"subject-btn, .",[1],"homework-box .",[1],"select-box .",[1],"select-tab .",[1],"btn.",[1],"is-select .",[1],"process-btn { color: #fff; background: -webkit-linear-gradient(left, #f9d423 0%, #ff794a 100%); background: linear-gradient(90deg, #f9d423 0%, #ff794a 100%); border-radius: 30px; }\n.",[1],"homework-box .",[1],"homework-list { width: 100%; padding: ",[0,32],"; margin-top: ",[0,80],"; margin-bottom: ",[0,60],"; }\n.",[1],"homework-box .",[1],"homework-list .",[1],"homework-li { width: 100%; border-radius: 12px; height: ",[0,185],"; box-shadow: 0 0 12px 0px rgba(128, 128, 128, 0.2); position: relative; padding: ",[0,37]," ",[0,33],"; font-size: 12px; color: #878C9E; margin-bottom: ",[0,32],"; }\n.",[1],"homework-box .",[1],"homework-list .",[1],"homework-li .",[1],"title { height: ",[0,35],"; font-size: 18px; font-family: PingFang SC; font-weight: bold; color: #323643; line-height: ",[0,42],"; display: block; }\n.",[1],"homework-box .",[1],"homework-list .",[1],"homework-li .",[1],"time { display: block; margin-top: ",[0,34],"; }\n.",[1],"homework-box .",[1],"homework-list .",[1],"homework-li .",[1],"if-review { float: right; margin-top: ",[0,-36],"; width: ",[0,120],"; height: ",[0,44],"; line-height: ",[0,44],"; font-size: 12px; color: #fff; background: -webkit-linear-gradient(left, #f9d423 0%, #ff794a 100%); background: linear-gradient(90deg, #f9d423 0%, #ff794a 100%); background: #c6cbd4; text-align: center; border-radius: 20px; }\n@charset \x22UTF-8\x22;\n.",[1],"learn-page { height: 100%; }\n.",[1],"learn-page .",[1],"head-tab { overflow: hidden; position: fixed; z-index: 998; top: ",[0,88],"; left: 0; background: #fff; width: 100%; padding: ",[0,20]," ",[0,32]," 0 ",[0,32],"; overflow: hidden; }\n.",[1],"learn-page .",[1],"head-tab .",[1],"tab { float: left; font-size: 14px; min-width: ",[0,90],"; height: ",[0,58],"; color: #878C9E; font-weight: 500; }\n.",[1],"learn-page .",[1],"head-tab .",[1],"tab.",[1],"current { font-weight: bold; border-bottom: 2px solid #FF794A; color: #323643; }\n.",[1],"learn-page .",[1],"head-tab .",[1],"wrong-topic-tools { float: right; overflow: hidden; }\n.",[1],"learn-page .",[1],"head-tab .",[1],"wrong-topic-tools .",[1],"icon { display: block; float: left; width: ",[0,40],"; height: ",[0,40],"; margin-left: ",[0,60],"; }\n.",[1],"learn-page .",[1],"head-tab .",[1],"wrong-topic-tools .",[1],"scan-icon { background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACtklEQVRYR+1YS4vTUBT+TsKkCvWxVHcKPlBBd/oDRrAuFWblpu0o+ECcMTLTusnGtoOZGRXqxnbqwpWgOx/g4Nqlgm9B3GhnKdphSCU5ko6xt5nW5lUM2OyS+51zv/MlOffej+C6CvrCXgLGAaQAbAeQaEOoTrCy02r2sTvOy31Jr6YYUhXgrQLeAOMTCE8YqOTVzBsxFzk3mnZPUZLLcwQ+A0DqPSHVc2p6mxdCbkxRr311kXNDLGbcXicnJyYnx1bswRZBm1wi2XgIYNTDxEs5NSMq4CFkFeKBoJPrmdFIpjRtrNkiWNSrZYDOepjpCxOdzl9KP/KAXQMpzNaOEXMVwJZ+8Qwq59X0eSrN3dnHlvUSgCwEfWTQdFMZWdQunPzeL1mYce3m3Y1K8+cogUsAdgq5TJKkA1Sarc0z88X2AH8wZOmQNpH+FmZiv7HafG1zwuTnAHY7sUR0nYr6wlsAe5yHDDqRV9MP/E4QBb6g144T+L6Q651N0ACgOA8NRdk06Nfaq5iZmeoGSybxk2raBFkMyKmZP60nClX85nDzGRL8HxTsWH4CrxJ+leqFd602SyR0dzPMKhEVQTeff/rHeilqSNCLSn/DxF/BHrvcsIVHEL+6eycfm8gIJvWbguoxJ4iOPth3l+u3/pD41u49/j9JyCoHHj5UMKzE1O6D9iE5uGsQlogT7+bjajPBXYOoCHb25VYfHJ5JfIk7PDT5kqsLuJuCsTm4a+VyMrGy/ofAuxF36+N1F/MI7w2ZDsfBPAJwg65eq+yXSHrRzX6TTevp1FRWlDzsJ7Ym3vZjTFk6QrCKAO0SAKbF1kGfBuZAPOoeRfOtnJo9F8ACDr7a+Ni9d1rAdgneTXQEdh88EOxuoosa/7aETwE4CmAHgBFhfBAe9TKAzwAWLbYqVy6PvxL5/AKY3nWcWzc+1AAAAABJRU5ErkJggg\x3d\x3d); background-size: ",[0,40]," ",[0,40],"; }\n.",[1],"learn-page .",[1],"head-tab .",[1],"wrong-topic-tools .",[1],"delete-icon { background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAC7ElEQVRYR+1YTUgUYRh+3lldDUfqmHbrUEEevGX3goxOBUIQxM72Hy1pEzraYQ7prrQqFUaR69YpCOrUHxRds5uBEdGli67HqFlkzZk3xhj73B33m9lVEdq5fs/7Ps883/v9vYSAn2k+jUabrAtEOAmgDYAaMNSDWQBmmPFkMa/eN82uxSDxFAR0c/TxrjrHfsFAexC8DEPA9JISOXaj5/RsAGx5iOtco2p9XC9xAtunpqh1IJFIFMopkDqYSmevMPiO7E8rGSdQok+P3a1KYDI9+QFAx0oS5jdO3ZI20H0+F0bU4NiDFmWpbhJER4S4KUPXDlYr0J2CqJfEifxuDSvOi10WadfPCYIKhq41ViuQxQSGrknLohxhMj0ZKp+ULGxC2bSHzUepdKaToWQAbpEl39xxyhGcOCXT2bmtJ86zgnJbXCDmaWgke5SYMwB2bu4UStlmmehcySIJW8RSGglAxlcTKHP4/3Tw394JuHtVnx5/7edUENyGOLh676Scocda/QQGwW2QwGDnqYzc/SkZpqJVLEvquRkEJ8PUBMquajUHXYfWusTK3KktEq++ag6KK2096qa2D1a7d20BB1c9tOYNXfN9ERY9yHxxspKq6KgT3jG2+27ovxZ75XebCYKrROCqVkchGt1uJk79lN2MKxk3x8fVhoVtv4RYy9C1ZjGXn4NfAOzzQAw60a/HnlciQBYzlM4eJ/AzAffZ0DW3ObrylQhMjWTHmPmqgPlaiFCH2R37ISMMM26OZXc02DwFYK8Qd9vQNZEbJQIHb020KaRMA4gIgd8Y1Bexnbe9vXFxSsJoWsYOD2ea7YhymOAkAdojJLAddtoHrp+ZKevg3wM8Mw7QpdDsVQXwPUOPXy5O4dvdctu+Dar1EsChqjiDB78vWGqnX2N9zfbbcldfzY8S+CIAJThXKKTDjIeNEbW7p6drwS9S2h9MjT7az45zFoDbut0NoD6UhFJwHsB3AO8cdiaKa64Y/gdhbAltr3a5VwAAAABJRU5ErkJggg\x3d\x3d); background-size: ",[0,40]," ",[0,40],"; }\n.",[1],"learn-page .",[1],"head-tab .",[1],"wrong-topic-tools .",[1],"download-icon { background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADM0lEQVRYR+2YS2gTURSG/zOxiUJ8LK07BR+ooDsf6wqtuPJRBd0kqYoPxKYT2kk3s2mT0jRVIYLYJC4UtFBXPgoWl+pSwbcgbjQuRVtKojNHJumkk2liZpIZ6SLZzb3n8c099/65cwim33Ais52AHgBdADYC8C2aUI6ghgbE0GOzn5XneCLdxRDSALcb7PNgfAZhmoGJqBh8a4xF+oMsT3q9/rkkgc8BEGonpJwkBjZYATLbxBLZbyY4s4nKjJsrPf7ecLh7XpssAmpwPv/sQwAdFhJ/l8SgcQUsuJRMLADqsZ7mZ/1dstxdKALGEukUQOctZPrKRGeifYFHFmyXmAyPZQ8ScxrA+nr+DEpFxcBFiidv7WBVfQXAY3D6xKCBgrdtRr506me9YM3My9dur/EWfncQOA5gsyGWQoKwi+Jj2XFmvrw4wR/zHmGP3Bv40Uxiu77yeHadT+EXALbqvkR0hWKJzDsA2/RBBh2JioH7dhM4YT+cyB4m8JQh1nsNMA/Aqw/mvd61bpe11suMjKRXqx4ybqmCBshGB0kMlqXHzqosapwmDY1rpZnHMcBKCWlGKysXzEFAZyrh4gq2AEtHotFD4tRha5VYlyanKtE6xXbEvnSzaumgs2pgew8Ojd9oJ2VFkpjaiXhE/z6pJTPF/2imfibOsedPeLD3bO5fZW+6xLFEZhLAsYUkCggnpb7gvWqAsbHMcTDulC/DTFNSJHDUbcBnAPYZb74aJBh3KxITTlTAlSafS2Jwv7uAyWwnVH5g+kRQTM8ag3lMgUCHpHBg2lXAohSYS1dfS8pboZ5p03tQT2AD0jKc4zpoAdIWnOOAdcptG84VQAPkklOsyU+9PWeed2wPmgPHRzOjTAhr48RIDkSCEbtwrq1gIyC1fFxbQacgqwEumw93OZXy++ZX/TK87Oxyb328qdI8woe8h/Yuh+YRgKs0NDqxUyDhZbX2m0dRn/T3h4xL7tRWK8fR+jGKRzhAUGMAbTFeQlRWd9ttYDoOWDsgX5fE0IVGWsD/A7KyBaxltN5Ed5WvehPdmHKhJXwaQCeATQDaXEUC5gB8ATCjsjoxGOl5bcz3F14KFV8j/BAiAAAAAElFTkSuQmCC); background-size: ",[0,40]," ",[0,40],"; }\n.",[1],"learn-page .",[1],"tab-content { height: 100%; padding-top: ",[0,88],"; }\n",],undefined,{path:"./pages/learning/index.wxss"});    
__wxAppCode__['pages/learning/index.wxml']=$gwx('./pages/learning/index.wxml');

__wxAppCode__['pages/learning/worngtopic/worngtopic.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"wrong-topic { font-family: PingFang SC; font-weight: bold; }\n.",[1],"wrong-topic .",[1],"select-tab { width: 100%; height: ",[0,88],"; line-height: ",[0,88],"; background: white; display: -webkit-box; display: -webkit-flex; display: flex; position: fixed; top: ",[0,166],"; left: 0; padding: 0 ",[0,32],"; z-index: 1000; }\n.",[1],"wrong-topic .",[1],"select-tab .",[1],"selecter { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; text-align: center; color: #323643; font-size: 12px; position: relative; }\n.",[1],"wrong-topic .",[1],"select-tab .",[1],"selecter .",[1],"nav-title { position: relative; }\n.",[1],"wrong-topic .",[1],"select-tab .",[1],"selecter .",[1],"nav-title .",[1],"arrow { position: absolute; top: 6px; right: -16px; width: 0; height: 0; border-width: ",[0,10],"; border-style: solid; border-color: #BEC3CD transparent transparent transparent; }\n.",[1],"wrong-topic .",[1],"select-tab .",[1],"selecter .",[1],"nav-title.",[1],"current { color: #FF7800; }\n.",[1],"wrong-topic .",[1],"select-tab .",[1],"selecter .",[1],"nav-title.",[1],"current .",[1],"arrow { -webkit-transform: rotate(180deg); transform: rotate(180deg); top: 0; border-color: #FF7800 transparent transparent transparent; }\n.",[1],"wrong-topic .",[1],"select-tab .",[1],"tab-main-content { position: fixed; pointer-events: auto; top: ",[0,254],"; left: 0; width: 100%; height: 100%; overflow: hidden; z-index: 999; border-top: 1px solid #E5E9EF; }\n.",[1],"wrong-topic .",[1],"select-tab .",[1],"tab-main-content .",[1],"tab-bg { pointer-events: auto; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(10, 10, 10, 0.5); }\n.",[1],"wrong-topic .",[1],"select-tab .",[1],"tab-main-content .",[1],"tab { position: absolute; z-index: 1000; background: #fff; width: 100%; font-size: 12px; color: #323643; padding: ",[0,28]," ",[0,32],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-flow: row wrap; flex-flow: row wrap; }\n.",[1],"wrong-topic .",[1],"select-tab .",[1],"tab-main-content .",[1],"tab .",[1],"btn { -webkit-box-flex: 0; -webkit-flex: 0 0 20%; flex: 0 0 20%; text-align: center; margin-bottom: ",[0,30],"; }\n.",[1],"wrong-topic .",[1],"select-tab .",[1],"tab-main-content .",[1],"tab .",[1],"btn .",[1],"subject-btn, .",[1],"wrong-topic .",[1],"select-tab .",[1],"tab-main-content .",[1],"tab .",[1],"btn .",[1],"process-btn { display: block; width: ",[0,120],"; height: ",[0,60],"; line-height: ",[0,60],"; }\n.",[1],"wrong-topic .",[1],"select-tab .",[1],"tab-main-content .",[1],"tab .",[1],"btn.",[1],"is-select .",[1],"subject-btn, .",[1],"wrong-topic .",[1],"select-tab .",[1],"tab-main-content .",[1],"tab .",[1],"btn.",[1],"is-select .",[1],"process-btn { color: #fff; background: -webkit-linear-gradient(left, #f9d423 0%, #ff794a 100%); background: linear-gradient(90deg, #f9d423 0%, #ff794a 100%); border-radius: 30px; }\n.",[1],"wrong-topic .",[1],"wrong-test-box { margin: ",[0,110]," ",[0,32]," ",[0,120]," ",[0,32],"; }\n.",[1],"wrong-topic .",[1],"choose-tab { width: 100%; height: ",[0,98],"; background: white; position: fixed; bottom: 0; left: 0; font-size: 14px; box-shadow: 0 0 12px 0px rgba(128, 128, 128, 0.4); padding: ",[0,13]," ",[0,32],"; }\n.",[1],"wrong-topic .",[1],"choose-tab .",[1],"choose-all { color: #878C9E; float: left; height: ",[0,72],"; line-height: ",[0,72],"; display: block; }\n.",[1],"wrong-topic .",[1],"choose-tab .",[1],"choose-all .",[1],"choose-icon { display: inline-block; vertical-align: middle; margin-right: ",[0,33],"; width: ",[0,40],"; height: ",[0,40],"; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAE2UlEQVRYR81ZS1BbZRT+zs0DQqGUailFClaZoa0ttSTWGXlooA4LhxnHhS6sK8fH2NGd3djRdnSj3enI1FbdqDOOCx/DuGA0iTSkM2JuLNhKmUErD3laKA0vk9x7nD9wY3KTNBBCyNnk5n+d7/7nP+c/57uENOQMs9TULT/EgB2QrAR1P0AVzFwEIoUYt0E8wZCuA6pMgOtSg/WXM0TqetXReiY4HL4qMvMrAJ4DsGc9cwGMA/iMA9Te0lI3tNa5awLY2ekpNVvyzjLR8wBMa108ybggEX0SWFh6q7W1firVWikBurrkZ1WJ3yfQzlSLraefwTOSSq/ZH7V+cad5SQF6vV7T7SX6EMALiRYwGCTcVVKMkh1FKNxmgSU/D0ajITw0FFKwtPwv5heWMHvLj5uzc1CUpMfv4nYLn7TZbMFEehIC7OjwFmwrpq9BaNVPsuSbUVlRht27SmAwrABKJYqiYHJ6FsOjk2HgccLoXJjjp9rabIv6vjiAqzvXAcSCkyTCvspyVJSXQjynI6rKGB2bwo3hMYhnnXRut3CbfifjNDnc8gXSmTU/34zDB+4PmzITIkx/tf8PLC0H9MtdbG60vhjdGANQOARL+Dx6QGGBBUcOVcNs3qjzxmIJBILovTqI+cWlmA5ScSLacSIARSgxFuT1R3ur2DlrbU3GwWmIBEi5bwDLUTspvDskmQ601h8Jh6AIQKdbPg/gJW2yOGd1tTUoKizIhFWTruGfX4Svb0B/Jj9qbrS+HAH4g9tbaQANRgfh+6rKUbW3bFPBaYsPjUzgz6GxaF1BBVz9eKNtOLyDTrf8LoBT2ggRSo7VHYQkSVkBKDy6x/d7TAhSGeeON1lP0crF7xuNvltrqitRXnZ3VsBpSsYm/sHA4HC0znF7Q10FObp6HiHJ4NF6xA1Rf6wW4jebIm4aT09fzI3DqlJPLrf8BgPvaGBKd5XggZp92cQW0XVt4Aampmcj/wk4TQ63/A0BT2qtW2HeZGZm4FtyuuVrAA5qg2wP7t/00JLMPH7/Iry91yPdzOgXAMWe7tBaGx6uhclk3BITB4MhdP/cF637lgAo0pwIosfqj4IovWRgo2/FzPjJ82vUDrJCTrdvGeA8rXUrAaqqiq7LV/QA5WkAkaC3lSYOBEPwJDBx7jjJ/CK8V3ROksthBszfkaPLe5okejt3A3WuX3XMLLlyOVkQpv3xkvyeRHj9/3QrbzXdyk48TJRugXGuWaRbAlQuJqwmcHWjlrCuJq1xKb+oRwo3OeWfn18M1yW6MjQ25RcAOz29pUY1uOVFE0AzQckQXzQJkEnLzsPVMJsyXHYGg+j9LUHZSdIJe8PRCF8T5wVOt3xBz8eIGuVQFgp3Zv64pckWwwWti/q4d+8e7L1HUB/plQPinI38PYm/RsbTpz6EqcPkUQl9BcYT+hRKsFiVFbszSx4Rvl+Y5afXRB5pgFwulxGGog+YKFxA6yVMv+0sRklxLP3GDISUUJgtCNNvc37cnElOvxHzeSj+V+12eyiRnpSR2NUtP6Myt28GgcksnTzeVPflnRLdlAC1EGRm5SwzZ4QCBvBpUDK+qfEvGwaoLeDw+KpI3SCJLlF7S32GSXT9G2qfIcBoBsgK4hrxGQLgopWx5Ad4FEwDAMsgONP9DPEfgr5kIbSn2nIAAAAASUVORK5CYII\x3d); background-size: ",[0,40]," ",[0,40],"; }\n.",[1],"wrong-topic .",[1],"choose-tab .",[1],"choose-all .",[1],"choose-icon.",[1],"is-select { background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAEc0lEQVRYR9WZf0yVVRjHPwcuggjhBSJFBEwydXNtlWvDtZZbq63VWitbIWUKN8pqbRSXlVP6YXKxH8smE1DXVv6sCDKcpAI16Ze55lxZq39qbTRb0owaCZfTzvtyue8L7733PZdL0fsP2z3P830+5zmc5z3neQVxPLKOJAZYTjI3AtcgWIykAMhEEERyAcEvSL4FThGkmwxOijpGdMMJHQdZTREeHkFQDszV8QX6kLzJMI3iZX506+sKUD5JHh6eRbIOQYpbcUc7yRCCXQyzSbzEuVhaMQFlDWUItiHIjiWmNS45j+Rx0cCeaH4RAaWPFLxsR1CpFVjXWNJCP+tFM0NOro6A0kc6ObQiuVk3Xlz2gk5+407RzF/j/ScAjmbuEOJfggsRSTrp57bxmZwI6Kd5ypc1UpolLSKAzzpsAzQ2RBJvxbVMiXIaYbV144wBGqUkmbMJ36264Gp3B1kSKkFhQD87EDykqzcl9pImEaBKaRuA0k8h8MOki7Bb2kW3wF27ITkV2qrgzNt2T1XMoUQE+CkEGEBQ41Z/UnYKrrwNPKmmzMA52HyZk+RWUU+NMF78g/wcx7tVn7PkJri/HVJmhn0v9MGWfCetPtIoENJPKYJe/WiaHgtXwgOHICU97Bgcgr13wzftzmKSFULW8gzwgmY4PfMFN8CaDpgxK+w3Mgz7y+DMwWhaG1QG30Nwh6NVkgeW3A4XB+D7D/WgQtbF18ODh2FGhgUuCAfL4fS+6JqSNpXBr4Gljpb3HYBlq8yhky3QqqqQdA9aWAprj0Bqph3unTXwlYv3geSsymA/gtkToook2DwE6m/o+bwJ2h52Bzn/OljbCWlZYX85Au+ug1NvuJuk5HeVQVVzPI4eVb1QVGof+nQ7vP9o9ADzroWKo5BmmbeCa/XBl7vcwSkrSVABDgKjRWmc7yX5UNkDuVfYB3pfgw+ecA6UfzVUHIOZXkvmpJn5L5rcw1kAfwVyI3pmFZiQOQvtJidegY5q+29zr4KK45CeY4dTGf+sUQ/OBDSWOPImCUnOLgRfD3gX2IN81ABH/OZvc5ZBRRfMssxVSjPTn2zThzMBjU0SucxYZb3FZia9RfZg3S/C6b0mXEaePXOHq+HEq/HBmYDtCnADguddqWRfbmYya77d/OKf9iKsMqcy+/FWV7JRjIxCrfeqyykxM5k1L7Ju59PQs2WycCqDK+I7LOQuMjOZ6XB3P7oRutwtSIwZmIcFY6lraQCe0prypYuhshsy54Tdjj8HxzZpyUQxNo9bBmC8B9a8pXDvAcguBrVZErGs5uawH1hHIafvkd8AnO6XptH/xTL4j6+dsFrUh/s10+viDjtFvb0X9P9rfRhLrZpH2aiz+K2JqhkxdDo4zypXzaOQkKzDwyCvg3mBnsJnB2k8JuoYdooRu4FZyz1IGhPeElEtDlgvAuyPNvmYgGMlKJEtYNhNkI0JaQFbZzdtm+jjl8DoRvzNciQrjc8QcOXYZwjT+A+E0a34zvgMIegiNb7PEP8AC6xsD2sMAc4AAAAASUVORK5CYII\x3d) no-repeat; background-size: ",[0,40]," ",[0,40],"; }\n.",[1],"wrong-topic .",[1],"choose-tab .",[1],"cancel-btn { color: #fff; float: right; width: ",[0,150],"; height: ",[0,72],"; line-height: ",[0,72],"; background: #c6cbd4; border-radius: ",[0,36],"; text-align: center; margin-right: ",[0,32],"; }\n.",[1],"wrong-topic .",[1],"choose-tab .",[1],"done-btn { width: ",[0,280],"; height: ",[0,72],"; line-height: ",[0,72],"; float: right; color: #fff; background: -webkit-linear-gradient(left, #f9d423 0%, #ff794a 100%); background: linear-gradient(90deg, #f9d423 0%, #ff794a 100%); border-radius: ",[0,36],"; text-align: center; }\n",],undefined,{path:"./pages/learning/worngtopic/worngtopic.wxss"});    
__wxAppCode__['pages/learning/worngtopic/worngtopic.wxml']=$gwx('./pages/learning/worngtopic/worngtopic.wxml');

__wxAppCode__['pages/notice/notice.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\nbody { background-color: #f7f7f7; padding-bottom: ",[0,30],"; }\n.",[1],"notice-item { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"time { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; height: ",[0,80],"; padding-top: ",[0,10],"; font-size: ",[0,26],"; color: #7d7d7d; }\n.",[1],"content { width: ",[0,710],"; padding: 0 ",[0,24],"; background-color: #fff; border-radius: ",[0,4],"; }\n.",[1],"title { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; height: ",[0,90],"; font-size: ",[0,32],"; color: #303133; }\n.",[1],"img-wrapper { width: 100%; height: ",[0,260],"; position: relative; }\n.",[1],"pic { display: block; width: 100%; height: 100%; border-radius: ",[0,6],"; }\n.",[1],"cover { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; position: absolute; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); font-size: ",[0,36],"; color: #fff; }\n.",[1],"introduce { display: inline-block; padding: ",[0,16]," 0; font-size: ",[0,28],"; color: #606266; line-height: ",[0,38],"; }\n.",[1],"bot { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; height: ",[0,80],"; font-size: ",[0,24],"; color: #707070; position: relative; }\n.",[1],"more-icon { font-size: ",[0,32],"; }\n",],undefined,{path:"./pages/notice/notice.wxss"});    
__wxAppCode__['pages/notice/notice.wxml']=$gwx('./pages/notice/notice.wxml');

__wxAppCode__['pages/public/login.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\nbody { background: #fff; }\n.",[1],"container { padding-top: 115px; position: relative; width: 100vw; height: 100vh; overflow: hidden; background: #fff; }\n.",[1],"wrapper { position: relative; z-index: 90; background: #fff; padding-bottom: ",[0,40],"; }\n.",[1],"back-btn { position: absolute; left: ",[0,40],"; z-index: 9999; padding-top: var(--status-bar-height); top: ",[0,40],"; font-size: ",[0,40],"; color: #303133; }\n.",[1],"left-top-sign { font-size: ",[0,120],"; color: #f8f8f8; position: relative; left: ",[0,-16],"; }\n.",[1],"right-top-sign { position: absolute; top: ",[0,80],"; right: ",[0,-30],"; z-index: 95; }\n.",[1],"right-top-sign:before, .",[1],"right-top-sign:after { display: block; content: \x22\x22; width: ",[0,400],"; height: ",[0,80],"; background: #b4f3e2; }\n.",[1],"right-top-sign:before { -webkit-transform: rotate(50deg); transform: rotate(50deg); border-radius: 0 50px 0 0; }\n.",[1],"right-top-sign:after { position: absolute; right: ",[0,-198],"; top: 0; -webkit-transform: rotate(-50deg); transform: rotate(-50deg); border-radius: 50px 0 0 0; }\n.",[1],"left-bottom-sign { position: absolute; left: ",[0,-270],"; bottom: ",[0,-320],"; border: ",[0,100]," solid #d0d1fd; border-radius: 50%; padding: ",[0,180],"; }\n.",[1],"welcome { position: relative; left: ",[0,50],"; top: ",[0,-90],"; font-size: ",[0,46],"; color: #555; text-shadow: 1px 0px 1px rgba(0, 0, 0, 0.3); }\n.",[1],"input-content { padding: 0 ",[0,60],"; }\n.",[1],"input-item { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-align: start; -webkit-align-items: flex-start; align-items: flex-start; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; padding: 0 ",[0,30],"; background: #f8f6fc; height: ",[0,120],"; border-radius: 4px; margin-bottom: ",[0,50],"; }\n.",[1],"input-item:last-child { margin-bottom: 0; }\n.",[1],"input-item .",[1],"tit { height: ",[0,50],"; line-height: ",[0,56],"; font-size: ",[0,26],"; color: #606266; }\n.",[1],"input-item wx-input { height: ",[0,60],"; font-size: ",[0,30],"; color: #303133; width: 100%; }\n.",[1],"confirm-btn { width: ",[0,630],"; height: ",[0,76],"; line-height: ",[0,76],"; border-radius: 50px; margin-top: ",[0,70],"; background: #fa436a; color: #fff; font-size: ",[0,32],"; }\n.",[1],"confirm-btn:after { border-radius: 100px; }\n.",[1],"forget-section { font-size: ",[0,26],"; color: #4399fc; text-align: center; margin-top: ",[0,40],"; }\n.",[1],"register-section { position: absolute; left: 0; bottom: ",[0,50],"; width: 100%; font-size: ",[0,26],"; color: #606266; text-align: center; }\n.",[1],"register-section wx-text { color: #4399fc; margin-left: ",[0,10],"; }\n",],undefined,{path:"./pages/public/login.wxss"});    
__wxAppCode__['pages/public/login.wxml']=$gwx('./pages/public/login.wxml');

__wxAppCode__['pages/set/set.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\nbody { background: #f8f8f8; }\n.",[1],"list-cell { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: baseline; -webkit-align-items: baseline; align-items: baseline; padding: ",[0,20]," ",[0,30],"; line-height: ",[0,60],"; position: relative; background: #fff; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; }\n.",[1],"list-cell.",[1],"log-out-btn { margin-top: ",[0,40],"; }\n.",[1],"list-cell.",[1],"log-out-btn .",[1],"cell-tit { color: #fa436a; text-align: center; margin-right: 0; }\n.",[1],"list-cell.",[1],"cell-hover { background: #fafafa; }\n.",[1],"list-cell.",[1],"b-b:after { left: ",[0,30],"; }\n.",[1],"list-cell.",[1],"m-t { margin-top: ",[0,16],"; }\n.",[1],"list-cell .",[1],"cell-more { -webkit-align-self: baseline; align-self: baseline; font-size: ",[0,32],"; color: #909399; margin-left: ",[0,10],"; }\n.",[1],"list-cell .",[1],"cell-tit { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; font-size: ",[0,30],"; color: #303133; margin-right: ",[0,10],"; }\n.",[1],"list-cell .",[1],"cell-tip { font-size: ",[0,28],"; color: #909399; }\n.",[1],"list-cell wx-switch { -webkit-transform: translateX(",[0,16],") scale(0.84); transform: translateX(",[0,16],") scale(0.84); }\n",],undefined,{path:"./pages/set/set.wxss"});    
__wxAppCode__['pages/set/set.wxml']=$gwx('./pages/set/set.wxml');

__wxAppCode__['pages/user/user.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"tj-sction .",[1],"tj-item, .",[1],"order-section .",[1],"order-item { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"tj-sction, .",[1],"order-section { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-justify-content: space-around; justify-content: space-around; -webkit-align-content: center; align-content: center; background: #fff; border-radius: ",[0,10],"; }\n.",[1],"user-section { height: ",[0,520],"; padding: ",[0,100]," ",[0,30]," 0; position: relative; }\n.",[1],"user-section .",[1],"bg { position: absolute; left: 0; top: 0; width: 100%; height: 100%; -webkit-filter: blur(1px); filter: blur(1px); opacity: .7; }\n.",[1],"user-info-box { height: ",[0,180],"; display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; position: relative; z-index: 1; }\n.",[1],"user-info-box .",[1],"portrait { width: ",[0,130],"; height: ",[0,130],"; border: ",[0,5]," solid #fff; border-radius: 50%; }\n.",[1],"user-info-box .",[1],"username { font-size: ",[0,38],"; color: #303133; margin-left: ",[0,20],"; }\n.",[1],"vip-card-box { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; color: #f7d680; height: ",[0,240],"; background: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)); background: linear-gradient(left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)); border-radius: ",[0,16]," ",[0,16]," 0 0; overflow: hidden; position: relative; padding: ",[0,20]," ",[0,24],"; }\n.",[1],"vip-card-box .",[1],"card-bg { position: absolute; top: ",[0,20],"; right: 0; width: ",[0,380],"; height: ",[0,260],"; }\n.",[1],"vip-card-box .",[1],"b-btn { position: absolute; right: ",[0,20],"; top: ",[0,16],"; width: ",[0,132],"; height: ",[0,40],"; text-align: center; line-height: ",[0,40],"; font-size: ",[0,22],"; color: #36343c; border-radius: 20px; background: -webkit-linear-gradient(left, #f9e6af, #ffd465); background: linear-gradient(left, #f9e6af, #ffd465); z-index: 1; }\n.",[1],"vip-card-box .",[1],"tit { font-size: ",[0,30],"; color: #f7d680; margin-bottom: ",[0,28],"; }\n.",[1],"vip-card-box .",[1],"tit .",[1],"yticon { color: #f6e5a3; margin-right: ",[0,16],"; }\n.",[1],"vip-card-box .",[1],"e-b { font-size: ",[0,24],"; color: #d8cba9; margin-top: ",[0,10],"; }\n.",[1],"cover-container { background: #f8f8f8; margin-top: ",[0,-150],"; padding: 0 ",[0,30],"; position: relative; background: #f5f5f5; padding-bottom: ",[0,20],"; }\n.",[1],"cover-container .",[1],"arc { position: absolute; left: 0; top: ",[0,-34],"; width: 100%; height: ",[0,36],"; }\n.",[1],"tj-sction .",[1],"tj-item { -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; height: ",[0,140],"; font-size: ",[0,24],"; color: #75787d; }\n.",[1],"tj-sction .",[1],"num { font-size: ",[0,32],"; color: #303133; margin-bottom: ",[0,8],"; }\n.",[1],"order-section { padding: ",[0,28]," 0; margin-top: ",[0,20],"; }\n.",[1],"order-section .",[1],"order-item { width: ",[0,120],"; height: ",[0,120],"; border-radius: ",[0,10],"; font-size: ",[0,24],"; color: #303133; }\n.",[1],"order-section .",[1],"yticon { font-size: ",[0,48],"; margin-bottom: ",[0,18],"; color: #fa436a; }\n.",[1],"order-section .",[1],"icon-shouhoutuikuan { font-size: ",[0,44],"; }\n.",[1],"history-section { padding: ",[0,30]," 0 0; margin-top: ",[0,20],"; background: #fff; border-radius: ",[0,10],"; }\n.",[1],"history-section .",[1],"sec-header { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; font-size: ",[0,28],"; color: #303133; line-height: ",[0,40],"; margin-left: ",[0,30],"; }\n.",[1],"history-section .",[1],"sec-header .",[1],"yticon { font-size: ",[0,44],"; color: #5eba8f; margin-right: ",[0,16],"; line-height: ",[0,40],"; }\n.",[1],"history-section .",[1],"h-list { white-space: nowrap; padding: ",[0,30]," ",[0,30]," 0; }\n.",[1],"history-section .",[1],"h-list wx-image { display: inline-block; width: ",[0,160],"; height: ",[0,160],"; margin-right: ",[0,20],"; border-radius: ",[0,10],"; }\n",],undefined,{path:"./pages/user/user.wxss"});    
__wxAppCode__['pages/user/user.wxml']=$gwx('./pages/user/user.wxml');

__wxAppCode__['pages/userinfo/userinfo.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\nbody { background: #f8f8f8; }\n.",[1],"user-section { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; height: ",[0,460],"; padding: ",[0,40]," ",[0,30]," 0; position: relative; }\n.",[1],"user-section .",[1],"bg { position: absolute; left: 0; top: 0; width: 100%; height: 100%; -webkit-filter: blur(1px); filter: blur(1px); opacity: .7; }\n.",[1],"user-section .",[1],"portrait-box { width: ",[0,200],"; height: ",[0,200],"; border: ",[0,6]," solid #fff; border-radius: 50%; position: relative; z-index: 2; }\n.",[1],"user-section .",[1],"portrait { position: relative; width: 100%; height: 100%; border-radius: 50%; }\n.",[1],"user-section .",[1],"yticon { position: absolute; line-height: 1; z-index: 5; font-size: ",[0,48],"; color: #fff; padding: ",[0,4]," ",[0,6],"; border-radius: ",[0,6],"; background: rgba(0, 0, 0, 0.4); }\n.",[1],"user-section .",[1],"pt-upload-btn { right: 0; bottom: ",[0,10],"; }\n.",[1],"user-section .",[1],"bg-upload-btn { right: ",[0,20],"; bottom: ",[0,16],"; }\n",],undefined,{path:"./pages/userinfo/userinfo.wxss"});    
__wxAppCode__['pages/userinfo/userinfo.wxml']=$gwx('./pages/userinfo/userinfo.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
