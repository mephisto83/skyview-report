import React from 'react';
import logo from './logo.svg';
import './App.css';

function Game() {
	return (
		<div className="game">
			<div className="rank">3</div>
			<div className="front">
				<img className="thumbnail" src="img/game-cover.jpg" alt="" />
				<h3 className="name icon">Game name</h3>
				<div className="stats">
					<p className="viewers icon">539.9k</p>
					<div className="streamers">
						<img src="img/streamer-1.jpg" alt="" />
						<img src="img/streamer-2.jpg" alt="" />
						<img src="img/streamer-3.jpg" alt="" />
					</div>
				</div>
			</div>

			<div className="back">
				<div className="streaming-info">
					<p className="game-stat">
						559k<span>Watching</span>
					</p>
					<p className="game-stat">
						25.8k<span>Streams</span>
					</p>
				</div>
				<button className="btn">See more streams</button>
				<div className="streamers">
					<div className="streamer">
						<div className="icon">
							<img src="img/streamer-1.jpg" alt="" />
						</div>
						<p className="name">Gamer1</p>
						<p className="number">36.1k</p>
					</div>
					<div className="streamer">
						<div className="icon">
							<img src="img/streamer-2.jpg" alt="" />
						</div>
						<p className="name">Gamer 2</p>
						<p className="number">35.1k</p>
					</div>
					<div className="streamer">
						<div className="icon">
							<img src="img/streamer-3.jpg" alt="" />
						</div>
						<p className="name">Gamer 3</p>
						<p className="number">34.1k</p>
					</div>
				</div>
			</div>

			<div className="background" />
		</div>
	);
}

export default Game;
