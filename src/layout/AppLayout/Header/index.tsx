import React, { useState } from "react";
import {
  HomeHeader,
  HomeHeaderLeft,
  HomeHeaderText,
  ConnectWalletBtn,
  ResponsiveBar,
  ResChannel,
  ResChannelBody,
  ConnectWalletRes,
  HeaderTabRes,
  IconContainer,
  TokenModal,
  SubHeaderText,
  CompanyModal,
} from "./Header.style";
import { LogoIcon } from "assets/icon/LogoIcon";
export default function Header() {
  const [resflag, setResflag] = useState(false);
  const [show_token, setShowToken] = useState(false);
  const [show_company, setShowCompany] = useState(false);
  return (
    <>
      <HomeHeader>
        <HomeHeaderLeft>
          <div>
            <LogoIcon />
          </div>
          <HomeHeaderText>Projects</HomeHeaderText>
          <HomeHeaderText>Tiers</HomeHeaderText>
          <HomeHeaderText>Stake</HomeHeaderText>
          <HomeHeaderText
            className="subMenu"
            onClick={() => {
              setShowToken(!show_token);
              setShowCompany(false);
            }}
          >
            GN Token <IconContainer className="fa fa-angle-down" />
            {show_token && (
              <TokenModal>
                <SubHeaderText>Purchase</SubHeaderText>
                <SubHeaderText>Economics</SubHeaderText>
                <SubHeaderText>Utility</SubHeaderText>
              </TokenModal>
            )}
          </HomeHeaderText>
          <HomeHeaderText
            className="subMenu"
            onClick={() => {
              setShowToken(false);
              setShowCompany(!show_company);
            }}
          >
            Company <IconContainer className="fa fa-angle-down" />
            {show_company && (
              <CompanyModal>
                <SubHeaderText>About</SubHeaderText>
                <SubHeaderText>The Council</SubHeaderText>
                <SubHeaderText>Careers</SubHeaderText>
              </CompanyModal>
            )}
          </HomeHeaderText>
        </HomeHeaderLeft>
        <HomeHeaderLeft>
          <ResponsiveBar onClick={() => setResflag(!resflag)}>
            <IconContainer className="fa fa-reorder" />
          </ResponsiveBar>
          <ConnectWalletBtn>Connect wallet</ConnectWalletBtn>
        </HomeHeaderLeft>
      </HomeHeader>
      {resflag === true && (
        <ResChannel>
          <ResChannelBody>
            <HeaderTabRes>Projects</HeaderTabRes>
            <HeaderTabRes>Tiers</HeaderTabRes>
            <HeaderTabRes>Stake</HeaderTabRes>
            <HeaderTabRes
              onClick={() => {
                setShowToken(!show_token);
                setShowCompany(false);
              }}
            >
              GN Token <IconContainer className="fa fa-angle-down" />
            </HeaderTabRes>
            {show_token && (
              <>
                <HeaderTabRes>Purchase</HeaderTabRes>
                <HeaderTabRes>Economics</HeaderTabRes>
                <HeaderTabRes>Utility</HeaderTabRes>
              </>
            )}
            <HeaderTabRes
              onClick={() => {
                setShowToken(false);
                setShowCompany(!show_company);
              }}
            >
              Company <IconContainer className="fa fa-angle-down" />
            </HeaderTabRes>
            {show_company && (
              <>
                <HeaderTabRes>About</HeaderTabRes>
                <HeaderTabRes>The Council</HeaderTabRes>
                <HeaderTabRes>Careers</HeaderTabRes>
              </>
            )}
            <ConnectWalletRes>Connect wallet</ConnectWalletRes>
          </ResChannelBody>
        </ResChannel>
      )}
    </>
  );
}
