'use client'

const TypeBtn = (props) => {
  const { name, logo } = props
  const badgeClass = name === 'All Types' ? "bg-slate-100 justify-center" : `bg-${name.toLowerCase()}`
  const badgeImg = `/images/${name.toLowerCase()}_Icon.png`

  return(
    <button
      className={`badge ${badgeClass}`}
      onClick={() => console.log(name)}
    >
      { logo && <img src={badgeImg} className="small-logo mr-2" /> }
      {name}
    </button>
  )
}

export default TypeBtn
