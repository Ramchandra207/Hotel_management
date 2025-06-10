document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        const guestName = document.querySelector('input[name="guest_name"]').value;
        const roomType = document.querySelector('input[name="room_type"]').value;
        const checkIn = document.querySelector('input[name="check_in"]').value;
        const checkOut = document.querySelector('input[name="check_out"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const phone = document.querySelector('input[name="phone"]').value;

        if (!guestName || !roomType || !checkIn || !checkOut) {
            alert('Please fill in all required fields.');
            event.preventDefault();
            return;
        }

        if (checkOut <= checkIn) {
            alert('Check-out date must be after check-in date.');
            event.preventDefault();
            return;
        }

        if (email && !validateEmail(email)) {
            alert('Please enter a valid email address.');
            event.preventDefault();
            return;
        }

        if (phone && !/^[0-9]{10}$/.test(phone)) {
            alert('Please enter a valid 10-digit phone number.');
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
