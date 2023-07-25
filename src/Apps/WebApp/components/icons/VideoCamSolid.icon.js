export default (props) => {
  const width = props.width ? props.width : 16
  const color = props.color ? props.color : '#ADFFE1'
  const className = props.className ? props.className : ''
  const style = {
    ...props.style
  }

  return (
    <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 12 8" 
        fill={color} 
        stroke={color}
        strokeLinecap="round" 
        strokeLinejoin="round"
        // strokeWidth="2" 
        width={width}
        style={style}
        className={`icon videoCam solid ${className}`}
    >
      <path d="M11.5001 2L8.3501 4.45L11.5001 6.9V2Z" 
              />
      <path d="M7.8 0H1.2C0.537258 0 0 0.511675 0 
          1.14286V6.85714C0 7.48833 0.537258 8 1.2 
          8H7.8C8.46274 8 9 7.48833 9 
          6.85714V1.14286C9 0.511675 8.46274 0 
          7.8 0Z" />
    </svg>
  )
}