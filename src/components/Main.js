import Info from "./Info"
// import Hero from "./Hero"
// import SummaryIcons from "./SummaryIcons"
import BudgetOffer from "./BudgetOffer"
// import FeaturedVehiclesOnlyMobile from "./FeaturedVehiclesOnlyMobile"
// import SummaryIconsOnlyMobile from "./SummaryIconsOnlyMobile"
import AboutUsSummary from "./AboutUsSummary"
import FeaturedVehicles from "./FeaturedVehicles"
// import MotoringHubSummary from "./MotoringHubSummary"
// import SummaryIconsWithCats from "./SummaryIconsWithCats"
// import HowToBuyAndSell from "./HowToBuyAndSell"
import CustomerFeedback from "./CustomerFeedback"
import Value from "./Value"
import Section2 from "./Section2"
import Section from "./Section"
import ViralVideos from "./ViralVideos"
export default function Main() {
    return (
        <div className="block overflow-hidden w-screen">
            <Info />
            <Section2 />
            <BudgetOffer />
            <Section />
            <CustomerFeedback />
            <AboutUsSummary />
            <FeaturedVehicles />
            <ViralVideos />
            <Value />
            {/* <Hero />
            <SummaryIcons />
            <iframe
                className="md:translate-x-1/2 md:w-1/2 w-full h-[300px] md:h-[500px] mt-4"
                width="50%"
                height="500px"
                src="https://www.youtube.com/embed/buNT9D2_WCc?si=jAJ6y8S1KbzD6Zgr"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""></iframe>

            <FeaturedVehiclesOnlyMobile />
            <SummaryIconsOnlyMobile />
            <HowToBuyAndSell />



            <MotoringHubSummary />
            <SummaryIconsWithCats /> */}

        </div>
    )
}