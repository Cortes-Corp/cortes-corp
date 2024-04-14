import AgentCards from "./AgentCards";
import AddAgentForm from "./AddAgentForm";

export default function Agents() {


  return (


    <div>
      <div className="w-full p-5">
        <div className="flex gap-5 items-center">
          <h1 className="text-xl font-medium">Agents</h1>
          <AddAgentForm></AddAgentForm>
              </div>
              <div className="w-full h-full">
                  <AgentCards></AgentCards> 
              </div>
       
      </div>
    </div>
  );
}
