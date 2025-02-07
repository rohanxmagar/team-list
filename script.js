// IPL Team Data
const teams = [
    {
        name: "CSK",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/1200px-Chennai_Super_Kings_Logo.svg.png",
        players: [
            { name: "MS Dhoni", role: "Wicketkeeper", price: "₹9 Cr" },
            { name: "Ravindra Jadeja", role: "All-rounder", price: "₹7 Cr" },
            { name: "Ruturaj Gaikwad", role: "Batsman", price: "₹6 Cr" }
        ],
        score: 1500
    },
    {
        name: "RCB",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png",
        players: [
            { name: "Virat Kohli", role: "Batsman", price: "₹8.5 Cr" },
            { name: "Faf du Plessis", role: "Batsman", price: "₹7.5 Cr" },
            { name: "Glenn Maxwell", role: "All-rounder", price: "₹7 Cr" }
        ],
        score: 1400
    },    {
        name: "RCB",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png",
        players: [
            { name: "Virat Kohli", role: "Batsman", price: "₹8.5 Cr" },
            { name: "Faf du Plessis", role: "Batsman", price: "₹7.5 Cr" },
            { name: "Glenn Maxwell", role: "All-rounder", price: "₹7 Cr" }
        ],
        score: 1400
    },    {
        name: "RCB",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png",
        players: [
            { name: "Virat Kohli", role: "Batsman", price: "₹8.5 Cr" },
            { name: "Faf du Plessis", role: "Batsman", price: "₹7.5 Cr" },
            { name: "Glenn Maxwell", role: "All-rounder", price: "₹7 Cr" }
        ],
        score: 1400
    },
    // Add more teams...
];

// Update Leaderboard
function updateLeaderboard() {
    const leaderboardList = document.getElementById('leaderboard-list');
    leaderboardList.innerHTML = teams
        .sort((a, b) => b.score - a.score)
        .map(team => `
            <div class="team-rank">
                <span>${team.name}</span>
                <span>${team.score} pts</span>
            </div>
        `).join('');
}

// Create Team Cards
function createTeamCards() {
    const teamListContainer = document.getElementById('team-list-container');
    teamListContainer.innerHTML = teams.map(team => `
        <div class="team-card">
            <div class="team-header">
                <img src="${team.logo}" alt="${team.name} Logo" class="team-logo">
                <h3 class="team-name">${team.name}</h3>
            </div>
            <div class="players-scroll">
                ${team.players.map(player => `
                    <div class="player-card">
                        <div>${player.name}</div>
                        <div>${player.role}</div>
                        <div>${player.price}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Initialize
updateLeaderboard();
createTeamCards();