// Function to show notifications
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove element after animation
    notification.addEventListener('animationend', () => {
        notification.remove();
    });
}

// Event delegation for IP clicks
document.addEventListener('click', function(event) {
    const ipElement = event.target.closest('.device-ip');
    
    if (ipElement) {
        const ipText = ipElement.textContent.trim();
        
        navigator.clipboard.writeText(ipText)
            .then(() => showNotification('IP copied: ' + ipText))
            .catch(_ => showNotification('Failed to copy IP'));
    }
});
