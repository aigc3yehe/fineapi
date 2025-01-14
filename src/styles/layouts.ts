import { Button } from '@mui/material'
import { styled, keyframes } from '@mui/material/styles'
import { AppBar, Toolbar, Box, IconButton } from '@mui/material'

// 定义旋转动画
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(135deg);
  }
  66% {
    transform: rotate(315deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

// 定义旋转动画
const mi_rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(45deg);
  }
  66% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

// 添加新的动画关键帧
const slideRight = keyframes`
  0% {
    transform: translateX(-100%);
  }
  45%, 55% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`

export const MainLayout = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  minWidth: '1440px',
  overflow: 'hidden',
  [`@media (min-width: ${theme.breakpoints.values.sm}px) and (max-width: 1440px)`]: {
    minWidth: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '100%',
  }
}))

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  width: '100%',
  height: '5.625rem',
  background: '#FAF9F6',
  boxShadow: 'none',
  borderBottom: '1px solid #000000',
  display: 'flex',
  justifyContent: 'center',
  paddingLeft: 0,
  [theme.breakpoints.down('sm')]: {
    height: '3.375rem',
  }
}))

export const AppBarToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
})

export const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5625rem',
  marginLeft: '1rem',
  height: '5.625rem',
  [theme.breakpoints.down('sm')]: {
    height: '54px',
    marginLeft: '0px',
    gap: '4px',
    '& img:first-of-type': {
      width: '1.375rem',
      height: '1.25rem',
    },
    '& img:last-of-type': {
      width: '5.25rem',
      height: '0.96875rem',
    },
  }
}))

export const SocialButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '1.4375rem',
  marginRight: '1rem',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    gap: '0.75rem',
    marginRight: '0px',
  }
}))

export const SocialIconButton = styled(IconButton)(({ theme }) => ({
  width: '3.5rem',
  height: '3.5rem',
  borderRadius: '0.5rem',
  border: '1px solid #000000',
  borderWidth: '1px 1px 4px 1px',
  background: '#FAF9F6',
  '&:hover': {
    background: '#CDF138',
    borderWidth: '1px',
  },
  '&:active': {
    background: '#CDF138',
    borderWidth: '1px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '31px',
    height: '31px',
    borderRadius: '4.5px',
    borderWidth: '0.55px 0.55px 2.21px 0.55px',
    '& img': {
      width: '14px',
      height: '14px',
    },
  }
}))

export const ContentSection = styled('section')<{ bgColor?: string }>(
  ({ bgColor = '#FAF9F6', theme }) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    background: bgColor,
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      overflow: 'hidden',
    }
  })
)

export const ContentContainer = styled('div')(({ theme }) => ({
  width: '1440px',
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  [`@media (min-width: ${theme.breakpoints.values.sm}px) and (max-width: 1440px)`]: {
    width: '100%',
    maxWidth: '1440px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  }
}))

export const SectionOne = styled(ContentContainer)(({ theme }) => ({
  height: '989px',
  [`@media (min-width: ${theme.breakpoints.values.sm}px) and (max-width: 1440px)`]: {
    width: '100%',
    height: 'auto',
    paddingBottom: '2.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: 'auto',
    paddingBottom: '1rem',
  }
}))

export const SectionTwo = styled(ContentContainer)(({ theme }) => ({
  height: '38.5625rem', // 617px / 16px
  [theme.breakpoints.down('sm')]: {
    height: 'auto'
  }
}))

export const SectionThree = styled(ContentContainer)(({ theme }) => ({
  height: '46.5625rem',
  [theme.breakpoints.down('sm')]: {
    height: '745px',
    paddingBottom: '1rem',
    width: '23.4375rem',
    marginLeft: 'calc(100% - 23.4375rem)/2',
  }
}))

export const SectionFour = styled(ContentContainer)(({ theme }) => ({
  height: '63.3125rem',
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    paddingBottom: '1rem',
  }
}))

export const Footer = styled(ContentContainer)(({ theme }) => ({
  width: '100%',
  height: '14.6875rem',
  borderTop: '1px solid rgba(255, 255, 255, 0.24)',  // #FFFFFF3D
  [theme.breakpoints.down('sm')]: {
    height: '16rem',
  }
}))

export const SectionOneContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '2.0625rem',
  gap: '1.625rem',
  [`@media (min-width: ${theme.breakpoints.values.sm}px) and (max-width: 1440px)`]: {
    width: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: '1.3125rem',
    gap: '0.1425rem',
  }
}))

export const BuildButton = styled(Button)(({ theme }) => ({
  width: '19rem',  // 304px / 16px
  height: '3.25rem',  // 52px / 16px
  padding: 0,
  gap: '0.625rem',  // 10px / 16px
  borderRadius: '3.25rem',  // 52px / 16px
  border: '1px solid rgba(0, 0, 0, 0.14)',
  background: 'transparent',
  fontFamily: 'PP Neue Montreal, sans-serif',
  fontSize: '1.25rem',  // 20px / 16px
  fontWeight: 500,
  lineHeight: '1.5rem',  // 24px / 16px
  textAlign: 'center',
  color: '#000000',
  textTransform: 'none',
  '&:hover': {
    background: 'transparent',
  },
  [theme.breakpoints.down('sm')]: {
    width: '12.75rem',
    height: '1.6875rem',
    padding: 0,
    fontSize: '1rem',
    lineHeight: '1.2rem',
    border: '0.3px solid rgba(0, 0, 0, 0.14)',
    borderRadius: '0.875rem',
    marginBottom: '0.875rem',
  }
}))

export const SectionContent = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
})

export const HeadlineContainer = styled('div')<{ gap?: string }>(
  ({ gap = '21px', theme }) => ({
    display: 'flex',
    alignItems: 'center',
    height: '5.5rem',
    gap: gap,
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      justifyContent: 'center',
      gap: '0.5rem',
    }
  })
)

export const HeadlineText = styled('h1')(({ theme }) => ({
  fontFamily: 'PP Neue Montreal',
  fontSize: '4.625rem',
  fontWeight: 500,
  lineHeight: '5.45rem',
  textAlign: 'center',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  textTransform: 'uppercase',
  margin: 0,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.25rem',
    lineHeight: '1.55rem',
    textAlign: 'center',
  }
}))

export const CircleIcon = styled('img')(({ theme }) => ({
  width: '4.25rem',
  height: '4.25rem',
  animation: `${rotate} 450ms ease-out infinite`,
  [theme.breakpoints.down('sm')]: {
    width: '1.2rem',
    height: '1.2rem',
  }
}))

export const IconGroup = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.875rem',  // 14px / 16px
  '& img': {
    width: '4.625rem',  // 74px / 16px
    height: '4.625rem',  // 74px / 16px
  },
  [theme.breakpoints.down('sm')]: {
    gap: '0.303125rem',
    '& img': {
      width: '1.318125rem !important',
      height: '1.318125rem !important',
    }
  }
}))

const fadeInOut = keyframes`
  0%, 49% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
`
const fadeOutIn = keyframes`
  0%, 49% {
    opacity: 0;
  }
  50%, 100% {
    opacity: 1;
  }
`

export const HeartIconContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '4.1875rem',  // 67px / 16px
  height: '3.9375rem',  // 63px / 16px
  [theme.breakpoints.down('sm')]: {
    width: '1.1875rem !important',
    height: '1.125rem !important',
  }
}))

export const AnimatedHeartBackgroundIcon = styled('img')(({ theme }) => ({
  position: 'absolute',
  width: '4.1875rem',  // 67px / 16px
  height: '3.9375rem',  // 63px / 16px
  top: 0,
  left: 0,
  zIndex: 1,
  [theme.breakpoints.down('sm')]: {
    width: '1.1875rem !important',
    height: '1.125rem !important',
  }
}))

export const AnimatedHeartIcon = styled('img')<{ times: number }>(({ times=400, theme }) => ({
  position: 'absolute',
  width: '4.1875rem',  // 67px / 16px
  height: '3.9375rem',  // 63px / 16px
  top: 0,
  left: 0,
  animation: `${fadeInOut} ${times}ms ease-out infinite`,
  [theme.breakpoints.down('sm')]: {
    width: '1.1875rem !important',
    height: '1.125rem !important',
  }
}))

export const AnimatedHeartOutInIcon = styled('img')<{ times: number }>(({ times=400, theme }) => ({
  position: 'absolute',
  width: '4.1875rem',
  height: '3.9375rem',
  top: 0,
  left: 0,
  animation: `${fadeOutIn} ${times}ms ease-out infinite`,
  [theme.breakpoints.down('sm')]: {
    width: '1.1875rem !important',
    height: '1.125rem !important',
  }
}))

export const RightIcon = styled('img')(({ theme }) => ({
  width: '10.8125rem',
  height: '4.25rem',
  animation: `${slideRight} 800ms ease-out infinite`,
  position: 'absolute',
  left: 0,
  [theme.breakpoints.down('sm')]: {
    width: '3.0625rem !important',
    height: '1.125rem !important',
  }
}))

export const RightIconContainer = styled('div')(({ theme }) => ({
  width: '10.8125rem',  // 173px / 16px
  height: '4.25rem',  // 68px / 16px
  overflow: 'hidden',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    width: '3.0625rem !important',
    height: '1.125rem !important',
    '& img': {
      width: '3.0625rem !important',
      height: '1.125rem !important',
    }
  }
}))

export const HeartContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '3.9375rem',  // 63px / 16px
  gap: '1.75rem',  // 28px / 16px
  [theme.breakpoints.down('sm')]: {
    gap: '0.5rem',
    height: '1.5625rem'
  }
}))

export const MovieIcon = styled('img')(({ theme }) => ({
  width: '4.4375rem',
  height: '4.25rem',
  [theme.breakpoints.down('sm')]: {
    width: '1.251875rem !important',
    height: '1.2rem !important',
  }
}))

export const MiIcon = styled('img')(({ theme }) => ({
  width: '4.6875rem',
  height: '4.6875rem',
  animation: `${mi_rotate} 600ms ease-out infinite`,
  [theme.breakpoints.down('sm')]: {
    width: '1.33625rem !important',
    height: '1.33625rem !important',
  }
}))

export const SmileIcon = styled('img')(({ theme }) => ({
  width: '4.25rem',
  height: '4.25rem',
  [theme.breakpoints.down('sm')]: {
    width: '1.2rem !important',
    height: '1.2rem !important',
  }
}))

export const ImageShowcase = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '77.5rem',
  height: '25.625rem',
  opacity: 1,
  [theme.breakpoints.down('sm')]: {
    width: '23.4375rem',
    height: '7.5rem',
    marginLeft: 'calc(100% - 23.4375rem)/2',
  }
}))

export const ShowcaseImage = styled('img')<{ centerX: string; centerY: string, times: number, transform: string }>(
  ({ centerX, centerY, times, transform, theme }) => ({
    position: 'absolute',
    left: centerX,
    top: centerY,
    transform: 'translate(-50%, -50%)',
    transition: `transform ${times}ms ease-out`,
    transformOrigin: 'center center',
    '&:hover': {
      transform: `translate(-50%, -50%) ${transform}`,
    },
    [theme.breakpoints.down('sm')]: {
      left: centerX,
      top: centerY,
    }
  })
)

export const YellowPanel = styled('div')(({ theme }) => ({
  width: '80rem',
  height: '30.0625rem',
  borderRadius: '1rem',
  position: 'relative',
  margin: '4.25rem auto',
  background: '#FAF9F6',
  [theme.breakpoints.down('sm')]: {
    width:'calc(100% - 2rem)',
    minHeight: '28.25rem',
    height:'auto', 
    margin: '1rem',
    position: 'relative',
    display: 'flex',
    overflow: 'hidden',
    borderRadius: '0.5rem',
  }
}))

export const BackgroundImage = styled('img')(({ theme }) => ({
  width: '80rem',
  height: '30.0625rem',
  borderRadius: '1rem',
  position: 'absolute',
  top: 0,
  left: 0,
  [theme.breakpoints.down('sm')]: {
    width:'100%',
    height:'auto', 
    minHeight: '28.25rem',
    borderRadius: '0.5rem',
  }
}))

export const PurpleUnion = styled('img')(({ theme }) => ({
  position: 'absolute',
  width: '13rem',
  height: '13rem',
  top: '3rem',
  right: '3rem',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  }
}))

export const TextContainer = styled('div')(({ theme }) => ( {
  position: 'absolute',
  top: '3rem',
  left: '3rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  [theme.breakpoints.down('sm')]: {
    top: '1.5rem',
    left: '0.875rem',
    gap: '0.5rem',
  }
}))

export const CoreTitle = styled('h2')(({ theme }) => ({
  fontFamily: 'PP Neue Montreal',
  fontSize: '5.5rem',
  fontWeight: 500,
  lineHeight: '6.6rem',
  textAlign: 'left',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  color: '#000000',
  margin: 0,
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.25rem',
    lineHeight: '2.7rem',
  }
}))

export const SubTitle = styled('p')(({ theme }) => ({ 
  fontFamily: 'PP Neue Montreal',
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: '1.2rem',
  textAlign: 'left',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  color: '#000000',
  margin: 0,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    lineHeight: '1.2rem',
  }
}))

export const FeatureList = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '14.4375rem',
  left: '3rem',
  width: '58.1875rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.125rem',
  [theme.breakpoints.down('sm')]: {
    top: '9rem',
    left: '0.875rem',
    width: 'calc(100% - 2rem)',
    gap: '0.75rem',
  }
}))

export const FeatureItem = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.5rem',
  fontFamily: 'PP Neue Montreal',
  fontSize: '1.125rem',
  fontWeight: 400,
  lineHeight: '1.35rem',
  textAlign: 'left',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  color: '#000000',
  '&::before': {
    content: '""',
    width: '0.25rem',
    height: '0.25rem',
    backgroundColor: '#000000',
    marginTop: '0.5rem',  // 调整圆点的垂直位置，使其与文本对齐
    flexShrink: 0,  // 防止圆点被压缩
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    lineHeight: '1.2rem',
    '&::before': {
      marginTop: '0.4375rem',  // 微调移动端下圆点的垂直位置
      width: '0.1875rem',  // 稍微调小圆点尺寸
      height: '0.1875rem',
    }
  }
}))

export const SectionThreeContent = styled('div')(({ theme }) => ({
  padding: '3.75rem 5rem',
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: '0px 0px',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    width: '23.4375rem',
    marginLeft: 'calc(100% - 23.4375rem)/2',
    left: 'calc(100vw - 23.4375rem)/2',
  }
}))

export const LeftContent = styled('div')(({ theme }) => ({
  width: '36.4375rem',
  height: '32.6875rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: '100%',
    position: 'relative',
  }
}))

export const TextGroup = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.375rem',
  [theme.breakpoints.down('sm')]: {
    gap: '0.375rem',
    position: 'absolute',
    top: '2.125rem',
    left: '0.875rem',
  }
}))

export const RightContent = styled('div')(({ theme }) => ({
  width: '43.5625rem',
  height: '37.9375rem',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    width: 'calc(100% - 20px)',
    height: '325px',
    position: 'absolute',
    top: '9.0625rem',
    left: '0.625rem',
  }
}))

export const BottomSection = styled('div')(({ theme }) => ({
  width: '35.3125rem',
  height: '15.6875rem',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    position: 'absolute',
    top: '29.8125rem',
    left: '0.875rem',
    width: '100%',
    height: 'auto',
  }
}))

export const MeetText = styled('p')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: '19.4375rem',
  fontFamily: 'PP Neue Montreal',
  fontSize: '1.125rem',
  fontWeight: 400,
  lineHeight: '1.35rem',
  textAlign: 'left',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  margin: 0,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.875rem',
    lineHeight: '1.05rem',
    textAlign: 'right',
    left: '13.75rem',
  }
}))

export const LineImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  top: '1.875rem',
  left: '19.4375rem',
  width: '3.6875rem',
  height: '5.125rem',
  [theme.breakpoints.down('sm')]: {
    top: '1.625rem',
    left: '13.75rem',
    width: '3.0625rem',
    height: '4.25rem',
  }
}))

export const LearnMoreGroup = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '2.875rem',
  left: '0px',
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    top: '5rem',
    left: '0px',
  }
}))

export const LearnMoreText = styled('span')(({ theme }) => ({
  fontFamily: 'PP Neue Montreal',
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: '1.2rem',
  textAlign: 'left',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.875rem',
    lineHeight: '1.05rem',
  }
}))

export const MisatoImage = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '17.1875rem',
  height: '10.8125rem',
  backgroundImage: 'url("/misato-gray.png")',
  backgroundSize: 'cover',
  transition: 'background-image 0.3s ease',
  '&:hover': {
    backgroundImage: 'url("/misato.png")',
  },
  [theme.breakpoints.down('sm')]: {
    top: '7rem',
    left: '0px',
    width: '14.625rem',
    height: '9.1875rem',
  }
}))

export const BoyImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '24.0625rem',
  height: '29.4375rem',
  [theme.breakpoints.down('sm')]: {
    position: 'absolute',
    width: '12.875rem',
    height: '15.75rem',
  }
}))

export const GirlImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  width: '24.0625rem',
  height: '29.4375rem',
  [theme.breakpoints.down('sm')]: {
    position: 'absolute',
    width: '12.875rem',
    height: '15.75rem',
  }
}))

export const FeaturesTitle = styled('div')(({ theme }) => ({
  width: '57.1875rem',
  height: '11.5rem',
  position: 'relative',
  margin: '5rem 0 0 5rem',
  [theme.breakpoints.down('sm')]: {
    width: 'auto',
    height: '4.5rem',
    margin: '2.0625rem',
  }
}))

export const TitleLine = styled('h2')<{ left?: string }>(({ theme, left = '0' }) => ({
  position: 'absolute',
  left,
  fontFamily: 'PP Neue Montreal',
  fontSize: '5.5rem',
  fontWeight: 700,
  lineHeight: '5.75rem',
  textAlign: 'left',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  color: '#FFFFFF',
  margin: 0,
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.25rem',
    lineHeight: '2.625rem',
  }
}))

export const FeaturesGrid = styled('div')(({ theme }) => ({
  width: '80.0625rem',
  margin: '3.9375rem 0 0 5rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gridTemplateRows: '19.875rem 16.5rem',
  gap: '1.5625rem',
  '& > *': {
    width: '25.625rem',
  },
  '& > *:nth-of-type(1), & > *:nth-of-type(2), & > *:nth-of-type(3)': {
    gridColumn: 'span 2',
  },
  '& > *:nth-of-type(4)': {
    gridColumn: '1 / span 3',
    width: '39.25rem',
  },
  '& > *:nth-of-type(5)': {
    gridColumn: '4 / span 3',
    width: '39.25rem',
  },
  [theme.breakpoints.down('sm')]: {
    width: 'auto',
    margin: '2rem 1rem 0 1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    '& > *': {
      width: '100% !important',
      height: 'auto !important',
    }
  }
}))

export const FeatureCard = styled('div')(({ theme }) => ({
  border: '1px solid rgba(255, 255, 255, 0.17)',
  padding: '1rem 0.5rem 1rem 1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  [theme.breakpoints.down('sm')]: {
    padding: '0.875rem',
    gap: '1.5rem',
  }
}))

export const FeatureIcon = styled('img')(({ theme }) => ({
  width: '6rem',
  height: '6rem',
  [theme.breakpoints.down('sm')]: {
    width: '5.25rem',
    height: '5.25rem',
  }
}))

export const FeatureContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  flex: 1,
  [theme.breakpoints.down('sm')]: {
    gap: '0.875rem',
  }
}))

export const FeatureCardTitle = styled('h3')(({ theme }) => ({
  fontFamily: 'PP Neue Montreal',
  fontSize: '1.625rem',
  fontWeight: 500,
  lineHeight: '1.9375rem',
  textAlign: 'left',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  color: '#FFFFFF',
  margin: 0,
  marginRight: '1.5rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
    lineHeight: '1.8rem',
  }
}))

export const FeatureCardText = styled('p')(({ theme }) => ({
  fontFamily: 'PP Neue Montreal',
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: '1.2rem',
  textAlign: 'left',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  color: 'rgba(255, 255, 255, 0.6)',
  margin: 0,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.875rem',
    lineHeight: '1.05rem',
  }
}))

export const FooterContent = styled('div')(({ theme }) => ({
  width: '44.25rem',
  height: '9rem',
  borderRadius: '1rem',
  background: '#CDF138',
  margin: '2.875rem auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    width: 'calc(100% - 3rem)', // 100%宽度减去左右各24px的间距
    height: '10.25rem',
    margin: '3rem 1.5rem',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1.5rem',
  }
}))

export const FooterLeft = styled('div')(({ theme }) => ({
  height: '6rem',
  marginLeft: '2.5rem',
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    height: 'auto',
    gap: '1rem',
  }
}))

export const FooterLogo = styled('img')(({ theme }) => ({
  width: '5rem',
  height: '6rem',
  [theme.breakpoints.down('sm')]: {
    width: '3.3rem',
    height: '3.875rem',
  }
}))

export const FooterTitle = styled('h2')(({ theme }) => ({
  fontFamily: 'PP Neue Montreal',
  fontSize: '3rem',
  fontWeight: 700,
  lineHeight: '3rem',
  textAlign: 'left',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  color: '#000000',
  margin: 0,
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
    lineHeight: '2rem',
  }
}))

export const FooterRight = styled('div')(({ theme }) => ({
  height: '2rem',
  marginRight: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  [theme.breakpoints.down('sm')]: {
    marginRight: 0,
    height: 'auto',
    gap: '1rem',
  }
}))

export const FooterButton = styled('button')({
  height: '2rem',
  padding: '0.375rem',
  gap: '0.25rem',
  border: '1px solid rgba(0, 0, 0, 0.2)',
  background: 'transparent',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  '&:hover': {
    background: 'rgba(0, 0, 0, 0.05)',
  },
})

export const FooterButtonIcon = styled('img')({
  width: '1.25rem',
  height: '1.25rem',
})

export const FooterButtonText = styled('span')({
  fontFamily: 'PP Neue Montreal',
  fontSize: '1rem',
  fontWeight: 500,
  lineHeight: '1.2rem',
  textAlign: 'left',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  color: '#000000',
})

export const AgentsTitle = styled('h2')(({ theme }) => ({
  fontFamily: 'PP Neue Montreal',
  fontSize: '5.5rem',
  fontWeight: 500,
  lineHeight: '6.6rem',
  textAlign: 'left',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  margin: 0,
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.25rem',
    lineHeight: '2.625rem',
  }
}))

export const AgentsDescription = styled('p')(({ theme }) => ({
  fontFamily: 'PP Neue Montreal',
  fontSize: '1.25rem',
  fontWeight: 400,
  lineHeight: '1.5rem',
  textAlign: 'left',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  margin: 0,
  width: '90%',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    lineHeight: '1.2rem',
  }
}))
