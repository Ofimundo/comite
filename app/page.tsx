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
            <a href="#roadmap-agosto">Ejecuciones Agosto</a>
            <a href="#roadmap-septiembre">Roadmap Septiembre</a>
            <a href="#infra">Infraestructura</a>
          </nav>
        </div>
      </header>

      <section className="hero" style={{ paddingBottom: 16 }}>
        <span className="eyebrow">Gerencia de Tecnología e Innovación</span>
        <h1 className="gradient-text">Comité de Gerentes</h1>
        <p className="sub">Reporte de cierre — Agosto 2026</p>
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
                <td>Finiquitos fase N°1</td>
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
                <td><span className="badge b-piloto">Acordado</span></td>
                <td>30 de Septiembre</td>
              </tr>
              <tr>
                <td>Municipalidad de Taltal</td>
                <td>Aprueba y Rechaza Facturas</td>
                <td><span className="badge b-dev">En Desarrollo</span></td>
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
                <td><span className="badge b-standby">En Evaluación</span></td>
                <td>Septiembre 2026</td>
              </tr>
              <tr>
                <td>Exser</td>
                <td>Proyectos de infraestructura</td>
                <td><span className="badge b-dev">Propuesta Entregada</span></td>
                <td>Octubre 2026</td>
              </tr>
              <tr>
                <td>Municipalidad de Atacama</td>
                <td>Automatización(Aceptación y rechazo)</td>
                <td><span className="badge b-standby">En Evaluación</span></td>
                <td>Octubre 2026</td>
              </tr>
              <tr>
                <td>Sodexo</td>
                <td>Digitalización de documentos</td>
                <td><span className="badge b-standby">Standby</span></td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="block" id="roadmap-agosto">
        <div className="section-head">
          <span className="bar"></span>
          <h2>Ejecuciones Agosto 2026</h2>
        </div>
        <div className="roadmap-grid">
          <div className="rm-card">
            <h4>Sitio Dreamtec</h4>
            <ul className="hito-list">
              <li>Configuración de contenedores analytics</li>
              <li>Carga de seo</li>
              <li>Conexión con Fintoc (Mov. bancarios)</li>
            </ul>
            <div className="weeks">
              <span className="week on">S1</span>
              <span className="week on">S2</span>
              <span className="week">S3</span>
              <span className="week">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Integraciones Dreamtec</h4>
            <ul className="hito-list">
              <li>Integración de mayoristas — se gestionaron las cuentas con los mayoristas (G. en Contabilidad)</li>
              <li>Integración de Bsale orden de compra</li>
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
              <li>Se oculta sección Daas</li>
              <li>Se incorpora el Agente al sitio</li>
              <li>Se inicia el QA</li>
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
              <li>Ajustes en el proceso</li>
              <li>QA Interno</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week on">S2</span>
              <span className="week">S3</span>
              <span className="week">S4</span>
            </div>
          </div>

          <div className="rm-card">
            <h4>Modelo de Atención</h4>
            <ul className="hito-list">
              <li>Modificación plataforma mesa de ayuda</li>
              <li>Reclamos</li>
              <li>Comunicados a clientes</li>
            </ul>
            <div className="weeks">
              <span className="week on">S1</span>
              <span className="week">S2</span>
              <span className="week on ">S3</span>
              <span className="week">S4</span>
            </div>
          </div>

          <div className="rm-card">
            <h4>Inventario TIC'S(Integración de anexo de contratos)</h4>
            <ul className="hito-list">
              <li>Desarrollo el anexo</li>
              <li>QA Interno</li>
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
            <h4>Generador de Firmas</h4>
            <ul className="hito-list">
              <li>Desarrollo Aplicativo </li>
              <li>Paso a producción </li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week">S2</span>
              <span className="week">S3</span>
              <span className="week on">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Plan de Cuentas</h4>
            <ul className="hito-list">
              <li>Se agrega opción de ingreso de equipos críticos y estratégicos</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week">S2</span>
              <span className="week">S3</span>
              <span className="week on">S4</span>
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
            <h4>Inyección Automática de Suministros</h4>
            <ul className="hito-list">
              <li>Notificación de alertas por correo electrónico (C. Vencido y C. Bloqueado se agrega área facturación)</li>
              <li>Se elimina regla ingreso manual/automático reciente</li>
              <li>Se omite alerta de equipo en proceso de retiro</li>
              <li>Entre otros</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week">S2</span>
              <span className="week on">S3</span>
              <span className="week">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Fase 2 Finiquitos ECRGroup</h4>
            <ul className="hito-list">
              <li>QA de generación y entrega de reporte a la DT</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week">S2</span>
              <span className="week">S3</span>
              <span className="week on ">S4</span>
            </div>
          </div>
        </div>
      </section>

      <section className="block" id="roadmap-septiembre">
        <div className="section-head">
          <span className="bar"></span>
          <h2>Roadmap Septiembre 2026</h2>
        </div>
        <div className="roadmap-grid">
          <div className="rm-card">
            <h4>Sitio Dreamtec</h4>
            <ul className="hito-list">
              <li>Paso a producción landing experiencia</li>
              <li>Implementación módulo cupones</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week on">S2</span>
              <span className="week">S3</span>
              <span className="week">S4</span>
            </div>
          </div>

          <div className="rm-card">
            <h4>Sitio Ofimundo</h4>
            <ul className="hito-list">
              <li>Entrenamiento del agente</li>
              <li>Reemplazo de información Salas Colaborativas</li>
              <li>Paso a producción</li>
            </ul>
            <div className="weeks">
              <span className="week on">S1</span>
              <span className="week on">S2</span>
              <span className="week">S3</span>
              <span className="week">S4</span>
            </div>
          </div>

          <div className="rm-card">
            <h4>WhatsApp</h4>
            <ul className="hito-list">
              <li>QA Servicios</li>
              <li>Capacitación </li>
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
              <li>• Ofiweb y Captura de facturas</li>
              <li>• Envío GR y Reportes técnicos</li>
              <li>• Reportes SGC Guías ALLIN</li>
              <li>• Impresión Guías y Cartas de cobranza</li>
              <li>• Envío de facturas no GR y sobreconsumo</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week on">S2</span>
              <span className="week on">S3</span>
              <span className="week">S4</span>
            </div>
          </div>

          <div className="rm-card">
            <h4>Fase 2 Finiquitos ECRGroup</h4>
            <ul className="hito-list">
              <li>QA Inyección automatica en DT</li>
              <li>QA Devolución de estados desde la DT</li>
              <li>Inicio Marcha blanca</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week on ">S2</span>
              <span className="week on">S3</span>
              <span className="week on">S4</span>
            </div>
          </div>

          <div className="rm-card">
            <h4>Pruebas Internas Reemplazo Electroneek ECR</h4>
            <ul className="hito-list">
              <li>Pruebas internas</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week">S2</span>
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
          Agosto 2026
        </h3>

        <div className="cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginBottom: 28 }}>
          {/* Card 1 */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <h3 style={{ margin: 0, fontSize: 15 }}>Reportes Automáticos</h3>
            </div>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.4, color: 'var(--muted)' }}>
              Generación de reportes automáticos de disponibilidad de infraestructura.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 style={{ margin: 0, fontSize: 15 }}>Integración Ofimundo y Hiway</h3>
            </div>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.4, color: 'var(--muted)' }}>
              Configuración de integración y colaboración Microsoft 365.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
              </div>
              <h3 style={{ margin: 0, fontSize: 15 }}>Firmas Corporativas</h3>
            </div>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.4, color: 'var(--muted)' }}>
              Automatización del despliegue masivo.
            </p>
          </div>

          {/* Card 4 */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 style={{ margin: 0, fontSize: 15 }}>Proceso de Mantención Equipos Usuarios</h3>
            </div>
            <ul style={{ margin: 0, paddingLeft: 16, fontSize: 12, color: 'var(--muted)', lineHeight: 1.45 }}>
              <li><strong>35</strong> mantenciones en total.</li>
              <li><strong>31</strong> mantenciones realizadas.</li>
              <li><strong>3</strong> cambios de equipos (Lucy, Daniela y Adán).</li>
              <li><strong>2</strong> no se han podido realizar (Luis Baros y Álvaro Vial).</li>
            </ul>
          </div>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy)', marginTop: 20, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--magenta)', display: 'inline-block' }}></span>
          Septiembre 2026
        </h3>

        <div className="cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {/* Card 1: Red Wi-Fi */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path></svg>
              </div>
              <h3 style={{ margin: 0, fontSize: 15 }}>Red Wi-Fi</h3>
            </div>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.4, color: 'var(--muted)' }}>
              Migración del servidor de administración de la red Wi-Fi.
            </p>
          </div>

          {/* Card 2: VPN */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
              <h3 style={{ margin: 0, fontSize: 15 }}>VPN</h3>
            </div>
            <ul style={{ margin: 0, paddingLeft: 16, fontSize: 12, color: 'var(--muted)', lineHeight: 1.45 }}>
              <li>VPN Site-to-Site entre Lota y Lampa.</li>
              <li>Evaluación de la implementación.</li>
            </ul>
          </div>

          {/* Card 3: Monitoreo de Seguridad */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 style={{ margin: 0, fontSize: 15 }}>Monitoreo de Seguridad</h3>
            </div>
            <p style={{ margin: 0, fontSize: 12.5, fontWeight: 600, color: 'var(--ink)' }}>
              Implementación de herramienta para centralización de eventos de seguridad:
            </p>
            <ul style={{ margin: 0, paddingLeft: 16, fontSize: 12, color: 'var(--muted)', lineHeight: 1.45 }}>
              <li>Análisis de logs.</li>
              <li>Detección de intrusiones en línea.</li>
            </ul>
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
          <p>Gracias por su atención al reporte de cierre Agosto 2026.</p>
          <small>Ofimundo · Tu transformación, nuestra pasión</small>
        </div>
      </footer>
    </>
  )
}
