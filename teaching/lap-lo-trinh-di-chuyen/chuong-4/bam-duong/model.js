/* Original teaching model: rear-axle bicycle, exact circular lookahead. */
(function (root) {
  "use strict";
  const P = Object.freeze({
    radius: 20,
    wheelbase: 2.8,
    maxSteer: (25 * Math.PI) / 180,
    maxRate: (40 * Math.PI) / 180,
    lateralLimit: 2.5,
    dt: 0.02,
    duration: 20,
  });
  const clamp = (x, lo, hi) => Math.max(lo, Math.min(hi, x));
  function target(x, y, lookahead) {
    const d = Math.hypot(x, y),
      R = P.radius;
    if (!Number.isFinite(d) || d < 1e-10 || d > R + lookahead || d < Math.abs(R - lookahead)) return null;
    // Intersection of reference circle (origin,R) and lookahead circle (rear axle,Ld).
    const a = (R * R - lookahead * lookahead + d * d) / (2 * d);
    const h = Math.sqrt(Math.max(0, R * R - a * a));
    const ux = x / d,
      uy = y / d;
    const candidates = [
      { x: a * ux - h * uy, y: a * uy + h * ux },
      { x: a * ux + h * uy, y: a * uy - h * ux },
    ];
    const angle = Math.atan2(y, x),
      tau = 2 * Math.PI;
    const advance = (q) => (((Math.atan2(q.y, q.x) - angle) % tau) + tau) % tau;
    candidates.sort((a, b) => advance(a) - advance(b));
    return candidates[0];
  }
  function run({ speed = 4, lookahead = 6, offset = 0.5, dt = P.dt } = {}) {
    if (![speed, lookahead, offset, dt].every(Number.isFinite) || speed <= 0 || lookahead <= 0 || dt <= 0 || dt > 0.02)
      throw Error("Invalid configuration");
    let x = P.radius + offset,
      y = 0,
      yaw = Math.PI / 2,
      steer = 0;
    const rows = [],
      steps = Math.round(P.duration / dt);
    let saturated = 0,
      rateLimited = 0,
      peakLateral = 0,
      reason = "completed";
    function sample(t, goal = null, command = null) {
      return { t, x, y, yaw, steer, error: Math.hypot(x, y) - P.radius, goal, command, lateral: (speed * speed * Math.tan(steer)) / P.wheelbase };
    }
    rows.push(sample(0));
    for (let k = 0; k < steps; k++) {
      const goal = target(x, y, lookahead);
      if (!goal) {
        reason = "no-lookahead-intersection";
        break;
      }
      const dx = goal.x - x,
        dy = goal.y - y;
      const lateralTarget = -Math.sin(yaw) * dx + Math.cos(yaw) * dy;
      const raw = Math.atan((P.wheelbase * 2 * lateralTarget) / (lookahead * lookahead));
      const command = clamp(raw, -P.maxSteer, P.maxSteer);
      if (Math.abs(raw) > P.maxSteer + 1e-12) saturated++;
      const step = clamp(command - steer, -P.maxRate * dt, P.maxRate * dt);
      if (Math.abs(command - steer) > P.maxRate * dt + 1e-12) rateLimited++;
      steer += step;
      // Exact held-steering integration of the rear-axle kinematic bicycle.
      const omega = (speed * Math.tan(steer)) / P.wheelbase,
        nextYaw = yaw + omega * dt;
      if (Math.abs(omega) < 1e-12) {
        x += speed * Math.cos(yaw) * dt;
        y += speed * Math.sin(yaw) * dt;
      } else {
        x += (speed / omega) * (Math.sin(nextYaw) - Math.sin(yaw));
        y += (speed / omega) * (Math.cos(yaw) - Math.cos(nextYaw));
      }
      yaw = nextYaw;
      peakLateral = Math.max(peakLateral, Math.abs(speed * omega));
      rows.push(sample((k + 1) * dt, goal, command));
    }
    const errors = rows.map((q) => q.error),
      time = rows.at(-1).t;
    return {
      options: { speed, lookahead, offset, dt },
      parameters: P,
      reason,
      time,
      rows,
      rmse: Math.sqrt(errors.reduce((s, e) => s + e * e, 0) / rows.length),
      maxError: Math.max(...errors.map(Math.abs)),
      saturationTime: saturated * dt,
      rateLimitTime: rateLimited * dt,
      peakLateral,
      nominalLateral: (speed * speed) / P.radius,
      nominalSpeedCap: Math.sqrt(P.lateralLimit * P.radius),
    };
  }
  const api = { P, target, run };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.TrackingModel = api;
})(typeof window === "undefined" ? this : window);
