"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

const services = [
  ["⌘", "Desarrollo de software empresarial", "Diseño e implementación de sistemas de gestión personalizados."],
  ["◫", "Aplicaciones web y móviles", "Desarrollo de plataformas adaptadas a empresas y comercios."],
  ["⇄", "Integración de APIs", "Conectamos sistemas internos con servicios externos de manera segura."],
  ["☁", "Infraestructura cloud", "Migración, administración y monitoreo de servicios en la nube."],
  ["⚙", "Automatización de procesos", "Optimización de tareas mediante flujos automatizados y herramientas digitales."],
  ["◇", "Consultoría tecnológica", "Asesoramiento estratégico para proyectos de innovación digital."],
];

const sectors = [["▦","Servicios financieros"],["✚","Salud"],["⬡","Industria"],["▤","Comercio y retail"],["◉","Educación"],["↗","Logística"]];

function Logo() { return <Link className="logo" href="#inicio" aria-label="VertexOne Technologies, inicio">
<span>V1</span>
<b>VertexOne</b>
<small>Technologies</small>
</Link> }

function CookieBanner() {
  const [open, setOpen] = useState(false); const [settings, setSettings] = useState(false);
  useEffect(() => { setOpen(!localStorage.getItem("vertex-cookie-choice")); }, []);
  const choose = (choice:string) => { localStorage.setItem("vertex-cookie-choice", choice); setOpen(false); };
  if (!open) return null;
  return <div className="cookie" role="dialog" aria-label="Preferencias de cookies">
<div>
<b>Tu privacidad importa</b>
<p>Usamos únicamente almacenamiento técnico para recordar tus preferencias. Las cookies opcionales permanecen desactivadas hasta que las autorices.</p>{settings && <div className="cookie-setting">
<span>
<b>Cookies necesarias</b>
<small>Siempre activas · permiten recordar esta elección.</small>
</span>
<input type="checkbox" checked disabled aria-label="Cookies necesarias activadas" />
</div>}</div>
<div className="cookie-actions">
<button className="btn ghost" onClick={()=>setSettings(!settings)}>Configurar</button>
<button className="btn ghost" onClick={()=>choose("rejected")}>Rechazar</button>
<button className="btn primary" onClick={()=>choose("accepted")}>Aceptar</button>
</div>
</div>
}

export default function Home() {
  const [menu,setMenu]=useState(false); const [sent,setSent]=useState(false);
  const submit=(e:FormEvent<HTMLFormElement>)=>{e.preventDefault(); const f=e.currentTarget; if(!f.checkValidity()){f.reportValidity();return;} setSent(true); f.reset();};
  return <>
    <a className="skip" href="#contenido">Saltar al contenido</a>
    <header>
<div className="nav-wrap">
<Logo/>
<button className="menu" aria-label="Abrir menú" aria-expanded={menu} onClick={()=>setMenu(!menu)}>☰</button>
<nav className={menu?"open":""} aria-label="Navegación principal">{[["Inicio","#inicio"],["Nosotros","#nosotros"],["Servicios","#servicios"],["Sectores","#sectores"],["Contacto","#contacto"],["Información legal","/aviso-legal"]].map(([n,h])=>
<Link key={n} href={h} onClick={()=>setMenu(false)}>{n}</Link>)}<Link className="btn primary nav-cta" href="#contacto">Solicitar información</Link>
</nav>
</div>
</header>
    <main id="contenido">
      <section className="hero" id="inicio">
<div className="container hero-grid">
<div>
<span className="eyebrow">SOFTWARE · CLOUD · AUTOMATIZACIÓN</span>
<h1>Soluciones tecnológicas para <em>impulsar tu negocio</em>
</h1>
<p>En VertexOne Technologies desarrollamos soluciones digitales orientadas a optimizar procesos, mejorar la conectividad y acompañar el crecimiento de empresas y organizaciones.</p>
<div className="actions">
<Link className="btn primary" href="#servicios">Conocer nuestros servicios <span>→</span>
</Link>
<Link className="btn ghost" href="#contacto">Contactarnos</Link>
</div>
<div className="trust">
<span>✓ Soluciones escalables</span>
<span>✓ Enfoque en seguridad</span>
<span>✓ Acompañamiento especializado</span>
</div>
</div>
<div className="tech-visual" aria-label="Ilustración abstracta de infraestructura tecnológica">
<div className="visual-label">
<i>
</i>Infraestructura conectada</div>
<div className="orb">
<span className="cloud">☁</span>
<b>Cloud</b>
<small>Disponibilidad y escala</small>
</div>{["API","WEB","DATA","APP"].map((x,i)=>
<span className={`node n${i+1}`} key={x}>{x}</span>)}<div className="dash-card">
<span>Estado de servicios</span>
<b>Operativo</b>
<i>
</i>
</div>
</div>
</div>
</section>
      <section className="section" id="nosotros">
<div className="container about-grid">
<div>
<span className="eyebrow">SOBRE NOSOTROS</span>
<h2>Tecnología orientada a <em>resultados</em>
</h2>
</div>
<div className="about-copy">
<p>VertexOne Technologies S.R.L. es una empresa argentina especializada en soluciones tecnológicas para empresas y organizaciones. Desarrollamos software empresarial, plataformas web, soluciones móviles e infraestructura cloud, acompañando a nuestros clientes en sus procesos de innovación y transformación digital.</p>
<p>Nuestro enfoque combina soluciones confiables, escalables y seguras que permiten optimizar procesos, reducir costos operativos y mejorar la productividad.</p>
<div className="facts">
<div>
<span>⌖</span>
<p>
<small>SEDE</small>
<b>Ciudad Autónoma de Buenos Aires, Argentina</b>
</p>
</div>
<div>
<span>◎</span>
<p>
<small>COBERTURA</small>
<b>Argentina, Uruguay, Chile y Paraguay</b>
</p>
</div>
</div>
</div>
</div>
</section>
      <section className="section pale" id="servicios">
<div className="container">
<div className="section-head">
<div>
<span className="eyebrow">NUESTROS SERVICIOS</span>
<h2>Tecnología que se adapta a <em>tu operación</em>
</h2>
</div>
<p>Diseñamos soluciones sólidas para resolver desafíos concretos y acompañar cada etapa de la evolución digital.</p>
</div>
<div className="cards">{services.map(([icon,title,desc],i)=>
<article className="service" key={title}>
<span className="num">0{i+1}</span>
<i className="service-icon">{icon}</i>
<h3>{title}</h3>
<p>{desc}</p>
<Link href="#contacto">Consultar servicio <span>→</span>
</Link>
</article>)}</div>
</div>
</section>
      <section className="section why">
<div className="container why-grid">
<div>
<span className="eyebrow light">POR QUÉ ELEGIRNOS</span>
<h2>Un aliado tecnológico para decisiones <em>más inteligentes</em>
</h2>
<p>Combinamos conocimiento técnico, organización y cercanía para construir soluciones alineadas con las necesidades reales de cada empresa.</p>
<Link className="btn white" href="#contacto">Hablemos de tu proyecto →</Link>
</div>
<ul>{["Experiencia en el desarrollo de soluciones tecnológicas.","Equipo especializado en desarrollo full stack, DevOps y cloud computing.","Soporte técnico especializado de lunes a viernes.","Metodologías ágiles para organizar entregas objetivas y eficientes.","Soluciones adaptadas a pequeñas, medianas y grandes empresas."].map((x,i)=>
<li key={x}>
<span>0{i+1}</span>{x}</li>)}</ul>
</div>
</section>
      <section className="section" id="sectores">
<div className="container">
<div className="section-head">
<div>
<span className="eyebrow">SECTORES</span>
<h2>Conocemos los desafíos de <em>cada industria</em>
</h2>
</div>
<p>Aplicamos tecnología con una mirada práctica sobre los procesos, las personas y el contexto de cada organización.</p>
</div>
<div className="sectors">{sectors.map(([i,t])=>
<div key={t}>
<span>{i}</span>
<b>{t}</b>
<small>Soluciones digitales a medida</small>
</div>)}</div>
</div>
</section>
      <section className="section contact" id="contacto">
<div className="container">
<div className="contact-title">
<span className="eyebrow light">CONTACTO</span>
<h2>Conversemos sobre tu <em>próximo proyecto</em>
</h2>
<p>Contanos qué necesita tu organización. Nuestro equipo analizará tu consulta y responderá dentro del horario de atención.</p>
</div>
<div className="contact-grid">
<aside>
<h3>VertexOne Technologies S.R.L.</h3>
<dl>
<div>
<dt>Dirección comercial</dt>
<dd>Av. Independencia 1845, Piso 2, Oficina 712<br/>Ciudad Autónoma de Buenos Aires, Argentina</dd>
</div>
<div>
<dt>Teléfono</dt>
<dd>
<a href="tel:+541153682417">+54 11 5368-2417</a>
</dd>
</div>
<div>
<dt>Correo corporativo</dt>
<dd>
<a href="mailto:contacto@vertexone.com.ar">contacto@vertexone.com.ar</a>
</dd>
</div>
<div>
<dt>Sitio web oficial</dt>
<dd>
<a href="https://vertexone.netlify.app/">vertexone.netlify.app</a>
</dd>
</div>
<div>
<dt>CUIT</dt>
<dd>30-71784295-4</dd>
</div>
<div>
<dt>Horario de atención</dt>
<dd>
lunes a viernes de 8 a 16
</dd>
</div>
</dl>
<a className="map" href="https://www.openstreetmap.org/search?query=Av.%20Independencia%201845%2C%20Buenos%20Aires" target="_blank" rel="noreferrer">
<span>⌖</span>
<div>
<b>Ver ubicación en el mapa</b>
<small>Av. Independencia 1845, CABA</small>
</div>
<i>↗</i>
</a>
</aside>
<form onSubmit={submit}>
<div className="form-head">
<h3>Solicitar información</h3>
<p>Todos los campos marcados con * son obligatorios.</p>
</div>
<div className="field-row">
<label>Nombre y apellido *<input name="nombre" autoComplete="name" required minLength={3}/>
</label>
<label>Empresa<input name="empresa" autoComplete="organization"/>
</label>
</div>
<div className="field-row">
<label>Correo electrónico *<input type="email" name="email" autoComplete="email" required/>
</label>
<label>Teléfono<input type="tel" name="telefono" autoComplete="tel" pattern="[0-9+() -]{7,20}"/>
</label>
</div>
<label>Asunto *<input name="asunto" required minLength={3}/>
</label>
<label>Mensaje *<textarea name="mensaje" rows={5} required minLength={10}>
</textarea>
</label>
<label className="check">
<input type="checkbox" required/> <span>Acepto la <Link href="/politica-de-privacidad">política de privacidad</Link> y el tratamiento de mis datos para responder esta consulta. *</span>
</label>
<div className="honeypot" aria-hidden="true">
<label>No completar<input name="website" tabIndex={-1} autoComplete="off"/>
</label>
</div>
<button className="btn primary submit" type="submit">Enviar consulta →</button>{sent&&<p className="success" role="status">Formulario validado correctamente. El envío está desactivado hasta configurar un destino autorizado.</p>}<small className="form-note">Este formulario no transmite información a servicios externos.</small>
</form>
</div>
</div>
</section>
    </main>
    <footer>
<div className="container footer-grid">
<div>
<Logo/>
<p>Soluciones digitales para empresas y organizaciones que buscan transformar su operación con tecnología confiable.</p>
</div>
<div>
<h3>Navegación</h3>
<Link href="#nosotros">Nosotros</Link>
<Link href="#servicios">Servicios</Link>
<Link href="#sectores">Sectores</Link>
<Link href="#contacto">Contacto</Link>
</div>
<div>
<h3>Información legal</h3>
<Link href="/aviso-legal">Aviso legal</Link>
<Link href="/politica-de-privacidad">Política de privacidad</Link>
<Link href="/politica-de-cookies">Política de cookies</Link>
<Link href="/terminos-y-condiciones">Términos y condiciones</Link>
</div>
<div>
<h3>Datos empresariales</h3>
<p>
<b>VertexOne Technologies S.R.L.</b>
<br/>CUIT 30-71784295-4<br/>Av. Independencia 1845, Piso 2, Oficina 712<br/>Ciudad Autónoma de Buenos Aires, Argentina<br/>
<a href="tel:+541153682417">+54 11 5368-2417</a>
<br/>
<a href="mailto:contacto@vertexone.com.ar">contacto@vertexone.com.ar</a>
</p>
</div>
</div>
<div className="container copyright">
<span>© {new Date().getFullYear()} VertexOne Technologies S.R.L. Todos los derechos reservados.</span>
<span>Sociedad de Responsabilidad Limitada · Argentina</span>
</div>
</footer>
<CookieBanner/>
  </>
}
