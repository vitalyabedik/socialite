/*! For license information please see 30.2cdcc016.chunk.js.LICENSE.txt */
(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[30],{4030:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return H}});var s=r(5671),t=r(3144),o=r(136),i=r(5716),a=r(2791),l=r(7781),c=r(364),u=r(4930),f="Users_wrapper__OT2RO",d="Users_root__tKscV",p="Users_container__fRWCf",g="Users_usersHeader__LaH-t",h="Users_title__3iMuQ",_="Users_users__VlBFm",m=r(4942),v=r(885),j=r(1694),w=r.n(j),C="Pagination_pagination__U8zOJ",x="Pagination_pageNumber__DPNpC",U="Pagination_selectedPage__OzWfA",P="Pagination_button__FpH3j",N=r(184),F=function(e){for(var n=e.currentPage,r=e.pageSize,s=e.totalItemsCount,t=e.portionSize,o=void 0===t?10:t,i=e.onPageChanged,l=(0,a.useState)(Math.ceil(n/(o||10))),c=(0,v.Z)(l,2),u=c[0],f=c[1],d=Math.ceil(s/r),p=[],g=1;g<=d;g++)p.push(g);var h=Math.ceil(d/o),_=(u-1)*o+1,j=u*o;return(0,N.jsxs)("div",{className:C,children:[u>1&&(0,N.jsx)("button",{className:P,onClick:function(){f(u-1)},children:"PREV"}),p.filter((function(e){return e>=_&&e<=j})).map((function(e){return(0,N.jsx)("span",{className:w()((0,m.Z)({},U,n===e),x),onClick:function(){i(e)},children:e},e)})),h>u&&(0,N.jsx)("button",{className:P,onClick:function(){f(u+1)},children:"NEXT"})]})},b=r(1523),S="User_container__4L+kB",k="User_root__JUyZV",y="User_userPhoto__1J8oD",z="User_name__WlD78",Z="User_status__R27D+",I="User_buttonFollow__LlF-J",L="User_buttonUnfollow__sjbXd",O=r(1813),R=function(e){var n=e.user,r=e.followingInProgress,s=e.follow,t=e.unFollow,o=r.some((function(e){return e===n.id}));return(0,N.jsx)("div",{className:S,children:(0,N.jsxs)("div",{className:k,children:[(0,N.jsx)(b.OL,{to:"/profile/".concat(n.id),children:(0,N.jsx)("img",{className:y,src:n.photos.small?n.photos.small:O,alt:"user-image"})}),(0,N.jsx)("div",{className:z,children:n.name}),(0,N.jsx)("div",{className:Z,children:n.status?n.status:"No status"}),n.followed?(0,N.jsx)("button",{className:L,disabled:o,onClick:function(){var e;e=n.id,t(e)},children:"Unfollowing"}):(0,N.jsx)("button",{className:I,disabled:o,onClick:function(){var e;e=n.id,s(e)},children:"Following"})]})})},A="UsersFilteredButtons_root__oSj46",B="UsersFilteredButtons_button__Eo5Lq",D="UsersFilteredButtons_buttonSelected__0PWEq",M=function(e){var n=e.onFilterChanged,r=e.filter,s=function(e){return n(e)};return(0,N.jsxs)("div",{className:A,children:[(0,N.jsx)("button",{onClick:function(){return s({friend:null,term:r.term})},className:"".concat(B," ").concat(null===r.friend?D:""),children:"All"}),(0,N.jsx)("button",{onClick:function(){return s({friend:!0,term:r.term})},className:"".concat(B," ").concat(!0===r.friend?D:""),children:"Followed"}),(0,N.jsx)("button",{onClick:function(){return s({friend:!1,term:r.term})},className:"".concat(B," ").concat(!1===r.friend?D:""),children:"Unfollowed"})]})},V=function(e){var n=e.users,r=e.currentPage,s=e.pageSize,t=e.totalUsersCount,o=e.followingInProgress,i=e.filter,a=e.follow,l=e.unFollow,c=e.onPageChanged,u=e.onFilterChanged;return(0,N.jsx)("div",{className:f,children:(0,N.jsxs)("div",{className:d,children:[(0,N.jsxs)("div",{className:g,children:[(0,N.jsx)("h2",{className:h,children:"Users"}),(0,N.jsx)(M,{filter:i,onFilterChanged:u})]}),(0,N.jsxs)("div",{className:p,children:[(0,N.jsx)("div",{className:_,children:n.map((function(e){return(0,N.jsx)(R,{user:e,followingInProgress:o,follow:a,unFollow:l},e.id)}))}),(0,N.jsx)(F,{currentPage:r,pageSize:s,totalItemsCount:t,onPageChanged:c})]})]})})},q=r(9464),E=r(3449),J=r(1573),W=function(e){(0,o.Z)(r,e);var n=(0,i.Z)(r);function r(){var e;(0,s.Z)(this,r);for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return(e=n.call.apply(n,[this].concat(o))).onPageChanged=function(n){var r=e.props,s=r.pageSize,t=r.filter;e.props.getUsers(n,s,t)},e.onFilterChanged=function(n){var r=e.props.pageSize;e.props.getUsers(1,r,n)},e}return(0,t.Z)(r,[{key:"componentDidMount",value:function(){var e=this.props,n=e.currentPage,r=e.pageSize;(0,e.getUsers)(n,r,{term:"",friend:null})}},{key:"render",value:function(){return(0,N.jsx)(N.Fragment,{children:this.props.isLoading?(0,N.jsx)(q.p,{}):(0,N.jsx)(V,{users:this.props.users,currentPage:this.props.currentPage,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,follow:this.props.follow,unFollow:this.props.unFollow,onPageChanged:this.onPageChanged,followingInProgress:this.props.followingInProgress,onFilterChanged:this.onFilterChanged,filter:this.props.filter})})}}]),r}(a.Component),H=(0,l.qC)((0,c.$j)((function(e){return{users:(0,J.Rf)(e),pageSize:(0,J.b7)(e),totalUsersCount:(0,J.qZ)(e),currentPage:(0,J.FZ)(e),isLoading:(0,J.Vc)(e),followingInProgress:(0,J.yg)(e),filter:(0,J.sw)(e)}}),{setUsers:u.fv,setCurrentPage:u.Io,getUsers:E.Zw,follow:E.iR,unFollow:E.NK}))(W)},1694:function(e,n){var r;!function(){"use strict";var s={}.hasOwnProperty;function t(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var i=t.apply(null,r);i&&e.push(i)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var a in r)s.call(r,a)&&r[a]&&e.push(a);else e.push(r.toString())}}return e.join(" ")}e.exports?(t.default=t,e.exports=t):void 0===(r=function(){return t}.apply(n,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=30.2cdcc016.chunk.js.map