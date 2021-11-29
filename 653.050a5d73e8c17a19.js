"use strict";(self.webpackChunkxmas=self.webpackChunkxmas||[]).push([[653],{3083:(v,h,i)=>{i.d(h,{R:()=>y});var e=i(7867),c=i(5518);class f extends e.x{constructor(u=1/0,r=1/0,a=c.l){super(),this._bufferSize=u,this._windowTime=r,this._timestampProvider=a,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=r===1/0,this._bufferSize=Math.max(1,u),this._windowTime=Math.max(1,r)}next(u){const{isStopped:r,_buffer:a,_infiniteTimeWindow:o,_timestampProvider:s,_windowTime:t}=this;r||(a.push(u),!o&&a.push(s.now()+t)),this._trimBuffer(),super.next(u)}_subscribe(u){this._throwIfClosed(),this._trimBuffer();const r=this._innerSubscribe(u),{_infiniteTimeWindow:a,_buffer:o}=this,s=o.slice();for(let t=0;t<s.length&&!u.closed;t+=a?1:2)u.next(s[t]);return this._checkFinalizedStatuses(u),r}_trimBuffer(){const{_bufferSize:u,_timestampProvider:r,_buffer:a,_infiniteTimeWindow:o}=this,s=(o?1:2)*u;if(u<1/0&&s<a.length&&a.splice(0,a.length-s),!o){const t=r.now();let n=0;for(let l=1;l<a.length&&a[l]<=t;l+=2)n=l;n&&a.splice(0,n+1)}}}var d=i(7847),p=i(2844),g=i(3772),x=i(8576);let y=(()=>{class m{constructor(r){this.http=r,this.gifters$=this.getGifters()}getGifters(){return this.http.get("assets/family.json").pipe((0,p.U)(r=>this.createArray(r.carter.gifters)),function(m,u,r){let s,t=!1;return s=1,(0,d.B)({connector:()=>new f(s,u,r),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:t})}())}createArray(r){return Object.keys(r).map(a=>({from:a,fromInitials:a.split(" ").filter(o=>"&"!==o).map(o=>o.substr(0,1)).join("-").toLowerCase(),to:r[a]}))}}return m.\u0275fac=function(r){return new(r||m)(g.LFG(x.eN))},m.\u0275prov=g.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},6859:(v,h,i)=>{i.d(h,{T:()=>d});var e=i(8160),c=i(1499),f=i(3772);let d=(()=>{class b{}return b.\u0275fac=function(g){return new(g||b)},b.\u0275mod=f.oAB({type:b}),b.\u0275inj=f.cJS({imports:[[e.ez,c.Ps]]}),b})()},2315:(v,h,i)=>{i.d(h,{X:()=>f});var e=i(8160),c=i(3772);let f=(()=>{class d{constructor(p){this.document=p}get nativeWindow(){return this.document.defaultView}}return d.\u0275fac=function(p){return new(p||d)(c.LFG(e.K0))},d.\u0275prov=c.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},2050:(v,h,i)=>{i.d(h,{lW:()=>u,ot:()=>a});var e=i(3772),c=i(3975),f=i(2963),d=i(9668);const b=["mat-button",""],p=["*"],y=["mat-button","mat-flat-button","mat-icon-button","mat-raised-button","mat-stroked-button","mat-mini-fab","mat-fab"],m=(0,c.pj)((0,c.Id)((0,c.Kr)(class{constructor(o){this._elementRef=o}})));let u=(()=>{class o extends m{constructor(t,n,l){super(t),this._focusMonitor=n,this._animationMode=l,this.isRoundButton=this._hasHostAttributes("mat-fab","mat-mini-fab"),this.isIconButton=this._hasHostAttributes("mat-icon-button");for(const k of y)this._hasHostAttributes(k)&&this._getHostElement().classList.add(k);t.nativeElement.classList.add("mat-button-base"),this.isRoundButton&&(this.color="accent")}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}focus(t,n){t?this._focusMonitor.focusVia(this._getHostElement(),t,n):this._getHostElement().focus(n)}_getHostElement(){return this._elementRef.nativeElement}_isRippleDisabled(){return this.disableRipple||this.disabled}_hasHostAttributes(...t){return t.some(n=>this._getHostElement().hasAttribute(n))}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(e.SBq),e.Y36(f.tE),e.Y36(d.Qb,8))},o.\u0275cmp=e.Xpm({type:o,selectors:[["button","mat-button",""],["button","mat-raised-button",""],["button","mat-icon-button",""],["button","mat-fab",""],["button","mat-mini-fab",""],["button","mat-stroked-button",""],["button","mat-flat-button",""]],viewQuery:function(t,n){if(1&t&&e.Gf(c.wG,5),2&t){let l;e.iGM(l=e.CRH())&&(n.ripple=l.first)}},hostAttrs:[1,"mat-focus-indicator"],hostVars:5,hostBindings:function(t,n){2&t&&(e.uIk("disabled",n.disabled||null),e.ekj("_mat-animation-noopable","NoopAnimations"===n._animationMode)("mat-button-disabled",n.disabled))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color"},exportAs:["matButton"],features:[e.qOj],attrs:b,ngContentSelectors:p,decls:4,vars:5,consts:[[1,"mat-button-wrapper"],["matRipple","",1,"mat-button-ripple",3,"matRippleDisabled","matRippleCentered","matRippleTrigger"],[1,"mat-button-focus-overlay"]],template:function(t,n){1&t&&(e.F$t(),e.TgZ(0,"span",0),e.Hsn(1),e.qZA(),e._UZ(2,"span",1),e._UZ(3,"span",2)),2&t&&(e.xp6(2),e.ekj("mat-button-ripple-round",n.isRoundButton||n.isIconButton),e.Q6J("matRippleDisabled",n._isRippleDisabled())("matRippleCentered",n.isIconButton)("matRippleTrigger",n._getHostElement()))},directives:[c.wG],styles:[".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}\n"],encapsulation:2,changeDetection:0}),o})(),a=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[c.si,c.BQ],c.BQ]}),o})()}}]);