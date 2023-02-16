import { http } from "node:http"

import { Transform } from "node:stream"

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback){
    const transformed = Number(chunk.toString()) * -1

    callback(null, Buffer.from(transformed.toString()))
  }
}

const server = http.createServer((req, res) => {
  
})

server.listen(3334)