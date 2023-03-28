export default (props) => {
  const width = props.width ? props.width : 11
  const color = props.color ? props.color : '#6E01CE'
  const className = props.className ? props.className : ''
  const style = {
    ...props.style
  }

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 11 11" 
      width={width}
      style={style}
      className={`icon pencil ${className}`}
      fill="none" 
      stroke={color} 
    >
      <path d="M1 6.92704V10L4.15888 9.48784L9.95016 3.85408C10.3713 
        0.57625 8.01973 0.781114 6.79128 1.29327L1 6.92704Z" 
        // fill="#ADFFE1" 
        strokeLinecap="round" />
    </svg>
  )
}