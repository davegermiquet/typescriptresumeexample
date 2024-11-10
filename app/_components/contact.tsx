import { promises as fs } from 'fs';

export default async function Contact () {
    const file = await fs.readFile(process.cwd() + '/app/resume/data.json', 'utf8');
    const data = JSON.parse(file);

    const contact = data['contact']
    return (
        <div>
         <h1 className="text-2xl py-5 font-bold  ">{contact.name} </h1>
        <h2 className="text-lg"> {contact.Position} </h2>
        <br/>
        <h3 className="text-base bg-sky-400"> Contact </h3>
        <h4 className="text-sm font-bold" > Address   </h4>
        <p className="text-sm">
          {contact.City} <br/>
          {contact.PostalCode} <br/>
          {contact.Province} <br/>
        </p>
        <h4 className="text-sm font-bold" > Phone   </h4>
        <p className="text-sm">
        {contact.Phone}
        </p>
        <h4 className="text-sm font-bold" > E-mail  </h4>
        <p className="text-sm">
        {contact.email}
        </p>
        </div>)
}
function OverView() {
    return(
        <p className="text-base">
        Critical thinking DevOps Engineer with extensive understanding of high availability
        architecture and concepts. Purpose-driven professional with capacity to be strong team
        player plus work effectively independently.
        </p>
    )
}
export { OverView };