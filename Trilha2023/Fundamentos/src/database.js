import fs from "node:fs/promises"

const dabatasePatch = new URL('../db-json', import.meta.url)

export class Database {
  #database = {}

  constructor(){
    fs.readFile(dabatasePatch, 'utf8').then(data => {
      this.#database = JSON.parse(data)
    })
    .catch(() => {
      this.#persist()
    })
  }

  #persist(){
    fs.writeFile(dabatasePatch, JSON.stringify(this.#database))
  } 

  select(table){
    const data = this.#database[table] ?? []

    return data
  }

  insert(table, data){
    if(Array.isArray(this.database[table])){
      this.#database[table].push(data)
    } else {
      this.#database[table] = [data]
    }

    this.#persist()

    return data
  }
}