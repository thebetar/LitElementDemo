import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('loading-lottie')
export class LoadingLottie extends LitElement {
	static styles = css`
		.game-end-button {
			background-color: orange;
			color: darkred;
			padding: 8px 16px;
			margin: 8px;
			margin-bottom: 20px;
			font-size: 18px;
			border: 2px solid darkorange;
			border-radius: 8px;
			cursor: pointer;
		}

		.game-end-button:hover {
			background-color: darkorange;
		}

		.game-inner-container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: 100%;
		}
	`;

	end() {
		this.dispatchEvent(new Event('end'));
	}

	render() {
		return html`<div class="game-inner-container">
			<button class="game-end-button" @click="${this.end}">Terug</button>
			<lottie-player
				src="https://assets7.lottiefiles.com/private_files/lf30_ltjkg0de.json"
				background="transparent"
				speed="1"
				style="width: 300px; height: 300;"
				loop
				autoplay
			></lottie-player>
		</div> `;
	}
}
