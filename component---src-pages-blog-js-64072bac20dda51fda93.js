(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{vx99:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return he}));var a=n("q1tI"),r=n.n(a),o=n("jd0y"),i=n("qhky"),u=n("vOnD"),s=u.b.div.withConfig({displayName:"styles__Container",componentId:"sc-1hxwqot-0"})(["display:flex;align-items:center;justify-content:center;height:100vh;background-color:transparent;"]),d=n("Wbzz"),c=u.b.div.withConfig({displayName:"styles__Container",componentId:"sc-1fksm99-0"})(["width:80%;display:flex;justify-content:center;flex-wrap:wrap;"]),m=Object(u.b)(d.a).withConfig({displayName:"styles__Wrapper",componentId:"sc-1fksm99-1"})(["text-decoration:none;padding:20px 50px;max-width:350px;cursor:pointer;border-radius:4px;background-color:#333;transition:background 0.2s;margin:10px;&:hover{background:rgba(255,255,255,0.1);}h1{text-align:center;}p{margin-top:25px;color:var(--white);opacity:0.7;margin-bottom:10px;}"]),l=Object(a.createContext)();function h(e){var t=e.children,n=e.payload,o=Object(a.useState)(n),i=o[0],u=o[1];return r.a.createElement(l.Provider,{value:{posts:i,setPosts:u}},t)}function f(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function g(e){f(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function w(e){f(1,arguments);var t=g(e);return!isNaN(t)}var v={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function b(e){return function(t){var n=t||{},a=n.width?String(n.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}var p={date:b({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:b({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:b({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},y={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function k(e){return function(t,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=r.width?String(r.width):o;a=e.formattingValues[i]||e.formattingValues[o]}else{var u=e.defaultWidth,s=r.width?String(r.width):e.defaultWidth;a=e.values[s]||e.values[u]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function M(e){return function(t,n){var a=String(t),r=n||{},o=a.match(e.matchPattern);if(!o)return null;var i=o[0],u=a.match(e.parsePattern);if(!u)return null;var s=e.valueCallback?e.valueCallback(u[0]):u[0];return{value:s=r.valueCallback?r.valueCallback(s):s,rest:a.slice(i.length)}}}function T(e){return function(t,n){var a=String(t),r=n||{},o=r.width,i=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],u=a.match(i);if(!u)return null;var s,d=u[0],c=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(c)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(c,(function(e){return e.test(d)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(c,(function(e){return e.test(d)})),s=e.valueCallback?e.valueCallback(s):s,{value:s=r.valueCallback?r.valueCallback(s):s,rest:a.slice(d.length)}}}var j={code:"en-US",formatDistance:function(e,t,n){var a;return n=n||{},a="string"==typeof v[e]?v[e]:1===t?v[e].one:v[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:p,formatRelative:function(e,t,n,a){return y[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:k({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:k({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:k({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:k({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:k({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:M({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:T({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:T({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:T({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:T({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:T({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function x(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function C(e,t){f(2,arguments);var n=g(e).getTime(),a=x(t);return new Date(n+a)}function P(e,t){f(2,arguments);var n=x(t);return C(e,-n)}function W(e,t){for(var n=e<0?"-":"",a=Math.abs(e).toString();a.length<t;)a="0"+a;return n+a}var D={y:function(e,t){var n=e.getUTCFullYear(),a=n>0?n:1-n;return W("yy"===t?a%100:a,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):W(n+1,2)},d:function(e,t){return W(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return W(e.getUTCHours()%12||12,t.length)},H:function(e,t){return W(e.getUTCHours(),t.length)},m:function(e,t){return W(e.getUTCMinutes(),t.length)},s:function(e,t){return W(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,a=e.getUTCMilliseconds();return W(Math.floor(a*Math.pow(10,n-3)),t.length)}};function E(e){f(1,arguments);var t=1,n=g(e),a=n.getUTCDay(),r=(a<t?7:0)+a-t;return n.setUTCDate(n.getUTCDate()-r),n.setUTCHours(0,0,0,0),n}function S(e){f(1,arguments);var t=g(e),n=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var r=E(a),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=E(o);return t.getTime()>=r.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}function U(e){f(1,arguments);var t=S(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var a=E(n);return a}function z(e,t){f(1,arguments);var n=t||{},a=n.locale,r=a&&a.options&&a.options.weekStartsOn,o=null==r?0:x(r),i=null==n.weekStartsOn?o:x(n.weekStartsOn);if(!(i>=0&&i<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=g(e),s=u.getUTCDay(),d=(s<i?7:0)+s-i;return u.setUTCDate(u.getUTCDate()-d),u.setUTCHours(0,0,0,0),u}function Y(e,t){f(1,arguments);var n=g(e,t),a=n.getUTCFullYear(),r=t||{},o=r.locale,i=o&&o.options&&o.options.firstWeekContainsDate,u=null==i?1:x(i),s=null==r.firstWeekContainsDate?u:x(r.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=new Date(0);d.setUTCFullYear(a+1,0,s),d.setUTCHours(0,0,0,0);var c=z(d,t),m=new Date(0);m.setUTCFullYear(a,0,s),m.setUTCHours(0,0,0,0);var l=z(m,t);return n.getTime()>=c.getTime()?a+1:n.getTime()>=l.getTime()?a:a-1}function O(e,t){f(1,arguments);var n=t||{},a=n.locale,r=a&&a.options&&a.options.firstWeekContainsDate,o=null==r?1:x(r),i=null==n.firstWeekContainsDate?o:x(n.firstWeekContainsDate),u=Y(e,t),s=new Date(0);s.setUTCFullYear(u,0,i),s.setUTCHours(0,0,0,0);var d=z(s,t);return d}var N="midnight",q="noon",H="morning",X="afternoon",F="evening",L="night";function Q(e,t){var n=e>0?"-":"+",a=Math.abs(e),r=Math.floor(a/60),o=a%60;if(0===o)return n+String(r);var i=t||"";return n+String(r)+i+W(o,2)}function G(e,t){return e%60==0?(e>0?"-":"+")+W(Math.abs(e)/60,2):A(e,t)}function A(e,t){var n=t||"",a=e>0?"-":"+",r=Math.abs(e);return a+W(Math.floor(r/60),2)+n+W(r%60,2)}var B={G:function(e,t,n){var a=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var a=e.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return D.y(e,t)},Y:function(e,t,n,a){var r=Y(e,a),o=r>0?r:1-r;return"YY"===t?W(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):W(o,t.length)},R:function(e,t){return W(S(e),t.length)},u:function(e,t){return W(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return W(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return W(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,n){var a=e.getUTCMonth();switch(t){case"M":case"MM":return D.M(e,t);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,n){var a=e.getUTCMonth();switch(t){case"L":return String(a+1);case"LL":return W(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,n,a){var r=function(e,t){f(1,arguments);var n=g(e),a=z(n,t).getTime()-O(n,t).getTime();return Math.round(a/6048e5)+1}(e,a);return"wo"===t?n.ordinalNumber(r,{unit:"week"}):W(r,t.length)},I:function(e,t,n){var a=function(e){f(1,arguments);var t=g(e),n=E(t).getTime()-U(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(a,{unit:"week"}):W(a,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):D.d(e,t)},D:function(e,t,n){var a=function(e){f(1,arguments);var t=g(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=t.getTime(),r=n-a;return Math.floor(r/864e5)+1}(e);return"Do"===t?n.ordinalNumber(a,{unit:"dayOfYear"}):W(a,t.length)},E:function(e,t,n){var a=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,n,a){var r=e.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return W(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,n,a){var r=e.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return W(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,n){var a=e.getUTCDay(),r=0===a?7:a;switch(t){case"i":return String(r);case"ii":return W(r,t.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,n){var a=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){var a,r=e.getUTCHours();switch(a=12===r?q:0===r?N:r/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){var a,r=e.getUTCHours();switch(a=r>=17?F:r>=12?X:r>=4?H:L,t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var a=e.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return D.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):D.H(e,t)},K:function(e,t,n){var a=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(a,{unit:"hour"}):W(a,t.length)},k:function(e,t,n){var a=e.getUTCHours();return 0===a&&(a=24),"ko"===t?n.ordinalNumber(a,{unit:"hour"}):W(a,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):D.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):D.s(e,t)},S:function(e,t){return D.S(e,t)},X:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return G(r);case"XXXX":case"XX":return A(r);case"XXXXX":case"XXX":default:return A(r,":")}},x:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"x":return G(r);case"xxxx":case"xx":return A(r);case"xxxxx":case"xxx":default:return A(r,":")}},O:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Q(r,":");case"OOOO":default:return"GMT"+A(r,":")}},z:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Q(r,":");case"zzzz":default:return"GMT"+A(r,":")}},t:function(e,t,n,a){var r=a._originalDate||e;return W(Math.floor(r.getTime()/1e3),t.length)},T:function(e,t,n,a){return W((a._originalDate||e).getTime(),t.length)}};function R(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function J(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var K={p:J,P:function(e,t){var n,a=e.match(/(P+)(p+)?/),r=a[1],o=a[2];if(!o)return R(e,t);switch(r){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",R(r,t)).replace("{{time}}",J(o,t))}};function _(e){return e.getTime()%6e4}function I(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());return t.setSeconds(0,0),6e4*n+(n>0?(6e4+_(t))%6e4:_(t))}var V=["D","DD"],$=["YY","YYYY"];function Z(e){return-1!==V.indexOf(e)}function ee(e){return-1!==$.indexOf(e)}function te(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var ne=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ae=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,re=/^'([^]*?)'?$/,oe=/''/g,ie=/[a-zA-Z]/;function ue(e){return e.match(re)[1].replace(oe,"'")}var se={lessThanXSeconds:{one:"malpli ol sekundo",other:"malpli ol {{count}} sekundoj"},xSeconds:{one:"1 sekundo",other:"{{count}} sekundoj"},halfAMinute:"duonminuto",lessThanXMinutes:{one:"malpli ol minuto",other:"malpli ol {{count}} minutoj"},xMinutes:{one:"1 minuto",other:"{{count}} minutoj"},aboutXHours:{one:"proksimume 1 horo",other:"proksimume {{count}} horoj"},xHours:{one:"1 horo",other:"{{count}} horoj"},xDays:{one:"1 tago",other:"{{count}} tagoj"},aboutXMonths:{one:"proksimume 1 monato",other:"proksimume {{count}} monatoj"},xWeeks:{one:"1 semajno",other:"{{count}} semajnoj"},aboutXWeeks:{one:"proksimume 1 semajno",other:"proksimume {{count}} semajnoj"},xMonths:{one:"1 monato",other:"{{count}} monatoj"},aboutXYears:{one:"proksimume 1 jaro",other:"proksimume {{count}} jaroj"},xYears:{one:"1 jaro",other:"{{count}} jaroj"},overXYears:{one:"pli ol 1 jaro",other:"pli ol {{count}} jaroj"},almostXYears:{one:"preskaŭ 1 jaro",other:"preskaŭ {{count}} jaroj"}};var de={date:b({formats:{full:"EEEE, do 'de' MMMM y",long:"y-MMMM-dd",medium:"y-MMM-dd",short:"yyyy-MM-dd"},defaultWidth:"full"}),time:b({formats:{full:"Ho 'horo kaj' m:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:b({formats:{any:"{{date}} {{time}}"},defaultWidth:"any"})},ce={lastWeek:"'pasinta' eeee 'je' p",yesterday:"'hieraŭ je' p",today:"'hodiaŭ je' p",tomorrow:"'morgaŭ je' p",nextWeek:"eeee 'je' p",other:"P"};k({values:{narrow:["aK","pK"],abbreviated:["a.K.E.","p.K.E."],wide:["antaŭ Komuna Erao","Komuna Erao"]},defaultWidth:"wide"}),k({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1-a kvaronjaro","2-a kvaronjaro","3-a kvaronjaro","4-a kvaronjaro"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),k({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan","feb","mar","apr","maj","jun","jul","aŭg","sep","okt","nov","dec"],wide:["januaro","februaro","marto","aprilo","majo","junio","julio","aŭgusto","septembro","oktobro","novembro","decembro"]},defaultWidth:"wide"}),k({values:{narrow:["D","L","M","M","Ĵ","V","S"],short:["di","lu","ma","me","ĵa","ve","sa"],abbreviated:["dim","lun","mar","mer","ĵaŭ","ven","sab"],wide:["dimanĉo","lundo","mardo","merkredo","ĵaŭdo","vendredo","sabato"]},defaultWidth:"wide"}),k({values:{narrow:{am:"a",pm:"p",midnight:"noktomezo",noon:"tagmezo",morning:"matene",afternoon:"posttagmeze",evening:"vespere",night:"nokte"},abbreviated:{am:"a.t.m.",pm:"p.t.m.",midnight:"noktomezo",noon:"tagmezo",morning:"matene",afternoon:"posttagmeze",evening:"vespere",night:"nokte"},wide:{am:"antaŭtagmeze",pm:"posttagmeze",midnight:"noktomezo",noon:"tagmezo",morning:"matene",afternoon:"posttagmeze",evening:"vespere",night:"nokte"}},defaultWidth:"wide"}),M({matchPattern:/^(\d+)(-?a)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),T({matchPatterns:{narrow:/^([ap]k)/i,abbreviated:/^([ap]\.?\s?k\.?\s?e\.?)/i,wide:/^((antaǔ |post )?komuna erao)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^a/i,/^[kp]/i]},defaultParseWidth:"any"}),T({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^k[1234]/i,wide:/^[1234](-?a)? kvaronjaro/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),T({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|maj|jun|jul|a(ŭ|ux|uh|u)g|sep|okt|nov|dec)/i,wide:/^(januaro|februaro|marto|aprilo|majo|junio|julio|a(ŭ|ux|uh|u)gusto|septembro|oktobro|novembro|decembro)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^a(u|ŭ)/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),T({matchPatterns:{narrow:/^[dlmĵjvs]/i,short:/^(di|lu|ma|me|(ĵ|jx|jh|j)a|ve|sa)/i,abbreviated:/^(dim|lun|mar|mer|(ĵ|jx|jh|j)a(ŭ|ux|uh|u)|ven|sab)/i,wide:/^(diman(ĉ|cx|ch|c)o|lundo|mardo|merkredo|(ĵ|jx|jh|j)a(ŭ|ux|uh|u)do|vendredo|sabato)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^(j|ĵ)/i,/^v/i,/^s/i],any:[/^d/i,/^l/i,/^ma/i,/^me/i,/^(j|ĵ)/i,/^v/i,/^s/i]},defaultParseWidth:"any"}),T({matchPatterns:{narrow:/^([ap]|(posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo])/i,abbreviated:/^([ap][.\s]?t[.\s]?m[.\s]?|(posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo])/i,wide:/^(anta(ŭ|ux)tagmez|posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo]/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^noktom/i,noon:/^t/i,morning:/^m/i,afternoon:/^posttagmeze/i,evening:/^v/i,night:/^n/i}},defaultParseWidth:"any"});var me=function(){var e=Object(a.useContext)(l).posts;return r.a.createElement(c,null,e.map((function(e){var t,n=e.node;return r.a.createElement(m,{to:n.fields.slug,key:n.fields.slug},r.a.createElement("h1",null,n.frontmatter.title),r.a.createElement("p",null,"Por ",r.a.createElement("b",null,n.frontmatter.author)," em"," ",function(e,t,n){f(2,arguments);var a=String(t),r=n||{},o=r.locale||j,i=o.options&&o.options.firstWeekContainsDate,u=null==i?1:x(i),s=null==r.firstWeekContainsDate?u:x(r.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=o.options&&o.options.weekStartsOn,c=null==d?0:x(d),m=null==r.weekStartsOn?c:x(r.weekStartsOn);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var l=g(e);if(!w(l))throw new RangeError("Invalid time value");var h=I(l),v=P(l,h),b={firstWeekContainsDate:s,weekStartsOn:m,locale:o,_originalDate:l},p=a.match(ae).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,K[t])(e,o.formatLong,b):e})).join("").match(ne).map((function(n){if("''"===n)return"'";var a=n[0];if("'"===a)return ue(n);var i=B[a];if(i)return!r.useAdditionalWeekYearTokens&&ee(n)&&te(n,t,e),!r.useAdditionalDayOfYearTokens&&Z(n)&&te(n,t,e),i(v,n,o.localize,b);if(a.match(ie))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return n})).join("");return p}(new Date(n.frontmatter.date),"MMMM yyyy",{locale:void 0})),null===(t=n.frontmatter.tags)||void 0===t?void 0:t.map((function(e){return r.a.createElement("a",null,"#",e)})))})))},le=function(){return r.a.createElement(s,null,r.a.createElement(me,null))},he=(t.default=function(e){var t=e.data.allMarkdownRemark.edges.filter((function(e){return"post"===e.node.frontmatter.layout}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,null),r.a.createElement(i.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"yagolopes.com"),r.a.createElement("link",{rel:"yagolopes.com",href:"http://yagolopes.com"})),r.a.createElement(h,{payload:t},r.a.createElement(o.a,null,r.a.createElement(le,null))))},"1119355947")}}]);
//# sourceMappingURL=component---src-pages-blog-js-64072bac20dda51fda93.js.map