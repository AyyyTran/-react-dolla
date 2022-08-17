import React from 'react';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
} from './FooterElements';

// to tag needs to link within website.
//different protocol for linking to other sites
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to='/'>How It Works</FooterLink>
              <FooterLink to='/'>Testomonials</FooterLink>
              <FooterLink to='/'>Careers</FooterLink>
              <FooterLink to='/'>Investors</FooterLink>
              <FooterLink to='/'>Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to='/'>How It Works</FooterLink>
              <FooterLink to='/'>Testomonials</FooterLink>
              <FooterLink to='/'>Careers</FooterLink>
              <FooterLink to='/'>Investors</FooterLink>
              <FooterLink to='/'>Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to='/'>How It Works</FooterLink>
              <FooterLink to='/'>Testomonials</FooterLink>
              <FooterLink to='/'>Careers</FooterLink>
              <FooterLink to='/'>Investors</FooterLink>
              <FooterLink to='/'>Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to='/'>How It Works</FooterLink>
              <FooterLink to='/'>Testomonials</FooterLink>
              <FooterLink to='/'>Careers</FooterLink>
              <FooterLink to='/'>Investors</FooterLink>
              <FooterLink to='/'>Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>dolla</SocialLogo>
            <WebsiteRights>dolla</WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
