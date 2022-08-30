import { AboutWrapper } from './about.styles';


const About = () => {
    return (
        <main>
            <AboutWrapper>
                <img src="https://images.squarespace-cdn.com/content/v1/5f5927c230cff20ef46fa743/1600367399861-0Y19HP9QJMOUPA5O8FBW/_DSC0410-Edit.jpg?format=500w" alt='abouutImage' />

                <article>
                    <div className='title'>
                        <h2> Our Story</h2>
                    </div>
                    <div className='underline'>

                    </div>
                    <p>
                        In an uncertain world, it feels more important than ever to spread some joy—mark ALL the moments, celebrate the small things, hug a friend (from afar!) and show your love—and balloons do it all and more.
                        <br />xoxo,
                        <br />Xanthe
                    </p>
                </article>

            </AboutWrapper>

        </main>
    )

};

export default About;
