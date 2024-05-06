import Sites from "../components/Sites";
import Slider from "../components/Slider";
import TourList from "../components/TourList";

export default function Home() {
    return (
        <div>
            <Slider />
            <Sites />
            <TourList />
        </div>
    );
}

export const dynamic = "force-dynamic";
