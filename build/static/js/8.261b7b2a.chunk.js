(this["webpackJsonptwitter-clone"]=this["webpackJsonptwitter-clone"]||[]).push([[8,11,12],{1290:function(t,e){},1291:function(t,e){},1297:function(t,e){},1307:function(t,e){},1308:function(t,e){},1310:function(t,e){},1524:function(t,e,n){"use strict";n.r(e),n.d(e,"PhantomAdapter",(function(){return E}));var r=n(7),a=n(8),i=n(10),c=n(53),o=n(38),s=n(11),u=n(12),h=n(9),l=n(1),d=n.n(l),p=n(14),f=n.n(p),v=n(13),w=n(1314),b=n(25),O=n.n(b);function k(t,e,n){return new Promise((function(r,a){n>0?setTimeout(Object(h.a)(d.a.mark((function i(){var c;return d.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,t();case 2:(c=i.sent)&&r(c),c||k(t,e,n-1).then((function(t){return r(t),t})).catch((function(t){return a(t)}));case 5:case"end":return i.stop()}}),i)}))),e):r(!1)}))}var m=function(){var t=Object(h.a)(d.a.mark((function t(){var e,n,r=arguments;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=r.length>0&&void 0!==r[0]?r[0]:{interval:1e3,count:3},!("undefined"!==typeof window&&!(null===(e=window.solana)||void 0===e||!e.isPhantom))){t.next=4;break}return t.abrupt("return",window.solana);case 4:return t.next=6,k((function(){var t;return null===(t=window.solana)||void 0===t?void 0:t.isPhantom}),n.interval,n.count);case 6:if(!t.sent){t.next=9;break}return t.abrupt("return",window.solana);case 9:return t.abrupt("return",null);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),E=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=e.call(this),f()(Object(i.a)(t),"name",v.i.PHANTOM),f()(Object(i.a)(t),"adapterNamespace",v.c.SOLANA),f()(Object(i.a)(t),"currentChainNamespace",v.f.SOLANA),f()(Object(i.a)(t),"type",v.a.EXTERNAL),f()(Object(i.a)(t),"status",v.d.NOT_READY),f()(Object(i.a)(t),"_wallet",null),f()(Object(i.a)(t),"phantomProvider",null),f()(Object(i.a)(t),"rehydrated",!1),f()(Object(i.a)(t),"_onDisconnect",(function(){t._wallet&&(t._wallet.off("disconnect",t._onDisconnect),t.rehydrated=!1,t.status=t.status===v.d.CONNECTED?v.d.READY:v.d.NOT_READY,t.emit(v.b.DISCONNECTED))})),t.chainConfig=a.chainConfig||null,t}return Object(a.a)(n,[{key:"isWalletConnected",get:function(){var t;return!(null===(t=this._wallet)||void 0===t||!t.isConnected||this.status!==v.d.CONNECTED)}},{key:"provider",get:function(){var t;return(null===(t=this.phantomProvider)||void 0===t?void 0:t.provider)||null},set:function(t){throw new Error("Not implemented")}},{key:"setAdapterSettings",value:function(t){}},{key:"init",value:function(){var t=Object(h.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Object(c.a)(Object(o.a)(n.prototype),"checkInitializationRequirements",this).call(this),this.chainConfig||(this.chainConfig=Object(v.m)(v.f.SOLANA,"0x1")),t.next=4,m({interval:500,count:3});case 4:if(this._wallet=t.sent,this._wallet){t.next=7;break}throw v.j.notInstalled();case 7:if(this.phantomProvider=new w.PhantomInjectedProvider({config:{chainConfig:this.chainConfig}}),this.status=v.d.READY,this.emit(v.b.READY,v.i.PHANTOM),t.prev=10,!e.autoConnect){t.next=15;break}return this.rehydrated=!0,t.next=15,this.connect();case 15:t.next=21;break;case 17:t.prev=17,t.t0=t.catch(10),O.a.error("Failed to connect with cached phantom provider",t.t0),this.emit("ERRORED",t.t0);case 21:case"end":return t.stop()}}),t,this,[[10,17]])})));return function(e){return t.apply(this,arguments)}}()},{key:"connect",value:function(){var t=Object(h.a)(d.a.mark((function t(){var e,r,a=this;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this,t.prev=1,Object(c.a)(Object(o.a)(n.prototype),"checkConnectionRequirements",this).call(this),this.status=v.d.CONNECTING,this.emit(v.b.CONNECTING,{adapter:v.i.PHANTOM}),this._wallet){t.next=7;break}throw v.j.notInstalled();case 7:if(this._wallet.isConnected){t.next=24;break}return r=this._wallet._handleDisconnect,t.prev=9,t.next=12,new Promise((function(t,n){var i=function(){var e=Object(h.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.connectWithProvider(a._wallet);case 2:t(a.provider);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(!a._wallet)return n(v.j.notInstalled());a._wallet.once("connect",i),a._wallet._handleDisconnect=function(){n(v.j.windowClosed());for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return r.apply(e._wallet,a)},a._wallet.connect().catch((function(t){n(t)}))}));case 12:t.next=19;break;case 14:if(t.prev=14,t.t0=t.catch(9),!(t.t0 instanceof v.l)){t.next=18;break}throw t.t0;case 18:throw v.k.connectionError(null===t.t0||void 0===t.t0?void 0:t.t0.message);case 19:return t.prev=19,this._wallet._handleDisconnect=r,t.finish(19);case 22:t.next=26;break;case 24:return t.next=26,this.connectWithProvider(this._wallet);case 26:if(this._wallet.publicKey){t.next=28;break}throw v.k.connectionError();case 28:return this._wallet.on("disconnect",this._onDisconnect),t.abrupt("return",this.provider);case 32:throw t.prev=32,t.t1=t.catch(1),this.status=v.d.READY,this.rehydrated=!1,this.emit(v.b.ERRORED,t.t1),t.t1;case 38:case"end":return t.stop()}}),t,this,[[1,32],[9,14,19,22]])})));return function(){return t.apply(this,arguments)}}()},{key:"disconnect",value:function(){var t=Object(h.a)(d.a.mark((function t(){var e,n,r=arguments;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=r.length>0&&void 0!==r[0]?r[0]:{cleanup:!1},this.isWalletConnected){t.next=3;break}throw v.k.notConnectedError("Not connected with wallet");case 3:return t.prev=3,t.next=6,null===(n=this._wallet)||void 0===n?void 0:n.disconnect();case 6:e.cleanup&&(this.status=v.d.NOT_READY,this.phantomProvider=null,this._wallet=null),this.emit(v.b.DISCONNECTED),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),this.emit(v.b.ERRORED,v.k.disconnectionError(null===t.t0||void 0===t.t0?void 0:t.t0.message));case 13:case"end":return t.stop()}}),t,this,[[3,10]])})));return function(){return t.apply(this,arguments)}}()},{key:"getUserInfo",value:function(){var t=Object(h.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.isWalletConnected){t.next=2;break}throw v.k.notConnectedError("Not connected with wallet, Please login/connect first");case 2:return t.abrupt("return",{});case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"connectWithProvider",value:function(){var t=Object(h.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.phantomProvider){t.next=2;break}throw v.k.connectionError("No phantom provider");case 2:return t.next=4,this.phantomProvider.setupProvider(e);case 4:return this.status=v.d.CONNECTED,this.emit(v.b.CONNECTED,{adapter:v.i.PHANTOM,reconnected:this.rehydrated}),t.abrupt("return",this.provider);case 7:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}]),n}(v.e)}}]);
//# sourceMappingURL=8.261b7b2a.chunk.js.map