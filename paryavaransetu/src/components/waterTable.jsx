import React from "react";

function WaterTable(){
    return (
        <div className="water">
        <table className="water-table">
            <thead>
                <th>Parameter</th>
                <th colSpan={3}>Values</th>
            </thead>
            <tr>
                <td>Parameter Name</td>
                <td>Minimum</td>
                <td>Maximum</td>
                <td>Average</td>
            </tr>

            <tr className="data">
                <td>Temperature &deg;C </td>
                <td>20</td>
                <td>40</td>
                <td>30</td>
            </tr>
            <tr className="data">
                <td>Temperature &deg;C </td>
                <td>20</td>
                <td>40</td>
                <td>30</td>
            </tr>
            <tr className="data">
                <td>Temperature &deg;C </td>
                <td>20</td>
                <td>40</td>
                <td>30</td>
            </tr>
            <tr className="data">
                <td>Temperature &deg;C </td>
                <td>20</td>
                <td>40</td>
                <td>30</td>
            </tr>
            <tr className="data">
                <td>Temperature &deg;C </td>
                <td>20</td>
                <td>40</td>
                <td>30</td>
            </tr>
            <tr className="data">
                <td>Temperature &deg;C </td>
                <td>20</td>
                <td>40</td>
                <td>30</td>
            </tr>
            <tr className="data">
                <td>Temperature &deg;C </td>
                <td>20</td>
                <td>40</td>
                <td>30</td>
            </tr>
        </table>
        </div>
    )
}

export default WaterTable;