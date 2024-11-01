import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail', // or any email service you are using
    auth: {
        user: "yet to add",
        pass: "yet to add",
    },
});

export const sendEmailConfirmation = async (email, event_name, event_organizer, date, hall_name) => {
    const mailOptions = {
        from: "sridhar16701@gmail.com",
        to: email,
        subject: `Booking Confirmation for ${event_name}`,
        text: `Hello ${event_organizer},\n\nYour booking for the event "${event_name}" on ${date} has been successfully confirmed.\n\nThank you for choosing ${hall_name}!\n\nBest regards,\nEvent Hall Booking Team`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Booking confirmation email sent successfully.");
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

