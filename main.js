// Get references to elements
const eventsContainer = document.getElementById('events-container');
const addEventBtn = document.getElementById('add-event-btn');
const sortEventsBtn = document.getElementById('sort-events-btn');
const filterEventsBtn = document.getElementById('filter-events-btn');
const clearEventsBtn = document.getElementById('clear-events-btn');
const searchInput = document.getElementById('search-input');

// Event data structure
const events = [];

// Function to add an event
function addEvent() {
    const eventName = prompt('Enter event name:');
    const eventDate = prompt('Enter event date (YYYY-MM-DD):');
    const eventLocation = prompt('Enter event location:');

    if (eventName && eventDate && eventLocation) {
        const newEvent = {
            name: eventName,
            date: new Date(eventDate),
            location: eventLocation
        };
        events.push(newEvent);
        renderEvents();
    }
}



// Function to render events
function renderEvents(filteredEvents = events) {
    eventsContainer.innerHTML = '';

    filteredEvents.forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.innerHTML = `
            <h3>${event.name}</h3>
            <p>Date: ${event.date.toLocaleDateString()}</p>
            <p>Location: ${event.location}</p>
        `;
        eventsContainer.appendChild(eventDiv);
    });
}

// Event listeners
addEventBtn.addEventListener('click', addEvent);
sortEventsBtn.addEventListener('click', sortEvents);
filterEventsBtn.addEventListener('click', filterEvents);
clearEventsBtn.addEventListener('click', clearEvents);
searchInput.addEventListener('input', filterEvents);

// Initial render
renderEvents();