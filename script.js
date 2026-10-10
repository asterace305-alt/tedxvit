/**
 * TEDxVITPune — Client Application Architecture & Interactive Engine
 * WebGL 3D (React Bits Threads), Continuous Stage Scroll Choreography, Three.js & Navy Blue Add-On Palette
 */

(function () {
  'use strict';

  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];

  /* ==========================================================================
     DATA SETS
     ========================================================================== */

  const POSTERS_DATA = [
    {
      edition: 'Edition 10',
      year: '2025',
      theme: 'Dimes of Dynamism',
      title: 'The Catalyst Horizon',
      photo: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=82'
    },
    {
      edition: 'Edition 09',
      year: '2024',
      theme: 'The Space Between',
      title: 'A Question Carried Forward',
      photo: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=82'
    },
    {
      edition: 'Edition 08',
      year: '2023',
      theme: 'Fragments',
      title: 'The Room Listens',
      photo: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=82'
    }
  ];

  const SPEAKERS_DATA = [
    {
      id: 'sujay-dhake',
      name: 'Sujay Dhake',
      role: 'Green Construction Pioneer & Sustainability Visionary',
      field: 'SUSTAINABLE ARCHITECTURE',
      talkTitle: '“Decarbonizing Built Environments Through Biophilic Logic”',
      edition: 'EDITION 2024 · THE SPACE BETWEEN',
      bio: 'Leading the revolution in sustainable engineering, Sujay demonstrates how carbon-negative materials, localized vernacular design, and circular bio-composites can radically alter metropolitan thermal footprints.',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=82'
    },
    {
      id: 'vaishali-shukla',
      name: 'Dr. Vaishali Shukla',
      role: 'Ayurvedic Neuroscientist & Mind Health Researcher',
      field: 'NEURAL WELLNESS & AYURVEDA',
      talkTitle: '“Bridging Ancient Neural Healing with Modern Medicine”',
      edition: 'EDITION 2024 · THE SPACE BETWEEN',
      bio: 'A visionary doctor bridging the gap between classical Vedic science and contemporary neurobiology, Dr. Shukla reveals epigenetic mechanisms for reversing stress-induced cognitive degradation.',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=82'
    },
    {
      id: 'avani-gadre',
      name: 'Avani Gadre',
      role: 'Visual Storyteller & Creative Director',
      field: 'CREATIVE MEDIA & DOCUMENTARY',
      talkTitle: '“Framing Humanity: The Raw Optics of Truth”',
      edition: 'EDITION 2023 · FRAGMENTS',
      bio: 'Renowned documentary photographer capturing unseen subcultures across the Indian subcontinent. Avani explores visual journalism as a tool for empathy and grassroots policy awareness.',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=82'
    },
    {
      id: 'naina-ahluwalia',
      name: 'Naina Ahluwalia',
      role: 'Behavioral Architect & Cognitive Strategist',
      field: 'BEHAVIORAL ECONOMICS',
      talkTitle: '“Reprogramming Subconscious Decision Paradigms”',
      edition: 'EDITION 2022 · RESURGENCE',
      bio: 'Advising global tech enterprises and educational institutes on nudge theory, cognitive biases, and creating sustainable habits in an era of hyper-fragmented attention.',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=82'
    },
    {
      id: 'prajakta-wadhavkar',
      name: 'Prajakta Wadhavkar',
      role: 'Social Innovator & Grassroots Community Catalyst',
      field: 'SOCIAL INNOVATION',
      talkTitle: '“The Architecture of Decentralized Grassroots Action”',
      edition: 'EDITION 2021 · UNRAVEL',
      bio: 'Pioneering community-first social models that empower regional craftsmen, waste pickers, and youth collectives through micro-economies and circular material hubs.',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=82'
    }
  ];

  const EDITIONS_DATA = [
    {
      edition: 'Edition 10',
      year: '2025',
      theme: 'Dimes of Dynamism',
      desc: 'Marking a monumental decade of intellectual ignition. Celebrating the ten dynamic forces that propel human civilizations forward.',
      photo: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=82',
      badge: 'DECADE MILESTONE'
    },
    {
      edition: 'Edition 09',
      year: '2024',
      theme: 'The Space Between',
      desc: 'Exploring the fertile, liminal territories between clarity and chaos, certainty and wonder, individual isolation and shared momentum.',
      photo: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=82',
      badge: 'AUDITORIUM PACKED'
    },
    {
      edition: 'Edition 08',
      year: '2023',
      theme: 'Fragments',
      desc: 'Reassembling disjointed facets of technology, heritage, psychology, and artistic expression into a cohesive mosaic of tomorrow.',
      photo: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=82',
      badge: 'SOLD OUT'
    },
    {
      edition: 'Edition 07',
      year: '2022',
      theme: 'Resurgence',
      desc: 'Rising with renewed vigor in a post-pandemic era. Rediscovering resilience, organic community bonds, and fearless exploration.',
      photo: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=82',
      badge: 'REVIVAL'
    },
    {
      edition: 'Edition 06',
      year: '2021',
      theme: 'Unravel',
      desc: 'Deconstructing complex global systems to understand the core human elements that bind our collective destiny.',
      photo: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=82',
      badge: 'VIRTUAL HYBRID'
    }
  ];

  const LOOKBOOK_IMAGES = [
    { title: 'The Red Dot Spotlight', tag: 'stage', url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=700&q=80' },
    { title: 'Auditorium Electric Silence', tag: 'audience', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=700&q=80' },
    { title: 'Harmonic Fusion Ensemble', tag: 'performances', url: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=700&q=80' },
    { title: 'Backstage Curation Huddle', tag: 'backstage', url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=700&q=80' },
    { title: 'Keynote in Full Force', tag: 'stage', url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=700&q=80' },
    { title: 'Standing Ovation Wave', tag: 'audience', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=700&q=80' },
    { title: 'Contemporary Dance Dialogue', tag: 'performances', url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=700&q=80' },
    { title: 'Production Console Controls', tag: 'backstage', url: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=700&q=80' },
    { title: 'Speaker Final Reflections', tag: 'stage', url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=700&q=80' },
    { title: 'Networking Pavilion Buzz', tag: 'audience', url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=700&q=80' },
    { title: 'Stage Lighting Calibration', tag: 'backstage', url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=700&q=80' },
    { title: 'Acoustic Percussion Set', tag: 'performances', url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=700&q=80' }
  ];

  const CYLINDER_SEASONS = [
    { title: 'Season 01: The Emergence', theme: 'AI & Organic Thought', date: 'August 2024', photo: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=500&q=80' },
    { title: 'Season 02: Urban Canvases', theme: 'Pune Heritage & Metros', date: 'October 2024', photo: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=500&q=80' },
    { title: 'Season 03: Sustainable Vernacular', theme: 'Biophilic Design', date: 'December 2024', photo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80' },
    { title: 'Season 04: The Quantum Realm', theme: 'Computing Horizons', date: 'February 2025', photo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=80' },
    { title: 'Season 05: The Creative Spark', theme: 'Indie Cinema & Sound', date: 'March 2025', photo: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=500&q=80' },
    { title: 'Season 06: Dimes Prelude', theme: 'Catalyst Roundtable', date: 'April 2025', photo: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=500&q=80' }
  ];

  /* ==========================================================================
     REACT BITS <THREADS /> WEBGL2 ENGINE
     Config: color="#aa2d2d", lineCount=90, thickness=1.1, softness=1.3,
     amplitude=1.7, distance=0.2, waves=1.05, speed=0.6, split=0.04, fray=0.5,
     angle=25, taper=0.85, brightness=1.4, parting=0, enableMouseInteraction=true
     ========================================================================== */
  function initReactBitsThreads() {
    const container = $('#threadsBgContainer');
    if (!container) return;

    const canvas = document.createElement('canvas');
    canvas.className = 'threads-canvas';
    container.appendChild(canvas);

    const gl = canvas.getContext('webgl2', {
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      depth: false,
      stencil: false
    });
    if (!gl) return;

    const LINE_VERTEX = `#version 300 es
    precision highp float;
    in vec2 aPoint;
    uniform float uTime;
    uniform vec2 uResolution;
    uniform vec2 uFrame;
    uniform float uAmplitude;
    uniform float uDistance;
    uniform vec2 uMouse;
    uniform float uCount;
    uniform float uThickness;
    uniform float uSoftness;
    uniform float uWaves;
    uniform float uSplit;
    uniform float uFray;
    uniform float uSeed;
    uniform vec2 uTurn;
    uniform vec4 uPart;
    uniform float uTaper;
    out float vEdge;
    out float vBand;
    out float vDraw;
    out float vAlpha;
    out float vIndex;

    float Perlin2D(vec2 P) {
      vec2 Pi = floor(P);
      vec4 Pf_Pfmin1 = P.xyxy - vec4(Pi, Pi + 1.0);
      vec4 Pt = vec4(Pi.xy, Pi.xy + 1.0);
      Pt = Pt - floor(Pt * (1.0 / 71.0)) * 71.0;
      Pt += vec2(26.0, 161.0).xyxy;
      Pt *= Pt;
      Pt = Pt.xzxz * Pt.yyww;
      vec4 hash_x = fract(Pt * (1.0 / 951.135664));
      vec4 hash_y = fract(Pt * (1.0 / 642.949883));
      vec4 grad_x = hash_x - 0.49999;
      vec4 grad_y = hash_y - 0.49999;
      vec4 grad_results = inversesqrt(grad_x * grad_x + grad_y * grad_y) * (grad_x * Pf_Pfmin1.xzxz + grad_y * Pf_Pfmin1.yyww);
      grad_results *= 1.4142135623730950;
      vec2 blend = Pf_Pfmin1.xy * Pf_Pfmin1.xy * Pf_Pfmin1.xy * (Pf_Pfmin1.xy * (Pf_Pfmin1.xy * 6.0 - 15.0) + 10.0);
      vec4 blend2 = vec4(blend, vec2(1.0 - blend));
      return dot(grad_results, blend2.zxzx * blend2.wwyy);
    }

    void main() {
      float perc = float(gl_InstanceID) / uCount;
      float x = aPoint.x;
      float pixel = 1.0 / max(uResolution.x, uResolution.y);
      float splitPoint = uSplit + perc * uFray;
      float amplitudeNormal = smoothstep(splitPoint, max(0.7, splitPoint + 0.2), x);
      float finalAmplitude = amplitudeNormal * 0.5 * uAmplitude * (1.0 + (uMouse.y - 0.5) * 0.2);
      float timeScaled = uTime / 10.0 + (uMouse.x - 0.5);
      float blur = smoothstep(splitPoint, splitPoint + 0.05, x) * perc;
      float xnoise = mix(
        Perlin2D(vec2(timeScaled * 2.5 + uSeed, (x * uWaves + perc) * 2.5)),
        Perlin2D(vec2(timeScaled * 3.5 + uSeed, (x * uWaves + timeScaled) * 3.5)) / 1.5,
        x * 0.3
      );
      float y = 0.5 + (perc - 0.5) * uDistance + xnoise / 2.0 * finalAmplitude;
      vec2 local = vec2((x - 0.5) * uFrame.x, (y - 0.5) * uFrame.y);
      if (uPart.z > 0.0) {
        vec2 delta = local - uPart.xy;
        float reach = uPart.w;
        float pull = exp(-dot(delta, delta) / (reach * reach));
        local.y += delta.y * pull * uPart.z;
      }
      float width = 7.0 * uThickness * pixel * (1.0 - perc);
      float band = (width / 2.0 + 10.0 * uSoftness * pixel * blur) * uFrame.y;
      float draw = max(band, 1.0);
      local.y += aPoint.y * draw;
      vec2 turned = vec2(local.x * uTurn.x - local.y * uTurn.y, local.x * uTurn.y + local.y * uTurn.x);
      gl_Position = vec4(turned / (uResolution * 0.5), 0.0, 1.0);
      vEdge = aPoint.y * draw;
      vBand = band;
      vDraw = draw;
      vAlpha = 1.0 - smoothstep(0.0, 1.0, pow(perc, 0.3)) * uTaper;
      vIndex = perc;
    }`;

    const LINE_FRAGMENT = `#version 300 es
    precision highp float;
    in float vEdge;
    in float vBand;
    in float vDraw;
    in float vAlpha;
    in float vIndex;
    uniform vec3 uColor;
    uniform vec3 uAccent;
    out vec4 outColor;
    void main() {
      float coverage = (1.0 - smoothstep(0.0, vDraw, abs(vEdge))) * (vBand / vDraw) * vAlpha;
      outColor = vec4(mix(uColor, uAccent, vIndex) * coverage, coverage);
    }`;

    const SCREEN_VERTEX = `#version 300 es
    in vec2 aPosition;
    out vec2 vUv;
    void main() {
      vUv = aPosition * 0.5 + 0.5;
      gl_Position = vec4(aPosition, 0.0, 1.0);
    }`;

    const SCREEN_FRAGMENT = `#version 300 es
    precision highp float;
    in vec2 vUv;
    uniform sampler2D uLines;
    uniform vec2 uResolution;
    uniform float uFade;
    uniform float uOpacity;
    uniform float uCurve;
    out vec4 outColor;

    float smootherstep(float edge, float x) {
      float t = clamp(x / edge, 0.0, 1.0);
      return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
    }

    void main() {
      vec4 lines = texture(uLines, vUv);
      float alpha = lines.a;
      vec3 color = alpha > 0.0001 ? lines.rgb / alpha : vec3(0.0);
      float mask = uOpacity;
      if (uFade > 0.0) {
        vec2 px = vUv * uResolution;
        float edge = uFade * min(uResolution.x, uResolution.y) * 0.5;
        mask *= smootherstep(edge, px.x) * smootherstep(edge, uResolution.x - px.x);
        mask *= smootherstep(edge, px.y) * smootherstep(edge, uResolution.y - px.y);
      }
      outColor = vec4(color * pow(alpha, uCurve), alpha) * mask;
    }`;

    const compile = (type, src) => {
      const sh = gl.createShader(type);
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      return sh;
    };
    const link = (vs, fs) => {
      const v = compile(gl.VERTEX_SHADER, vs);
      const f = compile(gl.FRAGMENT_SHADER, fs);
      const p = gl.createProgram();
      gl.attachShader(p, v);
      gl.attachShader(p, f);
      gl.linkProgram(p);
      return p;
    };

    const lineProgram = link(LINE_VERTEX, LINE_FRAGMENT);
    const screenProgram = link(SCREEN_VERTEX, SCREEN_FRAGMENT);
    if (!lineProgram || !screenProgram) return;

    const lineUniforms = {};
    [
      'uTime', 'uResolution', 'uFrame', 'uAmplitude', 'uDistance', 'uMouse',
      'uCount', 'uThickness', 'uSoftness', 'uWaves', 'uSplit', 'uFray',
      'uSeed', 'uTurn', 'uPart', 'uTaper', 'uColor', 'uAccent'
    ].forEach(n => (lineUniforms[n] = gl.getUniformLocation(lineProgram, n)));

    const screenUniforms = {};
    ['uLines', 'uResolution', 'uFade', 'uOpacity', 'uCurve'].forEach(
      n => (screenUniforms[n] = gl.getUniformLocation(screenProgram, n))
    );

    const lineVao = gl.createVertexArray();
    const lineBuffer = gl.createBuffer();
    gl.bindVertexArray(lineVao);
    gl.bindBuffer(gl.ARRAY_BUFFER, lineBuffer);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    const screenVao = gl.createVertexArray();
    const screenBuffer = gl.createBuffer();
    gl.bindVertexArray(screenVao);
    gl.bindBuffer(gl.ARRAY_BUFFER, screenBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    const target = gl.createTexture();
    const framebuffer = gl.createFramebuffer();
    gl.bindTexture(gl.TEXTURE_2D, target);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    const state = {
      time: 0,
      width: 1,
      height: 1,
      segments: 0,
      mouse: [0.5, 0.5],
      targetMouse: [0.5, 0.5],
      pointer: [0, 0],
      targetPointer: [0, 0],
      presence: 0,
      inside: false
    };

    // Color conversion for #aa2d2d (Primary Red) and Navy Blue Accent (#1E3A8A / #2563EB)
    const color = [170 / 255, 45 / 255, 45 / 255]; // #aa2d2d (Red)
    const accentColor = [37 / 255, 99 / 255, 235 / 255]; // #2563eb (Navy Blue Accent)

    function buildStrip(segments) {
      if (segments === state.segments) return;
      state.segments = segments;
      const points = new Float32Array((segments + 1) * 4);
      for (let i = 0; i <= segments; i++) {
        const u = i / segments;
        points.set([u, -1, u, 1], i * 4);
      }
      gl.bindBuffer(gl.ARRAY_BUFFER, lineBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW);
    }

    function resize() {
      const width = Math.max(1, container.clientWidth);
      const height = Math.max(1, container.clientHeight);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      state.width = width;
      state.height = height;

      gl.bindTexture(gl.TEXTURE_2D, target);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, canvas.width, canvas.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, target, 0);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);

      buildStrip(Math.max(96, Math.min(480, Math.round(width / 3))));
    }

    function render() {
      const w = canvas.width;
      const h = canvas.height;
      const radians = (25 * Math.PI) / 180;
      const cos = Math.cos(radians);
      const sin = Math.sin(radians);
      const length = Math.abs(w * cos) + Math.abs(h * sin);
      const across = Math.abs(w * sin) + Math.abs(h * cos);

      gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
      gl.viewport(0, 0, w, h);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

      gl.useProgram(lineProgram);
      gl.uniform1f(lineUniforms.uTime, state.time);
      gl.uniform2f(lineUniforms.uResolution, w, h);
      gl.uniform2f(lineUniforms.uFrame, length, across);
      gl.uniform1f(lineUniforms.uAmplitude, 1.7);
      gl.uniform1f(lineUniforms.uDistance, 0.2);
      gl.uniform2f(lineUniforms.uMouse, state.mouse[0], state.mouse[1]);
      gl.uniform1f(lineUniforms.uCount, 90);
      gl.uniform1f(lineUniforms.uThickness, 1.1);
      gl.uniform1f(lineUniforms.uSoftness, 1.3);
      gl.uniform1f(lineUniforms.uWaves, 1.05);
      gl.uniform1f(lineUniforms.uSplit, 0.04);
      gl.uniform1f(lineUniforms.uFray, 0.5);
      gl.uniform1f(lineUniforms.uSeed, 0);
      gl.uniform2f(lineUniforms.uTurn, cos, sin);
      gl.uniform4f(lineUniforms.uPart, 0, 0, 0, 0);
      gl.uniform1f(lineUniforms.uTaper, 0.85);
      gl.uniform3f(lineUniforms.uColor, color[0], color[1], color[2]);
      gl.uniform3f(lineUniforms.uAccent, accentColor[0], accentColor[1], accentColor[2]);

      gl.bindVertexArray(lineVao);
      gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, (state.segments + 1) * 2, 90);

      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, w, h);
      gl.disable(gl.BLEND);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(screenProgram);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, target);
      gl.uniform1i(screenUniforms.uLines, 0);
      gl.uniform2f(screenUniforms.uResolution, w, h);
      gl.uniform1f(screenUniforms.uFade, 0);
      gl.uniform1f(screenUniforms.uOpacity, 1);
      gl.uniform1f(screenUniforms.uCurve, 2 / 1.4);

      gl.bindVertexArray(screenVao);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }

    let lastTime = 0;
    function animateThreads(now) {
      const dt = lastTime ? Math.min(0.05, (now - lastTime) / 1000) : 1 / 60;
      lastTime = now;
      state.time += dt * 0.6;

      state.mouse[0] += (state.targetMouse[0] - state.mouse[0]) * (1 - Math.exp(-dt * 3));
      state.mouse[1] += (state.targetMouse[1] - state.mouse[1]) * (1 - Math.exp(-dt * 3));

      render();
      requestAnimationFrame(animateThreads);
    }

    window.addEventListener('mousemove', (e) => {
      state.targetMouse = [e.clientX / window.innerWidth, 1 - e.clientY / window.innerHeight];
    });

    window.addEventListener('resize', resize);
    resize();
    requestAnimationFrame(animateThreads);
  }

  /* ==========================================================================
     CONTINUOUS STAGE SCROLL CHOREOGRAPHY
     ========================================================================== */
  function initContinuousStageScroll() {
    const scene = $('.stage-scroll-section');
    if (!scene) return;

    const content = $('.stage-hero-content');
    const vignette = $('.stage-vignette');
    const leftCurtain = $('.curtain-left');
    const rightCurtain = $('.curtain-right');
    const windows = [
      $('.stage-window-a'),
      $('.stage-window-b'),
      $('.stage-window-c')
    ];
    const wordmark = $('.stage-wordmark');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

    const clamp = (n, min = 0, max = 1) => Math.min(max, Math.max(min, n));
    const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

    function updateStageScroll() {
      if (reduced.matches) return;

      const rect = scene.getBoundingClientRect();
      const totalScrollable = Math.max(1, rect.height - window.innerHeight);
      const p = clamp(-rect.top / totalScrollable);
      const eased = ease(p);

      if (content) {
        content.style.transform = `translate3d(0, ${-eased * 36}vh, 0) scale(${1 - eased * 0.08})`;
        content.style.opacity = String(1 - clamp((p - 0.35) / 0.35) * 0.95);
      }

      if (leftCurtain) {
        leftCurtain.style.transform = `translate3d(${-eased * 44}vw, ${-eased * 2}vh, 0) skewX(-8deg) scaleX(${1 - eased * 0.16})`;
      }
      if (rightCurtain) {
        rightCurtain.style.transform = `translate3d(${eased * 44}vw, ${-eased * 2}vh, 0) skewX(8deg) scaleX(${1 - eased * 0.16})`;
      }

      const posterProgress = clamp((p - 0.15) / 0.55);
      const exitProgress = clamp((p - 0.65) / 0.35);

      if (windows[0]) {
        windows[0].style.transform = `translate3d(${ease(posterProgress) * 22}vw, ${-ease(posterProgress) * 8}vh, 0) rotate(${-3 + ease(posterProgress) * 6}deg) scale(${1 + ease(posterProgress) * 0.42})`;
      }
      if (windows[1]) {
        windows[1].style.transform = `translate3d(0, ${-ease(posterProgress) * 14}vh, 0) rotate(${ease(posterProgress) * 1.5}deg) scale(${1 + ease(posterProgress) * 0.55})`;
      }
      if (windows[2]) {
        windows[2].style.transform = `translate3d(${-ease(posterProgress) * 22}vw, ${-ease(posterProgress) * 8}vh, 0) rotate(${3 - ease(posterProgress) * 6}deg) scale(${1 + ease(posterProgress) * 0.42})`;
      }

      windows.forEach((w) => {
        if (!w) return;
        w.style.opacity = String(0.8 + posterProgress * 0.18 - exitProgress * 0.85);
        w.classList.toggle('is-poster', posterProgress > 0.35);
      });

      if (wordmark) {
        wordmark.style.transform = `translate3d(0, ${-eased * 22}vh, 0) scale(${1 + eased * 0.25})`;
        wordmark.style.opacity = String(0.55 * (1 - exitProgress));
      }

      if (vignette) {
        vignette.style.opacity = String(0.9 + exitProgress * 0.1);
      }

      scene.classList.toggle('is-complete', p > 0.98);
    }

    let ticking = false;
    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            updateStageScroll();
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true }
    );
    updateStageScroll();
  }

  /* ==========================================================================
     ARCHIVE POSTERS RENDERER
     ========================================================================== */
  function renderArchivePosters() {
    const row = $('#posterRow');
    if (!row) return;

    row.innerHTML = POSTERS_DATA.map(
      (p, i) => `
      <article class="poster-card">
        <div class="poster-art-bg" style="background-image: url('${p.photo}')"></div>
        <div class="poster-gradient"></div>
        <div class="poster-top">
          <span>${p.edition} · ${p.year}</span>
          <span>TEDxVITPUNE</span>
        </div>
        <div class="poster-title">${p.title}</div>
        <div class="poster-bottom">
          <span>${p.theme.toUpperCase()}</span>
          <span>THRESHOLD 0${i + 1} ↗</span>
        </div>
      </article>
    `
    ).join('');
  }

  /* ==========================================================================
     1. CINEMATIC PRE-LOADER & AUDIO SYNTHESIZER
     ========================================================================== */
  let audioContext = null;
  let audioGain = null;
  let isAudioPlaying = false;

  function initAudioSynth() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      audioContext = new AudioContext();
      const osc = audioContext.createOscillator();
      audioGain = audioContext.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(55, audioContext.currentTime);
      audioGain.gain.setValueAtTime(0.001, audioContext.currentTime);

      osc.connect(audioGain);
      audioGain.connect(audioContext.destination);
      osc.start();
    } catch (err) {
      console.warn('Web Audio API not supported:', err);
    }
  }

  function toggleAudio() {
    if (!audioContext) initAudioSynth();
    if (!audioContext) return;

    if (audioContext.state === 'suspended') audioContext.resume();

    if (isAudioPlaying) {
      audioGain.gain.setTargetAtTime(0.0001, audioContext.currentTime, 0.2);
      isAudioPlaying = false;
      $('#audioStatusText').textContent = 'Sound: OFF';
      $('#audioToggleBtn')?.classList.remove('audio-active');
    } else {
      audioGain.gain.setTargetAtTime(0.08, audioContext.currentTime, 0.2);
      isAudioPlaying = true;
      $('#audioStatusText').textContent = 'Sound: ON';
      $('#audioToggleBtn')?.classList.add('audio-active');
    }
  }

  $('#audioToggleBtn')?.addEventListener('click', toggleAudio);

  function runCinematicCanvas() {
    const canvas = $('#cinematicCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.6 + 0.2
    }));

    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.strokeStyle = `rgba(230, 43, 30, ${0.18 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.fillStyle = `rgba(230, 43, 30, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!$('#cinematicOverlay')?.classList.contains('dismissed')) {
        requestAnimationFrame(animate);
      }
    }
    animate();
  }

  let stageTimer1, stageTimer2, stageTimer3;

  function transitionStage(fromId, toId) {
    const from = $(`#${fromId}`);
    const to = $(`#${toId}`);
    if (from) {
      from.classList.add('exit');
      setTimeout(() => {
        from.classList.remove('active', 'exit');
      }, 560);
    }
    if (to) {
      setTimeout(() => to.classList.add('active'), 60);
    }
  }

  function runCinematicSequence() {
    runCinematicCanvas();

    // Stage 0 → 1  (1.8s)
    stageTimer1 = setTimeout(() => {
      transitionStage('cinStage0', 'cinStage1');
    }, 1800);

    // Stage 1 → 2  (3.8s) — theme reel
    stageTimer2 = setTimeout(() => {
      transitionStage('cinStage1', 'cinStage2');

      const themes = [
        '2021 · UNRAVEL',
        '2022 · RESURGENCE',
        '2023 · FRAGMENTS',
        '2024 · THE SPACE BETWEEN',
        '2025 · DIMES OF DYNAMISM'
      ];
      let idx = 0;
      const interval = setInterval(() => {
        if (idx < themes.length) {
          const parts = themes[idx].split(' · ');
          const counter = $('#cinFrameCounter');
          const themeName = $('#cinThemeName');
          if (counter) counter.textContent = `EDITION 0${idx + 1} / 10`;
          if (themeName) {
            themeName.style.opacity = '0';
            themeName.style.transform = 'translateY(8px)';
            setTimeout(() => {
              themeName.textContent = parts[1];
              themeName.style.transition = 'opacity 0.2s, transform 0.2s';
              themeName.style.opacity = '1';
              themeName.style.transform = 'translateY(0)';
            }, 120);
          }
          idx++;
        } else {
          clearInterval(interval);
        }
      }, 280);

    }, 3800);

    // Stage 2 → 3  (6.0s) — CTA
    stageTimer3 = setTimeout(() => {
      transitionStage('cinStage2', 'cinStage3');
    }, 6000);
  }

  function dismissCinematic() {
    clearTimeout(stageTimer1);
    clearTimeout(stageTimer2);
    clearTimeout(stageTimer3);
    const overlay = $('#cinematicOverlay');
    if (overlay) overlay.classList.add('dismissed');
  }

  $('#enterExperienceBtn')?.addEventListener('click', dismissCinematic);
  $('#skipCinematicBtn')?.addEventListener('click', dismissCinematic);

  /* ==========================================================================
     CUSTOM SPRING CURSOR
     ========================================================================== */
  function initCustomCursor() {
    const cursor = $('#customCursor');
    if (!cursor) return;

    window.addEventListener('mousemove', (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    const interactiveSelectors = 'a, button, input, select, .pillar-card, .edition-poster-card, .lookbook-item, .cylinder-card, .poster-card';
    $$(interactiveSelectors).forEach((el) => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
    });
  }

  /* ==========================================================================
     3.4 PREVIOUS SPEAKERS SHOWCASE & AUDIO VISUALIZER
     ========================================================================== */
  let currentSpeakerIdx = 0;
  let audioVisualizerActive = false;

  function renderSpeakers() {
    const strip = $('#speakerThumbnails');
    if (!strip) return;

    strip.innerHTML = SPEAKERS_DATA.map(
      (s, idx) => `
      <div class="speaker-thumb-card ${idx === 0 ? 'active' : ''}" data-index="${idx}">
        <img src="${s.photo}" alt="${s.name}" loading="lazy" />
        <span>${s.name.split(' ')[0]}</span>
      </div>
    `
    ).join('');

    $$('.speaker-thumb-card').forEach((card) => {
      card.addEventListener('click', () => selectSpeaker(+card.dataset.index));
    });

    selectSpeaker(0);
    initSpeakerVisualizer();
  }

  function selectSpeaker(idx) {
    currentSpeakerIdx = (idx + SPEAKERS_DATA.length) % SPEAKERS_DATA.length;
    const s = SPEAKERS_DATA[currentSpeakerIdx];

    $('#speakerHeroImg').src = s.photo;
    $('#speakerHeroImg').alt = s.name;
    $('#speakerNameDisplay').textContent = s.name;
    $('#speakerRoleDisplay').textContent = s.role;
    $('#speakerFieldTag').textContent = s.field;
    $('#speakerTalkTitle').textContent = s.talkTitle;
    $('#speakerBioDisplay').textContent = s.bio;
    $('#speakerEditionTag').textContent = s.edition;
    $('#speakerCounter').textContent = `${String(currentSpeakerIdx + 1).padStart(2, '0')} / ${String(SPEAKERS_DATA.length).padStart(2, '0')}`;

    $$('.speaker-thumb-card').forEach((thumb, i) => {
      thumb.classList.toggle('active', i === currentSpeakerIdx);
    });
  }

  $('#prevSpeakerBtn')?.addEventListener('click', () => selectSpeaker(currentSpeakerIdx - 1));
  $('#nextSpeakerBtn')?.addEventListener('click', () => selectSpeaker(currentSpeakerIdx + 1));

  function initSpeakerVisualizer() {
    const canvas = $('#speakerAudioCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 250;

    let bars = Array.from({ length: 32 }, () => Math.random() * 40 + 5);

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const barWidth = canvas.width / bars.length;

      bars.forEach((height, i) => {
        if (audioVisualizerActive) {
          bars[i] = Math.sin(Date.now() * 0.005 + i * 0.3) * 45 + 50;
        } else {
          bars[i] = Math.sin(Date.now() * 0.002 + i * 0.2) * 15 + 20;
        }

        ctx.fillStyle = audioVisualizerActive ? 'rgba(230, 43, 30, 0.7)' : 'rgba(255, 255, 255, 0.15)';
        ctx.fillRect(i * barWidth + 2, canvas.height - bars[i], barWidth - 4, bars[i]);
      });

      requestAnimationFrame(draw);
    }
    draw();

    $('.video-preview-wrap')?.addEventListener('mouseenter', () => (audioVisualizerActive = true));
    $('.video-preview-wrap')?.addEventListener('mouseleave', () => (audioVisualizerActive = false));
    $('#watchFullTalkBtn')?.addEventListener('click', () => {
      showToast(`Streaming talk: ${SPEAKERS_DATA[currentSpeakerIdx].talkTitle}`);
    });
    $('#speakerTranscriptBtn')?.addEventListener('click', () => {
      showToast(`Speaker Synopsis: ${SPEAKERS_DATA[currentSpeakerIdx].bio.slice(0, 80)}...`);
    });
  }

  /* ==========================================================================
     3.5 PREVIOUS EDITIONS ARCHIVE SLIDER
     ========================================================================== */
  function renderEditionsSlider() {
    const slider = $('#editionsSlider');
    if (!slider) return;

    slider.innerHTML = EDITIONS_DATA.map(
      (e) => `
      <article class="edition-poster-card" tabindex="0">
        <div class="edition-poster-bg" style="background-image: url('${e.photo}')"></div>
        <div class="edition-poster-gradient"></div>
        <div class="edition-card-top">
          <span class="edition-year-chip">${e.year} · ${e.edition}</span>
        </div>
        <div class="edition-card-content">
          <h3 class="edition-theme-heading">${e.theme}</h3>
          <p class="edition-theme-desc">${e.desc}</p>
        </div>
        <div class="edition-card-bottom">
          <span>${e.badge}</span>
          <span>EXPLORE ARCHIVE ↗</span>
        </div>
      </article>
    `
    ).join('');
  }

  /* ==========================================================================
     4.1 ABOUT SECTION THREE.JS TORUS SCENE
     ========================================================================== */
  function initAboutTorusScene() {
    const container = $('#aboutTorusCanvas');
    if (!container || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x080808, 20, 80);

    const camera = new THREE.PerspectiveCamera(55, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.z = 32;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const torusGeo = new THREE.TorusKnotGeometry(10, 2.5, 128, 24);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0xe62b1e,
      roughness: 0.4,
      metalness: 0.4,
      wireframe: true
    });

    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    scene.add(torusMesh);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x2563eb, 2, 60);
    pointLight.position.set(15, 15, 20);
    scene.add(pointLight);

    function animate() {
      requestAnimationFrame(animate);
      torusMesh.rotation.x += 0.003;
      torusMesh.rotation.y += 0.005;
      renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
      if (!container.clientWidth) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });
  }

  function initStoryTabs() {
    const tabs = $$('.story-tab');
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        $$('.story-card').forEach((c) => c.classList.remove('active'));

        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        const storyId = tab.dataset.story;
        const targetCard = $(`#story${storyId.charAt(0).toUpperCase() + storyId.slice(1)}`);
        if (targetCard) targetCard.classList.add('active');
      });
    });
  }

  /* ==========================================================================
     4.2 LOOKBOOK GALLERY
     ========================================================================== */
  function renderLookbookGallery() {
    const masonry = $('#lookbookMasonry');
    if (!masonry) return;

    masonry.innerHTML = LOOKBOOK_IMAGES.map(
      (img, i) => `
      <div class="lookbook-item" data-category="${img.tag}" data-index="${i}">
        <img src="${img.url}" alt="${img.title}" loading="lazy" />
        <div class="lookbook-item-overlay">
          <span class="lookbook-tag">#${img.tag.toUpperCase()}</span>
          <h4 class="lookbook-item-title">${img.title}</h4>
        </div>
      </div>
    `
    ).join('');

    $$('.lookbook-item').forEach((item) => {
      item.addEventListener('click', () => {
        const idx = +item.dataset.index;
        const data = LOOKBOOK_IMAGES[idx];
        $('#lightboxImg').src = data.url;
        $('#lightboxTitle').textContent = data.title;
        $('#lightboxSubtitle').textContent = `#${data.tag.toUpperCase()} · TEDxVITPune Lookbook Archive`;
        $('#lightboxModal')?.classList.add('open');
      });
    });

    $$('.filter-chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        $$('.filter-chip').forEach((c) => c.classList.remove('active'));
        chip.classList.add('active');
        const filter = chip.dataset.filter;

        $$('.lookbook-item').forEach((item) => {
          if (filter === 'all' || item.dataset.category === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  $('#closeLightbox')?.addEventListener('click', () => {
    $('#lightboxModal')?.classList.remove('open');
  });

  /* ==========================================================================
     4.3 COMMUNITY CONVERSATIONS 3D ROTARY CYLINDER (iG)
     ========================================================================== */
  let cylinderRotation = 0;
  let isDraggingCylinder = false;
  let dragStartX = 0;

  function render3DCylinder() {
    const cylinder = $('#cylinderCarousel');
    if (!cylinder) return;

    const angleStep = 360 / CYLINDER_SEASONS.length;
    const radius = 280;

    cylinder.innerHTML = CYLINDER_SEASONS.map(
      (s, i) => `
      <div class="cylinder-card" style="transform: rotateY(${i * angleStep}deg) translateZ(${radius}px);">
        <div class="cylinder-card-bg" style="background-image: url('${s.photo}')"></div>
        <div>
          <span class="section-label">${s.date}</span>
          <h4 class="story-heading">${s.title}</h4>
        </div>
        <div class="story-badge">${s.theme}</div>
      </div>
    `
    ).join('');

    function spinLoop() {
      if (!isDraggingCylinder) {
        cylinderRotation += 0.25;
        cylinder.style.transform = `rotateY(${cylinderRotation}deg)`;
      }
      requestAnimationFrame(spinLoop);
    }
    spinLoop();

    const wrap = $('.cylinder-stage-wrapper');
    if (wrap) {
      wrap.addEventListener('mousedown', (e) => {
        isDraggingCylinder = true;
        dragStartX = e.clientX;
      });
      window.addEventListener('mousemove', (e) => {
        if (!isDraggingCylinder) return;
        const delta = e.clientX - dragStartX;
        dragStartX = e.clientX;
        cylinderRotation += delta * 0.5;
        cylinder.style.transform = `rotateY(${cylinderRotation}deg)`;
      });
      window.addEventListener('mouseup', () => (isDraggingCylinder = false));
    }
  }

  /* ==========================================================================
     4.4 NEWSLETTER "GENESIS" 2D CANVAS RENDERER (EX)
     ========================================================================== */
  let currentDocPage = 1;
  const TOTAL_DOC_PAGES = 4;

  function renderNewsletterPage(page) {
    const canvas = $('#newsletterCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    ctx.fillStyle = '#f8f6f0';
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = '#e62b1e';
    ctx.lineWidth = 4;
    ctx.strokeRect(30, 30, w - 60, h - 60);

    ctx.fillStyle = '#111111';
    ctx.font = 'bold 36px "Space Grotesk", sans-serif';
    ctx.fillText('TEDxVITPune', 60, 90);

    ctx.fillStyle = '#e62b1e';
    ctx.font = 'bold 16px "DM Mono", monospace';
    ctx.fillText('NEWSLETTER ISSUE · GENESIS', w - 340, 85);

    ctx.strokeStyle = '#d5d0c5';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(60, 115);
    ctx.lineTo(w - 60, 115);
    ctx.stroke();

    if (page === 1) {
      ctx.fillStyle = '#0a0a0a';
      ctx.font = 'bold 64px "Syne", sans-serif';
      ctx.fillText('DIMES OF', 60, 240);
      ctx.fillStyle = '#e62b1e';
      ctx.fillText('DYNAMISM', 60, 310);

      ctx.fillStyle = '#444444';
      ctx.font = '20px "DM Sans", sans-serif';
      ctx.fillText('Volume 01 · Official Flagship Publication', 60, 360);

      ctx.fillStyle = '#181818';
      ctx.fillRect(60, 420, w - 120, 520);

      ctx.fillStyle = '#2563eb';
      ctx.font = 'italic 26px "Playfair Display", serif';
      ctx.fillText('“A decade of transformative voices, distilled onto paper.”', 90, 700);

      ctx.fillStyle = '#ffffff';
      ctx.font = '14px "DM Mono", monospace';
      ctx.fillText('CURATED BY THE EDITORIAL BOARD OF TEDxVITPUNE', 90, 880);
    } else if (page === 2) {
      ctx.fillStyle = '#0a0a0a';
      ctx.font = 'bold 38px "Space Grotesk", sans-serif';
      ctx.fillText('Foreword: Beyond the 18-Minute Standard', 60, 180);

      ctx.fillStyle = '#333333';
      ctx.font = '18px "DM Sans", sans-serif';
      const p1 = 'When TED began in 1984, the convergence of Technology, Entertainment, and Design was a daring premise. Fast forward forty years, and the world has fragmented into specialized niches that desperately require cross-pollination.';
      const p2 = 'At TEDxVITPune, our tenth edition explores Dimes of Dynamism — ten fundamental vectors reshaping technology, bio-ethics, artistic expression, and civic infrastructure.';

      wrapText(ctx, p1, 60, 240, w - 120, 28);
      wrapText(ctx, p2, 60, 380, w - 120, 28);

      ctx.fillStyle = '#fee2e2';
      ctx.fillRect(60, 550, w - 120, 160);
      ctx.fillStyle = '#e62b1e';
      ctx.font = 'bold 20px "DM Mono", monospace';
      ctx.fillText('“Ideas do not flourish in isolation; they collide in the open.”', 90, 630);
    } else if (page === 3) {
      ctx.fillStyle = '#0a0a0a';
      ctx.font = 'bold 38px "Space Grotesk", sans-serif';
      ctx.fillText('Speaker Spotlights: The Vanguard of Pune', 60, 180);

      ctx.fillStyle = '#333333';
      ctx.font = '18px "DM Sans", sans-serif';
      wrapText(ctx, '1. Sujay Dhake — Decarbonizing built environments through biophilic structural logic.', 60, 250, w - 120, 26);
      wrapText(ctx, '2. Dr. Vaishali Shukla — Cognitive neurobiology and ancient Ayurvedic circadian rhythms.', 60, 340, w - 120, 26);
      wrapText(ctx, '3. Avani Gadre — Humanity through raw lens visual journalism and subculture archives.', 60, 430, w - 120, 26);
    } else {
      ctx.fillStyle = '#0a0a0a';
      ctx.font = 'bold 38px "Space Grotesk", sans-serif';
      ctx.fillText('Community Dialogues: The Journey Ahead', 60, 180);

      ctx.fillStyle = '#333333';
      ctx.font = '18px "DM Sans", sans-serif';
      wrapText(ctx, 'Join our year-round salons and Community Conversations. Together, we continue cultivating a living archive of ideas that challenge complacency.', 60, 260, w - 120, 28);

      ctx.fillStyle = '#e62b1e';
      ctx.fillRect(60, 600, w - 120, 100);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 22px "Space Grotesk", sans-serif';
      ctx.fillText('Register for the upcoming Edition 10 Conference →', 100, 660);
    }

    ctx.fillStyle = '#888888';
    ctx.font = '14px "DM Mono", monospace';
    ctx.fillText(`PAGE ${page} OF ${TOTAL_DOC_PAGES} · TEDxVITPUNE ARCHIVES`, 60, h - 50);

    $('#pageIndicator').textContent = `Page ${page} of ${TOTAL_DOC_PAGES}`;
  }

  function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && n > 0) {
        ctx.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, y);
  }

  $('#newsletterCanvas')?.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    showToast('🔒 Document content is protected.');
  });

  $('#prevPageBtn')?.addEventListener('click', () => {
    if (currentDocPage > 1) {
      currentDocPage--;
      renderNewsletterPage(currentDocPage);
    }
  });
  $('#nextPageBtn')?.addEventListener('click', () => {
    if (currentDocPage < TOTAL_DOC_PAGES) {
      currentDocPage++;
      renderNewsletterPage(currentDocPage);
    }
  });

  /* ==========================================================================
     4.6 AUTH & PERSONA ARCHETYPE CALCULATOR
     ========================================================================== */
  const ARCHETYPES = {
    catalyst: {
      name: 'THE CATALYST',
      icon: '⚡',
      desc: 'You thrive on breaking inertia. Where others deliberate, you ignite movement and galvanize radical change.',
      color: '#e62b1e'
    },
    visionary: {
      name: 'THE VISIONARY',
      icon: '🔮',
      desc: 'You synthesize weak signals into comprehensive strategic futures. You map the terrain before others notice the horizon.',
      color: '#2563eb'
    },
    architect: {
      name: 'THE ARCHITECT',
      icon: '🏛️',
      desc: 'You turn raw passion into durable, scalable systems. You design frameworks that outlive temporary trends.',
      color: '#e62b1e'
    },
    explorer: {
      name: 'THE EXPLORER',
      icon: '🧭',
      desc: 'Driven by unrelenting curiosity, you bridge disparate disciplines and uncover truth in uncharted territories.',
      color: '#10b981'
    }
  };

  function initMeshGradient() {
    const canvas = $('#meshGradientCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 600;

    let t = 0;
    function animateMesh() {
      t += 0.01;
      const grad = ctx.createRadialGradient(
        250 + Math.sin(t) * 120,
        300 + Math.cos(t) * 120,
        40,
        250,
        300,
        350
      );
      grad.addColorStop(0, '#e62b1e');
      grad.addColorStop(0.4, '#0a192f');
      grad.addColorStop(0.7, '#1e3a8a');
      grad.addColorStop(1, '#0d0d0d');

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      requestAnimationFrame(animateMesh);
    }
    animateMesh();
  }

  function initAuthModal() {
    const modal = $('#authModal');
    $('#authPillBtn')?.addEventListener('click', () => modal?.classList.add('open'));
    $('#mobAuthBtn')?.addEventListener('click', () => {
      $('#mobileDrawer')?.classList.remove('open');
      modal?.classList.add('open');
    });
    $('#closeAuthModal')?.addEventListener('click', () => modal?.classList.remove('open'));

    $('#tabSignupBtn')?.addEventListener('click', () => {
      $('#tabSignupBtn').classList.add('active');
      $('#tabLoginBtn').classList.remove('active');
      $('#signupPane').classList.add('active');
      $('#loginPane').classList.remove('active');
    });

    $('#tabLoginBtn')?.addEventListener('click', () => {
      $('#tabLoginBtn').classList.add('active');
      $('#tabSignupBtn').classList.remove('active');
      $('#loginPane').classList.add('active');
      $('#signupPane').classList.remove('active');
    });

    $('#personaForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = $('#userNameInput').value.trim() || 'Attendee';
      const interest = $('#userInterestInput').value;
      const arc = ARCHETYPES[interest] || ARCHETYPES.catalyst;

      $('#personaForm').style.display = 'none';
      const resultCard = $('#archetypeResultCard');
      resultCard.style.display = 'block';

      $('#archetypeIcon').textContent = arc.icon;
      $('#archetypeTypeLabel').textContent = arc.name;
      $('#archetypeTypeLabel').style.color = arc.color;
      $('#archetypeUserName').textContent = name;
      $('#archetypeDesc').textContent = arc.desc;

      $('#authPillLabel').textContent = `${arc.icon} ${name.split(' ')[0]}`;
      showToast(`Welcome ${name}! You are registered as ${arc.name}.`);
    });

    $('#archetypeDoneBtn')?.addEventListener('click', () => {
      modal?.classList.remove('open');
    });

    $('#loginForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = $('#loginEmail').value;
      $('#authPillLabel').textContent = 'MEMBER ACTIVE';
      modal?.classList.remove('open');
      showToast(`Logged in successfully with ${email}`);
    });

    $('#sendOtpBtn')?.addEventListener('click', () => {
      showToast('OTP sent to your email: 884-219');
      let count = 60;
      const timerSpan = $('#otpCountdown');
      const timer = setInterval(() => {
        count--;
        if (count > 0) {
          timerSpan.textContent = `Resend in ${count}s`;
        } else {
          clearInterval(timer);
          timerSpan.textContent = 'Resend OTP';
        }
      }, 1000);
    });
  }

  /* ==========================================================================
     TICKETING CHECKOUT MODAL
     ========================================================================== */
  function initTicketingModal() {
    const modal = $('#ticketModal');
    $$('.book-pass-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const tier = btn.dataset.tier;
        const price = btn.dataset.price;
        $('#checkoutPassTitle').textContent = tier;
        $('#checkoutPrice').textContent = `₹${price}`;
        $('#checkoutForm').style.display = 'flex';
        $('#checkoutSuccess').style.display = 'none';
        modal?.classList.add('open');
      });
    });

    $('#closeTicketModal')?.addEventListener('click', () => modal?.classList.remove('open'));
    $('#checkoutDoneBtn')?.addEventListener('click', () => modal?.classList.remove('open'));

    $('#checkoutForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      $('#checkoutForm').style.display = 'none';
      $('#checkoutSuccess').style.display = 'block';
      showToast('Pass booked successfully! Check your email for QR code.');
    });
  }

  /* ==========================================================================
     NEWSLETTER SUBSCRIPTION FORM
     ========================================================================== */
  function initSubscriptionForm() {
    const form = $('#newsletterForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = $('#newsletterEmail');
      const email = input.value.trim();
      const feedback = $('#newsletterFeedback');
      const btnText = $('#subBtnText');
      const spinner = $('#subSpinner');

      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        feedback.className = 'form-feedback error';
        feedback.textContent = 'Please provide a valid email address.';
        return;
      }

      btnText.style.display = 'none';
      spinner.style.display = 'inline-block';

      setTimeout(() => {
        btnText.style.display = 'inline-block';
        spinner.style.display = 'none';
        feedback.className = 'form-feedback success';
        feedback.textContent = 'Thank you for joining our intellectual community!';
        input.value = '';
        showToast('Subscribed to TEDxVITPune Genesis newsletter!');
      }, 1000);
    });
  }

  /* ==========================================================================
     NAVIGATION & SCROLL PROGRESS
     ========================================================================== */
  function initNavigation() {
    const drawer = $('#mobileDrawer');
    $('#mobileNavToggle')?.addEventListener('click', () => drawer?.classList.add('open'));
    $('#closeDrawerBtn')?.addEventListener('click', () => drawer?.classList.remove('open'));

    $$('.mob-link').forEach((link) => {
      link.addEventListener('click', () => drawer?.classList.remove('open'));
    });

    window.addEventListener(
      'scroll',
      () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
        const bar = $('#scrollProgress');
        if (bar) bar.style.width = `${Math.min(100, progress)}%`;
      },
      { passive: true }
    );
  }

  function showToast(msg) {
    const container = $('#toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.textContent = msg;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  /* ==========================================================================
     APP BOOTSTRAPPER
     ========================================================================== */
  window.addEventListener('DOMContentLoaded', () => {
    runCinematicSequence();
    initCustomCursor();
    initReactBitsThreads();
    initContinuousStageScroll();
    renderArchivePosters();
    renderSpeakers();
    renderEditionsSlider();
    initAboutTorusScene();
    initStoryTabs();
    renderLookbookGallery();
    render3DCylinder();
    renderNewsletterPage(1);
    initMeshGradient();
    initAuthModal();
    initTicketingModal();
    initSubscriptionForm();
    initNavigation();
  });
})();
