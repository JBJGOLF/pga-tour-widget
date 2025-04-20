document.addEventListener('DOMContentLoaded', function() {
    // Time Update
    const timeEl = document.getElementById('pga-widget-update-time');
    if (timeEl) {
        updateDateTime();
        setInterval(updateDateTime, 300000); // Update every 5 minutes
    }

    // Tab Switching Event
    const container = document.getElementById('pga-tour-widget-container');
    if (container) {
        container.addEventListener('click', function(event) {
            const button = event.target.closest('.pga-widget-nav-btn');
            if (!button) return;

            const tabId = button.getAttribute('data-tab');
            if (!tabId) return;

            // Deactivate all tabs
            const tabButtons = container.querySelectorAll('.pga-widget-nav-btn');
            const tabContents = container.querySelectorAll('.pga-widget-tab-content');
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Activate selected tab
            button.classList.add('active');
            const selectedTab = document.getElementById(`pga-tab-${tabId}`);
            if (selectedTab) {
                selectedTab.classList.add('active');
            }
        });
    }

    // Time Update Function
    function updateDateTime() {
        const now = new Date();
        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        };
        timeEl.textContent = now.toLocaleString('en-US', options);
    }
});