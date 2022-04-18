import React from 'react'
import Image from 'next/image';
import Upcome1 from "assets/image/upcome1.jpg";
import Upcome3 from "assets/image/upcome3.png";
import Uplogo1 from "assets/image/uplogo1.png";
import Uplogo2 from "assets/image/uplogo2.png";
import Uplogo3 from "assets/image/uplogo3.png";
import "views/Home/UpcomingView/Upcome.module.css";
export default function UpcomingView() {
    return (
        <div className="upcomout">
            <div className="upcom">
                <div className="upcomTitle">
                    <div className="upcomTitleleft">Upcoming projects</div>
                    <div className="upcomTitleright">
                        <div className="upcomrightBtn"><div className="upcomrightcircle" /><div className="upcomrightcircleletter">Sold out</div></div>
                        <div className="upcomrightBtn"><div className="upcomrightcircle" /><div className="upcomrightcircleletter">Upcoming</div></div>
                        <div className="upcomrightBtn"><div className="upcomrightcircle" /><div className="upcomrightcircleletter">Ongoing</div></div>
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
                        <Image src={Uplogo1} width={500} height={500} draggable={false} />
                    </div>
                    <div className="cardimg"><Image src={Upcome1} width={500} height={310} draggable={false} /></div>
                    <div className="upcardtitle">SYN CITY</div>
                    <div className="upcardsubtitle">$TICKER</div>
                    <div className="upcardline1">
                        <div className="upcardlineleft">Total raise  </div>
                        <div className="upcardlineright">$x,xxx</div>
                    </div>
                    <div className="upcardline2">
                        <div className="upcardlineleft">individual allocation </div>
                        <div className="upcardlineright">$x,xxx</div>
                    </div>
                </div>
                <div className="Upcard">
                    <div className="upcardBtn">
                        <div className="upcardcircle" /><div className="upcardcircleletter">Ongoing</div>
                    </div>
                    <div className="upcardlogo">
                        <Image src={Uplogo2} width={500} height={500} draggable={false} />
                    </div>
                    <div className="cardimg"><Image src={Upcome1} width={500} height={310} draggable={false} /></div>
                    <div className="upcardtitle">SYN CITY</div>
                    <div className="upcardsubtitle">$TICKER</div>
                    <div className="upcardline1">
                        <div className="upcardlineleft">Total raise </div>
                        <div className="upcardlineright">$x,xxx</div>
                    </div>
                    <div className="upcardline2">
                        <div className="upcardlineleft">individual allocation</div>
                        <div className="upcardlineright">$x,xxx</div>
                    </div>
                </div>
                <div className="Upcard">
                    <div className="upcardBtn">
                        <div className="upcardcircle" /><div className="upcardcircleletter">Ongoing</div>
                    </div>
                    <div className="upcardlogo">
                        <Image src={Uplogo3} width={500} height={500} draggable={false} />
                    </div>
                    <div className="cardimg"><Image src={Upcome3} width={500} height={310} draggable={false} /></div>
                    <div className="upcardtitle">SYN CITY</div>
                    <div className="upcardsubtitle">$TICKER</div>
                    <div className="upcardline1">
                        <div className="upcardlineleft">Total raise </div>
                        <div className="upcardlineright">$x,xxx</div>
                    </div>
                    <div className="upcardline2">
                        <div className="upcardlineleft">individual allocation</div>
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
