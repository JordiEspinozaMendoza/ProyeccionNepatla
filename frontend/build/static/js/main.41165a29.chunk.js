(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(14),s=a.n(n),l=(a(65),a.p,a(17)),i=a(7),o=(a(66),a(108)),c=a(110),d=a(23),p=a(1);function u(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(o.a,{style:{backgroundColor:"#000 !important"},fixed:"top",expand:"lg",collapseOnSelect:!0,className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(p.jsx)(o.a.Brand,{href:"/",children:Object(p.jsx)("img",{src:"https://res.cloudinary.com/jordiespinoza/image/upload/v1621735707/PNbn_lkus8y.png",width:"170",height:"60",className:"d-inline-block align-top"})}),Object(p.jsx)(o.a.Toggle,{"aria-controls":"navigationBar"}),Object(p.jsx)(o.a.Collapse,{id:"navigationBar",children:Object(p.jsxs)(c.a,{className:"ml-auto",children:[Object(p.jsx)(d.LinkContainer,{to:"/",children:Object(p.jsxs)(c.a.Link,{children:[Object(p.jsx)("i",{className:"fas fa-home"})," Inicio"]})}),Object(p.jsx)(d.LinkContainer,{to:"/especies",children:Object(p.jsxs)(c.a.Link,{children:[" ",Object(p.jsx)("i",{className:"fas fa-store"})," Especies"]})}),Object(p.jsx)(d.LinkContainer,{to:"/maps",children:Object(p.jsxs)(c.a.Link,{children:[" ",Object(p.jsx)("i",{className:"fas fa-store"})," Mapa"]})})]})})]})})}var y=a(44),j=a(103),b=a(57);function h(){var e;return Object(p.jsx)("footer",{className:"bg-primary text-light d-flex align-items-center w-100 flex-column p-4",children:Object(p.jsxs)(j.a,{children:[Object(p.jsxs)(b.a,{className:"text-light",md:6,children:[Object(p.jsx)("h4",{className:"text-light",children:"Sobre el proyecto"}),Object(p.jsx)("span",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting"})]}),Object(p.jsxs)(b.a,(e={md:6,className:"text-light"},Object(y.a)(e,"className","text-light"),Object(y.a)(e,"children",[Object(p.jsx)("h4",{className:"text-light",children:"Links rapidos"}),Object(p.jsxs)("div",{style:{fontSize:"14px",color:"#fff"},children:[Object(p.jsx)("p",{className:"text-light",children:Object(p.jsx)(l.Link,{to:"/",className:"text-light",children:"Inicio"})}),Object(p.jsx)("p",{className:"text-light",children:Object(p.jsx)(l.Link,{to:"/catalogo/",className:"text-light",children:"Especies"})})]})]),e))]})})}a(75);var m=a(104);function f(){return Object(p.jsxs)("div",{className:"main d-flex justify-content-center w-100 mt-4 p-4 text-dark flex-column",children:[Object(p.jsx)("h1",{children:"En tus manos esta el futuro"}),Object(p.jsx)(m.a,{children:"Ver especies"})]})}var g=a(35),x=a(8),O=a(10),v=a(21),T=a(12),E=a.n(T),C=a(19),S="SPECIE_REGISTER_REQUEST",w="SPECIE_REGISTER_SUCESS",I="SPECIE_REGISTER_FAIL",k="SPECIE_REGISTER_RESET",L="SPECIE_LIST_REQUEST",_="SPECIE_LIST_SUCESS",N="SPECIE_LIST_FAIL",P="SPECIE_LIST_RESET",D="SPECIE_UPDATE_REQUEST",R="SPECIE_UPDATE_SUCESS",A="SPECIE_UPDATE_FAIL",F="SPECIE_UPDATE_RESET",z="SPECIE_DETAILS_REQUEST",G="SPECIE_DETAILS_SUCESS",U="SPECIE_DETAILS_FAIL",q="SPECIE_DETAILS_RESET",H="SPECIE_DELETE_REQUEST",M="SPECIE_DELETE_SUCESS",B="SPECIE_DELETE_FAIL",Q="SPECIE_DELETE_RESET",W=a(20),X=a.n(W),J=function(){return function(){var e=Object(C.a)(E.a.mark((function e(t,a){var r,n,s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:L}),r={headers:{"Content-Type":"application/json"}},e.next=5,X.a.get("api/species/getspecies/",r);case 5:n=e.sent,s=n.data,t({type:_,payload:s}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:N,payload:e.t0.response&&e.t0.response.data.detail?e.t0.response.data.detail:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a){return e.apply(this,arguments)}}()},K=function(e){return function(){var t=Object(C.a)(E.a.mark((function t(a,r){var n,s,l;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:z}),n={headers:{"Content-Type":"application/json"}},t.next=5,X.a.get("api/species/getspecie/".concat(e,"/"),n);case 5:s=t.sent,l=s.data,a({type:G,payload:l}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),a({type:U,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,a){return t.apply(this,arguments)}}()},V=["places"],Y={width:"100vw",height:"100vh"},Z={lat:32.533,lng:-117.05},$={styles:[{featureType:"all",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"all",elementType:"labels",stylers:[{visibility:"off"},{saturation:"-100"}]},{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40},{visibility:"off"}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"off"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#4d6059"}]},{featureType:"landscape",elementType:"geometry.stroke",stylers:[{color:"#4d6059"}]},{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{color:"#4d6059"}]},{featureType:"poi",elementType:"geometry",stylers:[{lightness:21}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{color:"#4d6059"}]},{featureType:"poi",elementType:"geometry.stroke",stylers:[{color:"#4d6059"}]},{featureType:"road",elementType:"geometry",stylers:[{visibility:"on"},{color:"#7f8d89"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#7f8d89"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#7f8d89"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#7f8d89"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#7f8d89"}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{color:"#7f8d89"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{color:"#7f8d89"}]},{featureType:"road.local",elementType:"geometry.stroke",stylers:[{color:"#7f8d89"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"all",stylers:[{color:"#2b3638"},{visibility:"on"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#2b3638"},{lightness:17}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#24282b"}]},{featureType:"water",elementType:"geometry.stroke",stylers:[{color:"#24282b"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.icon",stylers:[{visibility:"off"}]}],disableDefaultUI:!0,zoomControl:!0};function ee(e){var t=e.history,a=Object(v.d)({googleMapsApiKey:"AIzaSyAP_p_tz9vpl8fw0MHYDo99nc5L3aHaet4",libraries:V}),n=a.isLoaded,s=a.loadError,l=Object(r.useState)([]),i=Object(x.a)(l,2),o=(i[0],i[1]),c=Object(O.b)(),d=Object(O.c)((function(e){return e.specieList})),u=(d.loading,d.error,d.species);return Object(r.useEffect)((function(){c(J())}),[c,t]),s?"Error al cargar el mapa":n?Object(p.jsxs)("div",{style:{marginTop:"7vh",overflowX:"hidden",textAlign:"center"},children:[Object(p.jsx)("h5",{children:"Explora y conoce sobre las especies que se encuentran en peligro de extincion"}),Object(p.jsx)(v.a,{options:$,mapContainerStyle:Y,zoom:8,center:Z,onClick:function(e){o((function(t){return[].concat(Object(g.a)(t),[{lat:e.latLng.lat(),lng:e.latLng.lng(),time:new Date}])}))},children:null===u||void 0===u?void 0:u.map((function(e){return Object(p.jsx)(v.c,{position:{lat:parseFloat(e.latitude),lng:parseFloat(e.altitude)}},e.id)}))})]}):"Cargando mapa"}function te(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(f,{}),Object(p.jsx)(ee,{})]})}var ae=a(105),re=a(106);function ne(e){var t=e.history,a=Object(O.b)(),n=Object(O.c)((function(e){return e.specieRegister})),s=(n.loading,n.success),l=n.specie,i=(n.error,Object(O.c)((function(e){return e.specieList}))),o=(i.loading,i.error,i.species);Object(r.useEffect)((function(){a({type:k}),a(J()),s&&t.push("/species/edit/".concat(l.id))}),[a,t,s,l]);return Object(p.jsxs)(ae.a,{style:{marginTop:"20vh"},children:[Object(p.jsx)(m.a,{onClick:function(){a(function(){var e=Object(C.a)(E.a.mark((function e(t,a){var r,n,s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:S}),r={headers:{"Content-Type":"application/json"}},e.next=5,X.a.post("/api/species/create/",{},r);case 5:n=e.sent,s=n.data,t({type:w,payload:s}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:I,payload:e.t0.response&&e.t0.response.data.detail?e.t0.response.data.detail:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a){return e.apply(this,arguments)}}())},children:"Crear especie"}),Object(p.jsxs)(re.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,className:"table-sm mt-3",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"ID"}),Object(p.jsx)("th",{children:"Nombre"}),Object(p.jsx)("th",{})]})}),Object(p.jsx)("tbody",{children:null===o||void 0===o?void 0:o.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.id}),Object(p.jsx)("td",{children:e.name}),Object(p.jsx)("td",{children:Object(p.jsx)(d.LinkContainer,{to:"/species/edit/".concat(e.id,"/"),children:Object(p.jsx)(m.a,{variant:"dark",className:"btn-sm",children:"Editar"})})})]},e.id)}))})]})]})}var se=a(109),le=a(107);function ie(e){var t=e.children;return Object(p.jsx)(ae.a,{className:"py-5",children:Object(p.jsx)(j.a,{className:"justify-content-md-center",style:{width:"100%",margin:"0"},children:Object(p.jsx)(b.a,{xs:12,children:t})})})}function oe(e){var t=e.match,a=e.history,n=t.params.id,s=Object(r.useState)(""),l=Object(x.a)(s,2),i=l[0],o=l[1],c=Object(r.useState)(""),d=Object(x.a)(c,2),u=d[0],y=d[1],j=Object(r.useState)(),b=Object(x.a)(j,2),h=b[0],f=b[1],g=Object(r.useState)(),v=Object(x.a)(g,2),T=v[0],S=v[1],w=Object(r.useState)(),I=Object(x.a)(w,2),k=I[0],L=I[1],_=Object(r.useState)(),N=Object(x.a)(_,2),P=N[0],z=N[1],G=Object(r.useState)(),U=Object(x.a)(G,2),H=U[0],M=U[1],B=Object(r.useState)(),Q=Object(x.a)(B,2),W=Q[0],J=Q[1],V=Object(r.useState)(),Y=Object(x.a)(V,2),Z=Y[0],$=Y[1],ee=Object(r.useState)(),te=Object(x.a)(ee,2),ae=te[0],re=te[1],ne=Object(r.useState)(),oe=Object(x.a)(ne,2),ce=oe[0],de=oe[1],pe=Object(r.useState)(),ue=Object(x.a)(pe,2),ye=ue[0],je=ue[1],be=Object(r.useState)(),he=Object(x.a)(be,2),me=he[0],fe=he[1],ge=Object(O.b)(),xe=Object(r.useState)(""),Oe=Object(x.a)(xe,2),ve=Oe[0],Te=Oe[1],Ee=Object(r.useState)(""),Ce=Object(x.a)(Ee,2),Se=Ce[0],we=Ce[1],Ie=Object(O.c)((function(e){return e.specieDetails})),ke=(Ie.error,Ie.loading,Ie.success,Ie.specie),Le=Object(O.c)((function(e){return e.specieUpdate})),_e=(Le.error,Le.loading,Le.success);Object(r.useEffect)((function(){_e?(ge({type:F}),ge({type:q}),a.push("/especies/")):(null===ke||void 0===ke?void 0:ke.name)&&ke.id===Number(n)?(o(ke.name),y(ke.description),f(ke.risk),S(ke.habitat),L(ke.kingdom),z(ke.family),M(ke.ecosistem),J(ke.info_actual),$(ke.movement),re(ke.awareness),de(ke.latitude),je(ke.altitude),fe(ke.ong),we(ke.logo),Te(ke.img)):ge(K(n))}),[ke,n,_e,a,ge]);return Object(p.jsx)("div",{style:{marginTop:"10vh"},children:Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(ie,{children:[Object(p.jsx)("h1",{style:{width:"100%"},children:"Editar especie"}),Object(p.jsxs)(se.a,{onSubmit:function(e){e.preventDefault(),ge(function(e){return function(){var t=Object(C.a)(E.a.mark((function t(a,r){var n,s,l;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:D}),n={headers:{"Content-Type":"application/json"}},t.next=5,X.a.put("/api/species/update/".concat(e.id,"/"),e,n);case 5:s=t.sent,l=s.data,a({type:R,payload:l}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),a({type:A,payload:t.t0.response&&t.t0.response.data.detail?t.t0.response.data.detail:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,a){return t.apply(this,arguments)}}()}({name:i,id:n,description:u,risk:h,habitat:T,kingdom:k,family:P,ecocistem:H,info_actual:W,movement:Z,awareness:ae,latitude:ce,altitude:ye,ong:me}))},children:[Object(p.jsxs)(se.a.Group,{controlId:"name",children:[Object(p.jsx)(se.a.Label,{children:"Nombre"}),Object(p.jsx)(se.a.Control,{type:"text",placeholder:"Ingresa el nombre",value:i,onChange:function(e){return o(e.target.value)},required:!0})]}),Object(p.jsxs)(se.a.Group,{controlId:"name",children:[Object(p.jsx)(se.a.Label,{children:"Description"}),Object(p.jsx)(se.a.Control,{type:"text",placeholder:"Ingresa la description",value:u,onChange:function(e){return y(e.target.value)},required:!0})]}),Object(p.jsxs)(se.a.Group,{controlId:"risk",children:[Object(p.jsx)(se.a.Label,{children:"Riesgo"}),Object(p.jsx)(se.a.Control,{type:"text",placeholder:"Ingresa el riesgo",value:h,onChange:function(e){return f(e.target.value)},required:!0})]}),Object(p.jsxs)(se.a.Group,{controlId:"risk",children:[Object(p.jsx)(se.a.Label,{children:"Habitat"}),Object(p.jsx)(se.a.Control,{type:"text",placeholder:"Ingresa el habitat",value:T,onChange:function(e){return S(e.target.value)},required:!0})]}),Object(p.jsxs)(se.a.Group,{controlId:"risk",children:[Object(p.jsx)(se.a.Label,{children:"Reino"}),Object(p.jsx)(se.a.Control,{type:"text",placeholder:"Ingresa el reino",value:k,onChange:function(e){return L(e.target.value)},required:!0})]}),Object(p.jsxs)(se.a.Group,{controlId:"risk",children:[Object(p.jsx)(se.a.Label,{children:"Familia"}),Object(p.jsx)(se.a.Control,{type:"text",placeholder:"Ingresa la familia",value:P,onChange:function(e){return z(e.target.value)},required:!0})]}),Object(p.jsxs)(se.a.Group,{controlId:"ecosistem",children:[Object(p.jsx)(se.a.Label,{children:"Ecosistema"}),Object(p.jsx)(se.a.Control,{type:"text",placeholder:"Ingresa el ecosistema",value:H,onChange:function(e){return M(e.target.value)},required:!0})]}),Object(p.jsxs)(se.a.Group,{controlId:"infoActual",children:[Object(p.jsx)(se.a.Label,{children:"Informacion actual"}),Object(p.jsx)(se.a.Control,{type:"text",placeholder:"Ingresa la informacion actual",value:W,onChange:function(e){return J(e.target.value)},required:!0})]}),Object(p.jsxs)(se.a.Group,{controlId:"movement",children:[Object(p.jsx)(se.a.Label,{children:"Patron de movimiento"}),Object(p.jsx)(se.a.Control,{type:"text",placeholder:"Ingresa el patr\xf3n de movimiento",value:Z,onChange:function(e){return $(e.target.value)},required:!0})]}),Object(p.jsxs)(se.a.Group,{controlId:"awareness",children:[Object(p.jsx)(se.a.Label,{children:"Concientizaci\xf3n "}),Object(p.jsx)(se.a.Control,{type:"text",placeholder:"Ingresa la consientizaci\xf3n",value:ae,onChange:function(e){return re(e.target.value)},required:!0})]}),Object(p.jsxs)(se.a.Group,{controlId:"latitude",children:[Object(p.jsx)(se.a.Label,{children:"Latitud"}),Object(p.jsx)(se.a.Control,{type:"text",placeholder:"Ingresa la latitud",value:ce,onChange:function(e){return de(e.target.value)},required:!0})]}),Object(p.jsxs)(se.a.Group,{controlId:"Altitude",children:[Object(p.jsx)(se.a.Label,{children:"Altitud"}),Object(p.jsx)(se.a.Control,{type:"text",placeholder:"Ingresa la altitud",value:ye,onChange:function(e){return je(e.target.value)},required:!0})]}),Object(p.jsxs)(se.a.Group,{controlId:"ong",children:[Object(p.jsx)(se.a.Label,{children:"ONG"}),Object(p.jsx)(se.a.Control,{type:"text",placeholder:"Ingresa la ong",value:me,onChange:function(e){return fe(e.target.value)},required:!0})]}),Object(p.jsxs)(se.a.Group,{controlId:"image",children:[Object(p.jsx)(se.a.Label,{children:"Imagen"}),Object(p.jsx)("div",{className:"d-flex align-items-center w-100 justify-content-center",children:(null===ke||void 0===ke?void 0:ke.img)&&Object(p.jsx)(le.a,{className:"d-block my-4 shadow",style:{maxWidth:"330px",maxHeight:"250px"},xs:6,md:4,src:"https://res.cloudinary.com/jordiespinoza/".concat(ke.img)})}),Object(p.jsx)(se.a.Control,{type:"text",placeholder:"Ingresa la imagen",value:ve,onChange:function(e){return Te(e.target.value)},readOnly:!0}),Object(p.jsx)(se.a.File,{id:"image-file",label:"Elegir un archivo",custom:!0,onChange:function(){var e=Object(C.a)(E.a.mark((function e(t){var a,r,s,l,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.files[0],(r=new FormData).append("image",a),r.append("id",n),e.prev=4,s={headers:{"Content-Type":"application/json"}},e.next=8,X.a.post("/api/species/uploadimage/",r,s);case 8:l=e.sent,i=l.data,we(i),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}()})]}),Object(p.jsxs)(se.a.Group,{controlId:"image2",children:[Object(p.jsx)(se.a.Label,{children:"Logo"}),Object(p.jsx)("div",{className:"d-flex align-items-center w-100 justify-content-center",children:(null===ke||void 0===ke?void 0:ke.logo)&&Object(p.jsx)(le.a,{className:"d-block my-4 shadow",style:{maxWidth:"330px",maxHeight:"250px"},xs:6,md:4,src:"https://res.cloudinary.com/jordiespinoza/".concat(ke.logo)})}),Object(p.jsx)(se.a.Control,{type:"text",placeholder:"Ingresa el logo",value:Se,onChange:function(e){return we(e.target.value)},readOnly:!0}),Object(p.jsx)(se.a.File,{id:"image-file",label:"Elegir un archivo",custom:!0,onChange:function(){var e=Object(C.a)(E.a.mark((function e(t){var a,r,s,l,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.files[0],(r=new FormData).append("image",a),r.append("id",n),e.prev=4,s={headers:{"Content-Type":"application/json"}},e.next=8,X.a.post("/api/species/uploadlogo/",r,s);case 8:l=e.sent,i=l.data,we(i),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}()})]}),Object(p.jsx)(m.a,{variant:"primary",type:"submit",children:"Actualizar"})]})]})})})}var ce=a(58),de=a.n(ce);a(99);function pe(e){var t=e.history,a=e.match,n=a.params.id,s=Object(O.b)(),i=Object(O.c)((function(e){return e.specieDetails})),o=(i.error,i.loading,i.success,i.specie);return Object(r.useEffect)((function(){s(K(n))}),[n,t,a]),Object(p.jsxs)(ae.a,{style:{marginTop:"25vh",overflowX:"hidden"},children:[Object(p.jsx)(l.Link,{to:"/maps",children:Object(p.jsx)(m.a,{children:"Regresar al mapa"})}),Object(p.jsxs)(j.a,{className:"w-100",style:{marginTop:"3vh"},children:[Object(p.jsx)(b.a,{lg:4,children:Object(p.jsx)(de.a,{image:{src:"https://res.cloudinary.com/jordiespinoza/".concat(null===o||void 0===o?void 0:o.img),alt:"".concat(null===o||void 0===o?void 0:o.name),className:"img image-specie"},zoomImage:{src:"https://res.cloudinary.com/jordiespinoza/".concat(null===o||void 0===o?void 0:o.img),alt:"".concat(null===o||void 0===o?void 0:o.name)}})}),Object(p.jsxs)(b.a,{lg:6,children:[Object(p.jsx)("h1",{children:null===o||void 0===o?void 0:o.name}),Object(p.jsx)("hr",{}),Object(p.jsxs)("span",{children:["Riesgo: ",null===o||void 0===o?void 0:o.risk]}),Object(p.jsx)("p",{children:null===o||void 0===o?void 0:o.description}),Object(p.jsx)("h5",{children:"Habitat"}),Object(p.jsx)("p",{children:null===o||void 0===o?void 0:o.habitat}),Object(p.jsx)("hr",{}),Object(p.jsx)("h5",{children:"Reino"}),Object(p.jsx)("p",{children:null===o||void 0===o?void 0:o.kingdom}),Object(p.jsx)("hr",{}),Object(p.jsx)("h5",{children:"Familia"}),Object(p.jsx)("p",{children:null===o||void 0===o?void 0:o.family}),Object(p.jsx)("hr",{}),Object(p.jsx)("h5",{children:"Ecosistem"}),Object(p.jsx)("p",{children:null===o||void 0===o?void 0:o.ecosistem})]})]})]})}var ue=["places"],ye={width:"100vw",height:"100vh"},je={lat:32.533,lng:-117.05},be={styles:[{featureType:"all",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"all",elementType:"labels",stylers:[{visibility:"off"},{saturation:"-100"}]},{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40},{visibility:"off"}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"off"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#4d6059"}]},{featureType:"landscape",elementType:"geometry.stroke",stylers:[{color:"#4d6059"}]},{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{color:"#4d6059"}]},{featureType:"poi",elementType:"geometry",stylers:[{lightness:21}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{color:"#4d6059"}]},{featureType:"poi",elementType:"geometry.stroke",stylers:[{color:"#4d6059"}]},{featureType:"road",elementType:"geometry",stylers:[{visibility:"on"},{color:"#7f8d89"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#7f8d89"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#7f8d89"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#7f8d89"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#7f8d89"}]},{featureType:"road.arterial",elementType:"geometry.stroke",stylers:[{color:"#7f8d89"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{color:"#7f8d89"}]},{featureType:"road.local",elementType:"geometry.stroke",stylers:[{color:"#7f8d89"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"all",stylers:[{color:"#2b3638"},{visibility:"on"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#2b3638"},{lightness:17}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#24282b"}]},{featureType:"water",elementType:"geometry.stroke",stylers:[{color:"#24282b"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels.icon",stylers:[{visibility:"off"}]}],disableDefaultUI:!0,zoomControl:!0};function he(e){var t=e.history,a=Object(v.d)({googleMapsApiKey:"AIzaSyAP_p_tz9vpl8fw0MHYDo99nc5L3aHaet4",libraries:ue}),n=a.isLoaded,s=a.loadError,l=Object(r.useState)([]),i=Object(x.a)(l,2),o=(i[0],i[1]),c=Object(r.useState)(null),u=Object(x.a)(c,2),y=u[0],j=u[1],b=Object(O.b)(),h=Object(O.c)((function(e){return e.specieList})),f=(h.loading,h.error,h.species);return Object(r.useEffect)((function(){b(J())}),[b,t]),s?"Error al cargar el mapa":n?Object(p.jsxs)("div",{style:{marginTop:"7vh",overflowX:"hidden",textAlign:"center"},children:[Object(p.jsx)("h5",{children:"Explora y conoce sobre las especies que se encuentran en peligro de extincion"}),Object(p.jsxs)(v.a,{options:be,mapContainerStyle:ye,zoom:8,center:je,onClick:function(e){o((function(t){return[].concat(Object(g.a)(t),[{lat:e.latLng.lat(),lng:e.latLng.lng(),time:new Date}])}))},children:[null===f||void 0===f?void 0:f.map((function(e){return Object(p.jsx)(v.c,{position:{lat:parseFloat(e.latitude),lng:parseFloat(e.altitude)},icon:{url:"https://res.cloudinary.com/jordiespinoza/".concat(e.logo),scaledSize:new window.google.maps.Size(60,60),origin:new window.google.maps.Point(0,0),anchor:new window.google.maps.Point(15,15)},onClick:function(){return j({latitude:parseFloat(e.latitude),altitude:parseFloat(e.altitude),name:e.name,id:e.id,description:e.description})}},e.id)})),y?Object(p.jsx)(v.b,{position:{lat:y.latitude,lng:y.altitude},onCloseClick:function(){return j(null)},children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h5",{children:y.name}),Object(p.jsx)("p",{children:y.description}),Object(p.jsx)(d.LinkContainer,{to:"species/".concat(y.id,"/"),children:Object(p.jsx)(m.a,{variant:"primary",children:"Ver mas"})})]})}):null]})]}):"Cargando mapa"}var me=function(){return Object(p.jsxs)(l.HashRouter,{children:[Object(p.jsx)(u,{}),Object(p.jsx)(i.d,{path:"/",component:te,exact:!0}),Object(p.jsx)(i.d,{path:"/especies",component:ne,exact:!0}),Object(p.jsx)(i.d,{path:"/maps",component:he,exact:!0}),Object(p.jsx)(i.d,{path:"/species/edit/:id/",component:oe,exact:!0}),Object(p.jsx)(i.d,{path:"/species/:id/",component:pe,exact:!0}),Object(p.jsx)(h,{})]})},fe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,111)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),r(e),n(e),s(e),l(e)}))},ge=a(28),xe=a(59),Oe=a(60),ve=Object(ge.combineReducers)({specieUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return{loading:!0};case R:return{loading:!1,success:!0,message:t.payload};case A:return{loading:!1,success:!1,error:t.payload};case F:return{};default:return e}},specieDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return{loading:!0};case G:return{loading:!1,success:!0,specie:t.payload};case U:return{loading:!1,success:!1,error:t.payload};case q:return{};default:return e}},specieDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return{loading:!0};case M:return{loading:!1,success:!0,message:t.payload};case B:return{loading:!1,success:!1,error:t.payload};case Q:return{};default:return e}},specieList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return{loading:!0};case _:return{loading:!1,success:!0,species:t.payload};case N:return{loading:!1,success:!1,error:t.payload};case P:return{};default:return e}},specieRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return{loading:!0};case w:return{loading:!1,success:!0,specie:t.payload};case I:return{loading:!1,success:!1,error:t.payload};case k:return{};default:return e}}}),Te=[xe.a],Ee=Object(ge.createStore)(ve,{},Object(Oe.composeWithDevTools)(ge.applyMiddleware.apply(void 0,Te)));a(100);s.a.render(Object(p.jsx)(O.a,{store:Ee,children:Object(p.jsx)(me,{})}),document.getElementById("root")),fe()},65:function(e,t,a){},66:function(e,t,a){},75:function(e,t,a){},99:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.41165a29.chunk.js.map