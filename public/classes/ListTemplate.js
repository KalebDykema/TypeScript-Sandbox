export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    ;
    render(item, heading, pos) {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        const p = document.createElement("p");
        h4.innerText = heading;
        li.append(h4);
        p.innerText = item.format();
        li.append(p);
        pos === "start"
            ? this.container.prepend(li)
            : this.container.append(li);
    }
    ;
}
;
