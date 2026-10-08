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
            <a href="#roadmap-septiembre">Ejecuciones Agosto</a>
            <a href="#roadmap-octubre">Roadmap Septiembre</a>
            <a href="#infra">Infraestructura</a>
          </nav>
        </div>
      </header>

      <section className="hero" style={{ paddingBottom: 16 }}>
        <span className="eyebrow">Gerencia de Tecnología e Innovación</span>
        <h1 className="gradient-text">Comité de Gerentes</h1>
        <p className="sub">Reporte de cierre — Septiembre 2026</p>
      </section>

      <section className="block" id="resumen" style={{ paddingTop: 16, paddingBottom: 24 }}>
        <div className="section-head" style={{ marginBottom: 16 }}>
          <span className="bar"></span>
          <h2>Resumen Ejecutivo</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
          <div className="stat-card">
            <div className="stat-num gradient-text">10</div>
            <div className="stat-label">Clientes en Operación</div>
          </div>
          <div className="stat-card">
            <div className="stat-num gradient-text">09</div>
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
                <td>Sistema para depto Biomedica  </td>
                <td><span className="badge b-standby">En espera fecha reunión</span></td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="block" id="roadmap-agosto">
        <div className="section-head">
          <span className="bar"></span>
          <h2>Ejecuciones Septiembre  2026</h2>
        </div>
        <div className="roadmap-grid">
          <div className="rm-card">
            <h4>Sitio Dreamtec</h4>
            <ul className="hito-list">
              <li>Landing</li>
              <li>Conexion Google Analytics</li>
              <li>Mejoras velosidad del sitio </li>
            </ul>
            <div className="weeks">
              <span className="week ">S1</span>
              <span className="week on">S2</span>
              <span className="week on ">S3</span>
              <span className="week">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Sitio HIway</h4>
            <ul className="hito-list">
              <li>Desarrollo prototipo nuevo sitio</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week">S2</span>
              <span className="week on">S3</span>
              <span className="week">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Sitio Ofimundo</h4>
            <ul className="hito-list">
              <li>Cambio de contenido en salas colaborativas</li>
              <li>Cambio en agente(Usa dos IA para mantener tokens, en entrenamiento)</li>
              <li>Desarrollo versión opcional</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week on">S2</span>
              <span className="week on">S3</span>
              <span className="week">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>WhatsApp</h4>
            <ul className="hito-list">
              <li>QA Usuarios</li>
            </ul>
            <div className="weeks">
              <span className="week ">S1</span>
              <span className="week on">S2</span>
              <span className="week on ">S3</span>
              <span className="week on ">S4</span>
            </div>
          </div>

          <div className="rm-card">
            <h4>Integración NDD</h4>
            <ul className="hito-list">
              <li>Integración con API</li>
              <li>Capturas de contadores</li>
            </ul>
            <div className="weeks">
              <span className="week on">S1</span>
              <span className="week">S2</span>
              <span className="week">S3</span>
              <span className="week on">S4</span>
            </div>
          </div>

          <div className="rm-card">
            <h4> Prediagnosticos tecnicos</h4>
            <ul className="hito-list">
              <li>Visitas Tecnico(1° Visita - 2° Visita)</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week">S2</span>
              <span className="week">S3</span>
              <span className="week on">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Reemplazo Electroneek</h4>
            <ul className="hito-list">
              <li>M. Antofagasta - OK </li>
              <li> ECRGroup - En proceso</li>
              <li> Consiliación bancaria - Pendiente</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week">S2</span>
              <span className="week on">S3</span>
              <span className="week on">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Plan de Cuentas</h4>
            <ul className="hito-list">
              <li>Se agrega la razón de la clasificación de equipos(Críticos y estratégicos)</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week">S2</span>
              <span className="week on">S3</span>
              <span className="week">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Aceptación y Rechazo de Facturas M. Antofagasta</h4>
            <ul className="hito-list">
              <li>Cambio de parámetro inferiores a un limite en especifico</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week">S2</span>
              <span className="week">S3</span>
              <span className="week on">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Cambio Usuarios en Base de datos</h4>
            <ul className="hito-list">
              <li>Total 17 funcionalidades</li>
              <li>11 - OK </li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week on">S2</span>
              <span className="week on">S3</span>
              <span className="week on">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Fase 2 Finiquitos ECRGroup</h4>
            <ul className="hito-list">
              <li>Habilitación inyección en la DT</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week">S2</span>
              <span className="week on">S3</span>
              <span className="week">S4</span>
            </div>
          </div>
        </div>
      </section>

      <section className="block" id="roadmap-septiembre">
        <div className="section-head">
          <span className="bar"></span>
          <h2>Roadmap Octubre 2026</h2>
        </div>
        <div className="roadmap-grid">
          <div className="rm-card">
            <h4>Sitio Dreamtec</h4>
            <ul className="hito-list">
              <li>Se realizo la integracion Cubbo</li>
              <li> Funcionalidad Cupones</li>
              <li> Funcionalidad Mayoristas(TecnoGlobal)</li>
              <li>Paso a producción</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week on">S2</span>
              <span className="week on">S3</span>
              <span className="week on">S4</span>
            </div>
          </div>

          <div className="rm-card">
            <h4>Sitio Ofimundo</h4>
            <ul className="hito-list">
              <li>QA Usuario</li>
              <li>Paso a producción</li>
            </ul>
            <div className="weeks">
              <span className="week ">S1</span>
              <span className="week ">S2</span>
              <span className="week on">S3</span>
              <span className="week on">S4</span>
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
              <span className="week on">S3</span>
              <span className="week">S4</span>
            </div>
          </div>

          <div className="rm-card">
            <h4>Integración Dreamtec</h4>
            <ul className="hito-list">
              <li>Comunicados de Starkom</li>
              <li>Generación de ordenes de compra</li>
              <li>Consulta de precios</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week">S2</span>
              <span className="week on">S3</span>
              <span className="week">S4</span>
            </div>
          </div>

          <div className="rm-card">
            <h4>Cambio de Usuario</h4>
            <ul className="hito-list">
              <li>Reemplazo en los aplicativos:</li>
              <li>• Envío GR y Reportes técnicos</li>
              <li>• Reportes SGC Guías ALLIN</li>
              <li>• Impresión Guías y Cartas de cobranza</li>
              <li>• Envío de facturas no GR y sobreconsumo</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week on">S2</span>
              <span className="week">S3</span>
              <span className="week">S4</span>
            </div>
          </div>

          <div className="rm-card">
            <h4>Fase 2 Finiquitos ECRGroup</h4>
            <ul className="hito-list">
              <li> Paso a producción</li>
              <li>Inyección DT</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week">S2</span>
              <span className="week on">S3</span>
              <span className="week on">S4</span>
            </div>
          </div>

          <div className="rm-card">
            <h4>Reemplazo Electroneek</h4>
            <ul className="hito-list">
              <li>ECRGroup - En proceso</li>
              <li>Consiliación bancaria - Pendiente</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week">S2</span>
              <span className="week on">S3</span>
              <span className="week on">S4</span>
            </div>
          </div>

          <div className="rm-card">
            <h4>Facturas de Cortesía</h4>
            <ul className="hito-list">
              <li>Ajustes en desarrollo</li>
              <li>QA Usuario</li>
              <li>Paso a producción</li>
            </ul>
            <div className="weeks">
              <span className="week ">S1</span>
              <span className="week on">S2</span>
              <span className="week on">S3</span>
              <span className="week">S4</span>
            </div>
          </div>

          <div className="rm-card">
            <h4>Worflow Seguimiento Comercial</h4>
            <ul className="hito-list">
              <li>Implemnetación</li>
              <li>QA Usuario</li>
              <li>Paso a producción</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week">S2</span>
              <span className="week on">S3</span>
              <span className="week on">S4</span>
            </div>
          </div>

          <div className="rm-card">
            <h4>Gestión de ticket Zonas Extremas </h4>
            <ul className="hito-list">
              <li>Carga de datos clasificados </li>
              <li>Desarrollo de registro y alerta de SLA(solicitud de pase, Asiganción de pase)</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week">S2</span>
              <span className="week">S3</span>
              <span className="week on">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Construcción Firmas Grupo Empresarial OM</h4>
            <ul className="hito-list">
              <li>Desarrollo firmas</li>
              <li>Instalación Firmas </li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week on">S2</span>
              <span className="week on">S3</span>
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
          Septiembre 2026
        </h3>

        <div className="cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginBottom: 28 }}>
          {/* Card 1 */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <h3 style={{ margin: 0, fontSize: 15 }}>Wazuh-Ciberseguridad</h3>
            </div>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.4, color: 'var(--muted)' }}>
              Monitoreo de seguridad y alertas automaticas
            </p>
          </div>

          {/* Card 2 */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 style={{ margin: 0, fontSize: 15 }}>Automatización de alertas Oficore-Teams</h3>
            </div>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.4, color: 'var(--muted)' }}>
              Notificaciones automaticas de ticket en riesgo o fuera de SLA.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
              </div>
              <h3 style={{ margin: 0, fontSize: 15 }}>Proxmox</h3>
            </div>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.4, color: 'var(--muted)' }}>
              Implemnetación de plataforma de virtualización.
            </p>
          </div>

          {/* Card 4 */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 style={{ margin: 0, fontSize: 15 }}>Migración servidor Unifi</h3>
            </div>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.4, color: 'var(--muted)' }}>
              Migración a servidor Linux centralizando la administración de dispositivos de red
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
          <p>Por su atención al reporte de cierre Septiembre 2026.</p>
          <small>Ofimundo · Tu transformación, nuestra pasión</small>
        </div>
      </footer>
    </>
  )
}
