(this.webpackJsonptravel=this.webpackJsonptravel||[]).push([[0],{68:function(e,t,a){},69:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(17),r=a.n(i),s=(a(67),a(68),a(69),a(18)),o=a(19),l=a(21),d=a(20),j=a(84),m=a(82),b=a(1),u=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).ToggleClick=function(e){n.setState({NavbarExpanded:e})},n.state={NavbarExpanded:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsx)(j.a,{bg:"dark",expand:"lg",variant:"dark",expanded:this.state.NavbarExpanded,children:Object(b.jsxs)("div",{className:"container-fluid ",children:[Object(b.jsx)(j.a.Brand,{href:"#",children:"Traveller"}),Object(b.jsx)(j.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(){return e.ToggleClick(!e.state.NavbarExpanded)}}),Object(b.jsx)(j.a.Collapse,{id:"responsive-navbar-nav",children:Object(b.jsxs)(m.a,{className:"ms-auto text-center",children:[Object(b.jsx)(m.a.Link,{href:"/",onSelect:function(){return e.ToggleClick(!1)},children:"Home"}),Object(b.jsx)(m.a.Link,{href:"/blog",onSelect:function(){return e.ToggleClick(!1)},children:"Blog"}),Object(b.jsx)(m.a.Link,{href:"/gallery",onSelect:function(){return e.ToggleClick(!1)},children:"Galley"}),Object(b.jsx)(m.a.Link,{href:"/contact",onSelect:function(){return e.ToggleClick(!1)},children:"Contact"})]})})]})})}}]),a}(n.Component),p=a(83);var h=function(e){var t=e.images.filter((function(e){return!0===e.carousel})).map((function(e){return Object(b.jsxs)(p.a.Item,{children:[Object(b.jsx)("img",{className:"d-block w-100",src:e.image,alt:e.name}),Object(b.jsxs)(p.a.Caption,{children:[Object(b.jsx)("h3",{children:e.name}),Object(b.jsx)("p",{children:e.description})]})]},e.id)}));return Object(b.jsx)(p.a,{children:t})},g=a(85);function O(e){var t={textDecoration:"none"},a=e.cards.map((function(e){return Object(b.jsx)("div",{className:"col-lg-2 col-md-3 col-sm-4 pb-4  align-items-stretch",children:Object(b.jsxs)(g.a,{bg:"light",children:[Object(b.jsx)("a",{href:e.link,children:Object(b.jsx)("img",{src:e.image,alt:e.title,className:"d-block rounded-circle w-50 mx-auto"})}),Object(b.jsxs)(g.a.Body,{className:"text-center",children:[Object(b.jsx)("a",{href:e.link,style:t,children:Object(b.jsx)(g.a.Title,{children:e.title})}),Object(b.jsx)(g.a.Text,{children:e.desc})]})]})},e.id)}));return Object(b.jsxs)("div",{className:"container-fluid p-0 ",children:[Object(b.jsx)("h2",{className:"border-primary py-2 ms-2 bg-light",children:"Explore"}),Object(b.jsx)("div",{className:"row my-2 justify-content-around ",children:a})]})}var x=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){document.title="Traveller Home"}},{key:"render",value:function(){var e=Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"allign-middle",children:"\u201cThe world is a book and those who do not travel read only one page.\u201d"}),Object(b.jsx)("p",{children:"Saint Augustine"})]});return Object(b.jsxs)("div",{className:"container-fluid m-0 p-2  ",children:[Object(b.jsxs)("div",{className:"row ",children:[Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsx)(h,{images:this.props.carousel})}),Object(b.jsx)("div",{className:" col-md-6 ",children:Object(b.jsx)("div",{className:"d-flex p-4  align-items-center h-100",children:e})})]}),Object(b.jsx)(O,{cards:this.props.explore})]})}}]),a}(n.Component);var f=function(e){return Object(b.jsx)("div",{className:"container-fluid bg-dark text-light pt-4 px-4",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col-md-2",children:[Object(b.jsx)("h5",{children:"Randima Senanayaka"}),Object(b.jsx)("a",{href:"mailto:rmsenanayake@gmail.com",children:Object(b.jsx)("p",{children:"rmsenanayake@gmail.com"})})]})})})},v=a(13),y=a(80);var N=function(e){return Object(b.jsx)(y.a,{show:e.show,onHide:e.modalHide,animation:!1,className:"modal-custom",children:Object(b.jsxs)(y.a.Body,{className:"m-0 p-0",children:[Object(b.jsx)("img",{src:e.img,alt:e.caption,className:" w-100"}),Object(b.jsx)("p",{className:" position-absolute bottom-0 bg-dark text-white  m-0",children:e.caption}),Object(b.jsx)("button",{type:"button",className:"btn-close bg-danger btn-lg position-absolute top-0 end-0","aria-label":"Close",onClick:e.modalHide})]})})};var k=function(e){var t=Object(n.useState)(!1),a=Object(v.a)(t,2),i=a[0],r=a[1],s=new RegExp("/(?!.*/.*)");return Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)(N,{show:i,modalHide:function(){return r(!1)},img:e.image.url,caption:e.image.caption,desc:e.image.desc}),Object(b.jsx)("div",{className:"col-lg-2 col-md-2 col-sm-4 ",id:e.image.id,children:Object(b.jsxs)("div",{className:"border border-primary border-2 mt-1 p-1 rounded-3",children:[Object(b.jsx)("img",{src:e.image.url.replace(s,"/small/"),alt:e.image.caption,className:"w-100 rounded-3",onClick:function(){return r(!0)}}),Object(b.jsxs)("span",{children:[e.image.caption," "]}),Object(b.jsx)("a",{href:"/blog/#"+e.image.postId,children:Object(b.jsx)("span",{className:"badge bg-primary text-center",children:"post"})})]})})]})},C=a(86),w=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){document.title="Traveller Gallery"}},{key:"render",value:function(){var e=this.props.images.map((function(e){return Object(b.jsx)(k,{image:e},e.id)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"container-fluid bg-light p-4",children:Object(b.jsxs)(C.a,{children:[Object(b.jsx)(C.a.Item,{href:"/",children:"Home"}),Object(b.jsx)(C.a.Item,{active:!0,children:"Gallery"})]})}),Object(b.jsx)("div",{className:"row container-fluid p-4",children:e})]})}}]),a}(n.Component),T=a(81),I=a(79);var S=function(e){var t=Object(n.useState)(!1),a=Object(v.a)(t,2),c=a[0],i=a[1],r=Object(n.useState)(""),s=Object(v.a)(r,2),o=s[0],l=s[1],d=Object(n.useState)(""),j=Object(v.a)(d,2),m=j[0],u=j[1],p="",h=e.images.map((function(e){var t=new RegExp("/(?!.*/.*)");return Object(b.jsx)("div",{className:"col col-lg-4 col-md-4 col-sm-6 p-2 d-flex ",children:Object(b.jsx)("img",{src:e.url.replace(t,"/small/"),alt:e.caption,className:"w-100 align-self-center border border-dark",onClick:function(){return g(e.id)}})},e.id)}));function g(t){var a=e.images.filter((function(e){return e.id===t}))[0];l(a.url),u(a.caption),i(!0)}function O(e){var t=new Date(e);return t.getHours()+":"+t.getMinutes()+" "+t.getFullYear()+"-"+t.getMonth()+"-"+t.getDate()}var x=e.comments.map((function(e){return Object(b.jsxs)("div",{className:"shadow-sm p-2 mb-2 bg-body rounded text-wrap",children:[e.comment,Object(b.jsx)("p",{className:"text-end p-0 m-0 text-secondary",children:O(e.date)})]},e.id)})),f=e.images.filter((function(e){return!0===e.isFeatured}))[0];return Object(b.jsxs)("div",{className:"row justify-content-lg-center justify-content-md-center my-2 p-2",id:e.blogData.id,children:[Object(b.jsxs)("div",{className:"col col-lg-6 col-md-6 col-sm-12 bg-light border border-primary",children:[Object(b.jsx)("h4",{className:"my-2",children:e.blogData.title}),Object(b.jsx)("img",{src:f.url,alt:f.caption,className:"w-100 border border-dark",onClick:function(){return g(f.id)}}),Object(b.jsx)("div",{className:"row ",children:h}),Object(b.jsx)("div",{children:e.blogData.desc}),Object(b.jsx)("a",{href:e.blogData.location,children:Object(b.jsx)("img",{src:"assets/icons/map.png",alt:"Location",className:" my-1"})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),x,Object(b.jsx)("div",{className:"mb-2",children:Object(b.jsxs)(T.a,{onSubmit:function(t){p.length>0&&e.addComment(p,e.blogData.id),alert("Comments won't be stored permenantly"),t.preventDefault()},children:[Object(b.jsx)(T.a.Group,{children:Object(b.jsx)(T.a.Control,{type:"text",placeholder:"Add comment",as:"textarea",rows:2,className:"mb-2",id:"newComment",onChange:function(e){p=e.target.value}})}),Object(b.jsx)("div",{className:"d-flex flex-row-reverse ",children:Object(b.jsx)(I.a,{variant:"primary",type:"submit",children:"Post"})})]})})]})]}),Object(b.jsx)("div",{children:Object(b.jsx)(N,{show:c,modalHide:function(){return i(!1)},img:o,caption:m})})]})},B=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){document.title="Traveller Blog"}},{key:"render",value:function(){var e=this,t=this.props.blogs.map((function(t){return Object(b.jsx)(S,{blogData:t,images:e.props.images.filter((function(e){return e.postId===t.id})),comments:e.props.comments.filter((function(e){return e.postId===t.id})),addComment:e.props.addComment},t.id)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"container-fluid bg-light p-4",children:Object(b.jsxs)(C.a,{children:[Object(b.jsx)(C.a.Item,{href:"/",children:"Home"}),Object(b.jsx)(C.a.Item,{active:!0,children:"Blog"})]})}),Object(b.jsx)("div",{children:t})]})}}]),a}(n.Component);var D=function(e){return Object(n.useEffect)((function(){document.title="Traveller Contact"})),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"container-fulid",children:[Object(b.jsx)("h2",{className:"text-center",children:"Contact"}),Object(b.jsx)("a",{href:"mailto:rmsenanayake@gmail.com",children:Object(b.jsx)("p",{className:"text-center",children:"rmsenanayake@gamil.com"})})]})})},H=a(10),M=a(48),A="LOAD_BLOGS",F="ADD_COMMENT",_=[{id:0,postId:0,date:"2021-07-02T13:15:21.920Z",comment:"Comment 1"},{id:1,postId:0,date:"2021-07-02T13:15:21.920Z",comment:"Comment 2"},{id:2,postId:1,date:"2021-07-02T13:15:21.920Z",comment:"Comment 1 of post 2"}],E=[{id:0,title:"Pasikuda",desc:"Trip to Pasikudah beach. A boat ride in terryfying rainy weather. Stay at Anantaya Resort and Spa Hotel",location:"http:/www.google.lk"},{id:1,title:"Belihuloya",desc:"Trip to Pasikudah beach. A boat ride in terryfying rainy weather. Stay at Anantaya Resort and Spa Hotel",location:"http:/www.google.lk"}],L=function(e){return{type:"LOAD_COMMENTS",payload:e}},G=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchComments(),this.props.loadBlogs()}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)(u,{}),Object(b.jsx)("img",{src:"/Traveller/assets/icons/blog.png"}),Object(b.jsxs)(H.d,{children:[Object(b.jsx)(H.b,{exact:!0,path:"/",component:function(){return Object(b.jsx)(x,{carousel:e.props.carousel,explore:e.props.explore})}}),Object(b.jsx)(H.b,{exact:!0,path:"/gallery",component:function(){return Object(b.jsx)(w,{images:e.props.images})}}),Object(b.jsx)(H.b,{exact:!0,path:"/blog",component:function(){return Object(b.jsx)(B,{images:e.props.images,blogs:e.props.blogs.blogs,comments:e.props.comments.comments,addComment:e.props.addComment})}}),Object(b.jsx)(H.b,{exact:!0,path:"/contact",component:function(){return Object(b.jsx)(D,{})}}),Object(b.jsx)(H.a,{to:"/"})]}),Object(b.jsx)(f,{})]})}}]),a}(n.Component),P=Object(H.g)(Object(M.b)((function(e){return{images:e.images,carousel:e.carousel,explore:e.explore,blogs:e.blogs,comments:e.comments}}),(function(e){return{addComment:function(t,a){return e(function(e,t){return{type:F,payload:{comment:e,postId:t}}}(t,a))},fetchComments:function(){return e((function(e){e(L(_))}))},loadBlogs:function(){return e({type:A,payload:E})}}}))(G)),R=a(55),Z=a(50),J=a(2),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{blogs:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(J.a)(Object(J.a)({},e),{},{blogs:t.payload});default:return e}},z=[{id:0,name:"Anantaya",carousel:!0,description:"Anantaya Hotel at Pasikudah",image:"/assets/img/3.jpg"},{id:1,name:"Puttalam",carousel:!0,description:"Near Kalpitiya Beach",image:"/assets/img/puttalam.jpg"},{id:3,name:"Habrana",carousel:!0,description:"Watching Elephants in Habarana",image:"/assets/img/habarana_elephant.jpg"}],K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;return t.type,e},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:var a=t.payload;return a.id=e.comments.length,a.date=(new Date).toISOString(),Object(J.a)(Object(J.a)({},e),{},{comments:e.comments.concat(a)});default:return e}},Y=[{id:0,title:"Blog",image:"/Traveller/assets/icons/blog.png",desc:"A visual blog of amazing places",link:"/blog"},{id:1,title:"Gallery",image:"/Traveller/assets/icons/gallery.png",desc:"The collection of all photos",link:"/gallery"},{id:2,title:"Contact",image:"/assets/icons/contact.png",desc:"Contatct me",link:"/contact"}],q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Q=[{id:0,postId:0,caption:"Anantaya Hotel",isFeatured:!0,url:"/assets/img/3.jpg"},{id:1,postId:0,caption:"Beach",isFeatured:!1,url:"/assets/img/2.jpg"},{id:2,postId:0,caption:"Boat ride",isFeatured:!1,url:"/assets/img/IMG_20210326_180659.jpg"},{id:3,postId:0,caption:"Anataya Hotel",isFeatured:!1,url:"/assets/img/IMG_20210328_090316.jpg"},{id:4,postId:0,caption:"Beach Boat",isFeatured:!1,url:"/assets/img/PXL_20210326_123929606.jpg"},{id:5,postId:0,caption:"Buffet",isFeatured:!1,url:"/assets/img/IMG_20210327_092851.jpg"},{id:6,postId:1,caption:"Bambarakanda Waterfall",isFeatured:!0,url:"/assets/img/IMG_20191027_115930.jpg"}],U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;return t.type,e},V=a(61),$=a(62),ee=a.n($),te=Object(Z.c)(Object(Z.b)({images:U,carousel:K,explore:q,blogs:W,comments:X}),Object(Z.a)(V.a,ee.a));var ae=function(){return Object(b.jsx)(M.a,{store:te,children:Object(b.jsx)(R.a,{children:Object(b.jsx)(P,{})})})},ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,87)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(ae,{})}),document.getElementById("root")),ne()}},[[77,1,2]]]);
//# sourceMappingURL=main.49ed38cd.chunk.js.map