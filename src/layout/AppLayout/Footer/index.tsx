import React from "react";
import Image from "next/image";
import FooterLogo from "assets/image/FooterLogo.png";
import {
  HomeFooterOut,
  HomeFooter,
  HomeFooterItemTitle,
  FooterTop,
  FooterTwoItem,
  FooterItem,
  FooterItemLink,
  FooterIcons,
  FooterIcon,
  FooterContact,
  FooterContactLine,
  FooterBottom,
  FooterMiddle,
} from "./Footer.style";

export default function Footer() {
  return (
    <HomeFooterOut>
      <HomeFooter>
        <FooterTop>
          <FooterTwoItem>
            <FooterItem>
              <HomeFooterItemTitle>
                <Image src={FooterLogo} width={200} height={50} />
              </HomeFooterItemTitle>
              <FooterItemLink> About</FooterItemLink>
              <br />
              <FooterItemLink> Council</FooterItemLink>
              <br />
              <FooterItemLink> Blog</FooterItemLink>
            </FooterItem>
            <FooterItem>
              <HomeFooterItemTitle>Participate</HomeFooterItemTitle>
              <FooterItemLink> Allocations & Tiers</FooterItemLink>
              <br />
              <FooterItemLink> Projects</FooterItemLink>
              <br />
              <FooterItemLink> Get notified</FooterItemLink>
              <br />
              <FooterItemLink> Careers</FooterItemLink>
            </FooterItem>
          </FooterTwoItem>
          <FooterTwoItem>
            <FooterItem>
              <HomeFooterItemTitle>Projects</HomeFooterItemTitle>
              <FooterItemLink> Apply for IDO</FooterItemLink>
              <br />
              <FooterItemLink> IDO selection process</FooterItemLink>
              <br />
              <FooterItemLink> Documentation</FooterItemLink>
            </FooterItem>
            <FooterItem>
              <HomeFooterItemTitle>Investors</HomeFooterItemTitle>
              <FooterItemLink> Apply for council membership</FooterItemLink>
              <br />
              <FooterItemLink> Inquire for contribution</FooterItemLink>
              <br />
              <FooterItemLink> GN Token</FooterItemLink>
            </FooterItem>
          </FooterTwoItem>
        </FooterTop>
        <FooterMiddle>
          <FooterIcons>
            <FooterIcon />
            <FooterIcon />
            <FooterIcon />
          </FooterIcons>
          <FooterContact>
            <FooterItemLink> hello@gonear.io</FooterItemLink>
            <FooterContactLine />
            <FooterItemLink> Privacy Policy</FooterItemLink>
          </FooterContact>
        </FooterMiddle>
        <FooterBottom>
          Copyright © 2022 Gonear. All rights reserved.
        </FooterBottom>
      </HomeFooter>
    </HomeFooterOut>
  );
}
