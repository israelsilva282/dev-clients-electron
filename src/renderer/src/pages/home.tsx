import { Link } from 'react-router-dom'

export function Home() {
  function handleAdd() {}
  return (
    <div>
      <h1>Pagina home</h1>
      <Link to={'/create'}>Ir para pagina create</Link>

      <br />
      <br />

      <button onClick={handleAdd}>Testar</button>
    </div>
  )
}
