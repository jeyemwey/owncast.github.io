(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[781],{22864:function(e,t,i){"use strict";i.r(t),i.d(t,{OwncastPlayer:function(){return D},default:function(){return _}});var n=i(85893),s=i(67294),r=i(4480),a=i(46977),l=i(94184),o=i.n(l),h=i(85215),c=i(43497),u=i.n(c);i(51403);let d=e=>{let{options:t,onReady:i}=e,r=s.useRef(null),a=s.useRef(null);return s.useEffect(()=>{if(!a.current){let e=r.current,n=a.current=(0,h.Z)(e,t,()=>(console.debug("player is ready"),i&&i(n,h.Z)));n.autoplay(t.autoplay),n.src(t.sources)}h.Z.Vhs.xhr.beforeRequest=e=>{if(e.uri.match("m3u8")){let t=Math.random().toString(16).substr(2,8);e.uri="".concat(e.uri,"?cachebust=").concat(t)}return e}},[t,r]),(0,n.jsx)("div",{"data-vjs-player":!0,children:(0,n.jsx)("video",{ref:r,className:"video-js vjs-big-play-centered vjs-show-big-play-button-on-pause ".concat(u().player," vjs-owncast")})})},m={position:"absolute",width:"100%",height:"100%"},g=e=>{let{src:t="",width:i,height:r,objectFit:a="fill",duration:l="1s",className:o}=e,h=(0,s.useMemo)(()=>({display:"inline-block",position:"relative",width:i,height:r}),[i,r]),c=(0,s.useMemo)(()=>[{...m,objectFit:a,opacity:0,transition:"opacity ".concat(l)},{...m,objectFit:a,opacity:1,transition:"opacity ".concat(l)},{...m,objectFit:a,opacity:0}],[a,l]),[u,d]=(0,s.useState)(0),[g,f]=(0,s.useState)(["",""]),p=t!==g[1]?t:"",y=()=>{d((u+1)%3),f([g[1],p])};return(0,n.jsx)("span",{style:h,className:o,children:[...g,p].map((e,t)=>""!==e&&(0,n.jsx)("img",{src:e,alt:"",style:c[t],onLoad:2===t?y:void 0},e))})};g.defaultProps={objectFit:"fill",duration:"3s"};var f=i(24039),p=i.n(f);let y=e=>{let t,{online:i,initialSrc:r,src:a}=e,[l,o]=(0,s.useState)(r),[h,c]=(0,s.useState)("0s");return(0,s.useEffect)(()=>{clearInterval(t),t=setInterval(()=>{"0s"===h&&c("3s"),o("".concat(a,"?").concat(Date.now()))},2e4)},[]),(0,n.jsxs)("div",{className:p().poster,children:[!i&&(0,n.jsx)("img",{src:r,alt:"logo"}),i&&(0,n.jsx)(g,{src:l,duration:h,objectFit:"contain",height:"auto",width:"100%",className:p().image})]})};var b=i(61225),T=i(44974),v=class{stop(){clearInterval(this.sendMetricsTimer),this.player.off()}setClockSkew(e){this.clockSkewMs=e}videoJSReady(){let e=this.player.tech({IWillNotUseThisInPlugins:!0});this.supportsDetailedMetrics=!!e,e.on("usage",e=>{"vhs-unknown-waiting"===e.name&&this.setIsBuffering(!0),"vhs-rendition-change-abr"===e.name&&this.incrementQualityVariantChanges()});let t=this.player.textTracks();t.addEventListener("cuechange",()=>{this.incrementQualityVariantChanges()})}handlePlaying(){clearInterval(this.collectPlaybackMetricsTimer),this.collectPlaybackMetricsTimer=setInterval(()=>{this.collectPlaybackMetrics()},5e3)}handleEnded(){clearInterval(this.collectPlaybackMetricsTimer)}handleBuffering(){this.incrementErrorCount(1),this.setIsBuffering(!0)}handleNoLongerBuffering(){this.setIsBuffering(!1)}handleError(){this.incrementErrorCount(1)}incrementErrorCount(e){this.errors+=e}incrementQualityVariantChanges(){if(!this.hasPerformedInitialVariantChange){this.hasPerformedInitialVariantChange=!0;return}this.qualityVariantChanges++}setIsBuffering(e){if(this.isBuffering=e,!e){clearTimeout(this.bufferingDurationTimer);return}this.bufferingDurationTimer=setTimeout(()=>{this.incrementErrorCount(1)},500)}trackSegmentDownloadTime(e){this.segmentDownloadTime.push(e)}trackBandwidth(e){this.bandwidthTracking.push(e)}trackLatency(e){this.latencyTracking.push(e)}collectPlaybackMetrics(){let e=this.player.tech({IWillNotUseThisInPlugins:!0});if(!e||!e.vhs||this.player.paused())return;let t=this.player.networkState();if(2!==t)return;let i=e.vhs.systemBandwidth;this.trackBandwidth(i);try{let t=function(e){let t;let i=e.vhs.playlists.media(),n=e.currentTime();for(let e=0,s=i.segments.length;e<s;e++)if(n<i.segments[e].end){t=i.segments[e];break}return t||([t]=i.segments),t}(e);if(!t||!t.dateTimeObject)return;let i=t.dateTimeObject.getTime(),n=new Date().getTime()+this.clockSkewMs,s=n-i;if(s<0||s/1e3>=40)return;this.trackLatency(s)}catch(e){console.warn(e)}}async send(){let e;if(0===this.segmentDownloadTime.length||!this.player||this.player.paused())return;let t=this.errors;if(this.supportsDetailedMetrics){let i=e=>e.reduce((e,t)=>e+t,0)/e.length,n=i(this.segmentDownloadTime)/1e3,s=i(this.bandwidthTracking)/1e3,r=i(this.latencyTracking)/1e3;e={bandwidth:Math.round(1e3*s)/1e3,latency:Math.round(1e3*r)/1e3,downloadDuration:Math.round(1e3*n)/1e3,errors:t+(this.isBuffering?1:0),qualityVariantChanges:this.qualityVariantChanges}}else e={errors:t+(this.isBuffering?1:0)};this.errors=0,this.qualityVariantChanges=0,this.segmentDownloadTime=[],this.bandwidthTracking=[],this.latencyTracking=[];let i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};try{await fetch("/api/metrics/playback",i)}catch(e){console.error(e)}}constructor(e,t){var i=this;this.player=e,this.supportsDetailedMetrics=!1,this.hasPerformedInitialVariantChange=!1,this.clockSkewMs=0,this.segmentDownloadTime=[],this.bandwidthTracking=[],this.latencyTracking=[],this.errors=0,this.qualityVariantChanges=0,this.isBuffering=!1,this.bufferingDurationTimer=0,this.collectPlaybackMetricsTimer=0,this.videoJSReady=this.videoJSReady.bind(this),this.handlePlaying=this.handlePlaying.bind(this),this.handleBuffering=this.handleBuffering.bind(this),this.handleEnded=this.handleEnded.bind(this),this.handleError=this.handleError.bind(this),this.send=this.send.bind(this),this.collectPlaybackMetrics=this.collectPlaybackMetrics.bind(this),this.handleNoLongerBuffering=this.handleNoLongerBuffering.bind(this),this.sendMetricsTimer=0,this.player.on("canplaythrough",this.handleNoLongerBuffering),this.player.on("error",this.handleError),this.player.on("stalled",this.handleBuffering),this.player.on("waiting",this.handleBuffering),this.player.on("playing",this.handlePlaying),this.player.on("ended",this.handleEnded);let n=t.xhr;t.Vhs.xhr=function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];if(t[0].uri.match(".ts")){let e=new Date,n=t[1];t[1]=(t,s,r)=>{let a=new Date,l=a.getTime()-e.getTime();i.trackSegmentDownloadTime(l),n(t,s,r)}}return n(...t)},this.videoJSReady(),this.sendMetricsTimer=setInterval(()=>{this.send()},1e4)}},k=function(e,t,i,n){let s=t.getComponent("MenuItem"),r=t.getComponent("MenuItem"),a=t.getComponent("MenuButton"),l=new r(e,{selectable:!0});l.setAttribute("class","latency-toggle-item"),l.on("click",()=>{n()});let o=new class extends s{createEl(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"button",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=super.createEl(e,t,i);return n.innerHTML='<hr style="opacity: 0.3; margin-left: 10px; margin-right: 10px;" />',n}constructor(e,t){super(e,t)}}(e,{selectable:!1});class h extends a{createItems(){let t=e.tech({IWillNotUseThisInPlugins:!0}),n=new r(e,{selectable:!0,label:"Auto"}),s=i.map(i=>{let n=new r(e,{selectable:!0,label:i.name});return n.on("click",()=>{if(!t){console.warn("Invalid attempt to access null player tech");return}t.vhs.representations().forEach((e,t)=>{e.enabled(t===i.index)}),n.selected(!1)}),n});n.on("click",()=>{t.vhs.representations().forEach(e=>{e.enabled(!0)}),n.selected(!1)});let a=!!t&&!!t.vhs;return i.length<2&&a?[l]:i.length>1&&a?[n,...s,o,l]:a||1!==i.length?[n,...s]:[]}constructor(){super(e)}}let c=new h;c.el().setAttribute("aria-label","Settings");let u=e.tech({IWillNotUseThisInPlugins:!0});return c.addClass("vjs-quality-selector"),t.registerComponent("MenuButton",h),u.vhs&&i.length<2&&u&&u.vhs,c},w=class{setClockSkew(e){this.clockSkewMs=e}check(){if(new Date().getTime()-this.startupTime.getTime()<1e4||this.player.paused()||this.player.seeking()||this.inTimeout||!this.enabled)return;let e=this.player.tech({IWillNotUseThisInPlugins:!0});if(!e||!e.vhs)return;let t=this.player.networkState();if(2!==t)return;let i=0;try{if(0===e.vhs.stats.buffered.length){this.timeout();return}e.vhs.stats.buffered.forEach(e=>{i+=e.end-e.start})}catch(e){console.error(e)}let n=e.vhs.playlists.media(),s=n.attributes.BANDWIDTH,r=e.vhs.systemBandwidth,a=r/s;try{let t=function(e){let t;let i=e.vhs.playlists.media(),n=e.currentTime();for(let e=0,s=i.segments.length;e<s;e++)if(n<i.segments[e].end){t=i.segments[e];break}return t||([t]=i.segments),t}(e);if(!t)return;if(a<1.8&&i<6*t.duration){this.timeout();return}let n=Math.max(4e3,1e3*t.duration*1.8),s=this.bufferedAtLatency.concat([n]),r=s.reduce((e,t)=>e+t,0)/s.length,l=Math.max(1.4*r,Math.min(1e3*t.duration*2.6,15e3));r>=l&&(l=r+3e3);let o=t.dateTimeObject.getTime(),h=new Date().getTime()+this.clockSkewMs,c=h-o;if(this.currentLatency=c,Math.abs(c)>8e4){this.timeout();return}if(c>l){if(this.shouldJumpToLive()&&c>l+5e3){let i=c/1e3-3*t.duration,n=this.player.currentTime()+i;console.info("latency",c/1e3,"jumping",i,"to live from ",this.player.currentTime()," to ",n);let s=e.vhs.stats.buffered[0].end,r=e.vhs.stats.buffered[0].start;if(n>r<s){this.jump(n);return}}let i=.33*a;(i=Math.max(Math.min(i,1.08),1))>this.playbackRate+.02&&(i=this.playbackRate+.02),i=Math.round(1e3*i)/1e3,this.start(i)}else c<=r&&this.stop();console.info("latency",c/1e3,"min",r/1e3,"max",l/1e3,"playback rate",this.playbackRate,"enabled:",this.enabled,"running: ",this.running,"skew: ",this.clockSkewMs,"rebuffer events: ",this.bufferingCounter)}catch(e){}}shouldJumpToLive(){if(this.bufferingCounter>1)return!1;let e=new Date().getTime(),t=e-this.lastJumpOccurred;return t>2e4}jump(e){this.jumpingToLiveIgnoreBuffer=!0,this.performedInitialLiveJump=!0,this.lastJumpOccurred=new Date,console.info("current time",this.player.currentTime(),"seeking to",e),this.player.currentTime(e),setTimeout(()=>{this.jumpingToLiveIgnoreBuffer=!1},5e3)}setPlaybackRate(e){this.playbackRate=e,this.player.playbackRate(e)}start(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;!this.inTimeout&&this.enabled&&e!==this.playbackRate&&(this.running=!0,this.setPlaybackRate(e))}stop(){this.running&&console.log("stopping latency compensator..."),this.running=!1,this.setPlaybackRate(1)}enable(){this.enabled=!0,clearInterval(this.checkTimer),clearTimeout(this.bufferingTimer),this.checkTimer=setInterval(()=>{this.check()},3e3)}disable(){clearInterval(this.checkTimer),clearTimeout(this.timeoutTimer),this.stop(),this.enabled=!1}timeout(){this.jumpingToLiveIgnoreBuffer||(this.inTimeout=!0,this.stop(),clearTimeout(this.timeoutTimer),this.timeoutTimer=setTimeout(()=>{this.endTimeout()},3e4))}endTimeout(){clearTimeout(this.timeoutTimer),this.inTimeout=!1}handlePlaying(){let e=this.playing;this.playing=!0,clearTimeout(this.bufferingTimer),this.enabled&&this.shouldJumpToLive()&&(e||(this.jumpingToLiveIgnoreBuffer=!0,this.player.liveTracker.seekToLiveEdge(),this.lastJumpOccurred=new Date))}handlePause(){this.playing=!1}handleEnded(){this.enabled&&this.disable()}handleError(){this.enabled&&this.timeout()}countBufferingEvent(){if(this.bufferingCounter+=1,this.bufferingCounter>4){this.disable();return}this.bufferedAtLatency.push(this.currentLatency),console.log("latency compensation timeout due to buffering:",this.bufferingCounter,"buffering events of",4),setTimeout(()=>{this.bufferingCounter>0&&(this.bufferingCounter-=1)},18e4)}handleBuffering(){if(this.enabled&&!this.inTimeout){if(this.jumpingToLiveIgnoreBuffer){this.jumpingToLiveIgnoreBuffer=!1;return}this.timeout(),clearTimeout(this.bufferingTimer),this.bufferingTimer=setTimeout(()=>{this.countBufferingEvent()},200)}}constructor(e){this.player=e,this.playing=!1,this.enabled=!1,this.running=!1,this.inTimeout=!1,this.jumpingToLiveIgnoreBuffer=!1,this.timeoutTimer=0,this.checkTimer=0,this.bufferingCounter=0,this.bufferingTimer=0,this.playbackRate=1,this.lastJumpOccurred=null,this.startupTime=new Date,this.clockSkewMs=0,this.currentLatency=null,this.bufferedAtLatency=[],this.player.on("playing",this.handlePlaying.bind(this)),this.player.on("pause",this.handlePause.bind(this)),this.player.on("error",this.handleError.bind(this)),this.player.on("waiting",this.handleBuffering.bind(this)),this.player.on("stalled",this.handleBuffering.bind(this)),this.player.on("ended",this.handleEnded.bind(this)),this.player.on("canplaythrough",this.handlePlaying.bind(this)),this.player.on("canplay",this.handlePlaying.bind(this)),this.check=this.check.bind(this),this.start=this.start.bind(this),this.enable=this.enable.bind(this),this.countBufferingEvent=this.countBufferingEvent.bind(this)}},C=i(55101),I=i.n(C);class B{static async getVideoQualities(){let e=[];try{let t=await fetch(B.VIDEO_CONFIG_URL);e=await t.json(),console.log(e)}catch(e){console.error(e)}return e}}B.VIDEO_CONFIG_URL="/api/video/variants";let P=(0,s.createContext)(B),E="owncast_volume",j="latencyCompensatorEnabled",M=new class{start(){this.stop(),this.timer=setInterval(()=>{!function(){try{fetch("/api/ping")}catch(e){console.error(e)}}()},4e3)}stop(){clearInterval(this.timer)}},x=null,S=null,L=!1,D=e=>{let{source:t,online:i,initiallyMuted:l=!1,title:h,className:c}=e,u=(0,s.useContext)(P),m=s.useRef(null),[g,f]=(0,r.FV)(T.We),p=(0,r.sJ)(T.g8),C=()=>{try{m.current.volume((0,b.$o)(E)||1)}catch(e){console.warn(e)}},B=()=>{(0,b.qQ)(E,m.current.muted()?0:m.current.volume())},D=()=>{m.current.paused()?m.current.play():m.current.pause()},_=()=>{m.current.muted()||0===m.current.volume()?m.current.volume(.7):m.current.volume(0)},R=()=>{m.current.isFullscreen()?m.current.exitFullscreen():m.current.requestFullscreen()},N=e=>{let t=document.querySelector(".latency-toggle-item > .vjs-menu-item-text");t&&(t.innerHTML=e)},O=()=>{S&&S.stop(),L=!0,(S=new w(m.current)).setClockSkew(p),S.enable(),(0,b.qQ)(j,!0),N("disable minimized latency")},V=()=>{S&&S.disable(),S=null,L=!1,(0,b.qQ)(j,!1),N('<span style="font-size: 0.8em">enable minimized latency (experimental)</span>')},J=()=>{L?V():O()},q=e=>{let t=e.tech({IWillNotUseThisInPlugins:!0});if(!t||!t.vhs)return;let i=(0,b.$o)(j);"true"===i&&t&&t.vhs?O():V()},A=async(e,t)=>{let i=await u.getVideoQualities(),n=k(e,t,i,J);e.controlBar.addChild(n,{},e.controlBar.children_.length-2),q(e)},U=(e,t)=>{if(window.hasOwnProperty("WebKitPlaybackTargetAvailabilityEvent")){let i=t.getComponent("Button"),n=new class extends i{handleClick(){try{let e=document.getElementsByTagName("video")[0];e.webkitShowPlaybackTargetPicker()}catch(e){console.error(e)}}constructor(){super(e)}},s=e.controlBar.addChild(n);s.addClass("vjs-airplay")}};(0,a.y1)("space",e=>{e.preventDefault(),D()}),(0,a.y1)("f",R,{enableOnContentEditable:!1}),(0,a.y1)("m",_,{enableOnContentEditable:!1}),(0,a.y1)("0",()=>m.current.volume(m.current.volume()+.1),{enableOnContentEditable:!1}),(0,a.y1)("9",()=>m.current.volume(m.current.volume()-.1),{enableOnContentEditable:!1});let F=(e,t)=>{m.current=e,C(),U(e,t),e.on("waiting",()=>{console.debug("player is waiting")}),e.on("dispose",()=>{console.debug("player will dispose"),M.stop()}),e.on("playing",()=>{console.debug("player is playing"),M.start(),f(!0)}),e.on("pause",()=>{console.debug("player is paused"),M.stop(),f(!1)}),e.on("ended",()=>{console.debug("player is ended"),M.stop(),f(!1)}),t.hookOnce(),e.on("volumechange",B),(x=new v(e,t)).setClockSkew(p),A(e,t)};return(0,s.useEffect)(()=>{x&&x.setClockSkew(p)},[p]),(0,s.useEffect)(()=>()=>{V(),null==x||x.stop()},[]),(0,n.jsxs)("div",{className:o()(I().container,c),id:"player",children:[i&&(0,n.jsx)("div",{className:I().player,children:(0,n.jsx)(d,{options:{autoplay:!1,controls:!0,responsive:!0,fluid:!1,fill:!0,playsinline:!0,liveui:!0,preload:"auto",muted:l,controlBar:{progressControl:{seekBar:!1}},html5:{vhs:{enableLowInitialPlaylist:!0,experimentalBufferBasedABR:!0,useNetworkInformationApi:!0,maxPlaylistRetries:30}},liveTracker:{trackingThreshold:0,liveTolerance:15},sources:[{src:t,type:"application/x-mpegURL"}]},onReady:F,"aria-label":h})}),(0,n.jsx)("div",{className:I().poster,children:!g&&(0,n.jsx)(y,{online:i,initialSrc:"/thumbnail.jpg",src:"/thumbnail.jpg"})})]})};var _=D},55101:function(e){e.exports={container:"OwncastPlayer_container__YfgRy",player:"OwncastPlayer_player__R7XKJ",poster:"OwncastPlayer_poster__8RqUC"}},43497:function(e){e.exports={player:"VideoJS_player__GT8FN"}},24039:function(e){e.exports={poster:"VideoPoster_poster__RDkSk",image:"VideoPoster_image__DAj_o"}},25893:function(){}}]);