import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './navbar';
import './voorbeelden/voorbeelden';
import './spelletje/spelletje';

const mainAppStyles = css`
	.container {
		margin: 18px 6px;
	}
`;

@customElement('main-app')
export class MainApp extends LitElement {
	static styles = mainAppStyles;

	@property({
		type: String
	})
	path: string = location.pathname;

	onRoute(route: string): void {
		location.pathname = route;
	}

	getRouteComponent() {
		console.log(this.path);
		switch (this.path) {
			case '/':
				return html`<main-voorbeelden></main-voorbeelden>`;
			case '/spelletje':
				return html`<main-spelletje></main-spelletje>`;
			default:
				return html`<main-voorbeelden></main-voorbeelden>`;
		}
	}

	render() {
		return html`
			<main-navbar .onRoute="${this.onRoute}"></main-navbar>
			<div class="container">${this.getRouteComponent()}</div>
		`;
	}
}
