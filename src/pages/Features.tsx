import React from "react";
import CountUp from "react-countup";
import { MoveRight } from "lucide-react";

// Example images
//import example1 from "assets/images/example1.jpg";
// import example2 from "assets/images/example2.jpg";
// import example3 from "assets/images/example3.jpg";
// import feature1 from "assets/images/feature1.jpg";
// import feature2 from "assets/images/feature2.jpg";
// import feature3 from "assets/images/feature3.jpg";
import home from "assets/images/landing/home.jpg";
import chat from "assets/images/landing/chat.jpg";
const Features: React.FC = () => {
    return (
        <React.Fragment>
            <section className="relative py-32 bg-slate-900 dark:bg-zinc-700" id="features">
                <div className="container 2xl:max-w-[87.5rem] px-4 mx-auto">
                    <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
                        <div className="order-2 xl:col-span-5 xl:order-1">
                            <div className="relative z-10 grid grid-cols-3 gap-5 xl:grid-cols-12">
                                <div className="xl:col-span-12">
                                    <img src={home} alt="Example 1" className="shadow-xl rounded-xl" />
                                </div>
                                <div className="xl:col-span-6">
                                    <img src={chat} alt="Example 2" className="shadow-xl xl:mt-5 rounded-xl" />
                                </div>
                                <div className="xl:col-span-6">
                                    <img src={home} alt="Example 3" className="shadow-xl xl:mt-5 rounded-xl" />
                                </div>
                            </div>
                        </div>
                        <div className="relative z-20 order-1 xl:-mt-72 xl:col-span-7 xl:order-last">
                            <img src={chat} alt="Feature 1" className="shadow-2xl rounded-xl" />
                        </div>
                    </div>
                    <div className="mt-24">
                        <h1 className="mb-16 leading-normal capitalize text-slate-100 dark:text-zinc-50">
                           QVAC
                        </h1>
                    </div>
                </div>
                <div className="absolute rotate-45 border border-dashed size-[500px] border-t-slate-700 border-l-slate-700 border-r-slate-700 border-b-slate-700 bottom-48 rounded-full -left-80 hidden md:block"></div>
                <div className="absolute rotate-45 border border-dashed size-[700px] border-t-slate-700 border-l-slate-700 border-r-slate-700 border-b-slate-700 bottom-24 rounded-full -left-96 hidden md:block"></div>
            </section>
            <section className="relative pb-32 bg-slate-50 dark:bg-zinc-700/40">
                <div className="container 2xl:max-w-[87.5rem] px-4 mx-auto">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-12 gap-x-5">
                        {featureCards.map((feature, index) => (
                            <div key={index} className="xl:col-span-4">
                                <FeatureCard
                                    image={feature.image}
                                    tag={feature.tag}
                                    title={feature.title}
                                    description={feature.description}
                                />
                            </div>
                        ))}
                    </div>

                    {/* <div className="p-10 mt-20 rounded-md bg-slate-900 dark:bg-zinc-700">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <h3 className="mb-2 text-slate-50 dark:text-zinc-50">
                                        <CountUp end={stat.value} className="counter-value" /> +
                                    </h3>
                                    <p className="text-16 text-slate-400 dark:text-zinc-200">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div> */}
                </div>
            </section>
        </React.Fragment>
    );
};

// FeatureCard component type and implementation
type FeatureCardProps = {
    image: string;
    tag: string;
    title: string;
    description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ image, tag, title, description }) => {
    return (
        <div className="transition-all duration-300 ease-linear card hover:-translate-y-2 dark:bg-zinc-600">
            <div className="p-6">
                <img src={image} alt={title} className="rounded-md shadow" />
                <div className="mt-6">
                    <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-sky-100 border-sky-200 text-sky-500 dark:bg-sky-500/20 dark:border-sky-500/20">
                        {tag}
                    </span>
                    <h6 className="mt-3 mb-2 text-lg truncate">
                        <a href="#!">{title}</a>
                    </h6>
                    <p className="mb-3 text-slate-500 dark:text-zinc-200 text-16">{description}</p>
                    <a href="#!" className="text-custom-500 text-16">
                        Read More <MoveRight className="inline-block size-4 align-middle ml-1 rotate-0" />
                    </a>
                </div>
            </div>
        </div>
    );
};

// Example feature data
const featureCards = [
    {
        image: home,
        tag: "Popular Apps",
        title: "Chat with Client & Employee",
        description: "A chat UI is one of the first things users see when using a web or mobile application to communicate."
    },
    {
        image: chat,
        tag: "Email Apps",
        title: "Exciting New Features Await You",
        description: "Explore the latest features and updates in our email apps to boost productivity."
    },
    {
        image: chat,
        tag: "HR Management",
        title: "Unleash Your Creativity with Our Latest Tools",
        description: "Use our tools to streamline HR processes and improve management efficiency."
    }
];

// Example stats data
const stats = [
    { value: 4, label: "Multiple Layouts" },
    { value: 12, label: "Multi Languages" },
    { value: 7, label: "Apps & Dashboard" },
    { value: 4, label: "Multiple Modes" },
    { value: 36500, label: "Happy Customers" }
];

export default Features;
