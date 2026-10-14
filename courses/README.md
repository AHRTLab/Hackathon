# Courses

One JSON file per course, listed in `index.json`. You can add a course without touching any code.

| Field | Meaning |
|---|---|
| `id`, `name` | Short id (used in logs) and display name |
| `arena.size` | `[x, y]` full size in metres, centred on the origin. Walls are added around it |
| `arena.wall_height`, `arena.wall_thickness` | Optional, defaults 0.4 m / 0.1 m |
| `start` | `{x, y, yaw}`: start pose (m, m, rad). `yaw` 0 faces +x |
| `obstacles[]` | `{"type":"box","pos":[x,y],"size":[sx,sy,sz],"yaw":rad}` or `{"type":"cylinder","pos":[x,y],"radius":r,"height":h}`. Sizes are **full** dimensions, and objects sit on the floor. Optional `rgba` |
| `gates[]` | *(M2)* `{"left":[x,y],"right":[x,y]}` post positions, in order |
| `finish` | *(M2)* `{"center":[x,y],"size":[sx,sy],"yaw_tol_deg":10,"hold_s":1}` or `null` |
| `time_limit` | *(M2)* seconds, or `null` |
| `speed_caps` | `{"v":1.0,"w":2.0}` lowers the protocol limits for this course, or `null` |
