(this.webpackJsonptravel=this.webpackJsonptravel||[]).push([[0],{75:function(e,t,a){},76:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(21),i=a.n(s),r=(a(74),a(75),a(76),a(22)),o=a(23),l=a(25),d=a(24),m=a(94),j=a(93),b=a(13),u="\\Traveller",p=a(2),g=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).ToggleClick=function(e){c.setState({NavbarExpanded:e})},c.state={NavbarExpanded:!1},c}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(p.jsx)(m.a,{style:{backgroundColor:"black"},expand:"lg",variant:"dark",expanded:this.state.NavbarExpanded,children:Object(p.jsxs)("div",{className:"container ",children:[Object(p.jsx)(b.b,{to:"/",className:"navbar-brand",children:Object(p.jsx)("img",{src:u+"/assets/img/logo.png",alt:"Traveller"})}),Object(p.jsx)(m.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(){return e.ToggleClick(!e.state.NavbarExpanded)}}),Object(p.jsx)(m.a.Collapse,{id:"responsive-navbar-nav",children:Object(p.jsxs)(j.a,{className:"ms-auto text-center",children:[Object(p.jsx)(b.b,{to:"/",className:"nav-link",onClick:function(){return e.ToggleClick(!1)},children:"Home"}),Object(p.jsx)(b.b,{to:"/blog",className:"nav-link",onClick:function(){return e.ToggleClick(!1)},children:"Blog"}),Object(p.jsx)(b.b,{to:"/gallery",className:"nav-link",onClick:function(){return e.ToggleClick(!1)},children:"Galley"}),Object(p.jsx)(b.b,{to:"/contact",className:"nav-link",onClick:function(){return e.ToggleClick(!1)},children:"Contact"})]})})]})})}}]),a}(c.Component),h=a(44),x=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){document.title="Traveller Home"}},{key:"render",value:function(){var e=Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{className:"fst-italic",children:"\u201cThe world is a book and those who do not travel read only one page.\u201d"}),Object(p.jsx)("p",{className:"text-end text-secondary",children:"Saint Augustine"})]});return Object(p.jsx)("div",{className:"home-div container   d-flex",children:Object(p.jsxs)("div",{className:"row  ",children:[Object(p.jsx)("div",{className:"col-md-7 p-0  align-self-center",children:Object(p.jsx)("div",{className:"  p-2  align-items-center h-100 ",children:Object(p.jsx)("img",{src:u+"/assets/img/cover.png",alt:"cover",className:"w-100"})})}),Object(p.jsx)("div",{className:" col-md-5  text-light d-flex align-self-center",children:Object(p.jsxs)("div",{className:" p-4  align-items-center h-100",children:[e,Object(p.jsx)("br",{}),Object(p.jsx)(h.a,{to:"/blog#top",children:Object(p.jsx)("p",{className:"home-link mx-auto",children:"Blog"})}),Object(p.jsx)(h.a,{to:"/gallery#top",children:Object(p.jsx)("p",{className:"home-link mx-auto",children:"Gallery"})})]})})]})})}}]),a}(c.Component),O=a(37),f=a(91);var v=function(e){return Object(p.jsx)(f.a,{show:e.show,onHide:e.modalHide,animation:!1,className:"modal-custom",children:Object(p.jsxs)(f.a.Body,{className:"m-0 p-0",children:[Object(p.jsx)("img",{src:e.img,alt:e.caption,className:" w-100"}),Object(p.jsx)("p",{className:" position-absolute bottom-0 bg-dark text-white  m-0",children:e.caption}),Object(p.jsx)("button",{type:"button",className:"btn-close bg-danger btn-lg position-absolute top-0 end-0","aria-label":"Close",onClick:e.modalHide})]})})};var y=function(e){var t=Object(c.useState)(!1),a=Object(O.a)(t,2),s=a[0],i=a[1],r=new RegExp("/(?!.*/.*)");return Object(p.jsxs)(n.a.Fragment,{children:[Object(p.jsx)(v,{show:s,modalHide:function(){return i(!1)},img:e.image.url,caption:e.image.caption,desc:e.image.desc}),Object(p.jsx)("div",{className:"col-lg-3 col-md-3 col-sm-4 position-relative mt-4",id:e.image.id,children:Object(p.jsxs)("div",{className:" gallery-item  text-light mt-1 p-2 ",children:[Object(p.jsx)("img",{src:e.image.url.replace(r,"/small/"),alt:e.image.caption,className:"w-100 rounded-3 mb-2",onClick:function(){return i(!0)}}),Object(p.jsxs)("div",{className:" position-absolute  end-0 top-0",children:[Object(p.jsx)("span",{className:"badge bg-dark ",children:e.image.caption}),Object(p.jsx)(h.a,{to:"/blog/#"+e.image.postId,children:Object(p.jsx)("span",{className:"badge bg-primary ",children:"blog"})})]})]})})]})},N=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){document.title="Traveller Gallery"}},{key:"render",value:function(){var e=this.props.images.map((function(e){return Object(p.jsx)(y,{image:e},e.id)}));return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"container-fluid bg-black p-4",children:Object(p.jsxs)("ol",{className:"breadcrumb",children:[Object(p.jsx)("li",{className:"breadcrumb-item",children:Object(p.jsx)(b.b,{className:"text-light",to:"/",children:"Home"})}),Object(p.jsx)("li",{className:"breadcrumb-item active text-light",children:"Gallery"})]})}),Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"row  justify-content-center",children:e})})]})}}]),a}(c.Component),k=a(92),w=a(89);var I=function(e){var t=e.images.filter((function(e){return!0===e.isFeatured}))[0],a=Object(c.useState)(t.url),s=Object(O.a)(a,2),i=s[0],r=s[1],o=n.a.createRef(),l=Object(c.useRef)(null);function d(t){var a=e.images.filter((function(e){return e.id===t}))[0];r(a.url),window.scrollTo(0,l.current.offsetTop)}function m(e){var t=new Date(e);return t.getHours()+":"+t.getMinutes()+" "+t.getFullYear()+"-"+t.getMonth()+"-"+t.getDate()}var j=e.images.map((function(e){var t=new RegExp("/(?!.*/.*)");return Object(p.jsx)("div",{className:"col col-lg-4 col-md-4 col-sm-6 p-2 d-flex mini-image",children:Object(p.jsx)("img",{src:e.url.replace(t,"/small/"),alt:e.caption,className:"w-100 align-self-center border border-dark",onClick:function(){return d(e.id)}})},e.id)})),b=e.comments.map((function(e){return Object(p.jsxs)("div",{className:"shadow-sm p-2 mb-2 bg-light-dark rounded text-wrap",children:[e.comment,Object(p.jsx)("p",{className:"text-end p-0 m-0 text-secondary",children:m(e.date)})]},e.id)})),u=function(){return""===e.blogData.location?Object(p.jsx)("div",{}):Object(p.jsx)("div",{className:"my-2",children:Object(p.jsx)("p",{className:"text-end",children:Object(p.jsxs)("a",{href:e.blogData.location,target:"_blank",rel:"noopener noreferrer",children:[Object(p.jsx)("span",{children:"Location"}),Object(p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",fill:"currentColor",className:"bi bi-geo-alt",viewBox:"0 0 16 16",children:[Object(p.jsx)("path",{d:"M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"}),Object(p.jsx)("path",{d:"M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"})]})," "]})})})};return Object(p.jsx)("div",{className:"row justify-content-lg-center justify-content-md-center my-2 p-2",id:e.blogData.id,ref:l,children:Object(p.jsxs)("div",{className:"col col-xl-4 col-lg-5 col-md-6 col-sm-12 blog-item text-light ",children:[Object(p.jsx)("h4",{className:"my-2 text-center",children:e.blogData.title}),Object(p.jsx)("img",{src:i,alt:t.caption,className:" rounded px-2 mx-auto d-block",onClick:function(){return d(t.id)},style:{maxHeight:"60vh",width:"auto",maxWidth:"100%"}}),Object(p.jsx)("div",{className:"row px-2",children:j}),Object(p.jsx)("div",{children:e.blogData.desc}),Object(p.jsx)(u,{}),Object(p.jsxs)("div",{children:[Object(p.jsx)("hr",{}),b,Object(p.jsx)("div",{className:"mb-2",children:Object(p.jsxs)(k.a,{onSubmit:function(t){o.current.value.length>0&&e.addComment(o.current.value,e.comments.length,e.blogData.id),t.preventDefault()},children:[Object(p.jsx)(k.a.Group,{children:Object(p.jsx)(k.a.Control,{type:"text",placeholder:"Add comment",as:"textarea",rows:2,id:"newComment",ref:o,className:"bg-dark text-light mb-2"})}),Object(p.jsx)("div",{className:"d-flex flex-row-reverse mt-2",children:Object(p.jsx)(w.a,{variant:"secondary",type:"submit",children:"Post"})})]})})]}),Object(p.jsx)("div",{})]})})},C=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){document.title="Traveller Blog"}},{key:"render",value:function(){var e=this,t=this.props.blogs.map((function(t){return Object(p.jsx)(I,{blogData:t,images:e.props.images.filter((function(e){return e.postId===t.id})),comments:e.props.comments.filter((function(e){return e.postId===t.id})),addComment:e.props.addComment},t.id)}));return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"container bg-black p-4",children:[Object(p.jsxs)("ol",{className:"breadcrumb ",children:[Object(p.jsx)("li",{className:"breadcrumb-item",children:Object(p.jsx)(b.b,{to:"/",className:"text-light",children:"Home"})}),Object(p.jsx)("li",{className:"breadcrumb-item active text-light",children:"Blog"})]}),Object(p.jsx)("aside",{className:"sidebar  ",children:Object(p.jsxs)("ul",{className:"list-group ",children:[Object(p.jsx)("li",{className:"list-group-item bg-dark ",children:Object(p.jsx)(b.b,{className:"text-light",to:"/#top",children:"Home"})}),Object(p.jsx)("li",{className:"list-group-item bg-dark text-light",onClick:function(){window.scrollTo(0,0)},children:"Top"})]})})]}),Object(p.jsx)("main",{children:Object(p.jsx)("div",{children:t})})]})}}]),a}(c.Component),_=a(90);var B=function(e){return Object(c.useEffect)((function(){document.title="Traveller Contact"})),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"container-fluid bg-black p-4",children:Object(p.jsxs)("ol",{className:"breadcrumb",children:[Object(p.jsx)("li",{className:"breadcrumb-item",children:Object(p.jsx)(b.b,{className:"text-light",to:"/",children:"Home"})}),Object(p.jsx)("li",{className:"breadcrumb-item active text-light",children:"Contact"})]})}),Object(p.jsxs)("div",{className:"container mt-2 pb-2 bg-dark text-light",children:[Object(p.jsx)("h3",{className:"text-center",children:"Contact"}),Object(p.jsxs)(_.a,{className:" m-2  p-2 bg-light text-dark",children:[Object(p.jsx)("div",{className:"col-md-2",children:Object(p.jsx)("img",{src:u+"/assets/img/randima.jpg",className:"w-100 rounded",alt:"Randima"})}),Object(p.jsxs)("div",{className:"col-md-6",children:[Object(p.jsx)("h4",{children:"Randima Senanayaka"}),Object(p.jsxs)("ol",{className:"list-inline",children:[Object(p.jsx)("li",{className:"list-inline-item",children:Object(p.jsxs)("a",{href:"mailto:rmsenanayake@gmail.com",children:[Object(p.jsx)("img",{src:"https://img.icons8.com/fluent/48/000000/gmail.png",alt:"email"}),Object(p.jsx)("br",{})," Email"]})}),Object(p.jsx)("li",{className:"list-inline-item",children:Object(p.jsxs)("a",{href:"https://www.facebook.com/Randima.M.Senanayaka",target:"_blank",rel:"noopener noreferrer",children:[Object(p.jsx)("img",{src:"https://img.icons8.com/fluent/48/000000/facebook-new.png",alt:"facebook"}),Object(p.jsx)("br",{})," Facebook"]})}),Object(p.jsx)("li",{className:"list-inline-item",children:Object(p.jsxs)("a",{href:"https://www.instagram.com/randima_senanayaka",target:"_blank",rel:"noopener noreferrer",children:[Object(p.jsx)("img",{src:"https://img.icons8.com/fluent/48/000000/instagram-new.png",alt:"instagram"}),Object(p.jsx)("br",{})," Instagram"]})})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("a",{className:"fs-6 text-secondary",href:"https://icons8.com/icon/ho8QlOYvMuG3/gmail",children:"Gmail icon by Icons8"}),Object(p.jsx)("a",{className:"fs-6 text-secondary",href:"https://icons8.com/icon/uLWV5A9vXIPu/facebook",children:"Facebook icon by Icons8"}),Object(p.jsx)("a",{className:"fs-6 text-secondary",href:"https://icons8.com/icon/Xy10Jcu1L2Su/instagram",children:"Instagram icon by Icons8"})]})]})]})]})]})},T=a(11),M=a(51),D="LOAD_COMMENTS",F="LOAD_BLOGS",S="LOAD_IMAGES",A="ADD_COMMENT",G=[{id:0,title:"Pasikuda",desc:"Trip to Pasikudah beach. A boat ride in terryfying rainy weather. Stay at Anantaya Resort and Spa Hotel",location:""},{id:1,title:"Belihuloya",desc:"Trip to Pasikudah beach. A boat ride in terryfying rainy weather. Stay at Anantaya Resort and Spa Hotel",location:"https://www.google.com/maps/place/Bambarakanda+Falls/@6.7733517,80.8312138,15z/data=!4m2!3m1!1s0x0:0x6863b33a5baad25?sa=X&hl=en&ved=2ahUKEwiB8OCh5t3xAhUCwzgGHb-tCD4Q_BIwK3oECGgQBQ"},{id:2,title:"Ella ATV Bike ride",desc:"An iconic experience of riding ADV bikes through breath taking views of ella. Somewhat advanterous activity while enjoying the views. Maintained by 98 acres hotel. Very safe and professional guides",location:""},{id:3,title:"Batticalore Kalladi beach and Thoppigala",desc:"An iconic experience of riding ADV bikes through breath taking views of ella. Somewhat advanterous activity while enjoying the vies. Maintined by 98 acres hotel. Very safe and professional guides",location:""}],E=[{id:0,postId:0,caption:"Anantaya Hotel",isFeatured:!0,url:"/assets/img/3.jpg"},{id:1,postId:0,caption:"Beach",isFeatured:!1,url:"/assets/img/2.jpg"},{id:2,postId:0,caption:"Boat ride",isFeatured:!1,url:"/assets/img/IMG_20210326_180659.jpg"},{id:3,postId:0,caption:"Anataya Hotel",isFeatured:!1,url:"/assets/img/IMG_20210328_090316.jpg"},{id:4,postId:0,caption:"Beach Boat",isFeatured:!1,url:"/assets/img/PXL_20210326_123929606.jpg"},{id:5,postId:0,caption:"Buffet",isFeatured:!1,url:"/assets/img/IMG_20210327_092851.jpg"},{id:6,postId:1,caption:"Bambarakanda Waterfall",isFeatured:!0,url:"/assets/img/IMG_20191027_115930.jpg"},{id:7,postId:1,caption:"Road to Bambarakanda Waterfall",isFeatured:!1,url:"/assets/img/IMG_20191027_125822.jpg"},{id:8,postId:1,caption:"Bambarakanda Waterfall",isFeatured:!1,url:"/assets/img/IMG_20191027_123615.jpg"},{id:9,postId:2,caption:"Ella ATV",isFeatured:!0,url:"/assets/img/00000IMG_00000_BURST20201212170504525_COVER.jpg"},{id:10,postId:2,caption:"Ella 98-acres",isFeatured:!1,url:"/assets/img/IMG_20201212_172729.jpg"},{id:11,postId:3,caption:"Baticalore Kalladi Beach",isFeatured:!0,url:"/assets/img/IMG_20190802_052842.jpg"},{id:12,postId:3,caption:"Baticalore Kalladi Beach",isFeatured:!1,url:"/assets/img/IMG_20190802_055822.jpg"},{id:13,postId:3,caption:"Baticalore Kalladi Beach",isFeatured:!1,url:"/assets/img/IMG_20190802_060604.jpg"},{id:14,postId:3,caption:"Thoppigala",isFeatured:!1,url:"/assets/img/IMG_20190801_122109.jpg"},{id:15,postId:3,caption:"Thoppigala",isFeatured:!1,url:"/assets/img/IMG_20190801_102340.jpg"}],H=a(41);a(87),a(86);H.a.apps.length?H.a.app():H.a.initializeApp({apiKey:"AIzaSyC-p5XqB3SlbP6jSL7rJLRmFthpwofTa4s",authDomain:"travelpage-randima.firebaseapp.com",projectId:"travelpage-randima",storageBucket:"travelpage-randima.appspot.com",messagingSenderId:"810775297412",appId:"1:810775297412:web:9767f758fd76cb65fdf1d1",measurementId:"G-VX3B0LTJY5"});var L=H.a.firestore(),R=function(e){return{type:D,payload:e}},P=function(e){return{type:A,payload:e}},V=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){console.log("mounted"),this.props.fetchComments(),this.props.fetchBlogs(),this.props.fetchImages(),console.log("fetched")}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{children:[Object(p.jsx)(g,{}),Object(p.jsxs)(T.c,{children:[Object(p.jsx)(T.a,{exact:!0,path:"/",component:function(){return Object(p.jsx)(x,{})}}),Object(p.jsx)(T.a,{exact:!0,path:"/gallery",component:function(){return Object(p.jsx)(N,{images:e.props.images})}}),Object(p.jsx)(T.a,{exact:!0,path:"/blog",component:function(){return Object(p.jsx)(C,{images:e.props.images,blogs:e.props.blogs.blogs,comments:e.props.comments.comments,addComment:e.props.addComment})}}),Object(p.jsx)(T.a,{exact:!0,path:"/contact",component:function(){return Object(p.jsx)(B,{})}})]})]})}}]),a}(c.Component),z=Object(T.f)(Object(M.b)((function(e){return{images:e.images,carousel:e.carousel,explore:e.explore,blogs:e.blogs,comments:e.comments}}),(function(e){return{addComment:function(t,a,c){return e(function(e,t,a){return function(c){var n={id:t,postId:a,comment:e,date:H.a.firestore.Timestamp.fromDate(new Date)};L.collection("comments").add(n).then((function(e){c(P(n))})).catch((function(e){return alert("Error adding document: "+e),console.log("Error adding document: "+e),!1}))}}(t,a,c))},fetchComments:function(){return e((function(e){var t=[];L.collection("comments").get().then((function(a){a.forEach((function(e){console.log(e.data()),t.push({id:e.data().id,postId:e.data().postId,comment:e.data().comment,date:1e3*e.data().date.seconds})})),e(R(t))})).catch((function(e){console.log("Error: "+e)}))}))},fetchBlogs:function(){return e({type:F,payload:G})},fetchImages:function(){return e({type:S,baseURL:u,payload:E})}}}))(V)),K=a(56),X=a(3),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{blogs:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(X.a)(Object(X.a)({},e),{},{blogs:t.payload});default:return e}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:var a=t.payload;return a.id=e.comments.length,a.date=(new Date).toISOString(),Object(X.a)(Object(X.a)({},e),{},{comments:e.comments.concat(a)});case D:return Object(X.a)(Object(X.a)({},e),{},{comments:t.payload});default:return e}},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:var a=t.payload.map((function(e){return Object(X.a)(Object(X.a)({},e),{},{url:t.baseURL+e.url})}));return e.concat(a);default:return e}},Q=a(68),Y=a(69),q=a.n(Y),Z=Object(K.c)(Object(K.b)({images:W,blogs:J,comments:U}),Object(K.a)(Q.a,q.a));var $=function(){return Object(p.jsx)(M.a,{store:Z,children:Object(p.jsx)(b.a,{children:Object(p.jsx)(z,{})})})},ee=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,95)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)($,{})}),document.getElementById("root")),ee()}},[[85,1,2]]]);
//# sourceMappingURL=main.617fd29c.chunk.js.map