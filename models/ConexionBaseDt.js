import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema({
    NumeroTicket: [{
        numero: {
            type: Number,
            required: true,
        },
    }],
    ultimos4: [{
        numero: {
            type: Number,
            required: true,
        },
        Usuario: {
            type: String,
            required: true,
        },
    }],
}, { timestamps: true });


export default mongoose.model("Ticket", TicketSchema);