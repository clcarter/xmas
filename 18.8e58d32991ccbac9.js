"use strict";(self.webpackChunkxmas=self.webpackChunkxmas||[]).push([[18],{6018:(F,g,s)=>{s.r(g),s.d(g,{Y2020Module:()=>B});var c=s(8160),u=s(2050),m=s(1499),v=s(6859),r=s(1595),a=s(6415),p=s(4339),f=s(8208),d=s(2844),t=s(3772),x=s(2315);function h(o,e){if(1&o){const n=t.EpF();t.ynx(0),t.TgZ(1,"nav"),t._UZ(2,"img",1),t.TgZ(3,"button",2),t.NdJ("click",function(){return t.CHM(n),t.oxw().close()}),t.TgZ(4,"mat-icon"),t._uU(5,"close"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"h1"),t._uU(7),t.qZA(),t.TgZ(8,"p"),t._uU(9,"you have"),t.qZA(),t.TgZ(10,"h2"),t._uU(11),t.qZA(),t.BQk()}if(2&o){const n=e.ngIf;t.xp6(7),t.Oqu(n.from),t.xp6(4),t.Oqu(n.to)}}let C=(()=>{class o{constructor(n,i,l){this.router=n,this.activatedRoute=i,this.windowRef=l}ngOnInit(){this.gifter$=this.activatedRoute.paramMap.pipe((0,d.U)(()=>{var n;return null===(n=this.windowRef.nativeWindow)||void 0===n?void 0:n.history.state}))}close(){(0,f.H)(1).subscribe(()=>this.router.navigate(["2020"]))}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(r.F0),t.Y36(r.gz),t.Y36(x.X))},o.\u0275cmp=t.Xpm({type:o,selectors:[["xmas-to"]],hostVars:1,hostBindings:function(n,i){2&n&&t.d8E("@animate",i.closeAnimation)},decls:2,vars:3,consts:[[4,"ngIf"],["alt","Merry Christmas","src","/assets/images/m-xmas@0.25x.jpg","srcset","\n            /assets/images/m-xmas@0.25x.jpg 0.25x,\n            /assets/images/m-xmas@0.5x.jpg  0.5x,\n            /assets/images/m-xmas@0.75x.jpg 0.75x,\n            /assets/images/m-xmas.jpg       1x\n          "],["mat-icon-button","",3,"click"]],template:function(n,i){1&n&&(t.YNc(0,h,12,2,"ng-container",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,i.gifter$))},directives:[c.O5,u.lW,m.Hw],pipes:[c.Ov],styles:['xmas-to{display:flex;flex-flow:column;justify-content:flex-start;align-items:center;color:#d90000;background:#fff;width:100vw;height:75vh;margin-top:25vh;height:75%;border-top-left-radius:10px;border-top-right-radius:10px;box-shadow:0 -4px 7px #d90000cc;font-family:"rieven-uncial";position:relative;z-index:1}xmas-to img{max-width:100%;padding:0 40px;max-height:100px}xmas-to h1{font-size:2rem;margin-top:50px;text-align:center}xmas-to h2{font-size:3rem;text-align:center}xmas-to nav{width:100vw;height:100px;display:flex;justify-content:center}xmas-to button.mat-icon-button{position:absolute;right:0;top:0}\n'],encapsulation:2,data:{animation:[(0,a.X$)("animate",[(0,a.eR)(":leave",(0,a._7)(p.NS))])]},changeDetection:0}),o})();var y=s(3083);const T=["svgButton",""],Z=["*"];let Y=(()=>{class o{constructor(){this.svg=""}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["button","svgButton",""],["a","svgButton",""]],inputs:{svg:["svgButton","svg"]},attrs:T,ngContentSelectors:Z,decls:2,vars:1,consts:[[3,"svgIcon"]],template:function(n,i){1&n&&(t.F$t(),t._UZ(0,"mat-icon",0),t.Hsn(1)),2&n&&t.Q6J("svgIcon",i.svg)},directives:[m.Hw],styles:["[_nghost-%COMP%]{background:transparent;border:none;padding:0;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;text-decoration:none;outline:none}[_nghost-%COMP%]:last-of-type{margin-bottom:100px}[_nghost-%COMP%]   .mat-icon[_ngcontent-%COMP%]{min-width:200px;min-height:200px}"],changeDetection:0}),o})();function w(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"button",1),t.NdJ("click",function(){const O=t.CHM(n).$implicit;return t.oxw().navigate(O)}),t.TgZ(1,"span",2),t._uU(2),t.qZA(),t.qZA()}if(2&o){const n=e.$implicit;t.Q6J("svgButton","ornaments:0"+(e.index+1))("@navigate",n.leave),t.xp6(2),t.Oqu(n.from)}}const b=[{path:"",component:(()=>{class o{constructor(n,i){this.giftService=n,this.router=i}ngOnInit(){this.gifters$=this.giftService.gifters$}navigate(n){n.leave=!0,(0,f.H)(700).subscribe(()=>this.router.navigate(["/","2020",{outlets:{gifter:["from",n.from]}}],{state:n}))}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(y.R),t.Y36(r.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["xmas-y2020"]],decls:3,vars:3,consts:[[3,"svgButton","click",4,"ngFor","ngForOf"],[3,"svgButton","click"],[1,"gifters"]],template:function(n,i){1&n&&(t.TgZ(0,"section"),t.YNc(1,w,3,3,"button",0),t.ALo(2,"async"),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,1,i.gifters$)))},directives:[c.sg,Y],pipes:[c.Ov],styles:['section[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;flex-wrap:wrap;padding:0 51px;height:calc(100vh - 100px);overflow-y:scroll;z-index:2;position:relative;-ms-overflow-style:none;scrollbar-width:none}section[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}section[_ngcontent-%COMP%]   .gifters[_ngcontent-%COMP%]{color:#fff;font-size:1.75rem;font-weight:700;font-family:"rieven-uncial";text-align:center;margin:21px;transition:3s cubic-bezier(.175,.885,.32,1.275) all;z-index:20;position:relative}'],data:{animation:[(0,a.X$)("navigate",[(0,a.eR)("* <=> *",(0,a._7)(p.T$))])]},changeDetection:0}),o})()},{path:"from/:from",component:C,data:{animation:"ToPage",titleFragment:" | 2020 | From"},outlet:"gifter"}];let M=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[r.Bz.forChild(b)],r.Bz]}),o})(),B=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.ez,M,m.Ps,u.ot,v.T]]}),o})()}}]);