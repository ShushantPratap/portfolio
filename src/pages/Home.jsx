import React from "react";
import skills from "../skills";
import { Layers, Pencil, CircleCheck, PenTool, CodeXml, BookCheck, ChartColumnStacked, MapPinned, Github, Linkedin, Twitter, Mail } from "lucide-react";
import codeGuyImg from "../assets/img/coderGuy.gif"
import { Card } from "../components/index";
import { Link } from "react-router-dom";

function Home() {
    React.useEffect(() => {
        document.title = "Home";
    }, []);
    
    return (
        <div className="md:w-full">
            <section className="min-h-screen flex items-center justify-center text-white p-6">
                <div className="text-center max-w-4xl mx-auto">
                    <img
                        src="https://placehold.co/150x150/421156/FFFFFF?text=SP"
                        alt="Developer Profile"
                        className="w-36 h-36 rounded-full mx-auto mb-6 border-4 border-[#9b59b6] shadow-lg"
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x150/CF3545/FFFFFF?text=JD"; }}
                    />
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in-down">
                        Hi, I'm <span className="text-theme">Shushant Pratap</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 leading-relaxed animate-fade-in-up">
                        A passionate Web Developer crafting engaging and user-friendly digital experiences.
                        I specialize in building robust and scalable web applications.
                    </p>
                    <button
                        className="bg-[#9b59b6] hover:bg-[#421156] text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        <Link to="/projects/all">
                            View My Work
                        </Link>
                    </button>
                </div>
            </section>

            {/* About me */}
            <section className="max-w-7xl mx-auto min-h-screen p-3">
                <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gray-950 dark:text-gray-100">
                    About <span className="text-theme">Me</span>
                </h2>
                <div className="grid grid-cols-1 py-5 md:grid-cols-2">
                    <Card
                        className="m-2"
                        imageSrc={codeGuyImg}
                        imageClass="rounded-t-md overflow-hidden"
                        children={
                            <div>
                                <table className="w-full my-5">
                                    <tbody>
                                        <tr>
                                            <th className="text-start w-full p-3 px-5 text-theme">Name</th>
                                            <td className="px-10">Shushant Pratap</td>
                                        </tr>
                                        <tr>
                                            <th className="text-start w-full p-3 px-5 text-theme">Age</th>
                                            <td className="px-10">21+</td>
                                        </tr>
                                        <tr>
                                            <th className="text-start w-full p-3 px-5 text-theme">Email</th>
                                            <td className="px-10">sunnypratap912@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <th className="text-start w-full p-3 px-5 text-theme">Address</th>
                                            <td className="px-10">India (New Delhi)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        }
                    />
                    <Card
                        className="m-2 p-8"
                        title="Who I Am"
                        titleClass="mb-6 text-theme"
                        paragraphClass="text-lg "
                        paragraph={
                            <span>Certainly, Shushant Pratap is a skilled web developer with a passion for creating innovative
                                and user-friendly websites. His journey in the world of web development began several years ago,
                                and since then, he has honed his skills to become a proficient and sought-after professional
                                in the field. Shushant's expertise encompasses a wide range of web technologies and
                                programming languages, including HTML, CSS, JavaScript, PHP, and more. He is known for his
                                ability to turn creative concepts into functional and visually appealing websites that
                                not only meet but exceed client expectations.
                                <br />
                                <br />
                                I thrive on learning new technologies and continuously improving my craft. My goal is to
                                create efficient, scalable, and beautiful web experiences that delight users.
                            </span>
                        }
                    />
                </div>
                <Card
                    className="p-8 m-2"
                    title="My Skills"
                    titleClass="mb-6"
                    children={skills.map((skillCategory, index) => (
                        <div key={index} className="mb-6 last:mb-0">
                            <h4 className="text-xl font-medium text-[#9b59b6] mb-3">{skillCategory.category}</h4>
                            <div className="flex flex-wrap gap-3">
                                {skillCategory.items.map((item, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-[#9b59b6] hover:text-white transition-colors duration-200"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                />
                <Card
                    className="bg-transparent! shadow-none! m-2 py-10"
                    title="Professional Skills"
                    children={
                        <div className="mt-5">
                            <h4 className="text-2xl font-medium text-start text-[#9b59b6] mb-3 m-2">Soft Skills</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-center">
                                <Card
                                    className="bg-transparent! flex flex-col items-center border-2 border-gray-100 m-2 p-5"
                                    title={<Layers size={50} className="mb-2" />}
                                    paragraph="Good"
                                    paragraphClass="text-md"
                                    children={<h4 className="text-xl text-theme">Creativity</h4>}
                                />
                                <Card
                                    className="bg-transparent! flex flex-col items-center border-2 border-gray-100 m-2 p-5"
                                    title={<Pencil size={50} className="mb-2" />}
                                    paragraph="Attractive"
                                    paragraphClass="text-md"
                                    children={<h4 className="text-xl text-theme">Web Design</h4>}
                                />
                                <Card
                                    className="bg-transparent! flex flex-col items-center border-2 border-gray-100 m-2 p-5"
                                    title={<CircleCheck size={50} className="mb-2" />}
                                    paragraph="Good"
                                    paragraphClass="text-md"
                                    children={<h4 className="text-xl text-theme">Problem Solver</h4>}
                                />
                            </div>

                            <h4 className="text-2xl font-medium text-start text-[#9b59b6] mt-10 mb-3 m-2">Hard Skills</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 text-center">
                                <Card
                                    className="bg-transparent! flex flex-col items-center border-2 border-theme m-2 p-5"
                                    title={<PenTool size={50} className="mb-2" />}
                                    paragraph="UI/UX Design"
                                    paragraphClass="text-md"
                                    children={<h4 className="text-xl text-theme">Projects 025+</h4>}
                                />
                                <Card
                                    className="bg-transparent! flex flex-col items-center border-2 border-theme m-2 p-5"
                                    title={<CodeXml size={50} className="mb-2" />}
                                    paragraph="Web Development"
                                    paragraphClass="text-md"
                                    children={<h4 className="text-xl text-theme">Projects 004</h4>}
                                />
                                <Card
                                    className="bg-transparent! flex flex-col items-center border-2 border-theme m-2 p-5"
                                    title={<BookCheck size={50} className="mb-2" />}
                                    paragraph="Web Research"
                                    paragraphClass="text-md"
                                    children={<h4 className="text-xl text-theme">Projects 300+</h4>}
                                />
                                <Card
                                    className="bg-transparent! flex flex-col items-center border-2 border-theme m-2 p-5"
                                    title={<ChartColumnStacked size={50} className="mb-2" />}
                                    paragraph="Marketing"
                                    paragraphClass="text-md"
                                    children={<h4 className="text-xl text-theme">Projects 002</h4>}
                                />
                                <Card
                                    className="p-5 m-2 bg-transparent! hover:bg-[#e8e7e7]! dark:hover:bg-[#1c1c1c]! transition!"
                                    title="000"
                                    titleClass="text-2xl text-theme"
                                    paragraph="Years of Experience"
                                    paragraphClass="text-lg"
                                />
                                <Card
                                    className="p-5 m-2 bg-transparent! hover:bg-[#e8e7e7]! dark:hover:bg-[#1c1c1c]! transition!"
                                    title="002+"
                                    titleClass="text-2xl text-theme"
                                    paragraph="Satisfied Customers"
                                    paragraphClass="text-lg"
                                />
                                <Card
                                    className="p-5 m-2 bg-transparent! hover:bg-[#e8e7e7]! dark:hover:bg-[#1c1c1c]! transition!"
                                    title="030+"
                                    titleClass="text-2xl text-theme"
                                    paragraph="Design Items"
                                    paragraphClass="text-lg"
                                />
                                <Card
                                    className="p-5 m-2 bg-transparent! hover:bg-[#e8e7e7]! dark:hover:bg-[#1c1c1c]! transition!"
                                    title="002+"
                                    titleClass="text-2xl text-theme"
                                    paragraph="Clients Served"
                                    paragraphClass="text-lg"
                                />
                            </div>
                        </div>
                    }

                />
            </section>

            {/* Top projects */}
            <section className="max-w-7xl mx-auto min-h-screen p-3">
                <h2 className="text-4xl md:text-5xl font-bold my-6 dark:text-gray-100">
                    Projects
                </h2>
            </section>

            {/* Contact */}
            <section className="max-w-7xl mx-auto min-h-screen p-3">
                <h2 className="text-4xl md:text-5xl font-bold my-6 dark:text-gray-100">
                    Contact
                </h2>
                <Card
                    className="m-2"
                    children={
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216636.03244900447!2d77.03608755204337!3d28.583341828266445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e1!3m2!1sen!2sin!4v1752944660042!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    }
                />
                <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
                    <Card
                        className="bg-transparent! shadow-none! m-2 p-5"
                        paragraph="You can also find me on:"
                        paragraphClass="text-2xl mt-4"
                        children={
                        <>
                            <div className="py-5 space-x-6">
                                <p className="flex my-2">
                                    <MapPinned size={30} strokeWidth={2} className="me-2" />
                                    India (New Delhi)
                                </p>
                                <p className="flex my-2">
                                    <Mail size={30} strokeWidth={2} className="me-2" />
                                    sunnypratap912@gmail.com
                                </p>
                            </div>

                            <div className="flex justify-start space-x-6">
                                <a
                                    href="https://github.com/ShushantPratap/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#9b59b6] transition-colors duration-300"
                                    title="GitHub Profile"
                                >
                                    <i className="fa fa-github text-4xl!" />
                                </a>
                                <a
                                    href="https://in.pinterest.com/shushantpratap/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#9b59b6] transition-colors duration-300"
                                    title="Pinterest Profile"
                                >
                                    <i className="fa fa-pinterest text-4xl!" />
                                </a>
                                <a href="https://www.instagram.com/web_ui_/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#9b59b6] transition-colors duration-300"
                                    title="Instagram Profile"
                                >
                                    <i className="fa fa-instagram text-4xl!" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/shushant-pratap-981b1b2b5/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#9b59b6] transition-colors duration-300"
                                    title="LinkedIn Profile"
                                >
                                    <i className="fa fa-linkedin-square text-4xl!" />
                                </a>
                            </div>
                        </>
                        }
                    />
                    <Card
                        className="m-2 p-8 md:p-10"
                        title={<>Get In <span className="text-[#9b59b6]">Touch</span></>}
                        titleClass="text-4xl md:text-5xl text-center mb-8"
                        paragraph="Have a question or want to work together? Feel free to reach out!"
                        paragraphClass="text-lg text-center mb-8"
                        children={
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-lg font-medium mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-3 border border-gray-400 rounded-md focus:ring-red-500 focus:border-red-500 dark:text-gray-100"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-lg font-medium dark:text-gray-100 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 border border-gray-400 rounded-md focus:ring-red-500 focus:border-red-500 dark:text-gray-100"
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-lg font-medium dark:text-gray-100 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        className="w-full px-4 py-3 border border-gray-400 rounded-md focus:ring-red-500 focus:border-red-500 dark:text-gray-100"
                                        placeholder="Your message..."
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#9b59b6] hover:bg-[#421156] text-white font-bold py-3 px-6 rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                                >
                                    Send Message
                                </button>
                            </form>
                        }
                    />
                </div>
            </section>
        </div>
    );
}

export default Home;