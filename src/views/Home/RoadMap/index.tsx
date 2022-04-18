import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "views/Home/RoadMap/roadmap.module.css";
type Props = {
  pos?: number;
};

export const Mainroadline = styled.div<Props>`
  border-top: 1px solid #a1abb9;
  width: 100%;
  height: 50px;
  margin: 60px 0 100px 0;
  /* max-width: 1150px; */
  /* min-width: 1150px; */
  display: flex;
  position: absolute;
  top: 160px;
  align-items: flex-start;
  transition: all 0.85s;
  left: ${(props: any) => props.pos + 18}vw;
  
`;
export default function RoadMap() {
  const [pos_val, setPos_val] = useState(0);
  const handlechange = (val: any) => {
    let sum = val + 18 + pos_val;

    if (sum > 10 && sum < 20) setPos_val(pos_val + val);
  };
  return (
    <div className="roadmapout">
      <div className="roadmapheader">
        <div className="roadmapheaderleft">
          The &nbsp;<span className="goletter">Go</span>near roadmap
        </div>
        <div className="arrowBtn">
          <div className="eacharrowBtn" onClick={() => handlechange(3)}>
            <i className="fa fa-chevron-left" />
          </div>
          <div className="eacharrowBtn" onClick={() => handlechange(-3)}>
            <i className="fa fa-chevron-right" />
          </div>
        </div>
      </div>
      <Mainroadline pos={pos_val}>
        <div className="check_card">
          <div className="check_icon" />
          <div className="description">Deploy Ethereum apps on Aurora</div>
        </div>
        <div className="check_card">
          <div className="check_icon" />
          <div className="description">
            Transfer the NEAR token between Ethereum and NEAR
          </div>
        </div>
        <div className="check_card">
          <div className="check_icon" />
          <div className="description">
            Transfer ETH and ERC-20 tokens beween Ethereum and Aurora
          </div>
        </div>
        <div className="rect_card">
          <div className="rect_icon">Q1 2022</div>
          <div className="description">
            <div className="item">● Fundraising campaign completion</div>
            <div className="item">
              ● Council formation and initial 9 members
            </div>
            <div className="item">
              ● GN Whitelist Campaign ● GN Initial Dex Offering
            </div>
            <div className="item">● GN Dex listing</div>
          </div>
        </div>
        <div className="rect_card">
          <div className="rect_icon">Q2 2022</div>
          <div className="description">
            <div className="item">● Allocations & Tiers system launch</div>
            <div className="item">● GN staking launch </div>
            <div className="item">● Time-increased allocations</div>
            <div className="item">● Pilot projects</div>
            <div className="item">● IDO application council reviewa</div>
          </div>
        </div>
        <div className="rect_card">
          <div className="rect_icon">Q3 2022</div>
          <div className="description">
            <div className="item">● Council-vetted projects launch</div>
            <div className="item">
              ● Council member quota increase to 17 members{" "}
            </div>
          </div>
        </div>
        <div className="rect_card">
          <div className="rect_icon">Q4 2022</div>
          <div className="description">
            <div className="item">● GonearDAO launch</div>
            <div className="item">● Permissionless project pools</div>
            <div className="item">● Liquidity integration with Dex</div>
          </div>
        </div>
      </Mainroadline>
    </div>
  );
}
