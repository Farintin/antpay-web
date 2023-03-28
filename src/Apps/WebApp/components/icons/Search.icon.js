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
      viewBox="0 0 16 16" 
      width={width}
      style={style}
      className={`icon search ${className}`}
      fill="none"  
      strokeWidth="2" 
      stroke={color}
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M7.22219 13.4444C10.6586 13.4444 13.4444 10.6586 13.4444 
          7.22219C13.4444 3.78577 10.6586 1 7.22219 1C3.78577 1 1 
          3.78577 1 7.22219C1 10.6586 3.78577 13.4444 7.22219 13.4444Z" 
          />
      <path d="M15 15L11.6167 11.6166" />
    </svg>
  )
}