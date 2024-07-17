import Image from 'next/image';
import React from 'react';

const yes = true;

const aboutMeParagraphs = [
  {
    text: 'Hello! My name is Junior, and I thrive on creating things that live on the internet. My journey into web development began in 2015 when I embarked on a project to build a gallery for my graphic design work. That experience taught me a lot about HTML and CSS and sparked my passion for web development.',
  },
  {
    text: 'Fast forward to today, I have had the privilege of participating in a 3-month software engineering immersive course, which allowed me to refine my skills and focus on real-world applications of software engineering principles and best practices.',
  },
  {
    text: 'I grew up in West Africa, Togo, and moved to the USA in 2010. My early interest in the arts led me to explore various creative avenues such as drawing, sketching, painting, and digital art. However, after high school, I discovered a new passion for building websites, which ultimately led me to a career in software engineering.',
  },
  {
    text: "After completing a software engineering bootcamp, I received an offer and started my career. Over the past three years, I've contributed significantly to building a leading decentralized exchange platform from the ground up. As the lead UI developer, I focus primarily on frontend development, ensuring that our products are both functional and visually appealing.",
  },
  {
    text: "Currently, I am expanding my expertise into cybersecurity, with a particular focus on ethical hacking.",
  },
  {
    text: 'Outside of tech, I am an avid fan of FC Barcelona. Although the team has faced challenges in recent years, I find solace in the remarkable success of my idol, Lionel Messi.',
  },
  {
    text: 'Languages: English (Fluent), French (Fluent), Ewe (Native)',
  },
];

// if (yes) return <h1>about me</h1>
const About = () => {
  return (
    <section
      className='pt-10 overflow-hidden bg-dark5  dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16 about-me-container'
     
    >
      <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
        <div className='grid items-center grid-cols-1 md:grid-cols-2'>
          <div>
            <h2 className='text-3xl font-bold leading-tight text-text2 dark:text-white sm:text-4xl lg:text-5xl'>
              Hey 👋 I am
              <br className='block sm:hidden' />
              <span className='block sm:inline-block text-accent1'>
                Junior Adessu
              </span>
              <p
                style={{
                  fontSize: '14px',
                  padding: '8px 0',
                  fontWeight: '300',
                }}
                className='text-text1'
              >
                Engineer, Programmer, Designer, Artist, Uncle, and above all,
                Human.
              </p>
            </h2>

            <div
              className=' overflow-y-auto mt-3 md:mt-8 about-me-paragraphs'
              style={{ maxHeight: '62vh' }}
            >
              {aboutMeParagraphs.map((p, idx) => (
                <p
                  key={idx}
                  className='max-w-lg text-xl leading-relaxed text-text2 dark:text-gray-300 p-y-8'
                  style={{ padding: '8px 0' }}
                >
                  {p.text}
                </p>
              ))}
            </div>

            <p className='mt-4 text-xl text-text1 dark:text-gray-300 md:mt-8'>
              <span className='relative inline-block'>
                <span
                  className='absolute inline-block w-full bottom-0.1 h-2 bg-yellow-300 dark:bg-gray-900'
                  style={{ marginTop: '2rem' }}
                ></span>
                <span className='relative'> Have a question? </span>
              </span>
              <br className='block sm:hidden' />
              Ask me on{' '}
              <a
                target='_blank'
                rel='noreferrer'
                href='https://x.com/jrthedeveloper'
                title=''
                className='transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline'
              >
                Twitter
              </a>
            </p>
          </div>

          <div className='relative'>
            <div className='absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2'>
              <Image
                src='/blob-shape.svg'
                alt=''
                layout='fill'
                objectFit='contain'
              />
            </div>

            <div className='relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110'>
              <Image
                src='/about.png'
                alt=''
                width={700}
                height={700}
                layout='responsive'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
