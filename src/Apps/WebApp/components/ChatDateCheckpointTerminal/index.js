import Box from "@mui/material/Box"



export default function ({ time }) {
  // const defaultTimeFormat = new Date(time).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  return (
    <Box
      data-date={new Date(time).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      className="timeCheckpointTerminal"
      />
  )
}