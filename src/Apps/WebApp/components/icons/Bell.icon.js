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
      viewBox="0 0 19 19" 
      width={width}
      style={style}
      className={`icon bell ${className}`}
      fill="none"  
      strokeWidth="2" 
      stroke={color}
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M14.25 6.33334C14.25 5.07357 13.7496 3.86538 12.8588 
          2.97459C11.968 2.08379 10.7598 1.58334 9.5 1.58334C8.24022 
          1.58334 7.03204 2.08379 6.14124 2.97459C5.25045 3.86538 
          4.75 5.07357 4.75 6.33334C4.75 11.875 2.375 13.4583 2.375 
          13.4583H16.625C16.625 13.4583 14.25 11.875 14.25 6.33334Z" 
          />
      <path d="M10.8695 16.625C10.7304 16.8649 10.5306 17.0641 
          10.2902 17.2025C10.0499 17.341 9.77734 17.4139 9.49995 
          17.4139C9.22257 17.4139 8.95005 17.341 8.70969 
          17.2025C8.46933 17.0641 8.26955 16.8649 8.13037 16.625" 
          />
      <circle 
        cx="14.5" 
        cy="2.5" 
        r="2.1" 
        fill="#FF0000"
        stroke="none"
        />
    </svg>
  )
}