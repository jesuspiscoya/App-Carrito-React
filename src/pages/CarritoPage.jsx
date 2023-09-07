import { useContext } from "react"
import { CarritoContext } from "../contexts/CarritoContext"

export const CarritoPage = () => {
  const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

  const calcularTotal = () => {
    return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2)
  }

  const handleImpresion = () => {
    print()
  }

  return (
    <>
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
            listaCompras.map(item => (
              <tr key={item.id}>
                <td scope="row">{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <button className="btn btn-outline-primary px-2 py-0" onClick={() => disminuirCantidad(item.id)}>-</button>
                  <span className="mx-2">{item.cantidad}</span>
                  <button className="btn btn-outline-success px-2 py-0" onClick={() => aumentarCantidad(item.id)}>+</button>
                </td>
                <td>
                  <button type="button" className="btn btn-danger px-2 py-1" onClick={() => eliminarCompra(item.id)}>Eliminar</button>
                </td>
              </tr>
            ))
          }

          <th colSpan={3}>TOTAL:</th>
          <th>S/ {calcularTotal()}</th>
        </tbody>
      </table>

      <div className="d-grid">
        <button className="btn btn-primary" onClick={handleImpresion} disabled={listaCompras < 1}>COMPRAR</button>
      </div>
    </>
  )
}
