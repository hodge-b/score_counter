export const setupApp = () => {
    return({
        app:{
            isGameAlive: false,
            modalView:{
                newGame: false,
                gameList: false,
                playerList: false,
                appInfo: false,
                addPlayer: false,
                partySelection: false
            }
        },
        gameData:{
            maxAmountOfPlayers: 8,
            currentGame:{
                title: '',
                maxScoring: '',
                maxRounds: '',
                isScoringAscending: true,
            },
        },
        players:[

        ],
        currentParty:[

        ]
    })
}

/* 
    player properties

    id - unique key for user
    name - player name
    wins - total wins
    loses - total loses
    winPercentage - current win percentage
    rival - player that is wins more often when played against
    highScore - player's high score
*/