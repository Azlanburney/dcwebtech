"use strict";(self.webpackChunkonitir=self.webpackChunkonitir||[]).push([[536],{3536:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var l=n(5750),a=n(7294),r=n(855),i=n(6650),c=n(6217),o=n(4175),s=n(8170),m=n(4271),u=n(9030),d=n(3790),f=n(9285),p=n(8667),E=n.n(p),y=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleClick=function(e){var t=[];t=-1===e?d:d.filter((function(t){return t.category.includes(e)})),n.setState({filteredProducts:t,activeItem:e})},n.state={filteredProducts:d,activeItem:-1},n}return(0,l.Z)(t,e),t.prototype.render=function(){var e=this,t=this.state.filteredProducts.map((function(e,t){return a.createElement("div",{key:t,className:"col-lg-4 col-sm-6 masonry-item"},a.createElement("div",{className:"portfolio-box"},a.createElement("div",{className:"portfolio-img",style:{backgroundImage:"url("+{}.PUBLIC_URL+"/"+e.img+")"}}),a.createElement("div",{className:"portfolio-desc"},(0,f.CP)(e.category).slice(0,1).map((function(e,t){return a.createElement("span",{className:"portfolio-cat",key:t},e.title)})),a.createElement("h4",null,a.createElement(m.rU,{to:"/portfolio-details/"+e.id},e.title)))))}));return a.createElement(a.Fragment,null,a.createElement("section",{className:"portfolio-section pt-120 pb-90"},a.createElement("div",{className:"container"},a.createElement("div",{className:"row justify-content-center"},a.createElement("div",{className:"col-lg-8"},a.createElement("div",{className:"portfolio-filter masonry-filter"},a.createElement("ul",null,a.createElement("li",{className:-1===this.state.activeItem?"active":"",onClick:this.handleClick.bind(this,-1)},"All works"),u.map((function(t){return a.createElement("li",{key:t.id,className:e.state.activeItem===parseInt(t.id)?"active":"",onClick:e.handleClick.bind(e,t.id)},t.title)})))))),a.createElement(E(),{className:"row portfolio-masonary-loop masonry-items",imagesLoadedOptions:{itemSelector:".masonry-item",percentPosition:!0,resize:!0,fitWidth:!0}},t))),a.createElement("section",{className:"call-to-action cta-style-two mb-120"},a.createElement(s.Z,null)))},t}(a.Component),h="Portfolio Masonry",v=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.Z)(t,e),t.prototype.render=function(){return a.createElement(a.Fragment,null,a.createElement(r.ZP,null,a.createElement("title",null,"Onitir - React Template | ",h),a.createElement("meta",{name:"description",content:"#"})),a.createElement(i.Z,null),a.createElement(c.Z,{breadcrumb:{pagename:h}}),a.createElement(y,null),a.createElement(o.Z,{footer:{style:"footer-style-three",logo:"../../assets/img/logo.png"}}))},t}(a.Component),g=v}}]);
//# sourceMappingURL=536-7f7c941937eb18b1abc8.js.map