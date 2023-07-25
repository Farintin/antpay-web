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
        viewBox="0 0 11 12" 
        fill="none" 
        // strokeWidth="2" 
        width={width}
        style={style}
        className={`icon file ${className}`}
        stroke={color}
    >
      <path d="M0.730713 4.71795C0.730713 2.78496 2.29772 1.21796 
          4.23071 1.21796H6.69225C8.62525 1.21796 10.1923 2.78496 
          10.1923 4.71796V5.1795C10.1923 8.21706 7.72982 10.6795 
          4.69225 10.6795H4.23071C2.29771 10.6795 0.730713 9.11249 
          0.730713 7.1795V4.71795Z" />
      <path d="M10.0383 7.25642H8.11523C7.01066 7.25642 6.11523 
          8.15185 6.11523 9.25642V10.5256" />
    </svg>
  )
}