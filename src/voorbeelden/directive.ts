import { css, html } from 'lit';
import { directive, Directive } from 'lit/directive.js';

export class ExampleDirective extends Directive {
	static styles = css`
		.directive-div {
			font-family: Georgia, 'Times New Roman', Times, serif !important;
		}
	`;

	render() {
		return html` <div class="directive-div">Dit is een directive!</div> `;
	}
}

const exampleDirective = directive(ExampleDirective);

export default exampleDirective;
