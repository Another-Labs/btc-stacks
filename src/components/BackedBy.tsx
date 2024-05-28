import { Stack } from '@mui/material'
import img1 from '../assets/backed/backed-1.png'
import img2 from '../assets/backed/backed-2.png'
import img3 from '../assets/backed/backed-3.png'
import img4 from '../assets/backed/backed-4.png'

export default function BackedBy() {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <img src={img1} height={40} alt="" />
      <img src={img2} height={40} alt="" />
      <img src={img3} height={40} alt="" />
      <img src={img4} height={40} alt="" />
    </Stack>
  )
}
