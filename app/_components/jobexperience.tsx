import { promises as fs } from 'fs';

async function JobExperience() {
  const file = await fs.readFile(process.cwd() + '/app/resume/data.json', 'utf8');
  const data = JSON.parse(file);

  interface JobExperiernceType {
    role: string;
    skills: string[];
    place: string;
    date: string;
  }
  const job_experience = data['job_experience']
   
      const jobExpierence = job_experience.map((experience:JobExperiernceType,index:number)  => (
        <div key={index} className="flex flex-row">
        
      <div className="flex-[10%] flex-col mr-3 text-left">
             {experience.date}
        </div>
        <div className="flex-[60%] text-justify">
          <div className="mb-2">
        <span className="font-bold">
          {experience.role} </span> <br/>
        <span className="italic">{experience.place}       </span> 
        </div>
          <ul className="list-disc">
          {experience.skills.map((skills:string,index2:number) => <li key={index2}>  {skills}  </li>)}
          </ul>
          </div>  
          </div>
      ))
    return (
      <div className="">
        {jobExpierence}
      </div>
    )
  }

  async function ListSkills() {
    const file = await fs.readFile(process.cwd() + '/app/resume/data.json', 'utf8');
    const data = JSON.parse(file);

    const universalskills = data['universalskills']
      const listItems = universalskills.map((skills:string,index:number)=> <li key={index}>{skills}</li>);
  
      return(
        <div>
        <h3 className="text-base bg-sky-400"> Skills </h3>
        <ul className="text-sm"> {listItems}</ul>
        </div>
      )

  }
  async function SoftwareSkills(){
    const file = await fs.readFile(process.cwd() + '/app/resume/data.json', 'utf8');
    const data = JSON.parse(file);

    const softwareSkills = data['softwareSkills']
    const softwareItems = softwareSkills.map((softwareSkill:string,index:number) =><span key={index}>{softwareSkill} </span>  );

  return( <div>
                <h3 className="text-base bg-sky-400"> Software </h3>
                  <p className="text-sm">
                  {softwareItems}
                  </p>
                  </div>)
  }
  export { ListSkills ,SoftwareSkills};
  export default JobExperience;
