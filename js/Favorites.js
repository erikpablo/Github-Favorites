export class GithubUser {
    static search(username) {
        const endpoint = `https://api.github.com/users/${username}`

        return fetch(endpoint)
        .then(data => data.json())
        .then(({ login, name, public_repos, followers }) => ({
            login,
            name,
            public_repos,
            followers,
        }))
    }
}

// classe que vai contewr a logica dos dados 
// como os dados serao estruturados 

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()

        GithubUser.search('erikpablo').then(user => console.log(user))
    }

    load() {
        this.entries = JSON.parse(localStorage.getItem
        ('@github-favorites:')) || []
        console.log(entries)
    }

    delete(user) {
        // Higher-order functions (map, filter, find, reduce)
        const filteredEntries = this.entries.filter(entry =>
        entry.login !== user.login)

        this.entries = filteredEntries
        this.update()
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
        this.removeAllTr()

        this.entries.forEach(user => {
            const row = this.createRow()
           
            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Imagem de ${user.name}` 
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers

            row.querySelector('.remove').onclick = () => {
               const isOk = confirm('Tem certeza que deseja deletar essa linha')

               if(isOk) {
                 this.delete(user)
               }
            }

            this.tbody.append(row)
        })
    }

    createRow() {
        const tr = document.createElement('tr')

        tr.innerHTML =`
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
            </td>
        `

        return tr
    }
    
    removeAllTr() {
        this.tbody.querySelectorAll('tr')
        .forEach((tr) => {
           tr.remove() 
        })
        
    }
}