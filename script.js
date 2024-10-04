document.addEventListener('DOMContentLoaded', function() {
    // Function to convert and display times in local timezone
    function displayBattleTimes() {
        // Define the battle start and finish times in UTC
        const battleStartTimeUTC = new Date(Date.UTC(2024, 8, 21, 16, 0)); // August is 7 because months are 0-indexed
        const battleFinishTimeUTC = new Date(Date.UTC(2024, 9, 5, 15, 0)); // September is 8

        // Convert to local timezone with specific format options
        const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true // Use 12-hour time format with AM/PM
        };

        const battleStartTimeLocal = battleStartTimeUTC.toLocaleString(undefined, options);
        const battleFinishTimeLocal = battleFinishTimeUTC.toLocaleString(undefined, options);

        // Display battle start and finish times in local timezone
        const battleStartElement = document.getElementById('battleStart');
        const battleFinishElement = document.getElementById('battleFinish');

        if (battleStartElement && battleFinishElement) {
            battleStartElement.textContent = `Battle start: ${battleStartTimeLocal}`;
            battleFinishElement.textContent = `Battle finished: ${battleFinishTimeLocal}`;
        } else {
            console.error('Battle time elements not found.');
        }
    }

    // Function to update and display the current local time
    function updateLocalTime() {
        const localTimeElement = document.getElementById('localTime');

        if (localTimeElement) {
            const localTime = new Date();
            localTimeElement.textContent = `Local time: ${localTime.toLocaleString()}`;
        } else {
            console.error('Local time element not found.');
        }
    }

    // Call functions to display times
    displayBattleTimes();
    updateLocalTime();

    // Update the local time every second
    setInterval(updateLocalTime, 1000);
});

function openModal() {
    const rewardsModal = document.getElementById('rewardsModal');
    if (rewardsModal) {
        rewardsModal.classList.remove('hidden');
    } else {
        console.error('Rewards modal element not found.');
    }
}

function closeModal() {
    const rewardsModal = document.getElementById('rewardsModal');
    if (rewardsModal) {
        rewardsModal.classList.add('hidden');
    } else {
        console.error('Rewards modal element not found.');
    }
}
