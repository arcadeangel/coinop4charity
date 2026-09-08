// Retired / lesson widget — Shiprekt control teacher from the homepage.
// Not a startGame() cabinet title. Kids read this to see how keys move a ship.
// Lives on the public page as a "build a control system" demo.
//
			(function initShiprekt() {
				const LESSONS = {
					move: {
						plain: 'Games check the keyboard every frame. If left is held, subtract from X. If right is held, add to X. That is movement.',
						code: [
							'// 1) READ KEYS → MOVE',
							'if (keys.left)  player.x -= speed;',
							'if (keys.right) player.x += speed;',
							'// player.x is the horizontal position on screen'
						].join('\n')
					},
					jump: {
						plain: 'Jump sets upward velocity once while on the ground. Gravity adds a little downward speed every frame so you fall back.',
						code: [
							'// 2) JUMP + GRAVITY',
							'if (keys.jump && player.onGround) {',
							'  player.vy = -jumpPower;  // up is negative',
							'  player.onGround = false;',
							'}',
							'player.vy += gravity;      // fall a bit each frame',
							'player.y  += player.vy;',
							'if (player.y >= groundY) {',
							'  player.y = groundY;',
							'  player.vy = 0;',
							'  player.onGround = true;',
							'}'
						].join('\n')
					},
					collide: {
						plain: 'Collision is just distance. If the player and a coin are close enough, they are touching.',
						code: [
							'// 3) TOUCH = COLLIDE',
							'const dx = player.x - coin.x;',
							'const dy = player.y - coin.y;',
							'const dist = Math.sqrt(dx*dx + dy*dy);',
							'if (dist < hitRadius) {',
							'  // they overlap — handle the touch',
							'  coin.alive = false;',
							'}'
						].join('\n')
					},
					score: {
						plain: 'When a collectible is touched, add to a number and show it. That number is the score.',
						code: [
							'// 4) SCORE ON COLLECT',
							'if (touchedCoin) {',
							'  score += 1;',
							'  // draw "SCORE " + score on the HUD',
							'}'
						].join('\n')
					},
					win: {
						plain: 'A win condition is a rule you check every frame. When score reaches the target, the run is over.',
						code: [
							'// 5) WIN CONDITION',
							'if (score >= winAt) {',
							'  won = true;',
							'  // stop play / show YOU WIN',
							'}'
						].join('\n')
					}
				};

				const order = ['move', 'jump', 'collide', 'score', 'win'];
				const active = {};
				const plainEl = document.getElementById('shiprektPlain');
				const codeEl = document.getElementById('shiprektCode');
				const status = document.getElementById('shiprektStatus');
				const canvas = document.getElementById('shiprektPreview');
				if (!canvas || !canvas.getContext) return;
				const ctx = canvas.getContext('2d');
				let running = false;
				let raf = 0;
				let state = null;
				const keys = { left: false, right: false, jump: false };

				function rebuildCode() {
					const parts = ['// ArrrcadeOS — Shiprekt control script', '// Built one idea at a time', ''];
					let any = false;
					order.forEach(function(id) {
						if (active[id] && LESSONS[id]) {
							any = true;
							parts.push(LESSONS[id].code);
							parts.push('');
						}
					});
					if (!any) parts.push('// tap steps above to add control code');
					if (codeEl) codeEl.textContent = parts.join('\n');
				}

				function showLesson(id) {
					const L = LESSONS[id];
					if (!L || !plainEl) return;
					plainEl.textContent = L.plain;
				}

				document.querySelectorAll('.sr-step').forEach(function(btn) {
					btn.addEventListener('click', function() {
						const id = btn.getAttribute('data-step');
						const on = btn.getAttribute('aria-pressed') !== 'true';
						btn.setAttribute('aria-pressed', on ? 'true' : 'false');
						active[id] = on;
						showLesson(id);
						rebuildCode();
						if (status) {
							status.textContent = on
								? ('Added: ' + (LESSONS[id] ? id : '') + ' — read the plain English, then the code.')
								: ('Removed ' + id + '.');
						}
					});
				});

				function resetState() {
					state = {
						x: 40, y: 140, vx: 0, vy: 0, onGround: true,
						score: 0, coins: [], frame: 0, won: false, flash: ''
					};
					for (let i = 0; i < 5; i++) {
						state.coins.push({ x: 70 + i * 48, y: 50 + (i % 2) * 28, alive: true });
					}
				}

				function draw() {
					const s = state;
					ctx.fillStyle = '#02140e';
					ctx.fillRect(0, 0, 320, 180);
					ctx.fillStyle = '#0a3d2e';
					ctx.fillRect(0, 160, 320, 20);
					ctx.fillStyle = '#00ff9f33';
					ctx.fillRect(0, 159, 320, 1);
					s.coins.forEach(function(c) {
						if (!c.alive) return;
						ctx.fillStyle = '#ffe566';
						ctx.beginPath();
						ctx.arc(c.x, c.y, 6, 0, Math.PI * 2);
						ctx.fill();
					});
					ctx.fillStyle = '#00ff9f';
					ctx.fillRect(s.x - 8, s.y - 16, 16, 16);
					ctx.fillStyle = '#02140e';
					ctx.fillRect(s.x - 4, s.y - 12, 3, 3);
					ctx.fillRect(s.x + 2, s.y - 12, 3, 3);
					ctx.fillStyle = '#7dffc8';
					ctx.font = '10px Courier New';
					ctx.textAlign = 'left';
					ctx.fillText('SCORE ' + s.score, 8, 14);
					ctx.fillStyle = '#00ff9f66';
					ctx.font = '9px Courier New';
					ctx.fillText(active.move ? '←→ on' : '←→ off', 8, 28);
					ctx.fillText(active.jump ? 'JUMP on' : 'JUMP off', 70, 28);
					if (s.won) {
						ctx.fillStyle = '#ffff66';
						ctx.font = 'bold 14px Courier New';
						ctx.textAlign = 'center';
						ctx.fillText('YOU WIN', 160, 90);
					}
					if (s.flash) {
						ctx.fillStyle = '#ffff66';
						ctx.font = '11px Courier New';
						ctx.textAlign = 'center';
						ctx.fillText(s.flash, 160, 44);
					}
				}

				window.addEventListener('keydown', function(e) {
					if (!running) return;
					if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keys.left = true;
					if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keys.right = true;
					if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W' || e.key === ' ') {
						keys.jump = true;
						e.preventDefault();
					}
				});
				window.addEventListener('keyup', function(e) {
					if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keys.left = false;
					if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keys.right = false;
					if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W' || e.key === ' ') keys.jump = false;
				});

				function tick() {
					if (!running || !state) return;
					const s = state;
					s.frame++;
					if (s.won) { draw(); raf = requestAnimationFrame(tick); return; }

					if (active.move) {
						if (keys.left) s.vx = -2.2;
						else if (keys.right) s.vx = 2.2;
						else s.vx *= 0.65;
					} else s.vx = 0;

					if (active.jump && s.onGround && keys.jump) {
						s.vy = -5.5;
						s.onGround = false;
						s.flash = 'vy = -jumpPower';
					}
					s.vy += active.jump ? 0.28 : 0.35;
					s.x += s.vx;
					s.y += s.vy;
					if (s.x < 8) s.x = 8;
					if (s.x > 312) s.x = 312;
					if (s.y >= 160) { s.y = 160; s.vy = 0; s.onGround = true; }

					if (active.collide || active.score) {
						s.coins.forEach(function(c) {
							if (!c.alive) return;
							const dx = s.x - c.x, dy = (s.y - 8) - c.y;
							if (dx * dx + dy * dy < 196) {
								if (active.collide) c.alive = false;
								if (active.score) {
									s.score += 1;
									s.flash = 'score += 1';
								}
							}
						});
					}
					if (active.win && s.score >= 5) {
						s.won = true;
						s.flash = 'score >= winAt';
					}
					if (s.flash && s.frame % 50 === 0) s.flash = '';
					draw();
					raf = requestAnimationFrame(tick);
				}

				function play() {
					resetState();
					running = true;
					const on = order.filter(function(id) { return active[id]; });
					if (status) {
						status.textContent = on.length
							? ('Live demo — arrows/WASD. Active: ' + on.join(', '))
							: 'No steps on yet — tap 1–5 first, then TRY IT.';
					}
					cancelAnimationFrame(raf);
					tick();
				}

				function clearAll() {
					running = false;
					cancelAnimationFrame(raf);
					order.forEach(function(id) { active[id] = false; });
					document.querySelectorAll('.sr-step').forEach(function(b) {
						b.setAttribute('aria-pressed', 'false');
					});
					if (plainEl) plainEl.textContent = 'Tap a step above. You’ll see what it means in plain words, then the code games actually use.';
					rebuildCode();
					resetState();
					draw();
					if (status) status.textContent = 'Cleared. Build the control system one idea at a time.';
				}

				const playBtn = document.getElementById('shiprektPlay');
				const resetBtn = document.getElementById('shiprektReset');
				const copyBtn = document.getElementById('shiprektCopy');
				if (playBtn) playBtn.addEventListener('click', play);
				if (resetBtn) resetBtn.addEventListener('click', clearAll);
				if (copyBtn) copyBtn.addEventListener('click', function() {
					const src = codeEl ? codeEl.textContent : '';
					if (navigator.clipboard && navigator.clipboard.writeText) {
						navigator.clipboard.writeText(src).then(function() {
							if (status) status.textContent = 'Control code copied — paste into Scratch notes, MakeCode, or a text file.';
						}).catch(function() {
							if (status) status.textContent = 'Could not copy.';
						});
					} else if (status) status.textContent = 'Select the code box and copy manually.';
				});

				rebuildCode();
				resetState();
				draw();
			})();
