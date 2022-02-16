import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

@customElement('toggle-element')
export class ToggleElement extends LitElement {
	@property({
		hasChanged: (value, oldValue) => value !== oldValue
	})
	toggle: string = 'Aan';

	@query('#toggle-div')
	toggleDiv: HTMLSpanElement;

	frames = [
		{ opacity: '0', color: 'red' },
		{ opacity: '0.8' },
		{ opacity: '1', color: 'black' }
	];

	updated(changed: any): void {
		if (changed.has('toggle')) {
			this.toggleDiv.animate(this.frames, 1000);
		}
	}

	render() {
		return html`
			<p>
				Dit staat
				<span id="toggle-div">${this.toggle}</span>
			</p>
		`;
	}
}
