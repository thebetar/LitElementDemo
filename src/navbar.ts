import { html, LitElement, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

const navbarStyles = css`
	.navbar {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 80px;
		background-color: blueviolet;
	}

	.nav-item {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		padding: 8px 16px;
		margin: 8px;
	}

	.nav-header {
		font-size: 32px;
		font-weight: bold;
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
			'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	}

	.nav-item-link {
		margin: 8px;
		padding: 8px 16px;
		border: 2px solid #333;
		border-radius: 8px;
		cursor: pointer;
	}

	.nav-item-link:hover {
		background-color: violet;
	}
`;

interface Route {
	title: string;
	route: string;
}

@customElement('main-navbar')
export class Navbar extends LitElement {
	static styles = navbarStyles;

	@property()
	onRoute: (route: string) => void;

	@property()
	routes: Route[] = [
		{
			title: 'Voorbeelden',
			route: '/'
		},
		{
			title: 'Spelletje',
			route: '/spelletje'
		}
	];

	render() {
		return html`
			<div class="navbar">
				<div class="nav-item">
					<span class="nav-header">Navbar</span>
				</div>
				<div class="nav-item">
					${this.routes.map(
						(route) => html`
							<div
								@click="${() => this.onRoute(route.route)}"
								class="nav-item-link"
							>
								${route.title}
							</div>
						`
					)}
				</div>
			</div>
		`;
	}
}
