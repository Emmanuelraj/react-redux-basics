import React from 'react';

 

 



class Hi extends Component
{
 
    render()
    {


 
        
    const data = [
        {
          "name": "Tomcat App",
          "id": "ID-16",
          "years": [
            {
              "Done": "5",
              "year": "2019",
              "Live": "5",
              "In Progress": "1",
              "Test/QA/Deploy/Communicate": "1"
            },
            {
              "To Do": "1",
              "Done": "1",
              "year": "2020",
              "In Progress": "1"
            }
          ]
        },
        {
          "name": "Migration",
          "id": "ID-21",
          "years": [
            {
              "year": "2019",
              "Live": "1"
            }
          ]
        },
        {
          "name": "Issues without epic",
          "id": "IWE",
          "years": [
            {
              "New": "1",
              "year": "2020",
              "In Progress": "2"
            }
          ]
        },
        {
          "name": "Sharepoint ",
          "id": "ID-22",
          "years": [
            {
              "To Do": "1",
              "Done": "1",
              "year": "2019",
              "Live": "5",
              "Test/QA/Deploy/Communicate": "1"
            }
          ]
        },
        {
          "name": "GIAM - Global Identity Access Management",
          "id": "ID-12",
          "years": [
            {
              "Prototype": "1",
              "year": "2019",
              "Live": "17"
            },
            {
              "Specify": "1",
              "year": "2020",
              "Live": "2",
              "In Progress": "1"
            }
          ]
        },
        {
          "name": "K2",
          "id": "ID-17",
          "years": [
            {
              "To Do": "4",
              "year": "2019",
              "Live": "17",
              "In Progress": "18",
              "Hold": "5",
              "Test/QA/Deploy/Communicate": "4"
            },
            {
              "Done": "4",
              "year": "2020",
              "Live": "4",
              "In Progress": "18",
              "Review": "1",
              "Hold": "1",
              "Test/QA/Deploy/Communicate": "3"
            }
          ]
        },
        {
          "name": "Service Now Development",
          "id": "ID-19",
          "years": [
            {
              "Done": "3",
              "To Do": "1",
              "year": "2019",
              "Live": "11",
              "In Progress": "1"
            }
          ]
        },
        {
          "name": "CMDB ",
          "id": "ID-161",
          "years": [
            {
              "Specify": "1",
              "year": "2020"
            }
          ]
        }
      ];
 
    const a = data.map (dt=>{
        return (
            <div className="a" key={Math.floor(Math.random() * 10)}>
                 hi
            </div>
        )
    })
 
    
        return(
            <div className="con">
           {a}
 
            </div>
        )
    }
}


export default Hi;