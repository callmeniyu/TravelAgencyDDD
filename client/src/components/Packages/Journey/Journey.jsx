import React from "react"
import "./Journey.css"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { CornerDownRight, Handshake, PlaneLanding } from "lucide-react"
import { GiJourney, GiReturnArrow } from "react-icons/gi";
import { TbPeace, TbBrandMiniprogram } from "react-icons/tb";

import SectionTitle from "../../SectionTitle/SectionTitle"
const Journey = () => {
    return (
        <div className="pjourney">
            <h2 className="section-header">
                <SectionTitle text="Journey" />
                Delhi-Delhi The Complete Journey
            </h2>
            <VerticalTimeline lineColor={"#f1693b"} className="pjourney-main">
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Day 01"
                    contentStyle={{ background: "#ebebeb", color: "#000" }}
                    contentArrowStyle={{ borderRight: "7px solid  #ebebeb" }}
                    dateClassName={"pjounery-date"}
                    iconStyle={{ background: "#f1693b", color: "#fff" }}
                    icon={<PlaneLanding />}
                >
                    <h3 className="vertical-timeline-element-title"> Arrival & Journey to Prayagraj</h3>
                    <p><CornerDownRight className="pjourney-card-arrow"/>Meet our trip captain and fellow travellers at the designated spot in Delhi.</p>
                    <p><CornerDownRight className="pjourney-card-arrow"/>Receive an introduction to Mahakumbh Mela and its spiritual significance.</p>
                    <p><CornerDownRight className="pjourney-card-arrow"/>Collect your travel essentials and board the comfortable traveler vehicle for an overnight journey.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Day 02"
                    contentStyle={{ background: "#ebebeb", color: "#000" }}
                    contentArrowStyle={{ borderRight: "7px solid  #ebebeb" }}
                    dateClassName={"pjounery-date"}
                    iconStyle={{ background: "#f1693b", color: "#fff" }}
                    icon={<GiJourney />}
                >
                    <h3 className="vertical-timeline-element-title">Departure for Prayagraj:</h3>
                    <p><CornerDownRight className="pjourney-card-arrow"/>Arrival in Prayagraj by morning</p>
                    <p><CornerDownRight className="pjourney-card-arrow"/>Freshen up and enjoy a delicious breakfast</p>
                    <p><CornerDownRight className="pjourney-card-arrow"/>Explore the Mahakumbh Mela Grounds</p>
                    <p><CornerDownRight className="pjourney-card-arrow"/>Guided Tour of Akharas (Spiritual Congregations)</p>
                    <p><CornerDownRight className="pjourney-card-arrow"/>Evening Return to the Hotel & DInner</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Day 03"
                    contentStyle={{ background: "#ebebeb", color: "#000" }}
                    contentArrowStyle={{ borderRight: "7px solid  #ebebeb" }}
                    dateClassName={"pjounery-date"}
                    iconStyle={{ background: "#f1693b", color: "#fff" }}
                    icon={<TbPeace />}
                >
                    <h3 className="vertical-timeline-element-title">Holy Snan (Sacred Dip)</h3>
                    <p><CornerDownRight className="pjourney-card-arrow"/>Holy Snan at Triveni Sangam</p>
                    <p><CornerDownRight className="pjourney-card-arrow"/>Boating at Sangam</p>
                    <p><CornerDownRight className="pjourney-card-arrow"/>Free Time at Mahakumbh Grounds</p>
                    <p><CornerDownRight className="pjourney-card-arrow"/>Evening Return to the Hotel & Dinner</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Day 04"
                    contentStyle={{ background: "#ebebeb", color: "#000" }}
                    contentArrowStyle={{ borderRight: "7px solid  #ebebeb" }}
                    dateClassName={"pjounery-date"}
                    iconStyle={{ background: "#f1693b", color: "#fff" }}
                    icon={<TbBrandMiniprogram />}
                >
                    <h3 className="vertical-timeline-element-title">Prayagraj Sightseeing and Return to Delhi </h3>
                    <p><CornerDownRight className="pjourney-card-arrow"/>Lette Hanuman Mandir: Visit the famous temple housing a unique reclining statue of Lord Hanuman.</p>
                    <p><CornerDownRight className="pjourney-card-arrow"/>Alop Shankari Devi Shakti Peeth Temple: Explore this revered Shakti Peeth, one of the old</p>
                    <p><CornerDownRight className="pjourney-card-arrow"/>Anand Bhavan: Visit the historic residence of the Nehru family, now a museum showcasing India’s freedom struggle.</p>
                    <p><CornerDownRight className="pjourney-card-arrow"/>Departure from Prayagraj</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Day 05"
                    contentStyle={{ background: "#ebebeb", color: "#000" }}
                    contentArrowStyle={{ borderRight: "7px solid  #ebebeb" }}
                    dateClassName={"pjounery-date"}
                    iconStyle={{ background: "#f1693b", color: "#fff" }}
                    icon={<GiReturnArrow />}
                >
                    <h3 className="vertical-timeline-element-title">Day 4 : Arrival in Delhi</h3>
                    <p><CornerDownRight className="pjourney-card-arrow"/>Reach Delhi early in the morning, concluding the memorable spiritual journey.</p>
                </VerticalTimelineElement>
                
            </VerticalTimeline>
        </div>
    )
}

export default Journey
