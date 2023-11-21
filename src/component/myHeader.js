class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="my-header">
                <nav>
                    <ul>
                        <li><a href="#characters">Characters</a></li>
                        <li><a href="#locations">Locations</a></li>
                        <li><a href="#episodes">Episodes</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}
customElements.define('my-header', MyHeader);