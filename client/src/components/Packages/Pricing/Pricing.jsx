import React from "react"
import "./Pricing.css"
import SectionTitle from "../../SectionTitle/SectionTitle"
import Box from "@mui/joy/Box"
import Card from "@mui/joy/Card"
import CardActions from "@mui/joy/CardActions"
import Chip from "@mui/joy/Chip"
import Divider from "@mui/joy/Divider"
import List from "@mui/joy/List"
import ListItem from "@mui/joy/ListItem"
import ListItemDecorator from "@mui/joy/ListItemDecorator"
import Typography from "@mui/joy/Typography"
import { IoMdCheckmark } from "react-icons/io"
import { useMediaQuery } from "react-responsive"

const Pricing = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 930 })

    return (
        <div className="p-pricing">
            <h2 className="section-header">
                <SectionTitle text="Pricing" />
                Value for our Service
            </h2>
            <div className="p-pricing-main">
                <Box
                    className="p-pricing-box"
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
                        gap: 2,
                    }}
                >
                    <Card size="lg" variant="outlined" sx={{ padding : isSmallScreen ?  "1rem": "2rem" }} className="p-pricing-card p-pricing-old">
                        <Chip size="sm" variant="outlined" color="neutral" className="p-pricing-no-line">
                            STANDARD
                        </Chip>
                        <Typography level="h2" sx={{ mr: "auto" }}>
                            ₹35000
                            <Typography textColor="text.tertiary" sx={{ fontSize: "sm" }}>
                                / person
                            </Typography>
                        </Typography>{" "}
                        <Divider inset="none" />
                        <List size="sm" sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}>
                            <ListItem>
                                <ListItemDecorator>
                                    <IoMdCheckmark />
                                </ListItemDecorator>
                                Hotel accommodation (4 nights){" "}
                            </ListItem>
                            <ListItem>
                                <ListItemDecorator>
                                    <IoMdCheckmark />
                                </ListItemDecorator>
                                Round-trip from Delhi (air-conditioned bus)
                            </ListItem>
                            <ListItem>
                                <ListItemDecorator>
                                    <IoMdCheckmark />
                                </ListItemDecorator>
                                Includes essentials for rituals and ceremonies
                            </ListItem>
                            <ListItem>
                                <ListItemDecorator>
                                    <IoMdCheckmark />
                                </ListItemDecorator>
                                Breakfast, lunch, and dinner with local flavors{" "}
                            </ListItem>
                            <ListItem>
                                <ListItemDecorator>
                                    <IoMdCheckmark />
                                </ListItemDecorator>
                                Priority access to Shahi Snan (Royal Bath)
                            </ListItem>
                            <ListItem>
                                <ListItemDecorator>
                                    <IoMdCheckmark />
                                </ListItemDecorator>
                                Visits to historic temples and landmarks{" "}
                            </ListItem>
                        </List>
                        <Divider inset="none" />
                        <CardActions>
                            <Typography textColor="text.tertiary" sx={{ fontSize: "sm" }}>
                                This package is not available for now
                            </Typography>
                        </CardActions>
                    </Card>
                    <Card
                        size="lg"
                        variant="solid"
                        invertedColors
                        sx={{ bgcolor: "neutral.800", padding: "2rem"}}
                        className="p-pricing-card p-pricing-new"
                    >
                        <Chip size="sm" variant="outlined" color="neutral">
                            OFFER
                        </Chip>
                        <Typography level="h2" sx={{ mr: "auto", color:"#f1693b" }}>
                            ₹24,999
                            <Typography textColor="text.tertiary" sx={{ fontSize: "sm", color:"#f1693b" }}>
                                / person
                            </Typography>
                        </Typography>{" "}
                        <Divider inset="none" />
                        <List size="sm" sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}>
                            <ListItem>
                                <ListItemDecorator>
                                    <IoMdCheckmark />
                                </ListItemDecorator>
                                Comfortable accommodation in Deluxe Luxury room 2 nights
                            </ListItem>
                            <ListItem>
                                <ListItemDecorator>
                                    <IoMdCheckmark />
                                </ListItemDecorator>
                                Round-trip by bus/travaller with transfers to the venue                            </ListItem>
                            <ListItem>
                                <ListItemDecorator>
                                    <IoMdCheckmark />
                                </ListItemDecorator>
                                Welcome kit with safety gear and maps                            </ListItem>
                            <ListItem>
                                <ListItemDecorator>
                                    <IoMdCheckmark />
                                </ListItemDecorator>
                                Breakfast and dinner with on-site snacks available                            </ListItem>
                            <ListItem>
                                <ListItemDecorator>
                                    <IoMdCheckmark />
                                </ListItemDecorator>
                                Assistance with rituals and local insights                            </ListItem>
                            <ListItem>
                                <ListItemDecorator>
                                    <IoMdCheckmark />
                                </ListItemDecorator>
                                Access to cultural programs and Ganga Aarti                            </ListItem>
                        </List>
                        <Divider inset="none" />
                        <CardActions>
                            <Typography textColor="text.tertiary" sx={{ fontSize: "sm" }}>
                            Offer valid till Jan 8th 2024</Typography>
                        </CardActions>
                    </Card>
                </Box>
            </div>
        </div>
    )
}

export default Pricing
