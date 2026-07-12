const json=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json;charset=UTF-8','cache-control':'no-store'}});
export async function onRequestPost({request,env}){
 const token=(request.headers.get('authorization')||'').replace(/^Bearer\s+/i,'');
 if(!env.ADMIN_SECRET||token!==env.ADMIN_SECRET)return json({error:'Unauthorized'},401);
 if(!env.TELEGRAM_BOT_TOKEN||!env.TELEGRAM_CHAT_ID)return json({error:'Telegram variables are missing'},503);
 const url='https://api.telegram.org/bot'+env.TELEGRAM_BOT_TOKEN+'/sendMessage';
 const response=await fetch(url,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({chat_id:env.TELEGRAM_CHAT_ID,text:'✅ RevenueUp admin test successful. Contact notifications are connected.'})});
 if(!response.ok)return json({error:'Telegram rejected the request'},502);return json({ok:true});
}
