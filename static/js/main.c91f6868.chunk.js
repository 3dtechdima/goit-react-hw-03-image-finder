(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{77:function(n,e,t){},78:function(n,e,t){"use strict";t.r(e);var a,o,r,i,c,s=t(0),l=t(26),p=t.n(l),d=t(6),u=t(7),b=t(9),h=t(8),m=t(4),g=t(5),x=g.a.section(a||(a=Object(m.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n"]))),f=g.a.section(o||(o=Object(m.a)(["\n  margin: auto;\n  .Button {\n    padding: 8px 16px;\n    border-radius: 2px;\n    background-color: #3f51b5;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    text-align: center;\n    display: inline-block;\n    color: #fff;\n    border: 0;\n    text-decoration: none;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: 18px;\n    line-height: 24px;\n    font-style: normal;\n    font-weight: 500;\n    min-width: 180px;\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  }\n\n  .Button:hover,\n  .Button:focus {\n    background-color: #303f9f;\n  }\n"]))),j=t(1),O=function(n){var e=n.onLoadMoreClick;return Object(j.jsx)(f,{children:Object(j.jsx)("button",{className:"Button",onClick:e,children:"Load more"})})},k=t(12),v=g.a.section(r||(r=Object(m.a)(["\n  .ImageGalleryItem {\n    border-radius: 2px;\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  }\n\n  .ImageGalleryItem-image {\n    width: 100%;\n    height: 260px;\n    object-fit: cover;\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n  .ImageGalleryItem-image:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),y=function(n){var e=n.src,t=n.onPictureClick,a=n.largeImageURL;return Object(j.jsx)(v,{children:Object(j.jsx)("li",{className:"ImageGalleryItem",onClick:function(){return t(a)},children:Object(j.jsx)("img",{src:e,alt:"",className:"ImageGalleryItem-image"})})})},S=function(n){Object(b.a)(t,n);var e=Object(h.a)(t);function t(){return Object(d.a)(this,t),e.apply(this,arguments)}return Object(u.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.props.onEsc)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.props.onEsc)}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"Overlay",onClick:this.props.onBackdropClick,children:Object(j.jsx)("div",{className:"Modal",children:Object(j.jsx)("img",{src:this.props.url,alt:""})})})}}]),t}(s.Component),w=S,C=t(30),I=t.n(C),L=t(31),F=t.n(L),N=function(n,e){return F.a.get("https://pixabay.com/api/?q=".concat(n,"&page=").concat(e,"&key=23310920-d081bc49b0dbcec0d7d3e38c7&image_type=photo&orientation=horizontal&per_page=12"))},z=g.a.section(i||(i=Object(m.a)(["\n  .ImageGallery {\n    display: grid;\n    max-width: calc(100vw - 48px);\n    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n    grid-gap: 16px;\n    margin-top: 0;\n    margin-bottom: 0;\n    padding: 0;\n    list-style: none;\n    margin-left: auto;\n    margin-right: auto;\n  }\n"]))),E=function(n){Object(b.a)(t,n);var e=Object(h.a)(t);function t(){var n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))).state={pictures:[],modalShow:!1,largeImageURL:"",loading:!1,error:!1},n.onPictureClick=function(e){n.setState({modalShow:!0}),n.setState({largeImageURL:e})},n.onEsc=function(e){"Escape"===e.code&&n.setState({modalShow:!1})},n.onBackdropClick=function(e){e.target===e.currentTarget&&n.setState({modalShow:!1})},n}return Object(u.a)(t,[{key:"componentDidUpdate",value:function(n){var e=this,t=this.props,a=t.find,o=t.page;n!==this.props&&(this.setState({loading:!0}),N(a,o).then((function(t){var o=t.data;e.setState({loading:!1}),e.setState({error:!1}),0===o.hits.length&&e.setState({error:!0}),n.find===a&&(e.setState((function(n){return{pictures:[].concat(Object(k.a)(n.pictures),Object(k.a)(o.hits))}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})),n.find!==a&&e.setState({pictures:Object(k.a)(o.hits)})})))}},{key:"render",value:function(){var n=this,e=this.state,t=e.loading,a=e.pictures,o=e.modalShow,r=e.largeImageURL;return Object(j.jsx)(z,{children:t?Object(j.jsx)(I.a,{}):Object(j.jsxs)(j.Fragment,{children:[o&&Object(j.jsx)(w,{url:r,onEsc:this.onEsc,onBackdropClick:this.onBackdropClick}),Object(j.jsxs)("ul",{className:"ImageGallery",children:[this.state.error&&Object(j.jsx)("p",{children:"There are no images available"}),a.map((function(e){var t=e.id,a=e.webformatURL,o=e.largeImageURL;return Object(j.jsx)(y,{src:a,onPictureClick:n.onPictureClick,largeImageURL:o},t)}))]})]})})}}]),t}(s.Component),B=E,U=g.a.section(c||(c=Object(m.a)(['\n  .Searchbar {\n    top: 0;\n    left: 0;\n    position: sticky;\n    z-index: 1100;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 64px;\n    padding-right: 24px;\n    padding-left: 24px;\n    padding-top: 12px;\n    padding-bottom: 12px;\n    color: #fff;\n    background-color: #3f51b5;\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n    .SearchForm {\n      display: flex;\n      align-items: center;\n      width: 100%;\n      max-width: 600px;\n      background-color: #fff;\n      border-radius: 3px;\n      overflow: hidden;\n    }\n\n    .SearchForm-button {\n      display: inline-block;\n      width: 48px;\n      height: 48px;\n      border: 0;\n      background-image: url("https://image.flaticon.com/icons/svg/149/149852.svg");\n      background-size: 40%;\n      background-repeat: no-repeat;\n      background-position: center;\n      opacity: 0.6;\n      transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n      cursor: pointer;\n      outline: none;\n    }\n\n    .SearchForm-button:hover {\n      opacity: 1;\n    }\n\n    .SearchForm-button-label {\n      position: absolute;\n      width: 1px;\n      height: 1px;\n      padding: 0;\n      overflow: hidden;\n      clip: rect(0, 0, 0, 0);\n      white-space: nowrap;\n      clip-path: inset(50%);\n      border: 0;\n    }\n\n    .SearchForm-input {\n      display: inline-block;\n      width: 100%;\n      font: inherit;\n      font-size: 20px;\n      border: none;\n      outline: none;\n      padding-left: 4px;\n      padding-right: 4px;\n    }\n\n    .SearchForm-input::placeholder {\n      font: inherit;\n      font-size: 18px;\n    }\n  }\n']))),G=function(n){var e=n.onSubmit;return Object(j.jsx)(U,{children:Object(j.jsx)("header",{className:"Searchbar",children:Object(j.jsxs)("form",{className:"SearchForm",onSubmit:e,children:[Object(j.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(j.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(j.jsx)("input",{className:"SearchForm-input",type:"text",name:"find",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})})},R=function(n){Object(b.a)(t,n);var e=Object(h.a)(t);function t(){var n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))).state={pictures:null,loading:!1,page:1,find:null,enabled:!1},n.onSubmit=function(e){e.preventDefault();var t=e.target.find.value;console.log(t),t&&t!==n.state.find&&(n.setState({enabled:!0}),n.setState({find:t}),n.setState({page:1}))},n.onLoadMoreClick=function(){n.setState((function(n){return{page:n.page+=1}}))},n}return Object(u.a)(t,[{key:"render",value:function(){var n=this.state,e=n.page,t=n.find,a=n.enabled;return Object(j.jsxs)(x,{children:[Object(j.jsx)(G,{onSubmit:this.onSubmit}),Object(j.jsx)(B,{page:e,find:t}),a&&Object(j.jsx)(O,{onLoadMoreClick:this.onLoadMoreClick})]})}}]),t}(s.Component),M=R;t(77);p.a.render(Object(j.jsx)(M,{}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.c91f6868.chunk.js.map