"use strict";(self.webpackChunkvelzon=self.webpackChunkvelzon||[]).push([[579],{94579:(Y,b,p)=>{p.r(b),p.d(b,{PassCreateModule:()=>A});var c=p(60177),u=p(22960),o=p(89417),m=p(51188),e=p(54438);const F=t=>({"is-invalid":t}),w=(t,a)=>({"mdi-eye-off-outline":t,"mdi-eye-outline":a});function k(t,a){1&t&&(e.j41(0,"span"),e.EFF(1,"Password is required"),e.k0s())}function C(t,a){if(1&t&&(e.j41(0,"div",29),e.DNE(1,k,2,0,"span"),e.k0s()),2&t){const i=e.XpG();e.R7$(),e.vxM(i.f.password.errors.required?1:-1)}}function y(t,a){1&t&&(e.j41(0,"span"),e.EFF(1,"Confirm Password is required"),e.k0s())}function j(t,a){if(1&t&&(e.j41(0,"div",29),e.DNE(1,y,2,0,"span"),e.k0s()),2&t){const i=e.XpG();e.R7$(),e.vxM(i.f.cpassword.errors.required?1:-1)}}const g=t=>({"is-invalid":t}),h=(t,a)=>({"mdi-eye-off-outline":t,"mdi-eye-outline":a});function _(t,a){1&t&&(e.j41(0,"div",52)(1,"div",53)(2,"p",54),e.EFF(3,'" Great! Clean code, clean design, easy for customization. Thanks very much! "'),e.k0s()()())}function L(t,a){1&t&&(e.j41(0,"div",52)(1,"div",53)(2,"p",54),e.EFF(3,'" The theme is really great with an amazing customer support."'),e.k0s()()())}function I(t,a){1&t&&(e.j41(0,"div",52)(1,"div",53)(2,"p",54),e.EFF(3,'" Great! Clean code, clean design, easy for customization. Thanks very much! "'),e.k0s()()())}function B(t,a){1&t&&(e.j41(0,"span"),e.EFF(1,"Password is required"),e.k0s())}function x(t,a){if(1&t&&(e.j41(0,"div",29),e.DNE(1,B,2,0,"span"),e.k0s()),2&t){const i=e.XpG();e.R7$(),e.vxM(i.f.password.errors.required?1:-1)}}function R(t,a){1&t&&(e.j41(0,"span"),e.EFF(1,"Confirm Password is required"),e.k0s())}function T(t,a){if(1&t&&(e.j41(0,"div",29),e.DNE(1,R,2,0,"span"),e.k0s()),2&t){const i=e.XpG();e.R7$(),e.vxM(i.f.cpassword.errors.required?1:-1)}}const G=[{path:"basic",component:(()=>{class t{constructor(i){this.formBuilder=i,this.submitted=!1,this.error="",this.year=(new Date).getFullYear()}ngOnInit(){this.passresetForm=this.formBuilder.group({password:["",[o.k0.required]],cpassword:["",[o.k0.required]]});var i=document.getElementById("password-input"),r=document.getElementById("pass-lower"),s=document.getElementById("pass-upper"),n=document.getElementById("pass-number"),l=document.getElementById("pass-length");i.onfocus=function(){document.getElementById("password-contain").style.display="block"},i.onblur=function(){document.getElementById("password-contain").style.display="none"},i.onkeyup=function(){i.value.match(/[a-z]/g)?(r?.classList.remove("invalid"),r?.classList.add("valid")):(r?.classList.remove("valid"),r?.classList.add("invalid")),i.value.match(/[A-Z]/g)?(s?.classList.remove("invalid"),s?.classList.add("valid")):(s?.classList.remove("valid"),s?.classList.add("invalid")),i.value.match(/[0-9]/g)?(n?.classList.remove("invalid"),n?.classList.add("valid")):(n?.classList.remove("valid"),n?.classList.add("invalid")),i.value.length>=8?(l?.classList.remove("invalid"),l?.classList.add("valid")):(l?.classList.remove("valid"),l?.classList.add("invalid"))}}get f(){return this.passresetForm.controls}onSubmit(){this.submitted=!0}togglepasswordField(){this.passwordField=!this.passwordField}toggleconfirmField(){this.confirmField=!this.confirmField}static{this.\u0275fac=function(r){return new(r||t)(e.rXU(o.ze))}}static{this.\u0275cmp=e.VBU({type:t,selectors:[["app-basic"]],decls:88,vars:20,consts:[[1,"auth-page-wrapper","pt-5"],["id","auth-particles",1,"auth-one-bg-position","auth-one-bg"],[1,"bg-overlay"],[1,"shape"],["xmlns","http://www.w3.org/2000/svg","version","1.1",0,"xmlns","xlink","http://www.w3.org/1999/xlink","viewBox","0 0 1440 120"],["d","M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"],[1,"auth-page-content"],[1,"container"],[1,"row"],[1,"col-lg-12"],[1,"text-center","mt-sm-5","mb-4","text-white-50"],["routerLink","/",1,"d-inline-block","auth-logo"],["src","assets/images/logo-light.png","alt","","height","20"],[1,"mt-3","fs-15","fw-medium"],[1,"row","justify-content-center"],[1,"col-md-8","col-lg-6","col-xl-5"],[1,"card","mt-4"],[1,"card-body","p-4"],[1,"text-center","mt-2"],[1,"text-primary"],[1,"text-muted"],[1,"p-2"],[3,"ngSubmit","formGroup"],[1,"mb-3"],["for","password-input",1,"form-label"],[1,"position-relative","auth-pass-inputgroup"],["placeholder","Enter password","id","password-input","aria-describedby","passwordInput","pattern","(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}","required","","formControlName","password",1,"form-control","pe-5","password-input",3,"type","ngClass"],["type","button","id","password-addon",1,"btn","btn-link","position-absolute","end-0","top-0","text-decoration-none","text-muted","password-addon"],[1,"ri-eye-fill","align-middle",3,"click","ngClass"],[1,"invalid-feedback"],["id","passwordInput",1,"form-text"],["for","confirm-password-input",1,"form-label"],[1,"position-relative","auth-pass-inputgroup","mb-3"],["placeholder","Confirm password","pattern","(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}","id","confirm-password-input","required","","formControlName","cpassword",1,"form-control","pe-5","password-input",3,"type","ngClass"],["type","button","id","confirm-password-input",1,"btn","btn-link","position-absolute","end-0","top-0","text-decoration-none","text-muted","password-addon"],["id","password-contain",1,"p-3","bg-light","mb-2","rounded"],[1,"fs-13"],["id","pass-length",1,"invalid","fs-12","mb-2"],["id","pass-lower",1,"invalid","fs-12","mb-2"],["id","pass-upper",1,"invalid","fs-12","mb-2"],["id","pass-number",1,"invalid","fs-12","mb-0"],[1,"form-check"],["type","checkbox","value","","id","auth-remember-check",1,"form-check-input"],["for","auth-remember-check",1,"form-check-label"],[1,"mt-4"],["type","submit",1,"btn","btn-success","w-100"],[1,"mt-4","text-center"],[1,"mb-0"],["routerLink","/auth/signin/basic",1,"fw-semibold","text-primary","text-decoration-underline"],[1,"footer"],[1,"text-center"],[1,"mb-0","text-muted"],[1,"mdi","mdi-heart","text-danger"]],template:function(r,s){1&r&&(e.j41(0,"div",0)(1,"div",1),e.nrm(2,"div",2),e.j41(3,"div",3),e.qSk(),e.j41(4,"svg",4),e.nrm(5,"path",5),e.k0s()()(),e.joV(),e.j41(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9)(10,"div",10)(11,"div")(12,"a",11),e.nrm(13,"img",12),e.k0s()(),e.j41(14,"p",13),e.EFF(15,"Premium Admin & Dashboard Template"),e.k0s()()()(),e.j41(16,"div",14)(17,"div",15)(18,"div",16)(19,"div",17)(20,"div",18)(21,"h5",19),e.EFF(22,"Create new password"),e.k0s(),e.j41(23,"p",20),e.EFF(24,"Your new password must be different from previous used password. "),e.k0s()(),e.j41(25,"div",21)(26,"form",22),e.bIt("ngSubmit",function(){return s.onSubmit()}),e.j41(27,"div",23)(28,"label",24),e.EFF(29,"Password"),e.k0s(),e.j41(30,"div",25),e.nrm(31,"input",26),e.j41(32,"button",27)(33,"i",28),e.bIt("click",function(){return s.togglepasswordField()}),e.k0s()(),e.DNE(34,C,2,1,"div",29),e.k0s(),e.j41(35,"div",30),e.EFF(36,"Must be at least 8 characters."),e.k0s()(),e.j41(37,"div",23)(38,"label",31),e.EFF(39,"Confirm Password"),e.k0s(),e.j41(40,"div",32),e.nrm(41,"input",33),e.j41(42,"button",34)(43,"i",28),e.bIt("click",function(){return s.toggleconfirmField()}),e.k0s()(),e.DNE(44,j,2,1,"div",29),e.k0s()(),e.j41(45,"div",35)(46,"h5",36),e.EFF(47,"Password must contain:"),e.k0s(),e.j41(48,"p",37),e.EFF(49,"Minimum "),e.j41(50,"b"),e.EFF(51,"8 characters"),e.k0s()(),e.j41(52,"p",38),e.EFF(53,"At "),e.j41(54,"b"),e.EFF(55,"lowercase"),e.k0s(),e.EFF(56," letter (a-z) "),e.k0s(),e.j41(57,"p",39),e.EFF(58,"At least "),e.j41(59,"b"),e.EFF(60,"uppercase"),e.k0s(),e.EFF(61," letter (A-Z)"),e.k0s(),e.j41(62,"p",40),e.EFF(63,"A least "),e.j41(64,"b"),e.EFF(65,"number"),e.k0s(),e.EFF(66," (0-9)"),e.k0s()(),e.j41(67,"div",41),e.nrm(68,"input",42),e.j41(69,"label",43),e.EFF(70,"Remember me"),e.k0s()(),e.j41(71,"div",44)(72,"button",45),e.EFF(73,"Reset Password"),e.k0s()()()()()(),e.j41(74,"div",46)(75,"p",47),e.EFF(76,"Wait, I remember my password... "),e.j41(77,"a",48),e.EFF(78," Click here "),e.k0s()()()()()()(),e.j41(79,"footer",49)(80,"div",7)(81,"div",8)(82,"div",9)(83,"div",50)(84,"p",51),e.EFF(85),e.nrm(86,"i",52),e.EFF(87," by Themesbrand"),e.k0s()()()()()()()),2&r&&(e.R7$(26),e.Y8G("formGroup",s.passresetForm),e.R7$(5),e.Y8G("type",s.passwordField?"text":"password")("ngClass",e.eq3(10,F,s.submitted&&s.f.password.errors)),e.R7$(2),e.Y8G("ngClass",e.l_i(12,w,!s.passwordField,s.passwordField)),e.R7$(),e.vxM(s.submitted&&s.f.password.errors?34:-1),e.R7$(7),e.Y8G("type",s.confirmField?"text":"password")("ngClass",e.eq3(15,F,s.submitted&&s.f.cpassword.errors)),e.R7$(2),e.Y8G("ngClass",e.l_i(17,w,!s.passwordField,s.passwordField)),e.R7$(),e.vxM(s.submitted&&s.f.cpassword.errors?44:-1),e.R7$(41),e.SpI("\xa9 ",s.year," Velzon. Crafted with "))},dependencies:[c.YU,o.qT,o.me,o.BC,o.cb,o.YS,o.R_,o.j4,o.JD,m.Wk]})}}return t})()},{path:"cover",component:(()=>{class t{constructor(i){this.formBuilder=i,this.submitted=!1,this.error="",this.year=(new Date).getFullYear()}ngOnInit(){this.loginForm=this.formBuilder.group({password:["",[o.k0.required]],cpassword:["",o.k0.required]});var i=document.getElementById("password-input"),r=document.getElementById("pass-lower"),s=document.getElementById("pass-upper"),n=document.getElementById("pass-number"),l=document.getElementById("pass-length");i.onfocus=function(){document.getElementById("password-contain").style.display="block"},i.onblur=function(){document.getElementById("password-contain").style.display="none"},i.onkeyup=function(){i.value.match(/[a-z]/g)?(r?.classList.remove("invalid"),r?.classList.add("valid")):(r?.classList.remove("valid"),r?.classList.add("invalid")),i.value.match(/[A-Z]/g)?(s?.classList.remove("invalid"),s?.classList.add("valid")):(s?.classList.remove("valid"),s?.classList.add("invalid")),i.value.match(/[0-9]/g)?(n?.classList.remove("invalid"),n?.classList.add("valid")):(n?.classList.remove("valid"),n?.classList.add("invalid")),i.value.length>=8?(l?.classList.remove("invalid"),l?.classList.add("valid")):(l?.classList.remove("valid"),l?.classList.add("invalid"))}}get f(){return this.loginForm.controls}onSubmit(){this.submitted=!0}togglepasswordField(){this.passwordField=!this.passwordField}toggleconfirmField(){this.confirmField=!this.confirmField}static{this.\u0275fac=function(r){return new(r||t)(e.rXU(o.ze))}}static{this.\u0275cmp=e.VBU({type:t,selectors:[["app-cover"]],decls:91,vars:21,consts:[[1,"auth-page-wrapper","auth-bg-cover","py-5","d-flex","justify-content-center","align-items-center","min-vh-100"],[1,"bg-overlay"],[1,"auth-page-content","overflow-hidden","pt-lg-5"],[1,"container"],[1,"row"],[1,"col-lg-12"],[1,"card","overflow-hidden"],[1,"row","g-0"],[1,"col-lg-6"],[1,"p-lg-5","p-4","auth-one-bg","h-100"],[1,"position-relative","h-100","d-flex","flex-column"],[1,"mb-4"],["routerLink","",1,"d-block"],["src","assets/images/logo-light.png","alt","","height","18"],[1,"mt-auto"],[1,"mb-3"],[1,"ri-double-quotes-l","display-4","text-success"],[3,"showNavigationArrows"],["ngbSlide",""],[1,"p-lg-5","p-4"],[1,"text-primary"],[1,"text-muted"],[1,"p-2"],[3,"ngSubmit","formGroup"],["for","password-input",1,"form-label"],[1,"position-relative","auth-pass-inputgroup"],["placeholder","Enter password","id","password-input","aria-describedby","passwordInput","pattern","(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}","required","","formControlName","password",1,"form-control","pe-5","password-input",3,"type","ngClass"],["type","button","id","password-addon",1,"btn","btn-link","position-absolute","end-0","top-0","text-decoration-none","text-muted","password-addon"],[1,"ri-eye-fill","align-middle",3,"click","ngClass"],[1,"invalid-feedback"],["id","passwordInput",1,"form-text"],["for","confirm-password-input",1,"form-label"],[1,"position-relative","auth-pass-inputgroup","mb-3"],["placeholder","Confirm password","pattern","(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}","id","confirm-password-input","required","","formControlName","cpassword",1,"form-control","pe-5","password-input",3,"type","ngClass"],["type","button","id","confirm-password-input",1,"btn","btn-link","position-absolute","end-0","top-0","text-decoration-none","text-muted","password-addon"],["id","password-contain",1,"p-3","bg-light","mb-2","rounded"],[1,"fs-13"],["id","pass-length",1,"invalid","fs-12","mb-2"],["id","pass-lower",1,"invalid","fs-12","mb-2"],["id","pass-upper",1,"invalid","fs-12","mb-2"],["id","pass-number",1,"invalid","fs-12","mb-0"],[1,"form-check"],["type","checkbox","value","","id","auth-remember-check",1,"form-check-input"],["for","auth-remember-check",1,"form-check-label"],[1,"mt-4"],["type","submit",1,"btn","btn-success","w-100"],[1,"mt-5","text-center"],[1,"mb-0"],["routerLink","/auth/signin/cover",1,"fw-semibold","text-primary","text-decoration-underline"],[1,"footer"],[1,"text-center"],[1,"mdi","mdi-heart","text-danger"],[1,"carousel-inner","text-center","text-white-50","pb-5"],[1,"carousel-item","active"],[1,"fs-15","fst-italic"]],template:function(r,s){1&r&&(e.j41(0,"div",0),e.nrm(1,"div",1),e.j41(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9),e.nrm(10,"div",1),e.j41(11,"div",10)(12,"div",11)(13,"a",12),e.nrm(14,"img",13),e.k0s()(),e.j41(15,"div",14)(16,"div",15),e.nrm(17,"i",16),e.k0s(),e.j41(18,"ngb-carousel",17),e.DNE(19,_,4,0,"ng-template",18)(20,L,4,0,"ng-template",18)(21,I,4,0,"ng-template",18),e.k0s()()()()(),e.j41(22,"div",8)(23,"div",19)(24,"h5",20),e.EFF(25,"Create new password"),e.k0s(),e.j41(26,"p",21),e.EFF(27,"Your new password must be different from previous used password."),e.k0s(),e.j41(28,"div",22)(29,"form",23),e.bIt("ngSubmit",function(){return s.onSubmit()}),e.j41(30,"div",15)(31,"label",24),e.EFF(32,"Password"),e.k0s(),e.j41(33,"div",25),e.nrm(34,"input",26),e.j41(35,"button",27)(36,"i",28),e.bIt("click",function(){return s.togglepasswordField()}),e.k0s()(),e.DNE(37,x,2,1,"div",29),e.k0s(),e.j41(38,"div",30),e.EFF(39,"Must be at least 8 characters."),e.k0s()(),e.j41(40,"div",15)(41,"label",31),e.EFF(42,"Confirm Password"),e.k0s(),e.j41(43,"div",32),e.nrm(44,"input",33),e.j41(45,"button",34)(46,"i",28),e.bIt("click",function(){return s.toggleconfirmField()}),e.k0s()(),e.DNE(47,T,2,1,"div",29),e.k0s()(),e.j41(48,"div",35)(49,"h5",36),e.EFF(50,"Password must contain:"),e.k0s(),e.j41(51,"p",37),e.EFF(52,"Minimum "),e.j41(53,"b"),e.EFF(54,"8 characters"),e.k0s()(),e.j41(55,"p",38),e.EFF(56,"At "),e.j41(57,"b"),e.EFF(58,"lowercase"),e.k0s(),e.EFF(59," letter (a-z)"),e.k0s(),e.j41(60,"p",39),e.EFF(61,"At least "),e.j41(62,"b"),e.EFF(63,"uppercase"),e.k0s(),e.EFF(64," letter (A-Z)"),e.k0s(),e.j41(65,"p",40),e.EFF(66,"A least "),e.j41(67,"b"),e.EFF(68,"number"),e.k0s(),e.EFF(69," (0-9)"),e.k0s()(),e.j41(70,"div",41),e.nrm(71,"input",42),e.j41(72,"label",43),e.EFF(73,"Remember me"),e.k0s()(),e.j41(74,"div",44)(75,"button",45),e.EFF(76,"Reset Password"),e.k0s()()()(),e.j41(77,"div",46)(78,"p",47),e.EFF(79,"Wait, I remember my password... "),e.j41(80,"a",48),e.EFF(81," Click here "),e.k0s()()()()()()()()()()(),e.j41(82,"footer",49)(83,"div",3)(84,"div",4)(85,"div",5)(86,"div",50)(87,"p",47),e.EFF(88),e.nrm(89,"i",51),e.EFF(90," by Themesbrand"),e.k0s()()()()()()()),2&r&&(e.R7$(18),e.Y8G("showNavigationArrows",s.showNavigationArrows),e.R7$(11),e.Y8G("formGroup",s.loginForm),e.R7$(5),e.Y8G("type",s.passwordField?"text":"password")("ngClass",e.eq3(11,g,s.submitted&&s.f.password.errors)),e.R7$(2),e.Y8G("ngClass",e.l_i(13,h,!s.passwordField,s.passwordField)),e.R7$(),e.vxM(s.submitted&&s.f.password.errors?37:-1),e.R7$(7),e.Y8G("type",s.confirmField?"text":"password")("ngClass",e.eq3(16,g,s.submitted&&s.f.cpassword.errors)),e.R7$(2),e.Y8G("ngClass",e.l_i(18,h,!s.passwordField,s.passwordField)),e.R7$(),e.vxM(s.submitted&&s.f.cpassword.errors?47:-1),e.R7$(41),e.SpI("\xa9 ",s.year," Velzon. Crafted with "))},dependencies:[c.YU,u.Oj,u.bD,o.qT,o.me,o.BC,o.cb,o.YS,o.R_,o.j4,o.JD,m.Wk]})}}return t})()}];let $=(()=>{class t{static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275mod=e.$C({type:t})}static{this.\u0275inj=e.G2t({imports:[m.iI.forChild(G),m.iI]})}}return t})(),A=(()=>{class t{static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275mod=e.$C({type:t})}static{this.\u0275inj=e.G2t({imports:[c.MD,u.wA,o.X1,o.YN,$]})}}return t})()}}]);