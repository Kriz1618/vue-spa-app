import{C as u,S as _,P as v,s as w}from"./Pagination.1da57b40.js";import{_ as y,r as i,o as a,c as o,b as n,a as s,F as c,d as S,t as d}from"./index.94d28c4c.js";const G={components:{Card:u,Search:_,Pagination:v},data:()=>({gifs:[],loading:!0,gifSearch:"inuyasha",limit:9,offset:0,total:0,next:!0,prev:!1}),created(){this.getGifs()},methods:{async getGifs(t=this.gifSearch){if(!t.trim()){w.fire({title:"Invalid search",icon:"error",showConfirmButton:!1,timer:3e3,timerProgressBar:!0});return}this.loading=!0;const r=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=PVJXvwcGkEPXBIJI3MVfjQnoeLwgJXF0&q=${t}&offset=${this.offset}&limit=${this.limit}`),{data:l,pagination:f}=await r.json();this.gifs=l,this.total=f.total_count,setTimeout(()=>{this.loading=!1},200)},async paginate(t=!0){this.loading||!t&&!this.offset||t&&this.total<=this.offset||(t?this.offset+=this.limit:this.offset-=this.limit,await this.getGifs(),this.next=this.offset+this.limit<this.total,this.prev=this.offset>0)},read(){return Math.min(this.offset+this.limit,this.total)}}},P=s("h1",null,"Search Gif",-1),B={class:"row"},k={class:"my-2 fw-bold fs-2"};function V(t,r,l,f,C,e){const g=i("search"),m=i("pagination"),p=i("card");return a(),o(c,null,[P,n(g,{onSearch:e.getGifs},null,8,["onSearch"]),n(m,{prev:t.prev,next:t.next,loading:t.loading,onPaginate:e.paginate},null,8,["prev","next","loading","onPaginate"]),s("div",B,[(a(!0),o(c,null,S(t.gifs,h=>(a(),o("div",{key:h.id,class:"col-12 col-md-4 g-3"},[n(p,{data:h},null,8,["data"])]))),128))]),s("div",k,[s("span",null,d(e.read())+"/"+d(t.total),1)])],64)}const I=y(G,[["render",V]]);export{I as default};
