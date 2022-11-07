import React, {useState, useEffect} from "react";
import Team from './Team';
function Teams() {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            fetch("https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?s=Soccer&c=Argentina")
            .then(res => res.json())
            .then(data => {
                setTeams(data.teams);
                setLoading(false);
            });            
        }, []
    );

    if(loading){
        return(        
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        )
    }else{
        return(        
            <div className="row gy-5">                   
                {teams.map(team => <Team strTeam={team.strTeam} strTeamBadge={team.strTeamBadge} strStadium={team.strStadium} strLeague={team.strLeague} /> )}            
            </div>
        )    
    }

    
}

export default Teams;