'use client'

const TypeBtn = (props) => { 
  const { name } = props
  const badgeClass = `bg-${name.toLowerCase()}`
  const badgeImg = `/images/${name}_Icon.png`

  return( 
    <button
      className={`badge h-30 ${badgeClass}`}
      onClick={() => console.log(name)} 
    >
      <img src={badgeImg} className="small-logo" />
      {name}
    </button>
  ) 
}

export default TypeBtn