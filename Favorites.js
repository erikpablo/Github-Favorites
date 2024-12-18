// classe que vai contewr a logica dos dados 
// como os dados serao estruturados 

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
    }
}

// classe que vai criar a visualizacao e eventos do HTML
export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)
    }
}
