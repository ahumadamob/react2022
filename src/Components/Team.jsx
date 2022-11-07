import React from "react";

function Team({strTeam, strTeamBadge, strStadium, strLeague}) {
    return(
        <div className="col-md-2">
            <div className="card" style={{width: '18rem'}}>
                <div className="card-header">{strTeam}</div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><img src={strTeamBadge} className="teamBadge" alt={strTeam} /></li>
                    <li className="list-group-item">{strStadium}</li>
                    <li className="list-group-item">{strLeague}</li>
                    <li className="list-group-item"><button type="button" className="btn btn-info btn-sm">Ver Detalle</button></li>
                </ul>
            </div>        
        </div>


    );

}

export default Team;