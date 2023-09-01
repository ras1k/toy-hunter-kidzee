import { Player } from "@lottiefiles/react-lottie-player";


const AnimateCar = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center">
            <Player
                autoplay
                loop
                src="https://lottie.host/cbd038e1-f890-46b4-9324-fbbe31b95398/hKrvJ84Okx.json"
                className="lg:h-[400px] h-[250px]  w-full"
            />
            <Player
                autoplay
                loop
                src="https://lottie.host/fead9ae2-1eb3-4219-8927-fdc8d4fb8b50/uLFMGBJdCO.json"
                className="lg:h-[400px] h-[250px]  w-full"
            />
        </div>
    );
};

export default AnimateCar;