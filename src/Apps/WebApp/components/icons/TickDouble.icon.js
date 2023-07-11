export default (props) => {
  const width = props.width ? props.width : 11
  const color = props.color ? props.color : '#6affc8'// '#ADFFE1'
  const style = {
    ...props.style
  }

  return (
    <svg  
      viewBox="0 0 11 7" 
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      fill="none" 
      stroke={color}
      strokeLinecap="round"
      style={style}
    >
      <path d="M1 3.28571L2.76636 5L8 1" />
      <path d="M5 6L10.2336 2" />
    </svg>
  )
}