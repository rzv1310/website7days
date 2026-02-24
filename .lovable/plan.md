

## Plan: Increase End Dead Zone on Mobile

Currently `endDeadZone` on mobile is **200px**. I'll increase it to **400px** to add more scroll space after the last card becomes visible.

### Change
**`src/components/sections/Benefits.tsx`** (line 58):
- Change `endDeadZone` from `200` to `400` on mobile
- Increase section height from `250vh` to `280vh` to accommodate the extra dead zone

