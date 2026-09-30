import { MongoClient, ObjectId } from "mongodb"

process.loadEnvFile()

const URI_DB = process.env.URI_DB || ""

const client = new MongoClient(URI_DB)

const db = client.db("biblioteca")

const libros = db.collection("libros")

const args = process.argv.splice(2)
const action = args[0]

const createLibro = async (
  titulo: string,
  autor: string,
  precio: number,
  stock: number
) => {
  const nuevoLibro = {
    titulo,
    autor,
    precio,
    stock
  }

  const resultado = await libros.insertOne(nuevoLibro)

  console.log("Libro creado con éxito :)")
  console.log(resultado)
}

const getLibros = async () => {
  const librosEncontrados = await libros.find().toArray()

  console.log(librosEncontrados)
}

const updateLibro = async (
  id: string,
  titulo: string,
  autor: string,
  precio: number,
  stock: number
) => {
  const resultado = await libros.updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        titulo,
        autor,
        precio,
        stock
      }
    }
  )

  if (resultado.matchedCount === 1) {
    const libroActualizado = await libros.findOne({
      _id: new ObjectId(id)
    })

    console.log("Libro actualizado con éxito :)")
    console.log(libroActualizado)
  } else {
    console.log("No se encontró el libro")
  }
}

const deleteLibro = async (id: string) => {
  const resultado = await libros.deleteOne({
    _id: new ObjectId(id)
  })

  console.log("Libro eliminado con éxito :)")
  console.log(resultado)
}



const connectDb = async () => {
  try {
    await client.connect()
    console.log("Conectado a MongoDB con éxito :)")
  } catch (error) {
    console.log("Error al conectar a MongoDB :(")
  }
}

const main = async () => {
  try {
    await connectDb()

    switch (action) {
      case "create":
        await createLibro(
          args[1]!,
          args[2]!,
          Number(args[3]),
          Number(args[4])
        )
        break

      case "read":
        await getLibros()
        break

      case "update":
        await updateLibro(
          args[1]!,
          args[2]!,
          args[3]!,
          Number(args[4]),
          Number(args[5])
        )
        break

      case "delete":
       await deleteLibro(args[1]!)
       break

    }
  } finally {
    await client.close()
  }
}

main()