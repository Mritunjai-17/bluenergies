'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

/**
 * High-Precision 3D Seismic Volume Block Engine (Bespoke Canvas 3D)
 * Built to the standards of institutional geoscientific platforms (Schlumberger Petrel, CGG, PGS).
 * Zero heavy external dependencies; 60 FPS hardware-accelerated canvas with physics damping.
 */
export default function SeismicCube3D({ activeHorizon = 'all', onHorizonChange }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [depthSlice, setDepthSlice] = useState(3240); // Depth in meters subsea
  const [autoRotate, setAutoRotate] = useState(true);

  // Interaction & Physics state stored in ref for 60fps rendering without React re-render lag
  const stateRef = useRef({
    yaw: -0.35,        // Radians around Y axis
    pitch: 0.42,       // Radians around X axis
    targetYaw: -0.35,
    targetPitch: 0.42,
    lastMouseX: 0,
    lastMouseY: 0,
    explodeProgress: 0, // 0 = unified, 1 = exploded
    targetExplode: 0,
    sliceDepth: 3240,
    autoRotateSpeed: 0.0018,
    isHovered: false,
    activeHorizon: 'all'
  });

  // Synchronize activeHorizon with internal state
  useEffect(() => {
    stateRef.current.activeHorizon = activeHorizon;
    stateRef.current.targetExplode = activeHorizon === 'reservoir' || activeHorizon === 'shale' ? 1 : 0;
  }, [activeHorizon]);

  // Synchronize depthSlice
  useEffect(() => {
    stateRef.current.sliceDepth = depthSlice;
  }, [depthSlice]);

  // Handle Drag Start
  const handlePointerDown = (e) => {
    setIsDragging(true);
    setAutoRotate(false);
    stateRef.current.lastMouseX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    stateRef.current.lastMouseY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
  };

  // Handle Drag Move with Damping
  const handlePointerMove = useCallback((e) => {
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

    if (isDragging) {
      const deltaX = clientX - stateRef.current.lastMouseX;
      const deltaY = clientY - stateRef.current.lastMouseY;
      stateRef.current.lastMouseX = clientX;
      stateRef.current.lastMouseY = clientY;

      stateRef.current.targetYaw += deltaX * 0.007;
      stateRef.current.targetPitch += deltaY * 0.007;

      // Constrain pitch to institutional viewing angles (approx 15° to 55°)
      stateRef.current.targetPitch = Math.max(0.2, Math.min(0.85, stateRef.current.targetPitch));
      // Constrain yaw to front-quarter view (-55° to +55°)
      stateRef.current.targetYaw = Math.max(-0.85, Math.min(0.85, stateRef.current.targetYaw));
    }
  }, [isDragging]);

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handleResetView = () => {
    stateRef.current.targetYaw = -0.35;
    stateRef.current.targetPitch = 0.42;
    stateRef.current.sliceDepth = 3240;
    setDepthSlice(3240);
    if (onHorizonChange) onHorizonChange('all');
  };

  // Main 3D Canvas Projection Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = (rect.height || 430) * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height || 430}px`;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 3D Matrix Projection Helpers
    const project = (x, y, z, yaw, pitch, cx, cy, fov = 750) => {
      // Rotate around Y (Yaw)
      const cosY = Math.cos(yaw);
      const sinY = Math.sin(yaw);
      const x1 = x * cosY + z * sinY;
      const z1 = -x * sinY + z * cosY;

      // Rotate around X (Pitch)
      const cosP = Math.cos(pitch);
      const sinP = Math.sin(pitch);
      const y2 = y * cosP - z1 * sinP;
      const z2 = y * sinP + z1 * cosP;

      // Perspective scale factor
      const scale = fov / (fov + z2 + 400);
      return {
        x: cx + x1 * scale,
        y: cy + y2 * scale,
        z: z2,
        scale
      };
    };

    // Render loop
    const render = () => {
      const state = stateRef.current;
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);
      const cx = width * 0.48;
      const cy = height * 0.48;

      // Smooth physics damping (spring decay)
      if (autoRotate && !isDragging) {
        state.targetYaw += state.autoRotateSpeed;
        if (state.targetYaw > 0.45) state.autoRotateSpeed = -Math.abs(state.autoRotateSpeed);
        if (state.targetYaw < -0.45) state.autoRotateSpeed = Math.abs(state.autoRotateSpeed);
      }

      state.yaw += (state.targetYaw - state.yaw) * 0.08;
      state.pitch += (state.targetPitch - state.pitch) * 0.08;
      state.explodeProgress += (state.targetExplode - state.explodeProgress) * 0.1;

      // Clear Canvas
      ctx.clearRect(0, 0, width, height);

      // Deep Subsea Background Mesh Glow
      const bgGlow = ctx.createRadialGradient(cx, cy, 50, cx, cy, 320);
      bgGlow.addColorStop(0, 'rgba(8, 38, 58, 0.45)');
      bgGlow.addColorStop(0.6, 'rgba(4, 18, 30, 0.85)');
      bgGlow.addColorStop(1, 'rgba(4, 18, 30, 0.98)');
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, width, height);

      // Cube Dimensions (Proportional to 15km Inline x 10km Crossline x 5000m TVDSS)
      const W = Math.min(width * 0.62, 360);  // Width (Inline axis)
      const H = 220;                         // Height (Depth axis)
      const D = 260;                         // Depth (Crossline axis)

      const halfW = W / 2;
      const halfD = D / 2;
      const explodeY = state.explodeProgress * 55; // Upward offset for overburden

      // Stratigraphic Horizon Levels (Proportional within H = 220, from top 0 to bottom H)
      // 0m: Top Water Level (-110)
      // 1500m: Mudline / Seafloor (-50)
      // 2400m: Top Cretaceous / Seal (-10)
      // 3200m: Santonian Fan Reservoir (+35)
      // 3800m: Albian Source Kitchen (+75)
      // 4500m: Basement Bottom (+110)
      const topY = -H / 2;
      const mudlineY = topY + 45;
      const sealY = topY + 95;
      const reservoirY = topY + 145;
      const sourceY = topY + 185;
      const botY = H / 2;

      // Helper to draw shaded 3D quadrilateral
      const drawQuad = (p1, p2, p3, p4, fillStyle, strokeStyle = null, lineWidth = 1) => {
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.lineTo(p3.x, p3.y);
        ctx.lineTo(p4.x, p4.y);
        ctx.closePath();
        if (fillStyle) {
          ctx.fillStyle = fillStyle;
          ctx.fill();
        }
        if (strokeStyle) {
          ctx.strokeStyle = strokeStyle;
          ctx.lineWidth = lineWidth;
          ctx.stroke();
        }
      };

      // -----------------------------------------------------------------------
      // 1. DRAW SUB-CUBE 3: BASEMENT & ALBIAN SOURCE KITCHEN (Bottom block)
      // -----------------------------------------------------------------------
      const sourceOffY = 0;
      const pB1 = project(-halfW, sourceY, -halfD, state.yaw, state.pitch, cx, cy);
      const pB2 = project(halfW, sourceY, -halfD, state.yaw, state.pitch, cx, cy);
      const pB3 = project(halfW, sourceY, halfD, state.yaw, state.pitch, cx, cy);
      const pB4 = project(-halfW, sourceY, halfD, state.yaw, state.pitch, cx, cy);

      const pBB1 = project(-halfW, botY, -halfD, state.yaw, state.pitch, cx, cy);
      const pBB2 = project(halfW, botY, -halfD, state.yaw, state.pitch, cx, cy);
      const pBB3 = project(halfW, botY, halfD, state.yaw, state.pitch, cx, cy);
      const pBB4 = project(-halfW, botY, halfD, state.yaw, state.pitch, cx, cy);

      // Basement Front Face
      drawQuad(pB4, pB3, pBB3, pBB4, '#061623', 'rgba(81, 194, 201, 0.14)');
      // Basement Right Side Face
      drawQuad(pB3, pB2, pBB2, pBB3, '#04101A', 'rgba(81, 194, 201, 0.12)');

      // -----------------------------------------------------------------------
      // 2. DRAW SUB-CUBE 2: SANTONIAN TURBIDITE FAN RESERVOIR INTERVAL
      // -----------------------------------------------------------------------
      const isReservoirHighlight = state.activeHorizon === 'reservoir';
      const isDimmed = state.activeHorizon !== 'all' && !isReservoirHighlight;

      const pR1 = project(-halfW, reservoirY, -halfD, state.yaw, state.pitch, cx, cy);
      const pR2 = project(halfW, reservoirY, -halfD, state.yaw, state.pitch, cx, cy);
      const pR3 = project(halfW, reservoirY, halfD, state.yaw, state.pitch, cx, cy);
      const pR4 = project(-halfW, reservoirY, halfD, state.yaw, state.pitch, cx, cy);

      // Front Face of Reservoir Interval
      drawQuad(
        pR4, pR3, pB3, pB4,
        isReservoirHighlight ? 'rgba(220, 151, 43, 0.28)' : '#081D2D',
        isReservoirHighlight ? '#E5A84B' : 'rgba(81, 194, 201, 0.2)',
        isReservoirHighlight ? 2 : 1
      );

      // Right Side Face of Reservoir Interval
      drawQuad(
        pR3, pR2, pB2, pB3,
        isReservoirHighlight ? 'rgba(180, 120, 30, 0.25)' : '#051420',
        isReservoirHighlight ? '#E5A84B' : 'rgba(81, 194, 201, 0.15)'
      );

      // Internal 3D Lobate Fan Body (Golden/Amber Acoustic Anomaly)
      const fanCenter = project(W * 0.08, reservoirY + 18, D * 0.05, state.yaw, state.pitch, cx, cy);
      const fanR = W * 0.28 * fanCenter.scale;
      const fanGrad = ctx.createRadialGradient(fanCenter.x, fanCenter.y, 4, fanCenter.x, fanCenter.y, fanR);
      fanGrad.addColorStop(0, isReservoirHighlight ? 'rgba(246, 197, 97, 0.95)' : 'rgba(246, 197, 97, 0.7)');
      fanGrad.addColorStop(0.45, isReservoirHighlight ? 'rgba(220, 140, 35, 0.65)' : 'rgba(220, 140, 35, 0.4)');
      fanGrad.addColorStop(1, 'rgba(24, 126, 134, 0)');

      ctx.save();
      ctx.beginPath();
      ctx.ellipse(fanCenter.x, fanCenter.y, fanR, fanR * 0.52, state.yaw * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = fanGrad;
      ctx.fill();
      if (isReservoirHighlight) {
        ctx.strokeStyle = '#F6C561';
        ctx.lineWidth = 1.8;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
      }
      ctx.restore();

      // -----------------------------------------------------------------------
      // 3. DRAW SUB-CUBE 1: OVERBURDEN & SEAL (Lifts in 3D Exploded View)
      // -----------------------------------------------------------------------
      const currSealY = sealY - explodeY;
      const currMudlineY = mudlineY - explodeY;
      const currTopY = topY - explodeY;

      // Seal Stratum Points
      const pS1 = project(-halfW, currSealY, -halfD, state.yaw, state.pitch, cx, cy);
      const pS2 = project(halfW, currSealY, -halfD, state.yaw, state.pitch, cx, cy);
      const pS3 = project(halfW, currSealY, halfD, state.yaw, state.pitch, cx, cy);
      const pS4 = project(-halfW, currSealY, halfD, state.yaw, state.pitch, cx, cy);

      // Tertiary Mudline Points
      const pM1 = project(-halfW, currMudlineY, -halfD, state.yaw, state.pitch, cx, cy);
      const pM2 = project(halfW, currMudlineY, -halfD, state.yaw, state.pitch, cx, cy);
      const pM3 = project(halfW, currMudlineY, halfD, state.yaw, state.pitch, cx, cy);
      const pM4 = project(-halfW, currMudlineY, halfD, state.yaw, state.pitch, cx, cy);

      // Top Sea Surface Points
      const pT1 = project(-halfW, currTopY, -halfD, state.yaw, state.pitch, cx, cy);
      const pT2 = project(halfW, currTopY, -halfD, state.yaw, state.pitch, cx, cy);
      const pT3 = project(halfW, currTopY, halfD, state.yaw, state.pitch, cx, cy);
      const pT4 = project(-halfW, currTopY, halfD, state.yaw, state.pitch, cx, cy);

      // Draw Upper Cretaceous Seal Front Face
      const isShaleHighlight = state.activeHorizon === 'shale';
      drawQuad(
        pS4, pS3, pR3, pR4,
        isShaleHighlight ? 'rgba(24, 126, 134, 0.35)' : 'rgba(14, 44, 61, 0.88)',
        isShaleHighlight ? '#51C2C9' : 'rgba(81, 194, 201, 0.22)',
        isShaleHighlight ? 2 : 1
      );

      // Draw Tertiary Clastics Front Face
      drawQuad(pM4, pM3, pS3, pS4, 'rgba(18, 52, 72, 0.82)', 'rgba(81, 194, 201, 0.16)');

      // Draw Water Column Front Face (Translucent Deep Ocean)
      drawQuad(pT4, pT3, pM3, pM4, 'rgba(9, 32, 50, 0.65)', 'rgba(81, 194, 201, 0.28)');

      // Draw Water Column & Overburden Right Side Face
      drawQuad(pT3, pT2, pM2, pM3, 'rgba(6, 22, 36, 0.72)', 'rgba(81, 194, 201, 0.2)');
      drawQuad(pM3, pM2, pS2, pS3, 'rgba(10, 36, 52, 0.85)', 'rgba(81, 194, 201, 0.15)');
      drawQuad(pS3, pS2, pR2, pR3, 'rgba(8, 28, 42, 0.9)', 'rgba(81, 194, 201, 0.18)');

      // Draw Top Face: Sea Surface with Bathymetry Projection Grids
      const topGrad = ctx.createLinearGradient(pT1.x, pT1.y, pT3.x, pT3.y);
      topGrad.addColorStop(0, 'rgba(11, 44, 68, 0.95)');
      topGrad.addColorStop(0.5, 'rgba(8, 34, 54, 0.88)');
      topGrad.addColorStop(1, 'rgba(6, 26, 42, 0.98)');
      drawQuad(pT1, pT2, pT3, pT4, topGrad, 'rgba(81, 194, 201, 0.45)', 1.5);

      // Top Face Seismic Survey Grid Lines (Inline / Crossline Axes)
      ctx.save();
      ctx.strokeStyle = 'rgba(81, 194, 201, 0.18)';
      ctx.lineWidth = 0.8;
      for (let i = 1; i < 5; i++) {
        const t = i / 5;
        const g1 = project(-halfW + W * t, currTopY, -halfD, state.yaw, state.pitch, cx, cy);
        const g2 = project(-halfW + W * t, currTopY, halfD, state.yaw, state.pitch, cx, cy);
        ctx.beginPath();
        ctx.moveTo(g1.x, g1.y);
        ctx.lineTo(g2.x, g2.y);
        ctx.stroke();

        const c1 = project(-halfW, currTopY, -halfD + D * t, state.yaw, state.pitch, cx, cy);
        const c2 = project(halfW, currTopY, -halfD + D * t, state.yaw, state.pitch, cx, cy);
        ctx.beginPath();
        ctx.moveTo(c1.x, c1.y);
        ctx.lineTo(c2.x, c2.y);
        ctx.stroke();
      }
      ctx.restore();

      // -----------------------------------------------------------------------
      // 4. SCIENTIFIC SEISMIC WIGGLE TRACES (Rendered on Front Face)
      // -----------------------------------------------------------------------
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.lineWidth = 0.8;
      const numTraces = 14;
      for (let i = 1; i < numTraces; i++) {
        const u = i / numTraces;
        const xPos = -halfW + W * u;
        const zPos = halfD;

        ctx.beginPath();
        for (let j = 0; j <= 20; j++) {
          const v = j / 20;
          const yPos = -H / 2 + H * v;
          // Synthetic seismic acoustic reflection variation
          const amp = Math.sin(v * Math.PI * 8 + u * 4) * 6 * (v > 0.6 && v < 0.85 ? 2.2 : 0.6);
          const pt = project(xPos + amp, yPos, zPos, state.yaw, state.pitch, cx, cy);
          if (j === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.stroke();
      }
      ctx.restore();

      // -----------------------------------------------------------------------
      // 5. INTERACTIVE Z-SLICE DEPTH CALIPER CUTTING PLANE
      // -----------------------------------------------------------------------
      // Map depth (0m to 5000m) to cube Y (-H/2 to +H/2)
      const sliceNorm = Math.max(0, Math.min(1, state.sliceDepth / 5000));
      const sliceY = -H / 2 + H * sliceNorm;

      const pSlice1 = project(-halfW, sliceY, -halfD, state.yaw, state.pitch, cx, cy);
      const pSlice2 = project(halfW, sliceY, -halfD, state.yaw, state.pitch, cx, cy);
      const pSlice3 = project(halfW, sliceY, halfD, state.yaw, state.pitch, cx, cy);
      const pSlice4 = project(-halfW, sliceY, halfD, state.yaw, state.pitch, cx, cy);

      // Glowing Horizontal Time-Slice Grid Plane
      const sliceGrad = ctx.createLinearGradient(pSlice1.x, pSlice1.y, pSlice3.x, pSlice3.y);
      sliceGrad.addColorStop(0, 'rgba(45, 212, 191, 0.28)');
      sliceGrad.addColorStop(0.5, 'rgba(81, 194, 201, 0.42)');
      sliceGrad.addColorStop(1, 'rgba(246, 197, 97, 0.35)');

      drawQuad(pSlice1, pSlice2, pSlice3, pSlice4, sliceGrad, '#2DD4BF', 1.5);

      // Depth Caliper Edge Glow Pulse
      ctx.save();
      ctx.shadowColor = '#2DD4BF';
      ctx.shadowBlur = 10;
      ctx.strokeStyle = '#2DD4BF';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(pSlice4.x, pSlice4.y);
      ctx.lineTo(pSlice3.x, pSlice3.y);
      ctx.stroke();
      ctx.restore();

      // -----------------------------------------------------------------------
      // 6. 3D EXPLORATION WELLBORE TRAJECTORY (BLU-RL003-1X)
      // -----------------------------------------------------------------------
      const isTrajHighlight = state.activeHorizon === 'trajectory';
      const wellPts = [
        project(W * 0.15, -H / 2 - 14, -D * 0.1, state.yaw, state.pitch, cx, cy), // Surface drillship
        project(W * 0.15, mudlineY, -D * 0.05, state.yaw, state.pitch, cx, cy),     // Mudline entry
        project(W * 0.12, sealY, 0, state.yaw, state.pitch, cx, cy),                 // Casing seat
        project(W * 0.08, reservoirY + 12, D * 0.06, state.yaw, state.pitch, cx, cy) // Target pay zone
      ];

      ctx.save();
      ctx.strokeStyle = isTrajHighlight ? '#F6C561' : '#E5A84B';
      ctx.lineWidth = isTrajHighlight ? 3 : 2;
      if (isTrajHighlight) {
        ctx.shadowColor = '#F6C561';
        ctx.shadowBlur = 12;
      }
      ctx.beginPath();
      ctx.moveTo(wellPts[0].x, wellPts[0].y);
      for (let i = 1; i < wellPts.length; i++) {
        ctx.lineTo(wellPts[i].x, wellPts[i].y);
      }
      ctx.stroke();

      // Wellbore Drillship Beacon Marker
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(wellPts[0].x, wellPts[0].y, 4, 0, Math.PI * 2);
      ctx.fill();

      // Target TD Sweet-Spot Marker
      ctx.fillStyle = '#F6C561';
      ctx.beginPath();
      ctx.arc(wellPts[3].x, wellPts[3].y, 5, 0, Math.PI * 2);
      ctx.fill();

      // Wellbore Label Flag
      ctx.font = '600 9px "JetBrains Mono", monospace';
      ctx.fillStyle = '#F6C561';
      ctx.fillText('BLU-RL003-1X PROSPECT', wellPts[3].x + 8, wellPts[3].y + 3);
      ctx.restore();

      // -----------------------------------------------------------------------
      // 7. SCIENTIFIC AXIS TICK LABELS (INLINE, CROSSLINKS, DEPTH)
      // -----------------------------------------------------------------------
      ctx.font = '500 8.5px "JetBrains Mono", monospace';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';

      // Inline Axis Label
      const pMidFront = project(0, botY + 14, halfD, state.yaw, state.pitch, cx, cy);
      ctx.fillText('INLINE AXIS (REGIONAL DIP Fairway) →', pMidFront.x - 70, pMidFront.y);

      // Depth Axis Markers on Left Flank
      const d0 = project(-halfW - 8, topY, halfD, state.yaw, state.pitch, cx, cy);
      const d15 = project(-halfW - 8, mudlineY, halfD, state.yaw, state.pitch, cx, cy);
      const d32 = project(-halfW - 8, reservoirY, halfD, state.yaw, state.pitch, cx, cy);
      const d50 = project(-halfW - 8, botY, halfD, state.yaw, state.pitch, cx, cy);

      ctx.fillStyle = 'rgba(81, 194, 201, 0.7)';
      ctx.fillText('0m MSL', d0.x - 42, d0.y);
      ctx.fillText('-1,500m', d15.x - 42, d15.y);
      ctx.fillStyle = '#F6C561';
      ctx.fillText('-3,200m [PAY]', d32.x - 65, d32.y);
      ctx.fillStyle = 'rgba(81, 194, 201, 0.7)';
      ctx.fillText('-5,000m', d50.x - 42, d50.y);

      // Request next frame
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [autoRotate, isDragging]);

  return (
    <div className="seismic-cube-container" ref={containerRef}>
      {/* 1. Real-Time Telemetry HUD Overlay (Schlumberger / MotionSites Standard) */}
      <div className="seismic-cube-hud">
        <div className="cube-hud-item">
          <span className="cube-hud-pulse"></span>
          <span className="cube-hud-k">SURVEY:</span>
          <span className="cube-hud-v">RL-003 BROADBAND PSTM 3D</span>
        </div>
        <div className="cube-hud-item">
          <span className="cube-hud-k">CALIPER Z:</span>
          <span className="cube-hud-v is-amber">~{depthSlice.toLocaleString()}m MSL</span>
        </div>
        <div className="cube-hud-item cube-hud-hide-mobile">
          <span className="cube-hud-k">HORIZON:</span>
          <span className="cube-hud-v">
            {activeHorizon === 'reservoir' ? 'SANTONIAN TURBIDITE FAN' :
             activeHorizon === 'shale' ? 'UPPER CRETACEOUS TRANSGRESSIVE SEAL' :
             activeHorizon === 'canyon' ? 'SHELF-EDGE FEEDER CANYON' :
             activeHorizon === 'trajectory' ? 'BLU-RL003-1X TARGET TRAJECTORY' :
             'UNIFIED 3D LITHOSTRATIGRAPHY'}
          </span>
        </div>
        <div className="cube-hud-item">
          <span className="cube-hud-k">AVO RESPONSE:</span>
          <span className="cube-hud-v is-teal">CLASS II/III ANOMALY</span>
        </div>
      </div>

      {/* 2. Interactive 3D Canvas Stage */}
      <div
        className="seismic-cube-stage"
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
      >
        <canvas ref={canvasRef} className="seismic-cube-canvas" />

        {/* Orbit Helper Prompt */}
        <div className="cube-interaction-hint">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
          </svg>
          <span>DRAG TO ORBIT IN 3D</span>
        </div>
      </div>

      {/* 3. Real-Time Geoscientific Controls Toolbar */}
      <div className="seismic-cube-controls-bar">
        {/* Depth Caliper Slider */}
        <div className="cube-caliper-control">
          <label htmlFor="depth-caliper-slider" className="cube-control-label">
            <span className="cube-label-tag">CALIPER SLICE (Z):</span>
            <span className="cube-caliper-val">-{depthSlice}m MSL</span>
          </label>
          <input
            id="depth-caliper-slider"
            type="range"
            min="500"
            max="4800"
            step="50"
            value={depthSlice}
            onChange={(e) => setDepthSlice(parseInt(e.target.value, 10))}
            className="cube-depth-slider"
            aria-label="Adjust depth slice caliper"
          />
        </div>

        {/* Action Buttons: Auto-Rotate & Reset View */}
        <div className="cube-actions-cluster">
          <button
            type="button"
            className={`cube-action-btn ${autoRotate ? 'is-active' : ''}`}
            onClick={() => setAutoRotate(!autoRotate)}
            title="Toggle subtle orbital auto-rotation"
          >
            <span className={`cube-btn-dot ${autoRotate ? 'is-pulsing' : ''}`}></span>
            <span>Auto-Orbit</span>
          </button>

          <button
            type="button"
            className="cube-action-btn"
            onClick={handleResetView}
            title="Reset to default isometric orientation"
          >
            <span>Reset 3D</span>
          </button>
        </div>
      </div>
    </div>
  );
}
