import { useEffect, useState } from 'react';

/**
 * @param {number} target
 * @param {{ duration?: number; startWhen?: boolean; decimals?: number }} options
 */
export function useCountUp(target, options = {}) {
  const { duration = 1200, startWhen = true, decimals = 0 } = options;
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!startWhen) return undefined;

    let start = null;
    let frame = 0;

    const step = (ts) => {
      if (start === null) start = ts;
      const elapsed = ts - start;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - p) ** 3;
      const next = eased * target;
      setValue(decimals > 0 ? Number(next.toFixed(decimals)) : Math.round(next));
      if (p < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, startWhen, decimals]);

  return value;
}
