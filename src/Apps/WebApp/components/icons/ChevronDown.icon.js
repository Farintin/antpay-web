export default (props) => {
  const width = props.width ? props.width : 18
  const style = {...props.style}
  const color = props.color ? props.color : '#6E01CE'
  const className = props.className ? props.className : ''

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 8" 
      width={width}
      style={style}
      stroke={color} 
      className={`icon chevronDown ${className}`}
      strokeWidth="1.5" 
      strokeLinecap="round"
      fill="none" 
    >
      <path 
        d="M1.46153 0.826088L9.83431 6.69565L19.0444 0.826088" 
      />
    </svg>
  )
}