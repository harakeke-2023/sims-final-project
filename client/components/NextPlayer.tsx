import { useNavigate } from 'react-router-dom'

interface Id {
  id: number
}

function NextPlayer(props: Id) {
  const navigate = useNavigate()

  function handleSubmit() {
    if (props.id % 2 === 0) {
      navigate(`/draw/${props.id}`)
    } else navigate(`/write/${props.id}`)
  }

  return (
    <>
      <p>Now pass device to Player {props.id}</p>
      <button onClick={handleSubmit}>Pass</button>
    </>
  )
}

export default NextPlayer
