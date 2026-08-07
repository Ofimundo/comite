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
            <a href="#propuestas">Propuestas</a>
            <a href="#roadmap-julio">Ejecuciones Julio</a>
            <a href="#roadmap-agosto">Roadmap Agosto</a>
            <a href="#infra">Infraestructura</a>
          </nav>
        </div>
      </header>

      <section className="hero" style={{ paddingBottom: 16 }}>
        <span className="eyebrow">Gerencia de Tecnología e Innovación</span>
        <h1 className="gradient-text">Comité de Gerentes · Cierre de Gestión</h1>
        <p className="sub">Reporte de cierre — Julio 2026</p>
      </section>

      <section className="block" id="resumen" style={{ paddingTop: 16, paddingBottom: 24 }}>
        <div className="section-head" style={{ marginBottom: 16 }}>
          <span className="bar"></span>
          <h2>Resumen Ejecutivo del Portafolio</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
          <div className="stat-card">
            <div className="stat-num gradient-text">08</div>
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
                <td><span className="badge b-activo">Activo – Con solicitud activa</span></td>
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
                <td>Corpesca</td>
                <td>Proceso Facturas desde E-mail</td>
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
          <h2>Propuestas en Espera o Evaluación</h2>
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
                <td>CNA</td>
                <td>Tokens físicos MFA(Integración M365 & Fortinet)</td>
                <td><span className="badge b-activo">Propuesta Adjudicada</span></td>
              </tr>
              <tr>
                <td>Municipalidad de Atacama</td>
                <td>Automatización(Aceptación y rechazo)</td>
                <td><span className="badge b-standby">En Evaluación</span></td>
              </tr>
              <tr>
                <td>Automovil Club</td>
                <td>Automatización(Aceptación y rechazo)</td>
                <td><span className="badge b-standby">En Evaluación</span></td>
              </tr>
              <tr>
                <td>Sodexo</td>
                <td>Digitalización de documentos</td>
                <td><span className="badge b-standby">En Evaluación</span></td>
              </tr>
              <tr>
                <td>Municipalidad de Antofagasta</td>
                <td>Automatización(Cuentas basicas)</td>
                <td><span className="badge b-piloto">Piloto</span></td>
              </tr>
              <tr>
                <td>B. Asociados</td>
                <td>Proyecto de infraestructura</td>
                <td><span className="badge b-standby">En Evaluación</span></td>
              </tr>
              <tr>
                <td>Exser</td>
                <td>Proyectos de infraestructura</td>
                <td><span className="badge b-dev">Propuesta Entregada</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="block" id="roadmap-julio">
        <div className="section-head">
          <span className="bar"></span>
          <h2>Ejecuciones Julio 2026</h2>
        </div>
        <div className="roadmap-grid">
          <div className="rm-card">
            <h4>Sitio Dreamtec</h4>
            <ul className="hito-list">
              <li>Habilitación Landing Experiencias</li>
              <li>Histórico Base de datos cliente</li>
              <li>Mejoras módulo admin sitio</li>
              <li>Campaña día del Niño</li>
            </ul>
            <div className="weeks">
              <span className="week on">S1</span>
              <span className="week on">S2</span>
              <span className="week on">S3</span>
              <span className="week">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Sitio Ofimundo</h4>
            <ul className="hito-list">
              <li>Creación base complementaria e integración MP</li>
              <li>Inicio QA (interno, externo)</li>
            </ul>
            <div className="weeks">
              <span className="week on">S1</span>
              <span className="week on">S2</span>
              <span className="week on">S3</span>
              <span className="week on">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>WhatSapp</h4>
            <p className="hito">Ajustes proceso e Implementación</p>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week">S2</span>
              <span className="week on">S3</span>
              <span className="week">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Venta Rapida</h4>
            <p className="hito"> Reutilización integraciones para Dreamtec</p>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week on">S2</span>
              <span className="week on">S3</span>
              <span className="week">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Automatización DTE</h4>
            <p className="hito">Paso Produccion</p>
            <div className="weeks">
              <span className="week on">S1</span>
              <span className="week">S2</span>
              <span className="week">S3</span>
              <span className="week">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Catalogo Digital (Aut & MPS)</h4>
            <p className="hito"> Paso a QA</p>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week on">S2</span>
              <span className="week">S3</span>
              <span className="week">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Funcionalidades (Dashboard Modelo de atención)</h4>
            <p className="hito">Identificación de Cliente XXL en Mesa de Ayuda y Priorización</p>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week">S2</span>
              <span className="week on">S3</span>
              <span className="week on">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Mejoras Inyección Automática Picking</h4>
            <p className="hito">Incorporación Cambios solicitados</p>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week">S2</span>
              <span className="week on">S3</span>
              <span className="week">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Monitoreo y Adm TIC (Fases 1, 2,3,4)</h4>
            <p className="hito">Fase 1</p>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week on">S2</span>
              <span className="week on">S3</span>
              <span className="week on">S4</span>
            </div>
          </div>
        </div>
      </section>

      <section className="block" id="roadmap-agosto">
        <div className="section-head">
          <span className="bar"></span>
          <h2>Roadmap Agosto 2026</h2>
        </div>
        <div className="roadmap-grid">
          <div className="rm-card">
            <h4>Sitio Dreamtec</h4>
            <ul className="hito-list">
              <li>Integración Fintoc</li>
              <li>Mejoras para SEO</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week on">S2</span>
              <span className="week on">S3</span>
              <span className="week">S4</span>
            </div>
          </div>

          <div className="rm-card">
            <h4>Sitio Ofimundo</h4>
            <ul className="hito-list">
              <li>Inicio QA (interno, externo)</li>
              <li>Corrección observaciones</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week on">S2</span>
              <span className="week on">S3</span>
              <span className="week">S4</span>
            </div>
          </div>

          <div className="rm-card">
            <h4>Sitio Global</h4>
            <ul className="hito-list">
              <li>Desarrollo Fase 2</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week on">S2</span>
              <span className="week on">S3</span>
              <span className="week">S4</span>
            </div>
          </div>

          <div className="rm-card">
            <h4>Venta Rápida</h4>
            <ul className="hito-list">
              <li>Produccion (integracion Ingram)</li>
              <li>QA Integraciones Dreamtec</li>
              <li>Paso produccion</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week on">S2</span>
              <span className="week on">S3</span>
              <span className="week">S4</span>
            </div>
          </div>

          <div className="rm-card">
            <h4>Mejoras Inyección Automática Picking</h4>
            <ul className="hito-list">
              <li>Habilitación comunicados a clientes</li>
            </ul>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week on">S2</span>
              <span className="week">S3</span>
              <span className="week">S4</span>
            </div>
          </div>

          <div className="rm-card">
            <h4>Funcionalidades (Dashboard Modelo de atención)</h4>
            <ul className="hito-list">
              <li>Habilitación Idntificación de Equipos estrategicos</li>
              <li>QA funcionalidades</li>
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

      <section className="block" id="infra">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', background: 'var(--bg-soft)', padding: '4px 10px', borderRadius: '6px', border: '1px solid var(--line)' }}>
            RESUMEN EJECUTIVO
          </span>
        </div>
        <div className="section-head" style={{ marginBottom: 24 }}>
          <span className="bar"></span>
          <h2>Infraestructura</h2>
          <h3>(3 meses C.C)</h3>
        </div>

        <div className="cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {/* Card 1 */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
              </div>
              <h3 style={{ margin: 0, fontSize: 15 }}>Infraestructura &amp; Servidores</h3>
            </div>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.4, color: 'var(--muted)' }}>
              Administración activa de servidores críticos (Windows/Linux), Docker, PM2 y continuidad operativa.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
              </div>
              <h3 style={{ margin: 0, fontSize: 15 }}>Nube AWS &amp; VPN</h3>
            </div>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.4, color: 'var(--muted)' }}>
              Despliegue de instancias EC2, configuración de VPC, optimización de costos y túneles VPN redundantes.
            </p>
          </div>

          {/* Card 3: Monitoreo Zabbix */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
              </div>
              <h3 style={{ margin: 0, fontSize: 15 }}>Monitoreo Zabbix 24/7</h3>
            </div>
            <ul style={{ margin: 0, paddingLeft: 16, fontSize: 12, color: 'var(--muted)', lineHeight: 1.45 }}>
              <li>Servidor AWS supervisando 6 servidores principales.</li>
              <li>Alertas instantáneas por caídas y cortes eléctricos.</li>
              <li>Reportes automáticos en Python (PDF, Excel, CSV).</li>
            </ul>
            <div style={{ marginTop: 'auto', paddingTop: 4, fontSize: 11, color: '#2563eb', fontWeight: 700 }}>
              📊 99.8% Uptime Promedio registrado
            </div>
          </div>

          {/* Card 4 */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
              <h3 style={{ margin: 0, fontSize: 15 }}>Desarrollo &amp; DBs</h3>
            </div>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.4, color: 'var(--muted)' }}>
              Despliegue de Apps Next.js/Node.js, CI/CD con Git, Nginx y administración de SQL Server.
            </p>
          </div>

          {/* Card 6 */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
              </div>
              <h3 style={{ margin: 0, fontSize: 15 }}>Soporte &amp; Automatización</h3>
            </div>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.4, color: 'var(--muted)' }}>
              Mantención preventiva, control de inventario y videovigilancia HD.
            </p>
          </div>

          {/* Card 7: SQL Server */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
              </div>
              <h3 style={{ margin: 0, fontSize: 15 }}>SQL Server y Gestión DBs</h3>
            </div>
            <ul style={{ margin: 0, paddingLeft: 16, fontSize: 12, color: 'var(--muted)', lineHeight: 1.45 }}>
              <li><strong>Mínimo Privilegio:</strong> Roles y permisos asignados por función.</li>
              <li><strong>Optimización:</strong> Tuning de queries, backups y desfragmentación.</li>
              <li><strong>BDs Activas:</strong> <code>GESTION_PROYECTOS</code>, <code>OFITEC/OFI_WEB</code>, <code>SGCX/STUEDEMANN</code>.</li>
            </ul>
            <div style={{ marginTop: 'auto', paddingTop: 4, fontSize: 11, color: '#16a34a', fontWeight: 700 }}>
              ✓ Monitoreo y auditoría activa de accesos
            </div>
          </div>

          {/* Card 8: CCTV */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
              </div>
              <h3 style={{ margin: 0, fontSize: 15 }}>Videovigilancia y CCTV</h3>
            </div>
            <ul style={{ margin: 0, paddingLeft: 16, fontSize: 12, color: 'var(--muted)', lineHeight: 1.45 }}>
              <li>Reposicionamiento estratégico en zonas críticas.</li>
              <li>Reducción sustancial de puntos ciegos en Ofimundo.</li>
              <li>Ajuste óptimo de ángulos de visualización y enfoque focal.</li>
            </ul>
            <div style={{ marginTop: 'auto', paddingTop: 4, fontSize: 11, color: '#16a34a', fontWeight: 700 }}>
              🎯 Cobertura más eficiente y de rápida respuesta
            </div>
          </div>

          {/* Card 9: FortiGate */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 style={{ margin: 0, fontSize: 15 }}>Firewall FortiGate 80F</h3>
            </div>
            <ul style={{ margin: 0, paddingLeft: 16, fontSize: 12, color: 'var(--muted)', lineHeight: 1.45 }}>
              <li>Creación y auditoría de políticas de seguridad.</li>
              <li>Análisis profundo con Sniffer y DNS interno.</li>
              <li>Puertos protegidos: <code>3000/3001</code>, <code>4000/8090</code>, <code>1433</code>.</li>
            </ul>
            <div style={{ marginTop: 'auto', paddingTop: 4, fontSize: 11, color: '#16a34a', fontWeight: 700 }}>
              🔒 Perímetro blindado y tráfico filtrado
            </div>
          </div>

          {/* Card 10: Credenciales y Enlaces */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10, background: '#0f172a', color: '#ffffff', borderColor: '#1e293b' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: '#1e293b', color: '#60a5fa', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
              </div>
              <h3 style={{ margin: 0, fontSize: 15, color: '#ffffff' }}>Enlaces &amp; Accesos TI</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 12 }}>
              <div>
                <span style={{ color: '#94a3b8', display: 'block', fontSize: 10 }}>Plataforma Zabbix</span>
                <a href="http://54.20.80.88:3000/" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa', fontWeight: 700, textDecoration: 'underline' }}>
                  http://54.20.80.88:3000/
                </a>
              </div>
              <div>
                <span style={{ color: '#94a3b8', display: 'block', fontSize: 10 }}>Administración y monitoreo de servicios</span>
                <a href="http://54.94.244.213:3000/" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa', fontWeight: 700, textDecoration: 'underline' }}>
                  http://54.94.244.213:3000/
                </a>
              </div>
            </div>

            <p style={{ margin: 0, fontSize: 11, color: '#94a3b8', lineHeight: 1.35 }}>
              Visualización en tiempo real de salud de servidores, servicios activos y tiempos de respuesta para equipo directivo y TI.
            </p>

            <div style={{ marginTop: 'auto', paddingTop: 6, borderTop: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#94a3b8' }}>
              <span>User: <strong style={{ color: '#fff' }}>Admin</strong></span>
              <span>Pass: <strong style={{ color: '#fff' }}>ofilab2026</strong></span>
            </div>
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
          <p>Gracias por su atención al reporte de cierre Julio 2026.</p>
          <small>Ofimundo · Tu transformación, nuestra pasión</small>
        </div>
      </footer>
    </>
  )
}
