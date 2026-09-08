// Retired terminal game — extracted from index.html for kids / staff to read.
// This file is NOT wired to the live cabinet menu.
// To try it, a staff member can still run: startGame('rocks')
// It needs the shared canvas helpers in index.html (keys, touchState, sfx, updateUI, showGameOver).
//
		// ========== 8. SPACE ROCK SWARM ==========
		let rocks = {};

		function initRocks() {
			rocks = { score: 0, lives: 3, ship: { x: 240, y: 180, angle: 0, vx: 0, vy: 0 }, bullets: [], asteroids: [], lastShot: 0, invuln: 0 };
			for (let i = 0; i < 5; i++) spawnAsteroid(3);
			updateUI(0, 3);
			loopRocks();
		}

		function spawnAsteroid(size, x, y) {
			const speed = 0.6 + Math.random() * 1.4;
			const angle = Math.random() * Math.PI * 2;
			rocks.asteroids.push({
				x: x !== undefined ? x : Math.random() * 480,
				y: y !== undefined ? y : Math.random() * 360,
				vx: Math.cos(angle) * speed,
				vy: Math.sin(angle) * speed,
				size,
				r: size * 14
			});
		}

		function loopRocks() {
			if (currentGame !== 'rocks') return;
			const r = rocks;
			const left = keys['ArrowLeft'] || keys['a'] || keys['A'] || touchState.left || gamepadState.left;
			const right = keys['ArrowRight'] || keys['d'] || keys['D'] || touchState.right || gamepadState.right;
			const thrust = keys['ArrowUp'] || keys['w'] || keys['W'] || touchState.up || gamepadState.up || gamepadState.jump;
			const fire = keys[' '] || touchState.fire || gamepadState.fire;
			if (left) r.ship.angle -= 0.085;
			if (right) r.ship.angle += 0.085;
			if (thrust) { r.ship.vx += Math.cos(r.ship.angle) * 0.18;
				r.ship.vy += Math.sin(r.ship.angle) * 0.18; }
			r.ship.vx *= 0.985;
			r.ship.vy *= 0.985;
			r.ship.x += r.ship.vx;
			r.ship.y += r.ship.vy;
			if (r.ship.x < 0) r.ship.x = 480;
			if (r.ship.x > 480) r.ship.x = 0;
			if (r.ship.y < 0) r.ship.y = 360;
			if (r.ship.y > 360) r.ship.y = 0;
			if (fire && Date.now() - r.lastShot > 200) {
				r.bullets.push({
					x: r.ship.x + Math.cos(r.ship.angle) * 14,
					y: r.ship.y + Math.sin(r.ship.angle) * 14,
					vx: Math.cos(r.ship.angle) * 7.5 + r.ship.vx,
					vy: Math.sin(r.ship.angle) * 7.5 + r.ship.vy,
					life: 50
				});
				r.lastShot = Date.now();
				sfx('shoot');
			}
			for (let i = r.bullets.length - 1; i >= 0; i--) {
				const b = r.bullets[i];
				b.x += b.vx;
				b.y += b.vy;
				b.life--;
				if (b.life <= 0 || b.x < -20 || b.x > 500 || b.y < -20 || b.y > 380) r.bullets.splice(i, 1);
			}
			r.asteroids.forEach(a => {
				a.x += a.vx;
				a.y += a.vy;
				if (a.x < -a.r) a.x = 480 + a.r;
				if (a.x > 480 + a.r) a.x = -a.r;
				if (a.y < -a.r) a.y = 360 + a.r;
				if (a.y > 360 + a.r) a.y = -a.r;
			});
			for (let bi = r.bullets.length - 1; bi >= 0; bi--) {
				const b = r.bullets[bi];
				for (let ai = r.asteroids.length - 1; ai >= 0; ai--) {
					const a = r.asteroids[ai];
					const dx = b.x - a.x,
						dy = b.y - a.y;
					if (dx * dx + dy * dy < a.r * a.r) {
						r.bullets.splice(bi, 1);
						r.score += (4 - a.size) * 20;
						updateUI(r.score, r.lives);
						sfx('explode');
						if (a.size >= 2) shake(4 + a.size);
						if (a.size > 1) { spawnAsteroid(a.size - 1, a.x, a.y);
							spawnAsteroid(a.size - 1, a.x, a.y); }
						r.asteroids.splice(ai, 1);
						break;
					}
				}
			}
			if (r.invuln > 0) r.invuln--;
			else {
				for (const a of r.asteroids) {
					const dx = r.ship.x - a.x,
						dy = r.ship.y - a.y;
					if (dx * dx + dy * dy < (a.r + 8) * (a.r + 8)) {
						r.lives--;
						updateUI(r.score, r.lives);
						if (r.lives <= 0) { drawRocks();
							shake(12);
							showGameOver('SHIP DESTROYED', 'rocks', r.score); return; }
						r.ship.x = 240;
						r.ship.y = 180;
						r.ship.vx = 0;
						r.ship.vy = 0;
						r.invuln = 90;
						break;
					}
				}
			}
			if (r.asteroids.length === 0)
				for (let i = 0; i < 5 + Math.floor(r.score / 400); i++) spawnAsteroid(3);
			drawRocks();
			animId = requestAnimationFrame(loopRocks);
		}

		function drawRocks() {
			ctx.fillStyle = '#000';
			ctx.fillRect(0, 0, 480, 360);
			rocks.asteroids.forEach(a => {
				ctx.strokeStyle = '#00ff9f';
				ctx.lineWidth = 2;
				ctx.beginPath();
				const pts = 7 + a.size;
				for (let i = 0; i < pts; i++) {
					const ang = (i / pts) * Math.PI * 2;
					const rad = a.r * (0.75 + Math.sin(i * 2.3) * 0.25);
					const px = a.x + Math.cos(ang) * rad,
						py = a.y + Math.sin(ang) * rad;
					if (i === 0) ctx.moveTo(px, py);
					else ctx.lineTo(px, py);
				}
				ctx.closePath();
				ctx.stroke();
			});
			ctx.fillStyle = '#fff';
			rocks.bullets.forEach(b => { ctx.beginPath();
				ctx.arc(b.x, b.y, 2.5, 0, Math.PI * 2);
				ctx.fill(); });
			if (rocks.invuln === 0 || Math.floor(rocks.invuln / 4) % 2 === 0) {
				ctx.save();
				ctx.translate(rocks.ship.x, rocks.ship.y);
				ctx.rotate(rocks.ship.angle);
				ctx.strokeStyle = '#00ff9f';
				ctx.lineWidth = 2;
				ctx.shadowColor = '#00ff9f';
				ctx.shadowBlur = 8;
				ctx.beginPath();
				ctx.moveTo(14, 0);
				ctx.lineTo(-10, -9);
				ctx.lineTo(-6, 0);
				ctx.lineTo(-10, 9);
				ctx.closePath();
				ctx.stroke();
				ctx.shadowBlur = 0;
				ctx.restore();
			}
		}

