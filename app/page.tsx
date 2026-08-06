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
            <a href="#foco">Foco</a>
            <a href="#nuevos">Nuevos Servicios</a>
            <a href="#ejecuciones">Ejecuciones</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#infra">Infraestructura</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <span className="eyebrow">Gerencia de Tecnología e Innovación</span>
        <h1 className="gradient-text">Comité de Gerentes · Cierre de Gestión</h1>
        <p className="sub">Reporte de cierre — Mayo 2026</p>
      </section>

      <section className="stats" id="resumen">
        <div className="stat-card">
          <div className="stat-num gradient-text">05</div>
          <div className="stat-label">Clientes en Operación</div>
        </div>
        <div className="stat-card">
          <div className="stat-num gradient-text">06</div>
          <div className="stat-label">Proyectos Internos</div>
        </div>
        <div className="stat-card">
          <div className="stat-num gradient-text">100%</div>
          <div className="stat-label">Disponibilidad de Infraestructura</div>
        </div>
      </section>

      <section className="block" id="servicios">
        <div className="section-head">
          <span className="bar"></span>
          <h2>Servicios Externos en Operación</h2>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Tipo de Servicio Operado</th>
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
                <td>M. Antofagasta</td>
                <td>Cuentas Básicas (Piloto 40 días)</td>
                <td><span className="badge b-piloto">Piloto</span></td>
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

      <section className="block" id="foco">
        <div className="section-head">
          <span className="bar"></span>
          <h2>Foco de Implementación</h2>
        </div>
        <div className="cards" style={{ marginBottom: 24 }}>
          <div className="highlight" style={{ gridColumn: '1 / -1' }}>
            <span className="kicker">Cliente destacado</span>
            <h3>ECRGROUP</h3>
            <p>Estado: Pruebas integradas con cliente y Dirección del Trabajo.</p>
          </div>
        </div>
      </section>

      <section className="block" id="nuevos">
        <div className="section-head">
          <span className="bar"></span>
          <h2>Evaluación y Posibles Nuevos Servicios</h2>
        </div>
        <div className="cards">
          <div className="card">
            <span className="kicker">Ace &amp; Rec Fact</span>
            <h3>M. de la Reina</h3>
            <p>Reunión de levantamiento de proceso — Standby por cliente.</p>
          </div>
          <div className="card">
            <span className="kicker">OCR</span>
            <h3>SODEXO</h3>
            <p>Cliente enviará tipos de documentos para prueba de proceso OCR.</p>
          </div>
          <div className="card">
            <span className="kicker">Servicios digitales</span>
            <h3>Bagno</h3>
            <p>Identificación de servicios digitales. Reunión: jueves 11 de junio.</p>
          </div>
          <div className="card">
            <span className="kicker">Servicios</span>
            <h3>Exser</h3>
            <p>Identificación de servicios. Revisión con cliente de diversas soluciones.</p>
          </div>
          <div className="card">
            <span className="kicker">Automatización</span>
            <h3>Slep Atacama</h3>
            <p>Presentación de servicios de automatización.</p>
          </div>
        </div>
      </section>

      <section className="block" id="ejecuciones">
        <div className="section-head">
          <span className="bar"></span>
          <h2>Ejecuciones Mayo</h2>
        </div>
        <ul className="check-list">
          <li>Sitio Dreamtec — Cyber</li>
          <li>Inventario TIC</li>
          <li>Ajustes presentación Governanza</li>
          <li>Catálogo Digital</li>
        </ul>
      </section>

      <section className="block" id="roadmap">
        <div className="section-head">
          <span className="bar"></span>
          <h2>Roadmap Junio 2026</h2>
        </div>
        <div className="roadmap-grid">
          <div className="rm-card">
            <h4>Sitio Dreamtec</h4>
            <p className="hito">Requerimientos para campañas día del Padre</p>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week on">S2</span>
              <span className="week">S3</span>
              <span className="week">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Sitio Dreamtec</h4>
            <p className="hito">Siguientes requerimientos priorizados</p>
            <div className="weeks">
              <span className="week on">S1</span>
              <span className="week">S2</span>
              <span className="week on">S3</span>
              <span className="week on">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Sitio Ofimundo</h4>
            <p className="hito">Carga de datos, habilitación agente, pruebas</p>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week on">S2</span>
              <span className="week on">S3</span>
              <span className="week on">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Sitio Global</h4>
            <p className="hito">Desarrollo Fase 2</p>
            <div className="weeks">
              <span className="week on">S1</span>
              <span className="week on">S2</span>
              <span className="week on">S3</span>
              <span className="week">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Contabilización</h4>
            <p className="hito">Pruebas usuario</p>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week on">S2</span>
              <span className="week on">S3</span>
              <span className="week">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Soluciones Estándar</h4>
            <p className="hito">OCR + gestor documental / cuentas básicas Aguas Andina</p>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week on">S2</span>
              <span className="week on">S3</span>
              <span className="week">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Reporte TIC</h4>
            <p className="hito">Desarrollo e Implementación</p>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week on">S2</span>
              <span className="week on">S3</span>
              <span className="week">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Sistema Alertas Proceso Ope</h4>
            <p className="hito">Desarrollo</p>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week on">S2</span>
              <span className="week on">S3</span>
              <span className="week on">S4</span>
            </div>
          </div>
          <div className="rm-card">
            <h4>Cotizador Aramark</h4>
            <p className="hito">Ajustes e Implementación</p>
            <div className="weeks">
              <span className="week">S1</span>
              <span className="week on">S2</span>
              <span className="week on">S3</span>
              <span className="week">S4</span>
            </div>
          </div>
        </div>
      </section>

      <section className="block" id="infra">
        <div className="section-head">
          <span className="bar"></span>
          <h2>Infraestructura</h2>
        </div>
        <ul className="check-list">
          <li>Junio se realizará plan de mantención de equipos usuarios (inventario, actualización anexo contratos, etc.)</li>
          <li>A la espera de cotización de Servicio de Housing</li>
          <li>Implementación nuevo Proceso de Respaldos server</li>
          <li>Revisión y rediseño proceso de respaldo usuarios (mail)</li>
          <li>Renovación Firewall y Antivirus</li>
        </ul>
      </section>

      <footer>
        <div className="footer-inner">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Ofimundo-Office%20365-min-yeadHRGLJyAkI4Z134CcoMyv5zXq6X.png"
            alt="Logo de Ofimundo"
          />
          <h3 className="gradient-text">Muchas gracias</h3>
          <p>Gracias por su atención al reporte de cierre Mayo 2026.</p>
          <small>Ofimundo · Tu transformación, nuestra pasión</small>
        </div>
      </footer>
    </>
  )
}
