import { AppBar, Box, Toolbar, IconButton } from '@mui/material'
import Union from './assets/Union.svg'
import AIGC_DAO from './assets/AIGC_DAO.svg'
import XIcon from './assets/x.svg'
import DiscordIcon from './assets/discord.svg'
import EyesIcon from '/eyes.png'
import {
  MainLayout,
  ContentSection,
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  Footer,
  SectionOneContent,
  BuildButton,
  HeadlineContainer,
  HeadlineText,
  CircleIcon,
  IconGroup,
  RightIcon,
  HeartContainer,
  MovieIcon,
  MiIcon,
  SmileIcon,
  ImageShowcase,
  ShowcaseImage,
  HeartIconContainer,
  AnimatedHeartIcon,
  AnimatedHeartBackgroundIcon,
  AnimatedHeartOutInIcon,
  RightIconContainer
} from './styles/layouts'
import CircleSvg from './assets/circle.svg'
import RightArrow from './assets/right.svg'
import GHeart from './assets/gheart.svg'
import PHeart from './assets/pheart.svg'
import WHeart from './assets/wheart.svg'
import MovieSvg from './assets/movie.svg'
import MiSvg from './assets/mi.svg'
import SmileSvg from './assets/smile.svg'

function App() {
  return (
    <MainLayout>
      <AppBar 
        position="static" 
        sx={{
          width: '100%',
          height: '90px',
          background: '#FAF9F6',
          boxShadow: 'none',
          borderBottom: '1px solid #000000',
          display: 'flex',
          justifyContent: 'center',
          pl: 0
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box 
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '9px',
              ml: '16px',
              height: '90px'
            }}
          >
            <img src={Union} alt="Union" style={{ width: '40px', height: '36px' }} />
            <img src={AIGC_DAO} alt="AIGC DAO" style={{ width: '151px', height: '28px' }} />
          </Box>

          <Box
            sx={{
              display: 'flex',
              gap: '23px',
              mr: '16px',
              alignItems: 'center'
            }}
          >
            <IconButton
              sx={{
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
                }
              }}
            >
              <img src={XIcon} alt="X" style={{ width: '24px', height: '24px' }} />
            </IconButton>

            <IconButton
              sx={{
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
                }
              }}
            >
              <img src={DiscordIcon} alt="Discord" style={{ width: '24px', height: '24px' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <ContentSection>
        <SectionOne>
          <SectionOneContent>
            <BuildButton>
              build on daos world
            </BuildButton>
            <HeadlineContainer>
              <HeadlineText>
                The first decentralized AIGC
              </HeadlineText>
              <CircleIcon src={CircleSvg} alt="circle" />
            </HeadlineContainer>
            <HeadlineContainer gap='10px'>
              <HeadlineText>
                framework
              </HeadlineText>
              <IconGroup>
                <img src={EyesIcon} alt="eyes" style={{ width: '74px', height: '74px' }} />
                <RightIconContainer>
                  <RightIcon src={RightArrow} alt="right arrow" />
                </RightIconContainer>
              </IconGroup>
              <HeadlineText>
                DAO co-led
              </HeadlineText>
            </HeadlineContainer>
            <HeartContainer>
              <HeartIconContainer>
                <AnimatedHeartBackgroundIcon src={WHeart} alt="purple white heart" />
                <AnimatedHeartIcon src={PHeart} alt="purple white heart" times={600} />
              </HeartIconContainer>
              <HeartIconContainer>
                <AnimatedHeartBackgroundIcon src={WHeart} alt="green white heart" />
                <AnimatedHeartOutInIcon src={GHeart} alt="green white heart" times={600} />
              </HeartIconContainer>
              <HeadlineText>
                by AI, onchain
              </HeadlineText>
              <MovieIcon src={MovieSvg} alt="movie" />
            </HeartContainer>
            <HeartContainer>
              <HeadlineText>
               agents and humans
              </HeadlineText>
              <MiIcon src={MiSvg} alt="mi" />
              <SmileIcon src={SmileSvg} alt="smile" />
            </HeartContainer>
            <ImageShowcase>
              <ShowcaseImage 
                src="/show/image1.png" 
                alt="showcase 1"
                centerX={160}
                centerY={217}
                style={{ 
                  width: '286px', 
                  height: '338px'
                }}
                times={200}
                transform="rotate(14.45deg)"
              />
              <ShowcaseImage 
                src="/show/image2.png" 
                alt="showcase 2"
                centerX={387}
                centerY={200}
                style={{ width: '316px', height: '407px' }}
                times={300}
                transform="rotate(-12.44deg)"
              />
              <ShowcaseImage 
                src="/show/image3.png" 
                alt="showcase 3"
                centerX={637}
                centerY={216}
                style={{ width: '301px', height: '397px' }}
                times={300}
                transform="rotate(8.73deg)"
              />
              <ShowcaseImage 
                src="/show/image4.png" 
                alt="showcase 4"
                centerX={839}
                centerY={207}
                style={{ width: '272px', height: '331px' }}
                times={300}
                transform="rotate(-6.14deg)"
              />
              <ShowcaseImage 
                src="/show/image5.png" 
                alt="showcase 5"
                centerX={1072}
                centerY={207}
                style={{ width: '302px', height: '374px' }}
                times={300}
                transform="rotate(-9.09deg)"
              />
            </ImageShowcase>
            {/* 后续的其他元素将在这里添加 */}
          </SectionOneContent>
        </SectionOne>
      </ContentSection>

      <ContentSection bgColor="#000000">
        <SectionTwo>
          {/* 第二个模块的内容 */}
        </SectionTwo>
      </ContentSection>

      <ContentSection>
        <SectionThree>
          {/* 第三个模块的内容 */}
        </SectionThree>
      </ContentSection>

      <ContentSection bgColor="#1D1D1B">
        <SectionFour>
          {/* 第四个模块的内容 */}
        </SectionFour>
      </ContentSection>

      <ContentSection bgColor="#1D1D1B">
        <Footer>
          {/* 页脚内容 */}
        </Footer>
      </ContentSection>
    </MainLayout>
  )
}

export default App
