import { useState } from "react";
import "./bmi-report.css";
 
 export function BmiReport()
 {
    const[weight, setWeight] = useState(0);
    const[height, setHeight] = useState(0);
    const[bmi, setBmi] = useState(0);
    const[message, setMessage] = useState("");

        function handleWeChange(e){
            setWeight(e.target.value);
        }
            
        
        function handleHeChange(e)
        {
            setHeight(e.target.value);
        }
        function calBmi(e){

            e.preventDefault()
            if(weight==0 || height==0){
                alert('please set valid weight or height')

            }else{
               
                 let bmi = weight /((height/100) * height/100)
                
                setBmi(bmi.toFixed(1))

                if(bmi<18.5){
                    setMessage('you are underweight')

                }else if (bmi>=18 && bmi<=24.9){
                    setMessage('you are healthy weight')
                }else{
                    setMessage('you are over weight')
                }

                
            }
        }
            
        
    return(
        <div className="container-fluid">
            <h2>Bmi Report</h2>
            <div className="cover">
            <form onSubmit={calBmi} className="border border-3 border-primary p-4 m-2">
                <div>
                    <label>Weight(kg)</label>
                    <input type="text" placeholder="Enter your weight" value={weight} onChange={handleWeChange}/>
                        </div>

                        <div>
                    <label>Height(cm)</label>
                    <input type="text" placeholder="Enter your height" value={height} onChange={handleHeChange}/>
                </div>

                <div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>

                    <div className="center">
                        <h3>Your bmi:{bmi}</h3>
                        <p>{message}</p>
                    </div>
            </form>
            
            </div>
        </div>
    )
 }