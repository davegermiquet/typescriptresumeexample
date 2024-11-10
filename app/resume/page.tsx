import JobExperience, { SoftwareSkills} from '../_components/jobexperience'
import Contact, {OverView} from '../_components/contact'

import { ListSkills} from '../_components/jobexperience'

export default  function resume() {


    return (
      <div className="div_main">
        <main className="main_class">
            <div className="flex flex-row w-full h-full">
              <div className="w-1/5 h-full flex flex-col text-left"> 
               <Contact/>
                  <ListSkills/>
                  <SoftwareSkills/>
              </div>
              <div className="w-3/5 py-2 text-justify">
              <OverView/>

              <br/>
              <h1 className="text-2xl font-bold py-2"> Work History</h1>
              <br/>
              <div className="flex flex-col">
              <JobExperience/>
              </div>
              </div>
            </div>
        </main>
      </div>
    );
  }
  