import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import './loading-lottie';

const spelletjeStyles = css`
	.game-flex-box {
		display: flex;
		width: 100%;
		height: calc(100vh - 200px);
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.game-button {
		font-size: 24px;
		padding: 10px;
		background-color: orange;
		color: darkred;
		border: 2px solid darkorange;
		border-radius: 8px;
		cursor: pointer;
	}

	.game-button:hover {
		background-color: darkorange;
	}
`;

@customElement('main-spelletje')
export class Spelletje extends LitElement {
	static styles = spelletjeStyles;

	@property({
		type: Boolean,
		hasChanged: (value, oldValue) => value !== oldValue
	})
	startToggle: Boolean = false;

	@query('#game-container')
	gameContainer: HTMLDivElement;

	frames = [
		{
			opacity: 0,
			transform: 'rotate(10deg)'
		},
		{ opacity: 0.8 },
		{ opacity: 1 }
	];

	updated(changed: any): void {
		if (changed.has('startToggle')) {
			this.gameContainer.animate(this.frames, 1000);
		}
	}

	toggleStart() {
		this.startToggle = !this.startToggle;
	}

	render() {
		return html`
			<div id="game-container" class="game-flex-box">
				${this.startToggle
					? html`<loading-lottie
							@end="${this.toggleStart}"
					  ></loading-lottie>`
					: html` <h1>LitGame</h1>
							<div class="game-flex-item">
								<button
									@click="${this.toggleStart}"
									class="game-button"
								>
									Druk om te beginnen
								</button>
							</div>`}
			</div>
		`;
	}
}
