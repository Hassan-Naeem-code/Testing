import React,{useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
const DATA = [
  {
    id: "1",
    name: "Ahesan",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    sales: "Known",
  },
  {
    id: "2",
    name: "Ahesan",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    sales: "Known",
  },
  {
    id: "3",
    name: "Ahesan",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    sales: "Known",
  },
  {
    id: "3",
    name: "Ahesan",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    sales: "Known",
  },
];

function App() {
  const data = useSelector(({ table }) => {
    return table.auth;
  });
const [isExpanded,setIsExpanded] = useState(false);
  console.log("Name is", data);
  const getId =(id,item)=>{
console.log("the data is ",item);
console.log("the data id is",id);
if(id == item.id){
setIsExpanded(true);
}
  }
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <table className="table table-bordered table-responsive">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Sale Person</th>
                  </tr>
                </thead>
                <tbody>
                  {DATA && DATA.length > 0
                    ? DATA.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{
                              isExpanded == false ? (item.description.substr(0,15)) : (item.description)}
                              <button onClick={()=>{getId(index,item)}}>
                              {
                                isExpanded == false ? ("See More"):("See Less")
                              }
                              </button>
                              </td>
                            <td>{item.sales}</td>
                          </tr>
                        );
                      })
                    : null}
                    
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
