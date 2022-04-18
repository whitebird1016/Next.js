import React from 'react'
import Image from 'next/image';
import Learn1 from "assets/image/learn1.jpg";
import Learn2 from "assets/image/learn2.jpg";
import Learn3 from "assets/image/learn3.jpg";
import "views/Home/LearnMore/learn.module.css";
export default function LearnMore() {
    return (
        <div className="learnmoreOut">
            <div className="learnmoreheader">
                <div className="learnmoreheadertitle">
                    <div className="upcomTitleleft">Learn more about gonear</div>
                    <div className="upcomTitleright">
                        <div className="learnmorevisitBtn">Visit the blog</div>
                    </div>
                </div>
            </div>
            <div className="UpCards">
                <div className="Upcard">
                    <div className="cardimg">
                        <Image src={Learn1} width={500} height={500} draggable={false} />
                    </div>
                    <div className="learncardtitle">How to Participate in a Polkastater IDO?</div>
                    <div className="learncardsubtitle">A good place to start is: what is Polkastarter? (We'll give you the brief version). Polkastarter is a platform that connects young projects with early...</div>
                </div>
                <div className="Upcard">
                    <div className="cardimg">
                        <Image src={Learn2} width={500} height={500} draggable={false} />
                    </div>
                    <div className="learncardtitle">How to Participate in a Polkastater IDO?</div>
                    <div className="learncardsubtitle">A good place to start is: what is Polkastarter? (We'll give you the brief version). Polkastarter is a platform that connects young projects with early...</div>
                </div>
                <div className="Upcard">
                    <div className="cardimg">
                        <Image src={Learn3} width={500} height={500} draggable={false} />
                    </div>
                    <div className="learncardtitle">How to Participate in a Polkastater IDO?</div>
                    <div className="learncardsubtitle">A good place to start is: what is Polkastarter? (We'll give you the brief version). Polkastarter is a platform that connects young projects with early...</div>
                </div>
            </div>
        </div>
    );
}

