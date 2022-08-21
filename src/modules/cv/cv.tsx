import './cv.css';
import { Avatar, Type as AvatarType } from './../../components/avatar';
import { Main } from './components/main';
import { Sidebar } from './components/sidebar';
import { List, Style, Type as ListType } from './components/list/list';
import { Headline } from './components/headline';
import { Section, Type as TitleType } from './components/section';
import { PROJECTS_DATA, SKILLS_DATA } from './components/list/data';

const CV = () => {
    const techSkills = SKILLS_DATA.filter(({ type }) => type === "tech").map(item => item.skillName);
    const softSkills = SKILLS_DATA.filter(({ type }) => type === "soft").map(item => item.skillName);
    const projectsStack = PROJECTS_DATA.map(item => item.stack);
    const projectsLinks = PROJECTS_DATA.map(item => item.link);

    return (
        <div className="cv">
            <Main>
                <Section titleType={TitleType.DARK}>
                    <h4 className="main__vacancy">Front-End Developer</h4>
                    <h1 className="main__title"> Kateryna Kukuruzova</h1>
                    <p className="main__about description">Turning from Dentist to Software Engineer 💪🏻</p>
                </Section>
                <Section title="Projects" titleType={TitleType.DARK}>
                    <List data={projectsLinks} style={Style.DOTTED} type={ListType.DARK}>
                    </List>
                </Section>
                <Section title="Work Experience" titleType={TitleType.DARK}>
                    <Headline
                        text="Dentist"
                        accentText="Self-employed"
                        dates="July 2020 - December 2021"
                        country="Kyiv, Ukraine"
                        description="Drawing up a comprehensive treatment plan, patient management." />
                    <Headline
                        text="Leading Dentist"
                        accentText="Private dental clinic"
                        dates="July 2018 - March 2020"
                        country="Kharkiv, Ukraine"
                        description="Leading specialist in therapeutic and endodontic areas. 
                        Drawing up a comprehensive treatment plan, patient management.
                        Coordination of the work of specialists and interaction with the patient." />
                </Section>
                <Section title="Education" titleType={TitleType.DARK}>
                    <Headline
                        text="Dentistry"
                        accentText="Kharkiv National Medical University"
                        dates="September 2012 - June 2019"
                        country="Kharkiv, Ukraine" />
                </Section>
            </Main>
            <Sidebar>
                <Avatar
                    type={AvatarType.SQUARE}
                    alt="avatar"
                    imgUrl="/avatar.jpg"
                />
                <Section title="Contacts" titleType={TitleType.LIGHT}>
                    <List data={["+380950074194", "kukuruzova.ekaterina@gmail.com", "Kyiv, Ukraine ➡️ Barcelona, Spain"]} type={ListType.ACCENT} style={Style.CUSTOM} />
                </Section>
                <Section title="Tech Skills" titleType={TitleType.LIGHT}>
                    <List data={techSkills} type={ListType.ACCENT} />
                </Section>
                <Section title="Soft Skills" titleType={TitleType.LIGHT}>
                    <List data={softSkills} type={ListType.ACCENT} />
                </Section>
            </Sidebar>
        </div>
    );
};
export default CV;