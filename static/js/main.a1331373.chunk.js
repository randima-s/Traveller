(this.webpackJsonptravel=this.webpackJsonptravel||[]).push([[0],{68:function(e,t,a){},69:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),i=a.n(r),s=(a(67),a(68),a(69),a(18)),o=a(19),l=a(21),d=a(20),j=a(84),m=a(82),u=a(1),b=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).ToggleClick=function(e){n.setState({NavbarExpanded:e})},n.state={NavbarExpanded:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(u.jsx)(j.a,{bg:"dark",expand:"lg",variant:"dark",expanded:this.state.NavbarExpanded,children:Object(u.jsxs)("div",{className:"container-fluid ",children:[Object(u.jsx)(j.a.Brand,{href:"/",children:"Traveller"}),Object(u.jsx)(j.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(){return e.ToggleClick(!e.state.NavbarExpanded)}}),Object(u.jsx)(j.a.Collapse,{id:"responsive-navbar-nav",children:Object(u.jsxs)(m.a,{className:"ms-auto text-center",children:[Object(u.jsx)(m.a.Link,{href:"/",onSelect:function(){return e.ToggleClick(!1)},children:"Home"}),Object(u.jsx)(m.a.Link,{href:"/blog",onSelect:function(){return e.ToggleClick(!1)},children:"Blog"}),Object(u.jsx)(m.a.Link,{href:"/gallery",onSelect:function(){return e.ToggleClick(!1)},children:"Galley"}),Object(u.jsx)(m.a.Link,{href:"/contact",onSelect:function(){return e.ToggleClick(!1)},children:"Contact"})]})})]})})}}]),a}(n.Component),p=a(83);var h=function(e){var t=e.images.filter((function(e){return!0===e.carousel})).map((function(e){return Object(u.jsxs)(p.a.Item,{children:[Object(u.jsx)("img",{className:"d-block w-100",src:e.image,alt:e.name}),Object(u.jsxs)(p.a.Caption,{children:[Object(u.jsx)("h3",{children:e.name}),Object(u.jsx)("p",{children:e.description})]})]},e.id)}));return Object(u.jsx)(p.a,{children:t})},g=a(85);function O(e){var t={textDecoration:"none"},a=e.cards.map((function(e){return Object(u.jsx)("div",{className:"col-lg-2 col-md-3 col-sm-4 pb-4  align-items-stretch",children:Object(u.jsxs)(g.a,{bg:"light",children:[Object(u.jsx)("a",{href:e.link,children:Object(u.jsx)("img",{src:e.image,alt:e.title,className:"d-block rounded-circle w-50 mx-auto"})}),Object(u.jsxs)(g.a.Body,{className:"text-center",children:[Object(u.jsx)("a",{href:e.link,style:t,children:Object(u.jsx)(g.a.Title,{children:e.title})}),Object(u.jsx)(g.a.Text,{children:e.desc})]})]})},e.id)}));return Object(u.jsxs)("div",{className:"container-fluid p-0 ",children:[Object(u.jsx)("h2",{className:"border-primary py-2 ms-2 bg-light",children:"Explore"}),Object(u.jsx)("div",{className:"row my-2 justify-content-around ",children:a})]})}var x=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){document.title="Traveller Home"}},{key:"render",value:function(){var e=Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:"allign-middle",children:"\u201cThe world is a book and those who do not travel read only one page.\u201d"}),Object(u.jsx)("p",{children:"Saint Augustine"})]});return Object(u.jsxs)("div",{className:"container-fluid m-0 p-2  ",children:[Object(u.jsxs)("div",{className:"row ",children:[Object(u.jsx)("div",{className:"col-md-6",children:Object(u.jsx)(h,{images:this.props.carousel})}),Object(u.jsx)("div",{className:" col-md-6 ",children:Object(u.jsx)("div",{className:"d-flex p-4  align-items-center h-100",children:e})})]}),Object(u.jsx)(O,{cards:this.props.explore})]})}}]),a}(n.Component);var f=function(e){return Object(u.jsx)("div",{className:"container-fluid bg-dark text-light pt-4 px-4",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"col-md-2",children:[Object(u.jsx)("h5",{children:"Randima Senanayaka"}),Object(u.jsx)("a",{href:"mailto:rmsenanayake@gmail.com",children:Object(u.jsx)("p",{children:"rmsenanayake@gmail.com"})})]})})})},v=a(13),y=a(80);var N=function(e){return Object(u.jsx)(y.a,{show:e.show,onHide:e.modalHide,animation:!1,className:"modal-custom",children:Object(u.jsxs)(y.a.Body,{className:"m-0 p-0",children:[Object(u.jsx)("img",{src:e.img,alt:e.caption,className:" w-100"}),Object(u.jsx)("p",{className:" position-absolute bottom-0 bg-dark text-white  m-0",children:e.caption}),Object(u.jsx)("button",{type:"button",className:"btn-close bg-danger btn-lg position-absolute top-0 end-0","aria-label":"Close",onClick:e.modalHide})]})})};var k=function(e){var t=Object(n.useState)(!1),a=Object(v.a)(t,2),r=a[0],i=a[1],s=new RegExp("/(?!.*/.*)");return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)(N,{show:r,modalHide:function(){return i(!1)},img:e.image.url,caption:e.image.caption,desc:e.image.desc}),Object(u.jsx)("div",{className:"col-lg-2 col-md-2 col-sm-4 ",id:e.image.id,children:Object(u.jsxs)("div",{className:"border border-primary border-2 mt-1 p-1 rounded-3",children:[Object(u.jsx)("img",{src:e.image.url.replace(s,"/small/"),alt:e.image.caption,className:"w-100 rounded-3",onClick:function(){return i(!0)}}),Object(u.jsxs)("span",{children:[e.image.caption," "]}),Object(u.jsx)("a",{href:"/blog/#"+e.image.postId,children:Object(u.jsx)("span",{className:"badge bg-primary text-center",children:"post"})})]})})]})},C=a(86),w=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){document.title="Traveller Gallery"}},{key:"render",value:function(){var e=this.props.images.map((function(e){return Object(u.jsx)(k,{image:e},e.id)}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"container-fluid bg-light p-4",children:Object(u.jsxs)(C.a,{children:[Object(u.jsx)(C.a.Item,{href:"/",children:"Home"}),Object(u.jsx)(C.a.Item,{active:!0,children:"Gallery"})]})}),Object(u.jsx)("div",{className:"row container-fluid p-4",children:e})]})}}]),a}(n.Component),I=a(81),T=a(79);var S=function(e){var t=Object(n.useState)(!1),a=Object(v.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(""),s=Object(v.a)(i,2),o=s[0],l=s[1],d=Object(n.useState)(""),j=Object(v.a)(d,2),m=j[0],b=j[1],p="",h=e.images.map((function(e){var t=new RegExp("/(?!.*/.*)");return Object(u.jsx)("div",{className:"col col-lg-4 col-md-4 col-sm-6 p-2 d-flex ",children:Object(u.jsx)("img",{src:e.url.replace(t,"/small/"),alt:e.caption,className:"w-100 align-self-center border border-dark",onClick:function(){return g(e.id)}})},e.id)}));function g(t){var a=e.images.filter((function(e){return e.id===t}))[0];l(a.url),b(a.caption),r(!0)}function O(e){var t=new Date(e);return t.getHours()+":"+t.getMinutes()+" "+t.getFullYear()+"-"+t.getMonth()+"-"+t.getDate()}var x=e.comments.map((function(e){return Object(u.jsxs)("div",{className:"shadow-sm p-2 mb-2 bg-body rounded text-wrap",children:[e.comment,Object(u.jsx)("p",{className:"text-end p-0 m-0 text-secondary",children:O(e.date)})]},e.id)})),f=e.images.filter((function(e){return!0===e.isFeatured}))[0];return Object(u.jsxs)("div",{className:"row justify-content-lg-center justify-content-md-center my-2 p-2",id:e.blogData.id,children:[Object(u.jsxs)("div",{className:"col col-lg-6 col-md-6 col-sm-12 bg-light border border-primary",children:[Object(u.jsx)("h4",{className:"my-2",children:e.blogData.title}),Object(u.jsx)("img",{src:f.url,alt:f.caption,className:"w-100 border border-dark",onClick:function(){return g(f.id)}}),Object(u.jsx)("div",{className:"row ",children:h}),Object(u.jsx)("div",{children:e.blogData.desc}),Object(u.jsx)("a",{href:e.blogData.location,children:Object(u.jsx)("img",{src:"assets/icons/map.png",alt:"Location",className:" my-1"})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),x,Object(u.jsx)("div",{className:"mb-2",children:Object(u.jsxs)(I.a,{onSubmit:function(t){p.length>0&&e.addComment(p,e.blogData.id),alert("Comments won't be stored permenantly"),t.preventDefault()},children:[Object(u.jsx)(I.a.Group,{children:Object(u.jsx)(I.a.Control,{type:"text",placeholder:"Add comment",as:"textarea",rows:2,className:"mb-2",id:"newComment",onChange:function(e){p=e.target.value}})}),Object(u.jsx)("div",{className:"d-flex flex-row-reverse ",children:Object(u.jsx)(T.a,{variant:"primary",type:"submit",children:"Post"})})]})})]})]}),Object(u.jsx)("div",{children:Object(u.jsx)(N,{show:c,modalHide:function(){return r(!1)},img:o,caption:m})})]})},D=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){document.title="Traveller Blog"}},{key:"render",value:function(){var e=this,t=this.props.blogs.map((function(t){return Object(u.jsx)(S,{blogData:t,images:e.props.images.filter((function(e){return e.postId===t.id})),comments:e.props.comments.filter((function(e){return e.postId===t.id})),addComment:e.props.addComment},t.id)}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"container-fluid bg-light p-4",children:Object(u.jsxs)(C.a,{children:[Object(u.jsx)(C.a.Item,{href:"/",children:"Home"}),Object(u.jsx)(C.a.Item,{active:!0,children:"Blog"})]})}),Object(u.jsx)("div",{children:t})]})}}]),a}(n.Component);var B=function(e){return Object(n.useEffect)((function(){document.title="Traveller Contact"})),Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"container-fulid",children:[Object(u.jsx)("h2",{className:"text-center",children:"Contact"}),Object(u.jsx)("a",{href:"mailto:rmsenanayake@gmail.com",children:Object(u.jsx)("p",{className:"text-center",children:"rmsenanayake@gamil.com"})})]})})},H=a(10),L=a(48),A="LOAD_BLOGS",_="ADD_COMMENT",E="LOAD_EXPLORE",M="LOAD_CAROUSEL",F=[{id:0,postId:0,date:"2021-07-02T13:15:21.920Z",comment:"Comment 1"},{id:1,postId:0,date:"2021-07-02T13:15:21.920Z",comment:"Comment 2"},{id:2,postId:1,date:"2021-07-02T13:15:21.920Z",comment:"Comment 1 of post 2"}],R=[{id:0,title:"Pasikuda",desc:"Trip to Pasikudah beach. A boat ride in terryfying rainy weather. Stay at Anantaya Resort and Spa Hotel",location:"http:/www.google.lk"},{id:1,title:"Belihuloya",desc:"Trip to Pasikudah beach. A boat ride in terryfying rainy weather. Stay at Anantaya Resort and Spa Hotel",location:"http:/www.google.lk"}],G=[{id:0,title:"Blog",image:"/assets/icons/blog.png",desc:"A visual blog of amazing places",link:"/blog"},{id:1,title:"Gallery",image:"/assets/icons/gallery.png",desc:"The collection of all photos",link:"/gallery"},{id:2,title:"Contact",image:"/assets/icons/contact.png",desc:"Contatct me",link:"/contact"}],P=[{id:0,name:"Anantaya",carousel:!0,description:"Anantaya Hotel at Pasikudah",image:"/assets/img/3.jpg"},{id:1,name:"Puttalam",carousel:!0,description:"Near Kalpitiya Beach",image:"/assets/img/puttalam.jpg"},{id:3,name:"Habrana",carousel:!0,description:"Watching Elephants in Habarana",image:"/assets/img/habarana_elephant.jpg"}],U="Traveller",Z=function(e){return{type:"LOAD_COMMENTS",payload:e}},J=function(){return{type:E,baseURL:U,payload:G}},W=function(){return{type:M,baseURL:U,payload:P}},X=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.loadHome(),this.props.fetchComments(),this.props.loadBlogs()}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{children:[Object(u.jsx)(b,{}),Object(u.jsxs)(H.d,{children:[Object(u.jsx)(H.b,{exact:!0,path:"/",component:function(){return Object(u.jsx)(x,{carousel:e.props.carousel,explore:e.props.explore})}}),Object(u.jsx)(H.b,{exact:!0,path:"/gallery",component:function(){return Object(u.jsx)(w,{images:e.props.images})}}),Object(u.jsx)(H.b,{exact:!0,path:"/blog",component:function(){return Object(u.jsx)(D,{images:e.props.images,blogs:e.props.blogs.blogs,comments:e.props.comments.comments,addComment:e.props.addComment})}}),Object(u.jsx)(H.b,{exact:!0,path:"/contact",component:function(){return Object(u.jsx)(B,{})}}),Object(u.jsx)(H.a,{to:"/"})]}),Object(u.jsx)(f,{})]})}}]),a}(n.Component),z=Object(H.g)(Object(L.b)((function(e){return{images:e.images,carousel:e.carousel,explore:e.explore,blogs:e.blogs,comments:e.comments}}),(function(e){return{addComment:function(t,a){return e(function(e,t){return{type:_,payload:{comment:e,postId:t}}}(t,a))},fetchComments:function(){return e((function(e){e(Z(F))}))},loadBlogs:function(){return e({type:A,payload:R})},loadHome:function(){return e((function(e){e(J()),e(W())}))}}}))(X)),K=a(55),Y=a(50),q=a(2),Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{blogs:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(q.a)(Object(q.a)({},e),{},{blogs:t.payload});default:return e}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:var a=t.payload.map((function(e){return Object(q.a)(Object(q.a)({},e),{},{image:t.baseURL+e.image})}));return e.concat(a);default:return e}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:var a=t.payload;return a.id=e.comments.length,a.date=(new Date).toISOString(),Object(q.a)(Object(q.a)({},e),{},{comments:e.comments.concat(a)});default:return e}},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:var a=t.payload.map((function(e){return Object(q.a)(Object(q.a)({},e),{},{image:t.baseURL+e.image})}));return e.concat(a);default:return e}},te=[{id:0,postId:0,caption:"Anantaya Hotel",isFeatured:!0,url:"/assets/img/3.jpg"},{id:1,postId:0,caption:"Beach",isFeatured:!1,url:"/assets/img/2.jpg"},{id:2,postId:0,caption:"Boat ride",isFeatured:!1,url:"/assets/img/IMG_20210326_180659.jpg"},{id:3,postId:0,caption:"Anataya Hotel",isFeatured:!1,url:"/assets/img/IMG_20210328_090316.jpg"},{id:4,postId:0,caption:"Beach Boat",isFeatured:!1,url:"/assets/img/PXL_20210326_123929606.jpg"},{id:5,postId:0,caption:"Buffet",isFeatured:!1,url:"/assets/img/IMG_20210327_092851.jpg"},{id:6,postId:1,caption:"Bambarakanda Waterfall",isFeatured:!0,url:"/assets/img/IMG_20191027_115930.jpg"}],ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;return t.type,e},ne=a(61),ce=a(62),re=a.n(ce),ie=Object(Y.c)(Object(Y.b)({images:ae,carousel:V,explore:ee,blogs:Q,comments:$}),Object(Y.a)(ne.a,re.a));var se=function(){return Object(u.jsx)(L.a,{store:ie,children:Object(u.jsx)(K.a,{children:Object(u.jsx)(z,{})})})},oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,87)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(se,{})}),document.getElementById("root")),oe()}},[[77,1,2]]]);
//# sourceMappingURL=main.a1331373.chunk.js.map