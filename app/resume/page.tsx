import JobExperience, { SoftwareSkills} from '../_components/jobexperience'
import Contact, {OverView} from '../_components/contact'

import { ListSkills} from '../_components/jobexperience'

export default  function resume() {


    return (
      <div className="div_main">
        <main className="main_class">
            <div className="flex-none lg:flex lg:flex-row mr-40 ml-5  mt-10">
              <div className="flex-none lg:flex lg:flex-col text-left pl-5 pr-7 mb-10"> 
              <div className="">
               <Contact/>
                  <ListSkills/>
                  <SoftwareSkills/>
              </div>
              </div>
              <div className="text-justify mr-40">
                <OverView/>
              <div className="mt-5 mb-5">
             <h1 className="text-2xl font-bold"> Work History</h1>
                </div>
                  <div className="flex flex-col">
                  <JobExperience/>
                  </div>
              </div>
            </div>
        </main>
      </div>
    );
  }
  