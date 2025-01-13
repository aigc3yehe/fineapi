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
  width: '100%',
  minWidth: '1440px',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    minWidth: '100%',
  }
}))

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  width: '100%',
  height: '90px',
  background: '#FAF9F6',
  boxShadow: 'none',
  borderBottom: '1px solid #000000',
  display: 'flex',
  justifyContent: 'center',
  paddingLeft: 0,
  [theme.breakpoints.down('sm')]: {
    height: '54px',
  }
}))

export const AppBarToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

export const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '9px',
  marginLeft: '16px',
  height: '90px',
  [theme.breakpoints.down('sm')]: {
    height: '54px',
    marginLeft: '0px',
    gap: '4px',
    '& img:first-of-type': {
      width: '22px',
      height: '20px',
    },
    '& img:last-of-type': {
      width: '84px',
      height: '15.5px',
    },
  }
}))

export const SocialButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '23px',
  marginRight: '16px',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    gap: '12px',
    marginRight: '0px',
  }
}))

export const SocialIconButton = styled(IconButton)(({ theme }) => ({
  width: '56px',
  height: '56px',
  borderRadius: '8px',
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
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  }
}))

export const SectionOne = styled(ContentContainer)(({ theme }) => ({
  height: '989px',
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    paddingBottom: '16px',
  }
}))

export const SectionTwo = styled(ContentContainer)(({ theme }) => ( {
  height: '617px',
  [theme.breakpoints.down('sm')]: {
    height: 'auto'
  }
}))

export const SectionThree = styled(ContentContainer)(({ theme }) => ({
  height: '745px',
  [theme.breakpoints.down('sm')]: {
    height: '745px',
    paddingBottom: '16px',
  }
}))

export const SectionFour = styled(ContentContainer)(({ theme }) => ({
  height: '1013px',
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    paddingBottom: '16px',
  }
}))

export const Footer = styled(ContentContainer)(({ theme }) => ({
  height: '235px',
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    paddingBottom: '16px',
  }
}))

export const SectionOneContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '33px',
  gap: '26px',
  [theme.breakpoints.down('sm')]: {
    marginTop: '21px',
    gap: '2.28px',
  }
}))

export const BuildButton = styled(Button)(({ theme }) => ({
  width: '304px',
  height: '52px',
  padding: 0,
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
  },
  [theme.breakpoints.down('sm')]: {
    width: '204px',
    height: '27px',
    padding: 0,
    fontSize: '16px',
    lineHeight: '19.2px',
    border: '0.3px solid rgba(0, 0, 0, 0.14)',
    borderRadius: '14px',
    marginBottom: '14px',
  }
}))

export const SectionContent = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
})

export const HeadlineContainer = styled('div')<{ gap?: string }>(
  ({ gap = '21px', theme }) => ({
    display: 'flex',
    alignItems: 'center',
    height: '88px',
    gap: gap,
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      justifyContent: 'center',
      gap: '8px',
    }
  })
)

export const HeadlineText = styled('h1')(({ theme }) => ({
  fontFamily: 'PP Neue Montreal',
  fontSize: '74px',
  fontWeight: 500,
  lineHeight: '87.19px',
  textAlign: 'center',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  textTransform: 'uppercase',
  margin: 0,
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
    lineHeight: '24.85px',
    textAlign: 'center',
  }
}))

export const CircleIcon = styled('img')(({ theme }) => ({
  width: '68px',
  height: '68px',
  animation: `${rotate} 450ms ease-out infinite`,
  [theme.breakpoints.down('sm')]: {
    width: '19.2px',
    height: '19.2px',
  }
}))

export const IconGroup = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
  [theme.breakpoints.down('sm')]: {
    gap: '4.85px',
    '& img': {
      width: '21.09px !important',
      height: '21.09px !important',
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
  width: '67px',
  height: '63px',
  [theme.breakpoints.down('sm')]: {
    width: '19px !important',
    height: '18px !important',
  }
}))

export const AnimatedHeartBackgroundIcon = styled('img')(({ theme }) => ({
  position: 'absolute',
  width: '67px',
  height: '63px',
  top: 0,
  left: 0,
  zIndex: 1,
  [theme.breakpoints.down('sm')]: {
    width: '19px !important',
    height: '18px !important',
  }
}))

export const AnimatedHeartIcon = styled('img')<{ times: number }>(({ times=400, theme }) => ({
  position: 'absolute',
  width: '67px',
  height: '63px',
  top: 0,
  left: 0,
  animation: `${fadeInOut} ${times}ms ease-out infinite`,
  [theme.breakpoints.down('sm')]: {
    width: '19px !important',
    height: '18px !important',
  }
}))

export const AnimatedHeartOutInIcon = styled('img')<{ times: number }>(({ times=400, theme }) => ({
  position: 'absolute',
  width: '67px',
  height: '63px',
  top: 0,
  left: 0,
  animation: `${fadeOutIn} ${times}ms ease-out infinite`,
  [theme.breakpoints.down('sm')]: {
    width: '19px !important',
    height: '18px !important',
  }
}))

export const HeartIcon = styled('img')(({ theme }) => ({
  width: '67px',
  height: '63px',
  [theme.breakpoints.down('sm')]: {
    width: '19px !important',
    height: '18px !important',
  }
}))

export const RightIcon = styled('img')(({ theme }) => ({
  width: '173px',
  height: '68px',
  animation: `${slideRight} 800ms ease-out infinite`,
  position: 'absolute',
  left: 0,
  [theme.breakpoints.down('sm')]: {
    width: '49px !important',
    height: '18px !important',
  }
}))

export const RightIconContainer = styled('div')(({ theme }) => ({
  width: '173px',
  height: '68px',
  overflow: 'hidden',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    width: '49px !important',
    height: '18px !important',
    '& img': {
      width: '49px !important',
      height: '18px !important',
    }
  }
}))

export const HeartContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '63px',
  gap: '28px',
  [theme.breakpoints.down('sm')]: {
    gap: '8px',
    height: '25px'
  }
}))

export const EyesIcon = styled('img')({
  width: '74px',
  height: '74px',
})

export const MovieIcon = styled('img')(({ theme }) => ({
  width: '71px',
  height: '68px',
  [theme.breakpoints.down('sm')]: {
    width: '20.03px !important',
    height: '19.2px !important',
  }
}))

export const MiIcon = styled('img')(({ theme }) => ({
  width: '75px',
  height: '75px',
  animation: `${mi_rotate} 600ms ease-out infinite`,
  [theme.breakpoints.down('sm')]: {
    width: '21.38px !important',
    height: '21.38px !important',
  }
}))

export const SmileIcon = styled('img')(({ theme }) => ({
  width: '68px',
  height: '68px',
  [theme.breakpoints.down('sm')]: {
    width: '19.19px !important',
    height: '19.19px !important',
  }
}))

export const ImageShowcase = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '1240px',
  height: '410px',
  marginTop: '55px',
  marginLeft: '100px',
  opacity: 1,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: '120px',
    marginTop: '16px',
    marginLeft: '18px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}))

export const ShowcaseImage = styled('img')<{ centerX: number; centerY: number, times: number, transform: string }>(
  ({ centerX, centerY, times, transform, theme }) => ({
    position: 'absolute',
    left: `${centerX}px`,
    top: `${centerY}px`,
    transform: 'translate(-50%, -50%)',  // 基础定位
    transition: `transform ${times}ms ease-out`,
    transformOrigin: 'center center',    // 修改旋转中心点
    '&:hover': {
      transform: `translate(-50%, -50%) ${transform}`,  // 组合transform效果
    },
    [theme.breakpoints.down('sm')]: {
      left: `${centerX*0.297}px`,
      top: `${centerY*0.297}px`,
    } 
  })
)

export const YellowPanel = styled('div')(({ theme }) => ({
  width: '1280px',
  height: '481px',
  borderRadius: '16px',
  position: 'relative',
  margin: '68px auto',
  background: '#FAF9F6',
  [theme.breakpoints.down('sm')]: {
    width:'361px',
    height:'452px', 
    margin: '16px',
    position: 'relative',
    display: 'flex',
    overflow: 'hidden',
  }
}))

export const BackgroundImage = styled('img')(({ theme }) => ({
  width: '1280px',
  height: '481px',
  position: 'absolute',
  top: 0,
  left: 0,
  borderRadius: '16px',
  [theme.breakpoints.down('sm')]: {
    width:'361px',
    height:'452px', 
    borderRadius: '8px',
  }
}))

export const PurpleUnion = styled('img')(({ theme }) => ({
  position: 'absolute',
  width: '208px',
  height: '208px',
  top: '48px',
  right: '48px',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  }
}))

export const TextContainer = styled('div')(({ theme }) => ( {
  position: 'absolute',
  top: '48px',
  left: '48px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  [theme.breakpoints.down('sm')]: {
    top: '24px',
    left: '14px',
    gap: '8px',
    width: '320px',
  }
}))

export const CoreTitle = styled('h2')(({ theme }) => ({
  fontFamily: 'PP Neue Montreal',
  fontSize: '88px',
  fontWeight: 500,
  lineHeight: '92px',
  textAlign: 'left',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  color: '#000000',
  margin: 0,
  [theme.breakpoints.down('sm')]: {
    fontSize: '36px',
    lineHeight: '43.2px',
  }
}))

export const SubTitle = styled('p')(({ theme }) => ({ 
  fontFamily: 'PP Neue Montreal',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '19.2px',
  textAlign: 'left',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  color: '#000000',
  margin: 0,
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    lineHeight: '19.2px',
  }
}))

export const FeatureList = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '231px',
  left: '48px',
  width: '931px',
  display: 'flex',
  flexDirection: 'column',
  gap: '18px',
  [theme.breakpoints.down('sm')]: {
    top: '164px',
    left: '14px',
    width: '332px',
    gap: '12px',
  }
}))

export const FeatureItem = styled('div')(({ theme }) => ({
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
    flexShrink: 0,  // 防止圆点被压缩
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    lineHeight: '19.2px',
    '&::before': {
      marginTop: '7px',  // 微调移动端下圆点的垂直位置
      width: '3px',  // 稍微调小圆点尺寸
      height: '3px',
    }
  }
}))

export const SectionThreeContent = styled('div')(({ theme }) => ({
  padding: '60px 80px',
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: '0px 0px',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  }
}))

export const LeftContent = styled('div')(({ theme }) => ({
  width: '583px',
  height: '523px',
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
  gap: '6px',
  [theme.breakpoints.down('sm')]: {
    gap: '6px',
    position: 'absolute',
    top: '34px',
    left: '14px',
  }
}))

export const RightContent = styled('div')(({ theme }) => ({
  width: '697px',
  height: '607px',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    width: 'calc(100% - 20px)',
    height: '325px',
    position: 'absolute',
    top: '145px',
    left: '10px',
  }
}))

export const BottomSection = styled('div')(({ theme }) => ({
  width: '565px',
  height: '251px',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    position: 'absolute',
    top: '477px',
    left: '14px',
    width: '100%',
    height: 'auto',
  }
}))

export const MeetText = styled('p')(({ theme }) => ({
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
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    lineHeight: '16.8px',
    textAlign: 'right',
    left: '220px',
  }
}))

export const LineImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  top: '30px',
  left: '311px',
  width: '59px',
  height: '82px',
  [theme.breakpoints.down('sm')]: {
    top: '26px',
    left: '220px',
    width: '49px',
    height: '68px',
  }
}))

export const LearnMoreGroup = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '46px',
  left: '0px',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  cursor: 'pointer',
  [theme.breakpoints.down('sm')]: {
    top: '80px',
    left: '0px',
  }
}))

export const LearnMoreText = styled('span')(({ theme }) => ({
  fontFamily: 'PP Neue Montreal',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '19.2px',
  textAlign: 'left',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    lineHeight: '16.8px',
  }
}))

export const MisatoImage = styled('div')(({ theme }) => ({
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
  [theme.breakpoints.down('sm')]: {
    top: '110px',
    left: '0px',
    width: '234px',
    height: '147px',
  }
}))

export const BoyImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '385px',
  height: '471px',
  [theme.breakpoints.down('sm')]: {
    position: 'absolute',
    width: '206px',
    height: '252px',
  }
}))

export const GirlImage = styled('img')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  width: '385px',
  height: '471px',
  [theme.breakpoints.down('sm')]: {
    position: 'absolute',
    width: '206px',
    height: '252px',
  }
}))

export const FeaturesTitle = styled('div')({
  width: '915px',
  height: '184px',
  position: 'relative',
  margin: '80px 0 0 80px',
})

export const TitleLine = styled('h2')<{ left?: string }>(({ left = '0' }) => ({
  position: 'absolute',
  left,
  fontFamily: 'PP Neue Montreal',
  fontSize: '88px',
  fontWeight: 700,
  lineHeight: '92px',
  textAlign: 'left',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  color: '#FFFFFF',
  margin: 0,
}))

export const FeaturesGrid = styled('div')({
  width: '1281px',
  margin: '63px 0 0 80px',
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',  // 将列分成6份，便于精确控制
  gridTemplateRows: '318px 264px',
  gap: '25px',
  '& > *': {
    width: '410px',  // 前三个卡片的宽度
  },
  '& > *:nth-of-type(1), & > *:nth-of-type(2), & > *:nth-of-type(3)': {
    gridColumn: 'span 2',  // 前三个卡片各占2列
  },
  '& > *:nth-of-type(4)': {
    gridColumn: '1 / span 3',  // 第4个卡片从第1列开始，跨越3列
    width: '628px',
  },
  '& > *:nth-of-type(5)': {
    gridColumn: '4 / span 3',  // 第5个卡片从第4列开始，跨越3列
    width: '628px',
  },
})

export const FeatureCard = styled('div')({
  border: '1px solid rgba(255, 255, 255, 0.17)',
  padding: '16px 8px 16px 16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
})

export const FeatureIcon = styled('img')({
  width: '96px',
  height: '96px',
})

export const FeatureContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  flex: 1,
})

export const FeatureCardTitle = styled('h3')({
  fontFamily: 'PP Neue Montreal',
  fontSize: '26px',
  fontWeight: 500,
  lineHeight: '31.2px',
  textAlign: 'left',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  color: '#FFFFFF',
  margin: 0,
  marginRight: '24px',
})

export const FeatureCardText = styled('p')({
  fontFamily: 'PP Neue Montreal',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '19.2px',
  textAlign: 'left',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  color: 'rgba(255, 255, 255, 0.6)',
  margin: 0,
})

export const FooterContent = styled('div')({
  width: '708px',
  height: '144px',
  borderRadius: '16px',
  background: '#CDF138',
  margin: '46px auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const FooterLeft = styled('div')({
  height: '96px',
  marginLeft: '40px',
  display: 'flex',
  alignItems: 'center',
  gap: '24px',
})

export const FooterLogo = styled('img')({
  width: '80px',
  height: '96px',
})

export const FooterTitle = styled('h2')({
  fontFamily: 'PP Neue Montreal',
  fontSize: '48px',
  fontWeight: 700,
  lineHeight: '48px',
  textAlign: 'left',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  color: '#000000',
  margin: 0,
})

export const FooterRight = styled('div')({
  height: '32px',
  marginRight: '24px',
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
})

export const FooterButton = styled('button')({
  height: '32px',
  padding: '6px',
  gap: '4px',
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
  width: '20px',
  height: '20px',
})

export const FooterButtonText = styled('span')({
  fontFamily: 'PP Neue Montreal',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '19.2px',
  textAlign: 'left',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  color: '#000000',
})

export const AgentsTitle = styled('h2')(({ theme }) => ({
  fontFamily: 'PP Neue Montreal',
  fontSize: '88px',
  fontWeight: 500,
  lineHeight: '105.6px',
  textAlign: 'left',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  margin: 0,
  [theme.breakpoints.down('sm')]: {
    fontSize: '36px',
    lineHeight: '43.2px',
  }
}))

export const AgentsDescription = styled('p')(({ theme }) => ({
  fontFamily: 'PP Neue Montreal',
  fontSize: '20px',
  fontWeight: 400,
  lineHeight: '24px',
  textAlign: 'left',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  margin: 0,
  width: '90%',
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    lineHeight: '19.2px',
  }
}))
