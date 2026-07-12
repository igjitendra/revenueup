const json=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json;charset=UTF-8','cache-control':'no-store'}});
const clean=(v,max=1000)=>String(v||'').replace(/[<>]/g,'').trim().slice(0,max);
export async function onRequestPost({request,env}){
 try{
  if(!env.TELEGRAM_BOT_TOKEN||!env.TELEGRAM_CHAT_ID)return json({error:'Telegram is not configured'},503);
  const body=await request.json();if(body.website)return json({ok:true});
  const name=clean(body.name,100),email=clean(body.email,160),service=clean(body.service,120),message=clean(body.message,2500),phone=clean(body.phone,40);
  if(!name||!email||!message)return json({error:'Name, email and message are required'},400);
  const text=['🚀 New RevenueUp enquiry','','👤 '+name,'📧 '+email,phone?'📱 '+phone:'','🎯 '+service,'','💬 '+message,'','🕒 '+new Date().toISOString()].filter(Boolean).join('\n');
  const url='https://api.telegram.org/bot'+env.TELEGRAM_BOT_TOKEN+'/sendMessage';
  const response=await fetch(url,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({chat_id:env.TELEGRAM_CHAT_ID,text,disable_web_page_preview:true})});
  if(!response.ok)return json({error:'Telegram delivery failed'},502);return json({ok:true});
 }catch{return json({error:'Invalid request'},400)}
}
export function onRequest(){return json({error:'Method not allowed'},405)}
