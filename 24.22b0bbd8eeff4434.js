"use strict";(self.webpackChunkvelzon=self.webpackChunkvelzon||[]).push([[24],{14024:(x,l,s)=>{s.r(l),s.d(l,{LockscreenModule:()=>y});var m=s(60177),c=s(22960),r=s(89417),d=s(51188),t=s(54438);const u=e=>({"is-invalid":e});function p(e,a){1&e&&(t.j41(0,"div"),t.EFF(1,"Password is required"),t.k0s())}function v(e,a){if(1&e&&(t.j41(0,"div",29),t.DNE(1,p,2,0,"div"),t.k0s()),2&e){const o=t.XpG();t.R7$(),t.vxM(o.f.password.errors.required?1:-1)}}const f=e=>({"is-invalid":e});function g(e,a){1&e&&(t.j41(0,"div",38)(1,"div",39)(2,"p",40),t.EFF(3,'" Great! Clean code, clean design, easy for customization. Thanks very much! "'),t.k0s()()())}function b(e,a){1&e&&(t.j41(0,"div",38)(1,"div",39)(2,"p",40),t.EFF(3,'" The theme is really great with an amazing customer support."'),t.k0s()()())}function F(e,a){1&e&&(t.j41(0,"div",38)(1,"div",39)(2,"p",40),t.EFF(3,'" Great! Clean code, clean design, easy for customization. Thanks very much! "'),t.k0s()()())}function k(e,a){1&e&&(t.j41(0,"div"),t.EFF(1,"Password is required"),t.k0s())}function w(e,a){if(1&e&&(t.j41(0,"div",29),t.DNE(1,k,2,0,"div"),t.k0s()),2&e){const o=t.XpG();t.R7$(),t.vxM(o.f.password.errors.required?1:-1)}}const j=[{path:"basic",component:(()=>{class e{constructor(o){this.formBuilder=o,this.submitted=!1,this.error="",this.year=(new Date).getFullYear()}ngOnInit(){this.lockscreenForm=this.formBuilder.group({password:["",[r.k0.required]]})}get f(){return this.lockscreenForm.controls}onSubmit(){this.submitted=!0}static{this.\u0275fac=function(n){return new(n||e)(t.rXU(r.ze))}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-basic"]],decls:53,vars:6,consts:[[1,"auth-page-wrapper","pt-5"],["id","auth-particles",1,"auth-one-bg-position","auth-one-bg"],[1,"bg-overlay"],[1,"shape"],["xmlns","http://www.w3.org/2000/svg","version","1.1",0,"xmlns","xlink","http://www.w3.org/1999/xlink","viewBox","0 0 1440 120"],["d","M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"],[1,"auth-page-content"],[1,"container"],[1,"row"],[1,"col-lg-12"],[1,"text-center","mt-sm-5","mb-4","text-white-50"],["routerLink","",1,"d-inline-block","auth-logo"],["src","assets/images/logo-light.png","alt","","height","20"],[1,"mt-3","fs-15","fw-medium"],[1,"row","justify-content-center"],[1,"col-md-8","col-lg-6","col-xl-5"],[1,"card","mt-4"],[1,"card-body","p-4"],[1,"text-center","mt-2"],[1,"text-primary"],[1,"text-muted"],[1,"user-thumb","text-center"],["src","assets/images/users/avatar-1.jpg","alt","thumbnail",1,"rounded-circle","img-thumbnail","avatar-lg"],[1,"font-size-15","mt-3"],[1,"p-2","mt-4"],[3,"ngSubmit","formGroup"],[1,"mb-3"],["for","userpassword",1,"form-label"],["type","password","id","userpassword","placeholder","Enter password","required","","formControlName","password",1,"form-control",3,"ngClass"],["align","left",1,"invalid-feedback"],[1,"mb-2","mt-4"],["type","submit",1,"btn","btn-success","w-100"],[1,"mt-4","text-center"],[1,"mb-0"],["routerLink","/auth/signin/basic",1,"fw-semibold","text-primary","text-decoration-underline"],[1,"footer"],[1,"text-center"],[1,"mb-0","text-muted"],[1,"mdi","mdi-heart","text-danger"]],template:function(n,i){1&n&&(t.j41(0,"div",0)(1,"div",1),t.nrm(2,"div",2),t.j41(3,"div",3),t.qSk(),t.j41(4,"svg",4),t.nrm(5,"path",5),t.k0s()()(),t.joV(),t.j41(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9)(10,"div",10)(11,"div")(12,"a",11),t.nrm(13,"img",12),t.k0s()(),t.j41(14,"p",13),t.EFF(15,"Premium Admin & Dashboard Template"),t.k0s()()()(),t.j41(16,"div",14)(17,"div",15)(18,"div",16)(19,"div",17)(20,"div",18)(21,"h5",19),t.EFF(22,"Lock Screen"),t.k0s(),t.j41(23,"p",20),t.EFF(24,"Enter your password to unlock the screen!"),t.k0s()(),t.j41(25,"div",21),t.nrm(26,"img",22),t.j41(27,"h5",23),t.EFF(28,"Anna Adame"),t.k0s()(),t.j41(29,"div",24)(30,"form",25),t.bIt("ngSubmit",function(){return i.onSubmit()}),t.j41(31,"div",26)(32,"label",27),t.EFF(33,"Password"),t.k0s(),t.nrm(34,"input",28),t.DNE(35,v,2,1,"div",29),t.k0s(),t.j41(36,"div",30)(37,"button",31),t.EFF(38,"Unlock"),t.k0s()()()()()(),t.j41(39,"div",32)(40,"p",33),t.EFF(41,"Not you ? return "),t.j41(42,"a",34),t.EFF(43," Signin "),t.k0s()()()()()()(),t.j41(44,"footer",35)(45,"div",7)(46,"div",8)(47,"div",9)(48,"div",36)(49,"p",37),t.EFF(50),t.nrm(51,"i",38),t.EFF(52," by Themesbrand"),t.k0s()()()()()()()),2&n&&(t.R7$(30),t.Y8G("formGroup",i.lockscreenForm),t.R7$(4),t.Y8G("ngClass",t.eq3(4,u,i.submitted&&i.f.password.errors)),t.R7$(),t.vxM(i.submitted&&i.f.password.errors?35:-1),t.R7$(15),t.SpI("\xa9 ",i.year," Velzon. Crafted with "))},dependencies:[m.YU,r.qT,r.me,r.BC,r.cb,r.YS,r.j4,r.JD,d.Wk]})}}return e})()},{path:"cover",component:(()=>{class e{constructor(o){this.formBuilder=o,this.submitted=!1,this.error="",this.year=(new Date).getFullYear()}ngOnInit(){this.lockscreenForm=this.formBuilder.group({password:["",[r.k0.required]]})}get f(){return this.lockscreenForm.controls}onSubmit(){this.submitted=!0}static{this.\u0275fac=function(n){return new(n||e)(t.rXU(r.ze))}}static{this.\u0275cmp=t.VBU({type:e,selectors:[["app-cover"]],decls:57,vars:7,consts:[[1,"auth-page-wrapper","auth-bg-cover","py-5","d-flex","justify-content-center","align-items-center","min-vh-100"],[1,"bg-overlay"],[1,"auth-page-content","overflow-hidden","pt-lg-5"],[1,"container"],[1,"row"],[1,"col-lg-12"],[1,"card","overflow-hidden"],[1,"row","justify-content-center","g-0"],[1,"col-lg-6"],[1,"p-lg-5","p-4","auth-one-bg","h-100"],[1,"position-relative","h-100","d-flex","flex-column"],[1,"mb-4"],["routerLink","",1,"d-block"],["src","assets/images/logo-light.png","alt","","height","18"],[1,"mt-auto"],[1,"mb-3"],[1,"ri-double-quotes-l","display-4","text-success"],[3,"showNavigationArrows"],["ngbSlide",""],[1,"p-lg-5","p-4"],[1,"text-primary"],[1,"text-muted"],[1,"user-thumb","text-center"],["src","assets/images/users/avatar-1.jpg","alt","thumbnail",1,"rounded-circle","img-thumbnail","avatar-lg"],[1,"font-size-15","mt-3"],[1,"mt-4"],[3,"ngSubmit","formGroup"],["for","userpassword",1,"form-label"],["type","password","id","userpassword","placeholder","Enter password","required","","formControlName","password",1,"form-control",3,"ngClass"],["align","left",1,"invalid-feedback"],[1,"mb-2","mt-4"],["type","submit",1,"btn","btn-success","w-100"],[1,"mt-5","text-center"],[1,"mb-0"],["routerLink","/auth/signin/cover",1,"fw-semibold","text-primary","text-decoration-underline"],[1,"footer"],[1,"text-center"],[1,"mdi","mdi-heart","text-danger"],[1,"carousel-inner","text-center","text-white-50","pb-5"],[1,"carousel-item","active"],[1,"fs-15","fst-italic"]],template:function(n,i){1&n&&(t.j41(0,"div",0),t.nrm(1,"div",1),t.j41(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9),t.nrm(10,"div",1),t.j41(11,"div",10)(12,"div",11)(13,"a",12),t.nrm(14,"img",13),t.k0s()(),t.j41(15,"div",14)(16,"div",15),t.nrm(17,"i",16),t.k0s(),t.j41(18,"ngb-carousel",17),t.DNE(19,g,4,0,"ng-template",18)(20,b,4,0,"ng-template",18)(21,F,4,0,"ng-template",18),t.k0s()()()()(),t.j41(22,"div",8)(23,"div",19)(24,"div")(25,"h5",20),t.EFF(26,"Lock Screen"),t.k0s(),t.j41(27,"p",21),t.EFF(28,"Enter your password to unlock the screen!"),t.k0s()(),t.j41(29,"div",22),t.nrm(30,"img",23),t.j41(31,"h5",24),t.EFF(32,"Anna Adame"),t.k0s()(),t.j41(33,"div",25)(34,"form",26),t.bIt("ngSubmit",function(){return i.onSubmit()}),t.j41(35,"div",15)(36,"label",27),t.EFF(37,"Password"),t.k0s(),t.nrm(38,"input",28),t.DNE(39,w,2,1,"div",29),t.k0s(),t.j41(40,"div",30)(41,"button",31),t.EFF(42,"Unlock"),t.k0s()()()(),t.j41(43,"div",32)(44,"p",33),t.EFF(45,"Not you ? return "),t.j41(46,"a",34),t.EFF(47," Signin"),t.k0s()()()()()()()()()()(),t.j41(48,"footer",35)(49,"div",3)(50,"div",4)(51,"div",5)(52,"div",36)(53,"p",33),t.EFF(54),t.nrm(55,"i",37),t.EFF(56," by Themesbrand"),t.k0s()()()()()()()),2&n&&(t.R7$(18),t.Y8G("showNavigationArrows",i.showNavigationArrows),t.R7$(16),t.Y8G("formGroup",i.lockscreenForm),t.R7$(4),t.Y8G("ngClass",t.eq3(5,f,i.submitted&&i.f.password.errors)),t.R7$(),t.vxM(i.submitted&&i.f.password.errors?39:-1),t.R7$(15),t.SpI("\xa9 ",i.year," Velzon. Crafted with "))},dependencies:[m.YU,c.Oj,c.bD,r.qT,r.me,r.BC,r.cb,r.YS,r.j4,r.JD,d.Wk]})}}return e})()}];let C=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=t.$C({type:e})}static{this.\u0275inj=t.G2t({imports:[d.iI.forChild(j),d.iI]})}}return e})(),y=(()=>{class e{static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=t.$C({type:e})}static{this.\u0275inj=t.G2t({imports:[m.MD,c.wA,r.X1,r.YN,C]})}}return e})()}}]);