import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as h,i as f}from"./assets/vendor-BbbuE1sJ.js";const o=document.querySelector(".btn-start");o.setAttribute("disabled","");const r=document.querySelector(".time-input");let v=document.querySelector(".value[data-days]"),b=document.querySelector(".value[data-hours]"),y=document.querySelector(".value[data-minutes]"),p=document.querySelector(".value[data-seconds]"),a=0;const A={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<new Date?(f.warning({message:"🗙  Please choose a date in the future",position:"topRight",color:"#ef4040",messageColor:"white",icon:!1}),o.setAttribute("disabled","")):(o.removeAttribute("disabled",""),a=t[0])}};h(".time-input",A);function s(t){const u=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:l,minutes:d,seconds:m}}console.log(s(2e3));console.log(s(14e4));console.log(s(2414e4));class T{constructor(e){this.isActive=!1,this.onTick=e}start(){if(this.isActive)return;this.isActive=!0,o.setAttribute("disabled",""),r.setAttribute("disabled","");let e=a-new Date;this.intervalId=setInterval(()=>{e>=1e3?e-=1e3:(e=0,this.stop());const i=s(e);this.onTick(i)},1e3)}stop(){clearInterval(this.intervalId),this.isActive=!1,o.removeAttribute("disabled",""),r.removeAttribute("disabled","")}}function D({days:t,hours:e,minutes:i,seconds:n}){v.innerHTML=t,b.innerHTML=e,y.innerHTML=i,p.innerHTML=n}const c=new T(D);console.log(c);o.addEventListener("click",()=>c.start());
//# sourceMappingURL=1-timer.js.map
