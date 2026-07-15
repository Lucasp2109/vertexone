import Link from "next/link";

const company=<>
<b>VertexOne Technologies S.R.L.</b>
<br/>CUIT: 30-71784295-4<br/>Av. Independencia 1845, Piso 2, Oficina 712, Ciudad Autónoma de Buenos Aires, Argentina<br/>Correo: <a href="mailto:contacto@vertexone.com.ar">contacto@vertexone.com.ar</a>
<br/>Teléfono: <a href="tel:+541153682417">+54 11 5368-2417</a>
<br/>Dominio oficial: <a href="https://vertexone.netlify.app/">vertexone.netlify.app</a>
</>;
export function LegalPage({kind}:{kind:"legal"|"privacy"|"cookies"|"terms"}) {
 const data={
  legal:{title:"Aviso legal",intro:"Información identificatoria del titular de este sitio web y condiciones generales de uso.",sections:[
   ["Titular del sitio",company],["Objeto",<>Este sitio presenta información institucional y los servicios tecnológicos ofrecidos por VertexOne Technologies S.R.L. Su contenido es informativo y no constituye una oferta contractual.</>],["Responsabilidad",<>Se procura mantener la información actualizada y correcta. Sin embargo, pueden existir interrupciones, errores u omisiones. Los enlaces externos se incluyen como referencia y sus contenidos son responsabilidad de sus respectivos titulares.</>],["Propiedad intelectual",<>Los textos, elementos visuales y demás contenidos propios del sitio no pueden reproducirse con fines comerciales sin autorización previa, salvo los usos permitidos por la legislación aplicable.</>],["Consultas",<>Para consultas sobre este aviso, escribí a <a href="mailto:contacto@vertexone.com.ar">contacto@vertexone.com.ar</a>.</>]]},
  privacy:{title:"Política de privacidad",intro:"Cómo tratamos la información que decidís compartir mediante nuestro formulario de contacto.",sections:[
   ["Responsable",company],["Datos que recopilamos",<>El formulario puede recopilar nombre y apellido, empresa, correo electrónico, teléfono, asunto, mensaje y la constancia de aceptación de esta política. No solicitamos datos sensibles.</>],["Finalidad",<>Usamos esos datos únicamente para recibir, analizar y responder consultas comerciales o institucionales, dar seguimiento a la conversación y proteger el formulario frente a usos abusivos.</>],["Base y destinatarios",<>El tratamiento se realiza a partir de tu consentimiento al enviar el formulario. No compartimos los datos con terceros ni los enviamos a servicios externos mientras no exista un destino autorizado y debidamente configurado.</>],["Conservación",<>Los datos se conservarán durante 
30 días
 o hasta que solicites su eliminación, salvo que exista una obligación legal de conservarlos por otro plazo.</>],["Tus solicitudes",<>Podés pedir acceso, actualización, corrección o eliminación de tus datos escribiendo a <a href="mailto:contacto@vertexone.com.ar">contacto@vertexone.com.ar</a>. Para proteger la información, podremos solicitar una verificación razonable de identidad.</>],["Marco aplicable",<>Esta política se redacta considerando los principios generales de protección de datos personales aplicables en Argentina, incluida la Ley 25.326 y sus normas complementarias. Este texto es informativo y debe ser revisado por asesoramiento profesional antes de su publicación definitiva.</>],["Seguridad",<>Aplicamos medidas razonables para reducir accesos no autorizados. Ningún sistema conectado a Internet puede garantizar seguridad absoluta.</>]]},
  cookies:{title:"Política de cookies",intro:"Información sobre las tecnologías de almacenamiento utilizadas en este sitio.",sections:[
   ["Qué son",<>Las cookies y tecnologías similares permiten guardar pequeñas preferencias en tu dispositivo. Este sitio utiliza almacenamiento local para recordar la elección realizada en el banner de privacidad.</>],["Categorías",<>
<b>Necesarias:</b> recuerdan si aceptaste o rechazaste las preferencias. No se utilizan cookies opcionales de analítica, publicidad o personalización en la versión actual.</>],["Control",<>Podés aceptar, rechazar o configurar desde el banner. También podés borrar el almacenamiento del sitio desde la configuración de tu navegador; al hacerlo, volveremos a solicitar tu elección.</>],["Cambios",<>Si en el futuro se incorporan herramientas que utilicen cookies opcionales, esta política y el mecanismo de consentimiento deberán actualizarse antes de activarlas.</>],["Contacto",<>Podés consultar sobre esta política en <a href="mailto:contacto@vertexone.com.ar">contacto@vertexone.com.ar</a>.</>]]},
  terms:{title:"Términos y condiciones",intro:"Reglas generales aplicables al acceso y uso del sitio institucional.",sections:[
   ["Aceptación",<>El acceso y navegación por este sitio implican la aceptación de estos términos. Si no estás de acuerdo, debés abstenerte de utilizarlo.</>],["Uso del sitio",<>La persona usuaria se compromete a utilizar el sitio de forma lícita, sin intentar afectar su disponibilidad, seguridad o integridad ni acceder a áreas o datos no autorizados.</>],["Información y servicios",<>La descripción de servicios es general, no incluye precios ni garantiza resultados. Todo alcance, plazo, responsabilidad y condición comercial deberá acordarse por escrito para cada proyecto.</>],["Formulario",<>La información enviada debe ser verdadera y pertinente. En la versión actual, el formulario valida los datos localmente pero no los transmite hasta que se configure un destino autorizado.</>],["Enlaces externos",<>Los sitios externos están sujetos a sus propias condiciones y políticas. VertexOne Technologies S.R.L. no controla ni asume responsabilidad por sus contenidos.</>],["Modificaciones",<>Estos términos pueden actualizarse para reflejar cambios operativos o normativos. La versión vigente será la publicada en esta página.</>],["Ley aplicable",<>La interpretación de estos términos se regirá por la legislación de la República Argentina, sin perjuicio de los derechos irrenunciables que correspondan.</>],["Titular y contacto",company]]}
 }[kind];
 return <>
<header className="legal-header">
<div className="nav-wrap">
<Link className="logo" href="/">
<span>V1</span>

<b>VertexOne</b>
<small>Technologies</small>
</Link>
<Link className="btn ghost" href="/">← Volver al inicio</Link>
</div>
</header>
<main className="legal-page">
<div className="container">
<span className="eyebrow">INFORMACIÓN LEGAL</span>

<h1>{data.title}</h1>
<p className="legal-intro">{data.intro}</p>
<p className="updated">Última actualización: 15 de julio de 2026</p>
<div className="legal-layout">
<aside>
<b>Contenido</b>{data.sections.map(([h])=>
<a key={String(h)} href={`#${String(h).toLowerCase().replaceAll(" ","-")}`}>{h}</a>)}</aside>
<article>{data.sections.map(([h,c])=>
<section key={String(h)} id={String(h).toLowerCase().replaceAll(" ","-")}>
<h2>{h}</h2>
<div>{c}</div>
</section>)}</article>
</div>
</div>
</main>
<footer className="legal-foot">
<div className="container copyright">
<span>© {new Date().getFullYear()} VertexOne Technologies S.R.L.</span>

<span>
<Link href="/aviso-legal">Aviso legal</Link> · <Link href="/politica-de-privacidad">Privacidad</Link> · <Link href="/politica-de-cookies">Cookies</Link> · <Link href="/terminos-y-condiciones">Términos</Link>
</span>

</div>
</footer>
</>
}
