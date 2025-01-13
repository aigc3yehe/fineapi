import { Button } from '@mui/material'
import { styled, keyframes } from '@mui/material/styles'

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

export const MainLayout = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minWidth: '1440px',
  overflow: 'hidden',
})

export const ContentSection = styled('section')<{ bgColor?: string }>(
  ({ bgColor = '#FAF9F6' }) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    background: bgColor,
  })
)

export const ContentContainer = styled('div')({
  width: '1440px',
  display: 'flex',
  flexDirection: 'column',
})

export const SectionOne = styled(ContentContainer)({
  height: '989px',
})

export const SectionTwo = styled(ContentContainer)({
  height: '617px',
})

export const SectionThree = styled(ContentContainer)({
  height: '745px',
})

export const SectionFour = styled(ContentContainer)({
  height: '1013px',
})

export const Footer = styled(ContentContainer)({
  height: '235px',
})

export const SectionOneContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '33px',
  gap: '26px',
})

export const BuildButton = styled(Button)({
  width: '304px',
  height: '52px',
  padding: '14px 20px',
  gap: '10px',
  borderRadius: '52px',
  border: '1px solid rgba(0, 0, 0, 0.14)',
  background: 'transparent',
  fontFamily: 'PP Neue Montreal, sans-serif',
  fontSize: '20px',
  fontWeight: 500,
  lineHeight: '24px',
  textAlign: 'center',
  color: '#000000',
  textTransform: 'none',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  '&:hover': {
    background: 'transparent',
  }
})

export const SectionContent = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
})

export const HeadlineContainer = styled('div')<{ gap?: string }>(
  ({ gap = '21px' }) => ({
    display: 'flex',
    alignItems: 'center',
    height: '88px',
    gap: gap,
  })
)

export const HeadlineText = styled('h1')({
  fontFamily: 'PP Neue Montreal',
  fontSize: '74px',
  fontWeight: 500,
  lineHeight: '87.19px',
  textAlign: 'center',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  textTransform: 'uppercase',
})

export const CircleIcon = styled('img')({
  width: '68px',
  height: '68px',
  animation: `${rotate} 450ms ease-out infinite`,
})

export const IconGroup = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '14px',  // 可以根据实际需求调整间距
})

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

export const HeartIconContainer = styled('div')({
  position: 'relative',
  width: '67px',
  height: '63px',
})

export const AnimatedHeartBackgroundIcon = styled('img')({
  position: 'absolute',
  width: '67px',
  height: '63px',
  top: 0,
  left: 0,
  zIndex: 1,
})

export const AnimatedHeartIcon = styled('img')<{ times: number }>(({ times=400 }) => ({
  position: 'absolute',
  width: '67px',
  height: '63px',
  top: 0,
  left: 0,
  animation: `${fadeInOut} ${times}ms ease-out infinite`,
}))

export const AnimatedHeartOutInIcon = styled('img')<{ times: number }>(({ times=400 }) => ({
  position: 'absolute',
  width: '67px',
  height: '63px',
  top: 0,
  left: 0,
  animation: `${fadeOutIn} ${times}ms ease-out infinite`,
}))

export const HeartIcon = styled('img')({
  width: '67px',
  height: '63px',
})

export const RightIcon = styled('img')({
  width: '173px',
  height: '68px',
  animation: `${slideRight} 800ms ease-out infinite`,
  position: 'absolute',
  left: 0,
})

export const RightIconContainer = styled('div')({
  width: '173px',
  height: '68px',
  overflow: 'hidden',
  position: 'relative',
})

export const HeartContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  height: '63px',
  gap: '28px',
})

export const EyesIcon = styled('img')({
  width: '74px',
  height: '74px',
})

export const MovieIcon = styled('img')({
  width: '71px',
  height: '68px',
})

export const MiIcon = styled('img')({
  width: '75px',
  height: '75px',
  animation: `${mi_rotate} 600ms ease-out infinite`,
})

export const SmileIcon = styled('img')({
  width: '68px',
  height: '68px',
})

export const ImageShowcase = styled('div')({
  position: 'relative',
  width: '1240px',
  height: '410px',
  marginTop: '55px',
  marginLeft: '100px',
  opacity: 1,
})

export const ShowcaseImage = styled('img')<{ centerX: number; centerY: number, times: number, transform: string }>(
  ({ centerX, centerY, times, transform }) => ({
    position: 'absolute',
    left: `${centerX}px`,
    top: `${centerY}px`,
    transform: 'translate(-50%, -50%)',  // 基础定位
    transition: `transform ${times}ms ease-out`,
    transformOrigin: 'center center',    // 修改旋转中心点
    '&:hover': {
      transform: `translate(-50%, -50%) ${transform}`,  // 组合transform效果
    }
  })
)

export const YellowPanel = styled('div')({
  width: '1280px',
  height: '481px',
  borderRadius: '16px',
  position: 'relative',
  margin: '68px auto',
  background: '#FAF9F6',
})

export const BackgroundImage = styled('img')({
  width: '1280px',
  height: '481px',
  position: 'absolute',
  top: 0,
  left: 0,
  borderRadius: '16px',
})

export const PurpleUnion = styled('img')({
  position: 'absolute',
  width: '208px',
  height: '208px',
  top: '48px',
  right: '48px',
})

export const TextContainer = styled('div')({
  position: 'absolute',
  top: '48px',
  left: '48px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
})

export const CoreTitle = styled('h2')({
  fontFamily: 'PP Neue Montreal',
  fontSize: '88px',
  fontWeight: 500,
  lineHeight: '92px',
  textAlign: 'left',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  color: '#000000',
  margin: 0,
})

export const SubTitle = styled('p')({
  fontFamily: 'PP Neue Montreal',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '19.2px',
  textAlign: 'left',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  color: '#000000',
  margin: 0,
})

export const FeatureList = styled('div')({
  position: 'absolute',
  top: '231px',
  left: '48px',
  width: '931px',
  display: 'flex',
  flexDirection: 'column',
  gap: '18px',
})

export const FeatureItem = styled('div')({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '8px',
  fontFamily: 'PP Neue Montreal',
  fontSize: '18px',
  fontWeight: 400,
  lineHeight: '21.6px',
  textAlign: 'left',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  color: '#000000',
  '&::before': {
    content: '""',
    width: '4px',
    height: '4px',
    backgroundColor: '#000000',
    marginTop: '8px',  // 调整圆点的垂直位置，使其与文本对齐
  }
})

export const SectionThreeContent = styled('div')({
  padding: '60px 80px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const LeftContent = styled('div')({
  width: '583px',
  height: '523px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const TextGroup = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
})

export const AgentsTitle = styled('h2')({
  fontFamily: 'PP Neue Montreal',
  fontSize: '88px',
  fontWeight: 500,
  lineHeight: '105.6px',
  textAlign: 'left',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  margin: 0,
})

export const AgentsDescription = styled('p')({
  fontFamily: 'PP Neue Montreal',
  fontSize: '20px',
  fontWeight: 400,
  lineHeight: '24px',
  textAlign: 'left',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  margin: 0,
  width: '550px',
})

export const BottomSection = styled('div')({
  width: '565px',
  height: '251px',
  position: 'relative',
})

export const MeetText = styled('p')({
  position: 'absolute',
  top: 0,
  left: '311px',
  fontFamily: 'PP Neue Montreal',
  fontSize: '18px',
  fontWeight: 400,
  lineHeight: '21.6px',
  textAlign: 'left',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  margin: 0,
})

export const LineImage = styled('img')({
  position: 'absolute',
  top: '30px',
  left: '311px',
  width: '59px',
  height: '82px',
})

export const LearnMoreGroup = styled('div')({
  position: 'absolute',
  bottom: '24px',
  left: '311px',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  cursor: 'pointer',
})

export const LearnMoreText = styled('span')({
  fontFamily: 'PP Neue Montreal',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '19.2px',
  textAlign: 'left',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
})

export const MisatoImage = styled('div')({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '275px',
  height: '173px',
  backgroundImage: 'url("/misato-gray.png")',
  backgroundSize: 'cover',
  transition: 'background-image 0.3s ease',
  '&:hover': {
    backgroundImage: 'url("/misato.png")',
  },
})

export const RightContent = styled('div')({
  width: '697px',
  height: '607px',
  position: 'relative',
})

export const BoyImage = styled('img')({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '385px',
  height: '471px',
})

export const GirlImage = styled('img')({
  position: 'absolute',
  top: 0,
  right: 0,
  width: '385px',
  height: '471px',
})
