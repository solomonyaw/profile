/**
 * SOLOMON YAW ADEKLO - PROFESSIONAL PORTFOLIO
 * Vanilla JavaScript (ES6+) Interactive Engine
 * Strictly Framework-Free: Clean DOM manipulation, events, and accessible UI
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initActiveNavOnScroll();
  initBackToTop();
  initSkillsFilter();
  initProjectsFilter();
  initTopologyShowcase();
  initContactForm();
  initCvModal();
  initDynamicYear();
  initCourseExpanders();
});

/* ==========================================================================
   1. MOBILE NAVIGATION
   ========================================================================== */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const mainNav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !mainNav) return;

  function toggleMenu(isOpen) {
    const openState = typeof isOpen === 'boolean' ? isOpen : !mainNav.classList.contains('open');
    mainNav.classList.toggle('open', openState);
    toggleBtn.classList.toggle('open', openState);
    toggleBtn.setAttribute('aria-expanded', openState ? 'true' : 'false');
    document.body.style.overflow = openState ? 'hidden' : '';
  }

  toggleBtn.addEventListener('click', () => toggleMenu());

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mainNav.classList.contains('open')) {
        toggleMenu(false);
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mainNav.classList.contains('open')) {
      toggleMenu(false);
    }
  });
}

/* ==========================================================================
   2. ACTIVE NAVIGATION INDICATOR ON SCROLL
   ========================================================================== */
function initActiveNavOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  function onScroll() {
    const scrollY = window.pageYOffset + 120;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ==========================================================================
   3. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 450) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   4. SKILLS SECTION FILTER
   ========================================================================== */
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.skill-tab-btn');
  const skillCards = document.querySelectorAll('.skill-category-card');

  if (!filterBtns.length || !skillCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   5. PROJECTS SECTION FILTER
   ========================================================================== */
function initProjectsFilter() {
  const filterBtns = document.querySelectorAll('.proj-tab-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   6. TOPOLOGY SHOWCASE DIAGRAMS
   ========================================================================== */
const topologiesData = {
  lan: {
    title: 'Enterprise Campus LAN & Routing Topology',
    desc: 'Core multilayer switches redundant uplink to redundant edge firewalls and WAN routers. Access layer switches provide 802.1Q trunking, dedicated VLANs for management, workstations, and VoIP traffic with strict ACL enforcement.',
    svg: `
      <svg viewBox="0 0 500 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#F5C451"/>
            <stop offset="100%" stop-color="#D4A228"/>
          </linearGradient>
        </defs>
        <!-- Lines -->
        <line x1="250" y1="30" x2="150" y2="80" stroke="#F5C451" stroke-width="2" stroke-dasharray="4,2"/>
        <line x1="250" y1="30" x2="350" y2="80" stroke="#F5C451" stroke-width="2" stroke-dasharray="4,2"/>
        <line x1="150" y1="80" x2="100" y2="140" stroke="#2878C7" stroke-width="2"/>
        <line x1="150" y1="80" x2="200" y2="140" stroke="#2878C7" stroke-width="2"/>
        <line x1="350" y1="80" x2="300" y2="140" stroke="#2878C7" stroke-width="2"/>
        <line x1="350" y1="80" x2="400" y2="140" stroke="#2878C7" stroke-width="2"/>
        
        <!-- WAN Router / Gateway -->
        <rect x="210" y="10" width="80" height="35" rx="6" fill="#17256A" stroke="#F5C451" stroke-width="2"/>
        <text x="250" y="32" fill="#FFFFFF" font-size="10" font-weight="700" text-anchor="middle">EDGE ROUTER</text>
        
        <!-- Core Switches -->
        <rect x="110" y="65" width="80" height="30" rx="4" fill="#071A3D" stroke="#2878C7" stroke-width="2"/>
        <text x="150" y="84" fill="#F5C451" font-size="9" font-weight="700" text-anchor="middle">CORE SW 01</text>
        
        <rect x="310" y="65" width="80" height="30" rx="4" fill="#071A3D" stroke="#2878C7" stroke-width="2"/>
        <text x="350" y="84" fill="#F5C451" font-size="9" font-weight="700" text-anchor="middle">CORE SW 02</text>
        
        <!-- Access Layer Switches / Subnets -->
        <rect x="65" y="130" width="70" height="26" rx="4" fill="#17256A" stroke="#CBD5E1" stroke-width="1.5"/>
        <text x="100" y="147" fill="#FFFFFF" font-size="8" font-weight="600" text-anchor="middle">VLAN 10: USER</text>
        
        <rect x="165" y="130" width="70" height="26" rx="4" fill="#17256A" stroke="#CBD5E1" stroke-width="1.5"/>
        <text x="200" y="147" fill="#FFFFFF" font-size="8" font-weight="600" text-anchor="middle">VLAN 20: VOICE</text>
        
        <rect x="265" y="130" width="70" height="26" rx="4" fill="#17256A" stroke="#CBD5E1" stroke-width="1.5"/>
        <text x="300" y="147" fill="#FFFFFF" font-size="8" font-weight="600" text-anchor="middle">VLAN 30: MGMT</text>
        
        <rect x="365" y="130" width="70" height="26" rx="4" fill="#17256A" stroke="#CBD5E1" stroke-width="1.5"/>
        <text x="400" y="147" fill="#FFFFFF" font-size="8" font-weight="600" text-anchor="middle">VLAN 40: DMZ</text>
        
        <text x="250" y="185" fill="#94A3B8" font-size="9" text-anchor="middle">IEEE 802.1Q Trunking · OSPF Dynamic Routing · STP Loop Prevention</text>
      </svg>
    `
  },
  datacenter: {
    title: 'Modern Data Center Leaf-Spine Architecture',
    desc: 'High-bandwidth, low-latency Clos network design. Every leaf switch connects to every spine switch, eliminating spanning tree bottlenecks and enabling massive horizontal scalability and East-West traffic efficiency.',
    svg: `
      <svg viewBox="0 0 500 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <!-- Interconnect Grid -->
        <line x1="170" y1="40" x2="100" y2="110" stroke="#F5C451" stroke-width="1.5" opacity="0.8"/>
        <line x1="170" y1="40" x2="200" y2="110" stroke="#F5C451" stroke-width="1.5" opacity="0.8"/>
        <line x1="170" y1="40" x2="300" y2="110" stroke="#F5C451" stroke-width="1.5" opacity="0.8"/>
        <line x1="170" y1="40" x2="400" y2="110" stroke="#F5C451" stroke-width="1.5" opacity="0.8"/>

        <line x1="330" y1="40" x2="100" y2="110" stroke="#2878C7" stroke-width="1.5" opacity="0.8"/>
        <line x1="330" y1="40" x2="200" y2="110" stroke="#2878C7" stroke-width="1.5" opacity="0.8"/>
        <line x1="330" y1="40" x2="300" y2="110" stroke="#2878C7" stroke-width="1.5" opacity="0.8"/>
        <line x1="330" y1="40" x2="400" y2="110" stroke="#2878C7" stroke-width="1.5" opacity="0.8"/>

        <!-- Spine Switches -->
        <rect x="125" y="25" width="90" height="28" rx="4" fill="#071A3D" stroke="#F5C451" stroke-width="2"/>
        <text x="170" y="43" fill="#FFFFFF" font-size="9" font-weight="700" text-anchor="middle">SPINE SW 1</text>
        
        <rect x="285" y="25" width="90" height="28" rx="4" fill="#071A3D" stroke="#2878C7" stroke-width="2"/>
        <text x="330" y="43" fill="#FFFFFF" font-size="9" font-weight="700" text-anchor="middle">SPINE SW 2</text>

        <!-- Leaf Switches -->
        <rect x="65" y="105" width="70" height="25" rx="3" fill="#17256A" stroke="#F5C451" stroke-width="1.5"/>
        <text x="100" y="121" fill="#FFFFFF" font-size="8" font-weight="600" text-anchor="middle">LEAF 1 (ToR)</text>

        <rect x="165" y="105" width="70" height="25" rx="3" fill="#17256A" stroke="#F5C451" stroke-width="1.5"/>
        <text x="200" y="121" fill="#FFFFFF" font-size="8" font-weight="600" text-anchor="middle">LEAF 2 (ToR)</text>

        <rect x="265" y="105" width="70" height="25" rx="3" fill="#17256A" stroke="#F5C451" stroke-width="1.5"/>
        <text x="300" y="121" fill="#FFFFFF" font-size="8" font-weight="600" text-anchor="middle">LEAF 3 (ToR)</text>

        <rect x="365" y="105" width="70" height="25" rx="3" fill="#17256A" stroke="#F5C451" stroke-width="1.5"/>
        <text x="400" y="121" fill="#FFFFFF" font-size="8" font-weight="600" text-anchor="middle">LEAF 4 (ToR)</text>

        <text x="250" y="165" fill="#E2E8F0" font-size="9" text-anchor="middle">Server Compute Blades & Storage Arrays (NVMe-oF / SAN)</text>
        <text x="250" y="185" fill="#94A3B8" font-size="8" text-anchor="middle">VXLAN EVPN Overlay · BGP Underlay · Predictable Equal-Cost Multipath (ECMP)</text>
      </svg>
    `
  },
  cloud: {
    title: 'Cloud & Hybrid Multi-Site Network Interconnect',
    desc: 'Secure interconnect connecting on-premises data centers, branch offices, and cloud Virtual Private Clouds (VPC) through IPsec VPN tunnels, Direct Connect / ExpressRoute, and automated software-defined WAN (SD-WAN).',
    svg: `
      <svg viewBox="0 0 500 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <!-- Cloud outline -->
        <path d="M200,60 Q210,35 240,40 Q260,25 290,40 Q315,35 320,60 Q340,75 330,95 Q320,115 290,110 Q270,120 240,115 Q210,120 190,105 Q175,85 200,60 Z" fill="rgba(40, 120, 199, 0.15)" stroke="#2878C7" stroke-width="2"/>
        <text x="260" y="78" fill="#F5C451" font-size="10" font-weight="800" text-anchor="middle">CLOUD VPC</text>
        <text x="260" y="93" fill="#FFFFFF" font-size="8" text-anchor="middle">Transit Gateway / Peering</text>

        <!-- Branch Office -->
        <rect x="40" y="70" width="90" height="45" rx="6" fill="#17256A" stroke="#F5C451" stroke-width="1.5"/>
        <text x="85" y="90" fill="#FFFFFF" font-size="9" font-weight="700" text-anchor="middle">BRANCH OFFICE</text>
        <text x="85" y="104" fill="#94A3B8" font-size="8" text-anchor="middle">SD-WAN Edge</text>

        <!-- On-Prem Data Center -->
        <rect x="370" y="70" width="100" height="45" rx="6" fill="#071A3D" stroke="#F5C451" stroke-width="1.5"/>
        <text x="420" y="90" fill="#FFFFFF" font-size="9" font-weight="700" text-anchor="middle">HQ DATACENTER</text>
        <text x="420" y="104" fill="#94A3B8" font-size="8" text-anchor="middle">Dedicated Interconnect</text>

        <!-- Connecting lines -->
        <line x1="130" y1="92" x2="190" y2="85" stroke="#F5C451" stroke-width="2" stroke-dasharray="5,3"/>
        <line x1="330" y1="85" x2="370" y2="92" stroke="#2878C7" stroke-width="2.5"/>

        <text x="160" y="112" fill="#E2E8F0" font-size="8" text-anchor="middle">IPsec VPN</text>
        <text x="350" y="112" fill="#E2E8F0" font-size="8" text-anchor="middle">Private Link</text>
        
        <text x="250" y="165" fill="#94A3B8" font-size="9" text-anchor="middle">Global Traffic Management · Automated Failover · Zero-Trust Network Access (ZTNA)</text>
      </svg>
    `
  },
  telecom: {
    title: 'Telecommunications: Optical Fiber, 5G & Satellite Backhaul',
    desc: 'Hierarchical telecommunication transport infrastructure combining dense wavelength-division multiplexing (DWDM) optical rings, 5G Radio Access Network (gNodeB) macro towers, and high-throughput satellite ground stations.',
    svg: `
      <svg viewBox="0 0 500 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <!-- Radio Tower -->
        <line x1="80" y1="140" x2="110" y2="50" stroke="#F5C451" stroke-width="2"/>
        <line x1="140" y1="140" x2="110" y2="50" stroke="#F5C451" stroke-width="2"/>
        <line x1="90" y1="110" x2="130" y2="110" stroke="#F5C451" stroke-width="1.5"/>
        <line x1="98" y1="80" x2="122" y2="80" stroke="#F5C451" stroke-width="1.5"/>
        <circle cx="110" cy="50" r="5" fill="#F5C451"/>
        <!-- Radio waves -->
        <path d="M110,40 A15,15 0 0,1 125,50" fill="none" stroke="#2878C7" stroke-width="1.5"/>
        <path d="M110,32 A25,25 0 0,1 135,50" fill="none" stroke="#2878C7" stroke-width="1.5"/>
        <text x="110" y="160" fill="#FFFFFF" font-size="9" font-weight="700" text-anchor="middle">5G RAN / MACRO</text>

        <!-- Optical Ring Center -->
        <circle cx="260" cy="90" r="45" fill="none" stroke="#2878C7" stroke-width="3" stroke-dasharray="6,3"/>
        <text x="260" y="88" fill="#F5C451" font-size="10" font-weight="800" text-anchor="middle">DWDM OPTICAL</text>
        <text x="260" y="102" fill="#FFFFFF" font-size="8" text-anchor="middle">Metro Core Ring</text>

        <!-- Satellite Node -->
        <circle cx="410" cy="50" r="14" fill="#071A3D" stroke="#F5C451" stroke-width="2"/>
        <text x="410" y="54" fill="#F5C451" font-size="10" font-weight="700" text-anchor="middle">SAT</text>
        <line x1="410" y1="65" x2="380" y2="125" stroke="#F5C451" stroke-width="1.5" stroke-dasharray="3,3"/>
        <rect x="350" y="125" width="70" height="30" rx="4" fill="#17256A" stroke="#2878C7" stroke-width="1.5"/>
        <text x="385" y="144" fill="#FFFFFF" font-size="8" font-weight="600" text-anchor="middle">EARTH STATION</text>

        <text x="260" y="180" fill="#94A3B8" font-size="9" text-anchor="middle">High-Speed Optical Transport · Low-Latency Microwave · Resilient Continental Backhaul</text>
      </svg>
    `
  },
  security: {
    title: 'Multi-Layered Network Security & Defense Perimeter',
    desc: 'Defense-in-depth architecture featuring next-generation stateful firewalls (NGFW), deep packet intrusion detection (IDS/IPS), micro-segmentation, SIEM/SOC telemetry, and least-privilege Zero-Trust access verification.',
    svg: `
      <svg viewBox="0 0 500 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <!-- Perimeter Wall / Shield -->
        <rect x="50" y="30" width="90" height="110" rx="8" fill="rgba(239, 68, 68, 0.15)" stroke="#EF4444" stroke-width="1.5"/>
        <text x="95" y="60" fill="#EF4444" font-size="9" font-weight="800" text-anchor="middle">EXTERNAL</text>
        <text x="95" y="75" fill="#EF4444" font-size="8" text-anchor="middle">Untrusted Internet</text>
        <text x="95" y="115" fill="#CBD5E1" font-size="8" text-anchor="middle">Threat Vector</text>

        <!-- Firewall / IDS-IPS Gate -->
        <rect x="180" y="30" width="140" height="110" rx="8" fill="#17256A" stroke="#F5C451" stroke-width="2"/>
        <text x="250" y="55" fill="#F5C451" font-size="10" font-weight="800" text-anchor="middle">NGFW / IDS / IPS</text>
        <line x1="200" y1="70" x2="300" y2="70" stroke="#F5C451" stroke-width="1"/>
        <text x="250" y="87" fill="#FFFFFF" font-size="8" text-anchor="middle">Deep Packet Inspection (DPI)</text>
        <text x="250" y="103" fill="#FFFFFF" font-size="8" text-anchor="middle">Stateful NAT & TLS Decryption</text>
        <text x="250" y="119" fill="#FFFFFF" font-size="8" text-anchor="middle">Anomalous Flow Detection</text>

        <!-- Secure Protected Core -->
        <rect x="360" y="30" width="100" height="110" rx="8" fill="rgba(16, 185, 129, 0.15)" stroke="#10B981" stroke-width="1.5"/>
        <text x="410" y="60" fill="#10B981" font-size="9" font-weight="800" text-anchor="middle">PROTECTED</text>
        <text x="410" y="75" fill="#10B981" font-size="8" text-anchor="middle">Core Datacenter</text>
        <text x="410" y="95" fill="#FFFFFF" font-size="8" text-anchor="middle">Zero-Trust Auth</text>
        <text x="410" y="112" fill="#FFFFFF" font-size="8" text-anchor="middle">Encrypted VLANs</text>

        <!-- Connecting data flow -->
        <line x1="140" y1="85" x2="180" y2="85" stroke="#EF4444" stroke-width="2"/>
        <line x1="320" y1="85" x2="360" y2="85" stroke="#10B981" stroke-width="2"/>

        <text x="250" y="175" fill="#94A3B8" font-size="9" text-anchor="middle">Continuous Telemetry · SIEM Event Correlation · Automated Incident Isolation</text>
      </svg>
    `
  }
};

function initTopologyShowcase() {
  const buttons = document.querySelectorAll('.topology-btn');
  const svgContainer = document.getElementById('topologySvgContainer');
  const infoTitle = document.getElementById('topologyInfoTitle');
  const infoDesc = document.getElementById('topologyInfoDesc');

  if (!buttons.length || !svgContainer) return;

  function renderTopology(key) {
    const data = topologiesData[key] || topologiesData.lan;
    svgContainer.innerHTML = data.svg;
    if (infoTitle) infoTitle.textContent = data.title;
    if (infoDesc) infoDesc.textContent = data.desc;
  }

  // Initial render
  renderTopology('lan');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const key = btn.getAttribute('data-topology');
      renderTopology(key);
    });
  });
}

/* ==========================================================================
   7. CONTACT FORM VALIDATION & CLIENT-SIDE FEEDBACK
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('contactFeedback');

  if (!form || !feedback) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#contactName')?.value.trim();
    const email = form.querySelector('#contactEmail')?.value.trim();
    const subject = form.querySelector('#contactSubject')?.value.trim();
    const message = form.querySelector('#contactMessage')?.value.trim();

    feedback.className = 'form-feedback';
    feedback.style.display = 'none';

    // Validation
    if (!name || !email || !message) {
      feedback.textContent = 'Please fill out all required fields (Name, Email, and Message).';
      feedback.classList.add('error');
      feedback.style.display = 'block';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      feedback.textContent = 'Please enter a valid email address.';
      feedback.classList.add('error');
      feedback.style.display = 'block';
      return;
    }

    // Since this is a front-end portfolio demonstration without a configured private backend,
    // we clearly inform the user while opening their default mail client with pre-filled content!
    feedback.innerHTML = `
      <strong>Message received in demonstration mode!</strong><br>
      Thank you, ${escapeHtml(name)}. Because this personal portfolio is currently hosted as a static showcase,
      you can also connect directly via 
      <a href="https://www.linkedin.com/in/solomon-adeklo-1501453bb/" target="_blank" rel="noopener noreferrer" style="color: #F5C451; text-decoration: underline;">LinkedIn</a>, 
      <a href="https://github.com/solomonyaw" target="_blank" rel="noopener noreferrer" style="color: #F5C451; text-decoration: underline;">GitHub</a>, or 
      <a href="https://x.com/solomonyaw2" target="_blank" rel="noopener noreferrer" style="color: #F5C451; text-decoration: underline;">X (@solomonyaw2)</a>.
    `;
    feedback.classList.add('success');
    feedback.style.display = 'block';

    form.reset();
  });
}

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

/* ==========================================================================
   8. CV PREVIEW & DOWNLOAD MODAL
   ========================================================================== */
function initCvModal() {
  const openBtns = document.querySelectorAll('.cv-trigger-btn');
  const modal = document.getElementById('cvModal');
  const closeBtn = document.getElementById('cvModalClose');
  const backdropClose = document.getElementById('cvModalBackdrop');

  if (!modal) return;

  function openModal() {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // If the button has a direct download attribute and we want to trigger download,
      // it also opens the modal preview to provide clear context
      openModal();
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdropClose) {
    backdropClose.addEventListener('click', (e) => {
      if (e.target === backdropClose) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   9. DYNAMIC CURRENT YEAR
   ========================================================================== */
function initDynamicYear() {
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   10. COURSE AREA DETAILS EXPANSION
   ========================================================================== */
function initCourseExpanders() {
  const cards = document.querySelectorAll('.course-area-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      // Subtle pulse feedback
      card.style.borderColor = '#F5C451';
      setTimeout(() => {
        card.style.borderColor = '';
      }, 600);
    });
  });
}
