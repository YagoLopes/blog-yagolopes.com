(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Ohkw:function(e,t,a){e.exports=a.p+"static/profile-b632cd9f1705e37b39f19885090a7875.jpg"},RXBc:function(e,t,a){"use strict";a.r(t);var o=a("q1tI"),n=a.n(o),r=a("jd0y"),i=a("vOnD"),l=a("Ohkw"),s=a.n(l),p=i.b.div.withConfig({displayName:"styles__Container",componentId:"sc-1buzu9f-0"})(["padding:10%;width:100%;display:flex;align-items:center;justify-content:center;"]),c=i.b.div.withConfig({displayName:"styles__Left",componentId:"sc-1buzu9f-1"})(["max-width:50%;@media only screen and (max-width:600px){margin-top:20px;max-width:100%;}"]),d=i.b.div.withConfig({displayName:"styles__Right",componentId:"sc-1buzu9f-2"})(["margin-top:-8%;margin-left:50px;width:300px;height:300px;background-image:url(",");border-radius:15%;background-repeat:no-repeat;-moz-box-shadow:inset 10px 10px 50px var(--quaternary);-webkit-box-shadow:inset 10px 10px 50px var(--quaternary);box-shadow:inset 10px 30px 50px var(--quaternary);opacity:0.3;background-size:cover;@media only screen and (max-width:600px){position:absolute;}"],s.a),m=i.b.h2.withConfig({displayName:"styles__Title",componentId:"sc-1buzu9f-3"})(["font-size:1.8em;color:var(--quinary);"]),u=i.b.p.withConfig({displayName:"styles__Text",componentId:"sc-1buzu9f-4"})(["font-size:1.2em;margin-top:10px;color:var(--tertiary);opacity:0.7;"]),g=a("bHiP");var x=function(){return n.a.createElement(p,null,n.a.createElement(c,null,n.a.createElement(m,null,g.profile.title),n.a.createElement(u,null,g.profile.description,n.a.createElement("a",{href:"http://yagolopes.com/blog"},"yagolopes.com"))),n.a.createElement(d,null))},f=a("qhky"),h=i.b.div.withConfig({displayName:"styles__Container",componentId:"kmxfz3-0"})(["width:100%;display:flex;padding:0 10% 10px 10%;justify-content:space-around;flex-wrap:wrap;"]),b=i.b.div.withConfig({displayName:"styles__Project",componentId:"kmxfz3-1"})(["display:flex;flex-direction:column;border:solid 1px var(--primary);border-radius:4px;margin-bottom:50px;padding:10px;min-width:100px;max-width:250px;min-height:150px;flex-grow:2;header{font-size:16px;text-align:center;margin-top:10px;font-weight:800;color:var(--quinary);}span{margin-top:10px;color:var(--tertiary);font-size:13px;text-align:center;opacity:0.5;}a{margin-top:15px;width:100px;height:30px;margin-left:auto;margin-right:auto;border:solid 1px var(--quinary);background-color:transparent;color:var(--tertiary);font-weight:800;opacity:0.9;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:14px;text-decoration:none;:hover{background-color:var(--quinary);color:var(--secondary);}}"]);var y=function(){return n.a.createElement(h,null,g.projects.map((function(e){return n.a.createElement(b,{key:e.id},n.a.createElement("header",null,e.name),n.a.createElement("span",null,e.description),n.a.createElement("a",{href:e.url},"Saiba mais"))})))};var w=a("dI71"),v=i.b.div.withConfig({displayName:"styles__Container",componentId:"lyddeu-0"})(["width:100%;padding:0 25px 10% 25px;display:flex;align-items:center;justify-content:center;form{display:flex;flex-direction:column;border-radius:5px;border:solid 1px var(--link);padding:40px;width:400px;display:flex;flex-direction:column;align-items:stretch;h1{font-size:26px;font-weight:500;text-align:center;margin:0 0 10px;color:var(--tertiary);}span,label{color:var(--white);font-size:14px;line-height:16px;font-weight:600;margin-top:15px;opacity:0.7;}input{height:40px;padding:10px;border-radius:3px;border:1px solid rgba(0,0,0,0.3);background-color:rgba(0,0,0,0.1);color:#f6f6f6;margin-top:8px;transition:border 0.15s ease;font-size:16px;&:focus{border-color:#7289da;}}textarea{padding:10px;border-radius:3px;border:1px solid rgba(0,0,0,0.3);background-color:rgba(0,0,0,0.1);color:#f6f6f6;margin-top:8px;transition:border 0.15s ease;font-size:16px;&:focus{border-color:#7289da;}}button{background-color:var(--link);color:var(--white);font-weight:800;font-size:16px;margin:20px 0 0;padding:10px;}}"]),E=function(e){function t(t){var a;return(a=e.call(this,t)||this).submitForm=a.submitForm.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a.state={status:""},a}Object(w.a)(t,e);var a=t.prototype;return a.render=function(){var e=this.state.status;return n.a.createElement(v,null,n.a.createElement("form",{onSubmit:this.submitForm,action:"https://formspree.io/xnqglngq",method:"POST"},n.a.createElement("h1",null,"Me envie um e-mail"),n.a.createElement("label",null,"Seu melhor e-mail:"),n.a.createElement("input",{type:"email",name:"email"}),n.a.createElement("label",null,"Mensagem:"),n.a.createElement("textarea",{type:"text",name:"message",rows:"7"}),"SUCCESS"===e?n.a.createElement("span",null,"Obrigado!"):n.a.createElement("button",null,"Enviar"),"ERROR"===e&&n.a.createElement("p",null,"Ooops! Alguma coisa deu errado.")))},a.submitForm=function(e){var t=this;e.preventDefault();var a=e.target,o=new FormData(a),n=new XMLHttpRequest;n.open(a.method,a.action),n.setRequestHeader("Accept","application/json"),n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(200===n.status?(a.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},n.send(o)},t}(n.a.Component);t.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(r.b,null),n.a.createElement(f.a,null,n.a.createElement("meta",{charSet:"utf-8"}),n.a.createElement("title",null,"yagolopes.com"),n.a.createElement("link",{rel:"yagolopes.com",href:"http://yagolopes.com"})),n.a.createElement(r.a,null,n.a.createElement(x,null),n.a.createElement(y,null),n.a.createElement(E,null)))}},bHiP:function(e,t){e.exports={projects:[{id:1,name:"Blog",description:"Um blog onde compartilho meus aprendizados / estudos sobre tecnologia  ",url:"http://yagolopes.com/blog"},{id:1,name:"JS Hunt",description:"Um aplicativo de consultas de tecnologias / Framworks ",url:"https://github.com/YagoLopes/jshunt"},{id:2,name:"Tindev",description:"Um Tinder para desenvolvedores criado na semana omnistack 8.0 da Rocketseat",url:"https://github.com/YagoLopes/tindev"},{id:3,name:"Git Compar",description:"Um comparador de repositórios integrado a API REST do Github",url:"https://github.com/YagoLopes/git-compar"},{id:4,name:"Clone Twitter",description:"Um clone do Twitter criado na semana omnistack da Rocketseat",url:"https://github.com/YagoLopes/twitter"},{id:5,name:"Clone Instagram",description:"Um clone do Instagram criado na semana omnistack da Rocketseat",url:"https://github.com/YagoLopes/instarocket"},{id:6,name:"Easy List",description:"Um aplicativo que gerencia sua lista de compras no supermercado",url:"https://github.com/YagoLopes/easylist"}],profile:{title:"Yago Lopes é analista de sistemas, e apaixonado pelo que faz!",description:"Yago Lopes é formado em Análise e Desenvolvimento de Sistemas. Desenvolvedor web full stack JavaScript com Node JS, e nas horas vagas, autor e redator do blog "}}}}]);
//# sourceMappingURL=component---src-pages-index-js-15944f1c36a484be572a.js.map