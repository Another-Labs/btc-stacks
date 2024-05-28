import { Typography, Stack, styled } from '@mui/material'
import { ReactElement, useEffect, useState } from 'react'
import SuiIcon from '../assets/sui.svg?react'
import AnimatedNumbers from 'react-animated-numbers'

const StyledText = styled(Typography)({
  fontFamily: 'Orbitron',
  fontSize: 32,
  fontWeight: 700,
  color: '#5fe9d0',
})

function StatisticsItem({
  title,
  icon,
  count,
  unit,
  prefix,
}: {
  title: string
  icon?: ReactElement
  count: number
  prefix?: string
  unit?: string
}) {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    setTimeout(
      () => {
        setAnimated(true)
      },
      800 + (String(count).length - 1) * 200,
    )
  }, [count])

  return (
    <Stack
      alignItems="flex-start"
      direction="column"
      spacing={1}
      sx={{
        boxSizing: 'border-box',
        width: '210px',
        p: 3,
        borderRadius: '16px',
        background: 'rgba(38, 39, 43, 0.50)',
        boxShadow: '0 32px 50px 0 rgba(0,0,0, 0.4)',
      }}
    >
      <Typography fontWeight={600} sx={{ textTransform: 'uppercase' }}>
        {title}
      </Typography>
      <Stack alignItems="center" direction="row" spacing={1}>
        {icon}
        <Stack direction="row" spacing={0}>
          <StyledText>{prefix}</StyledText>
          {animated ? (
            <StyledText>{count}</StyledText>
          ) : (
            <AnimatedNumbers
              includeComma={false}
              transitions={(index) => ({
                type: 'spring',
                duration: index + 0.2,
              })}
              animateToNumber={count}
              fontStyle={{
                fontFamily: 'Orbitron',
                fontSize: '32px',
                fontWeight: 700,
                color: '#5fe9d0',
              }}
            />
          )}

          <StyledText>{unit}</StyledText>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default function StatisticsList() {
  return (
    <Stack alignItems="center" justifyContent="center">
      <Stack direction="row" spacing={1.5} sx={{ marginBottom: '172px' }}>
        <StatisticsItem
          title="btc yield"
          icon={<SuiIcon width={32} height={32} />}
          count={8}
          unit="%"
        />
        <StatisticsItem title="tvl" count={119} prefix="$" unit="M" />
        <StatisticsItem title="bitcoin deposited" count={1703} />
        <StatisticsItem title="another holders" count={2384} />
      </Stack>
    </Stack>
  )
}
