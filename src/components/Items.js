import Component from "../core/Component.js";

export default class Items extends Component {
  setup() {
    this.$state = { items: ["item1", "item2", "item3"] };
  }
  template() {
    const { items } = this.$state;
    return `
            <div style="display:flex;flex-direction:column;">
                ${items
                  .map(
                    (elem, idx) => `
                    <div>
                        ${elem}
                        <span class="deleteBtn" data-idx="${idx}">Delete<span style="color:red" data-idx="${idx}">holymoly</span></span>
                    </div>
                `
                  )
                  .join("")}
            </div>
            <button class="addBtn">Add</button>
      `;
  }
  setEvent() {
    this.addEvent("click", ".addBtn", ({ target }) => {
      const { items } = this.$state;
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });
    this.addEvent("click", ".deleteBtn", ({ target }) => {
      const items = [...this.$state.items];
      items.splice(target.dataset.idx, 1);
      this.setState({ items });
    });
  }
}
