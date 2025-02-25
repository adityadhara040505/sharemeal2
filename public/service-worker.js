self.addEventListener('push', function(event) {
    if (!event.data) return;

    const data = event.data.json();
    event.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.body,
            icon: data.icon,
            badge: '/badge.png',
            data: data.url
        })
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    if (event.notification.data) {
        event.waitUntil(clients.openWindow(event.notification.data));
    }
}); 