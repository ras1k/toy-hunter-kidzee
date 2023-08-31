import ReactPlayer from 'react-player'
import './VideoPlayer.css';
import SectionTitle from '../../SectionTitle/SectionTitle';

const VideoPlayer = () => {
    return (
        <div className='my-10 px-4'>
            <SectionTitle
                subHeading={"Special"}
                heading={'Toy Cars'}
            />

            <div className='flex items-center flex-col lg:flex-row justify-center gap-4'>
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=787Tn2wVQtk&ab_channel=HeroCarsCity'
                    width={'95%'}
                />
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=PwrrMChW5H8&ab_channel=OneDayAlex'
                    width={'95%'}
                />
            </div>
            <div className='flex items-center flex-col lg:flex-row justify-center gap-4 mt-4'>
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=5hEqwHLd3JA&ab_channel=RehanBoss'
                    width={'95%'}
                />
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=OcaW323FOUo&ab_channel=KinderSpielzeugKanal%28Kidibli%29'
                    width={'95%'}
                />
            </div>



        </div>
    );
};

export default VideoPlayer;