let defaultWidth = 40



const FacebookIcon = (props) => {
  const width = props.width ? props.width : defaultWidth*.6
  const style = props.style ? props.style : {}
  const fill = props.fill ? props.fill : 'none'

  return (
    <svg
      viewBox="0 0 26 43"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      width={width}
      style={style}
      className={`icon ${props.className}`}
    >
      <path d="M24 2H18C15.3478 2 12.8043 3.02723 10.9289 4.85571C9.05357 
          6.68419 8 9.16414 8 11.75V17.6H2V25.4H8V41H16V25.4H22L24 
          17.6H16V11.75C16 11.2328 16.2107 10.7368 16.5858 
          10.3711C16.9609 10.0054 17.4696 9.8 18 9.8H24V2Z"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
      />
    </svg>
  )
}

const InstagramIcon = (props) => {
  const width = props.width ? props.width : defaultWidth
  const style = props.style ? props.style : {}
  const fill = props.fill ? props.fill : 'none'

  return (
    <svg
      viewBox="0 0 43 43"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      width={width}
      style={style}
      className={`icon ${props.className}`}
    >
      <path
        d="M32 10H32"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M31.1854 2.03125H11.5566C6.13625 2.03125 1.74219 
          6.42531 1.74219 11.8457V31.4745C1.74219 36.8948 
          6.13625 41.2889 11.5566 41.2889H31.1854C36.6058 
          41.2889 40.9998 36.8948 40.9998 
          31.4745V11.8457C40.9998 6.42531 36.6058 2.03125 
          31.1854 2.03125Z" 
          stroke="white" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
      />
      <path d="M29.409 20.1802C29.6492 21.7997 29.3725 23.4537 
          28.6185 24.9069C27.8644 26.3602 26.6713 27.5386 
          25.2089 28.2747C23.7465 29.0108 22.0892 29.267 
          20.4728 29.0069C18.8563 28.7468 17.3631 27.9836 
          16.2054 26.8259C15.0477 25.6682 14.2845 24.175 
          14.0244 22.5585C13.7643 20.9421 14.0205 19.2848 
          14.7566 17.8224C15.4927 16.36 16.6711 15.1669 
          18.1244 14.4128C19.5776 13.6588 21.2316 13.3821 
          22.8511 13.6223C24.5031 13.8673 26.0325 14.637 
          27.2134 15.8179C28.3943 16.9988 29.1641 18.5282 
          29.409 20.1802Z" 
          stroke="white" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
      />
    </svg>
  )
}

const TwitterIcon = (props) => {
  const width = props.width ? props.width : defaultWidth*1.06
  const style = props.style ? props.style : {}
  const fill = props.fill ? props.fill : 'none'

  return (
    <svg
      viewBox="0 0 48 39"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      width={width}
      style={style}
      className={`icon ${props.className}`}
    >
      <path d="M46 2.01961C44.0848 3.33716 41.9642 4.34488 39.72 
          5.00395C38.5155 3.65322 36.9147 2.69585 35.1341 
          2.26134C33.3535 1.82682 31.479 1.93612 29.7642 
          2.57445C28.0493 3.21279 26.5769 4.34935 25.546 
          5.83043C24.515 7.31151 23.9754 9.06565 24 
          10.8556V12.8061C20.4853 12.895 17.0025 12.1348 13.862 
          10.5931C10.7215 9.05149 8.02063 6.77629 6 3.97016C6 
          3.97016 -2 21.5251 16 29.3273C11.8811 32.0541 6.97431 
          33.4213 2 33.2284C20 42.9811 42 33.2284 42 
          10.7971C41.9982 10.2538 41.9446 9.71178 41.84 
          9.17812C43.8812 7.21488 45.3217 4.73617 46 2.01961V2.01961Z"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
      />
    </svg>
  )
}













const AppsIcon = (props) => {
  const width = props.width ? props.width : 16
  const style = props.style ? props.style : {}
  const color = props.color ? props.color : '#fff'
  const className = props.className ? props.className : ''

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      width={width}
      fill={color}
      stroke="none"
      stroke-width="0px"
      style={style}
      className={`icon ${className}`}
    >
      <path d="M853.333333 938.666667h-213.333333c-46.933333 0-85.333333-38.4-85.333333-85.333334v-213.333333c0-46.933333 
        38.4-85.333333 85.333333-85.333333h213.333333c46.933333 0 85.333333 
        38.4 85.333334 85.333333v213.333333c0 46.933333-38.4 85.333333-85.333334 
        85.333334z m0-469.333334h-213.333333c-46.933333 
        0-85.333333-38.4-85.333333-85.333333V170.666667c0-46.933333 
        38.4-85.333333 85.333333-85.333334h213.333333c46.933333 0 
        85.333333 38.4 85.333334 85.333334v213.333333c0 46.933333-38.4 
        85.333333-85.333334 85.333333zM384 938.666667H170.666667c-46.933333 
        0-85.333333-38.4-85.333334-85.333334v-213.333333c0-46.933333 
        38.4-85.333333 85.333334-85.333333h213.333333c46.933333 0 
        85.333333 38.4 85.333333 85.333333v213.333333c0 46.933333-38.4 
        85.333333-85.333333 85.333334z m0-469.333334H170.666667c-46.933333 
        0-85.333333-38.4-85.333334-85.333333V170.666667c0-46.933333 
        38.4-85.333333 85.333334-85.333334h213.333333c46.933333 0 85.333333 38.4 
        85.333333 85.333334v213.333333c0 46.933333-38.4 85.333333-85.333333 85.333333z"/>
    </svg>
  )
}

const HomeIcon = (props) => {
  const width = props.width ? props.width : 24
  const style = props.style ? props.style : {}
  const color = props.color ? props.color : '#000'
  const className = props.className ? props.className : ''

  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      fill="none"
      stroke={color}
      strokeWidth="2px"
      style={style}
      className={`icon ${className}`}
    >
      <path 
          d="M6.64373233,18.7821107 L6.64373233,15.7152449 C6.64371685,14.9380902 
              7.27567036,14.3067075 8.05843544,14.3018198 L10.9326107,14.3018198 
              C11.7188748,14.3018198 12.3562677,14.9346318 12.3562677,15.7152449 
              L12.3562677,15.7152449 L12.3562677,18.7732212 
              C12.3562498,19.4472781 12.9040221,19.995083 13.5829406,20 
              L15.5438266,20 C16.4596364,20.0023291 17.3387522,19.6427941 
              17.9871692,19.0007051 C18.6355861,18.3586161 19,17.4867541 
              19,16.5775231 L19,7.86584638 C19,7.13138763 18.6720694,6.43471253 
              18.1046183,5.96350064 L11.4429783,0.674268354 
              C10.2785132,-0.250877524 8.61537279,-0.22099178 
              7.48539114,0.745384082 C7.48539114,0.745384082 
              0.967012253,5.96350064 0.967012253,5.96350064 
              C0.37274068,6.42082162 0.0175522924,7.11956262 0,7.86584638 
              L0,16.5686336 C0,18.463707 1.54738155,20 3.45617342,20 
              L5.37229029,20 C5.69917279,20.0023364 6.01348703,19.8750734 
              6.24547302,19.6464237 C6.477459,19.417774 6.60792577,19.1066525 
              6.60791706,18.7821107 L6.64373233,18.7821107 Z" 
          transform="translate(2.5 2)"
      />
    </svg>
  )
}

const PuzzleIcon = (props) => {
  const width = props.width ? props.width : 16
  const style = props.style ? props.style : {}
  const color = props.color ? props.color : '#fff'
  const className = props.className ? props.className : ''

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 410.001 410.001"
      width={width}
      fill={color}
      stroke="none"
      stroke-width="0px"
      style={style}
      className={`icon ${className}`}
    >
      <path d="M394.067,169.788l-34.613-34.614l10.324-10.325c21.245-21.245,21.243-55.688,0-76.933l-7.692-7.693
        c-21.246-21.243-55.688-21.244-76.934,0l-10.324,10.325l-34.614-34.613c-21.244-21.245-55.688-21.244-76.932,0l-31.362,31.362
        l23.531,23.531c21.244,21.245,21.244,55.688,0,76.932l-7.692,7.693c-21.246,21.245-55.688,21.246-76.934,0l-23.529-23.53
        l-31.362,31.362c-21.244,21.244-21.246,55.685,0,76.929l34.612,34.615l22.262-22.262c21.245-21.242,55.688-21.242,76.932,0
        l7.694,7.692c21.241,21.244,21.242,55.688-0.001,76.933l-22.26,22.262l34.612,34.615c21.245,21.241,55.69,21.241,76.933-0.002
        l31.362-31.363l13.284,13.287c21.245,21.244,55.688,21.244,76.933,0l7.693-7.693c21.244-21.244,21.245-55.688,0-76.932
        l-13.286-13.285l31.363-31.361C415.312,225.477,415.312,191.032,394.067,169.788z"/>
    </svg>
  )
}

const SendIcon = (props) => {
  const width = props.width ? props.width : 16
  const style = props.style ? props.style : {}
  const color = props.color ? props.color : '#fff'
  const className = props.className ? props.className : ''

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1171 1024"
      width={width}
      fill={color}
      stroke="none"
      stroke-width="0px"
      style={style}
      className={`icon ${className}`}
    >
      <path d="M502.237757 1024 644.426501 829.679301 502.237757 788.716444 
          502.237757 1024 502.237757 1024ZM0 566.713817 403.967637 689.088066 
          901.485385 266.66003 515.916344 721.68034 947.825442 855.099648 
          1170.285714 0 0 566.713817 0 566.713817Z"/>
    </svg>
  )
}


/* 
const FileIcon = (props) => {
  const width = props.width ? props.width : 24
  const style = props.style ? props.style : {}
  const color = props.color ? props.color : '#000'

  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      fill="none" 
      stroke={color} 
      strokeWidth="2px" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      style={style}
      className={`icon icon-tabler icon-tabler-file ${props.className}`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 
        5v11a2 2 0 0 1 -2 2z" />
    </svg>
  )
}
*/



export { 
  FacebookIcon, 
  InstagramIcon, 
  TwitterIcon, 
  
  AppsIcon,
  HomeIcon,
  PuzzleIcon,
  SendIcon
}