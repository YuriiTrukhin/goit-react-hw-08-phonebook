(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{102:function(t,e,n){t.exports={form:"ContactForm_form__2DwWT",label:"ContactForm_label__yn7jv",input:"ContactForm_input__iHIIH",inputBtn:"ContactForm_inputBtn__1r7FQ"}},103:function(t,e,n){t.exports={alertBox:"Alert_alertBox__1nHBc",enter:"Alert_enter__aYL_-",enterActive:"Alert_enterActive__KCWbR",alertExit:"Alert_alertExit__2GO8W",exitActive:"Alert_exitActive__1QMWQ"}},104:function(t,e,n){t.exports={list:"ContactList_list__1w4vH",btn:"ContactList_btn__1LR8T",listItem:"ContactList_listItem__2WZ-2",enter:"ContactList_enter__3NvzV",enterActive:"ContactList_enterActive__Ywj69",exit:"ContactList_exit__3wC8G",exitActive:"ContactList_exitActive__2sPi7"}},105:function(t,e,n){t.exports={box:"Filter_box__3OwH1",input:"Filter_input__oUd0O",label:"Filter_label__2EAda"}},106:function(t,e,n){t.exports={container:"App_container__1qb-4",title:"App_title__3GoTy",appear:"App_appear__3su5B",appearActive:"App_appearActive__1fWuf"}},111:function(t,e,n){"use strict";n.r(e);var a=n(20),c=n(21),r=n(23),o=n(22),i=n(3),s=n(0),u=n(98),l=n(8),d=n(17),p=n(102),b=n.n(p),m=n(15),h=n.n(m),j=n(16);h.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com/";var f={addContact:function(t){var e=t.name,n=t.number;return function(t){t(j.a.addContactRequest()),h.a.post("/contacts",{name:e,number:n}).then((function(e){t(j.a.addContactSuccess(e.data))})).catch((function(e){return t(j.a.addContactError(e))}))}},fetchContacts:function(){return function(t){t(j.a.fetchContactsRequest()),h.a.get("/contacts").then((function(e){var n=e.data;t(j.a.fetchContactsSuccess(n))})).catch((function(e){return t(j.a.fetchContactsError(e))}))}},removeContact:function(t){return function(e){e(j.a.removeContactsRequest()),h.a.delete("/contacts/".concat(t)).then((function(){e(j.a.removeContactsSuccess(t))})).catch((function(t){return e(j.a.removeContactsError(t))}))}}},_=n(112),v=n(103),x=n.n(v),O=function(t){var e=t.contactAdded;return Object(i.jsx)(_.a,{in:e,timeout:250,classNames:x.a,unmountOnExit:!0,children:Object(i.jsx)("div",{className:x.a.alertBox,children:Object(i.jsx)("p",{children:"Contact already declared"})})})},C=function(t){return t.contacts.filter},A=function(t){return t.contacts.items},N=function(t){return t.contacts.items.filter((function(e){return e.name.toLowerCase().includes(t.contacts.filter.toLowerCase())}))},y=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:"",contactAdded:!1},t.handleChange=function(e){var n=e.target;t.setState(Object(l.a)({},n.name,n.value))},t.handleSubmit=function(e){if(e.preventDefault(),console.log(t.props.list),t.props.list.some((function(e){return e.name===t.state.name})))return t.setState({contactAdded:!0}),void setTimeout((function(){return t.setState({contactAdded:!1})}),2e3);t.props.addContact(Object(u.a)({},t.state)),t.setState({name:"",number:""})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=t.contactAdded;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(O,{contactAdded:a}),Object(i.jsx)("div",{children:Object(i.jsxs)("form",{className:b.a.form,action:"",onSubmit:this.handleSubmit,children:[Object(i.jsxs)("label",{className:b.a.label,htmlFor:"name",children:[" ","Name",Object(i.jsx)("input",{required:!0,className:b.a.input,type:"text",name:"name",value:e,placeholder:"name",onChange:this.handleChange})]}),Object(i.jsxs)("label",{className:b.a.label,htmlFor:"number",children:[" ","Number",Object(i.jsx)("input",{required:!0,className:b.a.input,type:"tel",name:"number",value:n,placeholder:"number",onChange:this.handleChange})]}),Object(i.jsx)("input",{className:b.a.inputBtn,type:"submit",value:"Add contuct"})]})})]})}}]),n}(s.Component),g={addContact:f.addContact},F=Object(d.b)((function(t){return{list:A(t)}}),g)(y),k=n(104),w=n.n(k),L=n(113),S=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var t=this;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(L.a,{component:"ul",className:w.a.list,children:this.props.list.map((function(e){return Object(i.jsx)(_.a,{classNames:w.a,timeout:250,children:Object(i.jsxs)("li",{className:w.a.listItem,children:[e.name," : ",e.number,Object(i.jsx)("button",{className:w.a.btn,type:"button",onClick:function(){return t.props.toDelete(e.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e.id)},e.id)}))})})}}]),n}(s.Component),R={toDelete:f.removeContact},B=Object(d.b)((function(t){return{list:N(t)}}),R)(S),E=n(105),q=n.n(E),D={filterRender:j.a.filterRender},W=Object(d.b)((function(t,e){return{filter:C(t)}}),D)((function(t){var e=t.filterRender,n=t.filter;return Object(i.jsxs)("div",{className:q.a.box,children:[Object(i.jsx)("label",{className:q.a.label,children:"Find contacts by name"}),Object(i.jsx)("input",{className:q.a.input,type:"text",value:n,onChange:function(t){return e(t.target.value)}})]})})),H=n(106),I=n.n(H),T=n(24),G=function(t){Object(r.a)(n,t);var e=Object(o.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.isAuthenticated?this.props.onFetchContacts():this.props.history.replace("/")}},{key:"componentDidUpdate",value:function(){this.props.isAuthenticated||this.props.history.replace("/")}},{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(_.a,{in:!0,appear:!0,timeout:5e3,classNames:I.a,children:Object(i.jsx)("h1",{className:I.a.title,children:"Phonebook"})}),Object(i.jsx)(F,{}),Object(i.jsx)("h2",{className:I.a.title,children:"Contacts"}),Object(i.jsx)(W,{}),Object(i.jsx)(B,{})]})}}]),n}(s.Component),Q={onFetchContacts:f.fetchContacts};e.default=Object(d.b)((function(t){return{isAuthenticated:T.a.isAuthenticated(t)}}),Q)(G)}}]);
//# sourceMappingURL=3.bb44615a.chunk.js.map