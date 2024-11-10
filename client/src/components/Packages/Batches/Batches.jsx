import React from "react"
import Stepper from "@mui/joy/Stepper"
import Step from "@mui/joy/Step"
import StepIndicator from "@mui/joy/StepIndicator"
import "./Batches.css"
import SectionTitle from "../../SectionTitle/SectionTitle"
import { useMediaQuery } from "react-responsive"

const Batches = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 800 })
    return (
        <div className="pbatches">
            <h2 className="section-header">
                <SectionTitle text="Batches" />
                Batches throughout the Mela
            </h2>
            <Stepper sx={{ width: "100%", gap: isSmallScreen ? 6 : 2 }} className="pbatches-main" orientation={isSmallScreen ? "vertical" : "horizontal"}>
                <Step
                    orientation="vertical"
                    indicator={
                        <StepIndicator variant="solid" sx={{backgroundColor:"#f1693b"}}>
                            1
                        </StepIndicator>
                    }
                >
                    <h3>Batch 1</h3>
                    <p>Jan 12th - 15th</p>
                </Step>
                <Step
                    orientation="vertical"
                    indicator={
                        <StepIndicator variant="solid" sx={{backgroundColor:"#f1693b"}}>
                            2
                        </StepIndicator>
                    }
                >
                    <h3>Batch 2</h3>
                    <p>jan 27th - 30th </p>
                </Step>
                <Step
                    orientation="vertical"
                    indicator={
                        <StepIndicator variant="solid" sx={{backgroundColor:"#f1693b"}}>
                            3
                        </StepIndicator>
                    }
                >
                    <h3>Batch 3</h3>
                    <p>Feb 1st - 4th</p>
                </Step>
                <Step
                    orientation="vertical"
                    indicator={
                        <StepIndicator variant="solid" sx={{backgroundColor:"#f1693b"}}>
                            4
                        </StepIndicator>
                    }
                >
                    <h3>Batch 4</h3>
                    <p>Feb 10th - 13th</p>
                </Step>
                <Step
                    orientation="vertical"
                    indicator={
                        <StepIndicator variant="solid" sx={{backgroundColor:"#f1693b"}}>
                            5
                        </StepIndicator>
                    }
                >
                    <h3>Batch 5</h3>
                    <p>Feb 24th - 27th</p>
                </Step>

            </Stepper>
        </div>
    )
}

export default Batches
