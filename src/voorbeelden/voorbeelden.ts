import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import exampleDirective from './directive';
import './toggle-element.ts';
import './list-element.ts';

const voorbeeldenCss = css`
	.flex-box {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.flex-item {
		width: 100vw;
		text-align: center;
		padding: 10px 0px;
		border-top: 1px dotted black;
		border-bottom: 1px dotted black;
	}
`;

@customElement('main-voorbeelden')
export class Voorbeelden extends LitElement {
	static styles = voorbeeldenCss;

	@property()
	toggle: string = 'aan';

	changeToggle(): void {
		this.toggle = this.toggle === 'aan' ? 'uit' : 'aan';
	}

	render() {
		return html`
			<div class="flex-box">
				<div class="flex-item">
					Hallo dit is een Lit element test applicatie
				</div>
				<div class="flex-item">
					<toggle-element .toggle="${this.toggle}"></toggle-element>
					<p>
						<button @click="${this.changeToggle}" class="button">
							Verander status
						</button>
					</p>
				</div>
				<div class="flex-box flex-item">
					<list-element></list-element>
				</div>
				<div class="flex-item">
					<b>Hieronder is een directive</b>
					${exampleDirective()}
				</div>
			</div>
		`;
	}
}
