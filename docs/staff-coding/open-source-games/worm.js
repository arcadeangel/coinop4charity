// Retired terminal game — extracted from index.html for kids / staff to read.
// This file is NOT wired to the live cabinet menu.
// To try it, a staff member can still run: startGame('worm')
// It needs the shared canvas helpers in index.html (keys, touchState, sfx, updateUI, showGameOver).
//
		// ========== 4. GLOW WORM ==========
		let worm = {};

		function initWorm() {
			worm = { score: 0, snake: [{ x: 11, y: 9 }, { x: 10, y: 9 }, { x: 9, y: 9 }], dir: { x: 1, y: 0 }, nextDir: { x: 1, y: 0 }, food: { x: 16, y: 9 }, lastMove: 0, moveDelay: 130, gameOver: false };
			placeFood();
			updateUI(0, null);
			loopWorm();
		}

		function placeFood() {
			let ok = false;
			while (!ok) {
				worm.food.x = Math.floor(Math.random() * 24);
				worm.food.y = Math.floor(Math.random() * 18);
				ok = !worm.snake.some(s => s.x === worm.food.x && s.y === worm.food.y);
			}
		}

		function loopWorm() {
			if (currentGame !== 'worm') return;
			if ((keys['ArrowUp'] || keys['w'] || keys['W'] || touchState.up || gamepadState.up || gamepadState.jump) && worm.dir.y === 0) worm.nextDir = { x: 0, y: -1 };
			if ((keys['ArrowDown'] || keys['s'] || keys['S'] || touchState.down || gamepadState.down || gamepadState.slide) && worm.dir.y === 0) worm.nextDir = { x: 0, y: 1 };
			if ((keys['ArrowLeft'] || keys['a'] || keys['A'] || touchState.left || gamepadState.left) && worm.dir.x === 0) worm.nextDir = { x: -1, y: 0 };
			if ((keys['ArrowRight'] || keys['d'] || keys['D'] || touchState.right || gamepadState.right) && worm.dir.x === 0) worm.nextDir = { x: 1, y: 0 };
			const now = Date.now();
			if (now - worm.lastMove >= worm.moveDelay && !worm.gameOver) {
				worm.lastMove = now;
				worm.dir = { ...worm.nextDir };
				const head = { x: worm.snake[0].x + worm.dir.x, y: worm.snake[0].y + worm.dir.y };
				if (head.x < 0) head.x = 23;
				if (head.x > 23) head.x = 0;
				if (head.y < 0) head.y = 17;
				if (head.y > 17) head.y = 0;
				if (worm.snake.some(seg => seg.x === head.x && seg.y === head.y)) { worm.gameOver = true;
					sfx('die'); } else {
					worm.snake.unshift(head);
					if (head.x === worm.food.x && head.y === worm.food.y) {
						worm.score += 10;
						updateUI(worm.score, null);
						placeFood();
						sfx('coin');
						worm.moveDelay = Math.max(55, worm.moveDelay - 5);
					} else worm.snake.pop();
				}
			}
			ctx.fillStyle = '#000';
			ctx.fillRect(0, 0, 480, 360);
			ctx.fillStyle = '#ff4d8d';
			ctx.shadowColor = '#ff4d8d';
			ctx.shadowBlur = 10;
			ctx.fillRect(worm.food.x * 20 + 3, worm.food.y * 20 + 3, 14, 14);
			ctx.shadowBlur = 0;
			worm.snake.forEach((seg, i) => {
				ctx.fillStyle = i === 0 ? '#00ff9f' : '#00cc7a';
				ctx.fillRect(seg.x * 20 + 1, seg.y * 20 + 1, 18, 18);
			});
			if (worm.gameOver) { shake(8);
				showGameOver('WORM DOWN', 'worm', worm.score); return; }
			animId = requestAnimationFrame(loopWorm);
		}

