import React from 'react'
import Image from 'next/image';
import Upcome1 from "assets/image/fund1.jpg";
import Upcome2 from "assets/image/fund2.jpg";
import Upcome3 from "assets/image/fund3.jpg";
import FundLogo1 from "assets/image/fundlogo1.png";
import FundLogo2 from "assets/image/fundlogo2.jpg";
import FundLogo3 from "assets/image/fundlogo3.jpg";
import FundProject from "assets/image/fundproject.png";
import Unique from "assets/image/uniqueparti.png";
import Raised from "assets/image/raisedCap.png";
import "views/Home/Funds/funds.module.css";

export default function Funds() {
    return (
        <div className="FundOut">
            <div className="upcom">
                <div className="Fundheadertitle">
                    <div className="upcomTitleleft">Funds Project</div>
                    <div className="fundheaderright">
                        <div className='fundBtn'>
                            <div className='fundBtnleft'><Image src={FundProject} width={50} height={50} draggable={false} /></div>
                            <div className='fundBtnright'>
                                <div className='fundBtnText'>Funded Projects</div>
                                <div className='fundBtnNum'>97</div>
                            </div>
                        </div>
                        <div className='fundBtn'>
                            <div className='fundBtnleft'>
                                <Image src={Unique} width={50} height={50} draggable={false} /></div>
                            <div>
                                <div className='uniqBtnText'>Unique Participants</div>
                                <div className='fundBtnNum'>25,461</div>
                            </div>
                        </div>
                        <div className='fundBtn'>
                            <div className='fundBtnleft'><Image src={Raised} width={50} height={50} draggable={false} /></div>
                            <div>
                                <div className='raisedBtnText'>Raised Capital</div>
                                <div className='fundBtnNum'> $38,119,504</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="UpCards">
                <div className="Upcard">
                    <div className="upcardBtn">
                        <div className="upcardcircle" />
                        <div className="upcardcircleletter">Ongoing</div>
                    </div>
                    <div className="upcardlogo">
                        <Image src={FundLogo1} width={500} height={500} draggable={false} />
                    </div>
                    <div className="cardimg"><Image src={Upcome1} width={500} height={310} draggable={false} /></div>
                    <div className="fundtitle">WonderHero</div>
                    <div className="upcardsubtitle">Play To Earn Mobile RPG</div>
                    <div className="fundtotalraise">
                        <div className="upcardlineleft">Total raise  </div>
                        <div className="upcardlineright">$x,xxx</div>
                    </div>
                </div>
                <div className="Upcard">
                    <div className="upcardBtn">
                        <div className="upcardcircle" /><div className="upcardcircleletter">Ongoing</div>
                    </div>
                    <div className="upcardlogo">
                        <Image src={FundLogo2} width={500} height={500} draggable={false} />
                    </div>
                    <div className="cardimg"><Image src={Upcome2} width={500} height={310} draggable={false} /></div>
                    <div className="fundtitle">Highstreet</div>
                    <div className="upcardsubtitle">Shopify on an MMORPG</div>
                    <div className="fundtotalraise">
                        <div className="upcardlineleft">Total raise  </div>
                        <div className="upcardlineright">$x,xxx</div>
                    </div>
                </div>
                <div className="Upcard">
                    <div className="upcardBtn">
                        <div className="upcardcircle" /><div className="upcardcircleletter">Ongoing</div>
                    </div>
                    <div className="upcardlogo">
                        <Image src={FundLogo3} width={500} height={500} draggable={false} />
                    </div>
                    <div className="cardimg"><Image src={Upcome3} width={500} height={310} draggable={false} /></div>
                    <div className="fundtitle">Orion Money</div>
                    <div className="upcardsubtitle">Cross-chain stablecoin bank</div>
                    <div className="fundtotalraise">
                        <div className="upcardlineleft">Total raise  </div>
                        <div className="upcardlineright">$x,xxx</div>
                    </div>
                </div>
            </div>
            <div className="viewallprojectsout">
                <div className="viewallprojects">View all projects</div>
            </div>
        </div>
    );
}  
