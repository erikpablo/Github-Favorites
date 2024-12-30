// classe que vai contewr a logica dos dados 
// como os dados serao estruturados 

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load() {
        this.entries = [
            {
                login: 'erikpablo',
                name: "Erik Pablo",
                public_repos: '28',
                followers: '5'
            }, 
            {
                login: 'maxmillernunes',
                name: "Maxmiller Nunes",
                public_repos: '28',
                followers: '5'
            }
        ]
    }
}

// classe que vai criar a visualizacao e eventos do HTML
export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector('table tbody')

        this.update()
    }

    update() {
        this.removeAlltr()

        this.entries.forEach( user => {
            const row = this.creatRow()
            row.querySelector('.user img').scr = `https://github.com/${user.login}.png`

            this.tbody.append(row)
    })

}

    creatRow() {
        const tr = document.createElement('tr')

        tr.innerHTML = `
            <td class="user">
                <img src="https://github.com/erikpablo.png" alt="Imagem de erik">
                <a target="_blank" href="https://github.com/erikpablo">
                    <p>Erik pablo</p>
                    <span>erikpablo</span>
                </a>
            </td>
            <td class="repositories">
                28
            </td>
            <td class="followers">
                 5
            </td>
            <td>
                <button class="remove">&times;</button>
            </td>`

        return tr
    }
    
    removeAlltr() {
    
        this.tbody.querySelectorAll('tr')
            .forEach((tr) => {
                tr.remove()
            })       
        }
    }

