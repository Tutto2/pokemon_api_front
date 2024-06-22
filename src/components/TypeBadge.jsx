const TypeBadge = ({ type }) => {
  return(
    <img className="h-5 min-w-5 sm:h-7 sm:min-w-7" src={`/images/${type.name}_Icon.png`}></img>
  )
}

export default TypeBadge
