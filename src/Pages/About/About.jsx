import NewsLetter from "../Home/NewsLetter/NewsLetter";
import SectionTitle from "../SectionTitle/SectionTitle";
import logo from '/logo.png';
import Tilt from 'react-parallax-tilt';

const About = () => {
    return (
        <div className="p-4 max-w-screen-xl mx-auto">
            <SectionTitle
                subHeading={"..."}
                heading={'About Us'}
            />
            <div className="bg-gray-100 min-h-screen rounded-lg">
                <div className="py-10">
                    <div className="container mx-auto px-4">
                        {/* <h1 className="text-4xl font-bold text-center mb-8">About Chef Advisor</h1> */}
                        <p className="text-center text-gray-600">
                            Welcome to <span className="text-3xl font-bold text-teal-950">Kidzee</span>, where imagination comes to life! 🎈
                            <br /> <br />
                            Kidzee is not just a marketplace; it's a magical world where kids and parents explore a universe of toys that spark creativity, learning, and endless fun. Our shelves are stocked with a curated collection of toys that inspire, educate, and bring joy to young minds.

                            From classic board games that ignite friendly competitions to cutting-edge tech toys that make learning an adventure, Kidzee offers a diverse range of playthings that cater to every interest and age group. Our commitment is to provide a safe and exciting space where kids can discover, learn, and grow through play.

                            At Kidzee, we understand that toys are more than just objects – they're the tools of childhood, fostering curiosity and friendships that last a lifetime. Join us in celebrating the wonder of play and the joy of discovery. Come explore, shop, and play with us at Kidzee, where every toy has a story to tell and every child's smile is our ultimate goal.

                            Let's play, learn, and create together! 🌟🎉
                        </p>
                        <Tilt className="mt-12 flex justify-center">
                            <img src={logo} alt="" className="w-1/2 rounded-lg" />
                        </Tilt>
                        <div className="mt-12 p-4">
                            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                            <p className="text-gray-600">
                                At Kidzee, our mission is to enrich the lives of children by providing a dynamic and vibrant marketplace for toys that stimulate creativity, learning, and exploration. We aim to curate a diverse range of playthings that engage young minds, foster positive development, and create cherished memories for children and families alike. We are dedicated to offering a safe and inspiring environment where kids can discover their passions, build meaningful connections, and embark on exciting journeys of imagination.
                            </p>
                        </div>
                        <div className="mt-12 p-4">
                            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                            <p className="text-gray-600">
                                Our vision at Kidzee is to be the ultimate destination for parents seeking toys that inspire, educate, and delight. We aspire to be a trusted platform where families can confidently explore a carefully selected collection of toys that align with our commitment to quality, innovation, and fun. We envision Kidzee as a place that encourages children to learn through play, where every interaction with our toys contributes to their growth, happiness, and overall well-being. Through our efforts, we aim to shape a brighter future where every child's potential is nurtured and celebrated.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <NewsLetter />
        </div>
    );
};

export default About;