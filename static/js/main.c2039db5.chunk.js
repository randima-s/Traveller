(this.webpackJsonptravel=this.webpackJsonptravel||[]).push([[0],{67:function(e,t,a){},68:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(18),i=a.n(s),r=(a(66),a(67),a(68),a(19)),o=a(20),l=a(22),d=a(21),m=a(84),j=a(82),b=a(12),u=a(1),p=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).ToggleClick=function(e){c.setState({NavbarExpanded:e})},c.state={NavbarExpanded:!1},c}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(u.jsx)(m.a,{bg:"dark",expand:"lg",variant:"dark",expanded:this.state.NavbarExpanded,children:Object(u.jsxs)("div",{className:"container-fluid ",children:[Object(u.jsx)(b.b,{to:"/",className:"navbar-brand",children:"Traveller"}),Object(u.jsx)(m.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(){return e.ToggleClick(!e.state.NavbarExpanded)}}),Object(u.jsx)(m.a.Collapse,{id:"responsive-navbar-nav",children:Object(u.jsxs)(j.a,{className:"ms-auto text-center",children:[Object(u.jsx)(b.b,{to:"/",className:"nav-link",onSelect:function(){return e.ToggleClick(!1)},children:"Home"}),Object(u.jsx)(b.b,{to:"/blog",className:"nav-link",onSelect:function(){return e.ToggleClick(!1)},children:"Blog"}),Object(u.jsx)(b.b,{to:"/gallery",className:"nav-link",onSelect:function(){return e.ToggleClick(!1)},children:"Galley"}),Object(u.jsx)(b.b,{to:"/contact",className:"nav-link",onSelect:function(){return e.ToggleClick(!1)},children:"Contact"})]})})]})})}}]),a}(c.Component),h=a(83);var g=function(e){var t=e.images.filter((function(e){return!0===e.carousel})).map((function(e){return Object(u.jsxs)(h.a.Item,{children:[Object(u.jsx)("img",{className:"d-block w-100 rounded",src:e.image,alt:e.name}),Object(u.jsxs)(h.a.Caption,{children:[Object(u.jsx)("h3",{children:e.name}),Object(u.jsx)("h5",{children:e.description})]})]},e.id)}));return Object(u.jsx)(h.a,{children:t})},x=a(42),O="\\Traveller",v=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){document.title="Traveller Home"}},{key:"render",value:function(){var e=Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:"fst-italic",children:"\u201cThe world is a book and those who do not travel read only one page.\u201d"}),Object(u.jsx)("p",{className:"text-end",children:"Saint Augustine"})]});return Object(u.jsxs)("div",{className:"container py-2  ",children:[Object(u.jsxs)("div",{className:"row ",children:[Object(u.jsx)("h1",{className:"col-md-7",children:Object(u.jsx)(g,{images:this.props.carousel})}),Object(u.jsx)("div",{className:" col-md-5 ",children:Object(u.jsx)("div",{className:"d-flex p-4  align-items-center h-100",children:e})})]}),Object(u.jsx)(x.a,{to:"/blog#top",children:Object(u.jsx)("div",{className:"container aspect-ratio-box my-2 position-relative",style:{backgroundImage:"url('/assets/img/blog.jpg')"},children:Object(u.jsxs)("div",{className:"aspect-ratio-box-inside",children:[Object(u.jsx)("h2",{className:"m-4 text-light text-end",children:"Blog"}),Object(u.jsx)("p",{className:"m-4 text-end text-light d-none d-sm-block",children:"A visual blog of amazing places"})]})})}),Object(u.jsx)(x.a,{to:"/gallery#top",children:Object(u.jsx)("div",{className:"container aspect-ratio-box my-2 position-relative",style:{backgroundImage:"url('/assets/img/gallery.jpg')"},children:Object(u.jsxs)("div",{className:"aspect-ratio-box-inside",children:[Object(u.jsx)("h2",{className:"m-4 text-light text-end",children:"Gallery"}),Object(u.jsx)("p",{className:"m-4 text-end text-light d-none d-sm-block",children:"The collection of all photos"})]})})})]})}}]),a}(c.Component);var f=function(e){return Object(u.jsx)("div",{className:"container-fluid bg-dark text-light pt-4 px-4",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-md-2",children:Object(u.jsx)("h5",{children:"Randima Senanayaka"})})})})},y=a(13),w=a(80);var N=function(e){return Object(u.jsx)(w.a,{show:e.show,onHide:e.modalHide,animation:!1,className:"modal-custom",children:Object(u.jsxs)(w.a.Body,{className:"m-0 p-0",children:[Object(u.jsx)("img",{src:e.img,alt:e.caption,className:" w-100"}),Object(u.jsx)("p",{className:" position-absolute bottom-0 bg-dark text-white  m-0",children:e.caption}),Object(u.jsx)("button",{type:"button",className:"btn-close bg-danger btn-lg position-absolute top-0 end-0","aria-label":"Close",onClick:e.modalHide})]})})};var k=function(e){var t=Object(c.useState)(!1),a=Object(y.a)(t,2),s=a[0],i=a[1],r=new RegExp("/(?!.*/.*)");return Object(u.jsxs)(n.a.Fragment,{children:[Object(u.jsx)(N,{show:s,modalHide:function(){return i(!1)},img:e.image.url,caption:e.image.caption,desc:e.image.desc}),Object(u.jsx)("div",{className:"col-lg-3 col-md-3 col-sm-4 ",id:e.image.id,children:Object(u.jsxs)("div",{className:"border border-primary border-2 mt-1 p-1 rounded-3",children:[Object(u.jsx)("img",{src:e.image.url.replace(r,"/small/"),alt:e.image.caption,className:"w-100 rounded-3",onClick:function(){return i(!0)}}),Object(u.jsxs)("span",{children:[e.image.caption," "]}),Object(u.jsx)(x.a,{to:"/blog/#"+e.image.postId,children:Object(u.jsx)("span",{className:"badge bg-primary text-center",children:"post"})})]})})]})},C=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){document.title="Traveller Gallery"}},{key:"render",value:function(){var e=this.props.images.map((function(e){return Object(u.jsx)(k,{image:e},e.id)}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"container-fluid bg-light p-4",children:Object(u.jsxs)("ol",{className:"breadcrumb",children:[Object(u.jsx)("li",{className:"breadcrumb-item",children:Object(u.jsx)(b.b,{to:"/",children:"Home"})}),Object(u.jsx)("li",{className:"breadcrumb-item active",children:"Gallery"})]})}),Object(u.jsx)("div",{className:"row container-fluid p-4",children:e})]})}}]),a}(c.Component),I=a(81),_=a(78);var B=function(e){var t=Object(c.useState)(!1),a=Object(y.a)(t,2),s=a[0],i=a[1],r=Object(c.useState)(""),o=Object(y.a)(r,2),l=o[0],d=o[1],m=Object(c.useState)(""),j=Object(y.a)(m,2),b=j[0],p=j[1],h=n.a.createRef();function g(t){var a=e.images.filter((function(e){return e.id===t}))[0];d(a.url),p(a.caption),i(!0)}function x(e){var t=new Date(e);return t.getHours()+":"+t.getMinutes()+" "+t.getFullYear()+"-"+t.getMonth()+"-"+t.getDate()}var O=e.images.map((function(e){var t=new RegExp("/(?!.*/.*)");return Object(u.jsx)("div",{className:"col col-lg-4 col-md-4 col-sm-6 p-2 d-flex ",children:Object(u.jsx)("img",{src:e.url.replace(t,"/small/"),alt:e.caption,className:"w-100 align-self-center border border-dark",onClick:function(){return g(e.id)}})},e.id)})),v=e.comments.map((function(e){return Object(u.jsxs)("div",{className:"shadow-sm p-2 mb-2 bg-body rounded text-wrap",children:[e.comment,Object(u.jsx)("p",{className:"text-end p-0 m-0 text-secondary",children:x(e.date)})]},e.id)})),f=function(){return""===e.blogData.location?Object(u.jsx)("div",{}):Object(u.jsx)("div",{className:"my-2",children:Object(u.jsx)("p",{className:"text-end",children:Object(u.jsxs)("a",{href:e.blogData.location,target:"_blank",rel:"noopener noreferrer",children:[Object(u.jsx)("span",{children:"Location"}),Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",fill:"currentColor",className:"bi bi-geo-alt",viewBox:"0 0 16 16",children:[Object(u.jsx)("path",{d:"M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"}),Object(u.jsx)("path",{d:"M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"})]})," "]})})})},w=e.images.filter((function(e){return!0===e.isFeatured}))[0];return Object(u.jsxs)("div",{className:"row justify-content-lg-center justify-content-md-center my-2 p-2",id:e.blogData.id,children:[Object(u.jsxs)("div",{className:"col col-lg-6 col-md-6 col-sm-12 bg-light border border-primary",children:[Object(u.jsx)("h4",{className:"my-2",children:e.blogData.title}),Object(u.jsx)("img",{src:w.url,alt:w.caption,className:"w-100 border border-dark",onClick:function(){return g(w.id)}}),Object(u.jsx)("div",{className:"row ",children:O}),Object(u.jsx)("div",{children:e.blogData.desc}),Object(u.jsx)(f,{}),Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),v,Object(u.jsx)("div",{className:"mb-2",children:Object(u.jsxs)(I.a,{onSubmit:function(t){h.current.value.length>0&&e.addComment(h.current.value,e.blogData.id),alert("Comments won't be stored permenantly"),t.preventDefault()},children:[Object(u.jsx)(I.a.Group,{children:Object(u.jsx)(I.a.Control,{type:"text",placeholder:"Add comment",as:"textarea",rows:2,className:"mb-2",id:"newComment",ref:h})}),Object(u.jsx)("div",{className:"d-flex flex-row-reverse ",children:Object(u.jsx)(_.a,{variant:"primary",type:"submit",children:"Post"})})]})})]})]}),Object(u.jsx)("div",{children:Object(u.jsx)(N,{show:s,modalHide:function(){return i(!1)},img:l,caption:b})})]})},M=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){document.title="Traveller Blog"}},{key:"render",value:function(){var e=this,t=this.props.blogs.map((function(t){return Object(u.jsx)(B,{blogData:t,images:e.props.images.filter((function(e){return e.postId===t.id})),comments:e.props.comments.filter((function(e){return e.postId===t.id})),addComment:e.props.addComment},t.id)}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"container-fluid bg-light p-4",children:Object(u.jsxs)("ol",{className:"breadcrumb",children:[Object(u.jsx)("li",{className:"breadcrumb-item",children:Object(u.jsx)(b.b,{to:"/",children:"Home"})}),Object(u.jsx)("li",{className:"breadcrumb-item active",children:"Blog"})]})}),Object(u.jsx)("div",{children:t})]})}}]),a}(c.Component),A=a(79);var T=function(e){return Object(c.useEffect)((function(){document.title="Traveller Contact"})),Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"container-fulid",children:[Object(u.jsx)("h2",{className:"text-center",children:"Contact"}),Object(u.jsxs)(A.a,{className:"mx-auto my-4",children:[Object(u.jsx)("div",{className:"col-md-2",children:Object(u.jsx)("img",{src:O+"/assets/img/randima.jpg",className:"w-100 rounded",alt:"Randima"})}),Object(u.jsxs)("div",{className:"col-md-6",children:[Object(u.jsx)("h3",{children:"Randima Senanayaka"}),Object(u.jsxs)("dl",{className:"row mt-4",children:[Object(u.jsx)("dt",{className:"col-sm-3",children:Object(u.jsxs)("a",{href:"mailto:rmsenanayake@gmail.com",children:[Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-envelope",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"})})," Email"]})}),Object(u.jsx)("dd",{className:"col-sm-9",children:Object(u.jsx)("a",{href:"mailto:rmsenanayake@gmail.com",children:"rmsenanayake@gmail.com"})}),Object(u.jsx)("dt",{className:"col-sm-3",children:Object(u.jsxs)("a",{href:"https://www.facebook.com/Randima.M.Senanayaka",target:"_blank",rel:"noopener noreferrer",children:[Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-facebook",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"})})," Facebook"]})}),Object(u.jsx)("dd",{}),Object(u.jsx)("dt",{className:"col-sm-3",children:Object(u.jsxs)("a",{href:"https://www.instagram.com/randima_senanayaka",target:"_blank",rel:"noopener noreferrer",children:[Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-instagram",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"})})," Instagram"]})}),Object(u.jsx)("dd",{})]})]})]})]})})},S=a(9),D=a(48),F="LOAD_BLOGS",H="LOAD_IMAGES",G="ADD_COMMENT",E="LOAD_EXPLORE",L="LOAD_CAROUSEL",R=[{id:0,postId:0,date:"2021-07-02T13:15:21.920Z",comment:"Comment 1"},{id:1,postId:0,date:"2021-07-02T13:15:21.920Z",comment:"Comment 2"},{id:2,postId:1,date:"2021-07-02T13:15:21.920Z",comment:"Comment 1 of post 2"}],z=[{id:0,title:"Pasikuda",desc:"Trip to Pasikudah beach. A boat ride in terryfying rainy weather. Stay at Anantaya Resort and Spa Hotel",location:""},{id:1,title:"Belihuloya",desc:"Trip to Pasikudah beach. A boat ride in terryfying rainy weather. Stay at Anantaya Resort and Spa Hotel",location:"https://www.google.com/maps/place/Bambarakanda+Falls/@6.7733517,80.8312138,15z/data=!4m2!3m1!1s0x0:0x6863b33a5baad25?sa=X&hl=en&ved=2ahUKEwiB8OCh5t3xAhUCwzgGHb-tCD4Q_BIwK3oECGgQBQ"},{id:2,title:"Ella ATV Bike ride",desc:"An iconic experience of riding ADV bikes through breath taking views of ella. Somewhat advanterous activity while enjoying the vies. Maintined by 98 acres hotel. Very safe and professional guides",location:""},{id:3,title:"Batticalore Kalladi beach and Thoppigala",desc:"An iconic experience of riding ADV bikes through breath taking views of ella. Somewhat advanterous activity while enjoying the vies. Maintined by 98 acres hotel. Very safe and professional guides",location:""}],V=[{id:0,title:"Blog",image:"/assets/icons/blog.png",desc:"A visual blog of amazing places",link:"/blog"},{id:1,title:"Gallery",image:"/assets/icons/gallery.png",desc:"The collection of all photos",link:"/gallery"},{id:2,title:"Contact",image:"/assets/icons/contact.png",desc:"Contatct me",link:"/contact"}],P=[{id:0,name:"Anantaya",carousel:!0,description:"Anantaya Hotel at Pasikudah",image:"/assets/img/3.jpg"},{id:1,name:"Puttalam",carousel:!0,description:"Near Kalpitiya Beach",image:"/assets/img/puttalam.jpg"},{id:3,name:"Habrana",carousel:!0,description:"Watching Elephants in Habarana",image:"/assets/img/habarana_elephant.jpg"}],U=[{id:0,postId:0,caption:"Anantaya Hotel",isFeatured:!0,url:"/assets/img/3.jpg"},{id:1,postId:0,caption:"Beach",isFeatured:!1,url:"/assets/img/2.jpg"},{id:2,postId:0,caption:"Boat ride",isFeatured:!1,url:"/assets/img/IMG_20210326_180659.jpg"},{id:3,postId:0,caption:"Anataya Hotel",isFeatured:!1,url:"/assets/img/IMG_20210328_090316.jpg"},{id:4,postId:0,caption:"Beach Boat",isFeatured:!1,url:"/assets/img/PXL_20210326_123929606.jpg"},{id:5,postId:0,caption:"Buffet",isFeatured:!1,url:"/assets/img/IMG_20210327_092851.jpg"},{id:6,postId:1,caption:"Bambarakanda Waterfall",isFeatured:!0,url:"/assets/img/IMG_20191027_115930.jpg"},{id:7,postId:1,caption:"Road to Bambarakanda Waterfall",isFeatured:!1,url:"/assets/img/IMG_20191027_125822.jpg"},{id:8,postId:1,caption:"Bambarakanda Waterfall",isFeatured:!1,url:"/assets/img/IMG_20191027_123615.jpg"},{id:9,postId:2,caption:"Ella ATV",isFeatured:!0,url:"/assets/img/00000IMG_00000_BURST20201212170504525_COVER.jpg"},{id:10,postId:2,caption:"Ella 98-acres",isFeatured:!1,url:"/assets/img/IMG_20201212_172729.jpg"},{id:11,postId:3,caption:"Baticalore Kalladi Beach",isFeatured:!0,url:"/assets/img/IMG_20190802_052842.jpg"},{id:12,postId:3,caption:"Baticalore Kalladi Beach",isFeatured:!1,url:"/assets/img/IMG_20190802_055822.jpg"},{id:13,postId:3,caption:"Baticalore Kalladi Beach",isFeatured:!1,url:"/assets/img/IMG_20190802_060604.jpg"},{id:14,postId:3,caption:"Thoppigala",isFeatured:!1,url:"/assets/img/IMG_20190801_122109.jpg"},{id:15,postId:3,caption:"Thoppigala",isFeatured:!1,url:"/assets/img/IMG_20190801_102340.jpg"}],K=function(e){return{type:"LOAD_COMMENTS",payload:e}},W=function(){return{type:E,baseURL:O,payload:V}},Q=function(){return{type:L,baseURL:O,payload:P}},X=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){console.log("mounted"),this.props.fetchHome(),this.props.fetchComments(),this.props.fetchBlogs(),this.props.fetchImages(),console.log("fetched")}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{children:[Object(u.jsx)(p,{}),Object(u.jsxs)(S.c,{children:[Object(u.jsx)(S.a,{exact:!0,path:"/",component:function(){return Object(u.jsx)(v,{carousel:e.props.carousel,explore:e.props.explore})}}),Object(u.jsx)(S.a,{exact:!0,path:"/gallery",component:function(){return Object(u.jsx)(C,{images:e.props.images})}}),Object(u.jsx)(S.a,{exact:!0,path:"/blog",component:function(){return Object(u.jsx)(M,{images:e.props.images,blogs:e.props.blogs.blogs,comments:e.props.comments.comments,addComment:e.props.addComment})}}),Object(u.jsx)(S.a,{exact:!0,path:"/contact",component:function(){return Object(u.jsx)(T,{})}})]}),Object(u.jsx)(f,{})]})}}]),a}(c.Component),Z=Object(S.f)(Object(D.b)((function(e){return{images:e.images,carousel:e.carousel,explore:e.explore,blogs:e.blogs,comments:e.comments}}),(function(e){return{addComment:function(t,a){return e(function(e,t){return{type:G,payload:{comment:e,postId:t}}}(t,a))},fetchComments:function(){return e((function(e){e(K(R))}))},fetchBlogs:function(){return e({type:F,payload:z})},fetchHome:function(){return e((function(e){e(W()),e(Q())}))},fetchImages:function(){return e({type:H,baseURL:O,payload:U})}}}))(X)),J=a(50),Y=a(2),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{blogs:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(Y.a)(Object(Y.a)({},e),{},{blogs:t.payload});default:return e}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:var a=t.payload.map((function(e){return Object(Y.a)(Object(Y.a)({},e),{},{image:t.baseURL+e.image})}));return e.concat(a);default:return e}},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:var a=t.payload;return a.id=e.comments.length,a.date=(new Date).toISOString(),Object(Y.a)(Object(Y.a)({},e),{},{comments:e.comments.concat(a)});default:return e}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:var a=t.payload.map((function(e){return Object(Y.a)(Object(Y.a)({},e),{},{image:t.baseURL+e.image})}));return e.concat(a);default:return e}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:var a=t.payload.map((function(e){return Object(Y.a)(Object(Y.a)({},e),{},{url:t.baseURL+e.url})}));return e.concat(a);default:return e}},ce=a(60),ne=a(61),se=a.n(ne),ie=Object(J.c)(Object(J.b)({images:ae,carousel:$,explore:te,blogs:q,comments:ee}),Object(J.a)(ce.a,se.a));var re=function(){return Object(u.jsx)(D.a,{store:ie,children:Object(u.jsx)(b.a,{children:Object(u.jsx)(Z,{})})})},oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,85)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(re,{})}),document.getElementById("root")),oe()}},[[76,1,2]]]);
//# sourceMappingURL=main.c2039db5.chunk.js.map