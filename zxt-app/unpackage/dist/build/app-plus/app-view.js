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
Z([3,'empty-content'])
Z([3,'empty-content-image'])
Z([3,'aspectFit'])
Z([[7],[3,'setSrc']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'enter-panel'])
Z([3,'panel-header'])
Z([[2,'+'],[[2,'+'],[1,'background:'],[[7],[3,'bgColor']]],[1,';']])
Z([3,'title'])
Z([a,[[7],[3,'panelTitle']]])
Z([3,'more'])
Z([3,'查看更多'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'show']])
Z([3,'__e'])
Z(z[1])
Z([3,'mask'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toggleMask']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'stopPrevent']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'backgroundColor']]],[1,';']])
Z(z[1])
Z([3,'mask-content'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'stopPrevent']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'height:'],[[6],[[7],[3,'config']],[3,'height']]],[1,';']],[[2,'+'],[[2,'+'],[1,'transform:'],[[7],[3,'transform']]],[1,';']]])
Z([3,'view-content'])
Z([3,'share-header'])
Z([3,'分享到'])
Z([3,'share-list'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'shareList']])
Z(z[14])
Z(z[1])
Z([3,'share-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'shareToFriend']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'shareList']],[1,'']],[[7],[3,'index']]],[1,'text']]]]]]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'icon']])
Z([a,[[6],[[7],[3,'item']],[3,'text']]])
Z(z[1])
Z([3,'bottom b-t'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toggleMask']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'取消'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-load-more'])
Z([3,'uni-load-more__img'])
Z([[2,'!'],[[2,'&&'],[[2,'==='],[[7],[3,'status']],[1,'loading']],[[7],[3,'showIcon']]]])
Z([3,'load1'])
Z([[2,'+'],[[2,'+'],[1,'background:'],[[7],[3,'color']]],[1,';']])
Z(z[4])
Z(z[4])
Z(z[4])
Z([3,'load2'])
Z(z[4])
Z(z[4])
Z(z[4])
Z(z[4])
Z([3,'load3'])
Z(z[4])
Z(z[4])
Z(z[4])
Z(z[4])
Z([3,'uni-load-more__text'])
Z([[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'color']]],[1,';']])
Z([a,[[2,'?:'],[[2,'==='],[[7],[3,'status']],[1,'more']],[[6],[[7],[3,'contentText']],[3,'contentdown']],[[2,'?:'],[[2,'==='],[[7],[3,'status']],[1,'loading']],[[6],[[7],[3,'contentText']],[3,'contentrefresh']],[[6],[[7],[3,'contentText']],[3,'contentnomore']]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content b-t'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'addressList']])
Z(z[1])
Z([3,'__e'])
Z([3,'list b-b'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'checkAddress']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'addressList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([3,'wrapper'])
Z([3,'address-box'])
Z([[6],[[7],[3,'item']],[3,'default']])
Z([3,'tag'])
Z([3,'默认'])
Z([3,'address'])
Z([a,[[2,'+'],[[2,'+'],[[6],[[7],[3,'item']],[3,'addressName']],[1,' ']],[[6],[[7],[3,'item']],[3,'area']]]])
Z([3,'u-box'])
Z([3,'name'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([3,'mobile'])
Z([a,[[6],[[7],[3,'item']],[3,'mobile']]])
Z(z[5])
Z([3,'yticon icon-bianji'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'addAddress']],[[4],[[5],[[5],[1,'edit']],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'addressList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([3,'display:block;padding:16rpx 30rpx 10rpx;lihe-height:1.6;color:#fa436a;font-size:24rpx;'])
Z([3,'重要：添加和修改地址回调仅增加了一条数据做演示，实际开发中将回调改为请求后端接口刷新一下列表即可'])
Z(z[5])
Z([3,'add-btn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'addAddress']],[[4],[[5],[1,'add']]]]]]]]]]])
Z([3,'新增地址'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'row b-b'])
Z([3,'tit'])
Z([3,'联系人'])
Z([3,'__e'])
Z([3,'input'])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'name']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'addressData']]]]]]]]]]])
Z([3,'收货人姓名'])
Z([3,'placeholder'])
Z([3,'text'])
Z([[6],[[7],[3,'addressData']],[3,'name']])
Z(z[1])
Z(z[2])
Z([3,'手机号'])
Z(z[4])
Z(z[5])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'mobile']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'addressData']]]]]]]]]]])
Z([3,'收货人手机号码'])
Z(z[8])
Z([3,'number'])
Z([[6],[[7],[3,'addressData']],[3,'mobile']])
Z(z[1])
Z(z[2])
Z([3,'地址'])
Z(z[4])
Z(z[5])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'chooseLocation']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'addressData']],[3,'addressName']]],[1,'']]])
Z([3,'yticon icon-shouhuodizhi'])
Z(z[1])
Z(z[2])
Z([3,'门牌号'])
Z(z[4])
Z(z[5])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'$0']],[1,'area']],[1,'$event']],[[4],[[5]]]]]],[[4],[[5],[1,'addressData']]]]]]]]]]])
Z([3,'楼号、门牌'])
Z(z[8])
Z(z[9])
Z([[6],[[7],[3,'addressData']],[3,'area']])
Z([3,'row default-row'])
Z(z[2])
Z([3,'设为默认'])
Z(z[4])
Z([[6],[[7],[3,'addressData']],[3,'defaule']])
Z([3,'#fa436a'])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'switchChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[4])
Z([3,'add-btn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'confirm']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'提交'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'true'])
Z([3,'carousel'])
Z([3,'700'])
Z(z[0])
Z([3,'3000'])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'data']],[3,'imgList']])
Z(z[5])
Z([3,'image-wrapper'])
Z([3,'__e'])
Z([[4],[[5],[[6],[[7],[3,'item']],[3,'loaded']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'load']],[[4],[[5],[[4],[[5],[[5],[1,'imageOnLoad']],[[4],[[5],[[5],[1,'imgList']],[[7],[3,'index']]]]]]]]]]]])
Z([3,'aspectFill'])
Z([[6],[[7],[3,'item']],[3,'src']])
Z([3,'scroll-view-wrapper'])
Z([[4],[[5],[[5],[1,'episode-panel']],[[2,'?:'],[[2,'!'],[[7],[3,'loaded']]],[1,'Skeleton'],[1,'']]]])
Z(z[5])
Z(z[6])
Z([[6],[[7],[3,'data']],[3,'episodeList']])
Z(z[5])
Z(z[10])
Z([[4],[[5],[[2,'?:'],[[2,'==='],[[7],[3,'currentEpd']],[[7],[3,'item']]],[1,'current'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changeEpd']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[7],[3,'item']]],[1,'']]])
Z([3,'info'])
Z([3,'title'])
Z([[4],[[5],[[2,'?:'],[[2,'!'],[[7],[3,'loaded']]],[1,'Skeleton'],[1,'']]]])
Z([a,[[6],[[7],[3,'data']],[3,'title']]])
Z(z[27])
Z([a,[[6],[[7],[3,'data']],[3,'title2']]])
Z([3,'yticon icon-xia'])
Z([3,'actions'])
Z(z[10])
Z([3,'yticon icon-fenxiang2'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'share']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'yticon icon-Group-'])
Z(z[10])
Z([[4],[[5],[[5],[1,'yticon icon-shoucang']],[[2,'?:'],[[6],[[7],[3,'data']],[3,'favorite']],[1,'active'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'favorite']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'guess'])
Z([3,'section-tit'])
Z([3,'猜你喜欢'])
Z([3,'guess-list'])
Z(z[5])
Z(z[6])
Z([[6],[[7],[3,'data']],[3,'guessList']])
Z(z[5])
Z([3,'guess-item'])
Z(z[9])
Z(z[10])
Z(z[11])
Z([[4],[[5],[[4],[[5],[[5],[1,'load']],[[4],[[5],[[4],[[5],[[5],[1,'imageOnLoad']],[[4],[[5],[[5],[1,'guessList']],[[7],[3,'index']]]]]]]]]]]])
Z(z[13])
Z(z[14])
Z([[4],[[5],[[5],[1,'title clamp']],[[2,'?:'],[[2,'!'],[[7],[3,'loaded']]],[1,'Skeleton'],[1,'']]]])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z([[4],[[5],[[5],[1,'clamp']],[[2,'?:'],[[2,'!'],[[7],[3,'loaded']]],[1,'Skeleton'],[1,'']]]])
Z([a,[[6],[[7],[3,'item']],[3,'title2']]])
Z([3,'evalution'])
Z(z[41])
Z([3,'评论'])
Z([[4],[[5],[[5],[1,'eva-list']],[[2,'?:'],[[2,'!'],[[7],[3,'loaded']]],[1,'Skeleton'],[1,'']]]])
Z(z[5])
Z(z[6])
Z([[6],[[7],[3,'data']],[3,'evaList']])
Z(z[5])
Z([3,'eva-item'])
Z(z[13])
Z(z[14])
Z([3,'eva-right'])
Z([a,[[6],[[7],[3,'item']],[3,'nickname']]])
Z([a,[[6],[[7],[3,'item']],[3,'time']]])
Z([3,'zan-box'])
Z([a,[[6],[[7],[3,'item']],[3,'zan']]])
Z([3,'yticon icon-shoucang'])
Z([3,'content'])
Z([a,[[6],[[7],[3,'item']],[3,'content']]])
Z([3,'__l'])
Z([3,'vue-ref'])
Z([1,580])
Z([3,'share'])
Z([[7],[3,'shareList']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'app'])
Z([3,'price-box'])
Z([3,'支付金额'])
Z([3,'price'])
Z([3,'38.88'])
Z([3,'pay-type-list'])
Z([3,'__e'])
Z([3,'type-item b-b'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changePayType']],[[4],[[5],[1,1]]]]]]]]]]])
Z([3,'icon yticon icon-weixinzhifu'])
Z([3,'con'])
Z([3,'tit'])
Z([3,'微信支付'])
Z([3,'推荐使用微信支付'])
Z([3,'radio'])
Z([[2,'=='],[[7],[3,'payType']],[1,1]])
Z([3,'#fa436a'])
Z([3,''])
Z(z[6])
Z(z[7])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changePayType']],[[4],[[5],[1,2]]]]]]]]]]])
Z([3,'icon yticon icon-alipay'])
Z(z[10])
Z(z[11])
Z([3,'支付宝支付'])
Z(z[14])
Z([[2,'=='],[[7],[3,'payType']],[1,2]])
Z(z[16])
Z(z[17])
Z(z[6])
Z([3,'type-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'changePayType']],[[4],[[5],[1,3]]]]]]]]]]])
Z([3,'icon yticon icon-erjiye-yucunkuan'])
Z(z[10])
Z(z[11])
Z([3,'预存款支付'])
Z([3,'可用余额 ¥198.5'])
Z(z[14])
Z([[2,'=='],[[7],[3,'payType']],[1,3]])
Z(z[16])
Z(z[17])
Z(z[6])
Z([3,'mix-btn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'confirm']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'确认支付'])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'success-icon yticon icon-xuanzhong2'])
Z([3,'tit'])
Z([3,'支付成功'])
Z([3,'btn-group'])
Z([3,'mix-btn'])
Z([3,'redirect'])
Z([3,'/pages/order/order?state\x3d0'])
Z([3,'查看订单'])
Z([3,'mix-btn hollow'])
Z([3,'switchTab'])
Z([3,'/pages/index/index'])
Z([3,'返回首页'])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'address-section'])
Z([3,'/pages/address/address?source\x3d1'])
Z([3,'order-content'])
Z([3,'yticon icon-shouhuodizhi'])
Z([3,'cen'])
Z([3,'top'])
Z([3,'name'])
Z([a,[[6],[[7],[3,'addressData']],[3,'name']]])
Z([3,'mobile'])
Z([a,[[6],[[7],[3,'addressData']],[3,'mobile']]])
Z([3,'address'])
Z([a,[[2,'+'],[[2,'+'],[[6],[[7],[3,'addressData']],[3,'address']],[1,' ']],[[6],[[7],[3,'addressData']],[3,'area']]]])
Z([3,'yticon icon-you'])
Z([3,'a-bg'])
Z([3,'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAAFCAYAAAAaAWmiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Rjk3RjkzMjM2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Rjk3RjkzMjQ2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGOTdGOTMyMTY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGOTdGOTMyMjY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrEOZlQAAAiuSURBVHjazJp7bFvV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\x3d\x3d'])
Z([3,'goods-section'])
Z([3,'g-header b-b'])
Z([3,'logo'])
Z([3,'http://duoduo.qibukj.cn/./Upload/Images/20190321/201903211727515.png'])
Z(z[6])
Z([3,'西城小店铺'])
Z([3,'g-item'])
Z([3,'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u\x3d756705744,3505936868\x26fm\x3d11\x26gp\x3d0.jpg'])
Z([3,'right'])
Z([3,'title clamp'])
Z([3,'古黛妃 短袖t恤女夏装2019新款'])
Z([3,'spec'])
Z([3,'春装款 L'])
Z([3,'price-box'])
Z([3,'price'])
Z([3,'￥17.8'])
Z([3,'number'])
Z([3,'x 1'])
Z(z[21])
Z([3,'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u\x3d1620020012,789258862\x26fm\x3d26\x26gp\x3d0.jpg'])
Z(z[23])
Z(z[24])
Z([3,'韩版于是洞洞拖鞋 夏季浴室防滑简约居家【新人专享，限选意见】'])
Z(z[26])
Z(z[27])
Z(z[28])
Z(z[29])
Z(z[30])
Z(z[31])
Z(z[32])
Z([3,'yt-list'])
Z([3,'__e'])
Z([3,'yt-list-cell b-b'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toggleMask']],[[4],[[5],[1,'show']]]]]]]]]]])
Z([3,'cell-icon'])
Z([3,'券'])
Z([3,'cell-tit clamp'])
Z([3,'优惠券'])
Z([3,'cell-tip active'])
Z([3,'选择优惠券'])
Z([3,'cell-more wanjia wanjia-gengduo-d'])
Z(z[47])
Z([3,'cell-icon hb'])
Z([3,'减'])
Z(z[51])
Z([3,'商家促销'])
Z([3,'cell-tip disabled'])
Z([3,'暂无可用优惠'])
Z(z[45])
Z(z[47])
Z(z[51])
Z([3,'商品金额'])
Z([3,'cell-tip'])
Z([3,'￥179.88'])
Z(z[47])
Z(z[51])
Z([3,'优惠金额'])
Z([3,'cell-tip red'])
Z([3,'-￥35'])
Z(z[47])
Z(z[51])
Z([3,'运费'])
Z(z[67])
Z([3,'免运费'])
Z([3,'yt-list-cell desc-cell'])
Z(z[51])
Z([3,'备注'])
Z(z[46])
Z([3,'desc'])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'desc']],[1,'$event']],[[4],[[5]]]]]]]]]]]]])
Z([3,'请填写备注信息'])
Z([3,'placeholder'])
Z([3,'text'])
Z([[7],[3,'desc']])
Z([3,'footer'])
Z([3,'price-content'])
Z([3,'实付款'])
Z([3,'price-tip'])
Z([3,'￥'])
Z(z[29])
Z([3,'475'])
Z(z[46])
Z([3,'submit'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'提交订单'])
Z(z[46])
Z([[4],[[5],[[5],[1,'mask']],[[2,'?:'],[[2,'==='],[[7],[3,'maskState']],[1,0]],[1,'none'],[[2,'?:'],[[2,'==='],[[7],[3,'maskState']],[1,1]],[1,'show'],[1,'']]]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toggleMask']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[46])
Z([3,'mask-content'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'stopPrevent']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'couponList']])
Z(z[106])
Z([3,'coupon-item'])
Z([3,'con'])
Z([3,'left'])
Z([3,'title'])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z([3,'time'])
Z([3,'有效期至2019-06-30'])
Z(z[23])
Z(z[29])
Z([a,[[6],[[7],[3,'item']],[3,'price']]])
Z([3,'满30可用'])
Z([3,'circle l'])
Z([3,'circle r'])
Z([3,'tips'])
Z([3,'限新用户使用'])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'navbar'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'navList']])
Z(z[2])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'nav-item']],[[2,'?:'],[[2,'==='],[[7],[3,'tabCurrentIndex']],[[7],[3,'index']]],[1,'current'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'tabClick']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'text']]],[1,'']]])
Z(z[6])
Z([3,'swiper-box'])
Z([[7],[3,'tabCurrentIndex']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'changeTab']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'300'])
Z([3,'tabIndex'])
Z([3,'tabItem'])
Z(z[4])
Z(z[15])
Z([3,'tab-content'])
Z(z[6])
Z([3,'list-scroll-content'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'loadData']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'&&'],[[2,'==='],[[6],[[7],[3,'tabItem']],[3,'loaded']],[1,true]],[[2,'==='],[[6],[[6],[[7],[3,'tabItem']],[3,'orderList']],[3,'length']],[1,0]]])
Z([3,'__l'])
Z([[2,'+'],[1,'1-'],[[7],[3,'tabIndex']]])
Z(z[2])
Z(z[3])
Z([[6],[[7],[3,'tabItem']],[3,'orderList']])
Z(z[2])
Z([3,'order-item'])
Z([3,'i-top b-b'])
Z([3,'time'])
Z([a,[[6],[[7],[3,'item']],[3,'time']]])
Z([3,'state'])
Z([[2,'+'],[[2,'+'],[1,'color:'],[[6],[[7],[3,'item']],[3,'stateTipColor']]],[1,';']])
Z([a,[[6],[[7],[3,'item']],[3,'stateTip']]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'state']],[1,9]])
Z(z[6])
Z([3,'del-btn yticon icon-iconfontshanchu1'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'deleteOrder']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'goodsList']],[3,'length']],[1,1]])
Z([3,'goods-box'])
Z([3,'goodsIndex'])
Z([3,'goodsItem'])
Z([[6],[[7],[3,'item']],[3,'goodsList']])
Z(z[43])
Z([3,'goods-item'])
Z([3,'goods-img'])
Z([3,'aspectFill'])
Z([[6],[[7],[3,'goodsItem']],[3,'image']])
Z(z[43])
Z(z[44])
Z(z[45])
Z(z[43])
Z([[2,'==='],[[6],[[6],[[7],[3,'item']],[3,'goodsList']],[3,'length']],[1,1]])
Z([3,'goods-box-single'])
Z(z[48])
Z(z[49])
Z(z[50])
Z([3,'right'])
Z([3,'title clamp'])
Z([a,[[6],[[7],[3,'goodsItem']],[3,'title']]])
Z([3,'attr-box'])
Z([a,[[2,'+'],[[2,'+'],[[6],[[7],[3,'goodsItem']],[3,'attr']],[1,'  x ']],[[6],[[7],[3,'goodsItem']],[3,'number']]]])
Z([3,'price'])
Z([a,[[6],[[7],[3,'goodsItem']],[3,'price']]])
Z([3,'price-box'])
Z([3,'共'])
Z([3,'num'])
Z([3,'7'])
Z([3,'件商品 实付款'])
Z(z[65])
Z([3,'143.7'])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'state']],[1,9]])
Z([3,'action-box b-t'])
Z(z[6])
Z([3,'action-btn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'cancelOrder']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[5],[[4],[[5],[[5],[[5],[1,'navList']],[1,'']],[[7],[3,'tabIndex']]]]],[[4],[[5],[[5],[[5],[1,'orderList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([3,'取消订单'])
Z([3,'action-btn recom'])
Z([3,'立即支付'])
Z(z[24])
Z([[6],[[7],[3,'tabItem']],[3,'loadingType']])
Z([[2,'+'],[1,'2-'],[[7],[3,'tabIndex']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'navbar'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'position:'],[[7],[3,'headerPosition']]],[1,';']],[[2,'+'],[[2,'+'],[1,'top:'],[[7],[3,'headerTop']]],[1,';']]])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'nav-item']],[[2,'?:'],[[2,'==='],[[7],[3,'filterIndex']],[1,0]],[1,'current'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'tabClick']],[[4],[[5],[1,0]]]]]]]]]]])
Z([3,'综合排序'])
Z(z[3])
Z([[4],[[5],[[5],[1,'nav-item']],[[2,'?:'],[[2,'==='],[[7],[3,'filterIndex']],[1,1]],[1,'current'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'tabClick']],[[4],[[5],[1,1]]]]]]]]]]])
Z([3,'销量优先'])
Z(z[3])
Z([[4],[[5],[[5],[1,'nav-item']],[[2,'?:'],[[2,'==='],[[7],[3,'filterIndex']],[1,2]],[1,'current'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'tabClick']],[[4],[[5],[1,2]]]]]]]]]]])
Z([3,'价格'])
Z([3,'p-box'])
Z([[4],[[5],[[5],[1,'yticon icon-shang']],[[2,'?:'],[[2,'&&'],[[2,'==='],[[7],[3,'priceOrder']],[1,1]],[[2,'==='],[[7],[3,'filterIndex']],[1,2]]],[1,'active'],[1,'']]]])
Z([[4],[[5],[[5],[1,'yticon icon-shang xia']],[[2,'?:'],[[2,'&&'],[[2,'==='],[[7],[3,'priceOrder']],[1,2]],[[2,'==='],[[7],[3,'filterIndex']],[1,2]]],[1,'active'],[1,'']]]])
Z(z[3])
Z([3,'cate-item yticon icon-fenlei1'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toggleCateMask']],[[4],[[5],[1,'show']]]]]]]]]]])
Z([3,'goods-list'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'goodsList']])
Z(z[22])
Z(z[3])
Z([3,'goods-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navToDetailPage']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goodsList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([3,'image-wrapper'])
Z([3,'aspectFill'])
Z([[6],[[7],[3,'item']],[3,'image']])
Z([3,'title clamp'])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z([3,'price-box'])
Z([3,'price'])
Z([a,[[6],[[7],[3,'item']],[3,'price']]])
Z([a,[[2,'+'],[1,'已售 '],[[6],[[7],[3,'item']],[3,'sales']]]])
Z([3,'__l'])
Z([[7],[3,'loadingType']])
Z([3,'1'])
Z(z[3])
Z([[4],[[5],[[5],[1,'cate-mask']],[[2,'?:'],[[2,'==='],[[7],[3,'cateMaskState']],[1,0]],[1,'none'],[[2,'?:'],[[2,'==='],[[7],[3,'cateMaskState']],[1,1]],[1,'show'],[1,'']]]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toggleCateMask']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[3])
Z(z[3])
Z([3,'cate-content'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'stopPrevent']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'stopPrevent']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'cate-list'])
Z([3,'__i0__'])
Z(z[23])
Z([[7],[3,'cateList']])
Z([3,'id'])
Z([3,'cate-item b-b two'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([3,'__i1__'])
Z([3,'tItem'])
Z([[6],[[7],[3,'item']],[3,'child']])
Z(z[52])
Z(z[3])
Z([[4],[[5],[[5],[1,'cate-item b-b']],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'tItem']],[3,'id']],[[7],[3,'cateId']]],[1,'active'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'changeCate']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[5],[[4],[[5],[[5],[[5],[1,'cateList']],[1,'id']],[[6],[[7],[3,'item']],[3,'id']]]]],[[4],[[5],[[5],[[5],[1,'child']],[1,'id']],[[6],[[7],[3,'tItem']],[3,'id']]]]]]]]]]]]]]]])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'tItem']],[3,'name']]],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'carousel'])
Z([3,'true'])
Z([3,'400'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'imgList']])
Z(z[4])
Z([3,'swiper-item'])
Z([3,'image-wrapper'])
Z([3,'loaded'])
Z([3,'aspectFill'])
Z([[6],[[7],[3,'item']],[3,'src']])
Z([3,'introduce-section'])
Z([3,'title'])
Z([3,'恒源祥2019春季长袖白色t恤 新款春装'])
Z([3,'price-box'])
Z([3,'price-tip'])
Z([3,'¥'])
Z([3,'price'])
Z([3,'341.6'])
Z([3,'m-price'])
Z([3,'¥488'])
Z([3,'coupon-tip'])
Z([3,'7折'])
Z([3,'bot-row'])
Z([3,'销量: 108'])
Z([3,'库存: 4690'])
Z([3,'浏览量: 768'])
Z([3,'__e'])
Z([3,'share-section'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'share']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'share-icon'])
Z([3,'yticon icon-xingxing'])
Z([3,'返'])
Z([3,'tit'])
Z([3,'该商品分享可领49减10红包'])
Z([3,'yticon icon-bangzhu1'])
Z([3,'share-btn'])
Z([3,'立即分享'])
Z([3,'yticon icon-you'])
Z([3,'c-list'])
Z(z[29])
Z([3,'c-row b-b'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toggleSpec']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[35])
Z([3,'购买类型'])
Z([3,'con'])
Z([3,'sIndex'])
Z([3,'sItem'])
Z([[7],[3,'specSelected']])
Z(z[48])
Z([3,'selected-text'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'sItem']],[3,'name']]],[1,'']]])
Z(z[40])
Z(z[43])
Z(z[35])
Z([3,'优惠券'])
Z([3,'con t-r red'])
Z([3,'领取优惠券'])
Z(z[40])
Z(z[43])
Z(z[35])
Z([3,'促销活动'])
Z([3,'con-list'])
Z([3,'新人首单送20元无门槛代金券'])
Z([3,'订单满50减10'])
Z([3,'订单满100减30'])
Z([3,'单笔购买满两件免邮费'])
Z(z[43])
Z(z[35])
Z([3,'服务'])
Z([3,'bz-list con'])
Z([3,'7天无理由退换货 ·'])
Z([3,'假一赔十 ·'])
Z([3,'eva-section'])
Z([3,'e-header'])
Z(z[35])
Z([3,'评价'])
Z([3,'(86)'])
Z([3,'tip'])
Z([3,'好评率 100%'])
Z(z[40])
Z([3,'eva-box'])
Z([3,'portrait'])
Z(z[11])
Z([3,'http://img3.imgtn.bdimg.com/it/u\x3d1150341365,1327279810\x26fm\x3d26\x26gp\x3d0.jpg'])
Z([3,'right'])
Z([3,'name'])
Z([3,'Leo yo'])
Z(z[47])
Z([3,'商品收到了，79元两件，质量不错，试了一下有点瘦，但是加个外罩很漂亮，我很喜欢'])
Z([3,'bot'])
Z([3,'attr'])
Z([3,'购买类型：XL 红色'])
Z([3,'time'])
Z([3,'2019-04-01 19:21'])
Z([3,'detail-desc'])
Z([3,'d-header'])
Z([3,'图文详情'])
Z([[7],[3,'desc']])
Z([3,'page-bottom'])
Z([3,'p-b-btn'])
Z([3,'switchTab'])
Z([3,'/pages/index/index'])
Z([3,'yticon icon-xiatubiao--copy'])
Z([3,'首页'])
Z(z[102])
Z(z[103])
Z([3,'/pages/cart/cart'])
Z([3,'yticon icon-gouwuche'])
Z([3,'购物车'])
Z(z[29])
Z([[4],[[5],[[5],[1,'p-b-btn']],[[2,'?:'],[[7],[3,'favorite']],[1,'active'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toFavorite']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'yticon icon-shoucang'])
Z([3,'收藏'])
Z([3,'action-btn-group'])
Z(z[29])
Z([3,' action-btn no-border buy-now-btn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'buy']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'primary'])
Z([3,'立即购买'])
Z([3,' action-btn no-border add-cart-btn'])
Z(z[121])
Z([3,'加入购物车'])
Z(z[29])
Z(z[29])
Z([[4],[[5],[[5],[1,'popup spec']],[[7],[3,'specClass']]]])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'stopPrevent']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'toggleSpec']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'mask'])
Z(z[29])
Z([3,'layer attr-content'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'stopPrevent']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'a-t'])
Z([3,'https://gd3.alicdn.com/imgextra/i3/0/O1CN01IiyFQI1UGShoFKt1O_!!0-item_pic.jpg_400x400.jpg'])
Z(z[87])
Z(z[19])
Z([3,'¥328.00'])
Z([3,'stock'])
Z([3,'库存：188件'])
Z([3,'selected'])
Z([3,'已选：'])
Z(z[48])
Z(z[49])
Z(z[50])
Z(z[48])
Z(z[52])
Z([a,z[53][1]])
Z(z[4])
Z(z[5])
Z([[7],[3,'specList']])
Z(z[4])
Z([3,'attr-list'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([3,'item-list'])
Z([3,'childIndex'])
Z([3,'childItem'])
Z([[7],[3,'specChildList']])
Z(z[156])
Z([[2,'==='],[[6],[[7],[3,'childItem']],[3,'pid']],[[6],[[7],[3,'item']],[3,'id']]])
Z(z[29])
Z([[4],[[5],[[5],[1,'tit']],[[2,'?:'],[[6],[[7],[3,'childItem']],[3,'selected']],[1,'selected'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'selectSpec']],[[4],[[5],[[5],[[7],[3,'childIndex']]],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'specChildList']],[1,'']],[[7],[3,'childIndex']]],[1,'pid']]]]]]]]]]]]]]])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'childItem']],[3,'name']]],[1,'']]])
Z(z[29])
Z([3,'btn'])
Z(z[44])
Z([3,'完成'])
Z([3,'__l'])
Z([3,'vue-ref'])
Z([1,580])
Z([3,'share'])
Z([[7],[3,'shareList']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
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
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'user-section'])
Z([3,'bg'])
Z([3,'/static/user-bg.jpg'])
Z([3,'bg-upload-btn yticon icon-paizhao'])
Z([3,'portrait-box'])
Z([3,'portrait'])
Z([[2,'||'],[[6],[[7],[3,'userInfo']],[3,'portrait']],[1,'/static/missing-face.png']])
Z([3,'pt-upload-btn yticon icon-paizhao'])
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/button/button.wxml','./components/empty.wxml','./components/enter-panel/enter-panel.wxml','./components/homework_answer_input/index.wxml','./components/homework_subquestion_swiper/index.wxml','./components/mix-list-cell.wxml','./components/share.wxml','./components/uni-load-more/uni-load-more.wxml','./components/uni-number-box.wxml','./components/wrong_test/wrong_test.wxml','./pages/address/address.wxml','./pages/address/addressManage.wxml','./pages/cart/cart.wxml','./pages/category/category.wxml','./pages/detail/detail.wxml','./pages/index/index.wxml','./pages/learning/course/course.wxml','./pages/learning/course/course_detail/course_detail.wxml','./pages/learning/homework/do_homework.wxml','./pages/learning/homework/homework.wxml','./pages/learning/homework/homework_have_review.wxml','./pages/learning/homework/homework_no_review.wxml','./pages/learning/index.wxml','./pages/learning/worngtopic/worngtopic.wxml','./pages/money/money.wxml','./pages/money/pay.wxml','./pages/money/paySuccess.wxml','./pages/notice/notice.wxml','./pages/order/createOrder.wxml','./pages/order/order.wxml','./pages/product/list.wxml','./pages/product/product.wxml','./pages/public/login.wxml','./pages/set/set.wxml','./pages/user/user.wxml','./pages/userinfo/userinfo.wxml'];d_[x[0]]={}
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
var oH=_mz(z,'image',['class',1,'mode',1,'src',2],[],e,s,gg)
_(hG,oH)
_(r,hG)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oJ=_n('view')
_rz(z,oJ,'class',0,e,s,gg)
var lK=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var aL=_n('text')
_rz(z,aL,'class',3,e,s,gg)
var tM=_oz(z,4,e,s,gg)
_(aL,tM)
_(lK,aL)
var eN=_n('text')
_rz(z,eN,'class',5,e,s,gg)
var bO=_oz(z,6,e,s,gg)
_(eN,bO)
_(lK,eN)
_(oJ,lK)
_(r,oJ)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var xQ=_n('view')
_rz(z,xQ,'class',0,e,s,gg)
var oV=_n('view')
_rz(z,oV,'class',1,e,s,gg)
var cW=_oz(z,2,e,s,gg)
_(oV,cW)
_(xQ,oV)
var oR=_v()
_(xQ,oR)
if(_oz(z,3,e,s,gg)){oR.wxVkey=1
var oX=_n('view')
_rz(z,oX,'class',4,e,s,gg)
var lY=_v()
_(oX,lY)
var aZ=function(e2,t1,b3,gg){
var x5=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2],[],e2,t1,gg)
var o6=_n('view')
_rz(z,o6,'class',12,e2,t1,gg)
var f7=_oz(z,13,e2,t1,gg)
_(o6,f7)
_(x5,o6)
var c8=_n('view')
_rz(z,c8,'class',14,e2,t1,gg)
var h9=_oz(z,15,e2,t1,gg)
_(c8,h9)
_(x5,c8)
_(b3,x5)
return b3
}
lY.wxXCkey=2
_2z(z,7,aZ,e,s,gg,lY,'answer','index','index')
_(oR,oX)
}
var fS=_v()
_(xQ,fS)
if(_oz(z,16,e,s,gg)){fS.wxVkey=1
var o0=_n('view')
_rz(z,o0,'class',17,e,s,gg)
var lCB=_mz(z,'view',['bindtap',18,'class',1,'data-event-opts',2],[],e,s,gg)
var aDB=_v()
_(lCB,aDB)
if(_oz(z,21,e,s,gg)){aDB.wxVkey=1
var eFB=_n('text')
_rz(z,eFB,'class',22,e,s,gg)
var bGB=_oz(z,23,e,s,gg)
_(eFB,bGB)
_(aDB,eFB)
}
var tEB=_v()
_(lCB,tEB)
if(_oz(z,24,e,s,gg)){tEB.wxVkey=1
var oHB=_mz(z,'input',['bindblur',25,'bindinput',1,'class',2,'data-event-opts',3,'data-ref',4,'focus',5,'placeholder',6],[],e,s,gg)
_(tEB,oHB)
}
aDB.wxXCkey=1
tEB.wxXCkey=1
_(o0,lCB)
var cAB=_v()
_(o0,cAB)
if(_oz(z,32,e,s,gg)){cAB.wxVkey=1
var xIB=_mz(z,'view',['bindtap',33,'class',1,'data-event-opts',2],[],e,s,gg)
var oJB=_n('text')
_rz(z,oJB,'class',36,e,s,gg)
var fKB=_oz(z,37,e,s,gg)
_(oJB,fKB)
_(xIB,oJB)
_(cAB,xIB)
}
var oBB=_v()
_(o0,oBB)
if(_oz(z,38,e,s,gg)){oBB.wxVkey=1
var cLB=_n('view')
_rz(z,cLB,'class',39,e,s,gg)
var hMB=_oz(z,40,e,s,gg)
_(cLB,hMB)
_(oBB,cLB)
}
cAB.wxXCkey=1
oBB.wxXCkey=1
_(fS,o0)
}
var cT=_v()
_(xQ,cT)
if(_oz(z,41,e,s,gg)){cT.wxVkey=1
var oNB=_n('view')
_rz(z,oNB,'class',42,e,s,gg)
var cOB=_n('text')
_rz(z,cOB,'class',43,e,s,gg)
var oPB=_oz(z,44,e,s,gg)
_(cOB,oPB)
_(oNB,cOB)
var lQB=_n('text')
_rz(z,lQB,'class',45,e,s,gg)
var aRB=_oz(z,46,e,s,gg)
_(lQB,aRB)
_(oNB,lQB)
_(cT,oNB)
}
var hU=_v()
_(xQ,hU)
if(_oz(z,47,e,s,gg)){hU.wxVkey=1
var tSB=_n('view')
_rz(z,tSB,'class',48,e,s,gg)
var eTB=_n('view')
_rz(z,eTB,'class',49,e,s,gg)
_(tSB,eTB)
var bUB=_n('view')
_rz(z,bUB,'class',50,e,s,gg)
var oVB=_n('text')
_rz(z,oVB,'class',51,e,s,gg)
var xWB=_oz(z,52,e,s,gg)
_(oVB,xWB)
_(bUB,oVB)
var oXB=_n('text')
_rz(z,oXB,'class',53,e,s,gg)
var fYB=_oz(z,54,e,s,gg)
_(oXB,fYB)
_(bUB,oXB)
_(tSB,bUB)
var cZB=_n('view')
_rz(z,cZB,'class',55,e,s,gg)
var h1B=_n('text')
_rz(z,h1B,'class',56,e,s,gg)
var o2B=_oz(z,57,e,s,gg)
_(h1B,o2B)
_(cZB,h1B)
var c3B=_n('text')
_rz(z,c3B,'class',58,e,s,gg)
var o4B=_oz(z,59,e,s,gg)
_(c3B,o4B)
_(cZB,c3B)
_(tSB,cZB)
var l5B=_n('view')
_rz(z,l5B,'class',60,e,s,gg)
var a6B=_n('text')
_rz(z,a6B,'class',61,e,s,gg)
var t7B=_oz(z,62,e,s,gg)
_(a6B,t7B)
_(l5B,a6B)
var e8B=_n('text')
_rz(z,e8B,'class',63,e,s,gg)
var b9B=_oz(z,64,e,s,gg)
_(e8B,b9B)
_(l5B,e8B)
_(tSB,l5B)
var o0B=_n('view')
_rz(z,o0B,'class',65,e,s,gg)
var xAC=_n('text')
_rz(z,xAC,'class',66,e,s,gg)
var oBC=_oz(z,67,e,s,gg)
_(xAC,oBC)
_(o0B,xAC)
var fCC=_n('text')
_rz(z,fCC,'class',68,e,s,gg)
_(o0B,fCC)
_(tSB,o0B)
_(hU,tSB)
}
oR.wxXCkey=1
fS.wxXCkey=1
cT.wxXCkey=1
hU.wxXCkey=1
_(r,xQ)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var hEC=_n('view')
_rz(z,hEC,'class',0,e,s,gg)
var oFC=_n('view')
_rz(z,oFC,'class',1,e,s,gg)
var cGC=_n('text')
_rz(z,cGC,'class',2,e,s,gg)
var oHC=_oz(z,3,e,s,gg)
_(cGC,oHC)
_(oFC,cGC)
var lIC=_n('text')
_rz(z,lIC,'class',4,e,s,gg)
var aJC=_oz(z,5,e,s,gg)
_(lIC,aJC)
var tKC=_n('text')
_rz(z,tKC,'class',6,e,s,gg)
var eLC=_oz(z,7,e,s,gg)
_(tKC,eLC)
_(lIC,tKC)
_(oFC,lIC)
_(hEC,oFC)
var bMC=_mz(z,'swiper',['bindchange',8,'class',1,'data-event-opts',2,'indicatorDots',3,'interval',4,'style',5],[],e,s,gg)
var oNC=_v()
_(bMC,oNC)
var xOC=function(fQC,oPC,cRC,gg){
var oTC=_n('swiper-item')
var cUC=_n('view')
_rz(z,cUC,'class',18,fQC,oPC,gg)
var oVC=_mz(z,'answerinput',['bind:__l',19,'bind:changeAnswer',1,'data',2,'data-event-opts',3,'status',4,'vueId',5],[],fQC,oPC,gg)
_(cUC,oVC)
_(oTC,cUC)
_(cRC,oTC)
return cRC
}
oNC.wxXCkey=4
_2z(z,16,xOC,e,s,gg,oNC,'test','index','index')
_(hEC,bMC)
_(r,hEC)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var aXC=_n('view')
_rz(z,aXC,'class',0,e,s,gg)
var tYC=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2,'hoverClass',3,'hoverStayTime',4],[],e,s,gg)
var eZC=_v()
_(tYC,eZC)
if(_oz(z,6,e,s,gg)){eZC.wxVkey=1
var o2C=_mz(z,'text',['class',7,'style',1],[],e,s,gg)
_(eZC,o2C)
}
var x3C=_n('text')
_rz(z,x3C,'class',9,e,s,gg)
var o4C=_oz(z,10,e,s,gg)
_(x3C,o4C)
_(tYC,x3C)
var b1C=_v()
_(tYC,b1C)
if(_oz(z,11,e,s,gg)){b1C.wxVkey=1
var f5C=_n('text')
_rz(z,f5C,'class',12,e,s,gg)
var c6C=_oz(z,13,e,s,gg)
_(f5C,c6C)
_(b1C,f5C)
}
var h7C=_n('text')
_rz(z,h7C,'class',14,e,s,gg)
_(tYC,h7C)
eZC.wxXCkey=1
b1C.wxXCkey=1
_(aXC,tYC)
_(r,aXC)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var c9C=_v()
_(r,c9C)
if(_oz(z,0,e,s,gg)){c9C.wxVkey=1
var o0C=_mz(z,'view',['bindtap',1,'catchtouchmove',1,'class',2,'data-event-opts',3,'style',4],[],e,s,gg)
var lAD=_mz(z,'view',['catchtap',6,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var aBD=_mz(z,'scroll-view',['scrollY',-1,'class',10],[],e,s,gg)
var tCD=_n('view')
_rz(z,tCD,'class',11,e,s,gg)
var eDD=_oz(z,12,e,s,gg)
_(tCD,eDD)
_(aBD,tCD)
var bED=_n('view')
_rz(z,bED,'class',13,e,s,gg)
var oFD=_v()
_(bED,oFD)
var xGD=function(fID,oHD,cJD,gg){
var oLD=_mz(z,'view',['bindtap',18,'class',1,'data-event-opts',2],[],fID,oHD,gg)
var cMD=_mz(z,'image',['mode',-1,'src',21],[],fID,oHD,gg)
_(oLD,cMD)
var oND=_n('text')
var lOD=_oz(z,22,fID,oHD,gg)
_(oND,lOD)
_(oLD,oND)
_(cJD,oLD)
return cJD
}
oFD.wxXCkey=2
_2z(z,16,xGD,e,s,gg,oFD,'item','index','index')
_(aBD,bED)
_(lAD,aBD)
var aPD=_mz(z,'view',['bindtap',23,'class',1,'data-event-opts',2],[],e,s,gg)
var tQD=_oz(z,26,e,s,gg)
_(aPD,tQD)
_(lAD,aPD)
_(o0C,lAD)
_(c9C,o0C)
}
c9C.wxXCkey=1
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var bSD=_n('view')
_rz(z,bSD,'class',0,e,s,gg)
var oTD=_mz(z,'view',['class',1,'hidden',1],[],e,s,gg)
var xUD=_n('view')
_rz(z,xUD,'class',3,e,s,gg)
var oVD=_n('view')
_rz(z,oVD,'style',4,e,s,gg)
_(xUD,oVD)
var fWD=_n('view')
_rz(z,fWD,'style',5,e,s,gg)
_(xUD,fWD)
var cXD=_n('view')
_rz(z,cXD,'style',6,e,s,gg)
_(xUD,cXD)
var hYD=_n('view')
_rz(z,hYD,'style',7,e,s,gg)
_(xUD,hYD)
_(oTD,xUD)
var oZD=_n('view')
_rz(z,oZD,'class',8,e,s,gg)
var c1D=_n('view')
_rz(z,c1D,'style',9,e,s,gg)
_(oZD,c1D)
var o2D=_n('view')
_rz(z,o2D,'style',10,e,s,gg)
_(oZD,o2D)
var l3D=_n('view')
_rz(z,l3D,'style',11,e,s,gg)
_(oZD,l3D)
var a4D=_n('view')
_rz(z,a4D,'style',12,e,s,gg)
_(oZD,a4D)
_(oTD,oZD)
var t5D=_n('view')
_rz(z,t5D,'class',13,e,s,gg)
var e6D=_n('view')
_rz(z,e6D,'style',14,e,s,gg)
_(t5D,e6D)
var b7D=_n('view')
_rz(z,b7D,'style',15,e,s,gg)
_(t5D,b7D)
var o8D=_n('view')
_rz(z,o8D,'style',16,e,s,gg)
_(t5D,o8D)
var x9D=_n('view')
_rz(z,x9D,'style',17,e,s,gg)
_(t5D,x9D)
_(oTD,t5D)
_(bSD,oTD)
var o0D=_mz(z,'text',['class',18,'style',1],[],e,s,gg)
var fAE=_oz(z,20,e,s,gg)
_(o0D,fAE)
_(bSD,o0D)
_(r,bSD)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var hCE=_n('view')
_rz(z,hCE,'class',0,e,s,gg)
var oDE=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var cEE=_n('text')
_rz(z,cEE,'class',4,e,s,gg)
_(oDE,cEE)
_(hCE,oDE)
var oFE=_mz(z,'input',['bindblur',5,'class',1,'data-event-opts',2,'disabled',3,'type',4,'value',5],[],e,s,gg)
_(hCE,oFE)
var lGE=_mz(z,'view',['bindtap',11,'class',1,'data-event-opts',2],[],e,s,gg)
var aHE=_n('text')
_rz(z,aHE,'class',14,e,s,gg)
_(lGE,aHE)
_(hCE,lGE)
_(r,hCE)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var eJE=_n('view')
_rz(z,eJE,'class',0,e,s,gg)
var oLE=_n('view')
_rz(z,oLE,'class',1,e,s,gg)
var xME=_mz(z,'view',['bindtap',2,'class',1,'data-event-opts',2,'hidden',3],[],e,s,gg)
_(oLE,xME)
_(eJE,oLE)
var oNE=_n('text')
_rz(z,oNE,'class',6,e,s,gg)
var fOE=_oz(z,7,e,s,gg)
_(oNE,fOE)
_(eJE,oNE)
var cPE=_n('text')
_rz(z,cPE,'class',8,e,s,gg)
var hQE=_oz(z,9,e,s,gg)
_(cPE,hQE)
_(eJE,cPE)
var bKE=_v()
_(eJE,bKE)
if(_oz(z,10,e,s,gg)){bKE.wxVkey=1
var oRE=_n('view')
_rz(z,oRE,'class',11,e,s,gg)
var cSE=_v()
_(oRE,cSE)
var oTE=function(aVE,lUE,tWE,gg){
var bYE=_n('view')
_rz(z,bYE,'class',16,aVE,lUE,gg)
var oZE=_n('view')
_rz(z,oZE,'class',17,aVE,lUE,gg)
var x1E=_oz(z,18,aVE,lUE,gg)
_(oZE,x1E)
_(bYE,oZE)
var o2E=_n('view')
_rz(z,o2E,'class',19,aVE,lUE,gg)
var f3E=_oz(z,20,aVE,lUE,gg)
_(o2E,f3E)
_(bYE,o2E)
_(tWE,bYE)
return tWE
}
cSE.wxXCkey=2
_2z(z,14,oTE,e,s,gg,cSE,'answer','index','index')
_(bKE,oRE)
}
var c4E=_mz(z,'view',['class',21,'hidden',1],[],e,s,gg)
var h5E=_n('view')
_rz(z,h5E,'class',23,e,s,gg)
var o6E=_n('text')
_rz(z,o6E,'class',24,e,s,gg)
var c7E=_oz(z,25,e,s,gg)
_(o6E,c7E)
_(h5E,o6E)
var o8E=_n('text')
_rz(z,o8E,'class',26,e,s,gg)
var l9E=_oz(z,27,e,s,gg)
_(o8E,l9E)
_(h5E,o8E)
_(c4E,h5E)
var a0E=_n('view')
_rz(z,a0E,'class',28,e,s,gg)
var tAF=_n('text')
_rz(z,tAF,'class',29,e,s,gg)
var eBF=_oz(z,30,e,s,gg)
_(tAF,eBF)
_(a0E,tAF)
var bCF=_n('text')
_rz(z,bCF,'class',31,e,s,gg)
var oDF=_oz(z,32,e,s,gg)
_(bCF,oDF)
_(a0E,bCF)
_(c4E,a0E)
var xEF=_n('view')
_rz(z,xEF,'class',33,e,s,gg)
var oFF=_n('text')
_rz(z,oFF,'class',34,e,s,gg)
var fGF=_oz(z,35,e,s,gg)
_(oFF,fGF)
_(xEF,oFF)
var cHF=_n('text')
_rz(z,cHF,'class',36,e,s,gg)
var hIF=_oz(z,37,e,s,gg)
_(cHF,hIF)
_(xEF,cHF)
_(c4E,xEF)
var oJF=_n('view')
_rz(z,oJF,'class',38,e,s,gg)
var cKF=_n('view')
_rz(z,cKF,'class',39,e,s,gg)
var oLF=_n('text')
_rz(z,oLF,'class',40,e,s,gg)
var lMF=_oz(z,41,e,s,gg)
_(oLF,lMF)
_(cKF,oLF)
var aNF=_n('text')
_rz(z,aNF,'class',42,e,s,gg)
var tOF=_oz(z,43,e,s,gg)
_(aNF,tOF)
_(cKF,aNF)
_(oJF,cKF)
var ePF=_n('view')
_rz(z,ePF,'class',44,e,s,gg)
var bQF=_n('text')
_rz(z,bQF,'class',45,e,s,gg)
var oRF=_oz(z,46,e,s,gg)
_(bQF,oRF)
_(ePF,bQF)
var xSF=_n('text')
_rz(z,xSF,'class',47,e,s,gg)
_(ePF,xSF)
_(oJF,ePF)
_(c4E,oJF)
_(eJE,c4E)
bKE.wxXCkey=1
_(r,eJE)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var fUF=_n('view')
_rz(z,fUF,'class',0,e,s,gg)
var cVF=_v()
_(fUF,cVF)
var hWF=function(cYF,oXF,oZF,gg){
var a2F=_mz(z,'view',['bindtap',5,'class',1,'data-event-opts',2],[],cYF,oXF,gg)
var t3F=_n('view')
_rz(z,t3F,'class',8,cYF,oXF,gg)
var e4F=_n('view')
_rz(z,e4F,'class',9,cYF,oXF,gg)
var b5F=_v()
_(e4F,b5F)
if(_oz(z,10,cYF,oXF,gg)){b5F.wxVkey=1
var o6F=_n('text')
_rz(z,o6F,'class',11,cYF,oXF,gg)
var x7F=_oz(z,12,cYF,oXF,gg)
_(o6F,x7F)
_(b5F,o6F)
}
var o8F=_n('text')
_rz(z,o8F,'class',13,cYF,oXF,gg)
var f9F=_oz(z,14,cYF,oXF,gg)
_(o8F,f9F)
_(e4F,o8F)
b5F.wxXCkey=1
_(t3F,e4F)
var c0F=_n('view')
_rz(z,c0F,'class',15,cYF,oXF,gg)
var hAG=_n('text')
_rz(z,hAG,'class',16,cYF,oXF,gg)
var oBG=_oz(z,17,cYF,oXF,gg)
_(hAG,oBG)
_(c0F,hAG)
var cCG=_n('text')
_rz(z,cCG,'class',18,cYF,oXF,gg)
var oDG=_oz(z,19,cYF,oXF,gg)
_(cCG,oDG)
_(c0F,cCG)
_(t3F,c0F)
_(a2F,t3F)
var lEG=_mz(z,'text',['catchtap',20,'class',1,'data-event-opts',2],[],cYF,oXF,gg)
_(a2F,lEG)
_(oZF,a2F)
return oZF
}
cVF.wxXCkey=2
_2z(z,3,hWF,e,s,gg,cVF,'item','index','index')
var aFG=_n('text')
_rz(z,aFG,'style',23,e,s,gg)
var tGG=_oz(z,24,e,s,gg)
_(aFG,tGG)
_(fUF,aFG)
var eHG=_mz(z,'button',['bindtap',25,'class',1,'data-event-opts',2],[],e,s,gg)
var bIG=_oz(z,28,e,s,gg)
_(eHG,bIG)
_(fUF,eHG)
_(r,fUF)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var xKG=_n('view')
_rz(z,xKG,'class',0,e,s,gg)
var oLG=_n('view')
_rz(z,oLG,'class',1,e,s,gg)
var fMG=_n('text')
_rz(z,fMG,'class',2,e,s,gg)
var cNG=_oz(z,3,e,s,gg)
_(fMG,cNG)
_(oLG,fMG)
var hOG=_mz(z,'input',['bindinput',4,'class',1,'data-event-opts',2,'placeholder',3,'placeholderClass',4,'type',5,'value',6],[],e,s,gg)
_(oLG,hOG)
_(xKG,oLG)
var oPG=_n('view')
_rz(z,oPG,'class',11,e,s,gg)
var cQG=_n('text')
_rz(z,cQG,'class',12,e,s,gg)
var oRG=_oz(z,13,e,s,gg)
_(cQG,oRG)
_(oPG,cQG)
var lSG=_mz(z,'input',['bindinput',14,'class',1,'data-event-opts',2,'placeholder',3,'placeholderClass',4,'type',5,'value',6],[],e,s,gg)
_(oPG,lSG)
_(xKG,oPG)
var aTG=_n('view')
_rz(z,aTG,'class',21,e,s,gg)
var tUG=_n('text')
_rz(z,tUG,'class',22,e,s,gg)
var eVG=_oz(z,23,e,s,gg)
_(tUG,eVG)
_(aTG,tUG)
var bWG=_mz(z,'text',['bindtap',24,'class',1,'data-event-opts',2],[],e,s,gg)
var oXG=_oz(z,27,e,s,gg)
_(bWG,oXG)
_(aTG,bWG)
var xYG=_n('text')
_rz(z,xYG,'class',28,e,s,gg)
_(aTG,xYG)
_(xKG,aTG)
var oZG=_n('view')
_rz(z,oZG,'class',29,e,s,gg)
var f1G=_n('text')
_rz(z,f1G,'class',30,e,s,gg)
var c2G=_oz(z,31,e,s,gg)
_(f1G,c2G)
_(oZG,f1G)
var h3G=_mz(z,'input',['bindinput',32,'class',1,'data-event-opts',2,'placeholder',3,'placeholderClass',4,'type',5,'value',6],[],e,s,gg)
_(oZG,h3G)
_(xKG,oZG)
var o4G=_n('view')
_rz(z,o4G,'class',39,e,s,gg)
var c5G=_n('text')
_rz(z,c5G,'class',40,e,s,gg)
var o6G=_oz(z,41,e,s,gg)
_(c5G,o6G)
_(o4G,c5G)
var l7G=_mz(z,'switch',['bindchange',42,'checked',1,'color',2,'data-event-opts',3],[],e,s,gg)
_(o4G,l7G)
_(xKG,o4G)
var a8G=_mz(z,'button',['bindtap',46,'class',1,'data-event-opts',2],[],e,s,gg)
var t9G=_oz(z,49,e,s,gg)
_(a8G,t9G)
_(xKG,a8G)
_(r,xKG)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var bAH=_n('view')
_rz(z,bAH,'class',0,e,s,gg)
var oBH=_v()
_(bAH,oBH)
if(_oz(z,1,e,s,gg)){oBH.wxVkey=1
var xCH=_n('view')
_rz(z,xCH,'class',2,e,s,gg)
var fEH=_mz(z,'image',['mode',3,'src',1],[],e,s,gg)
_(xCH,fEH)
var oDH=_v()
_(xCH,oDH)
if(_oz(z,5,e,s,gg)){oDH.wxVkey=1
var cFH=_n('view')
_rz(z,cFH,'class',6,e,s,gg)
var oHH=_oz(z,7,e,s,gg)
_(cFH,oHH)
var hGH=_v()
_(cFH,hGH)
if(_oz(z,8,e,s,gg)){hGH.wxVkey=1
var cIH=_mz(z,'navigator',['class',9,'openType',1,'url',2],[],e,s,gg)
var oJH=_oz(z,12,e,s,gg)
_(cIH,oJH)
_(hGH,cIH)
}
hGH.wxXCkey=1
_(oDH,cFH)
}
else{oDH.wxVkey=2
var lKH=_n('view')
_rz(z,lKH,'class',13,e,s,gg)
var aLH=_oz(z,14,e,s,gg)
_(lKH,aLH)
var tMH=_mz(z,'view',['bindtap',15,'class',1,'data-event-opts',2],[],e,s,gg)
var eNH=_oz(z,18,e,s,gg)
_(tMH,eNH)
_(lKH,tMH)
_(oDH,lKH)
}
oDH.wxXCkey=1
_(oBH,xCH)
}
else{oBH.wxVkey=2
var bOH=_n('view')
var oPH=_n('view')
_rz(z,oPH,'class',19,e,s,gg)
var xQH=_v()
_(oPH,xQH)
var oRH=function(cTH,fSH,hUH,gg){
var cWH=_n('view')
_rz(z,cWH,'class',24,cTH,fSH,gg)
var oXH=_n('view')
_rz(z,oXH,'class',25,cTH,fSH,gg)
var lYH=_mz(z,'image',['lazyLoad',-1,'binderror',26,'bindload',1,'class',2,'data-event-opts',3,'mode',4,'src',5],[],cTH,fSH,gg)
_(oXH,lYH)
var aZH=_mz(z,'view',['bindtap',32,'class',1,'data-event-opts',2],[],cTH,fSH,gg)
_(oXH,aZH)
_(cWH,oXH)
var t1H=_n('view')
_rz(z,t1H,'class',35,cTH,fSH,gg)
var e2H=_n('text')
_rz(z,e2H,'class',36,cTH,fSH,gg)
var b3H=_oz(z,37,cTH,fSH,gg)
_(e2H,b3H)
_(t1H,e2H)
var o4H=_n('text')
_rz(z,o4H,'class',38,cTH,fSH,gg)
var x5H=_oz(z,39,cTH,fSH,gg)
_(o4H,x5H)
_(t1H,o4H)
var o6H=_n('text')
_rz(z,o6H,'class',40,cTH,fSH,gg)
var f7H=_oz(z,41,cTH,fSH,gg)
_(o6H,f7H)
_(t1H,o6H)
var c8H=_mz(z,'uni-number-box',['bind:__l',42,'bind:eventChange',1,'class',2,'data-event-opts',3,'index',4,'isMax',5,'isMin',6,'max',7,'min',8,'value',9,'vueId',10],[],cTH,fSH,gg)
_(t1H,c8H)
_(cWH,t1H)
var h9H=_mz(z,'text',['bindtap',53,'class',1,'data-event-opts',2],[],cTH,fSH,gg)
_(cWH,h9H)
_(hUH,cWH)
return hUH
}
xQH.wxXCkey=4
_2z(z,22,oRH,e,s,gg,xQH,'item','index','id')
_(bOH,oPH)
var o0H=_n('view')
_rz(z,o0H,'class',56,e,s,gg)
var cAI=_n('view')
_rz(z,cAI,'class',57,e,s,gg)
var oBI=_mz(z,'image',['bindtap',58,'data-event-opts',1,'mode',2,'src',3],[],e,s,gg)
_(cAI,oBI)
var lCI=_mz(z,'view',['bindtap',62,'class',1,'data-event-opts',2],[],e,s,gg)
var aDI=_oz(z,65,e,s,gg)
_(lCI,aDI)
_(cAI,lCI)
_(o0H,cAI)
var tEI=_n('view')
_rz(z,tEI,'class',66,e,s,gg)
var eFI=_n('text')
_rz(z,eFI,'class',67,e,s,gg)
var bGI=_oz(z,68,e,s,gg)
_(eFI,bGI)
_(tEI,eFI)
var oHI=_n('text')
_rz(z,oHI,'class',69,e,s,gg)
var xII=_oz(z,70,e,s,gg)
_(oHI,xII)
var oJI=_n('text')
var fKI=_oz(z,71,e,s,gg)
_(oJI,fKI)
_(oHI,oJI)
var cLI=_oz(z,72,e,s,gg)
_(oHI,cLI)
_(tEI,oHI)
_(o0H,tEI)
var hMI=_mz(z,'button',['bindtap',73,'class',1,'data-event-opts',2,'type',3],[],e,s,gg)
var oNI=_oz(z,77,e,s,gg)
_(hMI,oNI)
_(o0H,hMI)
_(bOH,o0H)
_(oBH,bOH)
}
oBH.wxXCkey=1
oBH.wxXCkey=3
_(r,bAH)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var oPI=_n('view')
_rz(z,oPI,'class',0,e,s,gg)
var lQI=_mz(z,'scroll-view',['scrollY',-1,'class',1],[],e,s,gg)
var aRI=_v()
_(lQI,aRI)
var tSI=function(bUI,eTI,oVI,gg){
var oXI=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],bUI,eTI,gg)
var fYI=_oz(z,9,bUI,eTI,gg)
_(oXI,fYI)
_(oVI,oXI)
return oVI
}
aRI.wxXCkey=2
_2z(z,4,tSI,e,s,gg,aRI,'item','__i0__','id')
_(oPI,lQI)
var cZI=_mz(z,'scroll-view',['scrollWithAnimation',-1,'scrollY',-1,'bindscroll',10,'class',1,'data-event-opts',2,'scrollTop',3],[],e,s,gg)
var h1I=_v()
_(cZI,h1I)
var o2I=function(o4I,c3I,l5I,gg){
var t7I=_mz(z,'view',['class',18,'id',1],[],o4I,c3I,gg)
var e8I=_n('text')
_rz(z,e8I,'class',20,o4I,c3I,gg)
var b9I=_oz(z,21,o4I,c3I,gg)
_(e8I,b9I)
_(t7I,e8I)
var o0I=_n('view')
_rz(z,o0I,'class',22,o4I,c3I,gg)
var xAJ=_v()
_(o0I,xAJ)
var oBJ=function(cDJ,fCJ,hEJ,gg){
var cGJ=_v()
_(hEJ,cGJ)
if(_oz(z,27,cDJ,fCJ,gg)){cGJ.wxVkey=1
var oHJ=_mz(z,'view',['bindtap',28,'class',1,'data-event-opts',2],[],cDJ,fCJ,gg)
var lIJ=_n('image')
_rz(z,lIJ,'src',31,cDJ,fCJ,gg)
_(oHJ,lIJ)
var aJJ=_n('text')
var tKJ=_oz(z,32,cDJ,fCJ,gg)
_(aJJ,tKJ)
_(oHJ,aJJ)
_(cGJ,oHJ)
}
cGJ.wxXCkey=1
return hEJ
}
xAJ.wxXCkey=2
_2z(z,25,oBJ,o4I,c3I,gg,xAJ,'titem','__i2__','id')
_(t7I,o0I)
_(l5I,t7I)
return l5I
}
h1I.wxXCkey=2
_2z(z,16,o2I,e,s,gg,h1I,'item','__i1__','id')
_(oPI,cZI)
_(r,oPI)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var bMJ=_n('view')
var oNJ=_mz(z,'swiper',['circular',0,'class',1,'duration',1,'indicatorDots',2,'interval',3],[],e,s,gg)
var xOJ=_v()
_(oNJ,xOJ)
var oPJ=function(cRJ,fQJ,hSJ,gg){
var cUJ=_n('swiper-item')
var oVJ=_n('view')
_rz(z,oVJ,'class',9,cRJ,fQJ,gg)
var lWJ=_mz(z,'image',['bindload',10,'class',1,'data-event-opts',2,'mode',3,'src',4],[],cRJ,fQJ,gg)
_(oVJ,lWJ)
_(cUJ,oVJ)
_(hSJ,cUJ)
return hSJ
}
xOJ.wxXCkey=2
_2z(z,7,oPJ,e,s,gg,xOJ,'item','index','index')
_(bMJ,oNJ)
var aXJ=_n('view')
_rz(z,aXJ,'class',15,e,s,gg)
var tYJ=_mz(z,'scroll-view',['scrollX',-1,'class',16],[],e,s,gg)
var eZJ=_v()
_(tYJ,eZJ)
var b1J=function(x3J,o2J,o4J,gg){
var c6J=_mz(z,'view',['bindtap',21,'class',1,'data-event-opts',2],[],x3J,o2J,gg)
var h7J=_oz(z,24,x3J,o2J,gg)
_(c6J,h7J)
_(o4J,c6J)
return o4J
}
eZJ.wxXCkey=2
_2z(z,19,b1J,e,s,gg,eZJ,'item','index','index')
_(aXJ,tYJ)
_(bMJ,aXJ)
var o8J=_n('view')
_rz(z,o8J,'class',25,e,s,gg)
var c9J=_n('view')
_rz(z,c9J,'class',26,e,s,gg)
var o0J=_n('text')
_rz(z,o0J,'class',27,e,s,gg)
var lAK=_oz(z,28,e,s,gg)
_(o0J,lAK)
_(c9J,o0J)
var aBK=_n('text')
_rz(z,aBK,'class',29,e,s,gg)
var tCK=_oz(z,30,e,s,gg)
_(aBK,tCK)
_(c9J,aBK)
_(o8J,c9J)
var eDK=_n('text')
_rz(z,eDK,'class',31,e,s,gg)
_(o8J,eDK)
_(bMJ,o8J)
var bEK=_n('view')
_rz(z,bEK,'class',32,e,s,gg)
var oFK=_mz(z,'text',['bindtap',33,'class',1,'data-event-opts',2],[],e,s,gg)
_(bEK,oFK)
var xGK=_n('text')
_rz(z,xGK,'class',36,e,s,gg)
_(bEK,xGK)
var oHK=_mz(z,'text',['bindtap',37,'class',1,'data-event-opts',2],[],e,s,gg)
_(bEK,oHK)
_(bMJ,bEK)
var fIK=_n('view')
_rz(z,fIK,'class',40,e,s,gg)
var cJK=_n('view')
_rz(z,cJK,'class',41,e,s,gg)
var hKK=_oz(z,42,e,s,gg)
_(cJK,hKK)
_(fIK,cJK)
var oLK=_n('view')
_rz(z,oLK,'class',43,e,s,gg)
var cMK=_v()
_(oLK,cMK)
var oNK=function(aPK,lOK,tQK,gg){
var bSK=_n('view')
_rz(z,bSK,'class',48,aPK,lOK,gg)
var oTK=_n('view')
_rz(z,oTK,'class',49,aPK,lOK,gg)
var xUK=_mz(z,'image',['bindload',50,'class',1,'data-event-opts',2,'mode',3,'src',4],[],aPK,lOK,gg)
_(oTK,xUK)
_(bSK,oTK)
var oVK=_n('text')
_rz(z,oVK,'class',55,aPK,lOK,gg)
var fWK=_oz(z,56,aPK,lOK,gg)
_(oVK,fWK)
_(bSK,oVK)
var cXK=_n('text')
_rz(z,cXK,'class',57,aPK,lOK,gg)
var hYK=_oz(z,58,aPK,lOK,gg)
_(cXK,hYK)
_(bSK,cXK)
_(tQK,bSK)
return tQK
}
cMK.wxXCkey=2
_2z(z,46,oNK,e,s,gg,cMK,'item','index','index')
_(fIK,oLK)
_(bMJ,fIK)
var oZK=_n('view')
_rz(z,oZK,'class',59,e,s,gg)
var c1K=_n('view')
_rz(z,c1K,'class',60,e,s,gg)
var o2K=_oz(z,61,e,s,gg)
_(c1K,o2K)
_(oZK,c1K)
var l3K=_n('view')
_rz(z,l3K,'class',62,e,s,gg)
var a4K=_v()
_(l3K,a4K)
var t5K=function(b7K,e6K,o8K,gg){
var o0K=_n('view')
_rz(z,o0K,'class',67,b7K,e6K,gg)
var fAL=_mz(z,'image',['mode',68,'src',1],[],b7K,e6K,gg)
_(o0K,fAL)
var cBL=_n('view')
_rz(z,cBL,'class',70,b7K,e6K,gg)
var hCL=_n('text')
var oDL=_oz(z,71,b7K,e6K,gg)
_(hCL,oDL)
_(cBL,hCL)
var cEL=_n('text')
var oFL=_oz(z,72,b7K,e6K,gg)
_(cEL,oFL)
_(cBL,cEL)
var lGL=_n('view')
_rz(z,lGL,'class',73,b7K,e6K,gg)
var aHL=_n('text')
var tIL=_oz(z,74,b7K,e6K,gg)
_(aHL,tIL)
_(lGL,aHL)
var eJL=_n('text')
_rz(z,eJL,'class',75,b7K,e6K,gg)
_(lGL,eJL)
_(cBL,lGL)
var bKL=_n('text')
_rz(z,bKL,'class',76,b7K,e6K,gg)
var oLL=_oz(z,77,b7K,e6K,gg)
_(bKL,oLL)
_(cBL,bKL)
_(o0K,cBL)
_(o8K,o0K)
return o8K
}
a4K.wxXCkey=2
_2z(z,65,t5K,e,s,gg,a4K,'item','index','index')
_(oZK,l3K)
_(bMJ,oZK)
var xML=_mz(z,'share',['bind:__l',78,'class',1,'contentHeight',2,'data-ref',3,'shareList',4,'vueId',5],[],e,s,gg)
_(bMJ,xML)
_(r,bMJ)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var fOL=_n('view')
_rz(z,fOL,'class',0,e,s,gg)
var cPL=_n('view')
_rz(z,cPL,'class',1,e,s,gg)
var hQL=_mz(z,'swiper',['autoplay',-1,'circular',-1,'bindchange',2,'class',1,'data-event-opts',2],[],e,s,gg)
var oRL=_v()
_(hQL,oRL)
var cSL=function(lUL,oTL,aVL,gg){
var eXL=_mz(z,'swiper-item',['bindtap',9,'class',1,'data-event-opts',2],[],lUL,oTL,gg)
var bYL=_n('image')
_rz(z,bYL,'src',12,lUL,oTL,gg)
_(eXL,bYL)
_(aVL,eXL)
return aVL
}
oRL.wxXCkey=2
_2z(z,7,cSL,e,s,gg,oRL,'item','index','index')
_(cPL,hQL)
var oZL=_n('view')
_rz(z,oZL,'class',13,e,s,gg)
var x1L=_n('text')
_rz(z,x1L,'class',14,e,s,gg)
var o2L=_oz(z,15,e,s,gg)
_(x1L,o2L)
_(oZL,x1L)
var f3L=_n('text')
_rz(z,f3L,'class',16,e,s,gg)
var c4L=_oz(z,17,e,s,gg)
_(f3L,c4L)
_(oZL,f3L)
var h5L=_n('text')
_rz(z,h5L,'class',18,e,s,gg)
var o6L=_oz(z,19,e,s,gg)
_(h5L,o6L)
_(oZL,h5L)
_(cPL,oZL)
_(fOL,cPL)
var c7L=_n('view')
_rz(z,c7L,'class',20,e,s,gg)
var o8L=_n('view')
_rz(z,o8L,'class',21,e,s,gg)
var l9L=_n('view')
_rz(z,l9L,'class',22,e,s,gg)
var a0L=_n('view')
_rz(z,a0L,'class',23,e,s,gg)
_(l9L,a0L)
var tAM=_n('text')
_rz(z,tAM,'class',24,e,s,gg)
var eBM=_oz(z,25,e,s,gg)
_(tAM,eBM)
_(l9L,tAM)
_(o8L,l9L)
_(c7L,o8L)
var bCM=_n('view')
_rz(z,bCM,'class',26,e,s,gg)
var oDM=_n('view')
_rz(z,oDM,'class',27,e,s,gg)
var xEM=_n('view')
_rz(z,xEM,'class',28,e,s,gg)
_(oDM,xEM)
var oFM=_n('text')
_rz(z,oFM,'class',29,e,s,gg)
var fGM=_oz(z,30,e,s,gg)
_(oFM,fGM)
_(oDM,oFM)
_(bCM,oDM)
_(c7L,bCM)
var cHM=_n('view')
_rz(z,cHM,'class',31,e,s,gg)
var hIM=_n('view')
_rz(z,hIM,'class',32,e,s,gg)
var oJM=_n('view')
_rz(z,oJM,'class',33,e,s,gg)
_(hIM,oJM)
var cKM=_n('text')
_rz(z,cKM,'class',34,e,s,gg)
var oLM=_oz(z,35,e,s,gg)
_(cKM,oLM)
_(hIM,cKM)
_(cHM,hIM)
_(c7L,cHM)
_(fOL,c7L)
var lMM=_mz(z,'enterpanel',['bgColor',36,'bind:__l',1,'panelTitle',2,'vueId',3],[],e,s,gg)
_(fOL,lMM)
var aNM=_mz(z,'enterpanel',['bgColor',40,'bind:__l',1,'panelTitle',2,'vueId',3],[],e,s,gg)
_(fOL,aNM)
_(r,fOL)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var ePM=_n('view')
_rz(z,ePM,'class',0,e,s,gg)
var bQM=_n('view')
_rz(z,bQM,'class',1,e,s,gg)
var oRM=_v()
_(bQM,oRM)
var xSM=function(fUM,oTM,cVM,gg){
var oXM=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],fUM,oTM,gg)
var cYM=_n('view')
_rz(z,cYM,'class',9,fUM,oTM,gg)
var oZM=_mz(z,'image',['alt',-1,'class',10,'src',1],[],fUM,oTM,gg)
_(cYM,oZM)
_(oXM,cYM)
var l1M=_n('view')
_rz(z,l1M,'class',12,fUM,oTM,gg)
var a2M=_n('text')
var t3M=_oz(z,13,fUM,oTM,gg)
_(a2M,t3M)
_(l1M,a2M)
var e4M=_n('view')
_rz(z,e4M,'class',14,fUM,oTM,gg)
var b5M=_n('text')
_rz(z,b5M,'class',15,fUM,oTM,gg)
var o6M=_oz(z,16,fUM,oTM,gg)
_(b5M,o6M)
_(e4M,b5M)
var x7M=_n('text')
_rz(z,x7M,'class',17,fUM,oTM,gg)
var o8M=_oz(z,18,fUM,oTM,gg)
_(x7M,o8M)
var f9M=_n('text')
_rz(z,f9M,'class',19,fUM,oTM,gg)
var c0M=_oz(z,20,fUM,oTM,gg)
_(f9M,c0M)
_(x7M,f9M)
var hAN=_oz(z,21,fUM,oTM,gg)
_(x7M,hAN)
_(e4M,x7M)
_(l1M,e4M)
_(oXM,l1M)
var oBN=_n('view')
_rz(z,oBN,'class',22,fUM,oTM,gg)
_(oXM,oBN)
_(cVM,oXM)
return cVM
}
oRM.wxXCkey=2
_2z(z,4,xSM,e,s,gg,oRM,'sub','index','index')
_(ePM,bQM)
_(r,ePM)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var oDN=_n('view')
_rz(z,oDN,'class',0,e,s,gg)
var lEN=_n('view')
_rz(z,lEN,'class',1,e,s,gg)
var aFN=_mz(z,'image',['alt',-1,'class',2,'src',1],[],e,s,gg)
_(lEN,aFN)
_(oDN,lEN)
var tGN=_n('view')
_rz(z,tGN,'class',4,e,s,gg)
var eHN=_n('text')
_rz(z,eHN,'class',5,e,s,gg)
var bIN=_oz(z,6,e,s,gg)
_(eHN,bIN)
_(tGN,eHN)
_(oDN,tGN)
var oJN=_n('view')
_rz(z,oJN,'class',7,e,s,gg)
var xKN=_v()
_(oJN,xKN)
var oLN=function(cNN,fMN,hON,gg){
var cQN=_n('view')
_rz(z,cQN,'class',12,cNN,fMN,gg)
var oRN=_n('text')
_rz(z,oRN,'class',13,cNN,fMN,gg)
var lSN=_oz(z,14,cNN,fMN,gg)
_(oRN,lSN)
_(cQN,oRN)
_(hON,cQN)
return hON
}
xKN.wxXCkey=2
_2z(z,10,oLN,e,s,gg,xKN,'item','index','index')
_(oDN,oJN)
var aTN=_n('view')
_rz(z,aTN,'class',15,e,s,gg)
_(oDN,aTN)
_(r,oDN)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var eVN=_n('view')
_rz(z,eVN,'class',0,e,s,gg)
var oXN=_n('view')
_rz(z,oXN,'class',1,e,s,gg)
var xYN=_mz(z,'text',['bindtap',2,'class',1,'data-event-opts',2],[],e,s,gg)
_(oXN,xYN)
var oZN=_n('text')
_rz(z,oZN,'class',5,e,s,gg)
var f1N=_n('text')
_rz(z,f1N,'class',6,e,s,gg)
var c2N=_oz(z,7,e,s,gg)
_(f1N,c2N)
_(oZN,f1N)
var h3N=_n('text')
_rz(z,h3N,'class',8,e,s,gg)
var o4N=_oz(z,9,e,s,gg)
_(h3N,o4N)
_(oZN,h3N)
_(oXN,oZN)
var c5N=_mz(z,'text',['bindtap',10,'class',1,'data-event-opts',2],[],e,s,gg)
_(oXN,c5N)
_(eVN,oXN)
var o6N=_n('view')
_rz(z,o6N,'class',13,e,s,gg)
var l7N=_mz(z,'swiper',['bindchange',14,'class',1,'current',2,'data-event-opts',3,'indicatorDots',4,'interval',5,'style',6],[],e,s,gg)
var a8N=_v()
_(l7N,a8N)
var t9N=function(bAO,e0N,oBO,gg){
var oDO=_n('swiper-item')
var fEO=_n('view')
_rz(z,fEO,'class',25,bAO,e0N,gg)
var hGO=_n('view')
_rz(z,hGO,'class',26,bAO,e0N,gg)
var oHO=_mz(z,'answerinput',['bind:__l',27,'bind:changeAnswer',1,'data',2,'data-event-opts',3,'status',4,'vueId',5],[],bAO,e0N,gg)
_(hGO,oHO)
_(fEO,hGO)
var cFO=_v()
_(fEO,cFO)
if(_oz(z,33,bAO,e0N,gg)){cFO.wxVkey=1
var cIO=_mz(z,'subquestionswiper',['bind:__l',34,'bind:changeSubAnswer',1,'data',2,'data-event-opts',3,'status',4,'vueId',5],[],bAO,e0N,gg)
_(cFO,cIO)
}
cFO.wxXCkey=1
cFO.wxXCkey=3
_(oDO,fEO)
_(oBO,oDO)
return oBO
}
a8N.wxXCkey=4
_2z(z,23,t9N,e,s,gg,a8N,'test','index','index')
_(o6N,l7N)
_(eVN,o6N)
var oJO=_mz(z,'view',['class',40,'hidden',1],[],e,s,gg)
var lKO=_mz(z,'view',['bindtap',42,'class',1,'data-event-opts',2],[],e,s,gg)
_(oJO,lKO)
var aLO=_n('view')
_rz(z,aLO,'class',45,e,s,gg)
var tMO=_n('view')
_rz(z,tMO,'class',46,e,s,gg)
var eNO=_n('text')
_rz(z,eNO,'class',47,e,s,gg)
var bOO=_oz(z,48,e,s,gg)
_(eNO,bOO)
_(tMO,eNO)
var oPO=_mz(z,'text',['bindtap',49,'class',1,'data-event-opts',2],[],e,s,gg)
_(tMO,oPO)
_(aLO,tMO)
var xQO=_n('view')
_rz(z,xQO,'class',52,e,s,gg)
var oRO=_v()
_(xQO,oRO)
var fSO=function(hUO,cTO,oVO,gg){
var oXO=_n('view')
_rz(z,oXO,'class',57,hUO,cTO,gg)
var lYO=_mz(z,'view',['bindtap',58,'class',1,'data-event-opts',2],[],hUO,cTO,gg)
var aZO=_oz(z,61,hUO,cTO,gg)
_(lYO,aZO)
_(oXO,lYO)
_(oVO,oXO)
return oVO
}
oRO.wxXCkey=2
_2z(z,55,fSO,e,s,gg,oRO,'item','index','index')
_(aLO,xQO)
var t1O=_n('text')
_rz(z,t1O,'class',62,e,s,gg)
var e2O=_oz(z,63,e,s,gg)
_(t1O,e2O)
_(aLO,t1O)
var b3O=_n('button')
_rz(z,b3O,'class',64,e,s,gg)
var o4O=_oz(z,65,e,s,gg)
_(b3O,o4O)
_(aLO,b3O)
_(oJO,aLO)
_(eVN,oJO)
var bWN=_v()
_(eVN,bWN)
if(_oz(z,66,e,s,gg)){bWN.wxVkey=1
var x5O=_n('view')
_rz(z,x5O,'class',67,e,s,gg)
var o6O=_mz(z,'view',['bindtap',68,'class',1,'data-event-opts',2],[],e,s,gg)
_(x5O,o6O)
var f7O=_n('view')
_rz(z,f7O,'class',71,e,s,gg)
var c8O=_mz(z,'view',['bindtap',72,'data-event-opts',1],[],e,s,gg)
var h9O=_n('button')
_rz(z,h9O,'class',74,e,s,gg)
var o0O=_oz(z,75,e,s,gg)
_(h9O,o0O)
_(c8O,h9O)
_(f7O,c8O)
var cAP=_mz(z,'view',['bindtap',76,'data-event-opts',1],[],e,s,gg)
var oBP=_n('button')
_rz(z,oBP,'class',78,e,s,gg)
var lCP=_oz(z,79,e,s,gg)
_(oBP,lCP)
_(cAP,oBP)
_(f7O,cAP)
var aDP=_mz(z,'view',['bindtap',80,'data-event-opts',1],[],e,s,gg)
var tEP=_n('button')
_rz(z,tEP,'class',82,e,s,gg)
var eFP=_oz(z,83,e,s,gg)
_(tEP,eFP)
_(aDP,tEP)
_(f7O,aDP)
_(x5O,f7O)
_(bWN,x5O)
}
bWN.wxXCkey=1
bWN.wxXCkey=3
_(r,eVN)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var oHP=_n('view')
_rz(z,oHP,'class',0,e,s,gg)
var xIP=_n('view')
_rz(z,xIP,'class',1,e,s,gg)
var oJP=_n('view')
_rz(z,oJP,'class',2,e,s,gg)
var fKP=_mz(z,'text',['bindtap',3,'class',1,'data-event-opts',2],[],e,s,gg)
var cLP=_oz(z,6,e,s,gg)
_(fKP,cLP)
_(oJP,fKP)
_(xIP,oJP)
var hMP=_n('view')
_rz(z,hMP,'class',7,e,s,gg)
var oNP=_mz(z,'text',['bindtap',8,'class',1,'data-event-opts',2],[],e,s,gg)
var cOP=_oz(z,11,e,s,gg)
_(oNP,cOP)
_(hMP,oNP)
_(xIP,hMP)
_(oHP,xIP)
var oPP=_mz(z,'view',['class',12,'hidden',1],[],e,s,gg)
var lQP=_mz(z,'view',['bindtap',14,'class',1,'data-event-opts',2],[],e,s,gg)
_(oPP,lQP)
var aRP=_mz(z,'view',['class',17,'hidden',1],[],e,s,gg)
var tSP=_v()
_(aRP,tSP)
var eTP=function(oVP,bUP,xWP,gg){
var fYP=_mz(z,'view',['bindtap',23,'class',1,'data-event-opts',2],[],oVP,bUP,gg)
var cZP=_n('text')
_rz(z,cZP,'class',26,oVP,bUP,gg)
var h1P=_oz(z,27,oVP,bUP,gg)
_(cZP,h1P)
_(fYP,cZP)
_(xWP,fYP)
return xWP
}
tSP.wxXCkey=2
_2z(z,21,eTP,e,s,gg,tSP,'item','index','index')
_(oPP,aRP)
var o2P=_mz(z,'view',['class',28,'hidden',1],[],e,s,gg)
var c3P=_v()
_(o2P,c3P)
var o4P=function(a6P,l5P,t7P,gg){
var b9P=_mz(z,'view',['bindtap',34,'class',1,'data-event-opts',2],[],a6P,l5P,gg)
var o0P=_n('text')
_rz(z,o0P,'class',37,a6P,l5P,gg)
var xAQ=_oz(z,38,a6P,l5P,gg)
_(o0P,xAQ)
_(b9P,o0P)
_(t7P,b9P)
return t7P
}
c3P.wxXCkey=2
_2z(z,32,o4P,e,s,gg,c3P,'item','index','index')
_(oPP,o2P)
_(oHP,oPP)
var oBQ=_n('view')
_rz(z,oBQ,'class',39,e,s,gg)
var fCQ=_v()
_(oBQ,fCQ)
var cDQ=function(oFQ,hEQ,cGQ,gg){
var lIQ=_mz(z,'view',['bindtap',44,'class',1,'data-event-opts',2],[],oFQ,hEQ,gg)
var aJQ=_n('text')
_rz(z,aJQ,'class',47,oFQ,hEQ,gg)
var tKQ=_oz(z,48,oFQ,hEQ,gg)
_(aJQ,tKQ)
_(lIQ,aJQ)
var eLQ=_n('text')
_rz(z,eLQ,'class',49,oFQ,hEQ,gg)
var bMQ=_oz(z,50,oFQ,hEQ,gg)
_(eLQ,bMQ)
_(lIQ,eLQ)
var oNQ=_n('text')
_rz(z,oNQ,'class',51,oFQ,hEQ,gg)
var xOQ=_oz(z,52,oFQ,hEQ,gg)
_(oNQ,xOQ)
_(lIQ,oNQ)
_(cGQ,lIQ)
return cGQ
}
fCQ.wxXCkey=2
_2z(z,42,cDQ,e,s,gg,fCQ,'item','index','index')
_(oHP,oBQ)
_(r,oHP)
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var fQQ=_n('view')
_rz(z,fQQ,'class',0,e,s,gg)
var cRQ=_n('view')
_rz(z,cRQ,'class',1,e,s,gg)
var hSQ=_mz(z,'text',['bindtap',2,'class',1,'data-event-opts',2],[],e,s,gg)
_(cRQ,hSQ)
var oTQ=_n('text')
_rz(z,oTQ,'class',5,e,s,gg)
var cUQ=_n('text')
_rz(z,cUQ,'class',6,e,s,gg)
var oVQ=_oz(z,7,e,s,gg)
_(cUQ,oVQ)
_(oTQ,cUQ)
var lWQ=_n('text')
_rz(z,lWQ,'class',8,e,s,gg)
var aXQ=_oz(z,9,e,s,gg)
_(lWQ,aXQ)
_(oTQ,lWQ)
_(cRQ,oTQ)
var tYQ=_mz(z,'text',['bindtap',10,'class',1,'data-event-opts',2],[],e,s,gg)
_(cRQ,tYQ)
_(fQQ,cRQ)
var eZQ=_n('view')
_rz(z,eZQ,'class',13,e,s,gg)
var b1Q=_mz(z,'swiper',['bindchange',14,'class',1,'current',2,'data-event-opts',3,'indicatorDots',4,'interval',5,'style',6],[],e,s,gg)
var o2Q=_v()
_(b1Q,o2Q)
var x3Q=function(f5Q,o4Q,c6Q,gg){
var o8Q=_n('swiper-item')
_rz(z,o8Q,'style',25,f5Q,o4Q,gg)
var c9Q=_n('view')
_rz(z,c9Q,'class',26,f5Q,o4Q,gg)
var lAR=_n('view')
_rz(z,lAR,'class',27,f5Q,o4Q,gg)
var aBR=_mz(z,'answerinput',['bind:__l',28,'data',1,'status',2,'vueId',3],[],f5Q,o4Q,gg)
_(lAR,aBR)
_(c9Q,lAR)
var o0Q=_v()
_(c9Q,o0Q)
if(_oz(z,32,f5Q,o4Q,gg)){o0Q.wxVkey=1
var tCR=_mz(z,'subquestionswiper',['bind:__l',33,'data',1,'status',2,'vueId',3],[],f5Q,o4Q,gg)
_(o0Q,tCR)
}
o0Q.wxXCkey=1
o0Q.wxXCkey=3
_(o8Q,c9Q)
_(c6Q,o8Q)
return c6Q
}
o2Q.wxXCkey=4
_2z(z,23,x3Q,e,s,gg,o2Q,'test','index','index')
_(eZQ,b1Q)
_(fQQ,eZQ)
var eDR=_mz(z,'view',['class',37,'hidden',1],[],e,s,gg)
var bER=_mz(z,'view',['bindtap',39,'class',1,'data-event-opts',2],[],e,s,gg)
_(eDR,bER)
var oFR=_n('view')
_rz(z,oFR,'class',42,e,s,gg)
var xGR=_n('view')
_rz(z,xGR,'class',43,e,s,gg)
var oHR=_n('text')
_rz(z,oHR,'class',44,e,s,gg)
var fIR=_oz(z,45,e,s,gg)
_(oHR,fIR)
_(xGR,oHR)
var cJR=_mz(z,'text',['bindtap',46,'class',1,'data-event-opts',2],[],e,s,gg)
_(xGR,cJR)
_(oFR,xGR)
var hKR=_n('view')
_rz(z,hKR,'class',49,e,s,gg)
var oLR=_v()
_(hKR,oLR)
var cMR=function(lOR,oNR,aPR,gg){
var eRR=_n('view')
_rz(z,eRR,'class',54,lOR,oNR,gg)
var bSR=_mz(z,'view',['bindtap',55,'class',1,'data-event-opts',2],[],lOR,oNR,gg)
var oTR=_oz(z,58,lOR,oNR,gg)
_(bSR,oTR)
_(eRR,bSR)
_(aPR,eRR)
return aPR
}
oLR.wxXCkey=2
_2z(z,52,cMR,e,s,gg,oLR,'item','index','index')
_(oFR,hKR)
_(eDR,oFR)
_(fQQ,eDR)
_(r,fQQ)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var oVR=_n('view')
_rz(z,oVR,'class',0,e,s,gg)
var fWR=_n('view')
_rz(z,fWR,'class',1,e,s,gg)
var cXR=_mz(z,'text',['bindtap',2,'class',1,'data-event-opts',2],[],e,s,gg)
_(fWR,cXR)
var hYR=_n('text')
_rz(z,hYR,'class',5,e,s,gg)
var oZR=_n('text')
_rz(z,oZR,'class',6,e,s,gg)
var c1R=_oz(z,7,e,s,gg)
_(oZR,c1R)
_(hYR,oZR)
var o2R=_n('text')
_rz(z,o2R,'class',8,e,s,gg)
var l3R=_oz(z,9,e,s,gg)
_(o2R,l3R)
_(hYR,o2R)
_(fWR,hYR)
var a4R=_mz(z,'text',['bindtap',10,'class',1,'data-event-opts',2],[],e,s,gg)
_(fWR,a4R)
_(oVR,fWR)
var t5R=_n('view')
_rz(z,t5R,'class',13,e,s,gg)
var e6R=_mz(z,'swiper',['bindchange',14,'class',1,'current',2,'data-event-opts',3,'indicatorDots',4,'interval',5,'style',6],[],e,s,gg)
var b7R=_v()
_(e6R,b7R)
var o8R=function(o0R,x9R,fAS,gg){
var hCS=_n('swiper-item')
var oDS=_n('view')
_rz(z,oDS,'class',25,o0R,x9R,gg)
var oFS=_n('view')
_rz(z,oFS,'class',26,o0R,x9R,gg)
var lGS=_mz(z,'answerinput',['bind:__l',27,'data',1,'status',2,'vueId',3],[],o0R,x9R,gg)
_(oFS,lGS)
_(oDS,oFS)
var cES=_v()
_(oDS,cES)
if(_oz(z,31,o0R,x9R,gg)){cES.wxVkey=1
var aHS=_mz(z,'subquestionswiper',['bind:__l',32,'data',1,'status',2,'vueId',3],[],o0R,x9R,gg)
_(cES,aHS)
}
cES.wxXCkey=1
cES.wxXCkey=3
_(hCS,oDS)
_(fAS,hCS)
return fAS
}
b7R.wxXCkey=4
_2z(z,23,o8R,e,s,gg,b7R,'test','index','index')
_(t5R,e6R)
_(oVR,t5R)
var tIS=_mz(z,'view',['class',36,'hidden',1],[],e,s,gg)
var eJS=_mz(z,'view',['bindtap',38,'class',1,'data-event-opts',2],[],e,s,gg)
_(tIS,eJS)
var bKS=_n('view')
_rz(z,bKS,'class',41,e,s,gg)
var oLS=_n('view')
_rz(z,oLS,'class',42,e,s,gg)
var xMS=_n('text')
_rz(z,xMS,'class',43,e,s,gg)
var oNS=_oz(z,44,e,s,gg)
_(xMS,oNS)
_(oLS,xMS)
var fOS=_mz(z,'text',['bindtap',45,'class',1,'data-event-opts',2],[],e,s,gg)
_(oLS,fOS)
_(bKS,oLS)
var cPS=_n('view')
_rz(z,cPS,'class',48,e,s,gg)
var hQS=_v()
_(cPS,hQS)
var oRS=function(oTS,cSS,lUS,gg){
var tWS=_n('view')
_rz(z,tWS,'class',53,oTS,cSS,gg)
var eXS=_mz(z,'view',['bindtap',54,'class',1,'data-event-opts',2],[],oTS,cSS,gg)
var bYS=_oz(z,57,oTS,cSS,gg)
_(eXS,bYS)
_(tWS,eXS)
_(lUS,tWS)
return lUS
}
hQS.wxXCkey=2
_2z(z,51,oRS,e,s,gg,hQS,'item','index','index')
_(bKS,cPS)
_(tIS,bKS)
_(oVR,tIS)
_(r,oVR)
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var x1S=_n('view')
_rz(z,x1S,'class',0,e,s,gg)
var o2S=_n('view')
_rz(z,o2S,'class',1,e,s,gg)
var c4S=_v()
_(o2S,c4S)
var h5S=function(c7S,o6S,o8S,gg){
var a0S=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],c7S,o6S,gg)
var tAT=_n('text')
_rz(z,tAT,'class',9,c7S,o6S,gg)
var eBT=_oz(z,10,c7S,o6S,gg)
_(tAT,eBT)
_(a0S,tAT)
_(o8S,a0S)
return o8S
}
c4S.wxXCkey=2
_2z(z,4,h5S,e,s,gg,c4S,'tab','index','*this')
var f3S=_v()
_(o2S,f3S)
if(_oz(z,11,e,s,gg)){f3S.wxVkey=1
var bCT=_n('view')
_rz(z,bCT,'class',12,e,s,gg)
var oDT=_mz(z,'text',['bindtap',13,'class',1,'data-event-opts',2],[],e,s,gg)
_(bCT,oDT)
var xET=_mz(z,'text',['bindtap',16,'class',1,'data-event-opts',2],[],e,s,gg)
_(bCT,xET)
var oFT=_mz(z,'text',['bindtap',19,'class',1,'data-event-opts',2],[],e,s,gg)
_(bCT,oFT)
_(f3S,bCT)
}
f3S.wxXCkey=1
_(x1S,o2S)
var fGT=_n('view')
_rz(z,fGT,'class',22,e,s,gg)
var cHT=_v()
_(fGT,cHT)
if(_oz(z,23,e,s,gg)){cHT.wxVkey=1
var cKT=_mz(z,'course',['bind:__l',24,'vueId',1],[],e,s,gg)
_(cHT,cKT)
}
var hIT=_v()
_(fGT,hIT)
if(_oz(z,26,e,s,gg)){hIT.wxVkey=1
var oLT=_mz(z,'homework',['bind:__l',27,'ifLoadMore',1,'vueId',2],[],e,s,gg)
_(hIT,oLT)
}
var oJT=_v()
_(fGT,oJT)
if(_oz(z,30,e,s,gg)){oJT.wxVkey=1
var lMT=_mz(z,'worntopic',['bind:__l',31,'bind:selectHide',1,'data-event-opts',2,'ifLoadMore',3,'selectShow',4,'selectType',5,'vueId',6],[],e,s,gg)
_(oJT,lMT)
}
cHT.wxXCkey=1
cHT.wxXCkey=3
hIT.wxXCkey=1
hIT.wxXCkey=3
oJT.wxXCkey=1
oJT.wxXCkey=3
_(x1S,fGT)
_(r,x1S)
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var tOT=_n('view')
_rz(z,tOT,'class',0,e,s,gg)
var bQT=_n('view')
_rz(z,bQT,'class',1,e,s,gg)
var oRT=_mz(z,'view',['bindtap',2,'class',1,'data-event-opts',2],[],e,s,gg)
var xST=_n('text')
_rz(z,xST,'class',5,e,s,gg)
var oTT=_oz(z,6,e,s,gg)
_(xST,oTT)
var fUT=_n('text')
_rz(z,fUT,'class',7,e,s,gg)
_(xST,fUT)
_(oRT,xST)
_(bQT,oRT)
var cVT=_mz(z,'view',['bindtap',8,'class',1,'data-event-opts',2],[],e,s,gg)
var hWT=_n('text')
_rz(z,hWT,'class',11,e,s,gg)
var oXT=_oz(z,12,e,s,gg)
_(hWT,oXT)
var cYT=_n('text')
_rz(z,cYT,'class',13,e,s,gg)
_(hWT,cYT)
_(cVT,hWT)
_(bQT,cVT)
var oZT=_mz(z,'view',['bindtap',14,'class',1,'data-event-opts',2],[],e,s,gg)
var l1T=_n('text')
_rz(z,l1T,'class',17,e,s,gg)
var a2T=_oz(z,18,e,s,gg)
_(l1T,a2T)
var t3T=_n('text')
_rz(z,t3T,'class',19,e,s,gg)
_(l1T,t3T)
_(oZT,l1T)
_(bQT,oZT)
var e4T=_mz(z,'view',['class',20,'hidden',1],[],e,s,gg)
var b5T=_mz(z,'view',['bindtap',22,'class',1,'data-event-opts',2],[],e,s,gg)
_(e4T,b5T)
var o6T=_mz(z,'view',['class',25,'hidden',1],[],e,s,gg)
var x7T=_v()
_(o6T,x7T)
var o8T=function(c0T,f9T,hAU,gg){
var cCU=_mz(z,'view',['bindtap',31,'class',1,'data-event-opts',2],[],c0T,f9T,gg)
var oDU=_n('text')
_rz(z,oDU,'class',34,c0T,f9T,gg)
var lEU=_oz(z,35,c0T,f9T,gg)
_(oDU,lEU)
_(cCU,oDU)
_(hAU,cCU)
return hAU
}
x7T.wxXCkey=2
_2z(z,29,o8T,e,s,gg,x7T,'item','index','index')
_(e4T,o6T)
var aFU=_mz(z,'view',['class',36,'hidden',1],[],e,s,gg)
var tGU=_oz(z,38,e,s,gg)
_(aFU,tGU)
_(e4T,aFU)
var eHU=_mz(z,'view',['class',39,'hidden',1],[],e,s,gg)
var bIU=_v()
_(eHU,bIU)
var oJU=function(oLU,xKU,fMU,gg){
var hOU=_mz(z,'view',['bindtap',45,'class',1,'data-event-opts',2],[],oLU,xKU,gg)
var oPU=_n('text')
_rz(z,oPU,'class',48,oLU,xKU,gg)
var cQU=_oz(z,49,oLU,xKU,gg)
_(oPU,cQU)
_(hOU,oPU)
_(fMU,hOU)
return fMU
}
bIU.wxXCkey=2
_2z(z,43,oJU,e,s,gg,bIU,'item','index','index')
_(e4T,eHU)
_(bQT,e4T)
_(tOT,bQT)
var oRU=_n('view')
_rz(z,oRU,'class',50,e,s,gg)
var lSU=_v()
_(oRU,lSU)
var aTU=function(eVU,tUU,bWU,gg){
var xYU=_mz(z,'wrongtest',['bind:__l',55,'bind:chooseCancel',1,'bind:chooseConfirm',2,'cancelSelect',3,'chooseAll',4,'data',5,'data-event-opts',6,'selectShow',7,'vueId',8],[],eVU,tUU,gg)
_(bWU,xYU)
return bWU
}
lSU.wxXCkey=4
_2z(z,53,aTU,e,s,gg,lSU,'test','index','index')
_(tOT,oRU)
var ePT=_v()
_(tOT,ePT)
if(_oz(z,64,e,s,gg)){ePT.wxVkey=1
var oZU=_n('view')
_rz(z,oZU,'class',65,e,s,gg)
var f1U=_mz(z,'view',['bindtap',66,'class',1,'data-event-opts',2],[],e,s,gg)
var c2U=_n('view')
_rz(z,c2U,'class',69,e,s,gg)
_(f1U,c2U)
var h3U=_n('text')
var o4U=_oz(z,70,e,s,gg)
_(h3U,o4U)
_(f1U,h3U)
_(oZU,f1U)
var c5U=_n('view')
_rz(z,c5U,'class',71,e,s,gg)
var o6U=_oz(z,72,e,s,gg)
_(c5U,o6U)
_(oZU,c5U)
var l7U=_mz(z,'view',['bindtap',73,'class',1,'data-event-opts',2],[],e,s,gg)
var a8U=_oz(z,76,e,s,gg)
_(l7U,a8U)
_(oZU,l7U)
_(ePT,oZU)
}
ePT.wxXCkey=1
_(r,tOT)
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var e0U=_n('view')
_(r,e0U)
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var oBV=_n('view')
_rz(z,oBV,'class',0,e,s,gg)
var xCV=_n('view')
_rz(z,xCV,'class',1,e,s,gg)
var oDV=_n('text')
var fEV=_oz(z,2,e,s,gg)
_(oDV,fEV)
_(xCV,oDV)
var cFV=_n('text')
_rz(z,cFV,'class',3,e,s,gg)
var hGV=_oz(z,4,e,s,gg)
_(cFV,hGV)
_(xCV,cFV)
_(oBV,xCV)
var oHV=_n('view')
_rz(z,oHV,'class',5,e,s,gg)
var cIV=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],e,s,gg)
var oJV=_n('text')
_rz(z,oJV,'class',9,e,s,gg)
_(cIV,oJV)
var lKV=_n('view')
_rz(z,lKV,'class',10,e,s,gg)
var aLV=_n('text')
_rz(z,aLV,'class',11,e,s,gg)
var tMV=_oz(z,12,e,s,gg)
_(aLV,tMV)
_(lKV,aLV)
var eNV=_n('text')
var bOV=_oz(z,13,e,s,gg)
_(eNV,bOV)
_(lKV,eNV)
_(cIV,lKV)
var oPV=_n('label')
_rz(z,oPV,'class',14,e,s,gg)
var xQV=_mz(z,'radio',['checked',15,'color',1,'value',2],[],e,s,gg)
_(oPV,xQV)
_(cIV,oPV)
_(oHV,cIV)
var oRV=_mz(z,'view',['bindtap',18,'class',1,'data-event-opts',2],[],e,s,gg)
var fSV=_n('text')
_rz(z,fSV,'class',21,e,s,gg)
_(oRV,fSV)
var cTV=_n('view')
_rz(z,cTV,'class',22,e,s,gg)
var hUV=_n('text')
_rz(z,hUV,'class',23,e,s,gg)
var oVV=_oz(z,24,e,s,gg)
_(hUV,oVV)
_(cTV,hUV)
_(oRV,cTV)
var cWV=_n('label')
_rz(z,cWV,'class',25,e,s,gg)
var oXV=_mz(z,'radio',['checked',26,'color',1,'value',2],[],e,s,gg)
_(cWV,oXV)
_(oRV,cWV)
_(oHV,oRV)
var lYV=_mz(z,'view',['bindtap',29,'class',1,'data-event-opts',2],[],e,s,gg)
var aZV=_n('text')
_rz(z,aZV,'class',32,e,s,gg)
_(lYV,aZV)
var t1V=_n('view')
_rz(z,t1V,'class',33,e,s,gg)
var e2V=_n('text')
_rz(z,e2V,'class',34,e,s,gg)
var b3V=_oz(z,35,e,s,gg)
_(e2V,b3V)
_(t1V,e2V)
var o4V=_n('text')
var x5V=_oz(z,36,e,s,gg)
_(o4V,x5V)
_(t1V,o4V)
_(lYV,t1V)
var o6V=_n('label')
_rz(z,o6V,'class',37,e,s,gg)
var f7V=_mz(z,'radio',['checked',38,'color',1,'value',2],[],e,s,gg)
_(o6V,f7V)
_(lYV,o6V)
_(oHV,lYV)
_(oBV,oHV)
var c8V=_mz(z,'text',['bindtap',41,'class',1,'data-event-opts',2],[],e,s,gg)
var h9V=_oz(z,44,e,s,gg)
_(c8V,h9V)
_(oBV,c8V)
_(r,oBV)
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var cAW=_n('view')
_rz(z,cAW,'class',0,e,s,gg)
var oBW=_n('text')
_rz(z,oBW,'class',1,e,s,gg)
_(cAW,oBW)
var lCW=_n('text')
_rz(z,lCW,'class',2,e,s,gg)
var aDW=_oz(z,3,e,s,gg)
_(lCW,aDW)
_(cAW,lCW)
var tEW=_n('view')
_rz(z,tEW,'class',4,e,s,gg)
var eFW=_mz(z,'navigator',['class',5,'openType',1,'url',2],[],e,s,gg)
var bGW=_oz(z,8,e,s,gg)
_(eFW,bGW)
_(tEW,eFW)
var oHW=_mz(z,'navigator',['class',9,'openType',1,'url',2],[],e,s,gg)
var xIW=_oz(z,12,e,s,gg)
_(oHW,xIW)
_(tEW,oHW)
_(cAW,tEW)
_(r,cAW)
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var fKW=_n('view')
_(r,fKW)
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var hMW=_n('view')
var oNW=_mz(z,'navigator',['class',0,'url',1],[],e,s,gg)
var cOW=_n('view')
_rz(z,cOW,'class',2,e,s,gg)
var oPW=_n('text')
_rz(z,oPW,'class',3,e,s,gg)
_(cOW,oPW)
var lQW=_n('view')
_rz(z,lQW,'class',4,e,s,gg)
var aRW=_n('view')
_rz(z,aRW,'class',5,e,s,gg)
var tSW=_n('text')
_rz(z,tSW,'class',6,e,s,gg)
var eTW=_oz(z,7,e,s,gg)
_(tSW,eTW)
_(aRW,tSW)
var bUW=_n('text')
_rz(z,bUW,'class',8,e,s,gg)
var oVW=_oz(z,9,e,s,gg)
_(bUW,oVW)
_(aRW,bUW)
_(lQW,aRW)
var xWW=_n('text')
_rz(z,xWW,'class',10,e,s,gg)
var oXW=_oz(z,11,e,s,gg)
_(xWW,oXW)
_(lQW,xWW)
_(cOW,lQW)
var fYW=_n('text')
_rz(z,fYW,'class',12,e,s,gg)
_(cOW,fYW)
_(oNW,cOW)
var cZW=_mz(z,'image',['class',13,'src',1],[],e,s,gg)
_(oNW,cZW)
_(hMW,oNW)
var h1W=_n('view')
_rz(z,h1W,'class',15,e,s,gg)
var o2W=_n('view')
_rz(z,o2W,'class',16,e,s,gg)
var c3W=_mz(z,'image',['class',17,'src',1],[],e,s,gg)
_(o2W,c3W)
var o4W=_n('text')
_rz(z,o4W,'class',19,e,s,gg)
var l5W=_oz(z,20,e,s,gg)
_(o4W,l5W)
_(o2W,o4W)
_(h1W,o2W)
var a6W=_n('view')
_rz(z,a6W,'class',21,e,s,gg)
var t7W=_n('image')
_rz(z,t7W,'src',22,e,s,gg)
_(a6W,t7W)
var e8W=_n('view')
_rz(z,e8W,'class',23,e,s,gg)
var b9W=_n('text')
_rz(z,b9W,'class',24,e,s,gg)
var o0W=_oz(z,25,e,s,gg)
_(b9W,o0W)
_(e8W,b9W)
var xAX=_n('text')
_rz(z,xAX,'class',26,e,s,gg)
var oBX=_oz(z,27,e,s,gg)
_(xAX,oBX)
_(e8W,xAX)
var fCX=_n('view')
_rz(z,fCX,'class',28,e,s,gg)
var cDX=_n('text')
_rz(z,cDX,'class',29,e,s,gg)
var hEX=_oz(z,30,e,s,gg)
_(cDX,hEX)
_(fCX,cDX)
var oFX=_n('text')
_rz(z,oFX,'class',31,e,s,gg)
var cGX=_oz(z,32,e,s,gg)
_(oFX,cGX)
_(fCX,oFX)
_(e8W,fCX)
_(a6W,e8W)
_(h1W,a6W)
var oHX=_n('view')
_rz(z,oHX,'class',33,e,s,gg)
var lIX=_n('image')
_rz(z,lIX,'src',34,e,s,gg)
_(oHX,lIX)
var aJX=_n('view')
_rz(z,aJX,'class',35,e,s,gg)
var tKX=_n('text')
_rz(z,tKX,'class',36,e,s,gg)
var eLX=_oz(z,37,e,s,gg)
_(tKX,eLX)
_(aJX,tKX)
var bMX=_n('text')
_rz(z,bMX,'class',38,e,s,gg)
var oNX=_oz(z,39,e,s,gg)
_(bMX,oNX)
_(aJX,bMX)
var xOX=_n('view')
_rz(z,xOX,'class',40,e,s,gg)
var oPX=_n('text')
_rz(z,oPX,'class',41,e,s,gg)
var fQX=_oz(z,42,e,s,gg)
_(oPX,fQX)
_(xOX,oPX)
var cRX=_n('text')
_rz(z,cRX,'class',43,e,s,gg)
var hSX=_oz(z,44,e,s,gg)
_(cRX,hSX)
_(xOX,cRX)
_(aJX,xOX)
_(oHX,aJX)
_(h1W,oHX)
_(hMW,h1W)
var oTX=_n('view')
_rz(z,oTX,'class',45,e,s,gg)
var cUX=_mz(z,'view',['bindtap',46,'class',1,'data-event-opts',2],[],e,s,gg)
var oVX=_n('view')
_rz(z,oVX,'class',49,e,s,gg)
var lWX=_oz(z,50,e,s,gg)
_(oVX,lWX)
_(cUX,oVX)
var aXX=_n('text')
_rz(z,aXX,'class',51,e,s,gg)
var tYX=_oz(z,52,e,s,gg)
_(aXX,tYX)
_(cUX,aXX)
var eZX=_n('text')
_rz(z,eZX,'class',53,e,s,gg)
var b1X=_oz(z,54,e,s,gg)
_(eZX,b1X)
_(cUX,eZX)
var o2X=_n('text')
_rz(z,o2X,'class',55,e,s,gg)
_(cUX,o2X)
_(oTX,cUX)
var x3X=_n('view')
_rz(z,x3X,'class',56,e,s,gg)
var o4X=_n('view')
_rz(z,o4X,'class',57,e,s,gg)
var f5X=_oz(z,58,e,s,gg)
_(o4X,f5X)
_(x3X,o4X)
var c6X=_n('text')
_rz(z,c6X,'class',59,e,s,gg)
var h7X=_oz(z,60,e,s,gg)
_(c6X,h7X)
_(x3X,c6X)
var o8X=_n('text')
_rz(z,o8X,'class',61,e,s,gg)
var c9X=_oz(z,62,e,s,gg)
_(o8X,c9X)
_(x3X,o8X)
_(oTX,x3X)
_(hMW,oTX)
var o0X=_n('view')
_rz(z,o0X,'class',63,e,s,gg)
var lAY=_n('view')
_rz(z,lAY,'class',64,e,s,gg)
var aBY=_n('text')
_rz(z,aBY,'class',65,e,s,gg)
var tCY=_oz(z,66,e,s,gg)
_(aBY,tCY)
_(lAY,aBY)
var eDY=_n('text')
_rz(z,eDY,'class',67,e,s,gg)
var bEY=_oz(z,68,e,s,gg)
_(eDY,bEY)
_(lAY,eDY)
_(o0X,lAY)
var oFY=_n('view')
_rz(z,oFY,'class',69,e,s,gg)
var xGY=_n('text')
_rz(z,xGY,'class',70,e,s,gg)
var oHY=_oz(z,71,e,s,gg)
_(xGY,oHY)
_(oFY,xGY)
var fIY=_n('text')
_rz(z,fIY,'class',72,e,s,gg)
var cJY=_oz(z,73,e,s,gg)
_(fIY,cJY)
_(oFY,fIY)
_(o0X,oFY)
var hKY=_n('view')
_rz(z,hKY,'class',74,e,s,gg)
var oLY=_n('text')
_rz(z,oLY,'class',75,e,s,gg)
var cMY=_oz(z,76,e,s,gg)
_(oLY,cMY)
_(hKY,oLY)
var oNY=_n('text')
_rz(z,oNY,'class',77,e,s,gg)
var lOY=_oz(z,78,e,s,gg)
_(oNY,lOY)
_(hKY,oNY)
_(o0X,hKY)
var aPY=_n('view')
_rz(z,aPY,'class',79,e,s,gg)
var tQY=_n('text')
_rz(z,tQY,'class',80,e,s,gg)
var eRY=_oz(z,81,e,s,gg)
_(tQY,eRY)
_(aPY,tQY)
var bSY=_mz(z,'input',['bindinput',82,'class',1,'data-event-opts',2,'placeholder',3,'placeholderClass',4,'type',5,'value',6],[],e,s,gg)
_(aPY,bSY)
_(o0X,aPY)
_(hMW,o0X)
var oTY=_n('view')
_rz(z,oTY,'class',89,e,s,gg)
var xUY=_n('view')
_rz(z,xUY,'class',90,e,s,gg)
var oVY=_n('text')
var fWY=_oz(z,91,e,s,gg)
_(oVY,fWY)
_(xUY,oVY)
var cXY=_n('text')
_rz(z,cXY,'class',92,e,s,gg)
var hYY=_oz(z,93,e,s,gg)
_(cXY,hYY)
_(xUY,cXY)
var oZY=_n('text')
_rz(z,oZY,'class',94,e,s,gg)
var c1Y=_oz(z,95,e,s,gg)
_(oZY,c1Y)
_(xUY,oZY)
_(oTY,xUY)
var o2Y=_mz(z,'text',['bindtap',96,'class',1,'data-event-opts',2],[],e,s,gg)
var l3Y=_oz(z,99,e,s,gg)
_(o2Y,l3Y)
_(oTY,o2Y)
_(hMW,oTY)
var a4Y=_mz(z,'view',['bindtap',100,'class',1,'data-event-opts',2],[],e,s,gg)
var t5Y=_mz(z,'view',['catchtap',103,'class',1,'data-event-opts',2],[],e,s,gg)
var e6Y=_v()
_(t5Y,e6Y)
var b7Y=function(x9Y,o8Y,o0Y,gg){
var cBZ=_n('view')
_rz(z,cBZ,'class',110,x9Y,o8Y,gg)
var hCZ=_n('view')
_rz(z,hCZ,'class',111,x9Y,o8Y,gg)
var oDZ=_n('view')
_rz(z,oDZ,'class',112,x9Y,o8Y,gg)
var cEZ=_n('text')
_rz(z,cEZ,'class',113,x9Y,o8Y,gg)
var oFZ=_oz(z,114,x9Y,o8Y,gg)
_(cEZ,oFZ)
_(oDZ,cEZ)
var lGZ=_n('text')
_rz(z,lGZ,'class',115,x9Y,o8Y,gg)
var aHZ=_oz(z,116,x9Y,o8Y,gg)
_(lGZ,aHZ)
_(oDZ,lGZ)
_(hCZ,oDZ)
var tIZ=_n('view')
_rz(z,tIZ,'class',117,x9Y,o8Y,gg)
var eJZ=_n('text')
_rz(z,eJZ,'class',118,x9Y,o8Y,gg)
var bKZ=_oz(z,119,x9Y,o8Y,gg)
_(eJZ,bKZ)
_(tIZ,eJZ)
var oLZ=_n('text')
var xMZ=_oz(z,120,x9Y,o8Y,gg)
_(oLZ,xMZ)
_(tIZ,oLZ)
_(hCZ,tIZ)
var oNZ=_n('view')
_rz(z,oNZ,'class',121,x9Y,o8Y,gg)
_(hCZ,oNZ)
var fOZ=_n('view')
_rz(z,fOZ,'class',122,x9Y,o8Y,gg)
_(hCZ,fOZ)
_(cBZ,hCZ)
var cPZ=_n('text')
_rz(z,cPZ,'class',123,x9Y,o8Y,gg)
var hQZ=_oz(z,124,x9Y,o8Y,gg)
_(cPZ,hQZ)
_(cBZ,cPZ)
_(o0Y,cBZ)
return o0Y
}
e6Y.wxXCkey=2
_2z(z,108,b7Y,e,s,gg,e6Y,'item','index','index')
_(a4Y,t5Y)
_(hMW,a4Y)
_(r,hMW)
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var cSZ=_n('view')
_rz(z,cSZ,'class',0,e,s,gg)
var oTZ=_n('view')
_rz(z,oTZ,'class',1,e,s,gg)
var lUZ=_v()
_(oTZ,lUZ)
var aVZ=function(eXZ,tWZ,bYZ,gg){
var x1Z=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],eXZ,tWZ,gg)
var o2Z=_oz(z,9,eXZ,tWZ,gg)
_(x1Z,o2Z)
_(bYZ,x1Z)
return bYZ
}
lUZ.wxXCkey=2
_2z(z,4,aVZ,e,s,gg,lUZ,'item','index','index')
_(cSZ,oTZ)
var f3Z=_mz(z,'swiper',['bindchange',10,'class',1,'current',2,'data-event-opts',3,'duration',4],[],e,s,gg)
var c4Z=_v()
_(f3Z,c4Z)
var h5Z=function(c7Z,o6Z,o8Z,gg){
var a0Z=_n('swiper-item')
_rz(z,a0Z,'class',19,c7Z,o6Z,gg)
var tA1=_mz(z,'scroll-view',['scrollY',-1,'bindscrolltolower',20,'class',1,'data-event-opts',2],[],c7Z,o6Z,gg)
var eB1=_v()
_(tA1,eB1)
if(_oz(z,23,c7Z,o6Z,gg)){eB1.wxVkey=1
var bC1=_mz(z,'empty',['bind:__l',24,'vueId',1],[],c7Z,o6Z,gg)
_(eB1,bC1)
}
var oD1=_v()
_(tA1,oD1)
var xE1=function(fG1,oF1,cH1,gg){
var oJ1=_n('view')
_rz(z,oJ1,'class',30,fG1,oF1,gg)
var lM1=_n('view')
_rz(z,lM1,'class',31,fG1,oF1,gg)
var tO1=_n('text')
_rz(z,tO1,'class',32,fG1,oF1,gg)
var eP1=_oz(z,33,fG1,oF1,gg)
_(tO1,eP1)
_(lM1,tO1)
var bQ1=_mz(z,'text',['class',34,'style',1],[],fG1,oF1,gg)
var oR1=_oz(z,36,fG1,oF1,gg)
_(bQ1,oR1)
_(lM1,bQ1)
var aN1=_v()
_(lM1,aN1)
if(_oz(z,37,fG1,oF1,gg)){aN1.wxVkey=1
var xS1=_mz(z,'text',['bindtap',38,'class',1,'data-event-opts',2],[],fG1,oF1,gg)
_(aN1,xS1)
}
aN1.wxXCkey=1
_(oJ1,lM1)
var cK1=_v()
_(oJ1,cK1)
if(_oz(z,41,fG1,oF1,gg)){cK1.wxVkey=1
var oT1=_mz(z,'scroll-view',['scrollX',-1,'class',42],[],fG1,oF1,gg)
var fU1=_v()
_(oT1,fU1)
var cV1=function(oX1,hW1,cY1,gg){
var l11=_n('view')
_rz(z,l11,'class',47,oX1,hW1,gg)
var a21=_mz(z,'image',['class',48,'mode',1,'src',2],[],oX1,hW1,gg)
_(l11,a21)
_(cY1,l11)
return cY1
}
fU1.wxXCkey=2
_2z(z,45,cV1,fG1,oF1,gg,fU1,'goodsItem','goodsIndex','goodsIndex')
_(cK1,oT1)
}
var t31=_v()
_(oJ1,t31)
var e41=function(o61,b51,x71,gg){
var f91=_v()
_(x71,f91)
if(_oz(z,55,o61,b51,gg)){f91.wxVkey=1
var c01=_n('view')
_rz(z,c01,'class',56,o61,b51,gg)
var hA2=_mz(z,'image',['class',57,'mode',1,'src',2],[],o61,b51,gg)
_(c01,hA2)
var oB2=_n('view')
_rz(z,oB2,'class',60,o61,b51,gg)
var cC2=_n('text')
_rz(z,cC2,'class',61,o61,b51,gg)
var oD2=_oz(z,62,o61,b51,gg)
_(cC2,oD2)
_(oB2,cC2)
var lE2=_n('text')
_rz(z,lE2,'class',63,o61,b51,gg)
var aF2=_oz(z,64,o61,b51,gg)
_(lE2,aF2)
_(oB2,lE2)
var tG2=_n('text')
_rz(z,tG2,'class',65,o61,b51,gg)
var eH2=_oz(z,66,o61,b51,gg)
_(tG2,eH2)
_(oB2,tG2)
_(c01,oB2)
_(f91,c01)
}
f91.wxXCkey=1
return x71
}
t31.wxXCkey=2
_2z(z,53,e41,fG1,oF1,gg,t31,'goodsItem','goodsIndex','goodsIndex')
var bI2=_n('view')
_rz(z,bI2,'class',67,fG1,oF1,gg)
var oJ2=_oz(z,68,fG1,oF1,gg)
_(bI2,oJ2)
var xK2=_n('text')
_rz(z,xK2,'class',69,fG1,oF1,gg)
var oL2=_oz(z,70,fG1,oF1,gg)
_(xK2,oL2)
_(bI2,xK2)
var fM2=_oz(z,71,fG1,oF1,gg)
_(bI2,fM2)
var cN2=_n('text')
_rz(z,cN2,'class',72,fG1,oF1,gg)
var hO2=_oz(z,73,fG1,oF1,gg)
_(cN2,hO2)
_(bI2,cN2)
_(oJ1,bI2)
var oL1=_v()
_(oJ1,oL1)
if(_oz(z,74,fG1,oF1,gg)){oL1.wxVkey=1
var oP2=_n('view')
_rz(z,oP2,'class',75,fG1,oF1,gg)
var cQ2=_mz(z,'button',['bindtap',76,'class',1,'data-event-opts',2],[],fG1,oF1,gg)
var oR2=_oz(z,79,fG1,oF1,gg)
_(cQ2,oR2)
_(oP2,cQ2)
var lS2=_n('button')
_rz(z,lS2,'class',80,fG1,oF1,gg)
var aT2=_oz(z,81,fG1,oF1,gg)
_(lS2,aT2)
_(oP2,lS2)
_(oL1,oP2)
}
cK1.wxXCkey=1
oL1.wxXCkey=1
oL1.wxXCkey=3
_(cH1,oJ1)
return cH1
}
oD1.wxXCkey=4
_2z(z,28,xE1,c7Z,o6Z,gg,oD1,'item','index','index')
var tU2=_mz(z,'uni-load-more',['bind:__l',82,'status',1,'vueId',2],[],c7Z,o6Z,gg)
_(tA1,tU2)
eB1.wxXCkey=1
eB1.wxXCkey=3
_(a0Z,tA1)
_(o8Z,a0Z)
return o8Z
}
c4Z.wxXCkey=4
_2z(z,17,h5Z,e,s,gg,c4Z,'tabItem','tabIndex','tabIndex')
_(cSZ,f3Z)
_(r,cSZ)
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var bW2=_n('view')
_rz(z,bW2,'class',0,e,s,gg)
var oX2=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var xY2=_mz(z,'view',['bindtap',3,'class',1,'data-event-opts',2],[],e,s,gg)
var oZ2=_oz(z,6,e,s,gg)
_(xY2,oZ2)
_(oX2,xY2)
var f12=_mz(z,'view',['bindtap',7,'class',1,'data-event-opts',2],[],e,s,gg)
var c22=_oz(z,10,e,s,gg)
_(f12,c22)
_(oX2,f12)
var h32=_mz(z,'view',['bindtap',11,'class',1,'data-event-opts',2],[],e,s,gg)
var o42=_n('text')
var c52=_oz(z,14,e,s,gg)
_(o42,c52)
_(h32,o42)
var o62=_n('view')
_rz(z,o62,'class',15,e,s,gg)
var l72=_n('text')
_rz(z,l72,'class',16,e,s,gg)
_(o62,l72)
var a82=_n('text')
_rz(z,a82,'class',17,e,s,gg)
_(o62,a82)
_(h32,o62)
_(oX2,h32)
var t92=_mz(z,'text',['bindtap',18,'class',1,'data-event-opts',2],[],e,s,gg)
_(oX2,t92)
_(bW2,oX2)
var e02=_n('view')
_rz(z,e02,'class',21,e,s,gg)
var bA3=_v()
_(e02,bA3)
var oB3=function(oD3,xC3,fE3,gg){
var hG3=_mz(z,'view',['bindtap',26,'class',1,'data-event-opts',2],[],oD3,xC3,gg)
var oH3=_n('view')
_rz(z,oH3,'class',29,oD3,xC3,gg)
var cI3=_mz(z,'image',['mode',30,'src',1],[],oD3,xC3,gg)
_(oH3,cI3)
_(hG3,oH3)
var oJ3=_n('text')
_rz(z,oJ3,'class',32,oD3,xC3,gg)
var lK3=_oz(z,33,oD3,xC3,gg)
_(oJ3,lK3)
_(hG3,oJ3)
var aL3=_n('view')
_rz(z,aL3,'class',34,oD3,xC3,gg)
var tM3=_n('text')
_rz(z,tM3,'class',35,oD3,xC3,gg)
var eN3=_oz(z,36,oD3,xC3,gg)
_(tM3,eN3)
_(aL3,tM3)
var bO3=_n('text')
var oP3=_oz(z,37,oD3,xC3,gg)
_(bO3,oP3)
_(aL3,bO3)
_(hG3,aL3)
_(fE3,hG3)
return fE3
}
bA3.wxXCkey=2
_2z(z,24,oB3,e,s,gg,bA3,'item','index','index')
_(bW2,e02)
var xQ3=_mz(z,'uni-load-more',['bind:__l',38,'status',1,'vueId',2],[],e,s,gg)
_(bW2,xQ3)
var oR3=_mz(z,'view',['bindtap',41,'class',1,'data-event-opts',2],[],e,s,gg)
var fS3=_mz(z,'view',['catchtap',44,'catchtouchmove',1,'class',2,'data-event-opts',3],[],e,s,gg)
var cT3=_mz(z,'scroll-view',['scrollY',-1,'class',48],[],e,s,gg)
var hU3=_v()
_(cT3,hU3)
var oV3=function(oX3,cW3,lY3,gg){
var t13=_n('view')
var e23=_n('view')
_rz(z,e23,'class',53,oX3,cW3,gg)
var b33=_oz(z,54,oX3,cW3,gg)
_(e23,b33)
_(t13,e23)
var o43=_v()
_(t13,o43)
var x53=function(f73,o63,c83,gg){
var o03=_mz(z,'view',['bindtap',59,'class',1,'data-event-opts',2],[],f73,o63,gg)
var cA4=_oz(z,62,f73,o63,gg)
_(o03,cA4)
_(c83,o03)
return c83
}
o43.wxXCkey=2
_2z(z,57,x53,oX3,cW3,gg,o43,'tItem','__i1__','id')
_(lY3,t13)
return lY3
}
hU3.wxXCkey=2
_2z(z,51,oV3,e,s,gg,hU3,'item','__i0__','id')
_(fS3,cT3)
_(oR3,fS3)
_(bW2,oR3)
_(r,bW2)
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var lC4=_n('view')
_rz(z,lC4,'class',0,e,s,gg)
var aD4=_n('view')
_rz(z,aD4,'class',1,e,s,gg)
var tE4=_mz(z,'swiper',['indicatorDots',-1,'circular',2,'duration',1],[],e,s,gg)
var eF4=_v()
_(tE4,eF4)
var bG4=function(xI4,oH4,oJ4,gg){
var cL4=_n('swiper-item')
_rz(z,cL4,'class',8,xI4,oH4,gg)
var hM4=_n('view')
_rz(z,hM4,'class',9,xI4,oH4,gg)
var oN4=_mz(z,'image',['class',10,'mode',1,'src',2],[],xI4,oH4,gg)
_(hM4,oN4)
_(cL4,hM4)
_(oJ4,cL4)
return oJ4
}
eF4.wxXCkey=2
_2z(z,6,bG4,e,s,gg,eF4,'item','index','index')
_(aD4,tE4)
_(lC4,aD4)
var cO4=_n('view')
_rz(z,cO4,'class',13,e,s,gg)
var oP4=_n('text')
_rz(z,oP4,'class',14,e,s,gg)
var lQ4=_oz(z,15,e,s,gg)
_(oP4,lQ4)
_(cO4,oP4)
var aR4=_n('view')
_rz(z,aR4,'class',16,e,s,gg)
var tS4=_n('text')
_rz(z,tS4,'class',17,e,s,gg)
var eT4=_oz(z,18,e,s,gg)
_(tS4,eT4)
_(aR4,tS4)
var bU4=_n('text')
_rz(z,bU4,'class',19,e,s,gg)
var oV4=_oz(z,20,e,s,gg)
_(bU4,oV4)
_(aR4,bU4)
var xW4=_n('text')
_rz(z,xW4,'class',21,e,s,gg)
var oX4=_oz(z,22,e,s,gg)
_(xW4,oX4)
_(aR4,xW4)
var fY4=_n('text')
_rz(z,fY4,'class',23,e,s,gg)
var cZ4=_oz(z,24,e,s,gg)
_(fY4,cZ4)
_(aR4,fY4)
_(cO4,aR4)
var h14=_n('view')
_rz(z,h14,'class',25,e,s,gg)
var o24=_n('text')
var c34=_oz(z,26,e,s,gg)
_(o24,c34)
_(h14,o24)
var o44=_n('text')
var l54=_oz(z,27,e,s,gg)
_(o44,l54)
_(h14,o44)
var a64=_n('text')
var t74=_oz(z,28,e,s,gg)
_(a64,t74)
_(h14,a64)
_(cO4,h14)
_(lC4,cO4)
var e84=_mz(z,'view',['bindtap',29,'class',1,'data-event-opts',2],[],e,s,gg)
var b94=_n('view')
_rz(z,b94,'class',32,e,s,gg)
var o04=_n('text')
_rz(z,o04,'class',33,e,s,gg)
_(b94,o04)
var xA5=_oz(z,34,e,s,gg)
_(b94,xA5)
_(e84,b94)
var oB5=_n('text')
_rz(z,oB5,'class',35,e,s,gg)
var fC5=_oz(z,36,e,s,gg)
_(oB5,fC5)
_(e84,oB5)
var cD5=_n('text')
_rz(z,cD5,'class',37,e,s,gg)
_(e84,cD5)
var hE5=_n('view')
_rz(z,hE5,'class',38,e,s,gg)
var oF5=_oz(z,39,e,s,gg)
_(hE5,oF5)
var cG5=_n('text')
_rz(z,cG5,'class',40,e,s,gg)
_(hE5,cG5)
_(e84,hE5)
_(lC4,e84)
var oH5=_n('view')
_rz(z,oH5,'class',41,e,s,gg)
var lI5=_mz(z,'view',['bindtap',42,'class',1,'data-event-opts',2],[],e,s,gg)
var aJ5=_n('text')
_rz(z,aJ5,'class',45,e,s,gg)
var tK5=_oz(z,46,e,s,gg)
_(aJ5,tK5)
_(lI5,aJ5)
var eL5=_n('view')
_rz(z,eL5,'class',47,e,s,gg)
var bM5=_v()
_(eL5,bM5)
var oN5=function(oP5,xO5,fQ5,gg){
var hS5=_n('text')
_rz(z,hS5,'class',52,oP5,xO5,gg)
var oT5=_oz(z,53,oP5,xO5,gg)
_(hS5,oT5)
_(fQ5,hS5)
return fQ5
}
bM5.wxXCkey=2
_2z(z,50,oN5,e,s,gg,bM5,'sItem','sIndex','sIndex')
_(lI5,eL5)
var cU5=_n('text')
_rz(z,cU5,'class',54,e,s,gg)
_(lI5,cU5)
_(oH5,lI5)
var oV5=_n('view')
_rz(z,oV5,'class',55,e,s,gg)
var lW5=_n('text')
_rz(z,lW5,'class',56,e,s,gg)
var aX5=_oz(z,57,e,s,gg)
_(lW5,aX5)
_(oV5,lW5)
var tY5=_n('text')
_rz(z,tY5,'class',58,e,s,gg)
var eZ5=_oz(z,59,e,s,gg)
_(tY5,eZ5)
_(oV5,tY5)
var b15=_n('text')
_rz(z,b15,'class',60,e,s,gg)
_(oV5,b15)
_(oH5,oV5)
var o25=_n('view')
_rz(z,o25,'class',61,e,s,gg)
var x35=_n('text')
_rz(z,x35,'class',62,e,s,gg)
var o45=_oz(z,63,e,s,gg)
_(x35,o45)
_(o25,x35)
var f55=_n('view')
_rz(z,f55,'class',64,e,s,gg)
var c65=_n('text')
var h75=_oz(z,65,e,s,gg)
_(c65,h75)
_(f55,c65)
var o85=_n('text')
var c95=_oz(z,66,e,s,gg)
_(o85,c95)
_(f55,o85)
var o05=_n('text')
var lA6=_oz(z,67,e,s,gg)
_(o05,lA6)
_(f55,o05)
var aB6=_n('text')
var tC6=_oz(z,68,e,s,gg)
_(aB6,tC6)
_(f55,aB6)
_(o25,f55)
_(oH5,o25)
var eD6=_n('view')
_rz(z,eD6,'class',69,e,s,gg)
var bE6=_n('text')
_rz(z,bE6,'class',70,e,s,gg)
var oF6=_oz(z,71,e,s,gg)
_(bE6,oF6)
_(eD6,bE6)
var xG6=_n('view')
_rz(z,xG6,'class',72,e,s,gg)
var oH6=_n('text')
var fI6=_oz(z,73,e,s,gg)
_(oH6,fI6)
_(xG6,oH6)
var cJ6=_n('text')
var hK6=_oz(z,74,e,s,gg)
_(cJ6,hK6)
_(xG6,cJ6)
_(eD6,xG6)
_(oH5,eD6)
_(lC4,oH5)
var oL6=_n('view')
_rz(z,oL6,'class',75,e,s,gg)
var cM6=_n('view')
_rz(z,cM6,'class',76,e,s,gg)
var oN6=_n('text')
_rz(z,oN6,'class',77,e,s,gg)
var lO6=_oz(z,78,e,s,gg)
_(oN6,lO6)
_(cM6,oN6)
var aP6=_n('text')
var tQ6=_oz(z,79,e,s,gg)
_(aP6,tQ6)
_(cM6,aP6)
var eR6=_n('text')
_rz(z,eR6,'class',80,e,s,gg)
var bS6=_oz(z,81,e,s,gg)
_(eR6,bS6)
_(cM6,eR6)
var oT6=_n('text')
_rz(z,oT6,'class',82,e,s,gg)
_(cM6,oT6)
_(oL6,cM6)
var xU6=_n('view')
_rz(z,xU6,'class',83,e,s,gg)
var oV6=_mz(z,'image',['class',84,'mode',1,'src',2],[],e,s,gg)
_(xU6,oV6)
var fW6=_n('view')
_rz(z,fW6,'class',87,e,s,gg)
var cX6=_n('text')
_rz(z,cX6,'class',88,e,s,gg)
var hY6=_oz(z,89,e,s,gg)
_(cX6,hY6)
_(fW6,cX6)
var oZ6=_n('text')
_rz(z,oZ6,'class',90,e,s,gg)
var c16=_oz(z,91,e,s,gg)
_(oZ6,c16)
_(fW6,oZ6)
var o26=_n('view')
_rz(z,o26,'class',92,e,s,gg)
var l36=_n('text')
_rz(z,l36,'class',93,e,s,gg)
var a46=_oz(z,94,e,s,gg)
_(l36,a46)
_(o26,l36)
var t56=_n('text')
_rz(z,t56,'class',95,e,s,gg)
var e66=_oz(z,96,e,s,gg)
_(t56,e66)
_(o26,t56)
_(fW6,o26)
_(xU6,fW6)
_(oL6,xU6)
_(lC4,oL6)
var b76=_n('view')
_rz(z,b76,'class',97,e,s,gg)
var o86=_n('view')
_rz(z,o86,'class',98,e,s,gg)
var x96=_n('text')
var o06=_oz(z,99,e,s,gg)
_(x96,o06)
_(o86,x96)
_(b76,o86)
var fA7=_n('rich-text')
_rz(z,fA7,'nodes',100,e,s,gg)
_(b76,fA7)
_(lC4,b76)
var cB7=_n('view')
_rz(z,cB7,'class',101,e,s,gg)
var hC7=_mz(z,'navigator',['class',102,'openType',1,'url',2],[],e,s,gg)
var oD7=_n('text')
_rz(z,oD7,'class',105,e,s,gg)
_(hC7,oD7)
var cE7=_n('text')
var oF7=_oz(z,106,e,s,gg)
_(cE7,oF7)
_(hC7,cE7)
_(cB7,hC7)
var lG7=_mz(z,'navigator',['class',107,'openType',1,'url',2],[],e,s,gg)
var aH7=_n('text')
_rz(z,aH7,'class',110,e,s,gg)
_(lG7,aH7)
var tI7=_n('text')
var eJ7=_oz(z,111,e,s,gg)
_(tI7,eJ7)
_(lG7,tI7)
_(cB7,lG7)
var bK7=_mz(z,'view',['bindtap',112,'class',1,'data-event-opts',2],[],e,s,gg)
var oL7=_n('text')
_rz(z,oL7,'class',115,e,s,gg)
_(bK7,oL7)
var xM7=_n('text')
var oN7=_oz(z,116,e,s,gg)
_(xM7,oN7)
_(bK7,xM7)
_(cB7,bK7)
var fO7=_n('view')
_rz(z,fO7,'class',117,e,s,gg)
var cP7=_mz(z,'button',['bindtap',118,'class',1,'data-event-opts',2,'type',3],[],e,s,gg)
var hQ7=_oz(z,122,e,s,gg)
_(cP7,hQ7)
_(fO7,cP7)
var oR7=_mz(z,'button',['class',123,'type',1],[],e,s,gg)
var cS7=_oz(z,125,e,s,gg)
_(oR7,cS7)
_(fO7,oR7)
_(cB7,fO7)
_(lC4,cB7)
var oT7=_mz(z,'view',['bindtap',126,'catchtouchmove',1,'class',2,'data-event-opts',3],[],e,s,gg)
var lU7=_n('view')
_rz(z,lU7,'class',130,e,s,gg)
_(oT7,lU7)
var aV7=_mz(z,'view',['catchtap',131,'class',1,'data-event-opts',2],[],e,s,gg)
var tW7=_n('view')
_rz(z,tW7,'class',134,e,s,gg)
var eX7=_n('image')
_rz(z,eX7,'src',135,e,s,gg)
_(tW7,eX7)
var bY7=_n('view')
_rz(z,bY7,'class',136,e,s,gg)
var oZ7=_n('text')
_rz(z,oZ7,'class',137,e,s,gg)
var x17=_oz(z,138,e,s,gg)
_(oZ7,x17)
_(bY7,oZ7)
var o27=_n('text')
_rz(z,o27,'class',139,e,s,gg)
var f37=_oz(z,140,e,s,gg)
_(o27,f37)
_(bY7,o27)
var c47=_n('view')
_rz(z,c47,'class',141,e,s,gg)
var h57=_oz(z,142,e,s,gg)
_(c47,h57)
var o67=_v()
_(c47,o67)
var c77=function(l97,o87,a07,gg){
var eB8=_n('text')
_rz(z,eB8,'class',147,l97,o87,gg)
var bC8=_oz(z,148,l97,o87,gg)
_(eB8,bC8)
_(a07,eB8)
return a07
}
o67.wxXCkey=2
_2z(z,145,c77,e,s,gg,o67,'sItem','sIndex','sIndex')
_(bY7,c47)
_(tW7,bY7)
_(aV7,tW7)
var oD8=_v()
_(aV7,oD8)
var xE8=function(fG8,oF8,cH8,gg){
var oJ8=_n('view')
_rz(z,oJ8,'class',153,fG8,oF8,gg)
var cK8=_n('text')
var oL8=_oz(z,154,fG8,oF8,gg)
_(cK8,oL8)
_(oJ8,cK8)
var lM8=_n('view')
_rz(z,lM8,'class',155,fG8,oF8,gg)
var aN8=_v()
_(lM8,aN8)
var tO8=function(bQ8,eP8,oR8,gg){
var oT8=_v()
_(oR8,oT8)
if(_oz(z,160,bQ8,eP8,gg)){oT8.wxVkey=1
var fU8=_mz(z,'text',['bindtap',161,'class',1,'data-event-opts',2],[],bQ8,eP8,gg)
var cV8=_oz(z,164,bQ8,eP8,gg)
_(fU8,cV8)
_(oT8,fU8)
}
oT8.wxXCkey=1
return oR8
}
aN8.wxXCkey=2
_2z(z,158,tO8,fG8,oF8,gg,aN8,'childItem','childIndex','childIndex')
_(oJ8,lM8)
_(cH8,oJ8)
return cH8
}
oD8.wxXCkey=2
_2z(z,151,xE8,e,s,gg,oD8,'item','index','index')
var hW8=_mz(z,'button',['bindtap',165,'class',1,'data-event-opts',2],[],e,s,gg)
var oX8=_oz(z,168,e,s,gg)
_(hW8,oX8)
_(aV7,hW8)
_(oT7,aV7)
_(lC4,oT7)
var cY8=_mz(z,'share',['bind:__l',169,'class',1,'contentHeight',2,'data-ref',3,'shareList',4,'vueId',5],[],e,s,gg)
_(lC4,cY8)
_(r,lC4)
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var l18=_n('view')
_rz(z,l18,'class',0,e,s,gg)
var a28=_n('view')
_rz(z,a28,'class',1,e,s,gg)
_(l18,a28)
var t38=_mz(z,'view',['bindtap',2,'class',1,'data-event-opts',2],[],e,s,gg)
_(l18,t38)
var e48=_n('view')
_rz(z,e48,'class',5,e,s,gg)
_(l18,e48)
var b58=_n('view')
_rz(z,b58,'class',6,e,s,gg)
var o68=_n('view')
_rz(z,o68,'class',7,e,s,gg)
var x78=_oz(z,8,e,s,gg)
_(o68,x78)
_(b58,o68)
var o88=_n('view')
_rz(z,o88,'class',9,e,s,gg)
var f98=_oz(z,10,e,s,gg)
_(o88,f98)
_(b58,o88)
var c08=_n('view')
_rz(z,c08,'class',11,e,s,gg)
var hA9=_n('view')
_rz(z,hA9,'class',12,e,s,gg)
var oB9=_n('text')
_rz(z,oB9,'class',13,e,s,gg)
var cC9=_oz(z,14,e,s,gg)
_(oB9,cC9)
_(hA9,oB9)
var oD9=_mz(z,'input',['bindinput',15,'data-event-opts',1,'data-key',2,'maxlength',3,'placeholder',4,'type',5,'value',6],[],e,s,gg)
_(hA9,oD9)
_(c08,hA9)
var lE9=_n('view')
_rz(z,lE9,'class',22,e,s,gg)
var aF9=_n('text')
_rz(z,aF9,'class',23,e,s,gg)
var tG9=_oz(z,24,e,s,gg)
_(aF9,tG9)
_(lE9,aF9)
var eH9=_mz(z,'input',['password',-1,'bindconfirm',25,'bindinput',1,'data-event-opts',2,'data-key',3,'maxlength',4,'placeholder',5,'placeholderClass',6,'type',7,'value',8],[],e,s,gg)
_(lE9,eH9)
_(c08,lE9)
_(b58,c08)
var bI9=_mz(z,'button',['bindtap',34,'class',1,'data-event-opts',2,'disabled',3],[],e,s,gg)
var oJ9=_oz(z,38,e,s,gg)
_(bI9,oJ9)
_(b58,bI9)
var xK9=_n('view')
_rz(z,xK9,'class',39,e,s,gg)
var oL9=_oz(z,40,e,s,gg)
_(xK9,oL9)
_(b58,xK9)
_(l18,b58)
var fM9=_n('view')
_rz(z,fM9,'class',41,e,s,gg)
var cN9=_oz(z,42,e,s,gg)
_(fM9,cN9)
var hO9=_mz(z,'text',['bindtap',43,'data-event-opts',1],[],e,s,gg)
var oP9=_oz(z,45,e,s,gg)
_(hO9,oP9)
_(fM9,hO9)
_(l18,fM9)
_(r,l18)
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var oR9=_n('view')
_rz(z,oR9,'class',0,e,s,gg)
var lS9=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2,'hoverClass',3,'hoverStayTime',4],[],e,s,gg)
var aT9=_n('text')
_rz(z,aT9,'class',6,e,s,gg)
var tU9=_oz(z,7,e,s,gg)
_(aT9,tU9)
_(lS9,aT9)
var eV9=_n('text')
_rz(z,eV9,'class',8,e,s,gg)
_(lS9,eV9)
_(oR9,lS9)
var bW9=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2,'hoverClass',3,'hoverStayTime',4],[],e,s,gg)
var oX9=_n('text')
_rz(z,oX9,'class',14,e,s,gg)
var xY9=_oz(z,15,e,s,gg)
_(oX9,xY9)
_(bW9,oX9)
var oZ9=_n('text')
_rz(z,oZ9,'class',16,e,s,gg)
_(bW9,oZ9)
_(oR9,bW9)
var f19=_mz(z,'view',['bindtap',17,'class',1,'data-event-opts',2,'hoverClass',3,'hoverStayTime',4],[],e,s,gg)
var c29=_n('text')
_rz(z,c29,'class',22,e,s,gg)
var h39=_oz(z,23,e,s,gg)
_(c29,h39)
_(f19,c29)
var o49=_n('text')
_rz(z,o49,'class',24,e,s,gg)
_(f19,o49)
_(oR9,f19)
var c59=_n('view')
_rz(z,c59,'class',25,e,s,gg)
var o69=_n('text')
_rz(z,o69,'class',26,e,s,gg)
var l79=_oz(z,27,e,s,gg)
_(o69,l79)
_(c59,o69)
var a89=_mz(z,'switch',['checked',-1,'bindchange',28,'color',1,'data-event-opts',2],[],e,s,gg)
_(c59,a89)
_(oR9,c59)
var t99=_mz(z,'view',['bindtap',31,'class',1,'data-event-opts',2,'hoverClass',3,'hoverStayTime',4],[],e,s,gg)
var e09=_n('text')
_rz(z,e09,'class',36,e,s,gg)
var bA0=_oz(z,37,e,s,gg)
_(e09,bA0)
_(t99,e09)
var oB0=_n('text')
_rz(z,oB0,'class',38,e,s,gg)
_(t99,oB0)
_(oR9,t99)
var xC0=_mz(z,'view',['bindtap',39,'class',1,'data-event-opts',2,'hoverClass',3,'hoverStayTime',4],[],e,s,gg)
var oD0=_n('text')
_rz(z,oD0,'class',44,e,s,gg)
var fE0=_oz(z,45,e,s,gg)
_(oD0,fE0)
_(xC0,oD0)
var cF0=_n('text')
_rz(z,cF0,'class',46,e,s,gg)
_(xC0,cF0)
_(oR9,xC0)
var hG0=_n('view')
_rz(z,hG0,'class',47,e,s,gg)
var oH0=_n('text')
_rz(z,oH0,'class',48,e,s,gg)
var cI0=_oz(z,49,e,s,gg)
_(oH0,cI0)
_(hG0,oH0)
var oJ0=_n('text')
_rz(z,oJ0,'class',50,e,s,gg)
var lK0=_oz(z,51,e,s,gg)
_(oJ0,lK0)
_(hG0,oJ0)
var aL0=_n('text')
_rz(z,aL0,'class',52,e,s,gg)
_(hG0,aL0)
_(oR9,hG0)
var tM0=_mz(z,'view',['bindtap',53,'class',1,'data-event-opts',2],[],e,s,gg)
var eN0=_n('text')
_rz(z,eN0,'class',56,e,s,gg)
var bO0=_oz(z,57,e,s,gg)
_(eN0,bO0)
_(tM0,eN0)
_(oR9,tM0)
_(r,oR9)
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var xQ0=_n('view')
_rz(z,xQ0,'class',0,e,s,gg)
var oR0=_n('view')
_rz(z,oR0,'class',1,e,s,gg)
var fS0=_mz(z,'image',['class',2,'src',1],[],e,s,gg)
_(oR0,fS0)
var cT0=_n('view')
_rz(z,cT0,'class',4,e,s,gg)
var hU0=_n('view')
_rz(z,hU0,'class',5,e,s,gg)
var oV0=_mz(z,'image',['class',6,'src',1],[],e,s,gg)
_(hU0,oV0)
_(cT0,hU0)
var cW0=_n('view')
_rz(z,cW0,'class',8,e,s,gg)
var oX0=_n('text')
_rz(z,oX0,'class',9,e,s,gg)
var lY0=_oz(z,10,e,s,gg)
_(oX0,lY0)
_(cW0,oX0)
_(cT0,cW0)
_(oR0,cT0)
_(xQ0,oR0)
var aZ0=_mz(z,'view',['bindtouchend',11,'bindtouchmove',1,'bindtouchstart',2,'class',3,'data-event-opts',4,'style',5],[],e,s,gg)
var t10=_mz(z,'image',['class',17,'src',1],[],e,s,gg)
_(aZ0,t10)
var e20=_n('view')
_rz(z,e20,'class',19,e,s,gg)
var b30=_mz(z,'list-cell',['bind:__l',20,'icon',1,'iconColor',2,'title',3,'vueId',4],[],e,s,gg)
_(e20,b30)
var o40=_mz(z,'list-cell',['border',-1,'bind:__l',25,'bind:eventClick',1,'data-event-opts',2,'icon',3,'iconColor',4,'title',5,'vueId',6],[],e,s,gg)
_(e20,o40)
_(aZ0,e20)
_(xQ0,aZ0)
_(r,xQ0)
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
var o60=_n('view')
var f70=_n('view')
_rz(z,f70,'class',0,e,s,gg)
var c80=_mz(z,'image',['class',1,'src',1],[],e,s,gg)
_(f70,c80)
var h90=_n('text')
_rz(z,h90,'class',3,e,s,gg)
_(f70,h90)
var o00=_n('view')
_rz(z,o00,'class',4,e,s,gg)
var cAAB=_mz(z,'image',['class',5,'src',1],[],e,s,gg)
_(o00,cAAB)
var oBAB=_n('text')
_rz(z,oBAB,'class',7,e,s,gg)
_(o00,oBAB)
_(f70,o00)
_(o60,f70)
_(r,o60)
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
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
var _C= [[[2,1],],["@charset \x22UTF-8\x22;\n@font-face { font-family: yticon; font-weight: normal; font-style: normal; src: url(\x22https://at.alicdn.com/t/font_1078604_w4kpxh0rafi.ttf\x22) format(\x22truetype\x22); }\n.",[1],"yticon { font-family: \x22yticon\x22 !important; font-size: 16px; font-style: normal; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }\n.",[1],"icon-yiguoqi1:before { content: \x22\\E700\x22; }\n.",[1],"icon-iconfontshanchu1:before { content: \x22\\E619\x22; }\n.",[1],"icon-iconfontweixin:before { content: \x22\\E611\x22; }\n.",[1],"icon-alipay:before { content: \x22\\E636\x22; }\n.",[1],"icon-shang:before { content: \x22\\E624\x22; }\n.",[1],"icon-shouye:before { content: \x22\\E626\x22; }\n.",[1],"icon-shanchu4:before { content: \x22\\E622\x22; }\n.",[1],"icon-xiaoxi:before { content: \x22\\E618\x22; }\n.",[1],"icon-jiantour-copy:before { content: \x22\\E600\x22; }\n.",[1],"icon-fenxiang2:before { content: \x22\\E61E\x22; }\n.",[1],"icon-pingjia:before { content: \x22\\E67B\x22; }\n.",[1],"icon-daifukuan:before { content: \x22\\E68F\x22; }\n.",[1],"icon-pinglun-copy:before { content: \x22\\E612\x22; }\n.",[1],"icon-dianhua-copy:before { content: \x22\\E621\x22; }\n.",[1],"icon-shoucang:before { content: \x22\\E645\x22; }\n.",[1],"icon-xuanzhong2:before { content: \x22\\E62F\x22; }\n.",[1],"icon-gouwuche_:before { content: \x22\\E630\x22; }\n.",[1],"icon-icon-test:before { content: \x22\\E60C\x22; }\n.",[1],"icon-icon-test1:before { content: \x22\\E632\x22; }\n.",[1],"icon-bianji:before { content: \x22\\E646\x22; }\n.",[1],"icon-jiazailoading-A:before { content: \x22\\E8FC\x22; }\n.",[1],"icon-zuoshang:before { content: \x22\\E613\x22; }\n.",[1],"icon-jia2:before { content: \x22\\E60A\x22; }\n.",[1],"icon-huifu:before { content: \x22\\E68B\x22; }\n.",[1],"icon-sousuo:before { content: \x22\\E7CE\x22; }\n.",[1],"icon-arrow-fine-up:before { content: \x22\\E601\x22; }\n.",[1],"icon-hot:before { content: \x22\\E60E\x22; }\n.",[1],"icon-lishijilu:before { content: \x22\\E6B9\x22; }\n.",[1],"icon-zhengxinchaxun-zhifubaoceping-:before { content: \x22\\E616\x22; }\n.",[1],"icon-naozhong:before { content: \x22\\E64A\x22; }\n.",[1],"icon-xiatubiao--copy:before { content: \x22\\E608\x22; }\n.",[1],"icon-shoucang_xuanzhongzhuangtai:before { content: \x22\\E6A9\x22; }\n.",[1],"icon-jia1:before { content: \x22\\E61C\x22; }\n.",[1],"icon-bangzhu1:before { content: \x22\\E63D\x22; }\n.",[1],"icon-arrow-left-bottom:before { content: \x22\\E602\x22; }\n.",[1],"icon-arrow-right-bottom:before { content: \x22\\E603\x22; }\n.",[1],"icon-arrow-left-top:before { content: \x22\\E604\x22; }\n.",[1],"icon-icon--:before { content: \x22\\E744\x22; }\n.",[1],"icon-zuojiantou-up:before { content: \x22\\E605\x22; }\n.",[1],"icon-xia:before { content: \x22\\E62D\x22; }\n.",[1],"icon--jianhao:before { content: \x22\\E60B\x22; }\n.",[1],"icon-weixinzhifu:before { content: \x22\\E61A\x22; }\n.",[1],"icon-comment:before { content: \x22\\E64F\x22; }\n.",[1],"icon-weixin:before { content: \x22\\E61F\x22; }\n.",[1],"icon-fenlei1:before { content: \x22\\E620\x22; }\n.",[1],"icon-erjiye-yucunkuan:before { content: \x22\\E623\x22; }\n.",[1],"icon-Group-:before { content: \x22\\E688\x22; }\n.",[1],"icon-you:before { content: \x22\\E606\x22; }\n.",[1],"icon-forward:before { content: \x22\\E607\x22; }\n.",[1],"icon-tuijian:before { content: \x22\\E610\x22; }\n.",[1],"icon-bangzhu:before { content: \x22\\E679\x22; }\n.",[1],"icon-share:before { content: \x22\\E656\x22; }\n.",[1],"icon-yiguoqi:before { content: \x22\\E997\x22; }\n.",[1],"icon-shezhi1:before { content: \x22\\E61D\x22; }\n.",[1],"icon-fork:before { content: \x22\\E61B\x22; }\n.",[1],"icon-kafei:before { content: \x22\\E66A\x22; }\n.",[1],"icon-iLinkapp-:before { content: \x22\\E654\x22; }\n.",[1],"icon-saomiao:before { content: \x22\\E60D\x22; }\n.",[1],"icon-shezhi:before { content: \x22\\E60F\x22; }\n.",[1],"icon-shouhoutuikuan:before { content: \x22\\E631\x22; }\n.",[1],"icon-gouwuche:before { content: \x22\\E609\x22; }\n.",[1],"icon-dizhi:before { content: \x22\\E614\x22; }\n.",[1],"icon-fenlei:before { content: \x22\\E706\x22; }\n.",[1],"icon-xingxing:before { content: \x22\\E70B\x22; }\n.",[1],"icon-tuandui:before { content: \x22\\E633\x22; }\n.",[1],"icon-zuanshi:before { content: \x22\\E615\x22; }\n.",[1],"icon-zuo:before { content: \x22\\E63C\x22; }\n.",[1],"icon-shoucang2:before { content: \x22\\E62E\x22; }\n.",[1],"icon-shouhuodizhi:before { content: \x22\\E712\x22; }\n.",[1],"icon-yishouhuo:before { content: \x22\\E71A\x22; }\n.",[1],"icon-dianzan-ash:before { content: \x22\\E617\x22; }\nwx-view, wx-scroll-view, wx-swiper, wx-swiper-item, wx-cover-view, wx-cover-image, wx-icon, wx-text, wx-rich-text, wx-progress, wx-button, wx-checkbox, wx-form, wx-input, wx-label, wx-radio, wx-slider, wx-switch, wx-textarea, wx-navigator, wx-audio, wx-camera, wx-image, wx-video { -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"Skeleton { background: #f3f3f3; padding: ",[0,20]," 0; border-radius: ",[0,8],"; }\n.",[1],"image-wrapper { font-size: 0; background: #f3f3f3; border-radius: 4px; }\n.",[1],"image-wrapper wx-image { width: 100%; height: 100%; -webkit-transition: .6s; -o-transition: .6s; transition: .6s; opacity: 0; }\n.",[1],"image-wrapper wx-image.",[1],"loaded { opacity: 1; }\n.",[1],"clamp { overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; white-space: nowrap; display: block; }\n.",[1],"common-hover { background: #f5f5f5; }\n.",[1],"b-b:after, .",[1],"b-t:after { position: absolute; z-index: 3; left: 0; right: 0; height: 0; content: \x27\x27; -webkit-transform: scaleY(0.5); -ms-transform: scaleY(0.5); transform: scaleY(0.5); border-bottom: 1px solid #E4E7ED; }\n.",[1],"b-b:after { bottom: 0; }\n.",[1],"b-t:after { top: 0; }\nwx-uni-page-body { height: 100%; }\nwx-uni-button, wx-button { height: ",[0,80],"; line-height: ",[0,80],"; font-size: ",[0,34],"; font-weight: normal; }\nwx-uni-button.",[1],"no-border:before, wx-uni-button.",[1],"no-border:after, wx-button.",[1],"no-border:before, wx-button.",[1],"no-border:after { border: 0; }\nwx-uni-button[type\x3ddefault], wx-button[type\x3ddefault] { color: #303133; }\n.",[1],"input-placeholder { color: #999999; }\n.",[1],"placeholder { color: #999999; }\n",],];
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
setCssToHead([])();setCssToHead([[2,0]],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./app.wxss:332:12)",{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./app.wxss:332:12)",{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/button/button.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"btn { margin: 0 auto; width: 90%; height: ",[0,100],"; background: -webkit-gradient(linear, left top, right top, from(#f9d423), to(#ff794a)); background: -o-linear-gradient(left, #f9d423 0%, #ff794a 100%); background: linear-gradient(90deg, #f9d423 0%, #ff794a 100%); border-radius: ",[0,50],"; font-size: 16px; font-family: PingFang SC; font-weight: bold; color: white; text-align: center; line-height: ",[0,100],"; }\n",],undefined,{path:"./components/button/button.wxss"});    
__wxAppCode__['components/button/button.wxml']=$gwx('./components/button/button.wxml');

__wxAppCode__['components/empty.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"empty-content { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; position: fixed; left: 0; top: 0; right: 0; bottom: 0; background: #f8f8f8; padding-bottom: ",[0,120],"; }\n.",[1],"empty-content-image { width: ",[0,200],"; height: ",[0,200],"; }\n",],undefined,{path:"./components/empty.wxss"});    
__wxAppCode__['components/empty.wxml']=$gwx('./components/empty.wxml');

__wxAppCode__['components/enter-panel/enter-panel.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"enter-panel { width: ",[0,686],"; height: ",[0,300],"; margin: ",[0,40]," auto; background: #fff; border-radius: 10px; }\n.",[1],"enter-panel .",[1],"panel-header { border-radius: 10px; height: ",[0,100],"; color: #fff; }\n.",[1],"enter-panel .",[1],"panel-header .",[1],"title { font-size: 17px; float: left; margin: ",[0,26]," ",[0,0]," 0 ",[0,40],"; }\n.",[1],"enter-panel .",[1],"panel-header .",[1],"more { font-size: 13px; float: right; margin: ",[0,48]," ",[0,40]," 0 0; }\n",],undefined,{path:"./components/enter-panel/enter-panel.wxss"});    
__wxAppCode__['components/enter-panel/enter-panel.wxml']=$gwx('./components/enter-panel/enter-panel.wxml');

__wxAppCode__['components/homework_answer_input/index.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"answer-input .",[1],"question { line-height: 36px; }\n.",[1],"answer-input .",[1],"options { margin-top: ",[0,20],"; }\n.",[1],"answer-input .",[1],"options .",[1],"option { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"answer-input .",[1],"options .",[1],"option .",[1],"option-num { -webkit-flex-basis: ",[0,72],"; -ms-flex-preferred-size: ",[0,72],"; flex-basis: ",[0,72],"; height: ",[0,72],"; background: white; border: 2px solid #e5e9ef; border-radius: 50%; text-align: center; line-height: ",[0,68],"; margin: 0 ",[0,32]," ",[0,40]," 0; }\n.",[1],"answer-input .",[1],"options .",[1],"option .",[1],"option-answer { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; line-height: 20px; margin-top: 6px; }\n.",[1],"answer-input .",[1],"options .",[1],"selected .",[1],"option-num { background: #FF9600; color: #fff; border: 0; }\n.",[1],"answer-input .",[1],"options .",[1],"correct .",[1],"option-num { background: #50C341; color: #fff; border: 0; }\n.",[1],"answer-input .",[1],"options .",[1],"wrong .",[1],"option-num { background: #FF5A5A; color: #fff; border: 0; }\n.",[1],"answer-input .",[1],"jieda-answer { margin: ",[0,80]," auto 0 auto; }\n.",[1],"answer-input .",[1],"answer-upload { margin-bottom: ",[0,60],"; width: ",[0,686],"; height: ",[0,100],"; line-height: ",[0,100],"; background: #fff5eb; border: 2px solid #ffc38c; border-radius: ",[0,20],"; text-align: center; }\n.",[1],"answer-input .",[1],"answer-upload .",[1],"title { font-size: 16px; color: #ff7800; }\n.",[1],"answer-input .",[1],"uni-input { margin-top: ",[0,24],"; }\n.",[1],"answer-input .",[1],"inputing { background: #fafafb; border: 2px solid #e5e9ef; }\n.",[1],"answer-input .",[1],"unwrite { background: #e5e9ef; border: 2px solid #e5e9ef; }\n.",[1],"answer-input .",[1],"unwrite .",[1],"title { color: #BEC3CD; }\n.",[1],"answer-input .",[1],"jieda-answer-noreview { margin: ",[0,80]," auto ",[0,20]," auto; }\n.",[1],"answer-input .",[1],"jieda-answer-noreview .",[1],"title { display: block; width: 100%; color: #FF7800; margin-left: ",[0,-12],"; }\n.",[1],"answer-input .",[1],"jieda-answer-noreview .",[1],"answer { display: block; margin-top: ",[0,30],"; color: #323643; }\n.",[1],"answer-input .",[1],"teacherword-anlysis { font-size: 13px; font-family: PingFang SC; font-weight: bold; color: #323643; line-height: 26px; margin-left: ",[0,-12],"; position: relative; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"line-block .",[1],"title { color: #FF7800; margin-right: ",[0,10],"; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"ifcorrect-pic { position: absolute; right: ",[0,32],"; top: ",[0,0],"; width: ",[0,142],"; height: ",[0,136],"; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"ifcorrect-pic.",[1],"correct { background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAACICAYAAAAxpNMVAAAgAElEQVR4Xu19d3yT1ff/+9wkXewNAgKKA0VFQVlNm4CKrLagKE7ECSoqbnH7ca+PMhVFFDf4oWmL4ACSDkBUFBQFBARk70KhK3nu+b3ukyZN0jSjTQH9fe8/Yp97zz33PifPPfeM9yH8Xwu7A4Ptlq5GE3oR02kMNAEQD6AI4K1E/GvZ4dIlCwYtPxyW0L+oA/2L1hLzpaTlppxPJO4gos4hiTPKAV4ADR/YrI7CmDNyAhL8P8EJ8lKG5nRPMjZqeCeIBzIo8j1iLgTRczazfcUJ+K5jylLkmxLTaU9cYml5/c8VJB8B0KZmXLJTMj2TnWJfUrPx/4xR/yc4Fe+p+0/dTe1KG9xEkq4EQdTq9RHKwZjwb/7y/J/gAMiwW7rBhHvA1LFWAuM3mEtI4KHMvo7VsaN54lD6/1lwKD3fehExriTi86PSZSJ+f3TEJV33zUvNWx/xkH9IxxNacEbMHmFwtd99uqZRO2LUhxRl0ij3opw25Vgd+6LeY4YYvNRylpHRl5j6AWgZNY1oBzAOOcl531fmgr+iHXoi9z8hBSc9N6U9DOIqYpEKcP2gG8g4BGAjDLSBNf5LCmwjo9gnSrQy0gyGUoOWGCdkEzZQa8GiEzOfBkFdiFHv2L4Q3gsgQUr5VHZq3i/Hdu66m+2EEpyB8zvHxzVofzMxhoNgqLtlHxfKGgOz4nbaP5lzJbTjwkEMJz1hBGdwfnITI5leJMYZMVzfiUhqo2TXxOyU/F9PROYi5emEEByL3VK/sQmTYnurCbkFBwDaxMzbGbxTgPZK1g4Il+uwrJd4pLiosLSJsYGG+DINZfGGYqPLRIa4JCG5vpFkQ5ekZgZCKympLQm0A3NHgBLVjARmBm0CwwRC+2BcqD4gymeiWba+izdG+rJOpH4nhOBkFFifBcNcJxvDKJfgP4jEr5LkGoMTa2PuFmDQ8OWWtpoTZxJwNiSfC0F/M5BKISzPbiETPxNzzt9Jh5eu6LHCWSd7UAdEj7vgDC2w9DIwvRjLtTHzPhJiCTMvKy/aunLBoA1lsaQfCa0BS3s3TXAlXEhAXyao/yaEGseMo8T8vRT4ySXEmvl9Fv+tPl+RzHU8+hx3wUnPt04h4KzaL56OMPFilq5F2eb8306kTR+4fmC8YWdpsoH4YgJdCIRX/BlcSoRdkDgCEmUAa0RwScAFQGOJEkG0S9O0tUVMvzisDvX3Y9aOq+AMye97shFxH9ZytX+CpK2sVdLiBactOOZflmh5H5hnbhEPw2AQDQXQNKLxDElEBxjc3NOfQfuo8v8PSOK58aJs7pw+y0oiolnLTsdVcNLzU0cTxA3RrkFXLoEfAPos02xfFe141X/g/J4NExolnqxJtCNJLYVAc43RWBAlgTgOjHgiFgxysgYnCZQy+DBAB0liH7PcSUxbC4FtNfm1K99Y+9JGF4P5aiC4Eu1eFxcpOxAYZSDy2rRY3wOxm8Ct3d2ggTi/rGjbS8GO5mEL+zcr7RB3JFY/ruMpOJSRb/0kWi80M34UrM3MTM1bE6nAWOwWYwMTnWFgeS5A6lg8A6AWkY4PqZu4j46NxLyWQWvK4fp5QUq+MvpF1hgiIy/lYhaGUQScFDiIGdmCuBWDelZ5BvxKbmFOBmFZuZMnzrc6dvn2G7H6rDjnwRZXMcQ1AA6w1F6LhSHyuAlOem7KOSQMEyPbXb2XurZOi9TjPMJuqe+Mk32YDX0BdD9WFmP9pkTYwkw/CmBJ5iL7b3gaMtw6lXA3MiCDCDcA1KDySFLkqokJcgeQ/akJfJKT7Pg+cI5hedZUCYwlQit/eviquPjA298O+PVoOL6qe378BKfAOp4YaeEZpyMM7f2s5NwsUOgXMGI2DGWtrb0E8WUAegJkCk2fnWBsJ0E7mFnpEAeIxWEiLmMhyqGxBiYDCRnHRElSclMwmgtCMwhqw8wtQ1239bkJ+5mxWEP5vHnmJX+HW2+G3dKYjRgD4NLQtOkIpOujQinmBh6VaUstnYWGuwA6r/r5eC8J/m9m39xl4XgK9vy4CI66ZcTvKpnj+8sKxhyDlkiXfDOcQ1PfbEFpQtBQXwUygKYGwp+Q8jcQrWEpN8btzttRG/O/xW5JaGTQTgGZziDox+C51Sm8SichxirNSLac3vb8cD+CtKUp55NLPEREbh2m8pMhQTzfCdf7X5kLDvo+UvtARrqJGYMjjSli8MKjpcbJCy9ZqHx/EbfjIjjp+anDCOLu6rhkRjGAiVkp9m9CrWSo3dLcYBBXM3gwkR5AHtD4CIDlYFomD5b/kJ2+RCmaddrUTVHA2JMgkonRtZoXuJPAnx504etQivWIpb0Tna6EcSAMdDPNq6QBk7P7ODb4LkIdc42FHA4S1/sq0BEvlLlQYzkpJzVvcaRjjrngVGzGR1Cf+yCNgHVaSfmz2Zcu2VHdItIK+jYATNcKpoyKjAPfrhqDfmJN+2Z7/SMFx9MaqwSbTBhATIOCKr6gXSQx05a6+Dv9XlRNS3OkWg1CyMwUe25gl/R8q1Ka7yDg5EhferU/2Ai/8Gr8MRec9HyrWuQI75eXUUwE9WVoSUDO34mHJ4V42TQs3zJYMt1KhIb+G8BFTMgul1pWVLea2u52ZOMpbWlKN9LE5UTUG+wfmspEa4XmmhjNTVGFnghhvJPBVW5bkbFUXS/dkDotK9k+PxSdYyo4w5ZYurKkN4NYTl2SMCk72Z5dHbOD85NPMcJ4H4HO9uvDOCTBn8cby7KOlfGrNi9m+JJ+HaSU14PJ6neMMSQTsmTh4fdyhq5QR3XQphzCjQRGQVAGAcba8BJ6LK0oYefr36Tk76zmZKi7qX0puxXisgcJsp9vmKbSZ6RBPp3TN/fHoJwwKKMgdSRD3OS7UQyUCmCO0VD62T9BYALXNjy//ykayzFEUC4In8a5NrPj6Sp78TREev/UwQTDTQA3PjZvjUsgaIatj31uoAvnmHxxlPLW1KCdqwnDacR0q/riqBdPoFJC+cOZ5oI/g22EMs+bYJggiLr5bS34ezYZ3szutWj3sdnAupslPbdfHxDfrX4Ukvi9bLNDXQj89B09mN5IdwE4te44qZ4yg3/XYHxlnnmh15xwTAQnvcDyAEm6BIQ4H/Y2CkH/mdt38ZZgLA9f1u8C6eQnQWjkfU7YLzWamJ26OO94bGBdzdl7ae/EdgACv5yD7JbWcUaMISClboLpo1gRoVxK/ih+V4vP5lw5R6tbwXkaYlh/670MKIeetzH4oAbnvdUZxNIKrMMF4w4/XYiRXxZX/NqCXv/+HG1183RpCVcz46qAH1sUb7puukrG4yrZsM4EZ8Tss+KcbVpOACgVDAmCyqluqpx2ZeVi/IL+QSLfGJReYLmDQFf4iJmy7k61pThsdbMVJxRVysjtdwmTvJWIvJ7wE4lDSfKF7OTc7+pEcHTDnAlPgakrAy4CDjOwnwgdXIyH5gXxaCt3QXkbyyMEuthnow5ohCdzku2/n0ibVxe8DMtN6SJhuItELGKT6oJDN02N8WZOij0r5oKjHGtMdK9H81febAb2EvFAYnrelmJfFLgslT9VftK+J4mR4nnGwCYhyh7J7Lt0T91tw/GnPGzhRc04rt5tTHxJWL/X8WcXgJxuM+d+FjPBUV8ZNjqTggVmMeMlEtzOluyYUWXt6njKtz5BBKuPEvybyckT5lgdyjD4r2wqHqdtaYMrBegaMJL+MYsk/li9x1oLztDFfc82xsVdwxIaEx8FRAMCq1AGd1OGLbjGZZnz1wQL50zPs44nqvSSM+GXQ06e4LA6Sv8xmxklo+kFqWZiMTbaWKQop6mb7oLm2vounlRjwUkrsPQAuAGxmKBsEGygx+DixwRxop+Bj7A9LsFw55weVb2vaQUW5W+6xed4+vWQix/+twqNsn6b2DgOAXapaN6wEUac2eBcrC76OZphMevL4G+yzI6XohactALrGULiHhC6KG8tg5oQQC6UPy4orptgjK8UBGYDiwfmpiyussph+ZZkCTzrOdeZeIM8WHRPKHN7zFZ/jAld/N3FjeonukaDaUgkgeqh2HvxnCk4s1EXPLHqAewq3Y5HznoWGw6vw9ub3jg2q2Lk21LsT0YlOBl5lgwQ3QnlIyHeBiZlt1Kn0cQsc27mpd9cWi8pseRskHEUgLMYyMwy26tE+Q1Z1K+twcTTibxn+x6KE3dk9ly0/9is/tjMopR+Z+t9GQDfWKNwhwA2Oyaeiv92fxcHy/Zjxl9TcWOnMWie0AJbj2zG3Stv0nu3jj8Jp9fvglWHVuCQqy5Q5WiFzbz4gYgFJ82ROsJgoLHqGGLgb1l4eKxo1PAzt5eaC6QU30HIJAGyMvhCMHYf0jA68NjRg7RLGk4GcLpb6FDKBh4XGGNybF5t3c2SkdfvIoDvAKFDrGbJaHMVRp16u07ukPMQkkQSTAYTXl/zHAr2L0bnemfg8bNeRKP4xlh9cBWe+N378Y8VCyqeYo0t2a4iHMI3BaIoyPBapTeXnVLiE0G0DURmELcEowsEjydJ4xm6nvN6ltm+PJB6Rl6/cSAe7v0747lgV/TwXMWwB0MMd1hOcprQzshozozGkijOwGSQxGXEOCqFPMCCdiKu6O+cHtV7r1W4AxkMY8HoHUMOdVL/Pe9ddGxwKl79/RksPZiL585+C80SmmLsiuuR3uYqjOw4CgmGyry/O368HjvLtseWDcYWW4r9xrCCo9tYWu/7kAhtAzlg5rWk4WXEoTFJGnO0oen+eoecPSTzhVmpjtcC++vhkJp4vdJewfNsZsfrsV1ZBNR0E0D/LsRabwadS0IHOggSQehPS4+bccopmdaqKFvqmE6oV369UEgbYWOdI+CxmmNqxf7leG7No0igBMzsNRcrD/yEdkkd9CPr6x05aJ3YBr2aJ+ujbVvn4MMt06KfLMQIBu/LMjtGhBWctDzrYEF4oILWnwB3YqYDTgM9HKfxzUzoLYAFDDqJUD6dYZzsMojR8/os9hP1gfMHxsc1KH3fGwnHvK1Qw63H8galdCthwiBB8pKo0mMI+wE5w9Y39+sqJgUGpS21DiLJNxNIYSDHrA1ufTn2le3G8oMFGHPqeKS2vATjf74Fu8p24Iq21+PaTqP1uUpcR3HfL7frf89oczVGnaoCEIAjziLc+sNVKOUYWjYYxbYU++CwgpORb33Ho4+QUbuDXeJSgFQM7GMQrJGkC5iYFOKDy8nlZKTTgynEaXmptwrSc3ugAreFwN3HCh8vzW7pDAPdIIC+kQZxu98+OwH6Uks8/HGw4yktz3wukfEuAk6LmbQAaJfQAWM634ezG5+DTzbNhGPPt5jaYxY+3DQd64pWo1fzVGS0GwEppa7jqDZzwzSc3qALerU0Y2/pHv3Lo9qHm96FbftnMWNPvbusZEf/kIKjrMFGI2Z77DKkyQnSKJoQ872S+MXiBNPP9Yq1XiAMBWE+JCeVGssWf9Nn2QFfTocs6t3WGBc/s/ITfmyOKMW/MEJpk/2jN+dzgau87O15/ZdVURKGLenTkmXcWAJSYxnu0MjYGMPaXo1BJ2XAxeX4YsvHyNr5BYa3vQZt4tqiV8tk1Dc10L8kH/31HpYfXIK3zn9PV4ZVW1+0FhPXvYwi1yF80Guu96tz14pRMb1haYmHQ39xVJARCX5e/+0xVPLWHgIOKih6/WXEG27kcvmlziGhXGOelGN2zAsU74x8y9O6l9z9tTkY58INde1OGJpnTTcI3Ba1OZ95s8ukTZrXO7+K7UlFMcbtKrsGzFcFz6qo2Q+7TXxbXNo6DQPaDEKisR5+3LcM0zdOxD5nZZxan2apeLDLU/oE9l3fYOKGl9G/xUDc0nmcVyF+dc0z+PPwWtx4yhj0baFvt96+2TkPb2+MnZ1Hc3FoHWfYEms6S9zrux26t5tJHVMTWMJI5MHUYyeVGa7OvNjfFqMMhsQ8zfOL93hXa7bF4UcN/L5nwzhn4qME6hW+d2UPZhwm8EzTLkdOsFyrjDxrfxDfHpVuFIaBcxpcgFGn3I5TG7hPOqWrKMF5fc3zKNhfxReMke1G46qO16NUK8W+0r1oFt8U83fmoHuTnuhYv5M+3khx2FGyHZ9teR+WlpegVwuznlf4yMq7sOHoumi2pNq+LpSrdOXqW0ae9XKQygis0v4A8zImUrgvKgkNBPom07z4pcCe6fmWF70vkXmbaVeLG1UEWUxWEEBkaG5KJ4MwqC9k5KjorHxsyGYqn5mdXDXvym0p57tA1DXWPE/s9j7a1++IQ2WFeP+vKahvaohbO4/DlPWvY+Hur4JON+HM53Fh897YWLQez//xGA469+HGDmOR3t6dOPLjvu/xyton4YJLNwZOvGCmrgdtO7oFD64cGxNFmaQW2o7j/pXh8Ug2jOC8PTB2OGNJv1NZync9XxupyWezLbn2SOhF28ediy6eD5cd6k+XV8CFyTarY3PgfAoYKdGVcAsTXxa9fhQZ9+/1mA0jGfHE6vuwtWQz+rUYiHFnPIhnfnsIKw/9pBPp1ugi3H36g/hh3zLdreARhm3Ff+P9v6Yhre3luKDZRThcXogm8c10Ibznl5u8Oo2vUL2z4S18vSsrMuZC9wptOc5YZukIF80MNxMTr81Kdihvr18blt/vEQYPUH9kxvasxfYbIknADzdf4HN1uxFkeMmDwxduvBv7j6YFq7fgtmzXv4JZXOfjEglHskbPB7cejo1H/8TaIjf4emrzS3HvmY/ogrP+yFpce/LNuPSkITCQAU7Nidt/ulb/wtx/2pNIbmXRx6w8uAIzNk5GoiERr5w/Vf/bvG3/w4zNU/R/1zPUx6QLZupCFSvBYZLhfVXpeZY54cIYg+ktKo8ZRsz23KRYk29kWXJzarTDIQbpXzXmtyJBo2BScGnyk61/HPlyxe1V8faG5FuSDYwxRFTF2BlrvoPRu6Ld9bi242jk7lqEbk26I8lYD1/vzEZDUyOktroYH2+agf9t/wQeRflg2UHc9OPlXlKPd3kR3Zv11HWae1fcgm2l7jyAsxuch25NL8IXW2bqR1htmkLj0JieiMCOY7kf0L26QZtSlpnKhwfqB8PyLCOZSHesKMUzbtfuEXOu/KO8NkwHjlUQtyaY3g6HkK7bjYgWFIvSGYGmAkXTrRuJOwHqHgv+VOjDkLYj0K/FJfhy2yfI21dV0Q02zyvnTMVpjc7UH20+sglvrnseW0r+0r8aUy6Ypf99zE/XIN6Q4L1u37J8JPY73UGSp9U70/vV+Xjze/jftk9jsRwvDQbWQ2qTslLzfgsrOOm5KX3IrXBWIzj8fZbZ8Wjgw4w86wdeBx/TbFvK4tjavp+GyLjY8jrYP+eqCpPMq6WgydnJ9ipXCj0HnU03CSZlh4oJIHdys364ruMtaJXYWv/lv/THU/jp4NKwL1BdySf1+MBr1Fu062tM3vCKd9wdp96PS9oM9hr0PuiZiUamRn76kOp8T+cJ6NKoK55e/YBuSY5FUyYUEL2X1de+wGM5Dys4ylUQ36BUaVRBfTlMeDUwz3hIbsppRmGY7mFak9pNOal5m2KxCA+N9ALrNcRw29aDtz0k6J3MvourIDC4A+NT08Dixqo56DXjskuDczGq4+04o1EXnUD+7kWYvfVj73ERjuqoDmOR0X4E3l0/GVeefJ1+TN2/8nbsLd2Fy04ahsvbjdSNf99sn6cryZ/2ytGv7hNW3os1R+oKa5udkjCXE4pmBVrOwwqOWrDfldpnB9QR4ILr8kCcFl/3AjFvyExxhHrB4fa0ynPdAy3EjGDORGaUEfjzsjaJnwXDu8vIt3YH69frmJQY6pB4Cq7veKuuW6i27tAazPhrEtYfXRvxutRN6Y3zlWcHuGn5CFzUtC/Gd3lMj7tR3m4lIBuK1iN/z0Is2rMAJyeeghe6vakrzKN/uBxHtdiHZhNhaamTpy2wOrYFW0hEgjOswDqcGeOCEPjLZrbfXOWYyreqoPRT9L8zz7ClOD6OeBcj6JheYH2F2D/nWiltkskhDGVvB8uMUG4PQ1z8WAJVxkNHMFd1XdTLvubk0ejT0qLfejxugG/3Rq//TzjzBVzYvBe+2PwRPt/mvsQ+3uVldG92oX7cTfvzTSza67brKH3nqbNe0XUhx67v8NaGmEJEq/e1WZM8NcdSTS5/xYZEJDiBR49nMxmYk2W2u++AFU3leyeQ4QuvD8fIo229q9pJavrOVKyzYHrVd7yutBm0SVl98n4LpDv0p+5JhpKG1wF8RSzCHZTim9b2Sow4+Tq/2JeXf38a3x+sWWZyc1MrtIhv5XfkKMH87wXvIX/PIkzdWBl58liXF9CjWS+sP7QWz/zxUAy/NlxERB8YdzTPCjTQDs7vfwpQdtD3ZIlIcHTkysJWC6rgukjtsazUPD/NLyAMY4/NbL+qpkISbFxGnmWSx4qrlDZmmpFtts8PFu6QsST1MrBQwfCR4QmHYVQpvuor06ZeW93sX+Yq9ToYl+3Nxyvr3L4kT1Nfh/Mad8dfR9bXSFFV4wOPofMadUdjUzMs358XEyuwyrGT4JziUuMHgXBuygiaJBNuZonLJMT47JRFXmUqIsFRG5Geb5kbGG/ihHN4oH6TnmedQIRL3McUFthS7JVXg1pK0NAC69kGxmQV7lCd0qbzmptyDoThTtJhaWvXVMBUz2ZmXNH+OrSr567psWS3Ax9sfgftktrjqXMql+ex+KovyBUnX4N+LS/Tzf05277E+5v9Psy1Yyp2o392wjklsAibDg1n5BFgcY5+KSJcQILH+YbBRCw4ftdrt1TstZkdVwauISPfqowHbl+RJl+xWXIXxGqdGXnWR0mgPjl52twgSps73CHhNobsFws3gQpzePGcSfoXRjWlx7y94U0s2V/pNRlz6n0Y0MZt5lLm/ry9i3BZmzRdYJR+kr97Md7bNCnkkVLf0BBHtGNa715hEE7NNDsKAt9NWp61L4HH6kZQxn4mHFDxRq7y0ut8Q0wiFpz0fOt0/4AlLrCZHU/4Tqw80wnORJtHvykXdOP8amBMaiJM6UtTzgmmx6gCaQkN242UTCPDFduIZt5rO9yMK9pfqw/ZXbIT//n9UWwv9Uec9TXp+9LeULQOMzZOwdoj1ddyVWNHth+l22du/uHKGOor1aySUMzAJ9sSDs8JhMvLsFs6wqhD3FYaQZXgKBwjoka2RYvTfd1FEQtOhu9NSfFVkQrqy6Ie1C4MFYEfXGJLdijY1DqtgJJWkGoVUtwOHxDoaIQjVN+HzngGvVuY9RCGR1fd7Rcf4zvO42Py/O3LLZ/hk63vVktaKdjKoXlNx9FeHenun27B1tK6KdupW86Bb4sNZdMDLeehjKAKLY0NmCok2trMdq9dTn/9kW5yBXx+JWS81F60peZ96zveD4a2Io0iUvrR9lM3PQMZxhFBncN10ka2H43h7UZiwq93h41lea7rW3qop2rf7fzK7ybky5yvZdn373UlOCzxh5Q8KcfqqGJYGrK0X1uDi6eGNIIyZNmRhEELBvkXWIlYcNLzrPMqg7YAltrdymfhu/iMvNRxIKGnvjDju6wU+wuxfqPKP2Vgwy0C4rLo4oej50R9GdoldsDmksoidioN5bKT0rD20O+YsuEVr9OwU2JnvHrBNK8n++6fR3tvUopOr2YpuOrkUV4FO5CbMT9eh90xchG4afNeqfG72ZZcBYUbtLlDehPC2Nh4hc3s8CQreOlEJDhDc7onGRo39IsskiYxMhCDb1iB9Xlm9NGpBznKon91lSP0WgcCl8NA10fiCa/NXKHGTuv+iTcQfNq6/8LX4HffaY/B3Kq/PlzF/z67+hH0aZqK4SdfrfuuqmtrD63Bo7+pBNnaN2U5F4TZB138abgMkhGzeyeWt4mfRUSq1ICoMjtDSiPfHixZMiLB0aPgGMoL7ZYJMB904dJAVHBfBVoyXstOsQcPY4tyf4Y4UnsbjXSHJ+U4yuEx7Z7crL8eM6OsxbtLduGuFTd4vzoqO+HN7u/pz1RTLgFPFkIgE7tKdup+qNWHVuGrnXNrrRi7yzQit9yFdwIryCgjKErqp+eYc6ukO2TkW+aDqBhcFbCcwN9kmh1VojrdMhBBCzDqqWOoOCvFPjhwaEa+RcXf6OV8NOJHg1U0iWA6bxeFCaxpfGdVSNdoqMS+75DWl+Pmzu4vxLvrJ2H+7kzvJE92eRnnN/NHoFXX8s1H/sIvhT9gTeFqrDvye60FxXdVzLyBNEyxWR0r/VaroH6VEVSKmyHQwJZs14PqfFtGgfVzt+5cpQxTmclQOqw6KOCIBCe9oN8DxOwrKEEtwhkF1m/AbmRRZtedWSn5f9TktSlNX0jTKIAyahPuoHSLro26YfWhlUEDmBobm6LQ5ZfJEzG79532BMytrLptx5N+ktKsP8acdq/ulFRtV8l2fLNjHnL3LdIj92LfqJAgZ2QucswPFllZEYP9vmde087mFwe6EzIK+s1kyU0DFWTJ8tPslNxqr4aRCU6e9XO/mkcqDDTFfp3fRsyGIaONdaHnbzUKpWCIYUutQ1nDaD+Y2hruuMpHur7TLbDv+g5HtcNom9ABzeOb62GUKkRBtQd/GRv2xhRsemUcfOv89/Xr9KqDK5AgkrwhFTuPbsenf8/UgQDqoqngOQCZh1w8yxECtSxQ+S0uNg35dsC3fjWq9MgHpgv80E0ZxWVHiq9eMKh6hNewghPUwcm82ZbicOefVrRABVq4+Ppg1t3qNnJInvkCozDeAY4dCLRvRJ1nXqVbrDn0K/4oWq3fjLaVVolTj/hdZ7S9GqM6VUaMKJ3my78/wdztn9Y6RLM6Jgi0XErXlKzUPJXbFrK5LenxX3g6BRWcgn7TiNkdduhtbLOZHW+FIh5WcAKLdihiyhudZbbf5ktYx8ZJcnqT8SSVX5udXH0FGM/Y4XnmNhLGsUScHMusyCam5nj3os+8iur/tnyGnJ1zwmY0quNNORF9k1HUiHYAAB2hSURBVOGCbaDyR919+sM4p4kb9F2/nq9/LeLArXAvPfC5gpYhpim2lMU/RDrWDbBNXoU4mOD4pnh76GoGHpvTp6rdx3fekIKjCk40NorPAPYWEYVeAF6uzE7JfdiXkCr61dhIXr9UeTndOL9/cNR0NU6BQJe54q4TEFfUBQj0gFZDMea08XoWgAr8nrPlY3y61XvcB937Ho376GGf83b+r9q8JjXw0hZDcf0pt+jHnVJ8v9zyKb7c9lHdfGWYjxDxLOPOlnOjzUdzuxEqs1S2Jh6+tIqrIc8y0z+oLbgPMnDDQgpOWr71JgFc7zeIcIgZh7LMdoW6VdlUDHB/qzcq2yW12+al5q0P8oYoPc96KQG3VlezKtJflOp3cYvBSG7ZT/cL+ZrsFXZMkatQR65SCfsbi/7Eo6urxqKpWN+eTZMx4KQhaJ3odmYGi61RX6KUFpdgWLuRXiOeitB7ec1TWHekRneAcMtUsPfzi0oNM6KtXuchPNhu6Woy0iT3/7PLZna4oxZ8Wnqe5TO/KnyMb20p9rDRYdUKTgUsia2q05D1CrfBPOPp+dYFqrCHxvxBzmJ7TqCmn55nPgtQbgIKOFPD7WHw5+plTu4+y8+4tr90H3aUbMXi3d/i+/25esyKiv53SRc2lWxAM1NLnFb/TJzZqCsuaNxDz6QMbLctvwZ7nX7FdHFN+5swokPlfUBlUr70x5Nhj7QarYx5JQxisq1vEPT5KAiqImgEeOwwB2xme2UuTQWd9ALrPF+DKkO+kWUOn8ZUreCk5aU+KEgMCsLnAYATbWZHlWcZ+f2uN7lkZiCggI4aYaLbwHxxLMIdvL+o1pfjlgp7ivr1rz38B+ob66NNYjuYyITVh1fht8Jf9LiZDkmnoH1SRzSODw1h49i1EG9tqOopebHrJJzZ2F0qK/bRd95d3kmMd4JVwotCXrxd0/OsA4jwSMUfNtrMdi/Cq/pbBayen79RpfdGUnAtqOAMXZ7SyVBmeK8aX5DGzAfjdu25NlyelB45eKDllUx0bSzDHdSiPdfheGMCDpbuR8uk1nj1j2d0EKLbO43HZW2H6jaWI64jKCxz22oOOt3/3V++R/97YCssP4BFuxcE1VXu7vworK0vqSOh4RIwPjU13TN7TtfY5Z5l5FmuA5EeE87g5Vlmh0eI9KUH3rrU3ySVpwXLoQ/cq6CCk55veYmCFEj3HSzYdc3caqqn6UzpNa9ZZUVW76Spyc+oYsydpz6Ii9sM1IGHvtudg9e6vaOjNag87Gk9PsJRVzHu/eVmPwtt1wbd0Ku5GQfLD+gZkdE0FQOssg9UlkGssgpUuAOYFkqNp4erdBwNr56+GXnWh7yFYJmzbCkOVZ3Q54vU/ywi6c4V1huXBDtJgs1dRXD0z1dxQwVZVtXp5SFPOGpw8phgdhq95rULd9YGBDrcJvVskoxHzn5Wj7hTmY1Kj2mf2BEXNO6JNklt9Yg8hRWzdL+79uk5jS7AzZ3uQof6HfH93nx8uPkdNI5rqscPbz76F/637ZOw1/RwPEX7XOEnAtqkmlrXI5kvo8AySRVi0UWCeUpWisONZVTRAkElmHlXVorj6khoVxGcjALLzcTYLZnGVkm6V/D6zAtcwjWj2prXgNJ9YpIVGWwB6pf/ardp+lX4zbUvIXdf5RGtrtOPdX0Ovxf+hsdX36MjO6gkOYURs+XIZszYNFk3/imL8hUnX+t1QCobzKO/Bcv+iWQLo+zD2A8DTbf1DV35N0qqQbv7hsJI4gezkx1uCAyv4FgU/nLl7TiIYbc6PvwFR69/2S8bLAsZSPAFG2DgVzbwpEAXu0IldbXZM5yZbogFCHS4DRvUepgODP3J5vd1mDNPUwa/15VAGRviiV/vw4XN+yLtpMtR7DqK2X9/hG9356Bz/TNx26l3o1ODzlWmeeiXu7D+aJ1cq91zue1fX8Ybyz8OdBy693DvQGNyiwVzKDbYQcPtlnbSSB95FhosscAXKa2iX9A8uWDvxE9wPJZGlX2poPZ1OwtjN4jftpkdjkACsax57aFdE8ejupY/3fUNnN24Kz7b9AHOaXw+ujTuioW7FujIVKpd1+FWWFtfip3FO5C57XP8XbwJYzqP96JhhYraCyfMoZ7r4Q5MBSVwTQtWUXfoktQLDRrdwaBNWSn2Z2szl+/YYQWplzCLCRV/q8YpbfkoIFRlq81svyESHvwER9lZiIxKWfoZjDImrI1rsvvzQE2/rmpeP3Lmf9CzeV/9WHlk1R0R5w15FOVNRRvw7O+P4LVub+PdjROx4uD3GNA6Hdd2vFHPg/p88yy/wCvlzVaptqopxfqa7/0qQEayf6H7EDZKoU3J7pP3S2DHgXZLuwQTjfUGvrl4fJWwiFpwkJHvgzJCWGxLtv/Hl5yKQCA2ZfmZRxiHbCn2jEim9RMclbckmCcRxOIydr4TWPhdr3ltJCWRw2Jd8/ra9rfiig6Vetmba19E7r5qox69a7u54zgMaTdMD5pSUGUKFsQTqqmUX3VN/3bHPHzy9wy/25ACCbjvjMd0YGnVfi9cjcdX3x3JnkXQhwpJ8AeZ31U1gqqgKiptcIMvkDYR1mUm28dEQDjiLr5pSsR4MzPF7gfFpZcMIH7Zl6C65ZUXJQ4MjC8Oe1Tp8bxkalkFEkQvymoZxBA3x7LmtSfaP1hopUqyf3CVu25BsKbG3tTpTgxsm64/VkfU7O2zdIXYozwrYXrhjyew8lClX1DZfzzH1pHyIszfacPu0l2xyox0KRhgKZwfVrGFKDT3JdaBYL4lMLGRhJyQ2Td3WcRSEaajG5TB4AbUAeAy0HWBgOXpBZZbiMmd++PTJGFMMEiYwH5hveOq5jWZxJ3MXFWjrMVKL2rSFzd2HKMnuylHoYJo3Vy8EQNbp3tTRp5YdR9WF/kHtakpAz3T3+8twMvrntS58T1+fKuqKEFTx9bIDjdAkxpsO+bg6x2ZER+HESz1ByFoarBy2BWZpeOCA2nzKpvZ4YfsGsFcIbsEgFpVjZ0CkFFgnarX3whsjMm2FPv/wvFQreDUVc1rBQty8yl34pwm5+u8/XbwF8z4a4p+xKjWvXEvPN7VbfL31C0IXMSVbW/A1Z1u1P+shOb1dc96rb0qye31bu+gVQWyeNbWL/W6ThntrkLTuGaYv8OGOds+ipkRD8zbXJKnzrNU/WIoy6zU4scIYkuwkBEVkOWC8/bAFNxwLy3c8/R869ue9GfJ/EV2isMbL67G6vWz4rW5wWx1DFqeZV7sZ2EONl8VwfHWvAZUem/YwhjhFuF57ntEeAK9FUTrDweXVCHhgf1QDx765Y6gWDPtEjoi3hCPjUGwe5Ux8JVuU/3QJFRS3ctrnqxRtF+wNep4gsCsQifPDQzaV0Da8TtLrmbQyFBA2gyalWVeHBacM9I9Vv3cFxfxoUdQg8XWBPiw/Mkzygs1Tg+XIeEnOMMK+l/CrN0aSxBo3yNCGe3U7WXu1tl6fQEPkOFlrdNR7CpGXoUyrLIF3jh/um6gq+6rE24zezVJxQNnPa4Hcimn5Ctrn4mNJ1sZQQUvcHFVI6jiadiSfv1YKiBttAzFIwO/x+203xMMjDvc2kI9H5bX71Ym1mtmqGJ0tmSHf1iMG0DiuVA4QZ6i9KHm0QVncG5KF2Md1Ly+oNFFuOWUcV49RiXgz9ryrl/g9m2d7vEquONX3OpNflPVUga0cV+Pq/vqhNtglcqiSvBM2/B6TI4mZvzGRp4YLM9ITyEC7gRHlFl6oIxdYwJvreHWE+65nntmxGyv8h0E1OrSVZfWSzrkVMeUnlQQvIWvtaFKN/cEWKGfh1WUwzGunitYkA5Jp+Ly9tfqKFOqBYM3UzEyozqN9abNqn4KN++N9W6cSqUAqwCs2nx1IuE3oj7KBSPkO9nJVcG9fTFkIsss5RJJND6Sm0tEvPl0ysjtdykE60CeSn8SZWJklRIJudY0ISrrpgadg7HflmJXUO3V5v2TgrUQhOeiZTKwv8LeVcgLJ9Vr743zVXrF51s+wKK9lUgnSmBUKqzCzFOC8tUOG4a0G47kFtYq+Ly+X51HV94dEvmhtvwHG6+QGoTkz43N9nwWaAT1YMgwiWsjzixllIMwwWa2r6gDfikj3/qeB0KPwAszzY4qaLHp+Za3CRQWN8gJ582hlHbKWGLpBkn/re1CfAOdFK152zLxyZZ39euu8iOlNu+P1JYX66UBlYVXVUfxQICo51O6z9TzkVSM8DO/P6iz44FwVXqK+mo9EqM02XBrVYYwZQSl4tLpmQOWukGEfZofhkw4YhXPVRKjBnpiXpCKyBGSCNltiN2SbDSSbh3WQaydNDa7nz9Er6rbJYxUPYyG7wxhSl7SsPzk0xkmN+RlLdplrdJx+2n3eCn4wqg+fMaz6NXCXe4vc+sXmLWl6nS+gvfAL2O9tyVP0Qs19rnVE7Ci8PtacBl+KAPrhODJwYqwqcxSKeW4GgBp73FJ7fFqYrDDMxWuh+6crvzaMPNPWSkO96/Pp6UXWB4gJndiJeM3ybyCBPUOhlwmJSZlp9rdRa+CNFI+k3gfL2o4HkM9f+CMp7x1klQVkxfWun1sHreA+ndgor5Cebi983hvMpsyBj688i6v4Nzc6U4MaesOld12dCvG/eIfI18bfgPGHgDJ94KVT3T7deJGEyMt+sxSWuFE+fOBYSgx5Bu+12s3+qp2V2CcTwUKvUqVcZtYCMXKwwDWXmQyPh/oQvKUBK9WcAZ83btpYr2EsJbCSBaqjG9vnj/D6/+ZsOperCn6VYdYffXcafrtSgVf3fnzDYgTCXoglfJYq+bYvRA/7V+mG+sUrIhSjq/tcBPMrfp5dSbV75FfxmHd0d8jYSfCPtWXT1RA2s7WlqEMGh0tkLZeFluT72en5n5Zl+BSbrtb/CwGNXd/SGhJlnlxlYo/Q/MtQwToHo+AUHHZVZyUMIPB3xHQgYHmKhrCo68R+IlgUG+eTSXdWLWr9OsIdzlst26NengBFRWc2YOr3EVl1JflhW4TdaOcyqluZGqs6zQq6OrdjW95LcfK7qOKYaS1G+7NwVY1tFV5ng1H/sSMzRXZHmE5Cd+BwUu08rJpwconDllmvsDg0uttdgpPqbKHJ4yiXOOpgagR0dCJtG9GXr+xINaxGPXUYKndFJjlqRdkMVB/CFnMktIk4SuXqSQvvjzpQhA/LAW9JTTXXpDR6/QkUXZVMLxor+Cof2Tk6znfMYva84Q5KNqT173qvVUNaJWmJ+Wrpr480/96yxveqf6mbmY3dLzdm+6ijqaZf03Bzz5Oykg3NGQ/5s0gmhzsdlNRP3QMQG6lLMLmhksTP0h2zqrLcFBfdirgZ1QYjP7ugrkX1N9VNi4zthiIiQWasxTE7FyhkdFkYrwA8ALNiK8NGnnqbYQN6NJtN+n5lmwCubPwY9B8E/LVlXzcilFeZ6Iy+FlbD8ALqx/Hb0XuspeB/iuVnfD5lln4ZldWTLMjVRUbkPwgbmdudqDFtuZA2lQI1hZDo5xgBdNisJ1BSbjrg5YqQM+T9Q6E3SZROjowunBAnrlNIowfaEa+x6CRsirvBNMAAn/PUk6HEK8QU1MW9Jc3h5z5LVuKwxaKd4/gfEaIbTaCSpMde8Z4fe6srXPwQZDC6YH+K6UYf7sjB19snRXb4HGGJolzQM73g6V+ZBSkDtQxZFTEY9im60TrmfhXwfS9cad9dazdBmFZ0E+JykAt9/GoPWJLya+SV56Wb70PJH857KRljY30ljRob4sycZCMeISD2HMYvCuuyZ5R4dJ0dMGpgigaCecR9Hn1vGno3OAM3bB3/8+3++kxnhAHD9xIoJc8AvIRduEVKuEzVFmAgfN7NoxrHN+BnMY2kmRTAuoThIlZSjKijCUfAmGf1HjbjrVHtwUrkhYhMzHpplKPQPxUpcc9uIsgzW7pIYx4CKBSp4tf0dOBmVerr5MmxVIS3FEAKnrOqBhTx61B44fnhqnj4P7AKcHxgbmPycoqiCgr8YvdJum3IlVM9JFfx+HMBl2hrtge0GkFh1adl7w2vKjyiZqGt+dZq4JA14bu8R6rgyUZDJO9ZbEJWwqdPCbQm62SIcsPtHofxCeBsYJBDqUcE5Oqwd5XLz5nLB3pdMVPrQQdoOk28+KIqttXCI71ZRAuqotNuafzo7C0due6H3EeQX2TG/gimJc8FvMrCy2R/Hhr4pEvA5EZYkH/eNLQbTFsmgJyI9fr4NUuHhtMt8pY0m8sJF/JwB8EvK8lHl6jak6l5aakCWHQdQgC/ga4PYMkJKbbUu2zI12fW8fJsz5JBGukg6Lpp+wxk3rM9IuNUeVyAr3k0dAM1ld3EzB9XWIsfS9Y+cTa0j/e4yuUd+UaOt1zrBDwbLDsk7S8/ucKyP/6Ol0l4b+Sy1cayfQMJIxMpKD2VenvPzXCxJxke1TGMbfg5FoeIFFhiq6DHbquw224vP1InbInNjim04QonxjTeY4TMf3YOdjqVU+Nd7fgBA8CU/pafIOkyQDcFUu8jUtYiudI8POqiAqYXtYEH60pwGfFrcqqCpC7K57XQVOhFlecfAMOlu/ToVlj13gvCfF2sPKJsZvj+FJSgFWNDPgPEfXwcMLgr7PMDr8MhYpnNCw35Uwmw2S/EA/GMiY+RECiKrEt2fVJdkp+reoxepRj/1TQ47tXYWdXINAg+UV566RPg5VPDEvgH9JBR0Qz4EVPfS4321xgS3Y8BYIMXEZarmUUmHcIgzcRz9tFgXlSvKk4ENS8pluhC05afuoIAXFHTYkcq3EeEGgS5dNCmcOPFT91OY+qNBgnDC8QU2V2CWNZocZPBsY4Kz6G5llTBfFTAjRPElp7Sk8y4TCYJ2WZHV5E2Fjw7RacPOtgQaiC1x+LCWJFQwFWMrsm1/YTGyt+6pJOep4OP6Jia3wq+3FuoQvPBRUalUgp8ToIOwSoAUM2UmUkFSKGMJQ/VRc/sgoDoMUCkH9dwLrcmShohyyfGAWdf0rXYfmWIUw0zgM0rh9OhOyshfa3goFg6wCRJnoTjEZqrwjU0O274oKyom3PLRi0oawu1l6h41RNB62LyaKj6S6fWHr0wEffDvjVD9Q5Ojr/jN56zA/iHiBGig/HmoR8J9ucOyfYKlTZIKOL36riKmEsMO2yv16XrhBdcLq/093U7qxGqlLuNbHOCa/Ra1O3ANamBYYHKMdeybYSCpfzU6M5j+Og9MXWnmTi+33TkpRuwk7+T7bVH9PGw+bA7y3t4srxFJGPDqSu2UR2W7JdAUbWaYE5v8yGjEX9TuU4+WAkwcx1ss+MLQBNDQYC7ZOvpAniiXOTHXUbQ1onC/QnOmx5/2ZcJu8gYqtfpidhTXkcPzv/Ioc/9GnF8Iwl/U6F5FcYSNKxFRlSRS9KovXbE4pWHQuLedWUGIZIy7dcSaAbQ2UhxnRfFQi0oJnBal6redLzLY8R6GL/OXmFdOHtbKtjQ0x5OQbE9PIFTRtcCaYRXp+Te16FbfzpQXeNBlWvoUpzl680PusLWu4OF6WFhzR+41h9javHOdZjkdVNi86rw73UQDzvSIlxZigQaN3cXtrgNmakBeC5SAYWSdY+y0nN21SHfMaEtB5Ds6dkKElcC1DjAKIbJeHVUPlW6bkpg0iIe9WNyW+s+uIY+H5b34CyQzHhOjiRcEl4NCzPmiaB26rgAdaWKeaVTnJNiibhXsfvkbiHCKf5Tq9H3xEt06TrixPxuu52ThrTQUgPFBhmHAX4g7hdjszqlFk9hytOKKflcFUykYmS/EGtkZlltk+s7SuJZnw4wdFp6agLMu6+cBC2EU68k0lOy0rOzQ/sr/KVDIAxJEA0g9IKLAMEcFOwHHcGNjHkAg3awrrMLAi3VhXoXnqS5UID4zIG9a166WAng+YdLTV8GOpr6977+KcIOCv4nFyoJRZdqzzf4XiK5fOIBMczYUZuyqVMBlWxTtkKomuEYgn+dHtC0exA5S0wX4mJvjrklJNDndcKVvfk4oaDJHC1by0tH6Y0ZvzKjAIYjN9nJ3+3IzqGo+/tLmyScIEKnxZA36A1twjlYP5WmgwfhzP/6xcCTY4PBcpJkFMzq7muR7+CyEdEJTiKrDs/x3g3QJZIpqkId/iOyo9Oz7z4h/2+Y8LkK+2A4FfDndvql+1q2y+VJavkq2p+lXp02y5IrILg35nEn/GNd28KFx4Zbn1p3/dvRS7X6STRFSS6AnxaFf3DS4QLITGPnAZbYD534DwVe3wPQKkheVDZoUmHRxzrr43iKWrB8SxkWL4lmZnuDRWnq2peC2iTA2sDRJqvVKG7LCgqMUyPpIKKfk3V5EBdqMPFD+tXWOxiwnaA9jDzAcE4pKLkJFBqkEIp3kZIGacJEWcg2RBQ1XKpGQitmNEuAr3PxaAVBPl1oQsF1d2UKmULlF6QOgQkbiEO/1Vn4q+ykh2vhRPwunheY8FRzIywW+o7DaTsEOoc99Ji5n3E4l1balUQ6Ip8pVHEOLM6qA137rYvPRwWAh8edHJ22M1XjDFoWIFVBSmlMqAgM/SIuWPSGMUs8BMzL4tPNC6b02PhoUjmVZB5bKQxwdJxqxtPwL2ZZvuqSOjHuk+tBMfDTEa+tTuA+1UJYiJ8YTSUfhaYpjHsmz4tZWK80o9SlB8FjPrBYPuZ8SMJ3gEmNyqkT1NxxASaaVtstwfz21S3OSpXSpgSuhFxV4DOqEgpiU0eGXMhk1gH8B8asGrnH4f/iCaYXS9dSYbRRNwrygqBe2zJ9pF1mSUaSthiIjhqAhVw1FAzNMq+eNHuwAlHzD4rztm61cPQhcYdUQ9gJ4Fb+3+pcJSI45ipJJQCrsoMqmorhzReFNEXKIAhvV5FUYO2bOL2LKktqdRXoAmYmjAhngATmONA0EBUDqZyBo4w1HHGByRoL1jbUWZybqlpmGpanvlcIoPKwOxTE2wiZv4kK8WhYE2OS4uZ4ITjXllLjQ0bjGCBDK8tQ9U18NNFVBE1UqEEkX0N9PGUpbnkgrqovhJuTdE+Hzi/c3xcvZP6CxLD2M/HFC0lKOTUm46n0fOYCY5na5Qxq4EJPQwSZ0JQGzDHE5H6hRvAMEimOAgYCVCZpQpHLxIAS40Yy5n4O1OTPUtre1uK/jWGHqEj1htM/Vnji2tkygggT8C6THNsAbWjXfMxF5yoGHwaYkj/vu0MMq6rMKAHS/QEISkkDaWcAstBvPRoqfHHSG5jUfEUQWd1FLYtbXCekKI3g/tWY2eKgFLwLuGQJGpMOIqBJ7bgBCxE6UplJ7XoKySlEeG8UMqk+2aGPIDagPg3Cf7dKOXauSn5yuMc05ADZY8CTGcQ01kEOpeZu9aZg5iwzJZs9xT3iOJVx7brP0pwfJc+dKnlTIOLbgh5G2FsBaGcwKd4hEzHJ5a8iQnbiLGdQXuJsA+CCsvL5VEuKSk2tnS5EhJKXHv3thQtAOMRg5ZIBlOSyeVqSEI0k+AWBNGGgLYAdyKgeZQ3opq+xa1lRcV3LRi0/HBNCcRq3D9WcDwbUGH/uDtaHJtYbeAxpLOR4sTDmT0X+Vnfj+H8flP94wVHrabCEn09iFR958huZMdrx6OdlyElcfZhF945VrE2kbD4rxAc79dHGSKZn2ZCKVVAm0WyCbHow8ylBKyFQfwJ1jZLjXdJEbffJIpLXeVxkuNFPJfJJiYTtwfoVEicCsKpqA6XiFDMzPlkxOehkDZiwXtNaPyrBEdtgO6vYn5dRf3XZEOiGkPYzxrbyYglheVYXRNjZNrCnq04IbETETUTGhIk8VGScvu2ekfXHosQ0KjW69P5Xyc4am0Kgley6Q0i1KvpxoQaJ5lXssAXOX0dy4+Xyb8u1hUNzX+l4KgNqKgR9YoezB27tlW6eGJ1mQexm+bEp/SvFRy19WkFlh4C9LxvcltNXok7pghzTU33TD/RrNI1WU8sxvyrBUdt0JB8S7IBpEIvPc7VaPdtj2B6eW4dQelHy8yJ0v9fLzjeL4+kx4OGcoZ4E8z47pDGEx1Wx5ET5YWdKHz8fyE4arNVOGacMI1myZdVH95Z8VqINhNp02NZYPVEeeGx4uP/G8HxbJiqR5mUpCWThvNAOJmI6jGzJGCfZF4viZbNM9sV6FBM/VmxemEnCp3/B+vZRFcIUwhMAAAAAElFTkSuQmCC); background-size: ",[0,142]," ",[0,136],"; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"ifcorrect-pic.",[1],"wrong { background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAACICAYAAAAxpNMVAAAgAElEQVR4Xu1dCZgcVdU9t7o7G0FAkC2IOyAKKoorCgoiILsOM92TYEBBFgVxQ3EBEQVBFAj7TpLpmmEwhIAsgogCBlQUUASBH0TJJGwSwmSju+v+36lXNV1dXd1VPV09GaL3++YjdFe9elV1+727nHuu4H8S+wS0u/udsKwPAngbgA0ATITIywD+jUrlQWSzd0tf37LYgdaiA2QtupfUb0V7et4DkaMAvLXp4CKvQPUmrFx5pcyfvzT1iYzDAf+nOBEvRffZZwqmTj0aIntCtZVntBQip0ixeN84fNepTqmVh5LqhcfrYJrPbw/gWwA2G+UcS7CsH0hf392jPP9Vcdr/FMd7TXr44Tm8/PKhAA4CYLX19rh1ASeszSvP/xQHgBYK7wZwLFTf2JbCBE8WWYlM5psyZ87fUhtzHA30X6s4Cgh6et4PkYMg8p4WbZlkr1BkGMBXpVh8LNkJr56jxrXiaFdXBpa1FSxrC6hOhWWtBvA8VJ8Q236+1cesJ51k4eGHt4VlfQTAJwBs3OoYLR+v+hIsi8rzRMvnjuMTxqXiaE/P62FZ3QB2dhUmSvhCRP4PIo8DeAKqT7tKtXLlaohkMGXKZDfm4jibQuRNbgxG9e0A1hnT9yHyHFQnQfVE6e//y5heu4MXG1eKo3vuORHrr/95iBwI1UwH73vshxapAJiNUqlPBgf571e1jBvF0UJhA6ieCmDrV/UTjZs8V0nVc8S2H4w7dDx/Py4UR7u6piKXm5WqV9PsqYv8B6pPQnURLGsxHOc5APxsGSxrGOXyKgBcFfiXQS6XQ6k0BRMnToXqa+A4GwLYBCLT4DhbwLLeCFVujYCIumOL5KD6+shpmGPuhOPMloGB/xvPCtJobuNDcQqFk6H60Y48QJMO+DuAB+E4D2P16kfSTgu4Hlpv7zSobgPgHVDdHiL/gurOVKWG92UU6M8Arse66/5eLr641JFn0IFB17jiaG/vB+E43KLSFHpcd0N1IV566X656SZ6Y2Mq2tX1WuRyO8JxPgKRHQFMipnAcqjeA5E/QeRhFIv/EkDHdNItXGzNK04+fx6AbVuYc/ShJmZyO1R/Ddv+63h66K7Rv956O0FkN1eJkhn+qyCyBI4zDBEqfgUiZaiWvS10pfu9yCNYtOgvcscd/HzMZI0qjnZ1bYls9qq27lb1UajOx7Jlt6+JlaXVuWtX1+uQyXwalrUPVF+b8HzHtcGAjQLHc1U1/0+bDZiHUmmeDA6uTDhmW4etWcXJ5w8BcHDLd0DbAPgDLMuWuXMfaPl8phl6e1+DcnlLN7gosjFUN4Lq+hCZAmACRCZC1YII7Y4SVGkwE3PzoheEXOzicZYseXo0v3Y3N7Z8+W5QzTc0os2NEffDOBDjU8GYlkLkGahu6ikPDfk78eKLp0X9gPSAAzbEqlXDaf241pjiuAZlPt83iiz0H+E4V8jAwMNJFUZ32SWLzTajm0+jldvi1lB9XdLzY47jFkHP6BHXNimV/iyDg/TSEokXzd4NmcznoLp53UmqC2BZm0D1A3XfidClXwbVnQAsRLl8jgwOLgkep11dE5DJdEOk4K5MjvPTNAKRa05xenu3g+Ock+jpmuWYL+eCpBln18W3rA976YX3jlnE2KyGT0GVCn43BgZob3GraSquck+btj8chyvwuoGDOV70e6LH6DjcqvtkYOCe8AU0n98ZIkdCdZPQeL9ENnuhzJmzPG5ejb5fc4pTKBwH1X1jJ06j13EuxzbbXCcnndT0Bbi5rQkTPgjVPbxfaC5m/BJEFgEYgirtBP4xlrMa5fIrYLSXhmw2OwGVClMVhI1uBJENIbIZVJnrinuGL7hGe7l8gwwO/ivufnX//dfH5MlHANg9xpUfhuocLF48L7xV6vTpb0Wl8iUA72p4PZMK+bnY9sK4OUV9H3fToxkz9hwvtTAY+mVFnUcw1FlxCU33YU+Zsi9U9wkZkNUxTcj/UQB/deM53F4qlaF2wv86c+YklEpvdre+SmV7WNb2DQ1eE7OhPTYfW299Z+yPwMBWvwnA2DBV4Y/nRohcLsUi7a0R0Zkz18fq1cQUfboFTNFtKJfPlcHBl2JfXOCANaM4PT0HQOSYJhNdAZFzpFi8pdnNaD5PryLvPaiJdcea1eped/9fseIPsmABDc2Oiusp5nK0R3aC6jsbvMDFsKwiFi26uZlhrV1dk5HNfhnAnt6kH0Amc67MncvEblVhjA3H/N6MkAGd9F6Jk54ltn170hPGXHG8hzEHAMP2UfIPqJ4s/f1DjW5C9913XUyZ0gvL2h+qtQpjVpY/oVy+Beuvf9eajMa6ii3yKQB7RRq+jMNUKldgYODWZnEnLRQ+DlVHbPu34WeiPT0f8AD1WyZ96U2OS7TC8/yxV5x8nlUDXYHJrwDA4B3tBYbeZzV62V5o/9NwnMMAvCb0ALiaLEC5fF0rXk0KDzt2CA809m6IfAbAh+pWIQbxKpVzWvIUDfTk6EhvK3ZGTQ4wgVQ6ITc2G2ZMFcetT8pkzqqLnDIi6jizpL9/QcNVplCgLfFVqL6j5hgR7s39KJWoMGMS/GrnvWih8AY4DreUj4cUyIHqdVi+/FK5/nr+mCLF9RbpuovsDyDbzlxizr0Pq1efKfPmMV5VJ2OmOK5BvMEG33CRd7UlJytgWSdJX98foyboxXt6ANDoCz6oVVAdRKVivxoUpm6L6e5+CyzriwCYx6qKyG+lWDyp7ngC6PN5Gr18Dut3UGGCc1kJ1ctg2/PCW+mYKI4bo9hiC3ocROEd5q04jMSuguMcLwMD9HbqxA3PZ7MnACCYPCiMWdDbemZMHmAHL6I9PYw1HQNV/iguhW3fEn5JHpj+S1B9Swen0nhokYeQyZwuc+aMhBPGRnEKha8D+CRUJ4zMzgT0fijF4lORSjN9+g4ol78PkfUC37/geVu/WyMPsEMXdR0GGpyhrVa7ujZFLseYzsc6AqZv5X4MPGUOymWu8JWOKo6a5fUrABhfCcqLKJe/0iggpoXCgQCOqrGFRO6EyE//G2q0XUXKZPIu7jr4Y2vlRXfqWMv6LosNO6Y4bo4klzvBAzM5EFnqBcdehuMcF4V887yPoyDy2cB9M8l4vtj2/E49i/Eyrnv/3d2fhGXRawxmwsfLFDmPH4ttM3yQvnjxixO9ABgxJMsgwm3mDahUvikDA3UZbTddkM2y9Ha3kRkxDSDyfbHth9Kf5fgaUbu73w7LYpqgfWxSJ29N5CwpFq9LXXHcxBrA7cm3/OktPecW8Iv8SPr6fh2+L09pvu/u5VV5kookc+Y828nnsKbHduEOkyYd7tqAayCuNor7v1hs205NcdxVplyeEgnMEjkNwBZSLF5WpzQGXvE9AIxrGFH9GyqVb8vgIINRa6W4eJzh4YOgWgBADNCrQ0Tm8j22rTiaz7/DxXqYigDiZgkJYKWkLw4s68vo63s4KqyuPT3HQaSaJRf5C4aGTpA77qC7vlaK9vR81IU7jJ4RA5g4EdhqK+DRR4HVYwqpnie2PWvUiqM9Pe+DZa0LVcZZslD9DkT4N7nGdSRsoVQ6Oir7qoVCL1S/MKIdBCYNDR2/tiqNMvqtyqRlOC7V2g9k2jTghBOADTYAHnsM+OEPgfKYQY5vEds+rWXF0enTt0a5fCxEWE5LI3cDiAhKpe8ik2E+5rjAU1A4ztdlYIAlIDWi+TxRaycH9vXHMTx8bLNwe2tPd/wcrV1d6yGbPQQieycEqjee/Cc/CfT0AJNNGZcr3/wm8DQroMdAVO+U/v7vt6Q4ms8zP3K0F/rnTLdwp8rKxP7+a3XGjHVQqbCu6HOud6B6rfT316H8tKtrGrLZiwN7+7PI5Y6S2bMJelprxDP6mcGfOUq4Q/VZbLEFcOihwNveBtxzD3DbbcAuuwA77wyccgrwd5aOjYncJ7b99cSKo4UCM9qEIfKcf2F4+EhMnWq7WWqRuwDcClUaeTRymX95BosXHxLedjyj8FyobuXd5ipkMl8OY0zG5BF08CJaKLwfqkQCvKGty2y9NbDbbsAHPwj89a/A3LnAkIc42W474NvfNkp0+eVtXSbxySIPS7F4VCLF8UgUfxrI5jIo1+cyRFjWR+E4G7tbl9mm+DcZjnOm9PcTRFUjms9zj2dk2IhlnRLloie+kRQOdAHjjz1GoDhX0I3gOOt7EVvSrKyGKrG5L8JxFmPFiqeaZq8JdzCGL+ETo5fXvAb43vcA2jM0fq+8EvhtAI7D7z//eWDHHYFSCTjqKGD5qCHErczzKbHtmbGK4y23rH2aVjc6cSSO8xNYFh/0Echmv4Zy+X0sOpNikYpWqzQGDnnmiF1jWTdIXx//f0zFw/W8HZXKh1y4p6l6qEcQhmdlcDPnycBAHcuWu02XSoRL8EcRh3WOv1+uNCeeaI677jpgYKB6zic+AXR1AVOmAI8/Dtx9N/DAA8DHPsYfIvCLX1SP3WQTYOVKYFlqbLrPi213xStOT8+nIcIkJSsNiKh/k1cAdjyAz0OVv6ybAGwOx7kYlnUucrlDZPZsgsBHxINVXB5Awj2NiRMPkyuvHDO327WtMpm9YFlMuLZSHvMCHOcyDAzcXJe5Nsxee0Hk8x6YPV4pkh5xyCEAjeHnnjOrzxvfaAxjKsOCBWYF4mrzmc8Au+4KvPSS2cr+8AfgLW8xn3M7O/10s82lIyvEtj+dRHEugoixRxznKGQyu0OVUeDvuLEbx9kBliUu44PJoG4VaRD39BzmxXs4Er2tY6J+uencW2il6+p6K3K5g6HK+FIrxJCsgrgGL788N2p78hhKmSYgcfboJJsFNt3UuNNLakqizHjHHWe2I25XjN1wZbnoImDpUmMYH3QQMHUq8MtfmpWJ/+ZnH/4wkPEohr7/fbMypSMK2961qeJ4OaerA3GZEyBCHpuvQORUFp8hlyPjOLPfN8JxpqBSuV0GB1lmUl1tjBd1RWAJv0Fsu+NblAdmJ1hq15bD+TT4S6ULZXCwZuV0tf6AAzbG5Mm0Y8gYFvvja/q+fvAD4ylRuKUwoHfjjdUVYp11TJyGysUVhkrDwF9vb9XD6u8HVq0C9twT2GMPo2C+MM7jb3npKA4wPNx8xXFBRiI/8q5Hy4t5I5Zk/BsiuyKbnYlS6Rr3e642IrOkr++G8Py0UDjJy5LzK0IqDu50OkG7u/eDZTEH1Fo4X+SfqFRmRcaeDGMYo+SkmYu3iZK8qDlzqisDj3/+eeAnPwEWBfSVSsNVh94Ut6R3B+KHfX1mldl9dxPbqVSAJ58EHnkEeOop4E9/6kRkubmNo4XCfu7qUitlb5siZIKoNZ9Tr4RVq/Jy7bU1sRjt6toaudwFI79MxzlLBgauS/JMR3OMWxPuON8GwJWwFaH1eAXK5eujaq20p2dXF+rZmm0Uf31uNx/xMjR/+Qtw++31L/qtbwW+9jVgvfWMvcMVZp99jM3jC7e5W28FFi4021gnJZv9XNxWRVQ+9/CwMNq00KPsoFdCcUPRdatNPk/uG/8lPo1yeWY7RXDNnod2db0J2SxXyOSs6CyncZwFWLHiiqi6Ky9S/iWIsEaqs0J7h9sQV4qga93dDey3H3DHHSZeQ8P38MOBzbzb/M1vgEsuAd7/frOl/eMf5q9T4jjN4zja27srHOe7ia7vOF8MY4eVgOxM5pKR1aZSOVmuvvo3icZr8SDt6trOU5pg3XXcKPdB9Vzp7/9nncKTGCmbZR5tj5bto7irRn1PW+a73wXe8AbjHX3961Xl2XBDYPvtgQcfBA480Ljdr7xivt9oI+N+0yX/2c+qI/v20hNPmG2Pq1Ba0WWR5pFj7el5I0Ro1DYXkUekWKSxWCOazxOYxYI0yiLY9sFJCvDjLhdxHbJQnDbCwxc/ALn/Lojqt+BR8xOBOL1l+yj+utFHrL8+8NWvAtySfAnmn7iKUGE+8AETp/nd70xch646XW4qDv/yeeB97wM4np/Los3z7LPGq+JqlUYmXTU+V6X5PGu8m8MYPVRY8Kl4xfNXBzypn4ltXz/aZ9voPHdVs6yzE7JR0MDvw6OPXiP33VfHt+clXgkOrw92pj1xjvfmN5tUAg3eYNKS3/kuNCPEp55qMuE0nM87r7oNFQrA3ntXFacTcwyPyRp4ke/FupKaz38NwN5N5lTG8uUHhu0DLRR6oEpXmLIM5XKXDA6yOUZq4lHcXpiAIZ1UITehXL4sHCrgZDzbiMlb0qGMTrjV0LPhr5vbhi/8nO7xf2oiFAA/v/BC41FxW7n6anMcI8L87JZbgKuuMt4UYznPPGOSmS8EfA+62Ywwz5pljOLOy2OwLHrOpG5pLiGXPOrge8S26cXUiObzV44k+BznahkYuCDuWq1871VQMBbUHNtCNGE2y0L9OmvRrUGfOpUFbqRVa4+Qe/PNjRvNl85thAE5KhK3Em4vjAIHhSsJFWd4GGAsx3e/GYuZMcO41ccfb+ydH/8YoNv9z38axaTQQGZ8h0rHPFUaW1DjF/CiW5jX33+jHzmPVxwTu6D7HB23EDkjXGeshQIL7wibMFIuHyqDg0+2ohhxx2pvb8GrIW90KJ/wRVEMDG7+LZPZFyIzI2rQ4y7d+HtGbPff32wpqsDrXmcUgu7zfV7vMxq5xM5wBTrgABNveThELnbGGSa5yTQBtyl6W0wbXHGF+Yz/f/LJxh3vbGacFHbzsHz57HDkPFZx+JS01qUOPjjud5+p42mpTS88LrbNco/UxO31IEL8clQykdnsfrz0kh3JhVcocDtiVWT7LYa4hWy5pVk56P7SlT7Jq96l8th2dQvhCkG3+p3vBL70pfqtK/h0PvQh4MsEEVD1LzJGM7E3RxxhVpZjjwXe+16zfdET60RWXOT3EKEDEYkQS6Y4LJAzkMewsIsLk3s1ovk8XypJAiiXiW3PTU1rjCKfHlFzTeKiO7Bq1YVy7bV1lREeeIyeXxAP3d60jjwS+OhHTY7p/vuNkcucEw1dfkZPaYcdTBqACkOhW8ytpZlwRfn5zwG64b5QMS+4ADj6aJNqiLJ52rsbczYj54at4g/NhkuqOLVbT3XEQbHt84MXcOu9c7mBkdiN6iFRcZLR3qOLdRY5I3T+iNFWp8Tsr7nuutOhShe7fbhD8ALMUnMLyeXMSlAsAgzG0WjlCkMloWvsCzPZXEF+//v42+eqQvfbF3pT224LfPzjwB//aLatdCPEL0PkSo/1o6ZJiYuVBl4M7izJFIdVmdksoRO1mWXV70h/f81T0CAMA3hWbJt5ndREe3pmBaK4dUabfyGvKnIPZDJfaIFPuH6eTAdw9fi/UMsFGr5cSRhjodDIZdCOhvA3vgG8iZ2OGL1aZBSFcRRGhJPiYmgYv8uj8OMYRPp1ApBueA5vQLl8RbigwGWHz2a5ozAIelywcUkixeH9az4/rw5vInJgnX1TKDCHxeIyyk1i29xWUhG3FAc41+MdjjTa3LmaKDLd6/Y70fCXTTeZtgSjsBTGX+gaU6GIzKMLzRWGkAfaPIy58GVzBWL+iQYxbRLmoag8ScTfBrmS0Xvyr53k3KTHsBQJODfchM2j9yVUeDvPKdoBjvPlIAymFcWputecmMhzUiyy8WmNaD5fHMkVOc7pMjDAlSoV0Xz+2y7ou4HR5sIdJk48HJYV5uAZ3fW5NVBh6PISSOVnpuluM75CpaFhSuwLDV4KjeLBQeDOO802xejuvvtW4zU0qJOsOozz8HpUxqTKlvwuF0P1Aunvv7Pu/fX2fgSOQ1uQQVAGjRiAehvK5elBiEkrikP3ugpYErlLikVWYI6Im5kmPb6PURGZ2YjGJPk91oy/HYNPdTdrQgYkX+JfXLON5JdmVQGB4vzV02DlCuOvIhyFnzFvxLgLVyW6xlQqxnLolvPFcwvj+f6W5gf2ks8izSNJylnE1KlXh+nyvPQStT8YBGW9PxGa66FY3C+YLmpFcYKeElcctxS0RnEMpthk2tgFt1gk4KejHVBcYkWAcIcgCXT7D5sBOno29JD4iydU04/OcjXgSkOvibkhKsbFFxujlcYr80rEAxOQNX++iRKfyx2Wm2zJuNPpGrZx98t3cCvK5YvqQHbNg6AroHo+LGuaFIvVuFwrWV8tFFjVUKWMd5xTZWDgVyHFqdLQemUUcXc02u+9ICNDBNyH05eDDzbGbzCCy7wQ4ylceRjtZaifq85ppwHbbGNWJwbuqECM9DLKSwX8wheMgvnCrezaa9Ofc/SIhMCQivaRupXaIDPpFYeJOIOHOli6dK9wTKyVFYfIvmojVMs6Jrxt1JS+iNwqxeKP0346Xn7Khzu0gh9OPhUWv/3oR8bNvv56E9ybOdNAGKgUXEn4GWM4hGZSkbg60T3n51QqCqsRCC73scL0kjimH+NJPqPWjzTM6ZeQy6bRyV5sKy7G5hbghcdIpDjKWMjUqb8MndwT5uDTQuFHUP2wt1XVbWWt3331DNfS33TTz0BkRsJM+Ogux22F0V+uHMwN3Xuvifj68tOfmhdPYBUDcdyuKJ/7HPCpT5kVinBQKhU9LUI3maxkcjLoYge9tNHNNPos9rZynKuTkGp6nNOzAbD9UdSP0EG5/EUZHKxDuidTHNaLVyrMQhthan1oaPe6HgL5fNWAVmWXkrCyjeoRaT7PEhyGW03JcSeFEE26zkwuMpDHSC2NXhrAxPbyc/6XnhG3Iz+Yxy2JSsXvKLR7mHL4lbebUxGZX/LhE8xBpVeyYt4J8DsPYF/bQcb88Pcjr0340WmhcCNUSY8bRVgeiep0VSDJOwgF9XiKW1tTN4menqshYuqVHOfbUR1NklzPP8blBFZlPKaW0rWVQVo59rWvNQpCdB2BUX4mmnYM8TE+0IpgcCYifQOXWxRXFBrGfhb8hhuMB0bhlsWqBILNmdxkcpKZdL+Ut5U5Rh/7OETOk2Lx/uDXI0FQy2JL7nWlWPRBdSOHaaHQD8dhX65wnRkboRzQiAo4meKQNVQ1qCiREWEtFG4ZITu0rKOlr29UlfAe3IHEBSzYHx3cgS/77W83meeoiCuB31w94oQeEo3eYOqAgHGuTByXnzPtcNllZltjhJdFcMwl3XWXAaLTxqEiMgCYriyFZV2Gvj7CHeo663g4o2pRebm8WxjvrYXCFV5kvdZAVi1Kf/8ljaabVHH6Q+7uIrFtQiurmms4/G4b+WAUUAq3hvvRR/eB45ASJEhT2/rjZtCNhilrkRjAI7CbSUO+aH87ibMzfBAV7ZabbwZWrDBRYgorJmkkM73wnvdUwVYbb2yiyv41CDCnjZMuXoZkONeiXJ7drMyozvjNZvcO96jS3t5TobpDiN2UpOX5ZgyvsYpTh63hQxP5pxSLNcikOgPasmY0SslHaYF2d++ATIYUtemQQNOeCGJ4eVEatfR6WPTGv2DtUtSkaOCymoAxGkaCKQz/0+ilMlIp6bIzD8WtzBcq3DHHGHA5va00c0wi98JxzpP+/n/H/Zp0xoyNUS5Xi86jFKdQYOkS215XRWS+FIuE4zaUeMWpb9rBwR4T22axW3XFYdF9uVwtxlPtbdYBxj9Rp0/fzAtxs01P7HziHpb7PVcVxlj8ElgG4bhixIX6ub1xC/Phmfx/Ivv+FehPRpgEk5lBYeY6CBfld9yumF9KDyvDPubnRzGANHomLsF2Nls1iKMV56IA5Yw/1JFRcZ8a3Wr2ItyGE7mcDdVqE1FTH36/2DZJB6qKw6Zfq1dX81Ix6QaPBHo6LOuzqZNAM9RPChB6LXyBDLYx6NZMqBB0u6lghEY0EirTbHqwngTtnURa3eJBqsOwrNleh98auEPcSHVVKo8+unsYpO/ZOFVQW4McZPhazQvyenoO9eIm1fPYrUX1JbFtGq9VxTEs6lUqWpHDpVh8LHxB19IvFEhcQFRgo55Vcc/EfE8vhmg5vsgglRkTkswR8XPWGvGX7wflgiPTG2JEl4rm55K4tTDI10how5x1VvXbSy/thNFLc4BwhxuxcuXlMn/+qEoz3W49ljXLm2xZbNtHLVTfWz7PFSnYhe9XYtssomwqDRXHa39INvPapKHqc8ScNMiMc8Vho/UrUSxeH7b0tatrW+RyX67bU+NmGfU9f/lnnmlwvb5wi1m82NgjpPqgQUp7hDYG8010t/n/hHgyissIcVhomzDD3Ux8BgkqGBUtfbkf5fJ5UYG3Vi7lNUEz1bUi/5FikZW5NaL5fG1GAEhUxtRYcfJ5tgjaq26ipjn6ZCkW677TQmEGSqVrw5a+x3pxOFTJmp6OHcMoLaO1lBdfNMYuo770nqhUdMMfeshEgKkg/Au61FFvgApHeGYS4XjpEzYycHdhVCe8JFOqU4pC4VNQZVGk20VZisUqwytxS+RafvnlmnwjqWySNFyLfIk6Y8abUC5fGhmGNksoGSd64+qk3H4O2SwxO72pwh0YpWUAbdIkozRcdc45x2wxPhSCWxUNUz9I5/+Xx0cZrPyeXlKaHlDyt03oQh/K5avjnmnyIV3wHUMmBhOueq/09xsl8sTFL02aFKD6IlP18n2T9C6NVpxCgeW09Q3Sg1fNZAoyd25k9zR3noaan1WR4S62rdx79LGHHWbsGxq8v/61iZuQH4b/5dZBxWAgLqggBGXRnmHQjwRE40NYJXIbS4niOh2PZrqaz7OLsN8I9jqx7YBxBmhv77Z07UfGFlkZtZNEXbtOcfS9781hq61ujmGuWg7LOiIqTuP1vGaaoD0S6EZPyg/KUQG+8hVjx3A7ImcMjV1GeWm80sahvOMdACESr399Fe5AaCcL5f79b6NEcW76aN5a3DnkEyyVZsng4Kii63HDuz/eQmGW14iFWOjzpK/PcBn5Kw6pW0SCpBJLxLbZVTlW6hWnUGBe4xkvthImJWL7IBrAl9VhjU2jdXph7Hg7ujRB3HSDUVnaIn5Qjuf58RUWuDH4x2OZH6KiUUHoYTH4R14ZovMIb6B0gsjh7OAAABUGSURBVLGq+X0QVXcJisVfdRzkFjR8Vb8h/f1/qlGcQmGmx0ltPo4I7Da6lRrF8VzlBVCl+0dvqko2QLp81g2He14z1ZDLHQjHObhtEug4xSF+d/p0U2fNEltfaPQSP8MwPyO7zG7vtZdJEcybZ+IyBJgTUxMkI/LPT5cjL/ouGP9ynGtQqcyN6ISXwYQJe+KVV25KiztIDzxwC0ycyDbdvlJEFRYEmdJ4XGSdXNQN1SpONdJI/MUGbpzFrD4XSn//HeEBUu55baK2SRKPwYnQg2JfAyLwaPPQluG/qSzXeCszA3vEBjPlQGAWvSEGCP0SFp+YKE5xR/O9gTvc5dKqRNiE2t29o5dqeVJsmy0KUhHN5xmzYZ8NSnRSOp+nYlVjEiL/lmLx4CQTqFWcqrHE3gurYfbh/rCl75bgpt3z2sfvclvhCpA0KchcEuGcBF3R06KBzG2JZSkM7LGem4ZzODsdrExg3omKlLaw76jJK7EMpUbcFWHSJDLV+8C348KwiHamU8MyInK7FIs/DI7nIhDWWYdeQlUHRF6SYpFtF2KlVnFM3RINqttRqRDY/FzNxZiCyGapkQek2vPaL9b3LxaV+4m6FR8XTAD4d75jVhKuQLRrmMWmm04oA7e2oIdFahACtAgFpfh2UezjSniA6kuwrCuw1VbXy0kn1cAd3GTwOutwWw8Saf9DbJseaGpSU6YUxV9kWgb8JKzPWLp0z6ia+/DEahWnUNgAlrVxmBLEpRTp7d0LjsOfZTo9r/3SEkIwg9FfzpBAKSpCI+G5BFzR5qH44O+g8UxlYmSZGWpfGP/xty3GeYjOY5TYjzK3+9oY4wLmY3j4qjq+IJNq2dNrs0QzICgniG2nRnDjkTJUE2q53PQ6wvJ8nsFAxtdqpVw+QgYHYwkEY6O4bs9rg8IL8Iy1+YRpvNLjYX6IWJc//9lkoOlK086hNOqIQkzNF79YLeIPhv2D2w9XH9KhUaho3LbogvN6xNFQaZJuh8lu948eCq+uVNOrLGVFRhSR9gNi22Fm12RXbHBUiNSqDjvF07RQOB+qbB0VlnPFtgOc/tEXaZxy6ETPa4bpub34zA1/+1ttgpKAKAKjKGR/ILIuLOSU8cFUVBrCJ/xoL1MOVDjGcyj0vAj/ZFkLPS8qCyEW6UEdeBXSgLBLcd2K4UVmj4DILg0gI6T+/WK4BLctrTHBV+LDTfmz6oD091fx4qZEmv2zWNJdD1AXuVeKxZoIc9R86uM41Z7X7BeZDgl0cIsgRoZQBBqwPtlQcGY+WJyfMcsdLvbn5wz4EY4ZVU/N76g8QXZxbkcMCqZbf802knOwZMkv6kD7rCxdb708RFhZ2uwZzhbbjifnbEGTPMflqoCi1mFrNJjDCo/NsMGECfvF9dgIG8efhMhhqZFAB7cIxljovRDETZfYXyVopzDe4gOhCJxiBQADdI1WnbgHSb5fEhNRSYnOO/vsWu68uPObf09j92aIXBoOgro/8Hz+E25lKbBx02FEHkKpdGxacRv/WlpLavW02DbLiWpE8/lTmvIEeU3pm83fVZyO9LwmQwMDbr4dwzISVmcES1/97iicxLe+VUXa+YnKZqtO3MunvcPcFEHk6W1Nf3XbDkThjEwJEW3B+MpS9lOvVGiE1nitcbcU973HMkGmV9/4riO18roYzmsKnkvQDkq8IB6BO7GGctzE3e2BOSF6SjSAKQzpc1sKbjnExNA4ZqDOF644dMMpNIAJwGpn1YmdbAsHMAhKPsFisQ4aGOKQia8sZU19qXRcEs+lhRm6h2p39+6wLJ/Is4xVq3rqWiT09JD7MNg3NeoyL8D0pGpY9y9qaC24dI1euDV89rMGC+PjfGlXMOgW7Orm91BiQpKKQuYGsmwSxefXaPu1RsFVh5WVxNuMvRDu0I+lS/vDsY0Ahwxd2mppdNP1XUjXe4IUix6TZHo35KaL8nlCYXwKvdvEtv0GLiMXqjGcm8/1882MdvHc7fZgbD7frj8R4nZJ90F3l94Ma4t22snQzTPCS14ZXxH4PeMtrHD0WTY5Dj0jVkZSEcc6Eck0gePcjtWrL47kE6zlkEn69lcgk/mezJ1b1xE56QDNjvPIvU10mPMvlY4Mr2rKvl3ZbMNaqZrxVU+R/v4qFDh0cdHu7q1gWRe1NXkauEEeX+J7/SYUPsySF6BRXF+FakptGc2lBGudgh4WKyeZRui8/MODbdbz8JjKUsZjWiXSfpbwhSjbKI3bqVttVP8k/f1eXKN6Ba0trOT9ceVjeXU9c5mx5eiyRwq3qi3gONUs6mjvhFhd0stT6GZzFaH4aQH+Owzs5grkt0Tm99yuqES+2xw8lzVQfoxntHNsdh4hsZXKpZHtE5nXmTLlEFjWvqOAjNzHnl9RHlhat1HjXhvK/C+Fq2g9lg8C0014QITcN+wxxoI8bmlsIVUVyzpH+voacrGIZ9zFRgpjb5LBN7rRfv7HX3WCHd78rig0ehnEY8aawlJZRo9ZNssIMo3jcHtAHtcZ+EPD9oleI1t2/2PxYTMOmajHQ9D+5SgWr+kk7ibAOOFDYO4W267r+KPd3XvDso4dUZBVq7oxeTKJsUiDwhbXG0GVVSe+vfY9sW22BW+w4hgaNCL+2he64HSrKfSiGMCjcGWhgUuvi9AGphVo0zC5yI4mPuibcR96ZMTS+KwOBJ2TyZP5q2A9U/uz5Qh3o1y+ILJ9IitLLYvUZh59aMIL+jCKUul8GRyMaLKZcJyEh2mhwAy7z8VYhuqh4SpPryELW0jRzqJXRTDT71Cp7AiR46F6NiyLfDrVpOeqVd1R9p0/LRPHKRSIe00HtefjgTkwOX19r8ovkuPnXHnI5unDO/kZPTO66H7Ck1sTeWaCScqEDzP2MEMCTbbNOu/GrbfO5Y6A6k6x4wQPMArzB4jMHi3ZQkvX43tj7IiYYf/dRaQX3PfLalzVp5DJCFS5svC9cwslDPLHUCWqk4uHX+IRC+gyipPPLwDQSoOwxvfoVyBwVaFLTrvETybSgOb2RG+JpSuUcP6KWWu68QShp19xsAyqV6JSWVDH2jB6Im2iJW+H6vVpEoHHKZFX90Y+oi3dYxlrKpUOqUMXHnjgZpg06UqocptiJ2Yyjn4KIvd47b6ZECSx0hOBerezxbZZU9dQ/BWHZb7pVSOQD4a8dxQmGklAFJZw/oqGMQmMWK6bNnjcwB2ux/Dw5ZHtE7u79wQ5ZJJVlrLPFStUH4Tj8OH/Le20QZzSeD/2ajsos9p9K4pGX/P5r4J8xkNDC7H55mcTzek21BWhTRHlTS1BqfS5uDIdf8WpZRRNMvO4Y3xWByoES1WCdowPcfCpQMJZ8rixW/v+Ps+9bti9xqXZNQbiZi5XDGvluYyrEpxPajQS6TyPSuVpPPHE01FN0lqbUntHu6VHIicGEpmR7bjd9gWWRWzJKlQqp7vlwGzDBDwDNvlgIxQRVjX4HhXjV8fLwECTGmgzd6M4tTT37d2VfzajxDSIGcCjvcJ/s/SWACy/TrtZlrz9WbD/MqsiG3oG7V9i7EfwyJLIfetXoDyFxYuPkDvuYJR7RLxiSJIqbQ6R++A4d8Cy6IKzBzsbobD5XA9yOeJyfNIB1nfV0b1F3aW/4tCafn/qj8GnlefAtF38FSYqS57exclnNxfrrntNmAQ6vUusmZG8WAwTen6X41VQPTKyGW3V2/q7GxZ4+eWH2XNKa3NV/4LI60m85xUFMkGaSHzFISsQiabTFcZjaAgHsTGshQpnydO5Kvf5m1m6HNU+MZ1LrLlRXKzyuuv+fITLxqRFTo6sPsnn2dKbaaRq0lX156hU7kcu9wO3XzwDnqpsgvsoVM8R2/a8lWT36G9VX4dIHRlksiFijvJ7ZvOwThFDN2mfmMo9rOFB3G0nlzvDfdFViQSBeW0RzoUqV5KqMCvPZLYIo8TsfPcTqC4fLcGnv+KQCtYjt0v5KXG1YeUkcTjMhqcpJIF2nIuaJePSvNyaGEt32WUSNt/8h1CtUrOL3CzFYrhCgRgIQXf3NrAs2kBBiMdCkNcImOy12O4LthAazX35K85MiNQQJY1msDE8ZzWAASxdWkxSyjGG80r1Ui4jWiZzaqA/F+M1d2GrrU4Ml93wwprP8x0OBQrxqvMplw9FNkuaYWKL2hY/jtMF1Zh+f21fq/0BTLzit1i58oJm4fD2L7TmR3A7DWazbGlQrS6hCz00dGIY4+wpDdlBTgRAoiTG5Hxu6GUearHKCJvC7fkrzqchUsfXn8L4aQ7BoBtLNwKFUmkOP37GculHKpUfQoQRXSMiv8XQ0CkNlIaFlIQjcLVhBoA1Rjm3EnflyhM78SMzijN9+i6oVKit41Eatk8cj5Ntd07a27u3i/lRnRBQmgUoFs+OJMHu6XkjLOssqFJZGBFmz7CMu6W9+OIpndrK/a0qqhy03WfQ7vmm53UuNydM6tzuwOPxfK+Wm6u+hzVxVxmmSoh1jqRM9QiwyUccJuG8CeXymZ1MhRjFMWRKpP0qpFoTPvo3tNBr/VdDAu0m9jbZROJqfkZ/2TVzplswAHwt1E+BtsnJjfDJHgCPu0SwwpZ5tN/Atk/rJAbI3TmDj0q7u98CyyLksP0mqKN7B09B5PwGyTq/XqkCg067Z3SXGD9n6cEHb4hXXjkKlvXxmkpPkYdRKp3cCM/jvqdM5nSoMu1AHiPWel0K1cfw2GMPjEUurb6S0/RTYBXnzJgqxPTeAEmgSXFbLs+PWl41nycDARlLg8Lk5YXtUrqmdxPJR/KiwHzGjJ1VWc+4NTlOEUuWzI4ygt3dge0rLevkEGk5vc3bMGHCz8ZqNW5cO24Ynbjnes2vkz+YxEc26XldsxKafktsAbBvaJVk9vrXKJVsGRxsmP1OPJ8OH+huteuttw9EWFJTy/pBLh3LOiPMFFLzHAoF0uSRoMDjoRv5ls/ha2ny68Q9iqZFeB61GwHafGlhPsC4seO+v9+LL3jNvOMOdwNcdDsJSAqzPhCgTbtoYDy6625y0nH2g8h+ETQxJOK8Eq+8Qn7oSMp9r4aLLZ0PBAnKRfguqrVcqtdKf/858U8wvSMSVW+6XUgqla/GUtgmm1fjntcHHfQRZDLZZgTRXikIiZ9JVBluzsUZPOkRXN7WycqCuFt1ge4TJuwI1T2gShhDbRWByRfdgErlKhkcbNg4y+sAQyN42wbXXIrh4V5mvuPmlOb3iRTHv6BXYsr66FYR/xyicc/rcL0SwdQTJpzbbL92PcG3vY3IvXwketG4sg+iUrmLMMkknWzafbBuxYEI2yd9GCIf8WIrtcOaJipM2jFf1DT87xIYqB7XlJTTOBMxHU7avbP681tSHNc4M8vuMS7nSzIxPa9XrWJV5As1e3azeiWRIZRKZ8jgYE27wPAlvRIWhtvZp6DRr5IxkSVQfQDAQ8hkHsXq1U/GwSPjbk/z+U1cmIMqm22809tCw/aHP8xSd4VZvXp++DnU3ROfMbdkVd5XM1mB4eGusV5tOKGWFWdk9cnnWQVAQ61ZB5i/w3HODfcGaKFeiUrHYNbFzZbzwIpIN5V0aVTquM40NCipTIsg8iwc5z9uBtmUkBAgRXBT1o3gZjIT4DivgWW9Fo6zISyLCkO2zuZ2nwg72RF9dzOWLLmrkac0Mn9T/703AAK241d1kV9KsfjTOAXvxPejVhx39TFkkkdBhPt4cKzn4TiXYGDg1nAgyuuExyzuNk2oNqgwwfEYDLsKQ0ML4h6+Oy8DL9gemczOUGV5qY+Y68QzDI9JW4NE1AtRLi9MovDeSk7KPBJIJo+hZTJfkblzuYqOubSlOCO/lELhvVBl5HNDOM5AVM9rj9aM9tHH3DyKaZ4WRdtPoDSTdfRAwrLIZfPs6/tNVN6m0dNzQ/OZzLshQq9sG4hsmVodGbAUIiRb/DsqlQfw+ON/byUA57WuZA/SD7bYIfBZ2HZPpyPEjZ5pKorj/mJMh7z1ogw+D8HGikHmYXzvYjFENg09rOUAmNxbGbNUEytbxNDQr5OsQHU2BNvtLFs2DQD5mqe52w/JiET4x9pq2imcBw1sGrOkJxkGQLgl2y6REGkIlcpTo4WpqoF3sgKTPMejeQ80rklrskZkNBMe1US9Zq+MlJKA2Q9+saNYkPafL4TlKUmrStkX4TpWInai+8qobrTJSW4AcIMNdoUqeaLbY3HNZg+VOXPWWNBzzBRnZFvbZZcspk17n1s1qLpZ4BdOZeHfBA9MTVzJxokILE2o/l5ks7di9erft+stpa4whrGeZSlMm8QbvfETSJ1QO/6StUeMueK0MkGXmLurawvkcu/0MLfMIsdFsGmc3usWnJVKf0xqnLYyr7hj3c5zy5a9CyIf8uI5Hn9u3JmJv2/KJJF4lDYOHNeKU2ebGLQ/A2tkXHhXjDHJNMTvPI+KJEIPwbIewdy5S9I2KF0szZQpW8OytvUqERjTSYfqt/7lLhTb9pt7tPHq2zv1VaU4wVvVfJ7Mk+yJ0NgbESGeh4btmwNKRn7iJ2FZT3sxHNpVLO9dCsdZjgkTVmDZsjImTSpjnXUsLF9OY34ycrkpLrquUmEc53VwHG6z0yBCGhSfAaK9txF3Nu/HkCYtizu009+/ahVnxGbq6no3stljWuax6fSTTXt8Zs+z2eNl9uya6Hval0k63qtecXijbiQ6k5kBy5regkeW9Bmt6eMY4V6ACRMuGiusTZIbXisUZ2T1YSDScU6CCAvwq25+kifR/jG85iNuSW2l8k83nVGpvIBJk1ahXHZQLk+EZW2AbPb1UH2L+yfC/zbiJaKRfydU+8eSdyfpY1irFMddfQys8szIzHTSp5L8uBeg+htY1t0YGvrbqIKRTJRa1ptc20mEMNDlKJcX4YknHmklAp18yukcudYpjqc8pOD9WWLi6taf5f2wrAH09d2btofW+lTWzBlrpeK4ytPbux0chzRl/BWnI/RqHOeccDfddAZ/dY2y1iqOqzyGkepHTRteJHtfjAnNQ6lEeAfd+/96WasVx1Uegxsi9DIM3Uz68onV+YkMDHSESj/pJMbbcWu94oysPMB3IeL1bUz4GkRuRal0jgwOMjP+Pwk8gf8KxXGVh3BMVTKk7xFRXlKrFORBViUfXmoNVtc2rfuvURz/xbn9KDOZnWBZzHWRI5hlJqyEfN6thFRdiIGBB/9bvaWkCv7/FBIsqtc2JbMAAAAASUVORK5CYII\x3d); background-size: ",[0,142]," ",[0,136],"; }\n",],undefined,{path:"./components/homework_answer_input/index.wxss"});    
__wxAppCode__['components/homework_answer_input/index.wxml']=$gwx('./components/homework_answer_input/index.wxml');

__wxAppCode__['components/homework_subquestion_swiper/index.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"subquestion-box { height: ",[0,1200],"; margin-top: ",[0,60],"; }\n.",[1],"subquestion-box .",[1],"subquestion-title { overflow: hidden; height: ",[0,100],"; background: #f5f6f8; line-height: ",[0,100],"; padding: 0 ",[0,32],"; font-size: 16px; font-family: PingFang SC; font-weight: bold; color: #323643; }\n.",[1],"subquestion-box .",[1],"subquestion-title .",[1],"test-num { float: left; }\n.",[1],"subquestion-box .",[1],"subquestion-title .",[1],"test-current { float: right; }\n.",[1],"subquestion-box .",[1],"subquestion-title .",[1],"test-current .",[1],"test-totalnum { color: #878C9E; font-size: 12px; }\n.",[1],"subquestion-box .",[1],"test-content { padding: 0 ",[0,32],"; }\n.",[1],"subquestion-box .",[1],"test-content .",[1],"question { line-height: 36px; }\n.",[1],"subquestion-box .",[1],"test-content .",[1],"options { margin-top: ",[0,20],"; }\n.",[1],"subquestion-box .",[1],"test-content .",[1],"options .",[1],"option { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"subquestion-box .",[1],"test-content .",[1],"options .",[1],"option .",[1],"option-num { -webkit-flex-basis: ",[0,72],"; -ms-flex-preferred-size: ",[0,72],"; flex-basis: ",[0,72],"; height: ",[0,72],"; background: white; border: 2px solid #e5e9ef; border-radius: 50%; text-align: center; line-height: ",[0,68],"; margin: 0 ",[0,32]," ",[0,40]," 0; }\n.",[1],"subquestion-box .",[1],"test-content .",[1],"options .",[1],"option .",[1],"option-answer { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; line-height: 20px; margin-top: 6px; }\n.",[1],"subquestion-box .",[1],"test-content .",[1],"jieda-answer { margin: ",[0,80]," auto; }\n",],undefined,{path:"./components/homework_subquestion_swiper/index.wxss"});    
__wxAppCode__['components/homework_subquestion_swiper/index.wxml']=$gwx('./components/homework_subquestion_swiper/index.wxml');

__wxAppCode__['components/mix-list-cell.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"icon .",[1],"mix-list-cell.",[1],"b-b:after { left: ",[0,90],"; }\n.",[1],"mix-list-cell { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: baseline; -webkit-align-items: baseline; -ms-flex-align: baseline; align-items: baseline; padding: ",[0,20]," ",[0,30],"; line-height: ",[0,60],"; position: relative; }\n.",[1],"mix-list-cell.",[1],"cell-hover { background: #fafafa; }\n.",[1],"mix-list-cell.",[1],"b-b:after { left: ",[0,30],"; }\n.",[1],"mix-list-cell .",[1],"cell-icon { -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; width: ",[0,56],"; max-height: ",[0,60],"; font-size: ",[0,38],"; }\n.",[1],"mix-list-cell .",[1],"cell-more { -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; font-size: ",[0,30],"; color: #606266; margin-left: 10px; }\n.",[1],"mix-list-cell .",[1],"cell-tit { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; font-size: ",[0,28],"; color: #303133; margin-right: ",[0,10],"; }\n.",[1],"mix-list-cell .",[1],"cell-tip { font-size: ",[0,26],"; color: #909399; }\n",],undefined,{path:"./components/mix-list-cell.wxss"});    
__wxAppCode__['components/mix-list-cell.wxml']=$gwx('./components/mix-list-cell.wxml');

__wxAppCode__['components/share.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"mask { position: fixed; left: 0; top: 0; right: 0; bottom: 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: end; -webkit-align-items: flex-end; -ms-flex-align: end; align-items: flex-end; z-index: 998; -webkit-transition: .3s; -o-transition: .3s; transition: .3s; }\n.",[1],"mask .",[1],"bottom { position: absolute; left: 0; bottom: 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; width: 100%; height: ",[0,90],"; background: #fff; z-index: 9; font-size: ",[0,30],"; color: #303133; }\n.",[1],"mask-content { width: 100%; height: ",[0,580],"; -webkit-transition: .3s; -o-transition: .3s; transition: .3s; background: #fff; }\n.",[1],"mask-content.",[1],"has-bottom { padding-bottom: ",[0,90],"; }\n.",[1],"mask-content .",[1],"view-content { height: 100%; }\n.",[1],"share-header { height: ",[0,110],"; font-size: ",[0,30],"; color: font-color-dark; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; padding-top: ",[0,10],"; }\n.",[1],"share-header:before, .",[1],"share-header:after { content: \x27\x27; width: ",[0,240],"; heighg: 0; border-top: 1px solid #E4E7ED; -webkit-transform: scaleY(0.5); -ms-transform: scaleY(0.5); transform: scaleY(0.5); margin-right: ",[0,30],"; }\n.",[1],"share-header:after { margin-left: ",[0,30],"; margin-right: 0; }\n.",[1],"share-list { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"share-item { min-width: 33.33%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: ",[0,180],"; }\n.",[1],"share-item wx-image { width: ",[0,80],"; height: ",[0,80],"; margin-bottom: ",[0,16],"; }\n.",[1],"share-item wx-text { font-size: ",[0,28],"; color: #606266; }\n",],undefined,{path:"./components/share.wxss"});    
__wxAppCode__['components/share.wxml']=$gwx('./components/share.wxml');

__wxAppCode__['components/uni-load-more/uni-load-more.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"uni-load-more { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; height: ",[0,80],"; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center }\n.",[1],"uni-load-more__text { font-size: ",[0,28],"; color: #999 }\n.",[1],"uni-load-more__img { height: 24px; width: 24px; margin-right: 10px }\n.",[1],"uni-load-more__img\x3ewx-view { position: absolute }\n.",[1],"uni-load-more__img\x3ewx-view wx-view { width: 6px; height: 2px; border-top-left-radius: 1px; border-bottom-left-radius: 1px; background: #999; position: absolute; opacity: .2; -webkit-transform-origin: 50%; -ms-transform-origin: 50%; transform-origin: 50%; -webkit-animation: load 1.56s ease infinite; animation: load 1.56s ease infinite }\n.",[1],"uni-load-more__img\x3ewx-view wx-view:nth-child(1) { -webkit-transform: rotate(90deg); -ms-transform: rotate(90deg); transform: rotate(90deg); top: 2px; left: 9px }\n.",[1],"uni-load-more__img\x3ewx-view wx-view:nth-child(2) { -webkit-transform: rotate(180deg); -ms-transform: rotate(180deg); transform: rotate(180deg); top: 11px; right: 0 }\n.",[1],"uni-load-more__img\x3ewx-view wx-view:nth-child(3) { -webkit-transform: rotate(270deg); -ms-transform: rotate(270deg); transform: rotate(270deg); bottom: 2px; left: 9px }\n.",[1],"uni-load-more__img\x3ewx-view wx-view:nth-child(4) { top: 11px; left: 0 }\n.",[1],"load1, .",[1],"load2, .",[1],"load3 { height: 24px; width: 24px }\n.",[1],"load2 { -webkit-transform: rotate(30deg); -ms-transform: rotate(30deg); transform: rotate(30deg) }\n.",[1],"load3 { -webkit-transform: rotate(60deg); -ms-transform: rotate(60deg); transform: rotate(60deg) }\n.",[1],"load1 wx-view:nth-child(1) { -webkit-animation-delay: 0s; animation-delay: 0s }\n.",[1],"load2 wx-view:nth-child(1) { -webkit-animation-delay: .13s; animation-delay: .13s }\n.",[1],"load3 wx-view:nth-child(1) { -webkit-animation-delay: .26s; animation-delay: .26s }\n.",[1],"load1 wx-view:nth-child(2) { -webkit-animation-delay: .39s; animation-delay: .39s }\n.",[1],"load2 wx-view:nth-child(2) { -webkit-animation-delay: .52s; animation-delay: .52s }\n.",[1],"load3 wx-view:nth-child(2) { -webkit-animation-delay: .65s; animation-delay: .65s }\n.",[1],"load1 wx-view:nth-child(3) { -webkit-animation-delay: .78s; animation-delay: .78s }\n.",[1],"load2 wx-view:nth-child(3) { -webkit-animation-delay: .91s; animation-delay: .91s }\n.",[1],"load3 wx-view:nth-child(3) { -webkit-animation-delay: 1.04s; animation-delay: 1.04s }\n.",[1],"load1 wx-view:nth-child(4) { -webkit-animation-delay: 1.17s; animation-delay: 1.17s }\n.",[1],"load2 wx-view:nth-child(4) { -webkit-animation-delay: 1.3s; animation-delay: 1.3s }\n.",[1],"load3 wx-view:nth-child(4) { -webkit-animation-delay: 1.43s; animation-delay: 1.43s }\n@-webkit-keyframes load { 0% { opacity: 1 }\n100% { opacity: .2 }\n}",],undefined,{path:"./components/uni-load-more/uni-load-more.wxss"});    
__wxAppCode__['components/uni-load-more/uni-load-more.wxml']=$gwx('./components/uni-load-more/uni-load-more.wxml');

__wxAppCode__['components/uni-number-box.wxss']=setCssToHead([".",[1],"uni-numbox { position:absolute; left: ",[0,30],"; bottom: 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; width:",[0,230],"; height: ",[0,70],"; background:#f5f5f5; }\n.",[1],"uni-numbox-minus, .",[1],"uni-numbox-plus { margin: 0; background-color: #f5f5f5; width: ",[0,70],"; height: 100%; line-height: ",[0,70],"; text-align: center; position: relative; }\n.",[1],"uni-numbox-minus .",[1],"yticon, .",[1],"uni-numbox-plus .",[1],"yticon{ font-size: ",[0,36],"; color: #555; }\n.",[1],"uni-numbox-minus { border-right: none; border-top-left-radius: ",[0,6],"; border-bottom-left-radius: ",[0,6],"; }\n.",[1],"uni-numbox-plus { border-left: none; border-top-right-radius: ",[0,6],"; border-bottom-right-radius: ",[0,6],"; }\n.",[1],"uni-numbox-value { position: relative; background-color: #f5f5f5; width: ",[0,90],"; height: ",[0,50],"; text-align: center; padding: 0; font-size: ",[0,30],"; }\n.",[1],"uni-numbox-disabled.",[1],"yticon { color: #d6d6d6; }\n",],undefined,{path:"./components/uni-number-box.wxss"});    
__wxAppCode__['components/uni-number-box.wxml']=$gwx('./components/uni-number-box.wxml');

__wxAppCode__['components/wrong_test/wrong_test.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"wrong-test { -webkit-box-shadow: 0 0 12px 0px rgba(128, 128, 128, 0.2); box-shadow: 0 0 12px 0px rgba(128, 128, 128, 0.2); background: white; border-radius: ",[0,20],"; font-family: PingFang SC; font-weight: bold; padding: ",[0,32],"; font-size: 13px; margin-bottom: ",[0,33],"; position: relative; }\n.",[1],"wrong-test.",[1],"choosing { -webkit-transform: translate(",[0,99],", 0); -ms-transform: translate(",[0,99],", 0); transform: translate(",[0,99],", 0); }\n.",[1],"wrong-test .",[1],"choose-area { position: absolute; left: ",[0,-100],"; top: 0; width: ",[0,40],"; height: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"wrong-test .",[1],"choose-area .",[1],"choose-btn { width: ",[0,40],"; height: ",[0,40],"; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAE2UlEQVRYR81ZS1BbZRT+zs0DQqGUailFClaZoa0ttSTWGXlooA4LhxnHhS6sK8fH2NGd3djRdnSj3enI1FbdqDOOCx/DuGA0iTSkM2JuLNhKmUErD3laKA0vk9x7nD9wY3KTNBBCyNnk5n+d7/7nP+c/57uENOQMs9TULT/EgB2QrAR1P0AVzFwEIoUYt0E8wZCuA6pMgOtSg/WXM0TqetXReiY4HL4qMvMrAJ4DsGc9cwGMA/iMA9Te0lI3tNa5awLY2ekpNVvyzjLR8wBMa108ybggEX0SWFh6q7W1firVWikBurrkZ1WJ3yfQzlSLraefwTOSSq/ZH7V+cad5SQF6vV7T7SX6EMALiRYwGCTcVVKMkh1FKNxmgSU/D0ajITw0FFKwtPwv5heWMHvLj5uzc1CUpMfv4nYLn7TZbMFEehIC7OjwFmwrpq9BaNVPsuSbUVlRht27SmAwrABKJYqiYHJ6FsOjk2HgccLoXJjjp9rabIv6vjiAqzvXAcSCkyTCvspyVJSXQjynI6rKGB2bwo3hMYhnnXRut3CbfifjNDnc8gXSmTU/34zDB+4PmzITIkx/tf8PLC0H9MtdbG60vhjdGANQOARL+Dx6QGGBBUcOVcNs3qjzxmIJBILovTqI+cWlmA5ScSLacSIARSgxFuT1R3ur2DlrbU3GwWmIBEi5bwDLUTspvDskmQ601h8Jh6AIQKdbPg/gJW2yOGd1tTUoKizIhFWTruGfX4Svb0B/Jj9qbrS+HAH4g9tbaQANRgfh+6rKUbW3bFPBaYsPjUzgz6GxaF1BBVz9eKNtOLyDTrf8LoBT2ggRSo7VHYQkSVkBKDy6x/d7TAhSGeeON1lP0crF7xuNvltrqitRXnZ3VsBpSsYm/sHA4HC0znF7Q10FObp6HiHJ4NF6xA1Rf6wW4jebIm4aT09fzI3DqlJPLrf8BgPvaGBKd5XggZp92cQW0XVt4Aampmcj/wk4TQ63/A0BT2qtW2HeZGZm4FtyuuVrAA5qg2wP7t/00JLMPH7/Iry91yPdzOgXAMWe7tBaGx6uhclk3BITB4MhdP/cF637lgAo0pwIosfqj4IovWRgo2/FzPjJ82vUDrJCTrdvGeA8rXUrAaqqiq7LV/QA5WkAkaC3lSYOBEPwJDBx7jjJ/CK8V3ROksthBszfkaPLe5okejt3A3WuX3XMLLlyOVkQpv3xkvyeRHj9/3QrbzXdyk48TJRugXGuWaRbAlQuJqwmcHWjlrCuJq1xKb+oRwo3OeWfn18M1yW6MjQ25RcAOz29pUY1uOVFE0AzQckQXzQJkEnLzsPVMJsyXHYGg+j9LUHZSdIJe8PRCF8T5wVOt3xBz8eIGuVQFgp3Zv64pckWwwWti/q4d+8e7L1HUB/plQPinI38PYm/RsbTpz6EqcPkUQl9BcYT+hRKsFiVFbszSx4Rvl+Y5afXRB5pgFwulxGGog+YKFxA6yVMv+0sRklxLP3GDISUUJgtCNNvc37cnElOvxHzeSj+V+12eyiRnpSR2NUtP6Myt28GgcksnTzeVPflnRLdlAC1EGRm5SwzZ4QCBvBpUDK+qfEvGwaoLeDw+KpI3SCJLlF7S32GSXT9G2qfIcBoBsgK4hrxGQLgopWx5Ad4FEwDAMsgONP9DPEfgr5kIbSn2nIAAAAASUVORK5CYII\x3d) no-repeat; background-size: ",[0,40]," ",[0,40],"; }\n.",[1],"wrong-test .",[1],"choose-area .",[1],"choose-btn.",[1],"is-select { background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAEc0lEQVRYR9WZf0yVVRjHPwcuggjhBSJFBEwydXNtlWvDtZZbq63VWitbIWUKN8pqbRSXlVP6YXKxH8smE1DXVv6sCDKcpAI16Ze55lxZq39qbTRb0owaCZfTzvtyue8L7733PZdL0fsP2z3P830+5zmc5z3neQVxPLKOJAZYTjI3AtcgWIykAMhEEERyAcEvSL4FThGkmwxOijpGdMMJHQdZTREeHkFQDszV8QX6kLzJMI3iZX506+sKUD5JHh6eRbIOQYpbcUc7yRCCXQyzSbzEuVhaMQFlDWUItiHIjiWmNS45j+Rx0cCeaH4RAaWPFLxsR1CpFVjXWNJCP+tFM0NOro6A0kc6ObQiuVk3Xlz2gk5+407RzF/j/ScAjmbuEOJfggsRSTrp57bxmZwI6Kd5ypc1UpolLSKAzzpsAzQ2RBJvxbVMiXIaYbV144wBGqUkmbMJ36264Gp3B1kSKkFhQD87EDykqzcl9pImEaBKaRuA0k8h8MOki7Bb2kW3wF27ITkV2qrgzNt2T1XMoUQE+CkEGEBQ41Z/UnYKrrwNPKmmzMA52HyZk+RWUU+NMF78g/wcx7tVn7PkJri/HVJmhn0v9MGWfCetPtIoENJPKYJe/WiaHgtXwgOHICU97Bgcgr13wzftzmKSFULW8gzwgmY4PfMFN8CaDpgxK+w3Mgz7y+DMwWhaG1QG30Nwh6NVkgeW3A4XB+D7D/WgQtbF18ODh2FGhgUuCAfL4fS+6JqSNpXBr4Gljpb3HYBlq8yhky3QqqqQdA9aWAprj0Bqph3unTXwlYv3geSsymA/gtkToook2DwE6m/o+bwJ2h52Bzn/OljbCWlZYX85Au+ug1NvuJuk5HeVQVVzPI4eVb1QVGof+nQ7vP9o9ADzroWKo5BmmbeCa/XBl7vcwSkrSVABDgKjRWmc7yX5UNkDuVfYB3pfgw+ecA6UfzVUHIOZXkvmpJn5L5rcw1kAfwVyI3pmFZiQOQvtJidegY5q+29zr4KK45CeY4dTGf+sUQ/OBDSWOPImCUnOLgRfD3gX2IN81ABH/OZvc5ZBRRfMssxVSjPTn2zThzMBjU0SucxYZb3FZia9RfZg3S/C6b0mXEaePXOHq+HEq/HBmYDtCnADguddqWRfbmYya77d/OKf9iKsMqcy+/FWV7JRjIxCrfeqyykxM5k1L7Ju59PQs2WycCqDK+I7LOQuMjOZ6XB3P7oRutwtSIwZmIcFY6lraQCe0prypYuhshsy54Tdjj8HxzZpyUQxNo9bBmC8B9a8pXDvAcguBrVZErGs5uawH1hHIafvkd8AnO6XptH/xTL4j6+dsFrUh/s10+viDjtFvb0X9P9rfRhLrZpH2aiz+K2JqhkxdDo4zypXzaOQkKzDwyCvg3mBnsJnB2k8JuoYdooRu4FZyz1IGhPeElEtDlgvAuyPNvmYgGMlKJEtYNhNkI0JaQFbZzdtm+jjl8DoRvzNciQrjc8QcOXYZwjT+A+E0a34zvgMIegiNb7PEP8AC6xsD2sMAc4AAAAASUVORK5CYII\x3d) no-repeat; background-size: ",[0,40]," ",[0,40],"; }\n.",[1],"wrong-test .",[1],"time { display: block; width: 100%; font-size: 10px; color: #878c9e; line-height: ",[0,30],"; margin-bottom: ",[0,61],"; }\n.",[1],"wrong-test .",[1],"question { display: block; color: #323643; line-height: ",[0,36],"; margin-bottom: ",[0,60],"; }\n.",[1],"wrong-test .",[1],"options { margin-top: ",[0,20],"; }\n.",[1],"wrong-test .",[1],"options .",[1],"option { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"wrong-test .",[1],"options .",[1],"option .",[1],"option-num { -webkit-flex-basis: ",[0,72],"; -ms-flex-preferred-size: ",[0,72],"; flex-basis: ",[0,72],"; height: ",[0,72],"; background: white; border: 2px solid #e5e9ef; border-radius: 50%; text-align: center; line-height: ",[0,68],"; margin: 0 ",[0,32]," ",[0,40]," 0; }\n.",[1],"wrong-test .",[1],"options .",[1],"option .",[1],"option-answer { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; line-height: 20px; margin-top: 6px; }\n.",[1],"wrong-test .",[1],"options .",[1],"correct .",[1],"option-num { background: #50C341; color: #fff; border: 0; }\n.",[1],"wrong-test .",[1],"options .",[1],"wrong .",[1],"option-num { background: #FF5A5A; color: #fff; border: 0; }\n.",[1],"wrong-test .",[1],"teacherword-anlysis .",[1],"line-block { display: block; margin-bottom: ",[0,28],"; }\n.",[1],"wrong-test .",[1],"teacherword-anlysis .",[1],"line-block .",[1],"correct { color: #50C341; }\n.",[1],"wrong-test .",[1],"teacherword-anlysis .",[1],"line-block .",[1],"wrong { color: #FF5A5A; }\n.",[1],"wrong-test .",[1],"teacherword-anlysis .",[1],"line-block .",[1],"answer-title { margin-right: ",[0,10],"; }\n.",[1],"wrong-test .",[1],"teacherword-anlysis .",[1],"line-block .",[1],"title { margin-left: ",[0,-16],"; color: #FF7800; margin-right: ",[0,10],"; }\n.",[1],"wrong-test .",[1],"teacherword-anlysis .",[1],"anlysis { margin-top: ",[0,61],"; }\n.",[1],"wrong-test .",[1],"teacherword-anlysis .",[1],"anlysis .",[1],"line-block { margin-bottom: ",[0,50],"; }\n",],undefined,{path:"./components/wrong_test/wrong_test.wxss"});    
__wxAppCode__['components/wrong_test/wrong_test.wxml']=$gwx('./components/wrong_test/wrong_test.wxml');

__wxAppCode__['pages/address/address.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\nbody { padding-bottom: ",[0,120],"; }\n.",[1],"content { position: relative; }\n.",[1],"list { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding: ",[0,20]," ",[0,30],"; background: #fff; position: relative; }\n.",[1],"wrapper { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"address-box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"address-box .",[1],"tag { font-size: ",[0,24],"; color: #fa436a; margin-right: ",[0,10],"; background: #fffafb; border: 1px solid #ffb4c7; border-radius: ",[0,4],"; padding: ",[0,4]," ",[0,10],"; line-height: 1; }\n.",[1],"address-box .",[1],"address { font-size: ",[0,30],"; color: #303133; }\n.",[1],"u-box { font-size: ",[0,28],"; color: #909399; margin-top: ",[0,16],"; }\n.",[1],"u-box .",[1],"name { margin-right: ",[0,30],"; }\n.",[1],"icon-bianji { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: ",[0,80],"; font-size: ",[0,40],"; color: #909399; padding-left: ",[0,30],"; }\n.",[1],"add-btn { position: fixed; left: ",[0,30],"; right: ",[0,30],"; bottom: ",[0,16],"; z-index: 95; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; width: ",[0,690],"; height: ",[0,80],"; font-size: ",[0,32],"; color: #fff; background-color: #fa436a; border-radius: ",[0,10],"; -webkit-box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4); box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4); }\n",],undefined,{path:"./pages/address/address.wxss"});    
__wxAppCode__['pages/address/address.wxml']=$gwx('./pages/address/address.wxml');

__wxAppCode__['pages/address/addressManage.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\nbody { background: #f8f8f8; padding-top: ",[0,16],"; }\n.",[1],"row { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; position: relative; padding: 0 ",[0,30],"; height: ",[0,110],"; background: #fff; }\n.",[1],"row .",[1],"tit { -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; width: ",[0,120],"; font-size: ",[0,30],"; color: #303133; }\n.",[1],"row .",[1],"input { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; font-size: ",[0,30],"; color: #303133; }\n.",[1],"row .",[1],"icon-shouhuodizhi { font-size: ",[0,36],"; color: #909399; }\n.",[1],"default-row { margin-top: ",[0,16],"; }\n.",[1],"default-row .",[1],"tit { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"default-row wx-switch { -webkit-transform: translateX(",[0,16],") scale(0.9); -ms-transform: translateX(",[0,16],") scale(0.9); transform: translateX(",[0,16],") scale(0.9); }\n.",[1],"add-btn { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; width: ",[0,690],"; height: ",[0,80],"; margin: ",[0,60]," auto; font-size: ",[0,32],"; color: #fff; background-color: #fa436a; border-radius: ",[0,10],"; -webkit-box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4); box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4); }\n",],undefined,{path:"./pages/address/addressManage.wxss"});    
__wxAppCode__['pages/address/addressManage.wxml']=$gwx('./pages/address/addressManage.wxml');

__wxAppCode__['pages/cart/cart.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"container { padding-bottom: ",[0,134],"; }\n.",[1],"container .",[1],"empty { position: fixed; left: 0; top: 0; width: 100%; height: 100vh; padding-bottom: ",[0,100],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; background: #fff; }\n.",[1],"container .",[1],"empty wx-image { width: ",[0,240],"; height: ",[0,160],"; margin-bottom: ",[0,30],"; }\n.",[1],"container .",[1],"empty .",[1],"empty-tips { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; font-size: ",[0,26],"; color: #C0C4CC; }\n.",[1],"container .",[1],"empty .",[1],"empty-tips .",[1],"navigator { color: #fa436a; margin-left: ",[0,16],"; }\n.",[1],"cart-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; position: relative; padding: ",[0,30]," ",[0,40],"; }\n.",[1],"cart-item .",[1],"image-wrapper { width: ",[0,230],"; height: ",[0,230],"; -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; position: relative; }\n.",[1],"cart-item .",[1],"image-wrapper wx-image { border-radius: ",[0,8],"; }\n.",[1],"cart-item .",[1],"checkbox { position: absolute; left: ",[0,-16],"; top: ",[0,-16],"; z-index: 8; font-size: ",[0,44],"; line-height: 1; padding: ",[0,4],"; color: #C0C4CC; background: #fff; border-radius: 50px; }\n.",[1],"cart-item .",[1],"item-right { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; overflow: hidden; position: relative; padding-left: ",[0,30],"; }\n.",[1],"cart-item .",[1],"item-right .",[1],"title, .",[1],"cart-item .",[1],"item-right .",[1],"price { font-size: ",[0,30],"; color: #303133; height: ",[0,40],"; line-height: ",[0,40],"; }\n.",[1],"cart-item .",[1],"item-right .",[1],"attr { font-size: ",[0,26],"; color: #909399; height: ",[0,50],"; line-height: ",[0,50],"; }\n.",[1],"cart-item .",[1],"item-right .",[1],"price { height: ",[0,50],"; line-height: ",[0,50],"; }\n.",[1],"cart-item .",[1],"del-btn { padding: ",[0,4]," ",[0,10],"; font-size: ",[0,34],"; height: ",[0,50],"; color: #909399; }\n.",[1],"action-section { position: fixed; left: ",[0,30],"; bottom: ",[0,30],"; z-index: 95; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; width: ",[0,690],"; height: ",[0,100],"; padding: 0 ",[0,30],"; background: rgba(255, 255, 255, 0.9); -webkit-box-shadow: 0 0 ",[0,20]," 0 rgba(0, 0, 0, 0.5); box-shadow: 0 0 ",[0,20]," 0 rgba(0, 0, 0, 0.5); border-radius: ",[0,16],"; }\n.",[1],"action-section .",[1],"checkbox { height: ",[0,52],"; position: relative; }\n.",[1],"action-section .",[1],"checkbox wx-image { width: ",[0,52],"; height: 100%; position: relative; z-index: 5; }\n.",[1],"action-section .",[1],"clear-btn { position: absolute; left: ",[0,26],"; top: 0; z-index: 4; width: 0; height: ",[0,52],"; line-height: ",[0,52],"; padding-left: ",[0,38],"; font-size: ",[0,28],"; color: #fff; background: #C0C4CC; border-radius: 0 50px 50px 0; opacity: 0; -webkit-transition: .2s; -o-transition: .2s; transition: .2s; }\n.",[1],"action-section .",[1],"clear-btn.",[1],"show { opacity: 1; width: ",[0,120],"; }\n.",[1],"action-section .",[1],"total-box { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; text-align: right; padding-right: ",[0,40],"; }\n.",[1],"action-section .",[1],"total-box .",[1],"price { font-size: ",[0,32],"; color: #303133; }\n.",[1],"action-section .",[1],"total-box .",[1],"coupon { font-size: ",[0,24],"; color: #909399; }\n.",[1],"action-section .",[1],"total-box .",[1],"coupon wx-text { color: #303133; }\n.",[1],"action-section .",[1],"confirm-btn { padding: 0 ",[0,38],"; margin: 0; border-radius: 100px; height: ",[0,76],"; line-height: ",[0,76],"; font-size: ",[0,30],"; background: #fa436a; -webkit-box-shadow: 1px 2px 5px rgba(217, 60, 93, 0.72); box-shadow: 1px 2px 5px rgba(217, 60, 93, 0.72); }\n.",[1],"action-section .",[1],"checkbox.",[1],"checked, .",[1],"cart-item .",[1],"checkbox.",[1],"checked { color: #fa436a; }\n",],undefined,{path:"./pages/cart/cart.wxss"});    
__wxAppCode__['pages/cart/cart.wxml']=$gwx('./pages/cart/cart.wxml');

__wxAppCode__['pages/category/category.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\nbody, .",[1],"content { height: 100%; background-color: #f8f8f8; }\n.",[1],"content { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"left-aside { -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; width: ",[0,200],"; height: 100%; background-color: #fff; }\n.",[1],"f-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; width: 100%; height: ",[0,100],"; font-size: ",[0,28],"; color: #606266; position: relative; }\n.",[1],"f-item.",[1],"active { color: #fa436a; background: #f8f8f8; }\n.",[1],"f-item.",[1],"active:before { content: \x27\x27; position: absolute; left: 0; top: 50%; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); height: ",[0,36],"; width: ",[0,8],"; background-color: #fa436a; border-radius: 0 4px 4px 0; opacity: .8; }\n.",[1],"right-aside { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; overflow: hidden; padding-left: ",[0,20],"; }\n.",[1],"s-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: ",[0,70],"; padding-top: ",[0,8],"; font-size: ",[0,28],"; color: #303133; }\n.",[1],"t-list { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; width: 100%; background: #fff; padding-top: ",[0,12],"; }\n.",[1],"t-list:after { content: \x27\x27; -webkit-box-flex: 99; -webkit-flex: 99; -ms-flex: 99; flex: 99; height: 0; }\n.",[1],"t-item { -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; width: ",[0,176],"; font-size: ",[0,26],"; color: #666; padding-bottom: ",[0,20],"; }\n.",[1],"t-item wx-image { width: ",[0,140],"; height: ",[0,140],"; }\n",],undefined,{path:"./pages/category/category.wxss"});    
__wxAppCode__['pages/category/category.wxml']=$gwx('./pages/category/category.wxml');

__wxAppCode__['pages/detail/detail.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\nbody { background: #f8f8f8; }\n.",[1],"carousel { height: 200px; }\n.",[1],"carousel .",[1],"image-wrapper { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-align-content: center; -ms-flex-line-pack: center; align-content: center; width: 100%; height: 100%; overflow: hidden; }\n.",[1],"carousel .",[1],"image-wrapper wx-image { width: 100%; height: 100%; }\n.",[1],"scroll-view-wrapper { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: ",[0,90],"; padding: ",[0,20]," 0 ",[0,20]," ",[0,40],"; background: #fff; }\n.",[1],"episode-panel { white-space: nowrap; width: 100%; }\n.",[1],"episode-panel wx-view { display: inline-block; margin-right: ",[0,30],"; width: ",[0,56],"; font-size: ",[0,32],"; color: #606266; }\n.",[1],"episode-panel wx-view.",[1],"current { color: #07a7a7; }\n.",[1],"info { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding: ",[0,10]," ",[0,40],"; background: #fff; }\n.",[1],"info .",[1],"title { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; font-size: ",[0,36],"; color: #303133; }\n.",[1],"info .",[1],"title wx-text:last-child { font-size: ",[0,24],"; color: #909399; margin-top: ",[0,4],"; }\n.",[1],"info .",[1],"title wx-text:last-child.Skeleton { width: ",[0,220],"; }\n.",[1],"info .",[1],"yticon { font-size: ",[0,44],"; color: #606266; margin: 0 ",[0,10]," 0 ",[0,30],"; }\n.",[1],"actions { padding: ",[0,10]," ",[0,28],"; background: #fff; }\n.",[1],"actions .",[1],"yticon { font-size: ",[0,46],"; color: #606266; padding: ",[0,10]," ",[0,12],"; }\n.",[1],"actions .",[1],"yticon.",[1],"active { color: #ff4443; }\n.",[1],"actions .",[1],"yticon:nth-child(2) { font-size: ",[0,50],"; }\n.",[1],"section-tit { font-size: ",[0,30],"; color: #303133; margin-bottom: ",[0,30],"; text-align: center; }\n.",[1],"guess { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding: ",[0,30]," ",[0,40]," ",[0,10],"; margin-top: ",[0,16],"; background: #fff; }\n.",[1],"guess-list { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; width: 100%; }\n.",[1],"guess-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; overflow: hidden; min-width: 40%; margin-right: ",[0,26],"; padding-bottom: ",[0,40],"; }\n.",[1],"guess-item:nth-child(2n) { margin-right: 0; }\n.",[1],"guess-item wx-image { width: 100%; height: ",[0,200],"; border-radius: ",[0,10],"; }\n.",[1],"guess-item wx-text { font-size: ",[0,24],"; color: #909399; }\n.",[1],"guess-item wx-text.",[1],"Skeleton { width: ",[0,180],"; }\n.",[1],"guess-item wx-text.",[1],"Skeleton.",[1],"title { width: ",[0,140],"; }\n.",[1],"guess-item wx-text.",[1],"title { font-size: ",[0,30],"; color: #303133; margin-top: ",[0,16],"; margin-bottom: ",[0,8],"; }\n.",[1],"evalution { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; background: #fff; margin-top: ",[0,16],"; padding: ",[0,40]," 0; }\n.",[1],"eva-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; padding: ",[0,20]," ",[0,40],"; }\n.",[1],"eva-item wx-image { width: ",[0,60],"; height: ",[0,60],"; border-radius: 50px; -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; margin-right: ",[0,24],"; }\n.",[1],"eva-right { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; font-size: ",[0,26],"; color: #909399; position: relative; }\n.",[1],"eva-right .",[1],"zan-box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: base-line; -webkit-align-items: base-line; -ms-flex-align: base-line; align-items: base-line; position: absolute; top: ",[0,10],"; right: ",[0,10],"; }\n.",[1],"eva-right .",[1],"zan-box .",[1],"yticon { margin-left: ",[0,8],"; }\n.",[1],"eva-right .",[1],"content { font-size: ",[0,28],"; color: #333; padding-top: ",[0,20],"; }\n",],undefined,{path:"./pages/detail/detail.wxss"});    
__wxAppCode__['pages/detail/detail.wxml']=$gwx('./pages/detail/detail.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\nbody { background: #f5f5f5; }\n.",[1],"m-t { margin-top: ",[0,16],"; }\n.",[1],"carousel-section { position: relative; }\n.",[1],"carousel-section .",[1],"titleNview-placing { height: var(--status-bar-height); padding-top: 44px; -webkit-box-sizing: content-box; box-sizing: content-box; }\n.",[1],"carousel-section .",[1],"titleNview-background { position: absolute; top: 0; left: 0; width: 100%; height: ",[0,426],"; -webkit-transition: .4s; -o-transition: .4s; transition: .4s; }\n.",[1],"carousel { width: 100%; height: ",[0,350],"; }\n.",[1],"carousel .",[1],"carousel-item { width: 100%; height: 100%; overflow: hidden; }\n.",[1],"carousel wx-image { width: 100%; height: 100%; }\n.",[1],"swiper-dots { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; position: absolute; left: ",[0,60],"; bottom: ",[0,15],"; width: ",[0,72],"; height: ",[0,36],"; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk4MzlBNjE0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk4MzlBNjA0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0E3RUNERkE0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E3RUNERkI0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Gh5BPAAACTUlEQVR42uzcQW7jQAwFUdN306l1uWwNww5kqdsmm6/2MwtVCp8CosQtP9vg/2+/gY+DRAMBgqnjIp2PaCxCLLldpPARRIiFj1yBbMV+cHZh9PURRLQNhY8kgWyL/WDtwujjI8hoE8rKLqb5CDJaRMJHokC6yKgSCR9JAukmokIknCQJpLOIrJFwMsBJELFcKHwM9BFkLBMKFxNcBCHlQ+FhoocgpVwwnv0Xn30QBJGMC0QcaBVJiAMiec/dcwKuL4j1QMsVCXFAJE4s4NQA3K/8Y6DzO4g40P7UcmIBJxbEesCKWBDg8wWxHrAiFgT4fEGsB/CwIhYE+AeBAAdPLOcV8HRmWRDAiQVcO7GcV8CLM8uCAE4sQCDAlHcQ7x+ABQEEAggEEAggEEAggEAAgQACASAQQCCAQACBAAIBBAIIBBAIIBBAIABe4e9iAe/xd7EAJxYgEGDeO4j3EODp/cOCAE4sYMyJ5cwCHs4rCwI4sYBxJ5YzC84rCwKcXxArAuthQYDzC2JF0H49LAhwYUGsCFqvx5EF2T07dMaJBetx4cRyaqFtHJ8EIhK0i8OJBQxcECuCVutxJhCRoE0cZwMRyRcFefa/ffZBVPogePihhyCnbBhcfMFFEFM+DD4m+ghSlgmDkwlOgpAl4+BkkJMgZdk4+EgaSCcpVX7bmY9kgXQQU+1TgE0c+QJZUUz1b2T4SBbIKmJW+3iMj2SBVBWz+leVfCQLpIqYbp8b85EskIxyfIOfK5Sf+wiCRJEsllQ+oqEkQfBxmD8BBgA5hVjXyrBNUQAAAABJRU5ErkJggg\x3d\x3d); background-size: 100% 100%; }\n.",[1],"swiper-dots .",[1],"num { width: ",[0,36],"; height: ",[0,36],"; border-radius: 50px; font-size: ",[0,24],"; color: #fff; text-align: center; line-height: ",[0,36],"; }\n.",[1],"swiper-dots .",[1],"sign { position: absolute; top: 0; left: 50%; line-height: ",[0,36],"; font-size: ",[0,12],"; color: #fff; -webkit-transform: translateX(-50%); -ms-transform: translateX(-50%); transform: translateX(-50%); }\n.",[1],"cate-section { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; padding: ",[0,30]," ",[0,22],"; background: #fff; }\n.",[1],"cate-section .",[1],"cate-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,26],"; color: #303133; }\n.",[1],"cate-section wx-image { width: ",[0,88],"; height: ",[0,88],"; margin-bottom: ",[0,14],"; border-radius: 50%; opacity: .7; -webkit-box-shadow: ",[0,4]," ",[0,4]," ",[0,20]," rgba(250, 67, 106, 0.3); box-shadow: ",[0,4]," ",[0,4]," ",[0,20]," rgba(250, 67, 106, 0.3); }\n.",[1],"quick-way-enter { position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; padding: ",[0,30]," 0; }\n.",[1],"quick-way-enter .",[1],"qw-li { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; text-align: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"quick-way-enter .",[1],"qw-li .",[1],"qw-area { background: #fff; width: ",[0,150],"; height: ",[0,150],"; line-height: ",[0,150],"; -webkit-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1); box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1); border-radius: 5px; }\n.",[1],"quick-way-enter .",[1],"qw-li .",[1],"qw-area .",[1],"qw-icon { width: ",[0,96],"; height: ",[0,96],"; border-radius: 50%; margin: ",[0,10]," auto; }\n.",[1],"quick-way-enter .",[1],"qw-li .",[1],"qw-area .",[1],"qw-icon.",[1],"subscribe-icon { background: #fee46d; border: 1px solid #ffe56c; }\n.",[1],"quick-way-enter .",[1],"qw-li .",[1],"qw-area .",[1],"qw-icon.",[1],"homework-icon { background: #af9bff; border: 1px solid #896efe; }\n.",[1],"quick-way-enter .",[1],"qw-li .",[1],"qw-area .",[1],"qw-icon.",[1],"wrongtopic-icon { background: #85a6ff; border: 1px solid #7a9dff; }\n.",[1],"quick-way-enter .",[1],"qw-li .",[1],"qw-area .",[1],"qw-title { font-size: 12px; display: block; line-height: ",[0,22],"; }\n.",[1],"ad-1 { width: 100%; height: ",[0,210],"; padding: ",[0,10]," 0; background: #fff; }\n.",[1],"ad-1 wx-image { width: 100%; height: 100%; }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/learning/course/course_detail/course_detail.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"course-detail .",[1],"course-ad { width: 100%; }\n.",[1],"course-detail .",[1],"course-ad .",[1],"_img { width: 100%; height: ",[0,320],"; }\n.",[1],"course-detail .",[1],"course-tab { border-top: 1px solid #F8F6FC; -webkit-box-shadow: 0px 5px 8px 2px rgba(0, 0, 0, 0.1); box-shadow: 0px 5px 8px 2px rgba(0, 0, 0, 0.1); }\n.",[1],"course-detail .",[1],"course-tab .",[1],"tab-title { font-size: 13px; border-bottom: 2px solid #FF794A; margin: 0 ",[0,32],"; height: 25px; width: 40px; display: inline-block; text-align: center; }\n.",[1],"course-detail .",[1],"vedio-list { padding: ",[0,20]," ",[0,40],"; }\n.",[1],"course-detail .",[1],"vedio-list .",[1],"list-li { overflow: hidden; height: ",[0,120],"; line-height: ",[0,120],"; }\n.",[1],"course-detail .",[1],"vedio-list .",[1],"list-li .",[1],"video-title { font-size: 13px; }\n.",[1],"course-detail .",[1],"vedio-list .",[1],"list-li .",[1],"video-title::before { margin-top: ",[0,40],"; margin-right: ",[0,20],"; content: \x27\x27; width: ",[0,50],"; height: ",[0,50],"; float: left; background: url(data:image/png;base64,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\x3d); background-size: ",[0,50]," ",[0,50],"; }\n.",[1],"course-detail .",[1],"booking-btn { width: ",[0,88],"; height: ",[0,88],"; border-radius: 50%; background: -webkit-gradient(linear, left top, right top, from(#f9d423), to(#ff794a)); background: -o-linear-gradient(left, #f9d423 0%, #ff794a 100%); background: linear-gradient(90deg, #f9d423 0%, #ff794a 100%); position: fixed; bottom: ",[0,80],"; right: ",[0,44],"; }\n.",[1],"course-detail .",[1],"booking-btn::before { content: \x27\x27; position: absolute; width: ",[0,50],"; height: ",[0,50],"; top: ",[0,18],"; left: ",[0,20],"; background: url(data:image/png;base64,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\x3d\x3d); background-size: ",[0,50]," ",[0,50],"; }\n.",[1],"course-detail .",[1],"booking-btn::after { content: \x27\\8BA2\\9605\x27; position: absolute; width: ",[0,50],"; height: ",[0,50],"; bottom: ",[0,-60],"; left: ",[0,20],"; font-size: 12px; color: #ff794a; }\n",],undefined,{path:"./pages/learning/course/course_detail/course_detail.wxss"});    
__wxAppCode__['pages/learning/course/course_detail/course_detail.wxml']=$gwx('./pages/learning/course/course_detail/course_detail.wxml');

__wxAppCode__['pages/learning/course/course.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"course .",[1],"subscribe { padding: ",[0,30]," ",[0,32],"; }\n.",[1],"course .",[1],"subscribe .",[1],"subs-li { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; margin-bottom: ",[0,32],"; }\n.",[1],"course .",[1],"subscribe .",[1],"subs-li .",[1],"course-img .",[1],"_img { width: ",[0,318],"; height: ",[0,182],"; }\n.",[1],"course .",[1],"subscribe .",[1],"subs-li .",[1],"course-title { font-size: 13px; margin: ",[0,30]," 0 0 ",[0,31],"; }\n.",[1],"course .",[1],"subscribe .",[1],"subs-li .",[1],"course-status { margin-top: ",[0,50],"; }\n.",[1],"course .",[1],"subscribe .",[1],"subs-li .",[1],"course-status .",[1],"all-num { background: #C6CBD4; font-size: 12px; color: #fff; border-radius: 50px; padding: 3px 8px; }\n.",[1],"course .",[1],"subscribe .",[1],"subs-li .",[1],"course-status .",[1],"have-learn { font-size: 12px; margin-left: ",[0,20],"; color: #C6CBD4; }\n.",[1],"course .",[1],"subscribe .",[1],"subs-li .",[1],"course-status .",[1],"have-learn .",[1],"num { color: #FF794A; }\n",],undefined,{path:"./pages/learning/course/course.wxss"});    
__wxAppCode__['pages/learning/course/course.wxml']=$gwx('./pages/learning/course/course.wxml');

__wxAppCode__['pages/learning/homework/do_homework.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"answer-input .",[1],"question { line-height: 36px; }\n.",[1],"answer-input .",[1],"options { margin-top: ",[0,20],"; }\n.",[1],"answer-input .",[1],"options .",[1],"option { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"answer-input .",[1],"options .",[1],"option .",[1],"option-num { -webkit-flex-basis: ",[0,72],"; -ms-flex-preferred-size: ",[0,72],"; flex-basis: ",[0,72],"; height: ",[0,72],"; background: white; border: 2px solid #e5e9ef; border-radius: 50%; text-align: center; line-height: ",[0,68],"; margin: 0 ",[0,32]," ",[0,40]," 0; }\n.",[1],"answer-input .",[1],"options .",[1],"option .",[1],"option-answer { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; line-height: 20px; margin-top: 6px; }\n.",[1],"answer-input .",[1],"options .",[1],"selected .",[1],"option-num { background: #FF9600; color: #fff; border: 0; }\n.",[1],"answer-input .",[1],"options .",[1],"correct .",[1],"option-num { background: #50C341; color: #fff; border: 0; }\n.",[1],"answer-input .",[1],"options .",[1],"wrong .",[1],"option-num { background: #FF5A5A; color: #fff; border: 0; }\n.",[1],"answer-input .",[1],"jieda-answer { margin: ",[0,80]," auto 0 auto; }\n.",[1],"answer-input .",[1],"answer-upload { margin-bottom: ",[0,60],"; width: ",[0,686],"; height: ",[0,100],"; line-height: ",[0,100],"; background: #fff5eb; border: 2px solid #ffc38c; border-radius: ",[0,20],"; text-align: center; }\n.",[1],"answer-input .",[1],"answer-upload .",[1],"title { font-size: 16px; color: #ff7800; }\n.",[1],"answer-input .",[1],"uni-input { margin-top: ",[0,24],"; }\n.",[1],"answer-input .",[1],"inputing { background: #fafafb; border: 2px solid #e5e9ef; }\n.",[1],"answer-input .",[1],"unwrite { background: #e5e9ef; border: 2px solid #e5e9ef; }\n.",[1],"answer-input .",[1],"unwrite .",[1],"title { color: #BEC3CD; }\n.",[1],"answer-input .",[1],"jieda-answer-noreview { margin: ",[0,80]," auto ",[0,20]," auto; }\n.",[1],"answer-input .",[1],"jieda-answer-noreview .",[1],"title { display: block; width: 100%; color: #FF7800; margin-left: ",[0,-12],"; }\n.",[1],"answer-input .",[1],"jieda-answer-noreview .",[1],"answer { display: block; margin-top: ",[0,30],"; color: #323643; }\n.",[1],"answer-input .",[1],"teacherword-anlysis { font-size: 13px; font-family: PingFang SC; font-weight: bold; color: #323643; line-height: 26px; margin-left: ",[0,-12],"; position: relative; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"line-block .",[1],"title { color: #FF7800; margin-right: ",[0,10],"; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"ifcorrect-pic { position: absolute; right: ",[0,32],"; top: ",[0,0],"; width: ",[0,142],"; height: ",[0,136],"; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"ifcorrect-pic.",[1],"correct { background: url(data:image/png;base64,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); background-size: ",[0,142]," ",[0,136],"; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"ifcorrect-pic.",[1],"wrong { background: url(data:image/png;base64,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\x3d); background-size: ",[0,142]," ",[0,136],"; }\n@charset \x22UTF-8\x22;\n.",[1],"do-homework { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; height: 100%; font-family: PingFang SC; font-size: 13px; font-weight: bold; color: #333333; }\n.",[1],"do-homework .",[1],"homework-head { -webkit-flex-basis: ",[0,88],"; -ms-flex-preferred-size: ",[0,88],"; flex-basis: ",[0,88],"; height: ",[0,88],"; line-height: ",[0,88],"; }\n.",[1],"do-homework .",[1],"homework-head .",[1],"close-btn { position: absolute; display: block; margin: ",[0,32],"; width: ",[0,24],"; height: ",[0,24],"; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABk0lEQVRIS6WUTUsCURSG3zPZtv8RES2jP1Fg5EIwyCLap1DartKJ0W3gQoWgD0Jo019IWof0Q9yq88Y1x/yYO3PvNLuZued57rn3nCNuvblFSgPE2ggsXxWP3/CP567WTvvkDQR9n6NTqdZanwC2f5kc+mSuXDx5SeJwvXaWwgcAK5P4rhL0AGz8ATkUOrmL4pGVJAQOQL7E9Vp7FHYASc1KADm8LOSfTTIJh2Mwor8vCnDrNTOO4DGJRAcnkC0V8p2xIKkkDq64U4GtxAS+JDCVmMJDBepjtd4+gO8/QZYvXiiyUIoqZBCc+WJRzB3R7M8IiYoJ6jwSrs0gEIVL5vao3XmwSpuBgSQWHpuBWqC50PFYMWnGyAz08CC/eIlWoCtFgGLT8aGCqDon6diMlSWBSRPZzK45gQncdnZNBTZwG8lYkARuKpFKrZ0W8NWm/Rfnje5ORkRGql7zGyLrM0FGHWomQU8JuhDZmQQkguuOi+SHuG5jk6nVe4JrECmXzvPvi7uzea/Um7tC5xpgXxzn7AdtTE/GZoQWqQAAAABJRU5ErkJggg\x3d\x3d); background-size: ",[0,24]," ",[0,24],"; }\n.",[1],"do-homework .",[1],"homework-head .",[1],"page-prv { float: left; width: 100%; text-align: center; font-size: 18px; color: #323643; }\n.",[1],"do-homework .",[1],"homework-head .",[1],"page-prv .",[1],"allnum { font-size: 12px; color: #878C9E; }\n.",[1],"do-homework .",[1],"homework-head .",[1],"homework-btn { position: absolute; top: ",[0,28],"; right: ",[0,32],"; display: block; width: ",[0,32],"; height: ",[0,32],"; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAYAAAD7PHgWAAACfklEQVRYR+1Yv2/TYBB9lwQaIJXKAIKNjREJFpiQKoTEQlX+ACQSkURlShpD3S6ecCKnzdRfQU4l/gAQLEgdKjF1Q7ClWzeiIkFAgTaQ+pCNkjgmTePPtaBRvNm5d/fy7vtOukdwPNl5/Qoz4gCNA7gEIOyMOeL3PQDbAG8QoTgzHftgz0/NF0VZC49EjAJAcQCBIybRbzoD4OJO4Gu6kE7vmiCLYGph4dT5/bE3INzsN5OvcYy3O8HqHZOkRVDNry0DnPS1qMvkzFidlaJJ+nPm6J2jrWUGzf2s/VhXlEc1l7ldhSvKYuRk5PRtAj8FcNkGNoj4Kql5fRGgKdsPW/i1d0OWp764quQxWFWXzuJEeLOTJC+RqullELWZM9+TpdhLj/WE4KqmT4LoRQvMvEVqvmRe85Hmx3ptd9Tvth7EXtOen2lQw36k6iZBtgPkTLQ1eprfc/P6XcOgVRAugFEJBDjxZDr22lmoI66Xhj1yOPn0RVDVSh8tcu2nImeiF50cusT1otk9h0OwwSCY1UoTTFgBLBUrxEjOSNFXTnkccT3VOyiHUIuFrqQgaEhQULgWbDAVHM5B27kQavF/P6iHc9Bri72ODjd4oTPopoDX2MEkOJyDXi/JcA4eomDH0hTiUESS7n/3ehtF8LmcPmoE6ZsNWz8Oa+ffi3s9SNeV1IOqiAqiGGtxD4U3QW13gRnLXa0PBsrEPBvC53VJknxtt9XWAG6BSHVaH4bRuGbtwFmttMKEhOi/9wfHRTkTSxwP+81UwPQIz+2PFYjw8F8amMx49ilYTXUYmPYWmXacYZAp7TjIsoBbvo0/rUQdjG0GNpgbxbnH8ff2Or8BQSHzmITm7+wAAAAASUVORK5CYII\x3d); background-size: ",[0,32]," ",[0,32],"; }\n.",[1],"do-homework .",[1],"homework-content { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; padding: ",[0,40]," 0; }\n.",[1],"do-homework .",[1],"homework-content .",[1],"test-content { padding: 0 ",[0,32],"; }\n.",[1],"do-homework .",[1],"answer-card { width: 100%; height: 100%; position: fixed; top: 0; left: 0; z-index: 999; font-family: PingFang SC; font-weight: bold; color: #323643; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-bg { pointer-events: auto; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(10, 10, 10, 0.5); }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content { background: white; border-radius: ",[0,30]," ",[0,30]," 0px 0px; position: absolute; bottom: 0; left: 0; width: 100%; height: ",[0,800],"; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"card-header .",[1],"title { display: block; width: 100%; text-align: center; font-size: 18px; margin-top: ",[0,36],"; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"card-header .",[1],"close-btn { position: absolute; top: ",[0,42],"; right: ",[0,40],"; display: block; width: ",[0,24],"; height: ",[0,24],"; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABk0lEQVRIS6WUTUsCURSG3zPZtv8RES2jP1Fg5EIwyCLap1DartKJ0W3gQoWgD0Jo019IWof0Q9yq88Y1x/yYO3PvNLuZued57rn3nCNuvblFSgPE2ggsXxWP3/CP567WTvvkDQR9n6NTqdZanwC2f5kc+mSuXDx5SeJwvXaWwgcAK5P4rhL0AGz8ATkUOrmL4pGVJAQOQL7E9Vp7FHYASc1KADm8LOSfTTIJh2Mwor8vCnDrNTOO4DGJRAcnkC0V8p2xIKkkDq64U4GtxAS+JDCVmMJDBepjtd4+gO8/QZYvXiiyUIoqZBCc+WJRzB3R7M8IiYoJ6jwSrs0gEIVL5vao3XmwSpuBgSQWHpuBWqC50PFYMWnGyAz08CC/eIlWoCtFgGLT8aGCqDon6diMlSWBSRPZzK45gQncdnZNBTZwG8lYkARuKpFKrZ0W8NWm/Rfnje5ORkRGql7zGyLrM0FGHWomQU8JuhDZmQQkguuOi+SHuG5jk6nVe4JrECmXzvPvi7uzea/Um7tC5xpgXxzn7AdtTE/GZoQWqQAAAABJRU5ErkJggg\x3d\x3d); background-size: ",[0,24]," ",[0,24],"; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"option-box { padding: 0 ",[0,32],"; overflow: hidden; margin-top: ",[0,40],"; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"option-box .",[1],"opt-li { float: left; width: 20%; margin-top: ",[0,60],"; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"option-box .",[1],"opt-li .",[1],"opt { width: ",[0,80],"; height: ",[0,80],"; background: #c6cbd4; border-radius: 50%; margin: 0 auto; line-height: ",[0,80],"; text-align: center; color: #fff; font-size: 13px; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"option-box .",[1],"opt-li .",[1],"opt.",[1],"done { background: #ff9600; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"not-deal-tip { display: block; font-size: 16px; width: 100%; margin-top: ",[0,120],"; text-align: center; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"upload-homework { position: absolute; bottom: ",[0,32],"; left: 5%; }\n.",[1],"do-homework .",[1],"back-tip-box { width: 100%; height: 100%; position: fixed; top: 0; left: 0; z-index: 999; font-family: PingFang SC; font-weight: bold; }\n.",[1],"do-homework .",[1],"back-tip-box .",[1],"tip-bg { pointer-events: auto; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(10, 10, 10, 0.5); }\n.",[1],"do-homework .",[1],"back-tip-box .",[1],"tip-content { position: absolute; background: #fff; z-index: 1000; width: 90%; padding: ",[0,100]," ",[0,32]," ",[0,40]," ",[0,32],"; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%); border-radius: ",[0,30],"; }\n.",[1],"do-homework .",[1],"back-tip-box .",[1],"tip-content .",[1],"btn { margin-bottom: ",[0,60],"; }\n",],undefined,{path:"./pages/learning/homework/do_homework.wxss"});    
__wxAppCode__['pages/learning/homework/do_homework.wxml']=$gwx('./pages/learning/homework/do_homework.wxml');

__wxAppCode__['pages/learning/homework/homework_have_review.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"answer-input .",[1],"question { line-height: 36px; }\n.",[1],"answer-input .",[1],"options { margin-top: ",[0,20],"; }\n.",[1],"answer-input .",[1],"options .",[1],"option { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"answer-input .",[1],"options .",[1],"option .",[1],"option-num { -webkit-flex-basis: ",[0,72],"; -ms-flex-preferred-size: ",[0,72],"; flex-basis: ",[0,72],"; height: ",[0,72],"; background: white; border: 2px solid #e5e9ef; border-radius: 50%; text-align: center; line-height: ",[0,68],"; margin: 0 ",[0,32]," ",[0,40]," 0; }\n.",[1],"answer-input .",[1],"options .",[1],"option .",[1],"option-answer { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; line-height: 20px; margin-top: 6px; }\n.",[1],"answer-input .",[1],"options .",[1],"selected .",[1],"option-num { background: #FF9600; color: #fff; border: 0; }\n.",[1],"answer-input .",[1],"options .",[1],"correct .",[1],"option-num { background: #50C341; color: #fff; border: 0; }\n.",[1],"answer-input .",[1],"options .",[1],"wrong .",[1],"option-num { background: #FF5A5A; color: #fff; border: 0; }\n.",[1],"answer-input .",[1],"jieda-answer { margin: ",[0,80]," auto 0 auto; }\n.",[1],"answer-input .",[1],"answer-upload { margin-bottom: ",[0,60],"; width: ",[0,686],"; height: ",[0,100],"; line-height: ",[0,100],"; background: #fff5eb; border: 2px solid #ffc38c; border-radius: ",[0,20],"; text-align: center; }\n.",[1],"answer-input .",[1],"answer-upload .",[1],"title { font-size: 16px; color: #ff7800; }\n.",[1],"answer-input .",[1],"uni-input { margin-top: ",[0,24],"; }\n.",[1],"answer-input .",[1],"inputing { background: #fafafb; border: 2px solid #e5e9ef; }\n.",[1],"answer-input .",[1],"unwrite { background: #e5e9ef; border: 2px solid #e5e9ef; }\n.",[1],"answer-input .",[1],"unwrite .",[1],"title { color: #BEC3CD; }\n.",[1],"answer-input .",[1],"jieda-answer-noreview { margin: ",[0,80]," auto ",[0,20]," auto; }\n.",[1],"answer-input .",[1],"jieda-answer-noreview .",[1],"title { display: block; width: 100%; color: #FF7800; margin-left: ",[0,-12],"; }\n.",[1],"answer-input .",[1],"jieda-answer-noreview .",[1],"answer { display: block; margin-top: ",[0,30],"; color: #323643; }\n.",[1],"answer-input .",[1],"teacherword-anlysis { font-size: 13px; font-family: PingFang SC; font-weight: bold; color: #323643; line-height: 26px; margin-left: ",[0,-12],"; position: relative; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"line-block .",[1],"title { color: #FF7800; margin-right: ",[0,10],"; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"ifcorrect-pic { position: absolute; right: ",[0,32],"; top: ",[0,0],"; width: ",[0,142],"; height: ",[0,136],"; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"ifcorrect-pic.",[1],"correct { background: url(data:image/png;base64,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); background-size: ",[0,142]," ",[0,136],"; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"ifcorrect-pic.",[1],"wrong { background: url(data:image/png;base64,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\x3d); background-size: ",[0,142]," ",[0,136],"; }\n@charset \x22UTF-8\x22;\n.",[1],"do-homework { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; height: 100%; font-family: PingFang SC; font-size: 13px; font-weight: bold; color: #333333; }\n.",[1],"do-homework .",[1],"homework-head { -webkit-flex-basis: ",[0,88],"; -ms-flex-preferred-size: ",[0,88],"; flex-basis: ",[0,88],"; height: ",[0,88],"; line-height: ",[0,88],"; }\n.",[1],"do-homework .",[1],"homework-head .",[1],"close-btn { position: absolute; display: block; margin: ",[0,32],"; width: ",[0,24],"; height: ",[0,24],"; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABk0lEQVRIS6WUTUsCURSG3zPZtv8RES2jP1Fg5EIwyCLap1DartKJ0W3gQoWgD0Jo019IWof0Q9yq88Y1x/yYO3PvNLuZued57rn3nCNuvblFSgPE2ggsXxWP3/CP567WTvvkDQR9n6NTqdZanwC2f5kc+mSuXDx5SeJwvXaWwgcAK5P4rhL0AGz8ATkUOrmL4pGVJAQOQL7E9Vp7FHYASc1KADm8LOSfTTIJh2Mwor8vCnDrNTOO4DGJRAcnkC0V8p2xIKkkDq64U4GtxAS+JDCVmMJDBepjtd4+gO8/QZYvXiiyUIoqZBCc+WJRzB3R7M8IiYoJ6jwSrs0gEIVL5vao3XmwSpuBgSQWHpuBWqC50PFYMWnGyAz08CC/eIlWoCtFgGLT8aGCqDon6diMlSWBSRPZzK45gQncdnZNBTZwG8lYkARuKpFKrZ0W8NWm/Rfnje5ORkRGql7zGyLrM0FGHWomQU8JuhDZmQQkguuOi+SHuG5jk6nVe4JrECmXzvPvi7uzea/Um7tC5xpgXxzn7AdtTE/GZoQWqQAAAABJRU5ErkJggg\x3d\x3d); background-size: ",[0,24]," ",[0,24],"; }\n.",[1],"do-homework .",[1],"homework-head .",[1],"page-prv { float: left; width: 100%; text-align: center; font-size: 18px; color: #323643; }\n.",[1],"do-homework .",[1],"homework-head .",[1],"page-prv .",[1],"allnum { font-size: 12px; color: #878C9E; }\n.",[1],"do-homework .",[1],"homework-head .",[1],"homework-btn { position: absolute; top: ",[0,28],"; right: ",[0,32],"; display: block; width: ",[0,32],"; height: ",[0,32],"; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAYAAAD7PHgWAAACfklEQVRYR+1Yv2/TYBB9lwQaIJXKAIKNjREJFpiQKoTEQlX+ACQSkURlShpD3S6ecCKnzdRfQU4l/gAQLEgdKjF1Q7ClWzeiIkFAgTaQ+pCNkjgmTePPtaBRvNm5d/fy7vtOukdwPNl5/Qoz4gCNA7gEIOyMOeL3PQDbAG8QoTgzHftgz0/NF0VZC49EjAJAcQCBIybRbzoD4OJO4Gu6kE7vmiCLYGph4dT5/bE3INzsN5OvcYy3O8HqHZOkRVDNry0DnPS1qMvkzFidlaJJ+nPm6J2jrWUGzf2s/VhXlEc1l7ldhSvKYuRk5PRtAj8FcNkGNoj4Kql5fRGgKdsPW/i1d0OWp764quQxWFWXzuJEeLOTJC+RqullELWZM9+TpdhLj/WE4KqmT4LoRQvMvEVqvmRe85Hmx3ptd9Tvth7EXtOen2lQw36k6iZBtgPkTLQ1eprfc/P6XcOgVRAugFEJBDjxZDr22lmoI66Xhj1yOPn0RVDVSh8tcu2nImeiF50cusT1otk9h0OwwSCY1UoTTFgBLBUrxEjOSNFXTnkccT3VOyiHUIuFrqQgaEhQULgWbDAVHM5B27kQavF/P6iHc9Bri72ODjd4oTPopoDX2MEkOJyDXi/JcA4eomDH0hTiUESS7n/3ehtF8LmcPmoE6ZsNWz8Oa+ffi3s9SNeV1IOqiAqiGGtxD4U3QW13gRnLXa0PBsrEPBvC53VJknxtt9XWAG6BSHVaH4bRuGbtwFmttMKEhOi/9wfHRTkTSxwP+81UwPQIz+2PFYjw8F8amMx49ilYTXUYmPYWmXacYZAp7TjIsoBbvo0/rUQdjG0GNpgbxbnH8ff2Or8BQSHzmITm7+wAAAAASUVORK5CYII\x3d); background-size: ",[0,32]," ",[0,32],"; }\n.",[1],"do-homework .",[1],"homework-content { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; padding: ",[0,40]," 0; }\n.",[1],"do-homework .",[1],"homework-content .",[1],"test-content { padding: 0 ",[0,32],"; }\n.",[1],"do-homework .",[1],"answer-card { width: 100%; height: 100%; position: fixed; top: 0; left: 0; z-index: 999; font-family: PingFang SC; font-weight: bold; color: #323643; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-bg { pointer-events: auto; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(10, 10, 10, 0.5); }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content { background: white; border-radius: ",[0,30]," ",[0,30]," 0px 0px; position: absolute; bottom: 0; left: 0; width: 100%; height: ",[0,800],"; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"card-header .",[1],"title { display: block; width: 100%; text-align: center; font-size: 18px; margin-top: ",[0,36],"; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"card-header .",[1],"close-btn { position: absolute; top: ",[0,42],"; right: ",[0,40],"; display: block; width: ",[0,24],"; height: ",[0,24],"; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABk0lEQVRIS6WUTUsCURSG3zPZtv8RES2jP1Fg5EIwyCLap1DartKJ0W3gQoWgD0Jo019IWof0Q9yq88Y1x/yYO3PvNLuZued57rn3nCNuvblFSgPE2ggsXxWP3/CP567WTvvkDQR9n6NTqdZanwC2f5kc+mSuXDx5SeJwvXaWwgcAK5P4rhL0AGz8ATkUOrmL4pGVJAQOQL7E9Vp7FHYASc1KADm8LOSfTTIJh2Mwor8vCnDrNTOO4DGJRAcnkC0V8p2xIKkkDq64U4GtxAS+JDCVmMJDBepjtd4+gO8/QZYvXiiyUIoqZBCc+WJRzB3R7M8IiYoJ6jwSrs0gEIVL5vao3XmwSpuBgSQWHpuBWqC50PFYMWnGyAz08CC/eIlWoCtFgGLT8aGCqDon6diMlSWBSRPZzK45gQncdnZNBTZwG8lYkARuKpFKrZ0W8NWm/Rfnje5ORkRGql7zGyLrM0FGHWomQU8JuhDZmQQkguuOi+SHuG5jk6nVe4JrECmXzvPvi7uzea/Um7tC5xpgXxzn7AdtTE/GZoQWqQAAAABJRU5ErkJggg\x3d\x3d); background-size: ",[0,24]," ",[0,24],"; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"option-box { padding: 0 ",[0,32],"; overflow: hidden; margin-top: ",[0,40],"; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"option-box .",[1],"opt-li { float: left; width: 20%; margin-top: ",[0,60],"; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"option-box .",[1],"opt-li .",[1],"opt { width: ",[0,80],"; height: ",[0,80],"; background: #50C341; border-radius: 50%; margin: 0 auto; line-height: ",[0,80],"; text-align: center; color: #fff; font-size: 13px; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"option-box .",[1],"opt-li .",[1],"wrong { background: #FF5A5A; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"not-deal-tip { display: block; font-size: 16px; width: 100%; margin-top: ",[0,120],"; text-align: center; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"upload-homework { position: absolute; bottom: ",[0,32],"; left: 5%; }\n.",[1],"do-homework .",[1],"back-tip-box { width: 100%; height: 100%; position: fixed; top: 0; left: 0; z-index: 999; font-family: PingFang SC; font-weight: bold; }\n.",[1],"do-homework .",[1],"back-tip-box .",[1],"tip-bg { pointer-events: auto; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(10, 10, 10, 0.5); }\n.",[1],"do-homework .",[1],"back-tip-box .",[1],"tip-content { position: absolute; background: #fff; z-index: 1000; width: 90%; padding: ",[0,100]," ",[0,32]," ",[0,40]," ",[0,32],"; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%); border-radius: ",[0,30],"; }\n.",[1],"do-homework .",[1],"back-tip-box .",[1],"tip-content .",[1],"btn { margin-bottom: ",[0,60],"; }\n",],undefined,{path:"./pages/learning/homework/homework_have_review.wxss"});    
__wxAppCode__['pages/learning/homework/homework_have_review.wxml']=$gwx('./pages/learning/homework/homework_have_review.wxml');

__wxAppCode__['pages/learning/homework/homework_no_review.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"answer-input .",[1],"question { line-height: 36px; }\n.",[1],"answer-input .",[1],"options { margin-top: ",[0,20],"; }\n.",[1],"answer-input .",[1],"options .",[1],"option { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"answer-input .",[1],"options .",[1],"option .",[1],"option-num { -webkit-flex-basis: ",[0,72],"; -ms-flex-preferred-size: ",[0,72],"; flex-basis: ",[0,72],"; height: ",[0,72],"; background: white; border: 2px solid #e5e9ef; border-radius: 50%; text-align: center; line-height: ",[0,68],"; margin: 0 ",[0,32]," ",[0,40]," 0; }\n.",[1],"answer-input .",[1],"options .",[1],"option .",[1],"option-answer { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; line-height: 20px; margin-top: 6px; }\n.",[1],"answer-input .",[1],"options .",[1],"selected .",[1],"option-num { background: #FF9600; color: #fff; border: 0; }\n.",[1],"answer-input .",[1],"options .",[1],"correct .",[1],"option-num { background: #50C341; color: #fff; border: 0; }\n.",[1],"answer-input .",[1],"options .",[1],"wrong .",[1],"option-num { background: #FF5A5A; color: #fff; border: 0; }\n.",[1],"answer-input .",[1],"jieda-answer { margin: ",[0,80]," auto 0 auto; }\n.",[1],"answer-input .",[1],"answer-upload { margin-bottom: ",[0,60],"; width: ",[0,686],"; height: ",[0,100],"; line-height: ",[0,100],"; background: #fff5eb; border: 2px solid #ffc38c; border-radius: ",[0,20],"; text-align: center; }\n.",[1],"answer-input .",[1],"answer-upload .",[1],"title { font-size: 16px; color: #ff7800; }\n.",[1],"answer-input .",[1],"uni-input { margin-top: ",[0,24],"; }\n.",[1],"answer-input .",[1],"inputing { background: #fafafb; border: 2px solid #e5e9ef; }\n.",[1],"answer-input .",[1],"unwrite { background: #e5e9ef; border: 2px solid #e5e9ef; }\n.",[1],"answer-input .",[1],"unwrite .",[1],"title { color: #BEC3CD; }\n.",[1],"answer-input .",[1],"jieda-answer-noreview { margin: ",[0,80]," auto ",[0,20]," auto; }\n.",[1],"answer-input .",[1],"jieda-answer-noreview .",[1],"title { display: block; width: 100%; color: #FF7800; margin-left: ",[0,-12],"; }\n.",[1],"answer-input .",[1],"jieda-answer-noreview .",[1],"answer { display: block; margin-top: ",[0,30],"; color: #323643; }\n.",[1],"answer-input .",[1],"teacherword-anlysis { font-size: 13px; font-family: PingFang SC; font-weight: bold; color: #323643; line-height: 26px; margin-left: ",[0,-12],"; position: relative; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"line-block .",[1],"title { color: #FF7800; margin-right: ",[0,10],"; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"ifcorrect-pic { position: absolute; right: ",[0,32],"; top: ",[0,0],"; width: ",[0,142],"; height: ",[0,136],"; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"ifcorrect-pic.",[1],"correct { background: url(data:image/png;base64,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); background-size: ",[0,142]," ",[0,136],"; }\n.",[1],"answer-input .",[1],"teacherword-anlysis .",[1],"ifcorrect-pic.",[1],"wrong { background: url(data:image/png;base64,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\x3d); background-size: ",[0,142]," ",[0,136],"; }\n@charset \x22UTF-8\x22;\n.",[1],"do-homework { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; height: 100%; font-family: PingFang SC; font-size: 13px; font-weight: bold; color: #333333; }\n.",[1],"do-homework .",[1],"homework-head { -webkit-flex-basis: ",[0,88],"; -ms-flex-preferred-size: ",[0,88],"; flex-basis: ",[0,88],"; height: ",[0,88],"; line-height: ",[0,88],"; }\n.",[1],"do-homework .",[1],"homework-head .",[1],"close-btn { position: absolute; display: block; margin: ",[0,32],"; width: ",[0,24],"; height: ",[0,24],"; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABk0lEQVRIS6WUTUsCURSG3zPZtv8RES2jP1Fg5EIwyCLap1DartKJ0W3gQoWgD0Jo019IWof0Q9yq88Y1x/yYO3PvNLuZued57rn3nCNuvblFSgPE2ggsXxWP3/CP567WTvvkDQR9n6NTqdZanwC2f5kc+mSuXDx5SeJwvXaWwgcAK5P4rhL0AGz8ATkUOrmL4pGVJAQOQL7E9Vp7FHYASc1KADm8LOSfTTIJh2Mwor8vCnDrNTOO4DGJRAcnkC0V8p2xIKkkDq64U4GtxAS+JDCVmMJDBepjtd4+gO8/QZYvXiiyUIoqZBCc+WJRzB3R7M8IiYoJ6jwSrs0gEIVL5vao3XmwSpuBgSQWHpuBWqC50PFYMWnGyAz08CC/eIlWoCtFgGLT8aGCqDon6diMlSWBSRPZzK45gQncdnZNBTZwG8lYkARuKpFKrZ0W8NWm/Rfnje5ORkRGql7zGyLrM0FGHWomQU8JuhDZmQQkguuOi+SHuG5jk6nVe4JrECmXzvPvi7uzea/Um7tC5xpgXxzn7AdtTE/GZoQWqQAAAABJRU5ErkJggg\x3d\x3d); background-size: ",[0,24]," ",[0,24],"; }\n.",[1],"do-homework .",[1],"homework-head .",[1],"page-prv { float: left; width: 100%; text-align: center; font-size: 18px; color: #323643; }\n.",[1],"do-homework .",[1],"homework-head .",[1],"page-prv .",[1],"allnum { font-size: 12px; color: #878C9E; }\n.",[1],"do-homework .",[1],"homework-head .",[1],"homework-btn { position: absolute; top: ",[0,28],"; right: ",[0,32],"; display: block; width: ",[0,32],"; height: ",[0,32],"; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAYAAAD7PHgWAAACfklEQVRYR+1Yv2/TYBB9lwQaIJXKAIKNjREJFpiQKoTEQlX+ACQSkURlShpD3S6ecCKnzdRfQU4l/gAQLEgdKjF1Q7ClWzeiIkFAgTaQ+pCNkjgmTePPtaBRvNm5d/fy7vtOukdwPNl5/Qoz4gCNA7gEIOyMOeL3PQDbAG8QoTgzHftgz0/NF0VZC49EjAJAcQCBIybRbzoD4OJO4Gu6kE7vmiCLYGph4dT5/bE3INzsN5OvcYy3O8HqHZOkRVDNry0DnPS1qMvkzFidlaJJ+nPm6J2jrWUGzf2s/VhXlEc1l7ldhSvKYuRk5PRtAj8FcNkGNoj4Kql5fRGgKdsPW/i1d0OWp764quQxWFWXzuJEeLOTJC+RqullELWZM9+TpdhLj/WE4KqmT4LoRQvMvEVqvmRe85Hmx3ptd9Tvth7EXtOen2lQw36k6iZBtgPkTLQ1eprfc/P6XcOgVRAugFEJBDjxZDr22lmoI66Xhj1yOPn0RVDVSh8tcu2nImeiF50cusT1otk9h0OwwSCY1UoTTFgBLBUrxEjOSNFXTnkccT3VOyiHUIuFrqQgaEhQULgWbDAVHM5B27kQavF/P6iHc9Bri72ODjd4oTPopoDX2MEkOJyDXi/JcA4eomDH0hTiUESS7n/3ehtF8LmcPmoE6ZsNWz8Oa+ffi3s9SNeV1IOqiAqiGGtxD4U3QW13gRnLXa0PBsrEPBvC53VJknxtt9XWAG6BSHVaH4bRuGbtwFmttMKEhOi/9wfHRTkTSxwP+81UwPQIz+2PFYjw8F8amMx49ilYTXUYmPYWmXacYZAp7TjIsoBbvo0/rUQdjG0GNpgbxbnH8ff2Or8BQSHzmITm7+wAAAAASUVORK5CYII\x3d); background-size: ",[0,32]," ",[0,32],"; }\n.",[1],"do-homework .",[1],"homework-content { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; padding: ",[0,40]," 0; }\n.",[1],"do-homework .",[1],"homework-content .",[1],"test-content { padding: 0 ",[0,32],"; }\n.",[1],"do-homework .",[1],"answer-card { width: 100%; height: 100%; position: fixed; top: 0; left: 0; z-index: 999; font-family: PingFang SC; font-weight: bold; color: #323643; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-bg { pointer-events: auto; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(10, 10, 10, 0.5); }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content { background: white; border-radius: ",[0,30]," ",[0,30]," 0px 0px; position: absolute; bottom: 0; left: 0; width: 100%; height: ",[0,800],"; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"card-header .",[1],"title { display: block; width: 100%; text-align: center; font-size: 18px; margin-top: ",[0,36],"; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"card-header .",[1],"close-btn { position: absolute; top: ",[0,42],"; right: ",[0,40],"; display: block; width: ",[0,24],"; height: ",[0,24],"; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABk0lEQVRIS6WUTUsCURSG3zPZtv8RES2jP1Fg5EIwyCLap1DartKJ0W3gQoWgD0Jo019IWof0Q9yq88Y1x/yYO3PvNLuZued57rn3nCNuvblFSgPE2ggsXxWP3/CP567WTvvkDQR9n6NTqdZanwC2f5kc+mSuXDx5SeJwvXaWwgcAK5P4rhL0AGz8ATkUOrmL4pGVJAQOQL7E9Vp7FHYASc1KADm8LOSfTTIJh2Mwor8vCnDrNTOO4DGJRAcnkC0V8p2xIKkkDq64U4GtxAS+JDCVmMJDBepjtd4+gO8/QZYvXiiyUIoqZBCc+WJRzB3R7M8IiYoJ6jwSrs0gEIVL5vao3XmwSpuBgSQWHpuBWqC50PFYMWnGyAz08CC/eIlWoCtFgGLT8aGCqDon6diMlSWBSRPZzK45gQncdnZNBTZwG8lYkARuKpFKrZ0W8NWm/Rfnje5ORkRGql7zGyLrM0FGHWomQU8JuhDZmQQkguuOi+SHuG5jk6nVe4JrECmXzvPvi7uzea/Um7tC5xpgXxzn7AdtTE/GZoQWqQAAAABJRU5ErkJggg\x3d\x3d); background-size: ",[0,24]," ",[0,24],"; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"option-box { padding: 0 ",[0,32],"; overflow: hidden; margin-top: ",[0,40],"; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"option-box .",[1],"opt-li { float: left; width: 20%; margin-top: ",[0,60],"; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"option-box .",[1],"opt-li .",[1],"opt { width: ",[0,80],"; height: ",[0,80],"; background: #c6cbd4; border-radius: 50%; margin: 0 auto; line-height: ",[0,80],"; text-align: center; color: #fff; font-size: 13px; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"option-box .",[1],"opt-li .",[1],"opt.",[1],"done { background: #ff9600; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"not-deal-tip { display: block; font-size: 16px; width: 100%; margin-top: ",[0,120],"; text-align: center; }\n.",[1],"do-homework .",[1],"answer-card .",[1],"card-content .",[1],"upload-homework { position: absolute; bottom: ",[0,32],"; left: 5%; }\n.",[1],"do-homework .",[1],"back-tip-box { width: 100%; height: 100%; position: fixed; top: 0; left: 0; z-index: 999; font-family: PingFang SC; font-weight: bold; }\n.",[1],"do-homework .",[1],"back-tip-box .",[1],"tip-bg { pointer-events: auto; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(10, 10, 10, 0.5); }\n.",[1],"do-homework .",[1],"back-tip-box .",[1],"tip-content { position: absolute; background: #fff; z-index: 1000; width: 90%; padding: ",[0,100]," ",[0,32]," ",[0,40]," ",[0,32],"; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%); border-radius: ",[0,30],"; }\n.",[1],"do-homework .",[1],"back-tip-box .",[1],"tip-content .",[1],"btn { margin-bottom: ",[0,60],"; }\n",],undefined,{path:"./pages/learning/homework/homework_no_review.wxss"});    
__wxAppCode__['pages/learning/homework/homework_no_review.wxml']=$gwx('./pages/learning/homework/homework_no_review.wxml');

__wxAppCode__['pages/learning/homework/homework.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"homework-box { font-family: PingFang-SC-Bold; position: relative; height: 100%; }\n.",[1],"homework-box .",[1],"navTitle { width: 100%; overflow: hidden; position: fixed; top: ",[0,166],"; background: #fff; left: 0; z-index: 999; }\n.",[1],"homework-box .",[1],"navTitle .",[1],"nav { position: relative; width: 50%; float: left; text-align: center; font-size: ",[0,24],"; font-weight: bold; color: #323643; height: ",[0,88],"; line-height: ",[0,88],"; }\n.",[1],"homework-box .",[1],"navTitle .",[1],"nav .",[1],"title { position: relative; }\n.",[1],"homework-box .",[1],"navTitle .",[1],"nav .",[1],"title::before { content: \x27\x27; position: absolute; top: ",[0,12],"; right: ",[0,-30],"; width: 0; height: 0; border-width: ",[0,10],"; border-style: solid; border-color: #BEC3CD transparent transparent transparent; }\n.",[1],"homework-box .",[1],"navTitle .",[1],"nav .",[1],"title.",[1],"current { color: #FF7800; }\n.",[1],"homework-box .",[1],"navTitle .",[1],"nav .",[1],"title.",[1],"current::before { -webkit-transform: rotate(180deg); -ms-transform: rotate(180deg); transform: rotate(180deg); top: 0; border-color: #FF7800 transparent transparent transparent; }\n.",[1],"homework-box .",[1],"select-box { position: fixed; pointer-events: auto; top: ",[0,254],"; left: 0; width: 100%; height: 100%; overflow: hidden; z-index: 999; }\n.",[1],"homework-box .",[1],"select-box .",[1],"select-bg { pointer-events: auto; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(10, 10, 10, 0.5); }\n.",[1],"homework-box .",[1],"select-box .",[1],"select-tab { position: absolute; top: 0; left: 0; width: 100%; background: #fff; z-index: 1000; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; padding: ",[0,20]," ",[0,32],"; font-size: 12px; color: #323643; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-flow: row wrap; -ms-flex-flow: row wrap; flex-flow: row wrap; }\n.",[1],"homework-box .",[1],"select-box .",[1],"select-tab .",[1],"btn { -webkit-box-flex: 0; -webkit-flex: 0 0 20%; -ms-flex: 0 0 20%; flex: 0 0 20%; text-align: center; margin-bottom: ",[0,30],"; }\n.",[1],"homework-box .",[1],"select-box .",[1],"select-tab .",[1],"btn .",[1],"subject-btn, .",[1],"homework-box .",[1],"select-box .",[1],"select-tab .",[1],"btn .",[1],"process-btn { display: block; width: ",[0,120],"; height: ",[0,60],"; line-height: ",[0,60],"; }\n.",[1],"homework-box .",[1],"select-box .",[1],"select-tab .",[1],"btn.",[1],"is-select .",[1],"subject-btn, .",[1],"homework-box .",[1],"select-box .",[1],"select-tab .",[1],"btn.",[1],"is-select .",[1],"process-btn { color: #fff; background: -webkit-gradient(linear, left top, right top, from(#f9d423), to(#ff794a)); background: -o-linear-gradient(left, #f9d423 0%, #ff794a 100%); background: linear-gradient(90deg, #f9d423 0%, #ff794a 100%); border-radius: 30px; }\n.",[1],"homework-box .",[1],"homework-list { width: 100%; padding: ",[0,32],"; margin-top: ",[0,80],"; margin-bottom: ",[0,60],"; }\n.",[1],"homework-box .",[1],"homework-list .",[1],"homework-li { width: 100%; border-radius: 12px; height: ",[0,185],"; -webkit-box-shadow: 0 0 12px 0px rgba(128, 128, 128, 0.2); box-shadow: 0 0 12px 0px rgba(128, 128, 128, 0.2); position: relative; padding: ",[0,37]," ",[0,33],"; font-size: 12px; color: #878C9E; margin-bottom: ",[0,32],"; }\n.",[1],"homework-box .",[1],"homework-list .",[1],"homework-li .",[1],"title { height: ",[0,35],"; font-size: 18px; font-family: PingFang SC; font-weight: bold; color: #323643; line-height: ",[0,42],"; display: block; }\n.",[1],"homework-box .",[1],"homework-list .",[1],"homework-li .",[1],"time { display: block; margin-top: ",[0,34],"; }\n.",[1],"homework-box .",[1],"homework-list .",[1],"homework-li .",[1],"if-review { float: right; margin-top: ",[0,-36],"; width: ",[0,120],"; height: ",[0,44],"; line-height: ",[0,44],"; font-size: 12px; color: #fff; background: -webkit-gradient(linear, left top, right top, from(#f9d423), to(#ff794a)); background: -o-linear-gradient(left, #f9d423 0%, #ff794a 100%); background: linear-gradient(90deg, #f9d423 0%, #ff794a 100%); background: #c6cbd4; text-align: center; border-radius: 20px; }\n",],undefined,{path:"./pages/learning/homework/homework.wxss"});    
__wxAppCode__['pages/learning/homework/homework.wxml']=$gwx('./pages/learning/homework/homework.wxml');

__wxAppCode__['pages/learning/index.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"homework-box { font-family: PingFang-SC-Bold; position: relative; height: 100%; }\n.",[1],"homework-box .",[1],"navTitle { width: 100%; overflow: hidden; position: fixed; top: ",[0,166],"; background: #fff; left: 0; z-index: 999; }\n.",[1],"homework-box .",[1],"navTitle .",[1],"nav { position: relative; width: 50%; float: left; text-align: center; font-size: ",[0,24],"; font-weight: bold; color: #323643; height: ",[0,88],"; line-height: ",[0,88],"; }\n.",[1],"homework-box .",[1],"navTitle .",[1],"nav .",[1],"title { position: relative; }\n.",[1],"homework-box .",[1],"navTitle .",[1],"nav .",[1],"title::before { content: \x27\x27; position: absolute; top: ",[0,12],"; right: ",[0,-30],"; width: 0; height: 0; border-width: ",[0,10],"; border-style: solid; border-color: #BEC3CD transparent transparent transparent; }\n.",[1],"homework-box .",[1],"navTitle .",[1],"nav .",[1],"title.",[1],"current { color: #FF7800; }\n.",[1],"homework-box .",[1],"navTitle .",[1],"nav .",[1],"title.",[1],"current::before { -webkit-transform: rotate(180deg); -ms-transform: rotate(180deg); transform: rotate(180deg); top: 0; border-color: #FF7800 transparent transparent transparent; }\n.",[1],"homework-box .",[1],"select-box { position: fixed; pointer-events: auto; top: ",[0,254],"; left: 0; width: 100%; height: 100%; overflow: hidden; z-index: 999; }\n.",[1],"homework-box .",[1],"select-box .",[1],"select-bg { pointer-events: auto; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(10, 10, 10, 0.5); }\n.",[1],"homework-box .",[1],"select-box .",[1],"select-tab { position: absolute; top: 0; left: 0; width: 100%; background: #fff; z-index: 1000; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; padding: ",[0,20]," ",[0,32],"; font-size: 12px; color: #323643; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-flow: row wrap; -ms-flex-flow: row wrap; flex-flow: row wrap; }\n.",[1],"homework-box .",[1],"select-box .",[1],"select-tab .",[1],"btn { -webkit-box-flex: 0; -webkit-flex: 0 0 20%; -ms-flex: 0 0 20%; flex: 0 0 20%; text-align: center; margin-bottom: ",[0,30],"; }\n.",[1],"homework-box .",[1],"select-box .",[1],"select-tab .",[1],"btn .",[1],"subject-btn, .",[1],"homework-box .",[1],"select-box .",[1],"select-tab .",[1],"btn .",[1],"process-btn { display: block; width: ",[0,120],"; height: ",[0,60],"; line-height: ",[0,60],"; }\n.",[1],"homework-box .",[1],"select-box .",[1],"select-tab .",[1],"btn.",[1],"is-select .",[1],"subject-btn, .",[1],"homework-box .",[1],"select-box .",[1],"select-tab .",[1],"btn.",[1],"is-select .",[1],"process-btn { color: #fff; background: -webkit-gradient(linear, left top, right top, from(#f9d423), to(#ff794a)); background: -o-linear-gradient(left, #f9d423 0%, #ff794a 100%); background: linear-gradient(90deg, #f9d423 0%, #ff794a 100%); border-radius: 30px; }\n.",[1],"homework-box .",[1],"homework-list { width: 100%; padding: ",[0,32],"; margin-top: ",[0,80],"; margin-bottom: ",[0,60],"; }\n.",[1],"homework-box .",[1],"homework-list .",[1],"homework-li { width: 100%; border-radius: 12px; height: ",[0,185],"; -webkit-box-shadow: 0 0 12px 0px rgba(128, 128, 128, 0.2); box-shadow: 0 0 12px 0px rgba(128, 128, 128, 0.2); position: relative; padding: ",[0,37]," ",[0,33],"; font-size: 12px; color: #878C9E; margin-bottom: ",[0,32],"; }\n.",[1],"homework-box .",[1],"homework-list .",[1],"homework-li .",[1],"title { height: ",[0,35],"; font-size: 18px; font-family: PingFang SC; font-weight: bold; color: #323643; line-height: ",[0,42],"; display: block; }\n.",[1],"homework-box .",[1],"homework-list .",[1],"homework-li .",[1],"time { display: block; margin-top: ",[0,34],"; }\n.",[1],"homework-box .",[1],"homework-list .",[1],"homework-li .",[1],"if-review { float: right; margin-top: ",[0,-36],"; width: ",[0,120],"; height: ",[0,44],"; line-height: ",[0,44],"; font-size: 12px; color: #fff; background: -webkit-gradient(linear, left top, right top, from(#f9d423), to(#ff794a)); background: -o-linear-gradient(left, #f9d423 0%, #ff794a 100%); background: linear-gradient(90deg, #f9d423 0%, #ff794a 100%); background: #c6cbd4; text-align: center; border-radius: 20px; }\n@charset \x22UTF-8\x22;\n.",[1],"learn-page { height: 100%; }\n.",[1],"learn-page .",[1],"head-tab { overflow: hidden; position: fixed; z-index: 998; top: ",[0,88],"; left: 0; background: #fff; width: 100%; padding: ",[0,20]," ",[0,32]," 0 ",[0,32],"; overflow: hidden; }\n.",[1],"learn-page .",[1],"head-tab .",[1],"tab { float: left; font-size: 14px; min-width: ",[0,90],"; height: ",[0,58],"; color: #878C9E; font-weight: 500; }\n.",[1],"learn-page .",[1],"head-tab .",[1],"tab.",[1],"current { font-weight: bold; border-bottom: 2px solid #FF794A; color: #323643; }\n.",[1],"learn-page .",[1],"head-tab .",[1],"wrong-topic-tools { float: right; overflow: hidden; }\n.",[1],"learn-page .",[1],"head-tab .",[1],"wrong-topic-tools .",[1],"icon { display: block; float: left; width: ",[0,40],"; height: ",[0,40],"; margin-left: ",[0,60],"; }\n.",[1],"learn-page .",[1],"head-tab .",[1],"wrong-topic-tools .",[1],"scan-icon { background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACtklEQVRYR+1YS4vTUBT+TsKkCvWxVHcKPlBBd/oDRrAuFWblpu0o+ECcMTLTusnGtoOZGRXqxnbqwpWgOx/g4Nqlgm9B3GhnKdphSCU5ko6xt5nW5lUM2OyS+51zv/MlOffej+C6CvrCXgLGAaQAbAeQaEOoTrCy02r2sTvOy31Jr6YYUhXgrQLeAOMTCE8YqOTVzBsxFzk3mnZPUZLLcwQ+A0DqPSHVc2p6mxdCbkxRr311kXNDLGbcXicnJyYnx1bswRZBm1wi2XgIYNTDxEs5NSMq4CFkFeKBoJPrmdFIpjRtrNkiWNSrZYDOepjpCxOdzl9KP/KAXQMpzNaOEXMVwJZ+8Qwq59X0eSrN3dnHlvUSgCwEfWTQdFMZWdQunPzeL1mYce3m3Y1K8+cogUsAdgq5TJKkA1Sarc0z88X2AH8wZOmQNpH+FmZiv7HafG1zwuTnAHY7sUR0nYr6wlsAe5yHDDqRV9MP/E4QBb6g144T+L6Q651N0ACgOA8NRdk06Nfaq5iZmeoGSybxk2raBFkMyKmZP60nClX85nDzGRL8HxTsWH4CrxJ+leqFd602SyR0dzPMKhEVQTeff/rHeilqSNCLSn/DxF/BHrvcsIVHEL+6eycfm8gIJvWbguoxJ4iOPth3l+u3/pD41u49/j9JyCoHHj5UMKzE1O6D9iE5uGsQlogT7+bjajPBXYOoCHb25VYfHJ5JfIk7PDT5kqsLuJuCsTm4a+VyMrGy/ofAuxF36+N1F/MI7w2ZDsfBPAJwg65eq+yXSHrRzX6TTevp1FRWlDzsJ7Ym3vZjTFk6QrCKAO0SAKbF1kGfBuZAPOoeRfOtnJo9F8ACDr7a+Ni9d1rAdgneTXQEdh88EOxuoosa/7aETwE4CmAHgBFhfBAe9TKAzwAWLbYqVy6PvxL5/AKY3nWcWzc+1AAAAABJRU5ErkJggg\x3d\x3d); background-size: ",[0,40]," ",[0,40],"; }\n.",[1],"learn-page .",[1],"head-tab .",[1],"wrong-topic-tools .",[1],"delete-icon { background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAC7ElEQVRYR+1YTUgUYRh+3lldDUfqmHbrUEEevGX3goxOBUIQxM72Hy1pEzraYQ7prrQqFUaR69YpCOrUHxRds5uBEdGli67HqFlkzZk3xhj73B33m9lVEdq5fs/7Ps883/v9vYSAn2k+jUabrAtEOAmgDYAaMNSDWQBmmPFkMa/eN82uxSDxFAR0c/TxrjrHfsFAexC8DEPA9JISOXaj5/RsAGx5iOtco2p9XC9xAtunpqh1IJFIFMopkDqYSmevMPiO7E8rGSdQok+P3a1KYDI9+QFAx0oS5jdO3ZI20H0+F0bU4NiDFmWpbhJER4S4KUPXDlYr0J2CqJfEifxuDSvOi10WadfPCYIKhq41ViuQxQSGrknLohxhMj0ZKp+ULGxC2bSHzUepdKaToWQAbpEl39xxyhGcOCXT2bmtJ86zgnJbXCDmaWgke5SYMwB2bu4UStlmmehcySIJW8RSGglAxlcTKHP4/3Tw394JuHtVnx5/7edUENyGOLh676Scocda/QQGwW2QwGDnqYzc/SkZpqJVLEvquRkEJ8PUBMquajUHXYfWusTK3KktEq++ag6KK2096qa2D1a7d20BB1c9tOYNXfN9ERY9yHxxspKq6KgT3jG2+27ovxZ75XebCYKrROCqVkchGt1uJk79lN2MKxk3x8fVhoVtv4RYy9C1ZjGXn4NfAOzzQAw60a/HnlciQBYzlM4eJ/AzAffZ0DW3ObrylQhMjWTHmPmqgPlaiFCH2R37ISMMM26OZXc02DwFYK8Qd9vQNZEbJQIHb020KaRMA4gIgd8Y1Bexnbe9vXFxSsJoWsYOD2ea7YhymOAkAdojJLAddtoHrp+ZKevg3wM8Mw7QpdDsVQXwPUOPXy5O4dvdctu+Dar1EsChqjiDB78vWGqnX2N9zfbbcldfzY8S+CIAJThXKKTDjIeNEbW7p6drwS9S2h9MjT7az45zFoDbut0NoD6UhFJwHsB3AO8cdiaKa64Y/gdhbAltr3a5VwAAAABJRU5ErkJggg\x3d\x3d); background-size: ",[0,40]," ",[0,40],"; }\n.",[1],"learn-page .",[1],"head-tab .",[1],"wrong-topic-tools .",[1],"download-icon { background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADM0lEQVRYR+2YS2gTURSG/zOxiUJ8LK07BR+ooDsf6wqtuPJRBd0kqYoPxKYT2kk3s2mT0jRVIYLYJC4UtFBXPgoWl+pSwbcgbjQuRVtKojNHJumkk2liZpIZ6SLZzb3n8c099/65cwim33Ais52AHgBdADYC8C2aUI6ghgbE0GOzn5XneCLdxRDSALcb7PNgfAZhmoGJqBh8a4xF+oMsT3q9/rkkgc8BEGonpJwkBjZYATLbxBLZbyY4s4nKjJsrPf7ecLh7XpssAmpwPv/sQwAdFhJ/l8SgcQUsuJRMLADqsZ7mZ/1dstxdKALGEukUQOctZPrKRGeifYFHFmyXmAyPZQ8ScxrA+nr+DEpFxcBFiidv7WBVfQXAY3D6xKCBgrdtRr506me9YM3My9dur/EWfncQOA5gsyGWQoKwi+Jj2XFmvrw4wR/zHmGP3Bv40Uxiu77yeHadT+EXALbqvkR0hWKJzDsA2/RBBh2JioH7dhM4YT+cyB4m8JQh1nsNMA/Aqw/mvd61bpe11suMjKRXqx4ybqmCBshGB0kMlqXHzqosapwmDY1rpZnHMcBKCWlGKysXzEFAZyrh4gq2AEtHotFD4tRha5VYlyanKtE6xXbEvnSzaumgs2pgew8Ojd9oJ2VFkpjaiXhE/z6pJTPF/2imfibOsedPeLD3bO5fZW+6xLFEZhLAsYUkCggnpb7gvWqAsbHMcTDulC/DTFNSJHDUbcBnAPYZb74aJBh3KxITTlTAlSafS2Jwv7uAyWwnVH5g+kRQTM8ag3lMgUCHpHBg2lXAohSYS1dfS8pboZ5p03tQT2AD0jKc4zpoAdIWnOOAdcptG84VQAPkklOsyU+9PWeed2wPmgPHRzOjTAhr48RIDkSCEbtwrq1gIyC1fFxbQacgqwEumw93OZXy++ZX/TK87Oxyb328qdI8woe8h/Yuh+YRgKs0NDqxUyDhZbX2m0dRn/T3h4xL7tRWK8fR+jGKRzhAUGMAbTFeQlRWd9ttYDoOWDsgX5fE0IVGWsD/A7KyBaxltN5Ed5WvehPdmHKhJXwaQCeATQDaXEUC5gB8ATCjsjoxGOl5bcz3F14KFV8j/BAiAAAAAElFTkSuQmCC); background-size: ",[0,40]," ",[0,40],"; }\n.",[1],"learn-page .",[1],"tab-content { height: 100%; padding-top: ",[0,88],"; }\n",],undefined,{path:"./pages/learning/index.wxss"});    
__wxAppCode__['pages/learning/index.wxml']=$gwx('./pages/learning/index.wxml');

__wxAppCode__['pages/learning/worngtopic/worngtopic.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"wrong-topic { font-family: PingFang SC; font-weight: bold; }\n.",[1],"wrong-topic .",[1],"select-tab { width: 100%; height: ",[0,88],"; line-height: ",[0,88],"; background: white; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; position: fixed; top: ",[0,166],"; left: 0; padding: 0 ",[0,32],"; z-index: 1000; }\n.",[1],"wrong-topic .",[1],"select-tab .",[1],"selecter { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; text-align: center; color: #323643; font-size: 12px; position: relative; }\n.",[1],"wrong-topic .",[1],"select-tab .",[1],"selecter .",[1],"nav-title { position: relative; }\n.",[1],"wrong-topic .",[1],"select-tab .",[1],"selecter .",[1],"nav-title .",[1],"arrow { position: absolute; top: 6px; right: -16px; width: 0; height: 0; border-width: ",[0,10],"; border-style: solid; border-color: #BEC3CD transparent transparent transparent; }\n.",[1],"wrong-topic .",[1],"select-tab .",[1],"selecter .",[1],"nav-title.",[1],"current { color: #FF7800; }\n.",[1],"wrong-topic .",[1],"select-tab .",[1],"selecter .",[1],"nav-title.",[1],"current .",[1],"arrow { -webkit-transform: rotate(180deg); -ms-transform: rotate(180deg); transform: rotate(180deg); top: 0; border-color: #FF7800 transparent transparent transparent; }\n.",[1],"wrong-topic .",[1],"select-tab .",[1],"tab-main-content { position: fixed; pointer-events: auto; top: ",[0,254],"; left: 0; width: 100%; height: 100%; overflow: hidden; z-index: 999; border-top: 1px solid #E5E9EF; }\n.",[1],"wrong-topic .",[1],"select-tab .",[1],"tab-main-content .",[1],"tab-bg { pointer-events: auto; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(10, 10, 10, 0.5); }\n.",[1],"wrong-topic .",[1],"select-tab .",[1],"tab-main-content .",[1],"tab { position: absolute; z-index: 1000; background: #fff; width: 100%; font-size: 12px; color: #323643; padding: ",[0,28]," ",[0,32],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-flow: row wrap; -ms-flex-flow: row wrap; flex-flow: row wrap; }\n.",[1],"wrong-topic .",[1],"select-tab .",[1],"tab-main-content .",[1],"tab .",[1],"btn { -webkit-box-flex: 0; -webkit-flex: 0 0 20%; -ms-flex: 0 0 20%; flex: 0 0 20%; text-align: center; margin-bottom: ",[0,30],"; }\n.",[1],"wrong-topic .",[1],"select-tab .",[1],"tab-main-content .",[1],"tab .",[1],"btn .",[1],"subject-btn, .",[1],"wrong-topic .",[1],"select-tab .",[1],"tab-main-content .",[1],"tab .",[1],"btn .",[1],"process-btn { display: block; width: ",[0,120],"; height: ",[0,60],"; line-height: ",[0,60],"; }\n.",[1],"wrong-topic .",[1],"select-tab .",[1],"tab-main-content .",[1],"tab .",[1],"btn.",[1],"is-select .",[1],"subject-btn, .",[1],"wrong-topic .",[1],"select-tab .",[1],"tab-main-content .",[1],"tab .",[1],"btn.",[1],"is-select .",[1],"process-btn { color: #fff; background: -webkit-gradient(linear, left top, right top, from(#f9d423), to(#ff794a)); background: -o-linear-gradient(left, #f9d423 0%, #ff794a 100%); background: linear-gradient(90deg, #f9d423 0%, #ff794a 100%); border-radius: 30px; }\n.",[1],"wrong-topic .",[1],"wrong-test-box { margin: ",[0,110]," ",[0,32]," ",[0,120]," ",[0,32],"; }\n.",[1],"wrong-topic .",[1],"choose-tab { width: 100%; height: ",[0,98],"; background: white; position: fixed; bottom: 0; left: 0; font-size: 14px; -webkit-box-shadow: 0 0 12px 0px rgba(128, 128, 128, 0.4); box-shadow: 0 0 12px 0px rgba(128, 128, 128, 0.4); padding: ",[0,13]," ",[0,32],"; }\n.",[1],"wrong-topic .",[1],"choose-tab .",[1],"choose-all { color: #878C9E; float: left; height: ",[0,72],"; line-height: ",[0,72],"; display: block; }\n.",[1],"wrong-topic .",[1],"choose-tab .",[1],"choose-all .",[1],"choose-icon { display: inline-block; vertical-align: middle; margin-right: ",[0,33],"; width: ",[0,40],"; height: ",[0,40],"; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAE2UlEQVRYR81ZS1BbZRT+zs0DQqGUailFClaZoa0ttSTWGXlooA4LhxnHhS6sK8fH2NGd3djRdnSj3enI1FbdqDOOCx/DuGA0iTSkM2JuLNhKmUErD3laKA0vk9x7nD9wY3KTNBBCyNnk5n+d7/7nP+c/57uENOQMs9TULT/EgB2QrAR1P0AVzFwEIoUYt0E8wZCuA6pMgOtSg/WXM0TqetXReiY4HL4qMvMrAJ4DsGc9cwGMA/iMA9Te0lI3tNa5awLY2ekpNVvyzjLR8wBMa108ybggEX0SWFh6q7W1firVWikBurrkZ1WJ3yfQzlSLraefwTOSSq/ZH7V+cad5SQF6vV7T7SX6EMALiRYwGCTcVVKMkh1FKNxmgSU/D0ajITw0FFKwtPwv5heWMHvLj5uzc1CUpMfv4nYLn7TZbMFEehIC7OjwFmwrpq9BaNVPsuSbUVlRht27SmAwrABKJYqiYHJ6FsOjk2HgccLoXJjjp9rabIv6vjiAqzvXAcSCkyTCvspyVJSXQjynI6rKGB2bwo3hMYhnnXRut3CbfifjNDnc8gXSmTU/34zDB+4PmzITIkx/tf8PLC0H9MtdbG60vhjdGANQOARL+Dx6QGGBBUcOVcNs3qjzxmIJBILovTqI+cWlmA5ScSLacSIARSgxFuT1R3ur2DlrbU3GwWmIBEi5bwDLUTspvDskmQ601h8Jh6AIQKdbPg/gJW2yOGd1tTUoKizIhFWTruGfX4Svb0B/Jj9qbrS+HAH4g9tbaQANRgfh+6rKUbW3bFPBaYsPjUzgz6GxaF1BBVz9eKNtOLyDTrf8LoBT2ggRSo7VHYQkSVkBKDy6x/d7TAhSGeeON1lP0crF7xuNvltrqitRXnZ3VsBpSsYm/sHA4HC0znF7Q10FObp6HiHJ4NF6xA1Rf6wW4jebIm4aT09fzI3DqlJPLrf8BgPvaGBKd5XggZp92cQW0XVt4Aampmcj/wk4TQ63/A0BT2qtW2HeZGZm4FtyuuVrAA5qg2wP7t/00JLMPH7/Iry91yPdzOgXAMWe7tBaGx6uhclk3BITB4MhdP/cF637lgAo0pwIosfqj4IovWRgo2/FzPjJ82vUDrJCTrdvGeA8rXUrAaqqiq7LV/QA5WkAkaC3lSYOBEPwJDBx7jjJ/CK8V3ROksthBszfkaPLe5okejt3A3WuX3XMLLlyOVkQpv3xkvyeRHj9/3QrbzXdyk48TJRugXGuWaRbAlQuJqwmcHWjlrCuJq1xKb+oRwo3OeWfn18M1yW6MjQ25RcAOz29pUY1uOVFE0AzQckQXzQJkEnLzsPVMJsyXHYGg+j9LUHZSdIJe8PRCF8T5wVOt3xBz8eIGuVQFgp3Zv64pckWwwWti/q4d+8e7L1HUB/plQPinI38PYm/RsbTpz6EqcPkUQl9BcYT+hRKsFiVFbszSx4Rvl+Y5afXRB5pgFwulxGGog+YKFxA6yVMv+0sRklxLP3GDISUUJgtCNNvc37cnElOvxHzeSj+V+12eyiRnpSR2NUtP6Myt28GgcksnTzeVPflnRLdlAC1EGRm5SwzZ4QCBvBpUDK+qfEvGwaoLeDw+KpI3SCJLlF7S32GSXT9G2qfIcBoBsgK4hrxGQLgopWx5Ad4FEwDAMsgONP9DPEfgr5kIbSn2nIAAAAASUVORK5CYII\x3d); background-size: ",[0,40]," ",[0,40],"; }\n.",[1],"wrong-topic .",[1],"choose-tab .",[1],"choose-all .",[1],"choose-icon.",[1],"is-select { background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAEc0lEQVRYR9WZf0yVVRjHPwcuggjhBSJFBEwydXNtlWvDtZZbq63VWitbIWUKN8pqbRSXlVP6YXKxH8smE1DXVv6sCDKcpAI16Ze55lxZq39qbTRb0owaCZfTzvtyue8L7733PZdL0fsP2z3P830+5zmc5z3neQVxPLKOJAZYTjI3AtcgWIykAMhEEERyAcEvSL4FThGkmwxOijpGdMMJHQdZTREeHkFQDszV8QX6kLzJMI3iZX506+sKUD5JHh6eRbIOQYpbcUc7yRCCXQyzSbzEuVhaMQFlDWUItiHIjiWmNS45j+Rx0cCeaH4RAaWPFLxsR1CpFVjXWNJCP+tFM0NOro6A0kc6ObQiuVk3Xlz2gk5+407RzF/j/ScAjmbuEOJfggsRSTrp57bxmZwI6Kd5ypc1UpolLSKAzzpsAzQ2RBJvxbVMiXIaYbV144wBGqUkmbMJ36264Gp3B1kSKkFhQD87EDykqzcl9pImEaBKaRuA0k8h8MOki7Bb2kW3wF27ITkV2qrgzNt2T1XMoUQE+CkEGEBQ41Z/UnYKrrwNPKmmzMA52HyZk+RWUU+NMF78g/wcx7tVn7PkJri/HVJmhn0v9MGWfCetPtIoENJPKYJe/WiaHgtXwgOHICU97Bgcgr13wzftzmKSFULW8gzwgmY4PfMFN8CaDpgxK+w3Mgz7y+DMwWhaG1QG30Nwh6NVkgeW3A4XB+D7D/WgQtbF18ODh2FGhgUuCAfL4fS+6JqSNpXBr4Gljpb3HYBlq8yhky3QqqqQdA9aWAprj0Bqph3unTXwlYv3geSsymA/gtkToook2DwE6m/o+bwJ2h52Bzn/OljbCWlZYX85Au+ug1NvuJuk5HeVQVVzPI4eVb1QVGof+nQ7vP9o9ADzroWKo5BmmbeCa/XBl7vcwSkrSVABDgKjRWmc7yX5UNkDuVfYB3pfgw+ecA6UfzVUHIOZXkvmpJn5L5rcw1kAfwVyI3pmFZiQOQvtJidegY5q+29zr4KK45CeY4dTGf+sUQ/OBDSWOPImCUnOLgRfD3gX2IN81ABH/OZvc5ZBRRfMssxVSjPTn2zThzMBjU0SucxYZb3FZia9RfZg3S/C6b0mXEaePXOHq+HEq/HBmYDtCnADguddqWRfbmYya77d/OKf9iKsMqcy+/FWV7JRjIxCrfeqyykxM5k1L7Ju59PQs2WycCqDK+I7LOQuMjOZ6XB3P7oRutwtSIwZmIcFY6lraQCe0prypYuhshsy54Tdjj8HxzZpyUQxNo9bBmC8B9a8pXDvAcguBrVZErGs5uawH1hHIafvkd8AnO6XptH/xTL4j6+dsFrUh/s10+viDjtFvb0X9P9rfRhLrZpH2aiz+K2JqhkxdDo4zypXzaOQkKzDwyCvg3mBnsJnB2k8JuoYdooRu4FZyz1IGhPeElEtDlgvAuyPNvmYgGMlKJEtYNhNkI0JaQFbZzdtm+jjl8DoRvzNciQrjc8QcOXYZwjT+A+E0a34zvgMIegiNb7PEP8AC6xsD2sMAc4AAAAASUVORK5CYII\x3d) no-repeat; background-size: ",[0,40]," ",[0,40],"; }\n.",[1],"wrong-topic .",[1],"choose-tab .",[1],"cancel-btn { color: #fff; float: right; width: ",[0,150],"; height: ",[0,72],"; line-height: ",[0,72],"; background: #c6cbd4; border-radius: ",[0,36],"; text-align: center; margin-right: ",[0,32],"; }\n.",[1],"wrong-topic .",[1],"choose-tab .",[1],"done-btn { width: ",[0,280],"; height: ",[0,72],"; line-height: ",[0,72],"; float: right; color: #fff; background: -webkit-gradient(linear, left top, right top, from(#f9d423), to(#ff794a)); background: -o-linear-gradient(left, #f9d423 0%, #ff794a 100%); background: linear-gradient(90deg, #f9d423 0%, #ff794a 100%); border-radius: ",[0,36],"; text-align: center; }\n",],undefined,{path:"./pages/learning/worngtopic/worngtopic.wxss"});    
__wxAppCode__['pages/learning/worngtopic/worngtopic.wxml']=$gwx('./pages/learning/worngtopic/worngtopic.wxml');

__wxAppCode__['pages/money/money.wxss']=undefined;    
__wxAppCode__['pages/money/money.wxml']=$gwx('./pages/money/money.wxml');

__wxAppCode__['pages/money/pay.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"app { width: 100%; }\n.",[1],"price-box { background-color: #fff; height: ",[0,265],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,28],"; color: #909399; }\n.",[1],"price-box .",[1],"price { font-size: ",[0,50],"; color: #303133; margin-top: ",[0,12],"; }\n.",[1],"price-box .",[1],"price:before { content: \x27\\FFE5\x27; font-size: ",[0,40],"; }\n.",[1],"pay-type-list { margin-top: ",[0,20],"; background-color: #fff; padding-left: ",[0,60],"; }\n.",[1],"pay-type-list .",[1],"type-item { height: ",[0,120],"; padding: ",[0,20]," 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding-right: ",[0,60],"; font-size: ",[0,30],"; position: relative; }\n.",[1],"pay-type-list .",[1],"icon { width: ",[0,100],"; font-size: ",[0,52],"; }\n.",[1],"pay-type-list .",[1],"icon-erjiye-yucunkuan { color: #fe8e2e; }\n.",[1],"pay-type-list .",[1],"icon-weixinzhifu { color: #36cb59; }\n.",[1],"pay-type-list .",[1],"icon-alipay { color: #01aaef; }\n.",[1],"pay-type-list .",[1],"tit { font-size: ",[0,32],"; color: #303133; margin-bottom: ",[0,4],"; }\n.",[1],"pay-type-list .",[1],"con { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; font-size: ",[0,24],"; color: #909399; }\n.",[1],"mix-btn { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; width: ",[0,630],"; height: ",[0,80],"; margin: ",[0,80]," auto ",[0,30],"; font-size: ",[0,32],"; color: #fff; background-color: #fa436a; border-radius: ",[0,10],"; -webkit-box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4); box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4); }\n",],undefined,{path:"./pages/money/pay.wxss"});    
__wxAppCode__['pages/money/pay.wxml']=$gwx('./pages/money/pay.wxml');

__wxAppCode__['pages/money/paySuccess.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"content { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"success-icon { font-size: ",[0,160],"; color: #fa436a; margin-top: ",[0,100],"; }\n.",[1],"tit { font-size: ",[0,38],"; color: #303133; }\n.",[1],"btn-group { padding-top: ",[0,100],"; }\n.",[1],"mix-btn { margin-top: ",[0,30],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; width: ",[0,600],"; height: ",[0,80],"; font-size: ",[0,32],"; color: #fff; background-color: #fa436a; border-radius: ",[0,10],"; }\n.",[1],"mix-btn.",[1],"hollow { background: #fff; color: #303133; border: 1px solid #ccc; }\n",],undefined,{path:"./pages/money/paySuccess.wxss"});    
__wxAppCode__['pages/money/paySuccess.wxml']=$gwx('./pages/money/paySuccess.wxml');

__wxAppCode__['pages/notice/notice.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\nbody { background-color: #f7f7f7; padding-bottom: ",[0,30],"; }\n.",[1],"notice-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"time { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; height: ",[0,80],"; padding-top: ",[0,10],"; font-size: ",[0,26],"; color: #7d7d7d; }\n.",[1],"content { width: ",[0,710],"; padding: 0 ",[0,24],"; background-color: #fff; border-radius: ",[0,4],"; }\n.",[1],"title { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: ",[0,90],"; font-size: ",[0,32],"; color: #303133; }\n.",[1],"img-wrapper { width: 100%; height: ",[0,260],"; position: relative; }\n.",[1],"pic { display: block; width: 100%; height: 100%; border-radius: ",[0,6],"; }\n.",[1],"cover { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; position: absolute; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); font-size: ",[0,36],"; color: #fff; }\n.",[1],"introduce { display: inline-block; padding: ",[0,16]," 0; font-size: ",[0,28],"; color: #606266; line-height: ",[0,38],"; }\n.",[1],"bot { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; height: ",[0,80],"; font-size: ",[0,24],"; color: #707070; position: relative; }\n.",[1],"more-icon { font-size: ",[0,32],"; }\n",],undefined,{path:"./pages/notice/notice.wxss"});    
__wxAppCode__['pages/notice/notice.wxml']=$gwx('./pages/notice/notice.wxml');

__wxAppCode__['pages/order/createOrder.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\nbody { background: #f8f8f8; padding-bottom: ",[0,100],"; }\n.",[1],"address-section { padding: ",[0,30]," 0; background: #fff; position: relative; }\n.",[1],"address-section .",[1],"order-content { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"address-section .",[1],"icon-shouhuodizhi { -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; width: ",[0,90],"; color: #888; font-size: ",[0,44],"; }\n.",[1],"address-section .",[1],"cen { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; font-size: ",[0,28],"; color: #303133; }\n.",[1],"address-section .",[1],"name { font-size: ",[0,34],"; margin-right: ",[0,24],"; }\n.",[1],"address-section .",[1],"address { margin-top: ",[0,16],"; margin-right: ",[0,20],"; color: #909399; }\n.",[1],"address-section .",[1],"icon-you { font-size: ",[0,32],"; color: #909399; margin-right: ",[0,30],"; }\n.",[1],"address-section .",[1],"a-bg { position: absolute; left: 0; bottom: 0; display: block; width: 100%; height: ",[0,5],"; }\n.",[1],"goods-section { margin-top: ",[0,16],"; background: #fff; padding-bottom: 1px; }\n.",[1],"goods-section .",[1],"g-header { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: ",[0,84],"; padding: 0 ",[0,30],"; position: relative; }\n.",[1],"goods-section .",[1],"logo { display: block; width: ",[0,50],"; height: ",[0,50],"; border-radius: 100px; }\n.",[1],"goods-section .",[1],"name { font-size: ",[0,30],"; color: #606266; margin-left: ",[0,24],"; }\n.",[1],"goods-section .",[1],"g-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; margin: ",[0,20]," ",[0,30],"; }\n.",[1],"goods-section .",[1],"g-item wx-image { -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; display: block; width: ",[0,140],"; height: ",[0,140],"; border-radius: ",[0,4],"; }\n.",[1],"goods-section .",[1],"g-item .",[1],"right { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; padding-left: ",[0,24],"; overflow: hidden; }\n.",[1],"goods-section .",[1],"g-item .",[1],"title { font-size: ",[0,30],"; color: #303133; }\n.",[1],"goods-section .",[1],"g-item .",[1],"spec { font-size: ",[0,26],"; color: #909399; }\n.",[1],"goods-section .",[1],"g-item .",[1],"price-box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,32],"; color: #303133; padding-top: ",[0,10],"; }\n.",[1],"goods-section .",[1],"g-item .",[1],"price-box .",[1],"price { margin-bottom: ",[0,4],"; }\n.",[1],"goods-section .",[1],"g-item .",[1],"price-box .",[1],"number { font-size: ",[0,26],"; color: #606266; margin-left: ",[0,20],"; }\n.",[1],"goods-section .",[1],"g-item .",[1],"step-box { position: relative; }\n.",[1],"yt-list { margin-top: ",[0,16],"; background: #fff; }\n.",[1],"yt-list-cell { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding: ",[0,10]," ",[0,30]," ",[0,10]," ",[0,40],"; line-height: ",[0,70],"; position: relative; }\n.",[1],"yt-list-cell.",[1],"cell-hover { background: #fafafa; }\n.",[1],"yt-list-cell.",[1],"b-b:after { left: ",[0,30],"; }\n.",[1],"yt-list-cell .",[1],"cell-icon { height: ",[0,32],"; width: ",[0,32],"; font-size: ",[0,22],"; color: #fff; text-align: center; line-height: ",[0,32],"; background: #f85e52; border-radius: ",[0,4],"; margin-right: ",[0,12],"; }\n.",[1],"yt-list-cell .",[1],"cell-icon.",[1],"hb { background: #ffaa0e; }\n.",[1],"yt-list-cell .",[1],"cell-icon.",[1],"lpk { background: #3ab54a; }\n.",[1],"yt-list-cell .",[1],"cell-more { -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; font-size: ",[0,24],"; color: #909399; margin-left: ",[0,8],"; margin-right: ",[0,-10],"; }\n.",[1],"yt-list-cell .",[1],"cell-tit { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; font-size: ",[0,26],"; color: #909399; margin-right: ",[0,10],"; }\n.",[1],"yt-list-cell .",[1],"cell-tip { font-size: ",[0,26],"; color: #303133; }\n.",[1],"yt-list-cell .",[1],"cell-tip.",[1],"disabled { color: #909399; }\n.",[1],"yt-list-cell .",[1],"cell-tip.",[1],"active { color: #fa436a; }\n.",[1],"yt-list-cell .",[1],"cell-tip.",[1],"red { color: #fa436a; }\n.",[1],"yt-list-cell.",[1],"desc-cell .",[1],"cell-tit { max-width: ",[0,90],"; }\n.",[1],"yt-list-cell .",[1],"desc { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; font-size: ",[0,28],"; color: #303133; }\n.",[1],"pay-list { padding-left: ",[0,40],"; margin-top: ",[0,16],"; background: #fff; }\n.",[1],"pay-list .",[1],"pay-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding-right: ",[0,20],"; line-height: 1; height: ",[0,110],"; position: relative; }\n.",[1],"pay-list .",[1],"icon-weixinzhifu { width: ",[0,80],"; font-size: ",[0,40],"; color: #6BCC03; }\n.",[1],"pay-list .",[1],"icon-alipay { width: ",[0,80],"; font-size: ",[0,40],"; color: #06B4FD; }\n.",[1],"pay-list .",[1],"icon-xuanzhong2 { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; width: ",[0,60],"; height: ",[0,60],"; font-size: ",[0,40],"; color: #fa436a; }\n.",[1],"pay-list .",[1],"tit { font-size: ",[0,32],"; color: #303133; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"footer { position: fixed; left: 0; bottom: 0; z-index: 995; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; width: 100%; height: ",[0,90],"; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; font-size: ",[0,30],"; background-color: #fff; z-index: 998; color: #606266; -webkit-box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1); box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1); }\n.",[1],"footer .",[1],"price-content { padding-left: ",[0,30],"; }\n.",[1],"footer .",[1],"price-tip { color: #fa436a; margin-left: ",[0,8],"; }\n.",[1],"footer .",[1],"price { font-size: ",[0,36],"; color: #fa436a; }\n.",[1],"footer .",[1],"submit { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; width: ",[0,280],"; height: 100%; color: #fff; font-size: ",[0,32],"; background-color: #fa436a; }\n.",[1],"mask { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: end; -webkit-align-items: flex-end; -ms-flex-align: end; align-items: flex-end; position: fixed; left: 0; top: 0px; bottom: 0; width: 100%; background: transparent; z-index: 9995; -webkit-transition: .3s; -o-transition: .3s; transition: .3s; }\n.",[1],"mask .",[1],"mask-content { width: 100%; min-height: 30vh; max-height: 70vh; background: #f3f3f3; -webkit-transform: translateY(100%); -ms-transform: translateY(100%); transform: translateY(100%); -webkit-transition: .3s; -o-transition: .3s; transition: .3s; overflow-y: scroll; }\n.",[1],"mask.",[1],"none { display: none; }\n.",[1],"mask.",[1],"show { background: rgba(0, 0, 0, 0.4); }\n.",[1],"mask.",[1],"show .",[1],"mask-content { -webkit-transform: translateY(0); -ms-transform: translateY(0); transform: translateY(0); }\n.",[1],"coupon-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; margin: ",[0,20]," ",[0,24],"; background: #fff; }\n.",[1],"coupon-item .",[1],"con { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; position: relative; height: ",[0,120],"; padding: 0 ",[0,30],"; }\n.",[1],"coupon-item .",[1],"con:after { position: absolute; left: 0; bottom: 0; content: \x27\x27; width: 100%; height: 0; border-bottom: 1px dashed #f3f3f3; -webkit-transform: scaleY(50%); -ms-transform: scaleY(50%); transform: scaleY(50%); }\n.",[1],"coupon-item .",[1],"left { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; overflow: hidden; height: ",[0,100],"; }\n.",[1],"coupon-item .",[1],"title { font-size: ",[0,32],"; color: #303133; margin-bottom: ",[0,10],"; }\n.",[1],"coupon-item .",[1],"time { font-size: ",[0,24],"; color: #909399; }\n.",[1],"coupon-item .",[1],"right { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,26],"; color: #606266; height: ",[0,100],"; }\n.",[1],"coupon-item .",[1],"price { font-size: ",[0,44],"; color: #fa436a; }\n.",[1],"coupon-item .",[1],"price:before { content: \x27\\FFE5\x27; font-size: ",[0,34],"; }\n.",[1],"coupon-item .",[1],"tips { font-size: ",[0,24],"; color: #909399; line-height: ",[0,60],"; padding-left: ",[0,30],"; }\n.",[1],"coupon-item .",[1],"circle { position: absolute; left: ",[0,-6],"; bottom: ",[0,-10],"; z-index: 10; width: ",[0,20],"; height: ",[0,20],"; background: #f3f3f3; border-radius: 100px; }\n.",[1],"coupon-item .",[1],"circle.",[1],"r { left: auto; right: ",[0,-6],"; }\n",],undefined,{path:"./pages/order/createOrder.wxss"});    
__wxAppCode__['pages/order/createOrder.wxml']=$gwx('./pages/order/createOrder.wxml');

__wxAppCode__['pages/order/order.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\nbody, .",[1],"content { background: #f8f8f8; height: 100%; }\n.",[1],"swiper-box { height: calc(100% - 40px); }\n.",[1],"list-scroll-content { height: 100%; }\n.",[1],"navbar { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; height: 40px; padding: 0 5px; background: #fff; -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.06); box-shadow: 0 1px 5px rgba(0, 0, 0, 0.06); position: relative; z-index: 10; }\n.",[1],"navbar .",[1],"nav-item { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: 100%; font-size: 15px; color: #303133; position: relative; }\n.",[1],"navbar .",[1],"nav-item.",[1],"current { color: #fa436a; }\n.",[1],"navbar .",[1],"nav-item.",[1],"current:after { content: \x27\x27; position: absolute; left: 50%; bottom: 0; -webkit-transform: translateX(-50%); -ms-transform: translateX(-50%); transform: translateX(-50%); width: 44px; height: 0; border-bottom: 2px solid #fa436a; }\n.",[1],"uni-swiper-item { height: auto; }\n.",[1],"order-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; padding-left: ",[0,30],"; background: #fff; margin-top: ",[0,16],"; }\n.",[1],"order-item .",[1],"i-top { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: ",[0,80],"; padding-right: ",[0,30],"; font-size: ",[0,28],"; color: #303133; position: relative; }\n.",[1],"order-item .",[1],"i-top .",[1],"time { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"order-item .",[1],"i-top .",[1],"state { color: #fa436a; }\n.",[1],"order-item .",[1],"i-top .",[1],"del-btn { padding: ",[0,10]," 0 ",[0,10]," ",[0,36],"; font-size: ",[0,32],"; color: #909399; position: relative; }\n.",[1],"order-item .",[1],"i-top .",[1],"del-btn:after { content: \x27\x27; width: 0; height: ",[0,30],"; border-left: 1px solid #DCDFE6; position: absolute; left: ",[0,20],"; top: 50%; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); }\n.",[1],"order-item .",[1],"goods-box { height: ",[0,160],"; padding: ",[0,20]," 0; white-space: nowrap; }\n.",[1],"order-item .",[1],"goods-box .",[1],"goods-item { width: ",[0,120],"; height: ",[0,120],"; display: inline-block; margin-right: ",[0,24],"; }\n.",[1],"order-item .",[1],"goods-box .",[1],"goods-img { display: block; width: 100%; height: 100%; }\n.",[1],"order-item .",[1],"goods-box-single { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; padding: ",[0,20]," 0; }\n.",[1],"order-item .",[1],"goods-box-single .",[1],"goods-img { display: block; width: ",[0,120],"; height: ",[0,120],"; }\n.",[1],"order-item .",[1],"goods-box-single .",[1],"right { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; padding: 0 ",[0,30]," 0 ",[0,24],"; overflow: hidden; }\n.",[1],"order-item .",[1],"goods-box-single .",[1],"right .",[1],"title { font-size: ",[0,30],"; color: #303133; line-height: 1; }\n.",[1],"order-item .",[1],"goods-box-single .",[1],"right .",[1],"attr-box { font-size: ",[0,26],"; color: #909399; padding: ",[0,10]," ",[0,12],"; }\n.",[1],"order-item .",[1],"goods-box-single .",[1],"right .",[1],"price { font-size: ",[0,30],"; color: #303133; }\n.",[1],"order-item .",[1],"goods-box-single .",[1],"right .",[1],"price:before { content: \x27\\FFE5\x27; font-size: ",[0,24],"; margin: 0 ",[0,2]," 0 ",[0,8],"; }\n.",[1],"order-item .",[1],"price-box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; -webkit-box-align: baseline; -webkit-align-items: baseline; -ms-flex-align: baseline; align-items: baseline; padding: ",[0,20]," ",[0,30],"; font-size: ",[0,26],"; color: #909399; }\n.",[1],"order-item .",[1],"price-box .",[1],"num { margin: 0 ",[0,8],"; color: #303133; }\n.",[1],"order-item .",[1],"price-box .",[1],"price { font-size: ",[0,32],"; color: #303133; }\n.",[1],"order-item .",[1],"price-box .",[1],"price:before { content: \x27\\FFE5\x27; font-size: ",[0,24],"; margin: 0 ",[0,2]," 0 ",[0,8],"; }\n.",[1],"order-item .",[1],"action-box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: ",[0,100],"; position: relative; padding-right: ",[0,30],"; }\n.",[1],"order-item .",[1],"action-btn { width: ",[0,160],"; height: ",[0,60],"; margin: 0; margin-left: ",[0,24],"; padding: 0; text-align: center; line-height: ",[0,60],"; font-size: ",[0,26],"; color: #303133; background: #fff; border-radius: 100px; }\n.",[1],"order-item .",[1],"action-btn:after { border-radius: 100px; }\n.",[1],"order-item .",[1],"action-btn.",[1],"recom { background: #fff9f9; color: #fa436a; }\n.",[1],"order-item .",[1],"action-btn.",[1],"recom:after { border-color: #f7bcc8; }\n.",[1],"uni-load-more { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; height: ",[0,80],"; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"uni-load-more__text { font-size: ",[0,28],"; color: #999; }\n.",[1],"uni-load-more__img { height: 24px; width: 24px; margin-right: 10px; }\n.",[1],"uni-load-more__img \x3e wx-view { position: absolute; }\n.",[1],"uni-load-more__img \x3e wx-view wx-view { width: 6px; height: 2px; border-top-left-radius: 1px; border-bottom-left-radius: 1px; background: #999; position: absolute; opacity: .2; -webkit-transform-origin: 50%; -ms-transform-origin: 50%; transform-origin: 50%; -webkit-animation: load 1.56s ease infinite; animation: load 1.56s ease infinite; }\n.",[1],"uni-load-more__img \x3e wx-view wx-view:nth-child(1) { -webkit-transform: rotate(90deg); -ms-transform: rotate(90deg); transform: rotate(90deg); top: 2px; left: 9px; }\n.",[1],"uni-load-more__img \x3e wx-view wx-view:nth-child(2) { -webkit-transform: rotate(180deg); -ms-transform: rotate(180deg); transform: rotate(180deg); top: 11px; right: 0; }\n.",[1],"uni-load-more__img \x3e wx-view wx-view:nth-child(3) { -webkit-transform: rotate(270deg); -ms-transform: rotate(270deg); transform: rotate(270deg); bottom: 2px; left: 9px; }\n.",[1],"uni-load-more__img \x3e wx-view wx-view:nth-child(4) { top: 11px; left: 0; }\n.",[1],"load1, .",[1],"load2, .",[1],"load3 { height: 24px; width: 24px; }\n.",[1],"load2 { -webkit-transform: rotate(30deg); -ms-transform: rotate(30deg); transform: rotate(30deg); }\n.",[1],"load3 { -webkit-transform: rotate(60deg); -ms-transform: rotate(60deg); transform: rotate(60deg); }\n.",[1],"load1 wx-view:nth-child(1) { -webkit-animation-delay: 0s; animation-delay: 0s; }\n.",[1],"load2 wx-view:nth-child(1) { -webkit-animation-delay: .13s; animation-delay: .13s; }\n.",[1],"load3 wx-view:nth-child(1) { -webkit-animation-delay: .26s; animation-delay: .26s; }\n.",[1],"load1 wx-view:nth-child(2) { -webkit-animation-delay: .39s; animation-delay: .39s; }\n.",[1],"load2 wx-view:nth-child(2) { -webkit-animation-delay: .52s; animation-delay: .52s; }\n.",[1],"load3 wx-view:nth-child(2) { -webkit-animation-delay: .65s; animation-delay: .65s; }\n.",[1],"load1 wx-view:nth-child(3) { -webkit-animation-delay: .78s; animation-delay: .78s; }\n.",[1],"load2 wx-view:nth-child(3) { -webkit-animation-delay: .91s; animation-delay: .91s; }\n.",[1],"load3 wx-view:nth-child(3) { -webkit-animation-delay: 1.04s; animation-delay: 1.04s; }\n.",[1],"load1 wx-view:nth-child(4) { -webkit-animation-delay: 1.17s; animation-delay: 1.17s; }\n.",[1],"load2 wx-view:nth-child(4) { -webkit-animation-delay: 1.3s; animation-delay: 1.3s; }\n.",[1],"load3 wx-view:nth-child(4) { -webkit-animation-delay: 1.43s; animation-delay: 1.43s; }\n@-webkit-keyframes load { 0% { opacity: 1; }\n100% { opacity: .2; }\n}",],undefined,{path:"./pages/order/order.wxss"});    
__wxAppCode__['pages/order/order.wxml']=$gwx('./pages/order/order.wxml');

__wxAppCode__['pages/product/list.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\nbody, .",[1],"content { background: #f8f8f8; }\n.",[1],"content { padding-top: ",[0,96],"; }\n.",[1],"navbar { position: fixed; left: 0; top: 0px; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; width: 100%; height: ",[0,80],"; background: #fff; -webkit-box-shadow: 0 ",[0,2]," ",[0,10]," rgba(0, 0, 0, 0.06); box-shadow: 0 ",[0,2]," ",[0,10]," rgba(0, 0, 0, 0.06); z-index: 10; }\n.",[1],"navbar .",[1],"nav-item { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: 100%; font-size: ",[0,30],"; color: #303133; position: relative; }\n.",[1],"navbar .",[1],"nav-item.",[1],"current { color: #fa436a; }\n.",[1],"navbar .",[1],"nav-item.",[1],"current:after { content: \x27\x27; position: absolute; left: 50%; bottom: 0; -webkit-transform: translateX(-50%); -ms-transform: translateX(-50%); transform: translateX(-50%); width: ",[0,120],"; height: 0; border-bottom: ",[0,4]," solid #fa436a; }\n.",[1],"navbar .",[1],"p-box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"navbar .",[1],"p-box .",[1],"yticon { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; width: ",[0,30],"; height: ",[0,14],"; line-height: 1; margin-left: ",[0,4],"; font-size: ",[0,26],"; color: #888; }\n.",[1],"navbar .",[1],"p-box .",[1],"yticon.",[1],"active { color: #fa436a; }\n.",[1],"navbar .",[1],"p-box .",[1],"xia { -webkit-transform: scaleY(-1); -ms-transform: scaleY(-1); transform: scaleY(-1); }\n.",[1],"navbar .",[1],"cate-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: 100%; width: ",[0,80],"; position: relative; font-size: ",[0,44],"; }\n.",[1],"navbar .",[1],"cate-item:after { content: \x27\x27; position: absolute; left: 0; top: 50%; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); border-left: 1px solid #ddd; width: 0; height: ",[0,36],"; }\n.",[1],"cate-mask { position: fixed; left: 0; top: 0px; bottom: 0; width: 100%; background: transparent; z-index: 95; -webkit-transition: .3s; -o-transition: .3s; transition: .3s; }\n.",[1],"cate-mask .",[1],"cate-content { width: ",[0,630],"; height: 100%; background: #fff; float: right; -webkit-transform: translateX(100%); -ms-transform: translateX(100%); transform: translateX(100%); -webkit-transition: .3s; -o-transition: .3s; transition: .3s; }\n.",[1],"cate-mask.",[1],"none { display: none; }\n.",[1],"cate-mask.",[1],"show { background: rgba(0, 0, 0, 0.4); }\n.",[1],"cate-mask.",[1],"show .",[1],"cate-content { -webkit-transform: translateX(0); -ms-transform: translateX(0); transform: translateX(0); }\n.",[1],"cate-list { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; height: 100%; }\n.",[1],"cate-list .",[1],"cate-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: ",[0,90],"; padding-left: ",[0,30],"; font-size: ",[0,28],"; color: #555; position: relative; }\n.",[1],"cate-list .",[1],"two { height: ",[0,64],"; color: #303133; font-size: ",[0,30],"; background: #f8f8f8; }\n.",[1],"cate-list .",[1],"active { color: #fa436a; }\n.",[1],"goods-list { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; padding: 0 ",[0,30],"; background: #fff; }\n.",[1],"goods-list .",[1],"goods-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; width: 48%; padding-bottom: ",[0,40],"; }\n.",[1],"goods-list .",[1],"goods-item:nth-child(2n+1) { margin-right: 4%; }\n.",[1],"goods-list .",[1],"image-wrapper { width: 100%; height: ",[0,330],"; border-radius: 3px; overflow: hidden; }\n.",[1],"goods-list .",[1],"image-wrapper wx-image { width: 100%; height: 100%; opacity: 1; }\n.",[1],"goods-list .",[1],"title { font-size: ",[0,32],"; color: #303133; line-height: ",[0,80],"; }\n.",[1],"goods-list .",[1],"price-box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; padding-right: ",[0,10],"; font-size: ",[0,24],"; color: #909399; }\n.",[1],"goods-list .",[1],"price { font-size: ",[0,32],"; color: #fa436a; line-height: 1; }\n.",[1],"goods-list .",[1],"price:before { content: \x27\\FFE5\x27; font-size: ",[0,26],"; }\n",],undefined,{path:"./pages/product/list.wxss"});    
__wxAppCode__['pages/product/list.wxml']=$gwx('./pages/product/list.wxml');

__wxAppCode__['pages/product/product.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\nbody { background: #f8f8f8; padding-bottom: ",[0,160],"; }\n.",[1],"icon-you { font-size: ",[0,30],"; color: #888; }\n.",[1],"carousel { height: ",[0,722],"; position: relative; }\n.",[1],"carousel wx-swiper { height: 100%; }\n.",[1],"carousel .",[1],"image-wrapper { width: 100%; height: 100%; }\n.",[1],"carousel .",[1],"swiper-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-align-content: center; -ms-flex-line-pack: center; align-content: center; height: ",[0,750],"; overflow: hidden; }\n.",[1],"carousel .",[1],"swiper-item wx-image { width: 100%; height: 100%; }\n.",[1],"introduce-section { background: #fff; padding: ",[0,20]," ",[0,30],"; }\n.",[1],"introduce-section .",[1],"title { font-size: ",[0,32],"; color: #303133; height: ",[0,50],"; line-height: ",[0,50],"; }\n.",[1],"introduce-section .",[1],"price-box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: baseline; -webkit-align-items: baseline; -ms-flex-align: baseline; align-items: baseline; height: ",[0,64],"; padding: ",[0,10]," 0; font-size: ",[0,26],"; color: #fa436a; }\n.",[1],"introduce-section .",[1],"price { font-size: ",[0,34],"; }\n.",[1],"introduce-section .",[1],"m-price { margin: 0 ",[0,12],"; color: #909399; text-decoration: line-through; }\n.",[1],"introduce-section .",[1],"coupon-tip { -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding: ",[0,4]," ",[0,10],"; background: #fa436a; font-size: ",[0,24],"; color: #fff; border-radius: ",[0,6],"; line-height: 1; -webkit-transform: translateY(",[0,-4],"); -ms-transform: translateY(",[0,-4],"); transform: translateY(",[0,-4],"); }\n.",[1],"introduce-section .",[1],"bot-row { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: ",[0,50],"; font-size: ",[0,24],"; color: #909399; }\n.",[1],"introduce-section .",[1],"bot-row wx-text { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"share-section { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; color: #606266; background: -webkit-gradient(linear, left top, right top, from(#fdf5f6), to(#fbebf6)); background: -o-linear-gradient(left, #fdf5f6, #fbebf6); background: linear-gradient(left, #fdf5f6, #fbebf6); padding: ",[0,12]," ",[0,30],"; }\n.",[1],"share-section .",[1],"share-icon { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; width: ",[0,70],"; height: ",[0,30],"; line-height: 1; border: 1px solid #fa436a; border-radius: ",[0,4],"; position: relative; overflow: hidden; font-size: ",[0,22],"; color: #fa436a; }\n.",[1],"share-section .",[1],"share-icon:after { content: \x27\x27; width: ",[0,50],"; height: ",[0,50],"; border-radius: 50%; left: ",[0,-20],"; top: ",[0,-12],"; position: absolute; background: #fa436a; }\n.",[1],"share-section .",[1],"icon-xingxing { position: relative; z-index: 1; font-size: ",[0,24],"; margin-left: ",[0,2],"; margin-right: ",[0,10],"; color: #fff; line-height: 1; }\n.",[1],"share-section .",[1],"tit { font-size: ",[0,28],"; margin-left: ",[0,10],"; }\n.",[1],"share-section .",[1],"icon-bangzhu1 { padding: ",[0,10],"; font-size: ",[0,30],"; line-height: 1; }\n.",[1],"share-section .",[1],"share-btn { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; text-align: right; font-size: ",[0,24],"; color: #fa436a; }\n.",[1],"share-section .",[1],"icon-you { font-size: ",[0,24],"; margin-left: ",[0,4],"; color: #fa436a; }\n.",[1],"c-list { font-size: ",[0,26],"; color: #606266; background: #fff; }\n.",[1],"c-list .",[1],"c-row { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding: ",[0,20]," ",[0,30],"; position: relative; }\n.",[1],"c-list .",[1],"tit { width: ",[0,140],"; }\n.",[1],"c-list .",[1],"con { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; color: #303133; }\n.",[1],"c-list .",[1],"con .",[1],"selected-text { margin-right: ",[0,10],"; }\n.",[1],"c-list .",[1],"bz-list { height: ",[0,40],"; font-size: ",[0,26],"; color: #303133; }\n.",[1],"c-list .",[1],"bz-list wx-text { display: inline-block; margin-right: ",[0,30],"; }\n.",[1],"c-list .",[1],"con-list { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; color: #303133; line-height: ",[0,40],"; }\n.",[1],"c-list .",[1],"red { color: #fa436a; }\n.",[1],"eva-section { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; padding: ",[0,20]," ",[0,30],"; background: #fff; margin-top: ",[0,16],"; }\n.",[1],"eva-section .",[1],"e-header { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: ",[0,70],"; font-size: ",[0,26],"; color: #909399; }\n.",[1],"eva-section .",[1],"e-header .",[1],"tit { font-size: ",[0,30],"; color: #303133; margin-right: ",[0,4],"; }\n.",[1],"eva-section .",[1],"e-header .",[1],"tip { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; text-align: right; }\n.",[1],"eva-section .",[1],"e-header .",[1],"icon-you { margin-left: ",[0,10],"; }\n.",[1],"eva-box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; padding: ",[0,20]," 0; }\n.",[1],"eva-box .",[1],"portrait { -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; width: ",[0,80],"; height: ",[0,80],"; border-radius: 100px; }\n.",[1],"eva-box .",[1],"right { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; font-size: ",[0,28],"; color: #606266; padding-left: ",[0,26],"; }\n.",[1],"eva-box .",[1],"right .",[1],"con { font-size: ",[0,28],"; color: #303133; padding: ",[0,20]," 0; }\n.",[1],"eva-box .",[1],"right .",[1],"bot { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; font-size: ",[0,24],"; color: #909399; }\n.",[1],"detail-desc { background: #fff; margin-top: ",[0,16],"; }\n.",[1],"detail-desc .",[1],"d-header { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: ",[0,80],"; font-size: ",[0,30],"; color: #303133; position: relative; }\n.",[1],"detail-desc .",[1],"d-header wx-text { padding: 0 ",[0,20],"; background: #fff; position: relative; z-index: 1; }\n.",[1],"detail-desc .",[1],"d-header:after { position: absolute; left: 50%; top: 50%; -webkit-transform: translateX(-50%); -ms-transform: translateX(-50%); transform: translateX(-50%); width: ",[0,300],"; height: 0; content: \x27\x27; border-bottom: 1px solid #ccc; }\n.",[1],"attr-content { padding: ",[0,10]," ",[0,30],"; }\n.",[1],"attr-content .",[1],"a-t { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"attr-content .",[1],"a-t wx-image { width: ",[0,170],"; height: ",[0,170],"; -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; margin-top: ",[0,-40],"; border-radius: ",[0,8],"; }\n.",[1],"attr-content .",[1],"a-t .",[1],"right { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; padding-left: ",[0,24],"; font-size: ",[0,26],"; color: #606266; line-height: ",[0,42],"; }\n.",[1],"attr-content .",[1],"a-t .",[1],"right .",[1],"price { font-size: ",[0,32],"; color: #fa436a; margin-bottom: ",[0,10],"; }\n.",[1],"attr-content .",[1],"a-t .",[1],"right .",[1],"selected-text { margin-right: ",[0,10],"; }\n.",[1],"attr-content .",[1],"attr-list { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; font-size: ",[0,30],"; color: #606266; padding-top: ",[0,30],"; padding-left: ",[0,10],"; }\n.",[1],"attr-content .",[1],"item-list { padding: ",[0,20]," 0 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; }\n.",[1],"attr-content .",[1],"item-list wx-text { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; background: #eee; margin-right: ",[0,20],"; margin-bottom: ",[0,20],"; border-radius: ",[0,100],"; min-width: ",[0,60],"; height: ",[0,60],"; padding: 0 ",[0,20],"; font-size: ",[0,28],"; color: #303133; }\n.",[1],"attr-content .",[1],"item-list .",[1],"selected { background: #fbebee; color: #fa436a; }\n.",[1],"popup { position: fixed; left: 0; top: 0; right: 0; bottom: 0; z-index: 99; }\n.",[1],"popup.",[1],"show { display: block; }\n.",[1],"popup.",[1],"show .",[1],"mask { -webkit-animation: showPopup 0.2s linear both; animation: showPopup 0.2s linear both; }\n.",[1],"popup.",[1],"show .",[1],"layer { -webkit-animation: showLayer 0.2s linear both; animation: showLayer 0.2s linear both; }\n.",[1],"popup.",[1],"hide .",[1],"mask { -webkit-animation: hidePopup 0.2s linear both; animation: hidePopup 0.2s linear both; }\n.",[1],"popup.",[1],"hide .",[1],"layer { -webkit-animation: hideLayer 0.2s linear both; animation: hideLayer 0.2s linear both; }\n.",[1],"popup.",[1],"none { display: none; }\n.",[1],"popup .",[1],"mask { position: fixed; top: 0; width: 100%; height: 100%; z-index: 1; background-color: rgba(0, 0, 0, 0.4); }\n.",[1],"popup .",[1],"layer { position: fixed; z-index: 99; bottom: 0; width: 100%; min-height: 40vh; border-radius: ",[0,10]," ",[0,10]," 0 0; background-color: #fff; }\n.",[1],"popup .",[1],"layer .",[1],"btn { height: ",[0,66],"; line-height: ",[0,66],"; border-radius: ",[0,100],"; background: #fa436a; font-size: ",[0,30],"; color: #fff; margin: ",[0,30]," auto ",[0,20],"; }\n@-webkit-keyframes showPopup { 0% { opacity: 0; }\n100% { opacity: 1; }\n}@keyframes showPopup { 0% { opacity: 0; }\n100% { opacity: 1; }\n}@-webkit-keyframes hidePopup { 0% { opacity: 1; }\n100% { opacity: 0; }\n}@keyframes hidePopup { 0% { opacity: 1; }\n100% { opacity: 0; }\n}@-webkit-keyframes showLayer { 0% { -webkit-transform: translateY(120%); transform: translateY(120%); }\n100% { -webkit-transform: translateY(0%); transform: translateY(0%); }\n}@keyframes showLayer { 0% { -webkit-transform: translateY(120%); transform: translateY(120%); }\n100% { -webkit-transform: translateY(0%); transform: translateY(0%); }\n}@-webkit-keyframes hideLayer { 0% { -webkit-transform: translateY(0); transform: translateY(0); }\n100% { -webkit-transform: translateY(120%); transform: translateY(120%); }\n}@keyframes hideLayer { 0% { -webkit-transform: translateY(0); transform: translateY(0); }\n100% { -webkit-transform: translateY(120%); transform: translateY(120%); }\n}.",[1],"page-bottom { position: fixed; left: ",[0,30],"; bottom: ",[0,30],"; z-index: 95; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; width: ",[0,690],"; height: ",[0,100],"; background: rgba(255, 255, 255, 0.9); -webkit-box-shadow: 0 0 ",[0,20]," 0 rgba(0, 0, 0, 0.5); box-shadow: 0 0 ",[0,20]," 0 rgba(0, 0, 0, 0.5); border-radius: ",[0,16],"; }\n.",[1],"page-bottom .",[1],"p-b-btn { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; font-size: ",[0,24],"; color: #606266; width: ",[0,96],"; height: ",[0,80],"; }\n.",[1],"page-bottom .",[1],"p-b-btn .",[1],"yticon { font-size: ",[0,40],"; line-height: ",[0,48],"; color: #909399; }\n.",[1],"page-bottom .",[1],"p-b-btn.",[1],"active, .",[1],"page-bottom .",[1],"p-b-btn.",[1],"active .",[1],"yticon { color: #fa436a; }\n.",[1],"page-bottom .",[1],"p-b-btn .",[1],"icon-fenxiang2 { font-size: ",[0,42],"; -webkit-transform: translateY(",[0,-2],"); -ms-transform: translateY(",[0,-2],"); transform: translateY(",[0,-2],"); }\n.",[1],"page-bottom .",[1],"p-b-btn .",[1],"icon-shoucang { font-size: ",[0,46],"; }\n.",[1],"page-bottom .",[1],"action-btn-group { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; height: ",[0,76],"; border-radius: 100px; overflow: hidden; -webkit-box-shadow: 0 ",[0,20]," ",[0,40]," ",[0,-16]," #fa436a; box-shadow: 0 ",[0,20]," ",[0,40]," ",[0,-16]," #fa436a; -webkit-box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4); box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4); background: -webkit-gradient(linear, left top, right top, from(#ffac30), color-stop(#fa436a), to(#F56C6C)); background: -o-linear-gradient(left, #ffac30, #fa436a, #F56C6C); background: linear-gradient(to right, #ffac30, #fa436a, #F56C6C); margin-left: ",[0,20],"; position: relative; }\n.",[1],"page-bottom .",[1],"action-btn-group:after { content: \x27\x27; position: absolute; top: 50%; right: 50%; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); height: ",[0,28],"; width: 0; border-right: 1px solid rgba(255, 255, 255, 0.5); }\n.",[1],"page-bottom .",[1],"action-btn-group .",[1],"action-btn { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; width: ",[0,180],"; height: 100%; font-size: ",[0,28],"; padding: 0; border-radius: 0; background: transparent; }\n",],undefined,{path:"./pages/product/product.wxss"});    
__wxAppCode__['pages/product/product.wxml']=$gwx('./pages/product/product.wxml');

__wxAppCode__['pages/public/login.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\nbody { background: #fff; }\n.",[1],"container { padding-top: 115px; position: relative; width: 100vw; height: 100vh; overflow: hidden; background: #fff; }\n.",[1],"wrapper { position: relative; z-index: 90; background: #fff; padding-bottom: ",[0,40],"; }\n.",[1],"back-btn { position: absolute; left: ",[0,40],"; z-index: 9999; padding-top: var(--status-bar-height); top: ",[0,40],"; font-size: ",[0,40],"; color: #303133; }\n.",[1],"left-top-sign { font-size: ",[0,120],"; color: #f8f8f8; position: relative; left: ",[0,-16],"; }\n.",[1],"right-top-sign { position: absolute; top: ",[0,80],"; right: ",[0,-30],"; z-index: 95; }\n.",[1],"right-top-sign:before, .",[1],"right-top-sign:after { display: block; content: \x22\x22; width: ",[0,400],"; height: ",[0,80],"; background: #b4f3e2; }\n.",[1],"right-top-sign:before { -webkit-transform: rotate(50deg); -ms-transform: rotate(50deg); transform: rotate(50deg); border-radius: 0 50px 0 0; }\n.",[1],"right-top-sign:after { position: absolute; right: ",[0,-198],"; top: 0; -webkit-transform: rotate(-50deg); -ms-transform: rotate(-50deg); transform: rotate(-50deg); border-radius: 50px 0 0 0; }\n.",[1],"left-bottom-sign { position: absolute; left: ",[0,-270],"; bottom: ",[0,-320],"; border: ",[0,100]," solid #d0d1fd; border-radius: 50%; padding: ",[0,180],"; }\n.",[1],"welcome { position: relative; left: ",[0,50],"; top: ",[0,-90],"; font-size: ",[0,46],"; color: #555; text-shadow: 1px 0px 1px rgba(0, 0, 0, 0.3); }\n.",[1],"input-content { padding: 0 ",[0,60],"; }\n.",[1],"input-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: start; -webkit-align-items: flex-start; -ms-flex-align: start; align-items: flex-start; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; padding: 0 ",[0,30],"; background: #f8f6fc; height: ",[0,120],"; border-radius: 4px; margin-bottom: ",[0,50],"; }\n.",[1],"input-item:last-child { margin-bottom: 0; }\n.",[1],"input-item .",[1],"tit { height: ",[0,50],"; line-height: ",[0,56],"; font-size: ",[0,26],"; color: #606266; }\n.",[1],"input-item wx-input { height: ",[0,60],"; font-size: ",[0,30],"; color: #303133; width: 100%; }\n.",[1],"confirm-btn { width: ",[0,630],"; height: ",[0,76],"; line-height: ",[0,76],"; border-radius: 50px; margin-top: ",[0,70],"; background: #fa436a; color: #fff; font-size: ",[0,32],"; }\n.",[1],"confirm-btn:after { border-radius: 100px; }\n.",[1],"forget-section { font-size: ",[0,26],"; color: #4399fc; text-align: center; margin-top: ",[0,40],"; }\n.",[1],"register-section { position: absolute; left: 0; bottom: ",[0,50],"; width: 100%; font-size: ",[0,26],"; color: #606266; text-align: center; }\n.",[1],"register-section wx-text { color: #4399fc; margin-left: ",[0,10],"; }\n",],undefined,{path:"./pages/public/login.wxss"});    
__wxAppCode__['pages/public/login.wxml']=$gwx('./pages/public/login.wxml');

__wxAppCode__['pages/set/set.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\nbody { background: #f8f8f8; }\n.",[1],"list-cell { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: baseline; -webkit-align-items: baseline; -ms-flex-align: baseline; align-items: baseline; padding: ",[0,20]," ",[0,30],"; line-height: ",[0,60],"; position: relative; background: #fff; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"list-cell.",[1],"log-out-btn { margin-top: ",[0,40],"; }\n.",[1],"list-cell.",[1],"log-out-btn .",[1],"cell-tit { color: #fa436a; text-align: center; margin-right: 0; }\n.",[1],"list-cell.",[1],"cell-hover { background: #fafafa; }\n.",[1],"list-cell.",[1],"b-b:after { left: ",[0,30],"; }\n.",[1],"list-cell.",[1],"m-t { margin-top: ",[0,16],"; }\n.",[1],"list-cell .",[1],"cell-more { -webkit-align-self: baseline; -ms-flex-item-align: baseline; align-self: baseline; font-size: ",[0,32],"; color: #909399; margin-left: ",[0,10],"; }\n.",[1],"list-cell .",[1],"cell-tit { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; font-size: ",[0,30],"; color: #303133; margin-right: ",[0,10],"; }\n.",[1],"list-cell .",[1],"cell-tip { font-size: ",[0,28],"; color: #909399; }\n.",[1],"list-cell wx-switch { -webkit-transform: translateX(",[0,16],") scale(0.84); -ms-transform: translateX(",[0,16],") scale(0.84); transform: translateX(",[0,16],") scale(0.84); }\n",],undefined,{path:"./pages/set/set.wxss"});    
__wxAppCode__['pages/set/set.wxml']=$gwx('./pages/set/set.wxml');

__wxAppCode__['pages/user/user.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"tj-sction .",[1],"tj-item, .",[1],"order-section .",[1],"order-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"tj-sction, .",[1],"order-section { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; -webkit-align-content: center; -ms-flex-line-pack: center; align-content: center; background: #fff; border-radius: ",[0,10],"; }\n.",[1],"user-section { height: ",[0,520],"; padding: ",[0,100]," ",[0,30]," 0; position: relative; }\n.",[1],"user-section .",[1],"bg { position: absolute; left: 0; top: 0; width: 100%; height: 100%; -webkit-filter: blur(1px); filter: blur(1px); opacity: .7; }\n.",[1],"user-info-box { height: ",[0,180],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; position: relative; z-index: 1; }\n.",[1],"user-info-box .",[1],"portrait { width: ",[0,130],"; height: ",[0,130],"; border: ",[0,5]," solid #fff; border-radius: 50%; }\n.",[1],"user-info-box .",[1],"username { font-size: ",[0,38],"; color: #303133; margin-left: ",[0,20],"; }\n.",[1],"vip-card-box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; color: #f7d680; height: ",[0,240],"; background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.7)), to(rgba(0, 0, 0, 0.8))); background: -o-linear-gradient(left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)); background: linear-gradient(left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)); border-radius: ",[0,16]," ",[0,16]," 0 0; overflow: hidden; position: relative; padding: ",[0,20]," ",[0,24],"; }\n.",[1],"vip-card-box .",[1],"card-bg { position: absolute; top: ",[0,20],"; right: 0; width: ",[0,380],"; height: ",[0,260],"; }\n.",[1],"vip-card-box .",[1],"b-btn { position: absolute; right: ",[0,20],"; top: ",[0,16],"; width: ",[0,132],"; height: ",[0,40],"; text-align: center; line-height: ",[0,40],"; font-size: ",[0,22],"; color: #36343c; border-radius: 20px; background: -webkit-gradient(linear, left top, right top, from(#f9e6af), to(#ffd465)); background: -o-linear-gradient(left, #f9e6af, #ffd465); background: linear-gradient(left, #f9e6af, #ffd465); z-index: 1; }\n.",[1],"vip-card-box .",[1],"tit { font-size: ",[0,30],"; color: #f7d680; margin-bottom: ",[0,28],"; }\n.",[1],"vip-card-box .",[1],"tit .",[1],"yticon { color: #f6e5a3; margin-right: ",[0,16],"; }\n.",[1],"vip-card-box .",[1],"e-b { font-size: ",[0,24],"; color: #d8cba9; margin-top: ",[0,10],"; }\n.",[1],"cover-container { background: #f8f8f8; margin-top: ",[0,-150],"; padding: 0 ",[0,30],"; position: relative; background: #f5f5f5; padding-bottom: ",[0,20],"; }\n.",[1],"cover-container .",[1],"arc { position: absolute; left: 0; top: ",[0,-34],"; width: 100%; height: ",[0,36],"; }\n.",[1],"tj-sction .",[1],"tj-item { -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; height: ",[0,140],"; font-size: ",[0,24],"; color: #75787d; }\n.",[1],"tj-sction .",[1],"num { font-size: ",[0,32],"; color: #303133; margin-bottom: ",[0,8],"; }\n.",[1],"order-section { padding: ",[0,28]," 0; margin-top: ",[0,20],"; }\n.",[1],"order-section .",[1],"order-item { width: ",[0,120],"; height: ",[0,120],"; border-radius: ",[0,10],"; font-size: ",[0,24],"; color: #303133; }\n.",[1],"order-section .",[1],"yticon { font-size: ",[0,48],"; margin-bottom: ",[0,18],"; color: #fa436a; }\n.",[1],"order-section .",[1],"icon-shouhoutuikuan { font-size: ",[0,44],"; }\n.",[1],"history-section { padding: ",[0,30]," 0 0; margin-top: ",[0,20],"; background: #fff; border-radius: ",[0,10],"; }\n.",[1],"history-section .",[1],"sec-header { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,28],"; color: #303133; line-height: ",[0,40],"; margin-left: ",[0,30],"; }\n.",[1],"history-section .",[1],"sec-header .",[1],"yticon { font-size: ",[0,44],"; color: #5eba8f; margin-right: ",[0,16],"; line-height: ",[0,40],"; }\n.",[1],"history-section .",[1],"h-list { white-space: nowrap; padding: ",[0,30]," ",[0,30]," 0; }\n.",[1],"history-section .",[1],"h-list wx-image { display: inline-block; width: ",[0,160],"; height: ",[0,160],"; margin-right: ",[0,20],"; border-radius: ",[0,10],"; }\n",],undefined,{path:"./pages/user/user.wxss"});    
__wxAppCode__['pages/user/user.wxml']=$gwx('./pages/user/user.wxml');

__wxAppCode__['pages/userinfo/userinfo.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\nbody { background: #f8f8f8; }\n.",[1],"user-section { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; height: ",[0,460],"; padding: ",[0,40]," ",[0,30]," 0; position: relative; }\n.",[1],"user-section .",[1],"bg { position: absolute; left: 0; top: 0; width: 100%; height: 100%; -webkit-filter: blur(1px); filter: blur(1px); opacity: .7; }\n.",[1],"user-section .",[1],"portrait-box { width: ",[0,200],"; height: ",[0,200],"; border: ",[0,6]," solid #fff; border-radius: 50%; position: relative; z-index: 2; }\n.",[1],"user-section .",[1],"portrait { position: relative; width: 100%; height: 100%; border-radius: 50%; }\n.",[1],"user-section .",[1],"yticon { position: absolute; line-height: 1; z-index: 5; font-size: ",[0,48],"; color: #fff; padding: ",[0,4]," ",[0,6],"; border-radius: ",[0,6],"; background: rgba(0, 0, 0, 0.4); }\n.",[1],"user-section .",[1],"pt-upload-btn { right: 0; bottom: ",[0,10],"; }\n.",[1],"user-section .",[1],"bg-upload-btn { right: ",[0,20],"; bottom: ",[0,16],"; }\n",],undefined,{path:"./pages/userinfo/userinfo.wxss"});    
__wxAppCode__['pages/userinfo/userinfo.wxml']=$gwx('./pages/userinfo/userinfo.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
