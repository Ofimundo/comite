export default function Page() {
  return (
    <>
      <header>
        <div className="header-inner">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Ofimundo-Office%20365-min-yeadHRGLJyAkI4Z134CcoMyv5zXq6X.png"
            alt="Logo de Ofimundo"
          />
          <nav>
            <a href="#resumen">Resumen</a>
            <a href="#servicios">Servicios</a>
            <a href="#propuestas">Prospectos &amp; Propuestas</a>
            <a href="#ejecuciones-septiembre">Ejecuciones Octubre</a>
            <a href="#roadmap-octubre">Roadmap Noviembre</a>
            <a href="#infra">Infraestructura</a>
          </nav>
        </div>
      </header>

      <section className="hero" style={{ paddingBottom: 16 }}>
        <span className="eyebrow">Gerencia de Tecnología e Innovación</span>
        <h1 className="gradient-text">Comité de Gerentes</h1>
        <p className="sub">Reporte de cierre — Octubre 2026</p>
      </section>

      <section className="block" id="resumen" style={{ paddingTop: 16, paddingBottom: 24 }}>
        <div className="section-head" style={{ marginBottom: 16 }}>
          <span className="bar"></span>
          <h2>Resumen Ejecutivo</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
          <div className="stat-card">
            <div className="stat-num gradient-text">09</div>
            <div className="stat-label">Clientes en Operación</div>
          </div>
          <div className="stat-card">
            <div className="stat-num gradient-text">10</div>
            <div className="stat-label">Proyectos Internos</div>
          </div>
          <div className="stat-card">
            <div className="stat-num gradient-text">100%</div>
            <div className="stat-label">Disponibilidad de Infraestructura</div>
          </div>
        </div>
      </section>

      <section className="block" id="servicios">
        <div className="section-head">
          <span className="bar"></span>
          <h2>Portafolio de clientes Externos en Operación</h2>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Tipo de Servicio</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Convatec</td>
                <td>Digitalización y Gestión Documental</td>
                <td><span className="badge b-activo">Activo</span></td>
              </tr>
              <tr>
                <td>Comisión Nacional de Acreditación</td>
                <td>Implementación de Tokens</td>
                <td><span className="badge b-activo">Activo</span></td>
              </tr>
              <tr>
                <td>Corpesca</td>
                <td>Proceso Facturas desde E-mail</td>
                <td><span className="badge b-activo">Activo</span></td>
              </tr>
              <tr>
                <td>Automóvil Club</td>
                <td>Aceptación y Rechazo de Facturas</td>
                <td><span className="badge b-activo">Activo</span></td>
              </tr>
              <tr>
                <td>M. Antofagasta</td>
                <td>Aceptación y Rechazo de Facturas</td>
                <td><span className="badge b-activo">Activo</span></td>
              </tr>
              <tr>
                <td>ECRGroup</td>
                <td>Finiquitos fase N°1 y N°2</td>
                <td><span className="badge b-activo">Activo</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="block" id="propuestas">
        <div className="section-head">
          <span className="bar"></span>
          <h2>Prospectos &amp; Propuestas</h2>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Tipo de Servicio</th>
                <th>Estado</th>
                <th>Fecha Estimada de Cierre</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Municipalidad de Antofagasta</td>
                <td>Cuentas Básicas</td>
                <td><span className="badge b-piloto">Postergado</span></td>
                <td>30 de Octubre</td>
              </tr>
              <tr>
                <td>Municipalidad de Taltal</td>
                <td>Aprueba y Rechaza Facturas</td>
                <td><span className="badge b-dev">En Gestión comercial</span></td>
                <td>30 de Diciembre</td>
              </tr>
              <tr>
                <td>Municipalidad San Pedro de Atacama</td>
                <td>Aprueba y Rechaza Facturas</td>
                <td><span className="badge b-standby">Por Presentar</span></td>
                <td>30 de Diciembre</td>
              </tr>
              <tr>
                <td>Universidad Católica del Norte</td>
                <td>Aprueba y Rechaza Facturas</td>
                <td><span className="badge b-standby">Por Presentar</span></td>
                <td>30 de Diciembre</td>
              </tr>
              <tr>
                <td>Beasociados SPA</td>
                <td>Proyecto de infraestructura</td>
                <td><span className="badge b-standby">Propuesta Entregada</span></td>
                <td>Noviembre 2026</td>
              </tr>
              <tr>
                <td>Exser</td>
                <td>Proyectos de infraestructura</td>
                <td><span className="badge b-standby">Propuesta Entregada</span></td>
                <td>Octubre 2026</td>
              </tr>
              <tr>
                <td>Sodexo</td>
                <td>Digitalización de documentos</td>
                <td><span className="badge b-standby">Standby</span></td>
                <td>—</td>
              </tr>
              <tr>
                <td>Hospital Militar</td>
                <td>Administración y monitoreo Soporte Usuarios </td>
                <td><span className="badge b-standby">Presentar Prototipo</span></td>
                <td>19 de Octubre</td>
              </tr>
              <tr>
                <td>Hospital Militar</td>
                <td>Departamento de Ingeniería Biomédica</td>
                <td><span className="badge b-standby">En espera fecha reunión</span></td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="block" id="ejecuciones-septiembre">
        <div className="section-head" style={{ alignItems: 'flex-start' }}>
          <span className="bar" style={{ marginTop: 4 }}></span>
          <div>
            <h2>Ejecuciones Octubre 2026</h2>
            <p style={{ margin: '4px 0 0', fontSize: '15px', color: 'var(--muted)', fontWeight: 500 }}>
              Principales entregables del mes
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 28 }}>
          {[
            { value: '10', label: 'Iniciativas Planificadas', color: '#5e9d72' },
            { value: '9', label: 'Entregadas', color: '#322590' },
            { value: '3', label: 'Casos con mejoras', color: '#c34253' },
            { value: '1', label: 'No realizado', color: '#d9ac4a' },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: 'var(--white)',
                border: '1px solid var(--line)',
                borderRadius: '16px',
                padding: '16px 20px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '110px',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '6px',
                  backgroundColor: item.color,
                  borderTopLeftRadius: '16px',
                  borderBottomLeftRadius: '16px',
                }}
              />
              <div style={{ textAlign: 'center', marginTop: '4px' }}>
                <span style={{ fontSize: '36px', fontWeight: 800, color: '#100e39', lineHeight: 1 }}>
                  {item.value}
                </span>
              </div>
              <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 500, paddingLeft: '4px' }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
        <div className="roadmap-grid">
          <div className="rm-card">
            <h4>Sitio Ofimundo</h4>
            <ul className="hito-list">
              <li>Cambio de contenido salas colaborativas</li>
              <li>Mejoras en agente</li>
              <li>QA </li>
              <li>Paso a produccion </li>
            </ul>
            <div className="weeks">
              <span className="week ">S1</span>
              <span className="week on">S2</span>
              <span className="week on ">S3</span>
              <span className="week on">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Sitio Dreamtec</h4>
            <ul className="hito-list">
              <li>Desarrollo modulo cupones </li>
              <li>Administración sección de marcas </li>
              <li>Actualiza página de garantia y devoluciones</li>
              <li>Actualiza página terminos y condiciones</li>
              <li>Desarrollo interfaz sección de marcas</li>
              <li>Paso a QA</li>

            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week">S2</span>
              <span className="week on">S3</span>
              <span className="week">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Cambios de usuarios</h4>
            <ul className="hito-list">
              <li>Ajustes en codigo reporte Tecnicos</li>
              <li>Cambio de usuario</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week on">S2</span>
              <span className="week on">S3</span>
              <span className="week">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Facturas de cortesia</h4>
            <ul className="hito-list">
              <li>Implementación UAT usuarios</li>
              <li>Segundo ciclo QA</li>
              <li>Paso a producción</li>
            </ul>
            <div className="weeks">
              <span className="week ">S1</span>
              <span className="week ">S2</span>
              <span className="week on ">S3</span>
              <span className="week ">S4</span>
            </div>
          </div>

          <div className="rm-card">
            <h4>Reemplazo electroneek ECR(*)</h4>
            <ul className="hito-list">
              <li>Desarrollo funcionalidad</li>
              <li>QA</li>
              <li>Paso a producción</li>
            </ul>
            <div className="weeks">
              <span className="week on ">S1</span>
              <span className="week on">S2</span>
              <span className="week">S3</span>
              <span className="week">S4</span>
            </div>
          </div>

          <div className="rm-card">
            <h4> ECR Finiquitos</h4>
            <ul className="hito-list">
              <li>Integración Captura Estados DT</li>
              <li>En ejecución manual y prueba cliente </li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week">S2</span>
              <span className="week on">S3</span>
              <span className="week ">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>WhatsApp</h4>
            <ul className="hito-list">
              <li>Paso a producción</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week">S2</span>
              <span className="week ">S3</span>
              <span className="week on">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Workflow Seguimiemto Comercial(*)</h4>
            <ul className="hito-list">
              <li>Desarrollo</li>
              <li>QA</li>
              <li>Paso a producción</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week on">S2</span>
              <span className="week on">S3</span>
              <span className="week">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Integración NDD(*)</h4>
            <ul className="hito-list">
              <li>QA de integración de contadores</li>
              <li>En proceso inyección de alertas</li>
            </ul>
            <div className="weeks">
              <span className="week on">S1</span>
              <span className="week ">S2</span>
              <span className="week ">S3</span>
              <span className="week ">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Gestión de Ticket Zonas Extremas</h4>
            <ul className="hito-list">
              <li>Pendiente información </li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week">S2</span>
              <span className="week">S3</span>
              <span className="week">S4</span>
            </div>
          </div>
        </div>
      </section>

      <section className="block" id="roadmap-octubre">
        <div className="section-head" style={{ alignItems: 'flex-start' }}>
          <span className="bar" style={{ marginTop: 4 }}></span>
          <div>
            <h2>Roadmap Noviembre 2026</h2>
            <p style={{ margin: '4px 0 0', fontSize: '15px', color: 'var(--muted)', fontWeight: 500 }}>
              Iniciativas propuestas
            </p>
          </div>
        </div>
        <div className="roadmap-grid">
          <div className="rm-card">
            <h4>Reemplazo electroneek ECR </h4>
            <ul className="hito-list">
              <li>Funcionalidad de gatillo del proceso sin Electroneek</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week ">S2</span>
              <span className="week on">S3</span>
              <span className="week ">S4</span>
            </div>
          </div>

          <div className="rm-card">
            <h4>Workflow Seguimiemto Comercial</h4>
            <ul className="hito-list">
              <li>Aplicar observaciones de la marcha blanca</li>
              <li>QA</li>
              <li>Paso a producción</li>
            </ul>
            <div className="weeks">
              <span className="week ">S1</span>
              <span className="week on">S2</span>
              <span className="week on">S3</span>
              <span className="week ">S4</span>
            </div>
          </div>

          <div className="rm-card">
            <h4>Integración NDD</h4>
            <ul className="hito-list">
              <li>Validación corrección del proveedor</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week">S2</span>
              <span className="week ">S3</span>
              <span className="week on">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Gestión de ticket zonas extremas </h4>
            <ul className="hito-list">
              <li>Implementación </li>
              <li>Paso a producción</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week ">S2</span>
              <span className="week on">S3</span>
              <span className="week">S4</span>
            </div>
          </div>

          <div className="rm-card">
            <h4>Centinella</h4>
            <ul className="hito-list">
              <li>Implementación infraestructura</li>
              <li>Diseño </li>
              <li>Desarrollo matriz de cumplimiento </li>
            </ul>
            <div className="weeks">
              <span className="week on">S1</span>
              <span className="week on">S2</span>
              <span className="week on">S3</span>
              <span className="week on">S4</span>
            </div>
          </div>

          <div className="rm-card">
            <h4>Sitio Hiway</h4>
            <ul className="hito-list">
              <li>Implementación</li>
              <li>QA</li>
              <li>Evalución de traslado de dominio</li>
              <li>Paso a producción</li>
            </ul>
            <div className="weeks">
              <span className="week on">S1</span>
              <span className="week on">S2</span>
              <span className="week on">S3</span>
              <span className="week ">S4</span>
            </div>
          </div>

          <div className="rm-card">
            <h4>Reemplazo Electroneek Ofimundo</h4>
            <ul className="hito-list">
              <li>Aplica cambios</li>
              <li>QA</li>
              <li>Paso a producción</li>
            </ul>
            <div className="weeks">
              <span className="week ">S1</span>
              <span className="week ">S2</span>
              <span className="week ">S3</span>
              <span className="week on">S4</span>
            </div>
          </div>

          <div className="rm-card">
            <h4>Revisión Productos clientes</h4>
            <ul className="hito-list">
              <li>Implementación</li>
              <li>QA Usuario</li>
              <li>Paso a producción</li>
            </ul>
            <div className="weeks">
              <span className="week on">S1</span>
              <span className="week on">S2</span>
              <span className="week on">S3</span>
              <span className="week ">S4</span>
            </div>
          </div>

          <div className="rm-card">
            <h4>Sitio Dreamtec</h4>
            <ul className="hito-list">
              <li>Desarrollo de priorizaciones</li>
              <li>QA</li>
              <li>Paso a producción</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week">S2</span>
              <span className="week">S3</span>
              <span className="week on">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Seguimiento despachos / N.req.</h4>
            <ul className="hito-list">
              <li>Desarrollo</li>
              <li>QA</li>
              <li>Paso a producción</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week ">S2</span>
              <span className="week ">S3</span>
              <span className="week on">S4</span>
            </div>
          </div>
        </div>
      </section>

      <section className="block" id="infra">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', background: 'var(--bg-soft)', padding: '4px 10px', borderRadius: '6px', border: '1px solid var(--line)' }}>
            RESUMEN EJECUTIVO
          </span>
        </div>
        <div className="section-head" style={{ marginBottom: 20 }}>
          <span className="bar"></span>
          <h2>Infraestructura, Redes y Soporte</h2>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy)', marginTop: 12, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--magenta)', display: 'inline-block' }}></span>
          Octubre 2026
        </h3>

        <div className="cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginBottom: 28 }}>
          {/* Card 1 */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <h3 style={{ margin: 0, fontSize: 15 }}>Migración de plataforma Sitio web Ofimundo</h3>
            </div>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.4, color: 'var(--muted)' }}>
              Dado la el uso de Base de datos se agregan las configuraciones de seguridad
            </p>
          </div>

          {/* Card 2 */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 style={{ margin: 0, fontSize: 15 }}>VPN Lota-Lampa</h3>
            </div>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.4, color: 'var(--muted)' }}>
              Implementación comunicación directa entre las redes corporativas
            </p>
          </div>

          {/* Card 3 */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
              </div>
              <h3 style={{ margin: 0, fontSize: 15 }}>Evalución de traslado DataCenter</h3>
            </div>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.4, color: 'var(--muted)' }}>
              Plan de trabajo -
              Identificacion de pruebas de replicación
            </p>
          </div>

          {/* Card 4 */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 style={{ margin: 0, fontSize: 15 }}>Proyecto Centinella</h3>
            </div>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.4, color: 'var(--muted)' }}>
              Definición de arquitectura y seguridad
            </p>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Ofimundo-Office%20365-min-yeadHRGLJyAkI4Z134CcoMyv5zXq6X.png"
            alt="Logo de Ofimundo"
          />
          <h3 className="gradient-text">Muchas gracias</h3>
          <p>Por su atención al reporte de cierre Octubre 2026.</p>
          <small>Ofimundo · Tu transformación, nuestra pasión</small>
        </div>
      </footer>
    </>
  )
}
