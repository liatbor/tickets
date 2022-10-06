sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'tickets/MyTickets/test/integration/FirstJourney',
		'tickets/MyTickets/test/integration/pages/TicketList',
		'tickets/MyTickets/test/integration/pages/TicketObjectPage'
    ],
    function(JourneyRunner, opaJourney, TicketList, TicketObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('tickets/MyTickets') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTicketList: TicketList,
					onTheTicketObjectPage: TicketObjectPage
                }
            },
            opaJourney.run
        );
    }
);