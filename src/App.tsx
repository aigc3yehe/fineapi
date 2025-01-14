import Union from './assets/Union.svg'
import AIGC_DAO from './assets/AIGC_DAO.svg'
import XIcon from './assets/x.svg'
import DiscordIcon from './assets/discord.svg'
import EyesIcon from '/eyes.png'
import Features1 from './assets/features1.svg'
import Features2 from './assets/features2.svg'
import Features3 from './assets/features3.svg'
import Features4 from './assets/features4.svg'
import Features5 from './assets/features5.svg'
import Logo from './assets/logo.svg'
import SmallX from './assets/small_x.svg'
import SmallDiscord from './assets/small_discord.svg'

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
  RightIconContainer,
  YellowPanel,
  BackgroundImage,
  PurpleUnion,
  TextContainer,
  CoreTitle,
  SubTitle,
  FeatureList,
  FeatureItem,
  SectionThreeContent,
  LeftContent,
  TextGroup,
  AgentsTitle,
  AgentsDescription,
  BottomSection,
  MeetText,
  LineImage,
  LearnMoreGroup,
  LearnMoreText,
  MisatoImage,
  RightContent,
  BoyImage,
  GirlImage,
  FeaturesTitle,
  TitleLine,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureContent,
  FeatureCardTitle,
  FeatureCardText,
  FooterContent,
  FooterLeft,
  FooterLogo,
  FooterTitle,
  FooterRight,
  FooterButton,
  FooterButtonIcon,
  FooterButtonText,
  StyledAppBar,
  AppBarToolbar,
  LogoContainer,
  SocialButtonsContainer,
  SocialIconButton
} from './styles/layouts'
import CircleSvg from './assets/circle.svg'
import RightArrow from './assets/right.svg'
import GHeart from './assets/gheart.svg'
import PHeart from './assets/pheart.svg'
import WHeart from './assets/wheart.svg'
import MovieSvg from './assets/movie.svg'
import MiSvg from './assets/mi.svg'
import SmileSvg from './assets/smile.svg'
import GreenBackground from './assets/green_background.svg'
import MobileGreenBackground from './assets/mobile_green_background.svg'
import PurpleUnionIcon from './assets/purple_union.svg'
import LineLine from './assets/lineline.svg'
import ArrowRight from './assets/arrow-right.svg'
import { useMediaQuery } from '@mui/material'
import { theme } from './theme'

function App() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const scale = isMobile ? 0.297 : 1;
  return (
    <MainLayout>
      <StyledAppBar position="static">
        <AppBarToolbar>
          <LogoContainer>
            <img src={Union} alt="Union" />
            <img src={AIGC_DAO} alt="AIGC DAO" />
          </LogoContainer>

          <SocialButtonsContainer>
            <SocialIconButton
              onClick={() => window.open('https://x.com/the_AIGC_DAO', '_blank')}
            >
              <img src={XIcon} alt="X" />
            </SocialIconButton>

            <SocialIconButton sx={{ display: 'none' }}>
              <img src={DiscordIcon} alt="Discord" />
            </SocialIconButton>
          </SocialButtonsContainer>
        </AppBarToolbar>
      </StyledAppBar>

      <ContentSection>
        <SectionOne>
          <SectionOneContent>
            <BuildButton>
              BUILD ON DAOS WORLD
            </BuildButton>
            <HeadlineContainer>
              <HeadlineText>
                The first decentralized AIGC
              </HeadlineText>
              <CircleIcon src={CircleSvg} alt="circle" />
            </HeadlineContainer>
            <HeadlineContainer gap={isMobile ? '3px' : '10px'}>
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
                  width: `${286*scale}px`, 
                  height: `${338*scale}px`
                }}
                times={200}
                transform="rotate(14.45deg)"
              />
              <ShowcaseImage 
                src="/show/image2.png" 
                alt="showcase 2"
                centerX={387}
                centerY={200}
                style={{ 
                  width: `${316*scale}px`, 
                  height: `${407*scale}px`
                }}
                times={300}
                transform="rotate(-12.44deg)"
              />
              <ShowcaseImage 
                src="/show/image3.png" 
                alt="showcase 3"
                centerX={637}
                centerY={216}
                style={{ 
                  width: `${301*scale}px`, 
                  height: `${397*scale}px`
                }}
                times={300}
                transform="rotate(8.73deg)"
              />
              <ShowcaseImage 
                src="/show/image4.png" 
                alt="showcase 4"
                centerX={839}
                centerY={207}
                style={{ 
                  width: `${272*scale}px`, 
                  height: `${331*scale}px`
                }}
                times={300}
                transform="rotate(-6.14deg)"
              />
              <ShowcaseImage 
                src="/show/image5.png" 
                alt="showcase 5"
                centerX={1072}
                centerY={207}
                style={{ 
                  width: `${302*scale}px`, 
                  height: `${374*scale}px`
                }}
                times={300}
                transform="rotate(-9.09deg)"
              />
            </ImageShowcase>
          </SectionOneContent>
        </SectionOne>
      </ContentSection>

      <ContentSection bgColor="#000000">
        <SectionTwo>
          <YellowPanel>
            <BackgroundImage src={isMobile ? MobileGreenBackground : GreenBackground} alt="green background" />
            <PurpleUnion src={PurpleUnionIcon} alt="purple union" />
            
            <TextContainer>
              <CoreTitle>CORE PRODUCTS</CoreTitle>
              <SubTitle>
                Introducing innovative agent-driven AIGC solutions powered by an open-source framework designed for agents.
              </SubTitle>
            </TextContainer>

            <FeatureList>
              <FeatureItem>
                
                Content Generation: Supports the creation of images, text, and complex AI models+
              </FeatureItem>
              <FeatureItem>
                
                Model Fine-Tuning: With VAE-like technology, AIGC Framework lowers the barrier to fine-tuning, giving small teams capabilities comparable to large enterprises+
              </FeatureItem>
              <FeatureItem>
                
                Open-Source Toolchain: Available to community developers, fostering collaboration and innovation+
              </FeatureItem>
              <FeatureItem>
                
                Seamless Trading Integration: Generated content can be directly linked to the 7007 Protocol for on-chain transactions.
              </FeatureItem>
            </FeatureList>
          </YellowPanel>
        </SectionTwo>
      </ContentSection>

      <ContentSection>
        <SectionThree>
          <SectionThreeContent>
            <LeftContent>
              <TextGroup>
                <AgentsTitle>AIGC AGENTS</AgentsTitle>
                <AgentsDescription>
                  AIGC DAO isn't just a DAO for humans, it's also a creative accelerator built for AIGC agents!
                </AgentsDescription>
              </TextGroup>
              
              <BottomSection>
                <MeetText>Meet the AIGC Agents</MeetText>
                <LineImage src={LineLine} alt="line" />
                <MisatoImage />
                <LearnMoreGroup>
                  <LearnMoreText>LEARN MORE</LearnMoreText>
                  <img src={ArrowRight} alt="arrow right" style={{ width: '24px', height: '24px' }} />
                </LearnMoreGroup>
              </BottomSection>
            </LeftContent>

            <RightContent>
              <BoyImage src="/boy.png" alt="boy" />
              <GirlImage src="/girl.png" alt="girl" />
            </RightContent>
          </SectionThreeContent>
        </SectionThree>
      </ContentSection>

      <ContentSection bgColor="#1D1D1B">
        <SectionFour>
          <FeaturesTitle>
            <TitleLine>Features of</TitleLine>
            <TitleLine left={isMobile ? '131px' : '244px'} style={{ top: isMobile ? '46px' : '92px' }}>AIGCDAO</TitleLine>
          </FeaturesTitle>

          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon src={Features1} alt="Breaking Data Monopolies" />
              <FeatureContent>
                <FeatureCardTitle>Breaking Data Monopolies</FeatureCardTitle>
                <FeatureCardText>
                  AIGC DAO offers an open-source toolchain and VAE-like technology to lower the barriers to training AI models, enabling individual developers and small teams to compete.
                </FeatureCardText>
              </FeatureContent>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon src={Features2} alt="Ownership" />
              <FeatureContent>
                <FeatureCardTitle>Ownership and Fair Revenue Distribution</FeatureCardTitle>
                <FeatureCardText>
                  Through decentralized governance and the ERC-7007 standard, creators retain full ownership of their works and profit transparently in a fair trading market.
                </FeatureCardText>
              </FeatureContent>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon src={Features3} alt="AIGC Assets" />
              <FeatureContent>
                <FeatureCardTitle>Unlocking the Potential of AIGC Assets</FeatureCardTitle>
                <FeatureCardText>
                  AIGC DAO integrates with the 7007 Protocol to build a decentralized market focused on AIGC assets, enabling creators to circulate and monetize their content effectively.
                </FeatureCardText>
              </FeatureContent>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon src={Features4} alt="Collaboration" />
              <FeatureContent>
                <FeatureCardTitle>Advancing Human-Machine Collaboration</FeatureCardTitle>
                <FeatureCardText>
                  AIGC DAO pioneers the integration of on-chain intelligent Agents into governance systems, enhancing decision-making efficiency and exploring the future of human-machine co-governance.
                </FeatureCardText>
              </FeatureContent>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon src={Features5} alt="Ecosystem" />
              <FeatureContent>
                <FeatureCardTitle>Building an Ecosystem of Collaboration</FeatureCardTitle>
                <FeatureCardText>
                  AIGC DAO collaborates with 7007 Protocol, Ora Protocol, and Hetu Protocol to create a prosperous, multi-protocol-linked ecosystem.
                </FeatureCardText>
              </FeatureContent>
            </FeatureCard>
          </FeaturesGrid>
        </SectionFour>
      </ContentSection>

      <ContentSection bgColor="#1D1D1B">
        <Footer>
          <FooterContent>
            <FooterLeft>
              <FooterLogo src={Logo} alt="AIGC DAO Logo" />
              <FooterTitle>AIGC DAO</FooterTitle>
            </FooterLeft>
            
            <FooterRight>
              <FooterButton onClick={() => window.open('https://x.com/the_AIGC_DAO', '_blank')}>
                <FooterButtonIcon src={SmallX} alt="Twitter" />
                <FooterButtonText>Twitter</FooterButtonText>
              </FooterButton>
              <FooterButton sx={{ display: 'none' }}>
                <FooterButtonIcon src={SmallDiscord} alt="Discord" />
                <FooterButtonText>Discord</FooterButtonText>
              </FooterButton>
            </FooterRight>
          </FooterContent>
        </Footer>
      </ContentSection>
    </MainLayout>
  )
}

export default App
