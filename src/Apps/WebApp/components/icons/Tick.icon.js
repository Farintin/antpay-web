export default (props) => {
  const width = props.width ? props.width : 9
  const color = props.color ? props.color : '#ADFFE1'
  const style = {
    ...props.style
  }

  return (
    <svg 
      viewBox="0 0 9 6" 
      xmlns="http://www.w3.org/2000/svg"
      width={width} 
      fill="none" 
      style={style}
    >
      <path d="M1 3.28571L2.76636 5L8 1" stroke={color} strokeLinecap="round"/>
    </svg>
  )
}