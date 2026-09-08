// Retired terminal game — extracted from index.html for kids / staff to read.
// This file is NOT wired to the live cabinet menu.
// To try it, a staff member can still run: startGame('swarm')
// It needs the shared canvas helpers in index.html (keys, touchState, sfx, updateUI, showGameOver).
//
		// ========== 2. NEON SWARM ==========
		let swarm = {};

		function initSwarm() {
			swarm = { score: 0, lives: 3, player: { x: 220, y: 320, w: 42, h: 14 }, bullets: [], enemies: [], dir: 1, speed: 0.7, lastShot: 0 };
			createSwarmEnemies();
			updateUI(0, 3);
			loopSwarm();
		}

		function createSwarmEnemies() {
			swarm.enemies = [];
			for (let r = 0; r < 4; r++)
				for (let c = 0; c < 8; c++)
					swarm.enemies.push({ x: 48 + c * 48, y: 36 + r * 34, w: 26, h: 18, alive: true });
		}

		function loopSwarm() {
			if (currentGame !== 'swarm') return;
			const s = swarm;
			const left = keys['ArrowLeft'] || keys['a'] || keys['A'] || touchState.left || gamepadState.left;
			const right = keys['ArrowRight'] || keys['d'] || keys['D'] || touchState.right || gamepadState.right;
			const fire = keys[' '] || touchState.fire || gamepadState.fire;
			if (left) s.player.x -= 5.5;
			if (right) s.player.x += 5.5;
			s.player.x = Math.max(4, Math.min(434, s.player.x));
			if (fire && Date.now() - s.lastShot > 220) {
				s.bullets.push({ x: s.player.x + s.player.w / 2 - 1.5, y: s.player.y - 10 });
				s.lastShot = Date.now();
				sfx('shoot');
			}
			for (let i = s.bullets.length - 1; i >= 0; i--) {
				s.bullets[i].y -= 8.5;
				if (s.bullets[i].y < -15) s.bullets.splice(i, 1);
			}
			let hitEdge = false;
			s.enemies.forEach(e => {
				if (!e.alive) return;
				e.x += s.speed * s.dir;
				if (e.x < 6 || e.x + e.w > 474) hitEdge = true;
			});
			if (hitEdge) {
				s.dir *= -1;
				s.enemies.forEach(e => { if (e.alive) e.y += 15; });
				s.speed += 0.045;
			}
			for (let bi = s.bullets.length - 1; bi >= 0; bi--) {
				const b = s.bullets[bi];
				for (const e of s.enemies) {
					if (!e.alive) continue;
					if (b.x < e.x + e.w && b.x + 3 > e.x && b.y < e.y + e.h && b.y + 10 > e.y) {
						e.alive = false;
						s.bullets.splice(bi, 1);
						s.score += 10;
						updateUI(s.score, s.lives);
						sfx('explode');
						break;
					}
				}
			}
			if (s.enemies.every(e => !e.alive)) { createSwarmEnemies();
				s.speed += 0.2; }
			for (const e of s.enemies) {
				if (e.alive && e.y + e.h >= s.player.y) {
					s.lives--;
					updateUI(s.score, s.lives);
					if (s.lives <= 0) { drawSwarm();
						shake(10);
						showGameOver('SYSTEM FAILURE', 'swarm', s.score); return; }
					s.enemies.forEach(en => { if (en.alive) en.y -= 50; });
					break;
				}
			}
			drawSwarm();
			animId = requestAnimationFrame(loopSwarm);
		}

		function drawSwarm() {
			ctx.fillStyle = '#000';
			ctx.fillRect(0, 0, 480, 360);
			ctx.fillStyle = '#00ff9f';
			ctx.shadowColor = '#00ff9f';
			ctx.shadowBlur = 8;
			ctx.fillRect(swarm.player.x, swarm.player.y, swarm.player.w, swarm.player.h);
			ctx.beginPath();
			ctx.moveTo(swarm.player.x + 6, swarm.player.y);
			ctx.lineTo(swarm.player.x + swarm.player.w / 2, swarm.player.y - 12);
			ctx.lineTo(swarm.player.x + swarm.player.w - 6, swarm.player.y);
			ctx.fill();
			ctx.shadowBlur = 0;
			ctx.fillStyle = '#fff';
			swarm.bullets.forEach(b => ctx.fillRect(b.x, b.y, 3, 11));
			swarm.enemies.forEach(e => {
				if (!e.alive) return;
				ctx.fillStyle = '#00ff9f';
				ctx.fillRect(e.x, e.y, e.w, e.h);
				ctx.fillStyle = '#000';
				ctx.fillRect(e.x + 5, e.y + 5, 4, 4);
				ctx.fillRect(e.x + 17, e.y + 5, 4, 4);
			});
		}

