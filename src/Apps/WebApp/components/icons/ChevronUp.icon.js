export default (props) => {
  const width = props.width ? props.width : 18
  const color = props.color ? props.color : '#6E01CE'
  const className = props.className ? props.className : ''
  const style = {
    ...props.style,
    transform: 'rotateZ(180deg)'
  }

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 8" 
      width={width}
      style={style}
      className={`icon chevronUp ${className}`}
      fill="none" 
    >
      <path 
        d="M1.46153 0.826088L9.83431 6.69565L19.0444 0.826088" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
    </svg>
  )
}