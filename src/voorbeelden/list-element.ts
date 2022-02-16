import { html, LitElement, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

@customElement('list-element')
export class ListElement extends LitElement {
	static styles = css`
		.list {
			list-style-type: none;
			padding-left: 0;
		}
		.list-item {
			border: 1px solid black;
			padding: 4px;
			cursor: pointer;
		}
		.list-item:hover {
			background-color: #ccc;
			transition: 0.5s;
		}
	`;

	@property()
	list: String[] = ['appel', 'peer', 'banaan'];

	@query('#new-item')
	newItem: HTMLInputElement;

	render() {
		return html`
			<b>Lijst:</b>
			<ul class="list">
				${this.list.map(
					(item, index) =>
						html`<li
							@click="${() => this.removeItem(index)}"
							class="list-item"
						>
							${item}
						</li>`
				)}
			</ul>
			<input id="new-item" type="text" />
			<button @click="${this.addItem}">Toevoegen</button>
		`;
	}

	addItem(): void {
		this.list = [...this.list, this.newItem.value];
		this.newItem.value = '';
	}

	removeItem(index: number): void {
		this.list = this.list.filter((_, itemIndex) => itemIndex !== index);
	}
}
